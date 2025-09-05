
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
      {error ? (
        <div className=&quot;p-8 text-center text-amber-500&quot;>
          <p>{error}</p>
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            className=&quot;mt-2&quot;
            onClick={onRetry}
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
            icon={<Bell className=&quot;h-8 w-8&quot; />}
            title=&quot;No Notifications&quot;
            description=&quot;You're all caught up.&quot;
            action={{ text: 'Refresh', onClick: onRetry }}
            className=&quot;border-none bg-transparent&quot;
          />
        </div>
      ) : (
        notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />
        ))
      )}
    </ScrollArea>
  )
},
