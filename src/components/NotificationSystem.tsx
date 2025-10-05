import React from "react";

export type Notification = {
  id: string;
  message: string;
};

type NotificationSystemProps = {
  notifications: Notification[];",
      onRemove: (id: string) => void;
};

export default function NotificationSystem({ notifications, onRemove }: NotificationSystemProps): React.JSX.Element | null {
  if (!notifications?.length) return null;
  return (
    <div aria-live="polite" aria-atomic="true">
      {notifications.map((n) => (
        <button key={n.id} onClick={() => onRemove(n.id)}>{n.message}</button>
      ))}
    </div>
  );
}
