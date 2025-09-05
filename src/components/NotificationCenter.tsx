<<<<<<< HEAD
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
=======
import React, {_useState, _useEffect} from 'react';
// Use the shared icon wrapper
import {_NotificationFilter, _NotificationHeader, _NotificationList, _NotificationFooter} from '@/components/notifications';

export const NotificationCenter: React.FC = () => {_const { 
    filteredNotifications, _unreadCount, _markAsRead, _markAllAsRead, _dismissNotification, _loading, _filter, _setFilter, _fetchNotifications} = useNotifications();
  
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedOnce, setLoadedOnce] = useState(false);
  const _enqueueSnackbar = useEnqueueSnackbar();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Refresh notifications when popover opens, but avoid duplicate
  useEffect__(() => {_if (open && !loadedOnce) {
      const _loadNotifications = async () => {
        try {
<<<<<<< HEAD
          await fetchNotifications(),
          setError(null)
        } catch (err) {
<<<<<<< HEAD
          logErrorToProduction('Failed to fetch notifications:', { data: err }),
          setError("Couldn't load notifications"),
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
=======
          logErrorToProduction('Failed to fetch notifications:', { data: err });
          setError(&quot;Couldn't load notifications&quot;);
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        } finally {
          setLoadedOnce(true)
        }
      },
=======
          await fetchNotifications();
          setError(null);} catch (err) {_logErrorToProduction('Failed to fetch notifications:', _{ data: err});
          setError("Couldn't load notifications");
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), {_variant: 'error'});
        } finally {_setLoadedOnce(true);}
      };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      loadNotifications()
    }
  }, [open, loadedOnce, fetchNotifications]),

<<<<<<< HEAD
  const handleMarkAllAsRead = async () => {
    try {
<<<<<<< HEAD
      await markAllAsRead(),
      enqueueSnackbar("All notifications marked as read", { variant: 'success' })
=======
      await markAllAsRead();
      enqueueSnackbar(&quot;All notifications marked as read&quot;, { variant: 'success' });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (err) {
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
=======
  const _handleMarkAllAsRead = async () => {_try {
      await markAllAsRead();
      enqueueSnackbar("All notifications marked as read", _{ variant: 'success'});
    } catch (err) {_logErrorToProduction('Failed to mark notifications as read:', _{ data: err});
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), {_variant: 'error'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },
=======
  const _handleFilterChange = (_newFilter: FilterType) => {_setFilter(newFilter as any);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Popover open={_open} onOpenChange={_(v) => setOpen(v ?? false)}>
      <PopoverTrigger asChild>
<<<<<<< HEAD
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;relative&quot; aria-label=&quot;Open notifications&quot;>
          <Bell className=&quot;h-5 w-5 text-zion-slate-light&quot; />
          {unreadCount > 0 && (
            <span className=&quot;absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium&quot;>
=======
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {_unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className=&quot;w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col&quot;>
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
  )
},
