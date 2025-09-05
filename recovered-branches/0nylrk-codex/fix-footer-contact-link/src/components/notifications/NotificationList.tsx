
import React from 'react';

interface NotificationListProps {_loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (_id: string) => Promise<void>;
  onDismiss: (_id: string) => Promise<void>;
  onRetry: () => void;}

export const NotificationList: React.FC<NotificationListProps> = (_{_loading, _error, _notifications, _onMarkAsRead, _onDismiss, _onRetry}) => {_return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={_onRetry}
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
        <div className="p-8 text-center text-zion-slate-light">
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
  );
};
