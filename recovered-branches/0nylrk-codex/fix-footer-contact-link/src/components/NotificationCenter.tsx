
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
import { Bell } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { toast } from 'sonner';
import { 
  NotificationFilter, 
  NotificationHeader, 
  NotificationList, 
=======
import React{ useStateuseEffect } from 'react';
// Use the shared icon wrapper
import { Bell } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { PopoverContentPopoverTrigger } from '@/components/ui/popover';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { toast } from 'sonner';
import { 
  NotificationFilter
  NotificationHeader
  NotificationList
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  NotificationFooter 
} from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';

export const NotificationCenter: React.FC = () => {
  const { 
<<<<<<< HEAD
    filteredNotifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    dismissNotification, 
=======
    filteredNotifications
    unreadCount
    markAsRead
    markAllAsRead,
    dismissNotification
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications();
  
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
=======
  const [opensetOpen] = useState(false);
  const [errorsetError] = useState<string | null>(null);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications();
          setError(null);
        } catch (err) {
<<<<<<< HEAD
          console.error("Failed to fetch notifications:", err);
=======
          console.error("Failed to fetch notifications:"err);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          setError("Couldn't load notifications");
          toast.error("Failed to load notifications");
        }
      };
      
      loadNotifications();
    }
<<<<<<< HEAD
  }, [open, fetchNotifications]);
=======
  }[openfetchNotifications]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
      toast.success("All notifications marked as read");
    } catch (err) {
<<<<<<< HEAD
      console.error("Failed to mark notifications as read:", err);
=======
      console.error("Failed to mark notifications as read:"err);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      toast.error("Failed to update notifications");
    }
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
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
