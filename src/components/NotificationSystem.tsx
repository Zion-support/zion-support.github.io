<<<<<<< HEAD
import React from "react";

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
=======
import React from 'react';

interface NotificationSystemProps {
  className?: string;
  children?: React.ReactNode;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`notificationsystem-component ${className}`}>
      {children || (
        <div className="p-4 text-center text-gray-600">
          <h3 className="text-lg font-semibold mb-2">NotificationSystem</h3>
          <p>Component placeholder - implementation needed</p>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
>>>>>>> cursor/fix-errors-and-merge-to-main-8d57
