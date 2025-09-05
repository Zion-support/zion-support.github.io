
<<<<<<< HEAD
import React from 'react',
import { ScrollArea } from '@/components/ui/scroll-area',
import Skeleton from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { NotificationItem } from './NotificationItem',
import { Notification } from '@/context/notifications',
import { EmptyState } from '@/components/ui/empty-state',
import { Bell } from 'lucide-react'

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
import Skeleton from '@/components/ui/skeleton';

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
        <div className=&quot;p-8&quot;>
          <EmptyState
<<<<<<< HEAD
            icon={<Bell className=&quot;h-8 w-8&quot; />}
            title=&quot;No Notifications&quot;
            description=&quot;You're all caught up.&quot;
            action={{ text: 'Refresh', onClick: onRetry }}
            className=&quot;border-none bg-transparent&quot;
=======
            icon={_<Bell className="h-8 w-8" />}
            title="No Notifications"
            description="You're all caught up."
            action={_{ text: 'Refresh', _onClick: onRetry}}
            className="border-none bg-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
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
