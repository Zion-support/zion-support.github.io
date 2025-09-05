
export const _useNotificationOperations = (userId?: string): NotificationContextType => {_const [notifications, _setNotifications] = useState<Notification[]>([]);
  const [loading, _setLoading] = useState(false);
  const [filter, _setFilter] = useState<FilterType>('all');

  const _fetchNotifications = useCallback(_async () => {
    if (!userId) return;

    setLoading(true);
    try {
      const { data, _error} = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', {_ascending: false});

      if (error) throw error;
      setNotifications(data || []);
    } catch (err) {} finally {_setLoading(false);}
  }, [userId]);

  const _markAsRead = useCallback(_async (id: string) => {_if (!userId) return;

    try {
      const { error} = await supabase
        .from('notifications')
        .update({_read: true})
        .eq('id', id)
        .eq('user_id', userId);

      if (error) throw error;
      await fetchNotifications();
    } catch (err) {}
  }, [userId, fetchNotifications]);

  const _markAllAsRead = useCallback(_async () => {_if (!userId) return;

    try {
      const { error} = await supabase
        .from('notifications')
        .update({_read: true})
        .eq('user_id', userId)
        .eq('read', false);

      if (error) throw error;
      await fetchNotifications();
    } catch (err) {}
  }, [userId, fetchNotifications]);

  const _dismissNotification = useCallback(_async (id: string) => {_if (!userId) return;

    try {
      const { error} = await supabase
        .from('notifications')
        .delete()
        .eq('id', id)
        .eq('user_id', userId);

      if (error) throw error;
      await fetchNotifications();
    } catch (err) {}
  }, [userId, fetchNotifications]);

  const _filteredNotifications = notifications.filter(notification => {_switch (filter) {
      case 'unread':
        return !notification.read;
      case 'messages':
        return notification.type === 'message';
      case 'onboarding':
        return notification.type === 'onboarding';
      case 'system':
        return notification.type === 'system';
      default:
        return true;}
  });

  const _unreadCount = notifications.filter(n => !n.read).length;

  return {_notifications, _filteredNotifications, _unreadCount, _loading, _filter, _markAsRead, _markAllAsRead, _dismissNotification, _setFilter, _fetchNotifications};
};