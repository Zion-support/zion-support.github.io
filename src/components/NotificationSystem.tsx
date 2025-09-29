import React from "react";

export interface Notification {
  id: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
}

interface NotificationSystemProps {
  notifications: Notification[];
  onRemove: (id: string) => void;
}

export default function NotificationSystem({ notifications, onRemove }: NotificationSystemProps): React.JSX.Element {
  return (
    <div aria-live="polite" aria-atomic="true" className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((n) => (
        <div key={n.id} role="status" className="bg-white text-black rounded px-3 py-2 shadow">
          <div>{n.message}</div>
          <button onClick={() => onRemove(n.id)} aria-label="Dismiss">×</button>
        </div>
      ))}
    </div>
  );
}

