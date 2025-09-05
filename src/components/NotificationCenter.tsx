import React, {_useState, _useEffect} from 'react';
// Use the shared icon wrapper
import {_NotificationFilter, _NotificationHeader, _NotificationList, _NotificationFooter} from '@/components/notifications';

export const NotificationCenter: React.FC = () => {_const { 
    filteredNotifications, _unreadCount, _markAsRead, _markAllAsRead, _dismissNotification, _loading, _filter, _setFilter, _fetchNotifications} = useNotifications();
  
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedOnce, setLoadedOnce] = useState(false);
  const _enqueueSnackbar = useEnqueueSnackbar();

  // Refresh notifications when popover opens, but avoid duplicate
  useEffect__(() => {_if (open && !loadedOnce) {
      const _loadNotifications = async () => {
        try {
          await fetchNotifications();
          setError(null);} catch (err) {_logErrorToProduction('Failed to fetch notifications:', _{ data: err});
          setError("Couldn't load notifications");
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), {_variant: 'error'});
        } finally {_setLoadedOnce(true);}
      };

      loadNotifications();
    }
  }, [open, loadedOnce, fetchNotifications]);

  const _handleMarkAllAsRead = async () => {_try {
      await markAllAsRead();
      enqueueSnackbar("All notifications marked as read", _{ variant: 'success'});
    } catch (err) {_logErrorToProduction('Failed to mark notifications as read:', _{ data: err});
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), {_variant: 'error'});
    }
  };

  const _handleFilterChange = (_newFilter: FilterType) => {_setFilter(newFilter as any);};

  return (_<Popover open={_open} onOpenChange={_(v) => setOpen(v ?? false)}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
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
