<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}; import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Skeleton from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { NotificationItem } from './NotificationItem'
import { Notification } from '@/context/notifications'
import { EmptyState } from '@/components/ui/empty-state'
import { Bell } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

<<<<<<< HEAD
export const NotificationList: React.FC<NotificationListProps> = ({
  loading
  error
  notifications
  onMarkAsRead

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import Skeleton from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
import { EmptyState } from '@/components/ui/empty-state',;
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  loading: boolean
  error: string | null
  notifications: Notification[]
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({
<<<<<<< HEAD

  loading
  error
  notifications
  onMarkAsRead
  onDismiss
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry
}) => {
=======
export const NotificationList: React.FC<NotificationListProps> = ({;
  loading;
  error;
  notifications;
  onMarkAsRead;
  onDismiss,;
  onRetry;
},) => {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  onDismiss,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onRetry
}) => {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button
<<<<<<< HEAD
<<<<<<< HEAD
            variant="outline" 
            size="sm" 

=======
            variant="outline"
            size="sm"
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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

    </ScrollArea>;
  );
};
=======
            variant="outline"
            size="sm"
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
            key = {notification.id,}
            notification = {notification,}
            onMarkAsRead = {onMarkAsRead,}
            onDismiss = {onDismiss,}
          />
        ))
      )}
    </ScrollArea>
<<<<<<< HEAD
  )
}
"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    </ScrollArea>;
  );
};
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
