
import React, {_useState, _useEffect} from 'react';
// Use the shared icon wrapper
import {_NotificationFilter, _NotificationHeader, _NotificationList, _NotificationFooter} from '@/components/notifications';

export const NotificationCenter: React.FC = () => {_const { 
    filteredNotifications, _unreadCount, _markAsRead, _markAllAsRead, _dismissNotification, _loading, _filter, _setFilter, _fetchNotifications} = useNotifications();
  
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refresh notifications when popover opens
  useEffect__(() => {_if (open) {
      const _loadNotifications = async () => {
        try {
          await fetchNotifications();
          setError(null);} catch (err) {_setError("Couldn't load notifications");
          toast.error("Failed to load notifications");}
      };
      
      loadNotifications();
    }
  }, [open, fetchNotifications]);

  const _handleMarkAllAsRead = async () => {_try {
      await markAllAsRead();
      toast.success("All notifications marked as read");} catch (err) {_toast.error("Failed to update notifications");}
  };

  const _handleFilterChange = (_newFilter: FilterType) => {_setFilter(newFilter as any);};

  return (
    <Popover open={_open} onOpenChange={_setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {_unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
        <NotificationHeader 
          unreadCount={_unreadCount} 
          onMarkAllAsRead={_handleMarkAllAsRead} 
        />
        
        <NotificationFilter 
          filter={_filter as FilterType} 
          onFilterChange={_handleFilterChange} 
        />
        
        <NotificationList 
          loading={_loading}
          error={_error}
          notifications={_filteredNotifications}
          onMarkAsRead={_markAsRead}
          onDismiss={_dismissNotification}
          onRetry={_fetchNotifications}
        />
        
        <NotificationFooter onClose={_() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};
