
// Use the shared icon wrapper;

import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper

import React, { useState, useEffect } from 'react';

import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';

export const NotificationCenter: React.FC = () => {;
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
    markAllAsRead;
    dismissNotification, ;
    loading;
    filter;
    setFilter;
    fetchNotifications;


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
  } = useNotifications();    dismissNotification, 
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC = $2;
    unreadCount, 
    markAsRead, ;
    markAllAsRead;
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications(),
const [open, setOpen] = useState(false),;
const [error, setError] = useState<string | null>(null),;
  // Refresh notifications when popover opens,
useEffect(() => {
    }
    if (open) {
      }
      const loadNotifications = async () => {
        }
        try {import React, { useState, useEffect } from 'react';'
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);


          await fetchNotifications(),
          setError(null)
        } catch (err) {
          console.error("Failed to fetch notifications:", err),
          setError("Couldn't load notifications"),
          toast.error("Failed to load notifications")

import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from '@/components/icons';'
import { Button } from '@/components/ui/button',;'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;'
import { useNotifications } from '@/context/notifications/NotificationContext',;'
import { toast } from 'sonner',;'
import {;
  }
  NotificationFilter,;
  NotificationHeader,;
  NotificationList,;
  NotificationFooter;
} from '@/components/notifications',;'
import { FilterType } from '@/components/notifications/NotificationFilter',;'
export const 'NotificationCenter': React.FC = () => {;
  }
  const {;
    }
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;


    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;

  ;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;

  // Refresh notifications when popover opens;
  useEffect(() => {;
    }
    if (open) {;
      }
      const loadNotifications = async () => {;
        }
        try {;


          await fetchNotifications();

          setError(null);
        } catch (err) {;"
          console && console.error("Failed to fetch notifications:", err);'"
          setError("Couldn't load notifications");"
          toast && toast.error("Failed to load notifications");
        }

      loadNotifications();
    }
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    }
    try {  const handleMarkAllAsRead = async () => {
    }
    try {
      }
      await markAllAsRead(),
      toast.success('All notifications marked as read')'
  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      toast.success("All notifications marked as read")"
    } catch (err) {
      }
      console.error('Failed to mark notifications as 'read':', err),'
      toast.error('Failed to update notifications')'
    }
  }
  const handleFilterChange = ('newFilter': FilterType) => {
    }
    setFilter(newFilter as any)
  }


      toast.success("All notifications marked as read")
    } catch (err) {"
      console.error("Failed to mark notifications as read:", err),"
      toast.error("Failed to update notifications")
    }
    setFilter(newFilter as any)
  },
return (;
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className='relative'>'
          <Bell className='h-5 w-5 text-zion-slate-light' />'
          {unreadCount > 0 && (
            <span className='absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium'>  const handleMarkAllAsRead = async () => {;'
    }
    try {;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>"
        <Button variant="ghost" size="icon" className="relative">"
          <Bell className="h-5 w-5 text-zion-slate-light" />

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">

  }, [open, fetchNotifications]),;

  const handleMarkAllAsRead = async () => {;

    try {;
      await markAllAsRead();"
  }, [open, fetchNotifications]),;

  }, [open, fetchNotifications]);
  const handleMarkAllAsRead = async () => {;

    try {;

      await markAllAsRead();"
      toast && toast.success("All notifications marked as read");
    } catch (err) {;"
      console && console.error("Failed to mark notifications as read:", err);"
      toast && toast.error("Failed to update notifications");

    }

  };

  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };

              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}


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

        <NotificationList;
// Use the shared icon wrapper;'
import {Bell} from '@/components / icons';'
import {Button} from '@/components / ui / button';'
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';'
import {use_notifications} from '@/context / notifications / NotificationContext';'
import {toast} from 'sonner';'
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components / notifications';'

import {FilterType} from '@/components / notifications / NotificationFilter';
export const NotificationCenter: React.FC = () => {}
  const {}
    filtered_notifications,
    unread_count,
    markAsRead,;
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
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      const load_notifications = async () => {}
        try {}
          await fetch_notifications ();
          set_error (null);
        } catch (err) {"
          console.error ("Failed to fetch notifications:", err);'"
          set_error ("Couldn't load notifications");"
          toast.error ("Failed to load notifications");
        }
      }
      await markAllAsRead();
      toast && toast.success('All notifications marked as read');'
    } catch (err) {;
      }
      console && console.error('Failed to mark notifications as 'read':', err);'
      toast && toast.error('Failed to update notifications');'
    }        />;
        <NotificationList;
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead} />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  )
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}


        />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );


};
          on_dismiss={dismiss_notification}
          on_retry={fetch_notifications}
        />;
        <NotificationFooter on_close={() => set_open (false)} />;
      </PopoverContent>;
    </Popover>);
}
;


          await fetchNotifications(),;
          setError(null),;
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications"),;
        }
      },
      
      loadNotifications()
    }
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead($2);
      toast.success('All notifications marked as read')
    } catch (err) {
      console.error($2);
      toast.error('Failed to update notifications')
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
  },

  const handleFilterChange = $2;
  return (
    <Popover open = $2;
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
