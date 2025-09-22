<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
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
interface NotificationListProps {}
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string,) => Promise<void>,
  onDismiss: (id: string,) => Promise<void>,;
  onRetry: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({};
  loading;
  error;
  notifications;
  onMarkAsRead;
'
import React from 'react',;'
import { ScrollArea } from '@/components/ui/scroll-area',;'
import Skeleton from '@/components/ui/skeleton',;'
import { Button } from '@/components/ui/button',;'
import { NotificationItem } from './NotificationItem',;'
import { Notification } from '@/context/notifications',;'
import { EmptyState } from '@/components/ui/empty-state',;'
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}

onRetry;
},) => {'
} import React from 'react';'
import { ScrollArea } from '@/components / ui / scroll - area';'
import Skeleton from '@/components / ui / skeleton';'
import { Button } from '@/components / ui / button';'
import { NotificationItem } from './NotificationItem';'
import { Notification } from '@/context / notifications';'
import { EmptyState } from '@/components / ui / empty - state';'
import { Bell } from 'lucide-react';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string, ) => Promise < void>,
  on_dismiss: (id: string, ) => Promise < void>,
  on_retry: () => void;
}
export const NotificationList: React.FC < NotificationListProps> = ({};
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  loading;
  error;
  notifications;
  onMarkAsRead;
on_dismiss,
  on_retry;
}, ) => {}
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (
'
import React from 'react',;'
import { ScrollArea } from '@/components/ui/scroll-area',;'
import Skeleton from '@/components/ui/skeleton',;'
import { Button } from '@/components/ui/button',;'
import { NotificationItem } from './NotificationItem',;'
import { Notification } from '@/context/notifications',;'
import { EmptyState } from '@/components/ui/empty-state',;'
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}

  loading: boolean;
  error: string | null;
  notifications: Notification[]
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>

  onRetry: () => void;
}
export const NotificationList: React.FC<NotificationListProps> = ({}
  onDismiss,;
  onRetry;
}) => {}
  return ("
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? ("
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button"
            className="mt-2"
            onClick={onRetry}
          >
            Try Again;
          </Button>
        </div>
      ) : loading ? ("
        <div className="p-4 space-y-4">"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
        </div>
      ) : notifications.length === 0 ? ("
        <div className="p-8">
          <EmptyState"
            icon={<Bell className="h-8 w-8" />}"
            title="No Notifications"'"
            description="You're all caught up."'
            action={{ text: 'Refresh', onClick: onRetry }}"
            className="border-none bg-transparent"
          />
        </div>
      ) : (
        notifications.map((notification) => (
          <NotificationItem;
  );
};

"
        <div className="p - 8 text - center text - amber - 500">;
          <p>{error}</p>;
          <Button;"
            variant="outline";"
            size="sm";"
            className="mt - 2";
            on_click = {on_retry, }
          >;
            Try Again;
          </Button>;
        </div>) : loading ? ("
        <div className="p - 4 space - y-4">;"
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;"
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;"
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
        </div>) : notifications.length === 0 ? ("
        <div className="p - 8">;
          <EmptyState;"
            icon = {<Bell className="h - 8 w - 8" />, }"
            title="No Notifications";'"
            description="You're all caught up.";'
            action={{ text: 'Refresh', on_click: on_retry }}"
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
}"
";

  );
};"
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
<<<<<<< HEAD
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> pr-12243
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
=======
};'
import { NotificationItem } from './NotificationItem';'
import { Notification } from '@/context/notifications';'
import { EmptyState } from '@/components/ui/empty-state';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Bell } from 'lucide-react';

interface NotificationListProps {}
  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({}
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,;
  onRetry;
}) => {}
  if (loading) {}
    return ("
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => ("
          <div key={i} className="flex items-start space-x-3 p-3">"
            <Skeleton className="h-8 w-8 rounded-full" />"
            <div className="flex-1 space-y-2">"
              <Skeleton className="h-4 w-3/4" />"
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {}
    return ("
      <div className="text-center py-8">"
        <div className="text-red-500 mb-4">"
          <Bell className="h-12 w-12 mx-auto mb-2" />"
          <p className="text-sm">Failed to load notifications</p>
        </div>"
        <Button onClick={onRetry} variant="outline" size="sm">
          Try Again;
        </Button>
      </div>
    );
  }

  if (notifications.length === 0) {}
    return (
      <EmptyState;
        icon={Bell}"
        title="No notifications"'"
        description="You're all caught up! Check back later for updates."
      />
    );
  }

  return ("
    <ScrollArea className="h-96">"
      <div className="space-y-1">
        {notifications.map((notification) => (
          <NotificationItem;
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
