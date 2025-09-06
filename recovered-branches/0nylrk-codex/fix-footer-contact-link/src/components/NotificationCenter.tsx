
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// Use the shared icon wrapper

=======
// Use the shared icon wrapper;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
<<<<<<< HEAD
export const NotificationCenter: React.FC = () => {
  const {
    filteredNotifications
    unreadCount
    markAsRead
    markAllAsRead;
    dismissNotification
=======
export const NotificationCenter: React.FC = () => {;
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
    markAllAsRead;
    dismissNotification, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    loading;
    filter;
    setFilter;
    fetchNotifications;
  } = useNotifications();
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
=======

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          await fetchNotifications();
          setError(null);
        } catch (err) {;
          console && console.error("Failed to fetch notifications:", err);
          setError("Couldn't load notifications");
          toast && toast.error("Failed to load notifications");
        }
<<<<<<< HEAD
      }
      loadNotifications()
    }
  }, [open, fetchNotifications]);
  const handleMarkAllAsRead = async () => {
    try {
=======
      };

      loadNotifications();
    }
  }, [open, fetchNotifications]);

  const handleMarkAllAsRead = async () => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await markAllAsRead();
      toast && toast.success("All notifications marked as read");
    } catch (err) {;
      console && console.error("Failed to mark notifications as read:", err);
      toast && toast.error("Failed to update notifications");
    }
<<<<<<< HEAD
  }
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  }
=======
  };

  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
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
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
        />
        <NotificationFilter
          filter={filter as FilterType}
          onFilterChange={handleFilterChange}
        />
=======
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;

        <NotificationFilter
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
}

=======
        />;

        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
