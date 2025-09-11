
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
=======

// Use the shared icon wrapper;=======

// Use the shared icon wrapper;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
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

export const NotificationCenter: React.FC = () => {;=======

export const NotificationCenter: React.FC = () => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { ;
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    markAllAsRead;
    dismissNotification, ;
    loading;
    filter;
    setFilter;
    fetchNotifications;
  } = useNotifications();

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react',
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
=======    markAsRead, ;
    markAllAsRead;
    markAsRead, 
    markAllAsRead,
    markAsRead, 
    markAllAsRead,
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


  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

=======

  const handleMarkAllAsRead = async () => {
    try {
=======
      };

      loadNotifications();
    }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [open, fetchNotifications]),;

  }, [open, fetchNotifications]);
  const handleMarkAllAsRead = async () => {;
    try {;
=======
  }, [open, fetchNotifications]),;

  const handleMarkAllAsRead = async () => {;
    try {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await markAllAsRead();
      toast && toast.success("All notifications marked as read");
    } catch (err) {;
      console && console.error("Failed to mark notifications as read:", err);
      toast && toast.error("Failed to update notifications");
    }
  };

  const handleFilterChange = (newFilter: FilterType) => {;
    setFilter(newFilter as any);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
        <NotificationList 
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}



=======
=======
        />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );




        />;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
};
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
