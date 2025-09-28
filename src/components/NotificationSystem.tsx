import React, { useState, useEffect, useCallback } from 'react';

export interface Notification {
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
  notifications: Notification[];
  onRemove: (id: string) => void;
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  enableAnimations?: boolean;
  enableAccessibility?: boolean;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onRemove,
  maxNotifications = 5,
  position = 'top-right',
  enableAnimations = true,
  enableAccessibility = true
}) => {
  const [visibleNotifications, setVisibleNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Limit the number of visible notifications
    const limitedNotifications = notifications.slice(0, maxNotifications);
    setVisibleNotifications(limitedNotifications);
  }, [notifications, maxNotifications]);

  const handleRemove = useCallback((id: string) => {
    onRemove(id);
  }, [onRemove]);

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

  const getNotificationClasses = (type: Notification['type']) => {
    const baseClasses = 'p-4 rounded-lg shadow-lg border-l-4 mb-2 max-w-sm w-full';
    const animationClasses = enableAnimations ? 'transform transition-all duration-300 ease-in-out' : '';
    
    switch (type) {
      case 'success':
        return `${baseClasses} ${animationClasses} bg-green-50 border-green-500 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case 'error':
        return `${baseClasses} ${animationClasses} bg-red-50 border-red-500 text-red-800 dark:bg-red-900 dark:text-red-200`;
      case 'warning':
        return `${baseClasses} ${animationClasses} bg-yellow-50 border-yellow-500 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
      case 'info':
        return `${baseClasses} ${animationClasses} bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
      default:
        return `${baseClasses} ${animationClasses} bg-gray-50 border-gray-500 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
    }
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (visibleNotifications.length === 0) {
    return null;
  }

  return (
    <div 
      className={`fixed ${getPositionClasses()} z-50 space-y-2`}
      role={enableAccessibility ? "alert" : undefined}
      aria-live={enableAccessibility ? "polite" : undefined}
    >
      {visibleNotifications.map((notification) => (
        <div
          key={notification.id}
          className={getNotificationClasses(notification.type)}
          role={enableAccessibility ? "alert" : undefined}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium mb-1">
                {notification.title}
              </h4>
              <p className="text-sm opacity-90">
                {notification.message}
              </p>
              {notification.actions && notification.actions.length > 0 && (
                <div className="mt-2 space-x-2">
                  {notification.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => handleRemove(notification.id)}
              className="flex-shrink-0 ml-2 text-current opacity-50 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
              aria-label={enableAccessibility ? "Close notification" : undefined}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;