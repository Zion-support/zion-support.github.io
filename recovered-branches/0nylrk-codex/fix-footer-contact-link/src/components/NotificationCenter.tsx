
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
// Use the shared icon wrapper
import { Bell } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { toast } from 'sonner',
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
=======
import React, {_useState, _useEffect} from 'react';
// Use the shared icon wrapper
import {_NotificationFilter, _NotificationHeader, _NotificationList, _NotificationFooter} from '@/components/notifications';

export const NotificationCenter: React.FC = () => {_const { 
    filteredNotifications, _unreadCount, _markAsRead, _markAllAsRead, _dismissNotification, _loading, _filter, _setFilter, _fetchNotifications} = useNotifications();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),

  // Refresh notifications when popover opens
  useEffect__(() => {_if (open) {
      const _loadNotifications = async () => {
        try {
<<<<<<< HEAD
          await fetchNotifications(),
          setError(null)
        } catch (err) {
<<<<<<< HEAD
          console.error("Failed to fetch notifications:", err),
          setError("Couldn't load notifications"),
          toast.error("Failed to load notifications")
=======
          console.error(&quot;Failed to fetch notifications:&quot;, err);
          setError(&quot;Couldn't load notifications&quot;);
          toast.error(&quot;Failed to load notifications&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
      },
=======
          await fetchNotifications();
          setError(null);} catch (err) {_setError("Couldn't load notifications");
          toast.error("Failed to load notifications");}
      };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      loadNotifications()
    }
  }, [open, fetchNotifications]),

<<<<<<< HEAD
  const handleMarkAllAsRead = async () => {
    try {
<<<<<<< HEAD
      await markAllAsRead(),
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error("Failed to mark notifications as read:", err),
      toast.error("Failed to update notifications")
=======
      await markAllAsRead();
      toast.success(&quot;All notifications marked as read&quot;);
    } catch (err) {
      console.error(&quot;Failed to mark notifications as read:&quot;, err);
      toast.error(&quot;Failed to update notifications&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },
=======
  const _handleMarkAllAsRead = async () => {_try {
      await markAllAsRead();
      toast.success("All notifications marked as read");} catch (err) {_toast.error("Failed to update notifications");}
  };

  const _handleFilterChange = (_newFilter: FilterType) => {_setFilter(newFilter as any);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Popover open={_open} onOpenChange={_setOpen}>
      <PopoverTrigger asChild>
<<<<<<< HEAD
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;relative&quot;>
          <Bell className=&quot;h-5 w-5 text-zion-slate-light&quot; />
          {unreadCount > 0 && (
            <span className=&quot;absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium&quot;>
=======
        <Button variant="ghost" size="icon" className="relative">
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
