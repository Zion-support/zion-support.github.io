import { useState, useCallback, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { Notification, FilterType, NotificationContextType } from './types';

export const useNotificationOperations = (userId?: string): NotificationContextType => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');

  const fetchNotifications = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/notifications?userId=${userId}`);
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      setNotifications(data || []);
    } catch (err) {
      console.error('Error fetching notifications:', err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const markAsRead = useCallback(async (id: string) => {
    if (!userId) return;

    try {
      await fetch(`/api/notifications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true })
      });
      await fetchNotifications();
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  }, [userId, fetchNotifications]);

  const markAllAsRead = useCallback(async () => {
    if (!userId) return;

    try {
      await Promise.all(
        notifications
          .filter(n => !n.read)
          .map(n =>
            fetch(`/api/notifications/${n.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ read: true })
            })
          )
      );
      await fetchNotifications();
    } catch (err) {
      console.error('Error marking all notifications as read:', err);
    }
  }, [userId, fetchNotifications, notifications]);

  const dismissNotification = useCallback(async (id: string) => {
    if (!userId) return;

    try {
      await fetch(`/api/notifications/${id}`, { method: 'DELETE' });
      await fetchNotifications();
    } catch (err) {
      console.error('Error dismissing notification:', err);
    }
  }, [userId, fetchNotifications]);

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    notifications,
    filteredNotifications,
    unreadCount,
    loading,
    filter,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    setFilter,
    fetchNotifications,
  };
};
