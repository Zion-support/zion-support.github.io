import React from "react";

export type Notification = {
  id: string;
  message?: string;
  type?: "info" | "success" | "warning" | "error";
};

export default function NotificationSystem({
  notifications,
  onRemove,
}: {
  notifications: Notification[];
  onRemove: (id: string) => void;
}) {
  if (!notifications?.length) return null;
  return (
    <div aria-live="polite" aria-atomic="true" className="fixed bottom-4 right-4 space-y-2 z-50">
      {notifications.map((n) => (
        <div key={n.id} className="bg-black/80 text-white px-3 py-2 rounded shadow">
          <div className="flex items-center gap-3">
            <span>{n.message ?? "Notification"}</span>
            <button onClick={() => onRemove(n.id)} aria-label="Dismiss" className="opacity-70 hover:opacity-100">
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

