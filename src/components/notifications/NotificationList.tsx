<<<<<<< HEAD
};import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

import React from 'react';
import { ScrollArea  } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { NotificationItem  } from './NotificationItem';
import { Notification  } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react'
interface NotificationListProps {

  loading: boolean
  error: string | null
  notifications: Notification[]
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({

  loading
  error
  notifications
  onMarkAsRead
  onDismiss
  onRetry
},) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick = {onRetry,}>;
            Try Again;
          </Button>;
        </div>;
      ) : loading ? (;
        <div className="p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;
      ) : notifications && notifications.length === 0 ? (;
        <div className="p-8">;
          <EmptyState
            icon = {<Bell className="h-8 w-8" />,}
            title="No Notifications";
            description="You're all caught up.";
            action={{ text: 'Refresh', onClick: onRetry }}
            className="border-none bg-transparent";
          />;
        </div>;
      ) : (;
        notifications && notifications.map((notification,) => (;
          <NotificationItem
            key = {notification && notification.id,}
            notification = {notification,}
            onMarkAsRead = {onMarkAsRead,}
            onDismiss = {onDismiss,}
          />;
        ));
      )}
    </ScrollArea>
  )
}
"

"
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
=======
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string,) => Promise<void>,;
  onDismiss: (id: string,) => Promise<void>,;
  onRetry: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry,
}) => {
  if (loading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <EmptyState
        icon={<Bell className="h-8 w-8 text-muted-foreground" />}
        title="Failed to load notifications"
        description={error}
        action={
          <Button onClick={onRetry} variant="outline">
            Try Again
          </Button>
        }
      />
    );
  }

  if (notifications.length === 0) {
    return (
      <EmptyState
        icon={<Bell className="h-8 w-8 text-muted-foreground" />}
        title="No notifications"
        description="You're all caught up! Check back later for updates."
      />
    );
  }

  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-2">
        {notifications.map((notification) => (
          <NotificationItem
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
