import { useState, useCallback  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Notification, FilterType, NotificationContextType } from './types';
export const useNotificationOperations = (userId?: string): NotificationContextType => {
  const [notifications, setNotifications] = useState<Notification[]>([]),
  const [loading, setLoading] = useState($2);
  const [filter, setFilter] = useState<FilterType>('all'),

  const fetchNotifications = $2;
    setLoading($2);
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order($2);
      if (error) throw error,
      setNotifications(data || [])
    } catch (err) {
      console.error('Error fetching notifications:', err)
    } finally {
      setLoading(false)
    }
  }, [userId]),

  const markAsRead = $2;
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true})
        .eq('id', id)
        .eq($2);
      if (error) throw error,
      await fetchNotifications()
    } catch (err) {
      console.error('Error marking notification as read:', err)
    }
  }, [userId, fetchNotifications]),

  const markAllAsRead = $2;
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true})
        .eq('user_id', userId)
        .eq($2);
      if (error) throw error,
      await fetchNotifications()
    } catch (err) {
      console.error('Error marking all notifications as read:', err)
    }
  }, [userId, fetchNotifications]),

  const dismissNotification = $2;
    try {
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', id)
        .eq($2);
      if (error) throw error,
      await fetchNotifications()
    } catch (err) {
      console.error('Error dismissing notification:', err)
    }
  }, [userId, fetchNotifications]),

  const filteredNotifications = $2;
      case 'messages':
        return notification.type = $2;
      case 'onboarding':
        return notification.type = $2;
      case 'system':
        return notification.type = $2;
      default: return true
    }
  }),

  const unreadCount = $2;
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