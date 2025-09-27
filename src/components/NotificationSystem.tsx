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
      }, notification.duration || 50 0 0);
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
    const baseClasses = 'fixed z-5 0 space-y-2p-4';
    
    switch (position) {
      case 'top-right':
        return `${baseClasses} top-4right-4`;
      case 'top-left':
        return `${baseClasses} top-4left-4`;
      case 'bottom-right':
        return `${baseClasses} bottom-4right-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4left-4`;
      case 'top-center':
        return `${baseClasses} top-4left-1/2transform -translate-x-1/2`;
      case 'bottom-center':
        return `${baseClasses} bottom-4left-1/2transform -translate-x-1/2`;
      default:
        return `${baseClasses} top-4right-4`;
    }
  };

  const getNotificationClasses = (type: Notification['type']) => {
    const baseClasses = 'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1ring-black ring-opacity-5overflow-hidden';
    
    switch (type) {
      case 'success':
        return `${baseClasses} border-l-4border-green-4 0 0`;
      case 'error':
        return `${baseClasses} border-l-4border-red-4 0 0`;
      case 'warning':
        return `${baseClasses} border-l-4border-yellow-4 0 0`;
      case 'info':
        return `${baseClasses} border-l-4border-blue-4 0 0`;
      case 'loading':
        return `${baseClasses} border-l-4border-gray-4 0 0`;
      default:
        return `${baseClasses} border-l-4border-gray-4 0 0`;
    }
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return (
          <svg className="h-6w-6text-green-4 0 0" fill="none" viewBox="00 2 4 2 4" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 5 1 3 l 4 4 L1 9 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="h-6w-6text-red-4 0 0" fill="none" viewBox="00 2 4 2 4" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M6 6 l 1 2 1 2" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="h-6w-6text-yellow-4 0 0" fill="none" viewBox="00 2 4 2 4" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9 v 2 m0 4 h.0 1 m-6.9 3 8 4 h 1 3.85 6 c1.54 0 2.5 0 2-1.66 7 1.7 3 2-2.5L 1 3.7 3 2 4 c-.77-.8 3 3-1.9 6 4-.8 3 3-2.7 3 2 0 L3.7 3 2 1 6.5c-.77.8 3 3.19 2 2.51.73 2 2.5z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="h-6w-6text-blue-4 0 0" fill="none" viewBox="00 2 4 2 4" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 3 1 6 h-1v-4h-1m1-4h.01M211 2 a9 9 0 1 1-180990 0 1 1 8 0 z" />
          </svg>
        );
      case 'loading':
        return (
          <svg className="h-6w-6text-gray-40 0 animate-spin" fill="none" viewBox="00 2 4 2 4" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4 v 5 h.58 2 m 1 5.3 5 6 2 A8.00 1 8.0 0 1 0 0 0 4.5829m00H 9 m1 1 1 1 v-5h-.58 1 m 0 0 a8.00 3 8.00 3 0 0 1-15.3 5 7-2m 1 5.3 5 7 2 H 1 5" />
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
    <div className={`${getPositionClasses()} `}>
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
              <div className="ml-3w-0flex-1">
                <p className="text-sm font-mediumtext-gray-9 0 0">
                  {notification.title}
                </p>
                <p className="mt-1text-smtext-gray-5 0 0">
                  {notification.message}
                </p>
                
                {notification.actions && notification.actions.length > 0 && (
                  <div className="mt-3flexspace-x-2">
                    {notification.actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className={`text-sm font-medium ${
                          action.variant === 'primary'
                            ? 'text-blue-60 0 hover:text-blue-5 0 0'
                            : action.variant === 'danger'
                            ? 'text-red-60 0 hover:text-red-5 0 0'
                            : 'text-gray-60 0 hover:text-gray-5 0 0'
                        }`}
                       aria-label="{action.label}">
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="ml-4flex-shrink-0flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-40 0 hover:text-gray-50 0 focus:outline-none focus:ring-2focu, s:ring-offset-2focu,s:ring-indigo-5 0 0"
                  onClick={() => removeNotification(notification.id)}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5w-5" viewBox="00 2 0 2 0" fill="currentColor">
                    <path fillRule="evenodd" d="M4.29 3 4.293a 1 1 0 0 1 1.4 1 4 0 L1 0 8.58 6 l4.2 9 3-4.293a 1 1 0 1 1 1.41 4 1.41 4 L 1 1.41 4 1 0 l4.29 3 4.29 3 a1 1 0 0 1-1.41 4 1.41 4 L 1 0 1 1.41 4 l-4.29 3 4.29 3 a1 1 0 0 1-1.4 1 4-1.41 4 L8.58 6 1 0 4.29 3 5.707a 1 1 0 0 1 0-1.41 4 z" clipRule="evenodd" />
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