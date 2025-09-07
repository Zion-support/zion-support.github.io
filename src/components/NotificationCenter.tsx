<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { useEnqueueSnackbar } from '@/context';
import {logErrorToProduction} from '@/utils/productionLogger';
import { 
  NotificationFilter;
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC = () => {
  const { 
    filteredNotifications;
    unreadCount, 
    markAsRead, 
    markAllAsRead;
    dismissNotification, 
    loading;
    filter;
    setFilter;
    fetchNotifications
  } = useNotifications();
  
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedOnce, setLoadedOnce] = useState(false);
  const enqueueSnackbar = useEnqueueSnackbar();

=======
unreadCount, ;
    markAsRead, ;

  const handleFilterChange = (newFilter: FilterType,) => {;


import React, { useState, useEffect } from 'react',
// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { useEnqueueSnackbar } from '@/context',
import {logErrorToProduction} from '@/utils/productionLogger',
import { 
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications',
import { FilterType } from '@/components/notifications/NotificationFilter',
export const NotificationCenter: React.FC = () => {
  const { 
    filteredNotifications,
<<<<<<< HEAD
    unreadCount, 

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications(),
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [loadedOnce, setLoadedOnce] = useState(false),
  const enqueueSnackbar = useEnqueueSnackbar(),

<<<<<<< HEAD
  const handleFilterChange = (newFilter: FilterType,) => {
    setFilter(newFilter as any)
  }
  return (
    <Popover open={open} onOpenChange={(v,) => setOpen(v ?? false)}>
>>>>>>> merged-prs-20250907-203621
  // Refresh notifications when popover opens, but avoid duplicate
  useEffect(() => {
    if (open && !loadedOnce) {
      const loadNotifications = async () => {
        try {
<<<<<<< HEAD
          await fetchNotifications();
          setError(null)
        } catch (err) {
          logErrorToProduction('Failed to fetch notifications:', { data: err }),
          setError("Couldn't load notifications");
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
        } finally {
          setLoadedOnce(true)
        }
      };

      loadNotifications()
    }
  }, [open, loadedOnce, fetchNotifications]);

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
=======
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          logErrorToProduction('Failed to fetch notifications:', { data: err }),
          setError("Couldn't load notifications"),
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
        } finally {
          setLoadedOnce(true)
import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { useEnqueueSnackbar } from '@/context',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  NotificationFilter,;
  NotificationHeader,;
  NotificationList,;
  NotificationFooter;
} from '@/components/notifications',;
import { FilterType } from '@/components/notifications/NotificationFilter',;
export const NotificationCenter: React.FC = () => {;
  const {;
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
    loading,;
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [loadedOnce, setLoadedOnce] = useState(false),;
  const enqueueSnackbar = useEnqueueSnackbar(),;
  // Refresh notifications when popover opens, but avoid duplicate;
  useEffect(() => {;
    if (open && !loadedOnce) {;
      const loadNotifications = async () => {;
        try {;
          await fetchNotifications(),;
          setError(null);
        } catch (err) {;
          logErrorToProduction('Failed to fetch notifications:', { data: err }),;
          setError("Couldn't load notifications"),;
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
        } finally {;
          setLoadedOnce(true);
        }
      },;
      loadNotifications();
    }
  }, [open, loadedOnce, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
>>>>>>> merged-prs-20250907-203621
      enqueueSnackbar("All notifications marked as read", { variant: 'success' })
    } catch (err) {
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
    }
<<<<<<< HEAD
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  };

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>
=======
  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
<<<<<<< HEAD
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
=======
<<<<<<< HEAD
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [open, loadedOnce, fetchNotifications]),;
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead(),;
      enqueueSnackbar("All notifications marked as read", { variant: 'success' });
    } catch (err) {;
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),;
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
    }
  },;
  const handleFilterChange = (newFilter: FilterType) => {;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
<<<<<<< HEAD
        <NotificationHeader 
=======
        <NotificationHeader
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />
        <NotificationFilter
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />
        <NotificationList
        <NotificationHeader 
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />
        <NotificationFilter 
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />
        <NotificationList 
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}
        />
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFilter(newFilter as any);
  };

  return (



          )}

        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />;

        <NotificationFilter
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />;


        <NotificationList
<<<<<<< HEAD
}

}

        <NotificationHeader 
};
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
        />
        
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
};
=======
        />;
=======
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}

        />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
<<<<<<< HEAD
};
        <NotificationHeader 
=======
},;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

<<<<<<< HEAD
        <NotificationHeader
=======
        <NotificationHeader
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
