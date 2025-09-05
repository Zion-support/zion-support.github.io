<<<<<<< HEAD
import { useState, useCallback } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Notification, FilterType, NotificationContextType } from './types',

export const useNotificationOperations = (userId?: string): NotificationContextType => {
  const [notifications, setNotifications] = useState<Notification[]>([]),
  const [loading, setLoading] = useState(false),
  const [filter, setFilter] = useState<FilterType>('all'),

  const fetchNotifications = useCallback(async () => {
    if (!userId) return,
=======

export const _useNotificationOperations = (userId?: string): NotificationContextType => {_const [notifications, _setNotifications] = useState<Notification[]>([]);
  const [loading, _setLoading] = useState(false);
  const [filter, _setFilter] = useState<FilterType>('all');

  const _fetchNotifications = useCallback(_async () => {
    if (!userId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setLoading(true),
    try {
      const { data, _error} = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
<<<<<<< HEAD
        .order('created_at', { ascending: false }),

      if (error) throw error,
      setNotifications(data || [])
    } catch (err) {
      console.error('Error fetching notifications:', err)
    } finally {
      setLoading(false)
    }
  }, [userId]),

  const markAsRead = useCallback(async (id: string) => {
    if (!userId) return,
=======
        .order('created_at', {_ascending: false});

      if (error) throw error;
      setNotifications(data || []);
    } catch (err) {} finally {_setLoading(false);}
  }, [userId]);

  const _markAsRead = useCallback(_async (id: string) => {_if (!userId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    try {
      const { error} = await supabase
        .from('notifications')
        .update({_read: true})
        .eq('id', id)
        .eq('user_id', userId),

<<<<<<< HEAD
      if (error) throw error,
      await fetchNotifications()
    } catch (err) {
      console.error('Error marking notification as read:', err)
    }
  }, [userId, fetchNotifications]),

  const markAllAsRead = useCallback(async () => {
    if (!userId) return,
=======
      if (error) throw error;
      await fetchNotifications();
    } catch (err) {}
  }, [userId, fetchNotifications]);

  const _markAllAsRead = useCallback(_async () => {_if (!userId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    try {
      const { error} = await supabase
        .from('notifications')
        .update({_read: true})
        .eq('user_id', userId)
        .eq('read', false),

<<<<<<< HEAD
      if (error) throw error,
      await fetchNotifications()
    } catch (err) {
      console.error('Error marking all notifications as read:', err)
    }
  }, [userId, fetchNotifications]),

  const dismissNotification = useCallback(async (id: string) => {
    if (!userId) return,
=======
      if (error) throw error;
      await fetchNotifications();
    } catch (err) {}
  }, [userId, fetchNotifications]);

  const _dismissNotification = useCallback(_async (id: string) => {_if (!userId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    try {
      const { error} = await supabase
        .from('notifications')
        .delete()
        .eq('id', id)
        .eq('user_id', userId),

<<<<<<< HEAD
      if (error) throw error,
      await fetchNotifications()
    } catch (err) {
      console.error('Error dismissing notification:', err)
    }
  }, [userId, fetchNotifications]),
=======
      if (error) throw error;
      await fetchNotifications();
    } catch (err) {}
  }, [userId, fetchNotifications]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredNotifications = notifications.filter(notification => {_switch (filter) {
      case 'unread':
        return !notification.read,
      case 'messages':
        return notification.type === 'message',
      case 'onboarding':
        return notification.type === 'onboarding',
      case 'system':
<<<<<<< HEAD
        return notification.type === 'system',
      default: return true
    }
  }),

  const unreadCount = notifications.filter(n => !n.read).length,

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
    fetchNotifications}
},
=======
        return notification.type === 'system';
      default:
        return true;}
  });

  const _unreadCount = notifications.filter(n => !n.read).length;

  return {_notifications, _filteredNotifications, _unreadCount, _loading, _filter, _markAsRead, _markAllAsRead, _dismissNotification, _setFilter, _fetchNotifications};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
