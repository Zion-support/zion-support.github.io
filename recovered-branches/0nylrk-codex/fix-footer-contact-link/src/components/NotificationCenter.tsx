<<<<<<< HEAD
<<<<<<< HEAD
// Use the shared icon wrapper;


import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
=======

// Use the shared icon wrapper;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

// Use the shared icon wrapper;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
<<<<<<< HEAD
<<<<<<< HEAD
export const NotificationCenter: React.FC = () => {;

import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from '@/components/icons',;
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { toast } from 'sonner',;
import { ;
  NotificationFilter,;
  NotificationHeader, ;
  NotificationList, ;
  NotificationFooter ;
} from '@/components/notifications',;
import { FilterType } from '@/components/notifications/NotificationFilter',;
;
export const NotificationCenter:React.FC = () => {;
=======

export const NotificationCenter: React.FC = () => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export const NotificationCenter: React.FC = () => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    markAllAsRead;
    dismissNotification, ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    markAllAsRead;
    dismissNotification, ;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    loading;
    filter;
    setFilter;
    fetchNotifications;
  } = useNotifications();
<<<<<<< HEAD
<<<<<<< HEAD
export const NotificationCenter: React.FC = () => {
  const {
    filteredNotifications
    unreadCount
    markAsRead
    markAllAsRead;
    dismissNotification
    loading;
    filter;
    setFilter;
    fetchNotifications
  } = useNotifications();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react',
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react',


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    markAsRead, 
    markAllAsRead,

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    markAsRead, ;
    markAllAsRead;
    markAsRead, 
    markAllAsRead,
<<<<<<< HEAD
=======

    markAsRead, 
    markAllAsRead,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications(),
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          console.error("Failed to fetch notifications:", err),
          setError("Couldn't load notifications"),
          toast.error("Failed to load notifications")
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
      loadNotifications()
    }
  }, [open, fetchNotifications]);
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from '@/components/icons',;
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { toast } from 'sonner',;
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
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
    markAllAsRead,;
    dismissNotification, ;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    loading,;
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
<<<<<<< HEAD
  ;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;
<<<<<<< HEAD
<<<<<<< HEAD
          await fetchNotifications(),;
          setError(null);
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications");
        }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          await fetchNotifications();
          setError(null);
        } catch (err) {;
          console && console.error("Failed to fetch notifications:", err);
          setError("Couldn't load notifications");
          toast && toast.error("Failed to load notifications");
        }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      },;
      loadNotifications();
    }
  }, [open, fetchNotifications]),
<<<<<<< HEAD
<<<<<<< HEAD
      };
      loadNotifications();
    }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error("Failed to mark notifications as read:", err),
      toast.error("Failed to update notifications")
    }
  }
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  }
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleMarkAllAsRead = async () => {
    try {
=======
      };

      loadNotifications();
    }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [open, fetchNotifications]),;

  }, [open, fetchNotifications]);
  const handleMarkAllAsRead = async () => {;
    try {;
=======
  }, [open, fetchNotifications]),;

  const handleMarkAllAsRead = async () => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await markAllAsRead();
      toast && toast.success("All notifications marked as read");
    } catch (err) {;
      console && console.error("Failed to mark notifications as read:", err);
      toast && toast.error("Failed to update notifications");
    }
<<<<<<< HEAD
  };
  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };
=======

  };

  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;


<<<<<<< HEAD
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
<<<<<<< HEAD
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;
        <NotificationFilter
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />;
        <NotificationList
// Use the shared icon wrapper;
import {Bell} from '@/components / icons';
import {Button} from '@/components / ui / button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';
import {use_notifications} from '@/context / notifications / NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components / notifications';
import {FilterType} from '@/components / notifications / NotificationFilter';
export const NotificationCenter: React.FC = () => {
  const {
    filtered_notifications,
    unread_count,
    markAsRead,
    markAllAsRead;
    dismiss_notification,
    loading;
    filter;
    set_filter;
    fetch_notifications;
  } = use_notifications ();
;
  const [open, set_open] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  // Refresh notifications when popover opens;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const load_notifications = async () => {
        try {
          await fetch_notifications ();
          set_error (null);
        } catch (err) {
          console.error ("Failed to fetch notifications:", err);
          set_error ("Couldn't load notifications");
          toast.error ("Failed to load notifications");
        }
      }
;
      load_notifications ();
    }
  }, [open, fetch_notifications]);
;
  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead ();
      toast.success ("All notifications marked as read");
    } catch (err) {
      console.error ("Failed to mark notifications as read:", err);
      toast.error ("Failed to update notifications");
    }
  }
;
  const handleFilterChange = (new_filter: FilterType) =>: any {
    set_filter (new_filter as any);
  }
;
  return (
    <Popover open={open} onOpenChange={set_open}>;
      <PopoverTrigger as_child>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h - 5 w - 5 text - zion - slate - light" />;
          {unread_count > 0 && (
            <span className="absolute -top - 0.5 -right - 0.5 flex h - 5 w - 5 items - center justify - center rounded - full bg - zion - cyan text-[10px] text - white font - medium">;
              {unread_count > 9 ? '9+' : unread_count}
            </span>)}
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p - 0 bg - zion - blue border - zion - blue - light max - h-[500px] flex flex - col">;
        <NotificationHeader;
          unread_count={unread_count}
=======
          unreadCount={unreadCount}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onMarkAllAsRead={handleMarkAllAsRead}
        />;
        <NotificationFilter;
          filter={filter as FilterType}
          onFilterChange={handleFilterChange}
<<<<<<< HEAD
        />;
        <NotificationList;

        
=======
        />
        <NotificationList
        
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />

        <NotificationList 
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}




<<<<<<< HEAD
        />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
        />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );




<<<<<<< HEAD
<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          on_dismiss={dismiss_notification}
          on_retry={fetch_notifications}
        />;
        <NotificationFooter on_close={() => set_open (false)} />;
      </PopoverContent>;
    </Popover>);
}
;
<<<<<<< HEAD
          await fetchNotifications(),;
          setError(null),;
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications"),;
        }
      },;
      ;
      loadNotifications(),;
    }
  }, [open, fetchNotifications]),;
;
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead(),;
      toast.success("All notifications marked as read"),;
    } catch (err) {;
      console.error("Failed to mark notifications as read:", err),;
      toast.error("Failed to update notifications"),;
    }
  },;
;
  const handleFilterChange = (newFilter:FilterType) => {;
    setFilter(newFilter as any);
  },;
;
  }, [open, fetchNotifications]),;
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead(),;
      toast.success("All notifications marked as read");
    } catch (err) {;
      console.error("Failed to mark notifications as read:", err),;
      toast.error("Failed to update notifications");
    }
  },;
  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };
  return (;
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;
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
  )
}

        />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
