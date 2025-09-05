import React from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  title?: string;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  className?: string;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onDismiss,
  className = '',
}) => {
  return (
    <div className={`fixed top-4 right-4 z-50 space-y-2 ${className}`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm ${
            notification.type === 'success'
              ? 'bg-green-100 border-green-500 text-green-800'
              : notification.type === 'error'
              ? 'bg-red-100 border-red-500 text-red-800'
              : notification.type === 'warning'
              ? 'bg-yellow-100 border-yellow-500 text-yellow-800'
              : 'bg-blue-100 border-blue-500 text-blue-800'
          }`}
        >
          {notification.title && (
            <h4 className="font-semibold mb-1">{notification.title}</h4>
          )}
          <p className="text-sm">{notification.message}</p>
          {onDismiss && (
            <button
              onClick={() => onDismiss(notification.id)}
              className="mt-2 text-xs underline hover:no-underline"
            >
              Dismiss
            </button>
          )}
        </div>
      ))}
    </div>
  );
};