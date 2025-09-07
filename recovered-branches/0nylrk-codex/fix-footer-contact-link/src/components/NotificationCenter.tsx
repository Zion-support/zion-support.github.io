<<<<<<< HEAD
import { Bell  } from '@/components/icons';
import { Button  } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger  } from '@/components/ui/popover';
import { useNotifications  } from '@/context/notifications/NotificationContext';
import { toast } from 'sonner';
import { NotificationFilter;
  NotificationHeader;
  NotificationList;
  NotificationFooter 
 } from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Use the shared icon wrapper;


import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Use the shared icon wrapper;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper

import React, { useState, useEffect } from 'react';

>>>>>>> merged-prs-20250907-203621
import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
<<<<<<< HEAD
=======
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
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
<<<<<<< HEAD
=======
    markAllAsRead;
    dismissNotification, ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    loading;
    filter;
    setFilter;
    fetchNotifications;
<<<<<<< HEAD
=======
  } = useNotifications();
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Use the shared icon wrapper
import { Bell } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { toast } from 'sonner',
<<<<<<< HEAD
import { 
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications',
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC = $2;
=======

    filteredNotifications,
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
    unreadCount, 
<<<<<<< HEAD
    markAsRead, 
    markAllAsRead,

    markAsRead, ;
    markAllAsRead;
    markAsRead, 
    markAllAsRead,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
<<<<<<< HEAD
  } = useNotifications($2);
  const [open, setOpen] = useState($2);
  const [error, setError] = useState<string | null>(null),

=======
  } = useNotifications(),
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
<<<<<<< HEAD
          await fetchNotifications($2);
          setError(null)
        } catch (err) {
          console.error($2);
          setError($2);
          toast.error("Failed to load notifications")
=======
<<<<<<< HEAD
=======

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          console.error("Failed to fetch notifications:", err),
          setError("Couldn't load notifications"),
          toast.error("Failed to load notifications")

<<<<<<< HEAD
        }
      }
      loadNotifications()
    }
  }, [open, fetchNotifications]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

=======
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
    markAllAsRead,;
    dismissNotification, ;
    loading,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
  ;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          await fetchNotifications(),;
          setError(null);
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications");
        }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          await fetchNotifications();

          setError(null);
        } catch (err) {;"
          console && console.error("Failed to fetch notifications:", err);'"
          setError("Couldn't load notifications");"
          toast && toast.error("Failed to load notifications");
        }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      loadNotifications();
    }
  }, [open, fetchNotifications]),
<<<<<<< HEAD
      };
      loadNotifications();
    }

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
=======

  const handleMarkAllAsRead = async () => {
    try {
      };

      loadNotifications();
    }

      };
      loadNotifications();
    }

<<<<<<< HEAD
  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
<<<<<<< HEAD
      toast.success("All notifications marked as read")"
    } catch (err) {
      }
      console.error("Failed to mark notifications as "read":", err),"
      toast.error("Failed to update notifications")"
    }
  }
  const handleFilterChange = ("newFilter": FilterType) => {
    }
    setFilter(newFilter as any)
  }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      toast.success("All notifications marked as read")
    } catch (err) {"
      console.error("Failed to mark notifications as read:", err),"
      toast.error("Failed to update notifications")
>>>>>>> origin/chore/fix-lint-and-merge
    }

  const handleFilterChange = (newFilter: FilterType) => {}
    setFilter(newFilter as any)
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>"
        <Button variant="ghost" size="icon" className="relative">"
          <Bell className="h-5 w-5 text-zion-slate-light" />

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [open, fetchNotifications]),;

  }, [open, fetchNotifications]);
  const handleMarkAllAsRead = async () => {;

    try {;
<<<<<<< HEAD
      await markAllAsRead();"
=======
      await markAllAsRead();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast && toast.success("All notifications marked as read");
    } catch (err) {;"
      console && console.error("Failed to mark notifications as read:", err);"
      toast && toast.error("Failed to update notifications");

    }
  };
  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };
<<<<<<< HEAD
=======
  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}
<<<<<<< HEAD

=======
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;
        <NotificationFilter
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />;
<<<<<<< HEAD

        <NotificationList

=======
        <NotificationList
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

        <NotificationList;

<<<<<<< HEAD
=======
        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />

        <NotificationList 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );

<<<<<<< HEAD
};
=======



<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          on_dismiss={dismiss_notification}
          on_retry={fetch_notifications}
        />;
        <NotificationFooter on_close={() => set_open (false)} />;
      </PopoverContent>;
    </Popover>);
}
;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          await fetchNotifications(),;
          setError(null),;
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications"),;
>>>>>>> merged-prs-20250907-203621
        }
      },;
      ;
      loadNotifications(),;
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }, [open, fetchNotifications]),

    try {
      await markAllAsRead($2);
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error($2);
      toast.error("Failed to update notifications")
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, [open, fetchNotifications]),;
;
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead(),;
      toast.success("All notifications marked as read"),;
    } catch (err) {;
      console.error("Failed to mark notifications as read:", err),;
      toast.error("Failed to update notifications"),;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

<<<<<<< HEAD
  const handleFilterChange = $2;
  return (
    <Popover open = $2;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
