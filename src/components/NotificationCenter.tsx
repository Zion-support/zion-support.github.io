<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


    unreadCount
    markAsRead
  const handleFilterChange = (newFilter: FilterType,) => {
    setFilter(newFilter as any)
=======
    unread_count,
    markAsRead,
  const handleFilterChange = (new_filter: FilterType, ) =>: any {
    set_filter (new_filter as any);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    unreadCount, ;
    markAsRead, ;

  const handleFilterChange = (newFilter: FilterType,) => {;
    setFilter(newFilter as any);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
    <Popover open={open} onOpenChange={(v,) => setOpen(v ?? false)}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;
            <span className="absolute -top-0 && 0.5 -right-0 && 0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}
<<<<<<< HEAD
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
        <NotificationHeader
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />
        <NotificationFilter
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />
=======
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />;

        <NotificationFilter
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <NotificationList
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}
<<<<<<< HEAD
        />
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
}

=======
        />;

        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
},;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    <Popover open={open} onOpenChange={(v, ) => set_open (v ?? false)}>;
      <PopoverTrigger as_child>;
        <Button variant="ghost" size="icon" className="relative" aria - label="Open notifications">;
          <Bell className="h - 5 w - 5 text - zion - slate - light" />;
          {unread_count > 0 && (
            <span className="absolute -top - 0.5 -right - 0.5 flex h - 5 w - 5 items - center justify - center rounded - full bg - zion - cyan text-[10px] text - white font - medium">;
              {unread_count > 9 ? '9+' : unread_count}
            </span>)}
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p - 0 bg - zion - blue border - zion - blue - light max - h-[500px] flex flex - col">;
        <NotificationHeader;
          unread_count = {unread_count, }
          onMarkAllAsRead = {handleMarkAllAsRead, }
        />;
        <NotificationFilter;
          filter = {filter as FilterType, }
          onFilterChange = {handleFilterChange, }
        />;
        <NotificationList;
          loading = {loading, }
          error = {error, }
          notifications = {filtered_notifications, }
          onMarkAsRead = {markAsRead, }
          on_dismiss = {dismiss_notification, }
          on_retry = {fetch_notifications, }
        />;
        <NotificationFooter on_close={() => set_open (false)} />;
      </PopoverContent>;
    </Popover>);
},
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
