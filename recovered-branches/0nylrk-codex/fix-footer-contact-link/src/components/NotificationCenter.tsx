<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx

<<<<<<< HEAD

=======
// Use the shared icon wrapper;

========
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
=======

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// Use the shared icon wrapper

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
export const NotificationCenter: React.FC = () => {;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
<<<<<<< HEAD
    markAllAsRead;
    dismissNotification, ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
    loading;
    filter;
    setFilter;
    fetchNotifications;
  } = useNotifications();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx



=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from 'react',
=======
=======
import React, { useState, useEffect } from 'react',
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
    markAsRead, 
    markAllAsRead,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    markAsRead, ;
    markAllAsRead;
=======
    markAsRead, 
    markAllAsRead,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
<<<<<<< HEAD


  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          console.error("Failed to fetch notifications:", err),
          setError("Couldn't load notifications"),
          toast.error("Failed to load notifications")
<<<<<<< HEAD
<<<<<<< HEAD

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error("Failed to mark notifications as read:", err),
      toast.error("Failed to update notifications")
    }

=======

=======
        }
      }
      loadNotifications()
    }
  }, [open, fetchNotifications]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
=======
    markAllAsRead,;
    dismissNotification, ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    loading,;
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;

========
  ;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
=======
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;
<<<<<<< HEAD
<<<<<<< HEAD
          await fetchNotifications();
          setError(null);
        } catch (err) {;
          console && console.error("Failed to fetch notifications:", err);
          setError("Couldn't load notifications");
          toast && toast.error("Failed to load notifications");
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx

=======
          await fetchNotifications(),;
          setError(null);
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications");
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },;
      loadNotifications();
    }
  }, [open, fetchNotifications]),
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleMarkAllAsRead = async () => {
    try {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
      };
      loadNotifications();
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error("Failed to mark notifications as read:", err),
      toast.error("Failed to update notifications")
    }
<<<<<<< HEAD
  }
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  }, [open, fetchNotifications]),;

========
  }, [open, fetchNotifications]);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead();
      toast && toast.success("All notifications marked as read");
    } catch (err) {;
      console && console.error("Failed to mark notifications as read:", err);
      toast && toast.error("Failed to update notifications");
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
  };
  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
<<<<<<< HEAD
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
        />

        <NotificationList 

=======
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;
        <NotificationFilter
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
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
          onMarkAllAsRead={handleMarkAllAsRead}
        />;
        <NotificationFilter;
          filter={filter as FilterType}
          onFilterChange={handleFilterChange}
        />;
        <NotificationList;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

        
=======
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />

        <NotificationList 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
<<<<<<< HEAD
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}

=======




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
        />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );

<<<<<<< HEAD
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
          on_dismiss={dismiss_notification}
          on_retry={fetch_notifications}
        />;
        <NotificationFooter on_close={() => set_open (false)} />;
      </PopoverContent>;
    </Popover>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;
<<<<<<< HEAD
              {unreadCount > 9 ? '9+' :unreadCount}
            </span>;
          )}
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader ;
          unreadCount={unreadCount} ;
          onMarkAllAsRead={handleMarkAllAsRead} ;
        />;
        ;
        <NotificationFilter ;
          filter={filter as FilterType} ;
          onFilterChange={handleFilterChange} ;
        />;
        ;
        <NotificationList ;
          loading={loading}          error={error}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
        <NotificationFilter
          filter={filter as FilterType}
          onFilterChange={handleFilterChange}
        />
<<<<<<< HEAD
        <NotificationList
=======
        
=======
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <NotificationList 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          loading={loading}
          error={error}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}
<<<<<<< HEAD
        />;
        ;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  ),;
},; const [open, setOpen] = useState (false);
const [error, setError] = useState<string | null> (null);
//Refresh notifications when popover opens useEffect ( () => {
  if (open) {
  const loadNotifications = async () => {
  try {
  
}
};
}
}, [open, fetchNotifications]);
}
};
const handleFilterChange = (newFilter: FilterType) => {
  setFilter (newFilter as any) 
};
open 
}onOpenChange= {
  setOpen 
}> <PopoverTrigger asChild> {
  unreadCount > 9 ? '9+' : unreadCount 
}</span>) 
}</Button> </PopoverTrigger> <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col" > <NotificationHeader unreadCount= {
  unreadCount 
}onMarkAllAsRead= {
  handleMarkAllAsRead 
}/> <NotificationFilter filter= {
  filter as FilterType 
}onFilterChange= {
  handleFilterChange 
}/> <NotificationList loading= {
  loading 
}error= {
  error 
}notifications= {
  filteredNotifications 
}onMarkAsRead= {
  markAsRead 
}onDismiss= {
  dismissNotification 
}onRetry= {
  fetchNotifications 
}/> <NotificationFooter onClose= {
  () => setOpen (false) 
}/> </PopoverContent> </Popover>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NotificationCenter.tsx
=======
<<<<<<< HEAD
        />
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
