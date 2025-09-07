


  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise<void>,
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
export const NotificationList: React.FC < NotificationListProps> = ({
  loading;
  error;
  notifications;
  onMarkAsRead;


  loading,
  error,
  notifications,
  onMarkAsRead,

  onDismiss,

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
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;

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

    