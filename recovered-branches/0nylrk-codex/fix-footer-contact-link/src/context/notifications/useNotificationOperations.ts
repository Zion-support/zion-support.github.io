<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Notification, FilterType, NotificationContextType } from './types';
<<<<<<< HEAD
export const useNotificationOperations = null;
=======
<<<<<<< HEAD

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {useState, useCallback} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Notification, FilterType, NotificationContextType} from './types';
<<<<<<< HEAD
export const useNotificationOperations = (userId?: string): NotificationContextType => {
=======
}

export const useNotificationOperations = (
  userId?: string
): NotificationContextType => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
export const useNotificationOperations = (userId?: string): NotificationContextType => {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const fetchNotifications = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setNotifications(data |[])
    } catch (err) {
      console.error('Error fetching notifications:', err)
    } finally {
      setLoading(false)
    }
  }, [userId]);
  const markAsRead = useCallback(async (id: string) => {
    if (!userId) return
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', id)
        .eq('user_id', userId);
      if (error) throw error;
      await fetchNotifications()
    } catch (err) {
      console.error('Error marking notification as read:', err)
    }
  }, [userId, fetchNotifications]);
  const markAllAsRead = useCallback(async () => {
    if (!userId) return;
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('user_id', userId)
        .eq('read', false);
      if (error) throw error;
      await fetchNotifications()
    } catch (err) {
      console.error('Error marking all notifications as read:', err)
    }
  }, [userId, fetchNotifications]);
  const dismissNotification = useCallback(async (id: string) => {
    if (!userId) return
    try {
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', id)
        .eq('user_id', userId);
      if (error) throw error;
      await fetchNotifications()
    } catch (err) {
      console.error('Error dismissing notification:', err)
    }
  }, [userId, fetchNotifications]);
  const filteredNotifications = notifications.filter(notification => {
    switch (filter) {
      case 'unread':
        return !notification.read;
      case 'messages':
        return notification.type === 'message';
      case 'onboarding':
        return notification.type === 'onboarding';
      case 'system':
        return notification.type === 'system';
      default: return true
    }
  });
  const unreadCount = notifications.filter(n => !n.read).length;
  return {
    notifications;
    filteredNotifications;
    unreadCount;
    loading;
    filter;
    markAsRead;
    markAllAsRead;
    dismissNotification;
=======
import { useState, useCallback } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Notification, FilterType, NotificationContextType } from './types',;
export const useNotificationOperations = (userId?: string): NotificationContextType => {;
  const [notifications, setNotifications] = useState<Notification[]>([]),;
  const [loading, setLoading] = useState(false),;
  const [filter, setFilter] = useState<FilterType>('all'),;
  const fetchNotifications = useCallback(async () => {;
    if (!userId) return,;
    setLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from('notifications');
        .select('*');
        .eq('user_id', userId);
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setNotifications(data || []);
    } catch (err) {;
      console.error('Error fetching notifications:', err);
    } finally {;
      setLoading(false);
    }
  }, [userId]),;
  const markAsRead = useCallback(async (id: string) => {;
    if (!userId) return,;
    try {;
      const { error } = await supabase;
        .from('notifications');
        .update({ read: true });
        .eq('id', id);
        .eq('user_id', userId),;
      if (error) throw error,;
      await fetchNotifications();
    } catch (err) {;
      console.error('Error marking notification as read:', err);
    }
  }, [userId, fetchNotifications]),;
  const markAllAsRead = useCallback(async () => {;
    if (!userId) return,;
    try {;
      const { error } = await supabase;
        .from('notifications');
        .update({ read: true });
        .eq('user_id', userId);
        .eq('read', false),;
      if (error) throw error,;
      await fetchNotifications();
    } catch (err) {;
      console.error('Error marking all notifications as read:', err);
    }
  }, [userId, fetchNotifications]),;
  const dismissNotification = useCallback(async (id: string) => {;
    if (!userId) return,;
    try {;
      const { error } = await supabase;
        .from('notifications');
        .delete();
        .eq('id', id);
        .eq('user_id', userId),;
      if (error) throw error,;
      await fetchNotifications();
    } catch (err) {;
      console.error('Error dismissing notification:', err);
    }
  }, [userId, fetchNotifications]),;
  const filteredNotifications = notifications.filter(notification => {;
    switch (filter) {;
      case 'unread':;
        return !notification.read,;
      case 'messages':;
        return notification.type === 'message',;
      case 'onboarding':;
        return notification.type === 'onboarding',;
      case 'system':;
        return notification.type === 'system',;
      default: return true;
    }
  }),;
  const unreadCount = notifications.filter(n => !n.read).length,;
  return {;
    notifications,;
    filteredNotifications,;
    unreadCount,;
    loading,;
    filter,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setFilter;
    fetchNotifications}
}

