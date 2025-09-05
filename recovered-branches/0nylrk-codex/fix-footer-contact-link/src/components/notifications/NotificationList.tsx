
<<<<<<< HEAD
import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import { Skeleton } from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
;
interface NotificationListProps {;
  loading:boolean,;
  error:string | null,;
  notifications:Notification[],;
  onMarkAsRead:(id:string) => Promise<void>,;
  onDismiss:(id:string) => Promise<void>,;
  onRetry:() => void;
}
;
export const NotificationList:React.FC<NotificationListProps> = ({;
  loading,;
  error,;
  notifications,;
  onMarkAsRead,;
  onDismiss,;
  onRetry;
}) => {;
  return (;
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
          <Button ;
            variant="outline" ;
            size="sm" ;
            className="mt-2";
            onClick={onRetry}
          >;
            Try Again;
          </Button>;
        </div>;
      ) :loading ? (;
        <div className="p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;
      ) :notifications.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) :(;
        notifications.map((notification) => (;
          <NotificationItem;
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;
  ),;
},;
=======
import React from 'react',
import { ScrollArea } from '@/components/ui/scroll-area',
import { Skeleton } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { NotificationItem } from './NotificationItem',
import { Notification } from '@/context/notifications',
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>,
  onRetry: () => void
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry
}) => {
  return (
    <ScrollArea className=&quot;flex-1 overflow-y-auto max-h-[350px]&quot;>      {error ? (
        <div className=&quot;p-8 text-center text-amber-500&quot;>
          <p>{error}</p>
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            className=&quot;mt-2&quot;
            onClick={onRetry}          >
            Try Again
          </Button>
        </div>
      ) : loading ? (
        <div className=&quot;p-4 space-y-4&quot;>
          <Skeleton className=&quot;h-12 w-full bg-zion-blue-dark/50&quot; />
          <Skeleton className=&quot;h-12 w-full bg-zion-blue-dark/50&quot; />
          <Skeleton className=&quot;h-12 w-full bg-zion-blue-dark/50&quot; />
        </div>
      ) : notifications.length === 0 ? (
        <div className=&quot;p-8 text-center text-zion-slate-light&quot;>
          <p>No notifications yet</p>
        </div>
      ) : (_notifications.map((notification) => (
          <NotificationItem
            key={_notification.id}
            notification={_notification}
            onMarkAsRead={_onMarkAsRead}
            onDismiss={_onDismiss}
          />
        ))
      )}
    </ScrollArea>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
