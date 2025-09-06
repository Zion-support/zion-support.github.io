import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';import { NotificationItem } from './NotificationItem';
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
  )
};
