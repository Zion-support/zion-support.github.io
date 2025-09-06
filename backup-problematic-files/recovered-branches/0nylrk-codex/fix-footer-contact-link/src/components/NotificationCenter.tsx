
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;

  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;

