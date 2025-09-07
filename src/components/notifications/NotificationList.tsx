
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12325



origin/cursor/expand-services-advertise-and-build-project-c28b
main
pr-12243
pr-12325
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
pr-12325
import { Bell } from 'lucide-react';
interface Notification {
  // TODO: Implement
}
  id: string;,
  title: string;
  message: string;,
  timestamp: string;
  read: boolean;,
  type: 'info' | 'warning' | 'error' | 'success';

interface NotificationListProps {
  // TODO: Implement
  loading: boolean;,
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;,
  onMarkAllAsRead: () => void;
  onClearAll: () => void;

export const NotificationList: React.FC<NotificationListProps> = ({

      <div className="space-y-3">"
</div>"
          <div key={i} className="flex items-start space-x-3 p-3">"
            <Skeleton className="h-4 w-4 rounded-full" />"
"
            <div className="flex-1 space-y-2">"
              <Skeleton className="h-4 w-3/4" />"
              <Skeleton className="h-3 w-1/2" />"

            </div>
      <div className="text-center py-8">"
        <Bell className="mx-auto h-12 w-12 text-gray-400" />"
        <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>""
        <p className="mt-1 text-sm text-gray-500">"
</p>
      <div className="flex justify-between items-center">"
        <h3 className="text-lg font-semibold">Notifications</h3>""
        <div className="space-x-2">"
          <Button;"
            variant="outline"""
            size="sm""
            onClick={onMarkAllAsRead})
            disabled={notifications.every(n => n.read)}

          
            onClick={onClearAll}
          >

          
      <ScrollArea className="h-96">"
        <div className="space-y-2">"
            <div;
              key={notification.id}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                notification.read;"
                  ? 'bg-gray-50 border-gray-200
                  : 'bg-blue-50 border-blue-200`;
              }`}
              onClick={() => onMarkAsRead(notification.id)}
              <div className="flex items-start justify-between">"
                <div className="flex-1">"
                  <h4 className="text-sm font-medium text-gray-900">"
</h4>
                  </h4>"
                  <p className="text-sm text-gray-600 mt-1">"
                  </p>"
                  <p className="text-xs text-gray-500 mt-2">"
                </div>`;
                <div className={`w-2 h-2 rounded-full ${"
                  notification.type === 'error' ? 'bg-red-500' :
                  notification.type === 'warning' ? 'bg-yellow-500' :
                  notification.type === 'success' ? 'bg-green-500' :
                  'bg-blue-500`;
                }`} />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
main
pr-12243
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
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
      
pr-12325
  onMarkAsRead: (id: string,) => Promise<void>,
</void>
  onDismiss: (id: string,) => Promise<void>,
)
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onMarkAsRead: (id: string, ) => Promise < void>,
  on_dismiss: (id: string, ) => Promise < void>,
  on_retry: () => void;
export const NotificationList: React.FC < NotificationListProps> = ({
  loading;
  error;
  notifications;
  onMarkAsRead;
  on_dismiss,
  on_retry;)
}, ) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;"
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">"
        <div className="p-8 text-center text-amber-500">"
          <p>{error}</p>
            className="mt-2""
            onClick={onRetry}

          
        <div className="p-4 space-y-4">"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />"

        <div className="p-8">"
          <EmptyState;"
            icon={<Bell className="h-8 w-8" />}"

          <NotificationItem;)
  );
};

        <div className="p - 8 text - center text - amber - 500">;"

          <p>{error}</p>;
            variant="outline";""
            size="sm";""
            className="mt - 2";"
            on_click = {on_retry, }
          >;

          ;
        </div>) : loading ? ("
        <div className="p - 4 space - y-4">;"
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;"
        </div>) : notifications.length === 0 ? ("
        <div className="p - 8">;"
            icon = {<Bell className="h - 8 w - 8" />, }"
        </div>) : (
          <NotificationItem;
            key = {notification.id, }
            notification = {notification, }
            onMarkAsRead = {onMarkAsRead, }
            on_dismiss = {on_dismiss, })
          />)))}

  );
};
";
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
pr-12243
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';

interface NotificationListProps {
  loading: boolean;
  error: string | null;
  notifications: Notification[];
pr-12325
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
            <Skeleton className="h-8 w-8 rounded-full" />"

        <div className="text-red-500 mb-4">"
          <Bell className="h-12 w-12 mx-auto mb-2" />"
          <p className="text-sm">Failed to load notifications</p>"
        <Button onClick={onRetry} variant="outline" size="sm">"

        
      <EmptyState;
        icon={Bell}"
        title="No notifications"""
        description="You're all caught up! Check back later for updates.""
      />
      <div className="space-y-1">"
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
origin/cursor/expand-services-advertise-and-build-project-c28b
origin/cursor/expand-services-advertise-and-build-project-c28b
main
  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243

    )"`;
pr-12325
