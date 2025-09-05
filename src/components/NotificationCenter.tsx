import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { useEnqueueSnackbar } from '@/context';
import {logErrorToProduction} from '@/utils/productionLogger';
import { 
  NotificationFilter, 
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';

export const NotificationCenter: React.FC = () => {
  const { 
    filteredNotifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications();
  
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedOnce, setLoadedOnce] = useState(false);
  const enqueueSnackbar = useEnqueueSnackbar();

  // Refresh notifications when popover opens, but avoid duplicate
  useEffect(() => {
    if (open && !loadedOnce) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications();
          setError(null);
        } catch (err) {
          logErrorToProduction('Failed to fetch notifications:', { data: err });
          setError(&quot;Couldn't load notifications&quot;);
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
        } finally {
          setLoadedOnce(true);
        }
      };

      loadNotifications();
    }
  }, [open, loadedOnce, fetchNotifications]);

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
      enqueueSnackbar(&quot;All notifications marked as read&quot;, { variant: 'success' });
    } catch (err) {
      logErrorToProduction('Failed to mark notifications as read:', { data: err });
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
    }
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any);
  };

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>
      <PopoverTrigger asChild>
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;relative&quot; aria-label=&quot;Open notifications&quot;>
          <Bell className=&quot;h-5 w-5 text-zion-slate-light&quot; />
          {unreadCount > 0 && (
            <span className=&quot;absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium&quot;>
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className=&quot;w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col&quot;>
        <NotificationHeader 
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />
        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />
        
        <NotificationList 
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}
        />
        
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};
