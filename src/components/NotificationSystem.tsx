import React from 'react';
export type Notification = {
  id: string;
  message: string;
};
type NotificationSystemProps = {
  notifications: Notification[];
  onAddNotification: (notification: Notification) => void;
  onRemoveNotification: (id: string) => void;
};
export default function NotificationSystem({
  notifications,
  onAddNotification,
  onRemoveNotification,
}: NotificationSystemProps): React.JSX.Element | null {
  if (!notifications?.length) return null;
  return (
    <div aria-live='polite' aria-atomic='true'>
      {notifications.map(n => (
        <button key={n.id} onClick={() => onRemoveNotification(n.id)}>
          {n.message}
        </button>
      ))}
    </div>
  );
}
