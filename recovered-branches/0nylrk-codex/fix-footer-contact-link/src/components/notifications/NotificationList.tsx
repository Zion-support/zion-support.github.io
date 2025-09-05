
<<<<<<< HEAD
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
    <ScrollArea className=&quot;flex-1 overflow-y-auto max-h-[350px]&quot;>
=======
import React from 'react';

interface NotificationListProps {_loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (_id: string) => Promise<void>;
  onDismiss: (_id: string) => Promise<void>;
  onRetry: () => void;}

export const NotificationList: React.FC<NotificationListProps> = (_{_loading, _error, _notifications, _onMarkAsRead, _onDismiss, _onRetry}) => {_return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {error ? (
        <div className=&quot;p-8 text-center text-amber-500&quot;>
          <p>{error}</p>
          <Button 
<<<<<<< HEAD
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            className=&quot;mt-2&quot;
            onClick={onRetry}
=======
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={_onRetry}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
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
