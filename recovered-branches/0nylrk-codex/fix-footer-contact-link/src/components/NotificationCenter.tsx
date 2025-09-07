<<<<<<< HEAD
import React, { useState, useEffect } from 'react';'
import {Bell} from '@/components/icons';'
import {Button} from '@/components/ui/button';'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';'
import {useNotifications} from '@/context/notifications/NotificationContext';'
import {toast} from 'sonner';'
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';'
import {FilterType} from '@/components/notifications/NotificationFilter';'
export const 'NotificationCenter': React.FC = () => {;  const { ;
    }
=======
<<<<<<< HEAD
// Use the shared icon wrapper;

=======
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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper

import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
<<<<<<< HEAD

export const NotificationCenter: React.FC = () => {;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { ;
>>>>>>> origin/resolved-merge-conflicts
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
    markAllAsRead;
    dismissNotification, ;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    loading;
    filter;
    setFilter;
    fetchNotifications;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  } = useNotifications();
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react',
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
// Use the shared icon wrapper
import { Bell } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { toast } from 'sonner',
<<<<<<< HEAD
=======
<<<<<<< HEAD

    filteredNotifications,

import React, { useState, useEffect } from 'react';

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
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
=======
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          console.error("Failed to fetch notifications:", err),
          setError("Couldn't load notifications"),
          toast.error("Failed to load notifications")

<<<<<<< HEAD
=======
<<<<<<< HEAD
        }
      }
      loadNotifications()
    }
  }, [open, fetchNotifications]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState, useEffect } from 'react',;
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
    markAllAsRead,;
    dismissNotification, ;
    loading,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
<<<<<<< HEAD
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  // Refresh notifications when popover opens;
  useEffect(() => {;
    }
    if (open) {;
      }
      const loadNotifications = async () => {;
        }
        try {;
<<<<<<< HEAD
          }
          setError(null);
        } catch (err) {;
          }
          console && console.error('Failed to fetch 'notifications':', err);'
          setError('Couldn't load notifications');'
          toast && toast.error('Failed to load notifications');'
=======
<<<<<<< HEAD

          await fetchNotifications();

          setError(null);
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        } catch (err) {;"
          console && console.error("Failed to fetch notifications:", err);'"
          setError("Couldn't load notifications");"
          toast && toast.error("Failed to load notifications");
>>>>>>> origin/resolved-merge-conflicts
        }

      loadNotifications();
    }
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    }
    try {  const handleMarkAllAsRead = async () => {
    }
    try {
<<<<<<< HEAD
      }
      await markAllAsRead(),
      toast.success('All notifications marked as read')'
=======
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
      toast.success("All notifications marked as read")"
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  const handleFilterChange = ('newFilter': FilterType) => {
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      toast.success("All notifications marked as read")
    } catch (err) {"
      console.error("Failed to mark notifications as read:", err),"
      toast.error("Failed to update notifications")
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
    }
    setFilter(newFilter as any)
  },
<<<<<<< HEAD
return (;
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className='relative'>'
          <Bell className='h-5 w-5 text-zion-slate-light' />'
          {unreadCount > 0 && (
            <span className='absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium'>  const handleMarkAllAsRead = async () => {;'
    }
    try {;
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>"
        <Button variant="ghost" size="icon" className="relative">"
          <Bell className="h-5 w-5 text-zion-slate-light" />

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
<<<<<<< HEAD

  }, [open, fetchNotifications]),;

  const handleMarkAllAsRead = async () => {;

    try {;
      await markAllAsRead();"
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast && toast.success("All notifications marked as read");
    } catch (err) {;"
      console && console.error("Failed to mark notifications as read:", err);"
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}
<<<<<<< HEAD

          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <NotificationFilter
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />;
<<<<<<< HEAD

        <NotificationList

=======
<<<<<<< HEAD

        <NotificationList

=======
        <NotificationList
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
      }
      await markAllAsRead();
      toast && toast.success('All notifications marked as read');'
    } catch (err) {;
      }
      console && console.error('Failed to mark notifications as 'read':', err);'
      toast && toast.error('Failed to update notifications');'
    }        />;
        <NotificationList;
<<<<<<< HEAD
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead} />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  )
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />

        <NotificationList 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}

<<<<<<< HEAD
        />;

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
        try {
          await fetchNotifications($2);
          setError(null)
        } catch (err) {
          console.error($2);
          setError($2);
          toast.error('Failed to load notifications')
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          await fetchNotifications(),;
          setError(null),;
        } catch (err) {;
          console.error("Failed to fetch notifications:", err),;
          setError("Couldn't load notifications"),;
          toast.error("Failed to load notifications"),;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        }
      },
      
      loadNotifications()
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead($2);
      toast.success('All notifications marked as read')
    } catch (err) {
      console.error($2);
<<<<<<< HEAD
      toast.error('Failed to update notifications')
=======
      toast.error("Failed to update notifications")
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    }
  },

<<<<<<< HEAD
  const handleFilterChange = $2;
  return (
    <Popover open = $2;
=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
  const handleFilterChange = $2;
  return (
    <Popover open = $2;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
