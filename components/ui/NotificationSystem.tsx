import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onDismiss,
  position = 'top-right',
}) => {
  const [visibleNotifications, setVisibleNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setVisibleNotifications(notifications);
  }, [notifications]);

  const getNotificationStyles = (type: Notification['type']) => {
    const baseStyles = 'bg-white border-l-4';
    switch (type) {
      case 'success':
        return `${baseStyles} border-green-500 text-green-800`;
      case 'error':
        return `${baseStyles} border-red-500 text-red-800`;
      case 'warning':
        return `${baseStyles} border-yellow-500 text-yellow-800`;
      case 'info':
        return `${baseStyles} border-blue-500 text-blue-800`;
      default:
        return `${baseStyles} border-gray-500 text-gray-800`;
    }
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleDismiss = (id: string) => {
    setVisibleNotifications(prev => prev.filter(notification => notification.id !== id));
    onDismiss?.(id);
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      default:
        return 'top-4 right-4';
    }
  };

  return (
    <div className={`fixed z-50 ${getPositionClasses()}`}>
      <div className="space-y-2">
        {visibleNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {notification.title && (
                  <h4 className="font-medium mb-1">{notification.title}</h4>
                )}
                <p className="text-sm">{notification.message}</p>
              </div>
              {onDismiss && (
                <button
                  onClick={() => handleDismiss(notification.id)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;