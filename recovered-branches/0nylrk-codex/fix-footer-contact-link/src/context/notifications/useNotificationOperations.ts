
  }, [userId, fetchNotifications]),;
;
  const markAllAsRead = useCallback(async () => {;
    if (!userId) return,;
;
    try {;
      const { error } = await supabase;
        .from('notifications');
        .update({ read:true });
        .eq('user_id', userId);
        .eq('read', false),;
;
      if (error) throw error,;
      await fetchNotifications(),;
    } catch (err) {;
      console.error('Error marking all notifications as read:', err),;
    }
  }, [userId, fetchNotifications]),;
;
  const dismissNotification = useCallback(async (id:string) => {;
    if (!userId) return,;
;
    try {;
      const { error } = await supabase;
        .from('notifications');
        .delete();
        .eq('id', id);
        .eq('user_id', userId),;
;
      if (error) throw error,;
      await fetchNotifications(),;
    } catch (err) {;
      console.error('Error dismissing notification:', err),;

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
  }, [userId, fetchNotifications]),;
;
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
      default:return true;
    }
  }),;
;
  const unreadCount = notifications.filter(n => !n.read).length,;
;
  return {;
    notifications,;
    filteredNotifications,;
    unreadCount,;
    loading,;
    filter,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
    setFilter,;
    fetchNotifications},;},
 setLoading (true);
try {
  const {
  data, error 
}= await supabase .from ('notifications') .select ('*') .eq ('user id', userId) try {
  const {
  error 
}= await supabase .from ('notifications') .update ({
  read: true 
}) .eq ('id', id) .eq ('user id', userId);
try {
  const {
  error 
}= await supabase .from ('notifications') .update ({
  read: true 
}) .eq ('user id', userId) .eq ('read', false);
try {
  const {
  error 
}= await supabase .from ('notifications') .delete () .eq ('id', id) .eq ('user id', userId);
const filteredNotifications = notifications.filter (notification => {
  switch (filter) {
  case 'unread': return !notification.read;
case 'messages': return notification.type === 'message';
case 'onboarding': return notification.type === 'onboarding';

case 'system':
