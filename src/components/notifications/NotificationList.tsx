<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import Skeleton from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
import { EmptyState } from '@/components/ui/empty-state',;
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Bell } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'info' | 'warning' | 'error' | 'success';
}

interface NotificationListProps {
  loading: boolean;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const NotificationList: React.FC<NotificationListProps> = ({
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry
}) => {
<<<<<<< HEAD
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={onRetry}
=======
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-start space-x-3 p-3">
            <Skeleton className="h-4 w-4 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div className="text-center py-8">
        <Bell className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
        <p className="mt-1 text-sm text-gray-500">
          You're all caught up! Check back later for updates.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onMarkAllAsRead}
            disabled={notifications.every(n => n.read)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            Try Again
          </Button>
        </div>
      ) : loading ? (
        <div className="p-4 space-y-4">
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
        </div>
<<<<<<< HEAD
=======
      </ScrollArea>
    </div>
  );
};
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react'
interface NotificationListProps {
}; import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Skeleton from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { NotificationItem } from './NotificationItem'
import { Notification } from '@/context/notifications'
import { EmptyState } from '@/components/ui/empty-state'
import { Bell } from 'lucide-react'
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string,) => Promise<void>,
  onDismiss: (id: string,) => Promise<void>,
  onRetry: () => void
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading
  error
  notifications
  onMarkAsRead

import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import Skeleton from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
import { EmptyState } from '@/components/ui/empty-state',;
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}


onRetry
},) => {
} import React from 'react';
import { ScrollArea } from '@/components / ui / scroll - area';
import Skeleton from '@/components / ui / skeleton';
import { Button } from '@/components / ui / button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context / notifications';
import { EmptyState } from '@/components / ui / empty - state';
import { Bell } from 'lucide-react';
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string, ) => Promise < void>,
  on_dismiss: (id: string, ) => Promise < void>,
  on_retry: () => void;
}
export const NotificationList: React.FC < NotificationListProps> = ({
  loading;
  error;
  notifications;
  onMarkAsRead;
  on_dismiss,
  on_retry;
}, ) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (

import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import Skeleton from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
import { EmptyState } from '@/components/ui/empty-state',;
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}

  loading: boolean
  error: string | null
  notifications: Notification[]
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({
  onDismiss,
  onRetry
}) => {
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button
            className="mt-2"
            onClick={onRetry}
          >
            Try Again
          </Button>
        </div>
      ) : loading ? (
        <div className="p-4 space-y-4">
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      ) : notifications.length === 0 ? (
        <div className="p-8">
          <EmptyState
            icon={<Bell className="h-8 w-8" />}
            title="No Notifications"
            description="You're all caught up."
            action={{ text: 'Refresh', onClick: onRetry }}
            className="border-none bg-transparent"
          />
        </div>
      ) : (
        notifications.map((notification) => (
          <NotificationItem
<<<<<<< HEAD
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;
  );
};
=======
  );
};


        <div className="p - 8 text - center text - amber - 500">;
          <p>{error}</p>;
          <Button;
            variant="outline";
            size="sm";
            className="mt - 2";
            on_click = {on_retry, }
          >;
            Try Again;
          </Button>;
        </div>) : loading ? (
        <div className="p - 4 space - y-4">;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
        </div>) : notifications.length === 0 ? (
        <div className="p - 8">;
          <EmptyState;
            icon = {<Bell className="h - 8 w - 8" />, }
            title="No Notifications";
            description="You're all caught up.";
            action={{ text: 'Refresh', on_click: on_retry }}
            className="border - none bg - transparent";
          />;
        </div>) : (
        notifications.map ((notification, ) => (
          <NotificationItem;
            key = {notification.id, }
            notification = {notification, }
            onMarkAsRead = {onMarkAsRead, }
            on_dismiss = {on_dismiss, }
          />)))}
    </ScrollArea>);
}
";

  );
};
";
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;
  );
};
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';

interface NotificationListProps {
  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry
}) => {
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-start space-x-3 p-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">
          <Bell className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">Failed to load notifications</p>
        </div>
        <Button onClick={onRetry} variant="outline" size="sm">
          Try Again
        </Button>
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <EmptyState
        icon={Bell}
        title="No notifications"
        description="You're all caught up! Check back later for updates."
      />
    );
  }

  return (
    <ScrollArea className="h-96">
      <div className="space-y-1">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
