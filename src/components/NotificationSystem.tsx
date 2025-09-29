import React from "react";

export type Notification = { id: string; message: string };

const NotificationSystem: React.FC<{
  notifications: Notification[];
  onRemove: (id: string) => void;
}> = ({ notifications }) => {
  if (!notifications?.length) return null;
  return (
    <div aria-live="polite" className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((n) => (
        <div key={n.id} className="bg-black/70 text-white px-3 py-2 rounded">{n.message}</div>
      ))}
    </div>
  );
};

export default NotificationSystem;

