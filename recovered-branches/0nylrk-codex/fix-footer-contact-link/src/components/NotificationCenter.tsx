<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// Use the shared icon wrapper;
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    loading;
    filter;
    setFilter;
    fetchNotifications;
<<<<<<< HEAD
  } = useNotifications();
'
import React, { useState, useEffect } from 'react','
import React, { useState, useEffect } from 'react',

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  } = useNotifications();

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react',

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

    dismissNotification,
=======
  } = useNotifications();    dismissNotification, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  } = useNotifications();    dismissNotification, 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
=======
// Use the shared icon wrapper
// Use the shared icon wrapper;

// Use the shared icon wrapper;

import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import React, { useState, useEffect } from 'react';

dismissNotification, 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    loading,
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),

  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import { Bell } from '@/components/icons',;
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
=======

  // Refresh notifications when popover opens;
  useEffect(() => {}
    if (open) {}
      const loadNotifications = async () => {}
        try {}
          await fetchNotifications(),
          setError(null)
        } catch (err) {}
          console.error("Failed to fetch notifications:", err),'"
          setError("Couldn't load notifications"),"
          toast.error("Failed to load notifications")

'
import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;'
import { Bell } from '@/components/icons',;'
import { Button } from '@/components/ui/button',;'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;'
import { useNotifications } from '@/context/notifications/NotificationContext',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from 'sonner',;
import {;
  NotificationFilter,;
  NotificationHeader,;
  NotificationList,;
  NotificationFooter;'
} from '@/components/notifications',;'
import { FilterType } from '@/components/notifications/NotificationFilter',;
export const NotificationCenter: React.FC = () => {;
  const {;
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;

    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;

  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          await fetchNotifications();
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          await fetchNotifications();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          setError(null);
        } catch (err) {;"
          console && console.error("Failed to fetch notifications:", err);'"
          setError("Couldn't load notifications");"
          toast && toast.error("Failed to load notifications");
        }

loadNotifications();
    }
  }, [open, fetchNotifications]),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  const handleMarkAllAsRead = async () => {
    try {
      };

      loadNotifications();
    }

      };
      loadNotifications();
    }

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
=======

      },;
      loadNotifications();
    }
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {}
    try {}
      await markAllAsRead(),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success("All notifications marked as read")
    } catch (err) {"
      console.error("Failed to mark notifications as read:", err),"
      toast.error("Failed to update notifications")
    }
}
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  }

  const handleFilterChange = (newFilter: FilterType) => {}
    setFilter(newFilter as any)
  },

=======

  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>"
        <Button variant="ghost" size="icon" className="relative">"
          <Bell className="h-5 w-5 text-zion-slate-light" />
{unreadCount > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [open, fetchNotifications]),;

  const handleMarkAllAsRead = async () => {;
=======
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">  const handleMarkAllAsRead = async () => {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">

  }, [open, fetchNotifications]),;

  }, [open, fetchNotifications]),;

  const handleMarkAllAsRead = async () => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {;
      await markAllAsRead();"
      toast && toast.success("All notifications marked as read");
    } catch (err) {;"
      console && console.error("Failed to mark notifications as read:", err);"
      toast && toast.error("Failed to update notifications");
<<<<<<< HEAD
    }

  };

  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };

return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;"
        <Button variant="ghost" size="icon" className="relative">;"
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

<<<<<<< HEAD
<<<<<<< HEAD
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}

</Button>;
      </PopoverTrigger>;"
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
<NotificationHeader
<<<<<<< HEAD
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;

        <NotificationFilter
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
;
      load_notifications ();
    }
  }, [open, fetch_notifications]);
;
  const handleMarkAllAsRead = async () => {}
    try {}
      await markAllAsRead ();"
      toast.success ("All notifications marked as read");
    } catch (err) {"
      console.error ("Failed to mark notifications as read:", err);"
      toast.error ("Failed to update notifications");
    }
  }
;
  const handleFilterChange = (new_filter: FilterType) =>: any {}
    set_filter (new_filter as any);
  }
;
  return (
    <Popover open={open} onOpenChange={set_open}>;
      <PopoverTrigger as_child>;"
        <Button variant="ghost" size="icon" className="relative">;"
          <Bell className="h - 5 w - 5 text - zion - slate - light" />;
          {unread_count > 0 && ("
            <span className="absolute -top - 0.5 -right - 0.5 flex h - 5 w - 5 items - center justify - center rounded - full bg - zion - cyan text-[10px] text - white font - medium">;'
              {unread_count > 9 ? '9+' : unread_count}
            </span>)}
        </Button>;
      </PopoverTrigger>;"
      <PopoverContent className="w-[350px] p - 0 bg - zion - blue border - zion - blue - light max - h-[500px] flex flex - col">;
        <NotificationHeader;
          unread_count={unread_count}

          onMarkAllAsRead={handleMarkAllAsRead}
        <NotificationFilter;
        />;
        <NotificationFilter;
          filter={filter as FilterType}
          onFilterChange={handleFilterChange}
/>;
        <NotificationList;
=======

        />
        <NotificationList;
        <NotificationFilter;
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />
        <NotificationList;
        />;
        <NotificationList;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
<<<<<<< HEAD
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}

};
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Use the shared icon wrapper;
// Use the shared icon wrapper;

pr-12325
import React, { useState, useEffect } from 'react';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
