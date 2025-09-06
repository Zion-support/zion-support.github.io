

  }
  return context
},

  // Load notifications when user changes
  useEffect(() => {
    notificationOps.fetchNotifications(),

    // Set up real-time subscription for new notifications
    if (user) {
      const channel = supabase
        .channel('notifications-changes')
        .on('postgres_changes'
          {
            event: '*'
            schema: 'public'
            table: 'notifications'
            filter: `user_id=eq.${user.id}`

          (payload) => {
            // // // console.log('Notification change received:', payload),
            notificationOps.fetchNotifications()
