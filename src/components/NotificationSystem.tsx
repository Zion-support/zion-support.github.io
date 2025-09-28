import React, { useState, useEffect, useCallback } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

interface NotificationSystemProps {
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  maxNotifications = 5,
  position = 'top-right'
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    
    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });

    // Auto-remove after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  }, [maxNotifications, removeNotification]);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Expose methods globally for easy access
  useEffect(() => {
    (window as Window & { notifications?: { add: typeof addNotification; remove: typeof removeNotification; clear: typeof clearAll } }).notifications = {
      add: addNotification,
      remove: removeNotification,
      clear: clearAll
    };
  }, [addNotification, removeNotification, clearAll]);

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  const getTypeClasses = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 border-green-600';
      case 'error':
        return 'bg-red-500 border-red-600';
      case 'warning':
        return 'bg-yellow-500 border-yellow-600';
      case 'info':
        return 'bg-blue-500 border-blue-600';
      default:
        return 'bg-gray-500 border-gray-600';
    }
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '•';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className={`fixed z-50 ${getPositionClasses()} space-y-2`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            relative max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 p-4
            ${getTypeClasses(notification.type)}
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-xl
          `}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-bold">
                {getTypeIcon(notification.type)}
              </span>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-white">
                {notification.title}
              </h3>
              <p className="mt-1 text-sm text-white opacity-90">
                {notification.message}
              </p>
              
              {notification.actions && notification.actions.length > 0 && (
                <div className="mt-3 flex space-x-2">
                  {notification.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-2 py-1 rounded transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="flex-shrink-0 ml-2 text-white hover:text-gray-200 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      ))}
      
      {notifications.length > 1 && (
        <button
          onClick={clearAll}
          className="text-xs text-gray-500 hover:text-gray-700 bg-white px-2 py-1 rounded shadow"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default NotificationSystem;