


  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>,
  onRetry: () => void
}

export const NotificationList: React.FC<NotificationListProps> = ({;
  loading;
  error;
  notifications;
  onMarkAsRead;

=======
import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import { Skeleton } from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
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
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({
  loading;
  error;
  notifications;
  onMarkAsRead;

  onDismiss
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry
=======
  on_dismiss,
  on_retry;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (

  onDismiss,;
  onRetry;
}) => {;
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
          <Button
            variant="outline" 
            size="sm" 

            className="mt-2"
            onClick={onRetry}>;
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
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) : (;
        notifications && notifications.map((notification) => (;
          <NotificationItem
            key={notification && notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}



    </ScrollArea>;
  );

=======
=======
    </ScrollArea>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
