import React from 'react';
exporttypeNotification = {
  id: string; message: string;
};
typeNotificationSystemProps = { 
  notifications: Notification[]; onAddNotification: (notification: Notification) => void;
  onRemoveNotification: (id: string) = > void;
 };
exportdefaultfunction NotificationSystem({
  notifications
  onAddNotification
  onRemoveNotification
}: NotificationSystemProps): React.JSX.Element | null { 
  if (!notifications?.length) returnnull;
  return (
    <divaria-live = 'polite' aria-atomic='true'>
      {notifications.map(n = > (
        <buttonkey = { n.id  }onClick={ () = > onRemoveNotification(n.id) }>
          {n.message}
        </button>
      ))}
    </div>
  );
}
