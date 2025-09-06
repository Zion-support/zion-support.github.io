<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


<<<<<<< HEAD
  onRetry
=======
onRetry
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string,) => Promise<void>,;
  onDismiss: (id: string,) => Promise<void>,;
  onRetry: () => void;
}

<<<<<<< HEAD
export const NotificationList: React.FC<NotificationListProps> = ({
=======
  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({

  loading
  error
  notifications
  onMarkAsRead
  onDismiss
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  loading,
  error,
  notifications,
  onMarkAsRead,
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export const NotificationList: React.FC<NotificationListProps> = ({;
  loading;
  error;
  notifications;
  onMarkAsRead;
  onDismiss,;
  onRetry;
},) => {;
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
          <Button
            variant="outline" 
            size="sm" 

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onDismiss,
  onRetry
}) => {
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button
            variant="outline"
            size="sm"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

    </ScrollArea>;
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;
  );
<<<<<<< HEAD
};
=======
};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            key = {notification.id,}
            notification = {notification,}
            onMarkAsRead = {onMarkAsRead,}
            onDismiss = {onDismiss,}
          />
        ))
      )}
    </ScrollArea>
  )
}
"

  );
};
";
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;
  );
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
