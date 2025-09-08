
<<<<<<< HEAD


=======
loading: boolean,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onRetry: () => void;

}

export const NotificationList: React.FC<NotificationListProps> = ({;
  loading;
  error;
  notifications;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react',;

import { Notification } from '@/context/notifications',;
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
<<<<<<< HEAD

}



=======
}

  loading: boolean;
  error: string | null;
>>>>>>> origin/cursor/delete-old-data-records-6bba


  loading: boolean
  error: string | null

  notifications: Notification[]
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>

<<<<<<< HEAD

  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({


  loading;
=======

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
export const NotificationList: React.FC<NotificationListProps> = ({}
';
import {ScrollArea} from '@/components / ui / scroll - area';'
import {Skeleton} from '@/components / ui / skeleton';'
import {Button} from '@/components / ui / button';'
import {NotificationItem} from './NotificationItem';'

import {Notification} from '@/context / notifications';
interface NotificationListProps {}

  loading: boolean,
  error: string | null,
  notifications: Notification[],
  error;
  notifications;
  onMarkAsRead;  on_dismiss,
  on_retry;
}) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max-h-[350px]">;
      {error ? (
</void>
  onDismiss: (id: string) => Promise<void>,
export const NotificationList: React.FC<NotificationListProps> = ({;
)
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
export const NotificationList: React.FC<NotificationListProps> = ({
  onMarkAsRead: (id: string) => Promise < void>,
  on_dismiss: (id: string) => Promise < void>,
  on_retry: () => void;
}

  on_dismiss,
  on_retry;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  error;
  notifications;

<<<<<<< HEAD




=======
  on_retry;

>>>>>>> origin/cursor/delete-old-data-records-6bba
}) => {

  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (

<<<<<<< HEAD
=======
  onDismiss,;
  onRetry;
}) => {;
  return (

"
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;"
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Button
            variant="outline" 
            size="sm" 

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ) : notifications && notifications.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) : (;
        notifications && notifications.map((notification) => (;
          <NotificationItem
            key={notification && notification.id}
<<<<<<< HEAD

=======

) :notifications.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) :(;
        notifications.map((notification) => (;
          <NotificationItem;
            key={notification.id}
  onRetry;
  on_dismiss,
  on_retry;
  on_retry;)
}) => {
  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;"
"
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;"
        <div className="p-8 text-center text-amber-500">;"
</div>
          <p>{error}</p>;
          <Button;"
            variant="outline"""
            size="sm"""
            className="mt-2""
            onClick={onRetry}>;

          ;
        </div>;"
        <div className="p-4 space-y-4">;"
</div>"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;"

        <div className="p-8 text-center text-zion-slate-light">;"
          <p>No notifications yet</p>;
        </div>;
          <NotificationItem;
            key={notification && notification.id}

>>>>>>> origin/cursor/delete-old-data-records-6bba
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;

    </ScrollArea>;
  );


<<<<<<< HEAD
=======
    </ScrollArea>;
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
          ;)
        </div>) : loading ? ("
        <div className="p - 4 space - y-4">;"
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50" />;"
        </div>) : notifications.length === 0 ? ("
        <div className="p - 8 text - center text - zion - slate - light">;"
          <p > No notifications yet</p>;)
        </div>) : (
            key={notification.id}
            on_dismiss={on_dismiss})
          />)))}
    </ScrollArea>);
}
;

    </ScrollArea>;
  ),;
},; {
  error ? (<div className="p-8 text-center text-amber-500" > <p> {
  error 
}</p> <Button > Try Again </Button> </div>) : loading ? (<div className="p-4 space-y-4" > <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> </div>) : notifications.length === 0 ? (<div className="p-8 text-center text-zion-slate-light" > <p>No notifications yet</p> </div>) : (notifications.map ( (notification) => (<NotificationItem key= {
  notification.id 

    );
  error ? (<div className="p-8 text-center text-amber-500" > <p> {"
</div>)"
}</p> <Button > Try Again  </div>) : loading ? (<div className="p-4 space-y-4" > <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> </div>) : notifications.length === 0 ? (<div className="p-8 text-center text-zion-slate-light" > <p>No notifications yet</p> </div>) : (notifications.map ( (notification) => (<NotificationItem key= {"
  notification.id;
}notification= {
  notification;
}onMarkAsRead= {
}onDismiss= {
  onDismiss;)
}/>) ) ) 
}) "
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">"
        <div className="p-8 text-center text-amber-500">"
          <p>{error}</p>
            onClick={onRetry}
          >

        <div className="p-4 space-y-4">"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />"

        <div className="p-8 text-center text-zion-slate-light">"
          <p>No notifications yet</p>
          />

pr-12325
</NotificationItem>
    </ScrollArea>
    </ScrollArea>;
  );
    </ScrollArea>;
  );

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
