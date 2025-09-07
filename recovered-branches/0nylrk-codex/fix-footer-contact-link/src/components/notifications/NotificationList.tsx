<<<<<<< HEAD
loading: boolean,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
loading: boolean,
=======



<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React from 'react';
import { ScrollArea  } from '@/components/ui/scroll-area';
import { Skeleton  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { NotificationItem  } from './NotificationItem';
import { Notification } from '@/context/notifications';
interface NotificationListProps {
<<<<<<< HEAD
  loading: boolean,
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  loading: boolean,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onRetry: () => void
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onRetry: () => void;

}

export const NotificationList: React.FC<NotificationListProps> = ({;
  loading;
  error;
  notifications;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  onMarkAsRead;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  loading: boolean;
  error: string | null;
=======
>>>>>>> merged-prs-20250907-203621
}

<<<<<<< HEAD
  loading: boolean;
  error: string | null;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  loading: boolean
  error: string | null

  notifications: Notification[]
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

  onRetry: () => void;
}
export const NotificationList: React.FC<NotificationListProps> = ({}
';
import {ScrollArea} from '@/components / ui / scroll - area';'
import {Skeleton} from '@/components / ui / skeleton';'
import {Button} from '@/components / ui / button';'
import {NotificationItem} from './NotificationItem';'
=======

  onRetry: () => void;
}
export const NotificationList: React.FC<NotificationListProps> = ({}
';
import {ScrollArea} from '@/components / ui / scroll - area';'
import {Skeleton} from '@/components / ui / skeleton';'
import {Button} from '@/components / ui / button';'
import {NotificationItem} from './NotificationItem';'
=======
  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({

<<<<<<< HEAD
  onDismiss
=======
import {ScrollArea} from '@/components / ui / scroll - area';
import {Skeleton} from '@/components / ui / skeleton';
import {Button} from '@/components / ui / button';
import {NotificationItem} from './NotificationItem';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

  error;
  notifications;

  on_retry;

=======
<<<<<<< HEAD

=======
export const NotificationList: React.FC < NotificationListProps> = ({
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  loading;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  error;
  notifications;

<<<<<<< HEAD
  on_retry;

=======
<<<<<<< HEAD
  onDismiss
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  loading,
  error,
  notifications,
  onMarkAsRead,
<<<<<<< HEAD
  on_dismiss,
  on_retry;
=======

  onDismiss,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onRetry
=======
  on_dismiss,
  on_retry;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}) => {

  return (
    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onDismiss,;
  onRetry;
}) => {;
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;"
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;

"
            className="mt-2"
            onClick={onRetry}>;
            Try Again;
          </Button>;
        </div>;
      ) : loading ? (;

"
        <div className="p-4 space-y-4">;"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;

      ) : notifications && notifications.length === 0 ? (;"
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) : (;
        notifications && notifications.map((notification) => (;
          <NotificationItem;
            key={notification && notification.id}

            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}

    </ScrollArea>
  )
}

    </ScrollArea>;
  );
    </ScrollArea>;
  );

};

    <ScrollArea className="flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (

  onDismiss,;
  onRetry;
}) => {;
  return (
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button
            variant="outline" 
            size="sm" 

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className="mt-2"
            onClick={onRetry}>;
            Try Again;
          </Button>;
        </div>;
      ) : loading ? (;
<<<<<<< HEAD
<Button ;
=======
<<<<<<< HEAD
<Button ;
=======
<<<<<<< HEAD
          <Button ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            variant="outline" ;
            size="sm" ;
            className="mt-2";
            onClick={onRetry}
          >;
            Try Again;
          </Button>;
        </div>;
      ) :loading ? (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      ) :notifications.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate-light">;
          <p>No notifications yet</p>;
        </div>;
      ) :(;
        notifications.map((notification) => (;
          <NotificationItem;
            key={notification.id}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;

    </ScrollArea>;
  );

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
  onDismiss,
  onRetry
}) => {
  return (
<<<<<<< HEAD
    <ScrollArea className = $2;
=======
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
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </ScrollArea>;
  );

};
        <div className="p - 8 text - center text - amber - 500">;
          <p>{error}</p>;
          <Button;
            variant="outline";
            size="sm";
            className="mt - 2";
    ;"
        <div className="p - 8 text - center text - amber - 500">;"
            variant="outline";""
            size="sm";""
            className="mt - 2";"
            on_click={on_retry}
          >;

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
