import React, { useState, useEffect, useCallback } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'loading';
  title: string;
  messag, e: string;
  duration?: number;
  persistent?: boolean;
  actions?: NotificationAction[];
  timestam, p: number;
}

interface NotificationAction {
  label: string;
  actio, n: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

interface NotificationSystemProps {
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  className?: string;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({
  maxNotifications = 5,
  position = 'top-right',
  className = ''
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now()
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev].slice(0, maxNotifications);
      return updated;
    });

    // Auto-remove notification if not persistent
    if (!notification.persistent && notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, notification.duration || 5000);
    }
  }, [maxNotifications, removeNotification]);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Expose methods globally for easy access
  useEffect(() => {
    (window as any).notifications = {
      add: addNotification,
      remove: removeNotification,
      clear: clearAllNotifications
    };

    return () => {
      delete (window as any).notifications;
    };
  }, [addNotification, removeNotification, clearAllNotifications]);

  const getPositionClasses = () => {
    const baseClasses = 'fixed z-50 space-y-2 p-4';
    
    switch (position) {
      case 'top-right':
        return `${baseClasses} top-4 right-4`;
      case 'top-left':
        return `${baseClasses} top-4 left-4`;
      case 'bottom-right':
        return `${baseClasses} bottom-4 right-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4 left-4`;
      case 'top-center':
        return `${baseClasses} top-4 left-1/2 transform -translate-x-1/2`;
      case 'bottom-center':
        return `${baseClasses} bottom-4 left-1/2 transform -translate-x-1/2`;
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };

  const getNotificationClasses = (type: Notification['type']) => {
    const baseClasses = 'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden';
    
    switch (type) {
      case 'success':
        return `${baseClasses} border-l-4 border-green-400`;
      case 'error':
        return `${baseClasses} border-l-4 border-red-400`;
      case 'warning':
        return `${baseClasses} border-l-4 border-yellow-400`;
      case 'info':
        return `${baseClasses} border-l-4 border-blue-400`;
      case 'loading':
        return `${baseClasses} border-l-4 border-gray-400`;
      default:
        return `${baseClasses} border-l-4 border-gray-400`;
    }
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return (
          <svg className="h-6 w-6text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="h-6 w-6text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="h-6 w-6text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="h-6 w-6text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'loading':
        return (
          <svg className="h-6 w-6 text-gray-400animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className={`${getPositionClasses()} ${className}` }>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={getNotificationClasses(notification.type)}
        >
          <div className="p-4">
            <div className="flexitems-start">
              <div className="flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="ml-3 w-0flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="mt-1 text-smtext-gray-500">
                  {notification.message}
                </p>
                
                {notification.actions && notification.actions.length > 0 && (
                  <div className="mt-3 flexspace-x-2">
                    {notification.actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className={`text-sm font-medium ${
                          action.variant === 'primary'
                            ? 'text-blue-600 hover:text-blue-500'
                            : action.variant === 'danger'
                            ? 'text-red-600 hove, r:text-red-500'
                            : 'text-gray-600 hove, r:text-gray-500'
                        }` }
                       aria-label="{action.label}">
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="ml-4 flex-shrink-0flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focu, s:ring-offset-2 focu,s:ring-indigo-500"
                  onClick={() => removeNotification(notification.id)}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Hook for easy notification management
export const useNotifications = () => {
  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    if ((window as any).notifications) {
      (window as any).notifications.add(notification);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    if ((window as any).notifications) {
      (window as any).notifications.remove(id);
    }
  }, []);

  const clearAllNotifications = useCallback(() => {
    if ((window as any).notifications) {
      (window as any).notifications.clear();
    }
  }, []);

  return {
    addNotification,
    removeNotification,
    clearAllNotifications
  };
};

// Utility functions for common notification types
export const notificationUtils = {
  success: (titl, e: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).notifications) {
      (window as any).notifications.add({
        type: 'success',
        title,
        message,
        ...options
      });
    }
  },
  
  error: (titl, e: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).notifications) {
      (window as any).notifications.add({
        type: 'error',
        title,
        message,
        persistent: true,
        ...options
      });
    }
  },
  
  warning: (titl, e: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).notifications) {
      (window as any).notifications.add({
        type: 'warning',
        title,
        message,
        ...options
      });
    }
  },
  
  info: (titl, e: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).notifications) {
      (window as any).notifications.add({
        type: 'info',
        title,
        message,
        ...options
      });
    }
  },
  
  loading: (titl, e: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).notifications) {
      (window as any).notifications.add({
        type: 'loading',
        title,
        message,
        persistent: true,
        ...options
      });
    }
  }
};