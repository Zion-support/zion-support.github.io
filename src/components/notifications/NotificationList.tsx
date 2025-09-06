import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
<<<<<<< HEAD

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'info' | 'warning' | 'error' | 'success';
}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 25b772ac8bd79941dee781476b83a226cf2dd161
interface NotificationListProps {
  loading: boolean;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

<<<<<<< HEAD
export const NotificationList: React.FC<NotificationListProps> = ({
  loading,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClearAll,
}) => {
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-start space-x-3 p-3">
            <Skeleton className="h-4 w-4 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div className="text-center py-8">
        <Bell className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
        <p className="mt-1 text-sm text-gray-500">
          You're all caught up! Check back later for updates.
        </p>
      </div>
    );
  }

=======
>>>>>>> 25b772ac8bd79941dee781476b83a226cf2dd161
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <div className="space-x-2">
          <Button
<<<<<<< HEAD
            variant="outline"
            size="sm"
            onClick={onMarkAllAsRead}
            disabled={notifications.every(n => n.read)}
          >
            Mark all as read
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
          >
            Clear all
          </Button>
        </div>
      </div>
      
      <ScrollArea className="h-96">
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                notification.read
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
              onClick={() => onMarkAsRead(notification.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  notification.type === 'error' ? 'bg-red-500' :
                  notification.type === 'warning' ? 'bg-yellow-500' :
                  notification.type === 'success' ? 'bg-green-500' :
                  'bg-blue-500'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
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
>>>>>>> 25b772ac8bd79941dee781476b83a226cf2dd161
