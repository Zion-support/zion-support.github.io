
    // Set up real-time subscription for new notifications;
    if (user) {;
      const channel = supabase;
        .channel('notifications-changes');
        .on('postgres_changes', ;
          {;

