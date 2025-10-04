import React from "react";

<<<<<<< HEAD
const NotificationSystem: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">NotificationSystem</h2>
      <p className="text-gray-400">NotificationSystem component</p>
    </div>
  );
};

export default NotificationSystem;
=======
export type Notification = {
  id: string;
  message: string;
};

type NotificationSystemProps = {
  notifications: Notification[];
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
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
