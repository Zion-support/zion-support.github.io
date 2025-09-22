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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;
      {error ? (;
        <div className="p-8 text-center text-amber-500">;
          <p>{error}</p>;
<<<<<<< HEAD

        <div className="p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;
        </div>;

            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ));
      )}
    </ScrollArea>;

=======
 {;
  error ? (<div className="p-8 text-center text-amber-500" > <p >{;"  error ";"}</p> <Button > Try Again </Button> </div>) : loading ? (<div className="p-4 space-y-4" > <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> </div>) : notifications.length === 0 ? (<div className="p-8" > <EmptyState /> </div>) : (notifications.map ( (notification) => (<NotificationItem key= {;
  notification.id ;
}notification= {;
  notification ;
}onMarkAsRead= {;
  onMarkAsRead ;
}onDismiss= {;
  onDismiss ;
}/>) ) ) ;
}</ScrollArea>) ;
};""
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
