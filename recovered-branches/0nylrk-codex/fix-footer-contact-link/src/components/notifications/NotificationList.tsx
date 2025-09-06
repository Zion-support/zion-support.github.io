


<<<<<<< HEAD
=======
import React from 'react';
import { ScrollArea  } from '@/components/ui/scroll-area';
import { Skeleton  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { NotificationItem  } from './NotificationItem';
import { Notification } from '@/context/notifications';
interface NotificationListProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  loading: boolean
  error: string | null
  notifications: Notification[]
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({

<<<<<<< HEAD
import {ScrollArea} from '@/components/ui/scroll-area';
import {Skeleton} from '@/components/ui/skeleton';
import {Button} from '@/components/ui/button';
import {NotificationItem} from './NotificationItem';
import {Notification} from '@/context/notifications';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {ScrollArea} from '@/components / ui / scroll - area';
import {Skeleton} from '@/components / ui / skeleton';
import {Button} from '@/components / ui / button';
import {NotificationItem} from './NotificationItem';
import {Notification} from '@/context / notifications';
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise < void>,
  on_dismiss: (id: string) => Promise < void>,
  on_retry: () => void;
}
export const NotificationList: React.FC < NotificationListProps> = ({
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  loading;
  error;
  notifications;
  onMarkAsRead;

<<<<<<< HEAD

=======
  onDismiss
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  loading,
  error,
  notifications,
  onMarkAsRead,
<<<<<<< HEAD

  onDismiss,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onRetry
=======
  on_dismiss,
  on_retry;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  on_dismiss,
  on_retry;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onDismiss,;
  onRetry;
}) => {;
  return (
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
<<<<<<< HEAD
          <Button
            variant="outline" 
            size="sm" 

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className="mt-2"
            onClick={onRetry}>;
            Try Again;
          </Button>;
        </div>;
      ) : loading ? (;
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;
<<<<<<< HEAD
      ) : notifications && notifications.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) : (;
        notifications && notifications.map((notification) => (;
          <NotificationItem
            key={notification && notification.id}
=======
      ) :notifications.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) :(;
        notifications.map((notification) => (;
          <NotificationItem;
            key={notification.id}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}



    </ScrollArea>;
  );

<<<<<<< HEAD
=======
=======
    </ScrollArea>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        <div className="p - 8 text - center text - amber - 500">;
          <p>{error}</p>;
          <Button;
            variant="outline";
            size="sm";
            className="mt - 2";
            on_click={on_retry}
          >;
            Try Again;
          </Button>;
        </div>) : loading ? (
        <div className="p - 4 space - y-4">;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;
        </div>) : notifications.length === 0 ? (
        <div className="p - 8 text - center text - zion - slate - light">;
          <p > No notifications yet</p>;
        </div>) : (
        notifications.map ((notification) => (
          <NotificationItem;
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            on_dismiss={on_dismiss}
          />)))}
    </ScrollArea>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </ScrollArea>;
  ),;
},; {
  error ? (<div className="p-8 text-center text-amber-500" > <p> {
  error 
}</p> <Button > Try Again </Button> </div>) : loading ? (<div className="p-4 space-y-4" > <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> </div>) : notifications.length === 0 ? (<div className="p-8 text-center text-zion-slate-light" > <p>No notifications yet</p> </div>) : (notifications.map ( (notification) => (<NotificationItem key= {
  notification.id 
}notification= {
  notification 
}onMarkAsRead= {
  onMarkAsRead 
}onDismiss= {
  onDismiss 
}/>) ) ) 
}</ScrollArea>) 
};
  onDismiss,
  onRetry
}) => {
  return (
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">
      {error ? (
        <div className="p-8 text-center text-amber-500">
          <p>{error}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={onRetry}
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
}

    </ScrollArea>;
  );
    </ScrollArea>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
