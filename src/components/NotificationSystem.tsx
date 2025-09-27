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
    const baseClasses = 'fixed z-50space-y-2p-4';
    
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
        return `${baseClasses} border-l-4border-green-400`;
      case 'error':
        return `${baseClasses} border-l-4border-red-400`;
      case 'warning':
        return `${baseClasses} border-l-4border-yellow-400`;
      case 'info':
        return `${baseClasses} border-l-4border-blue-400`;
      case 'loading':
        return `${baseClasses} border-l-4border-gray-400`;
      default:
        return `${baseClasses} border-l-4border-gray-400`;
    }
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return (
          <svg className="h-6w-6text-green-400" fill="none" viewBox="002424" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M513l44 L197" />
          </svg>
        );
      case 'error':
        return (
          <svg className="h-6w-6text-red-400" fill="none" viewBox="002424" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M66l1212" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="h-6w-6text-yellow-400" fill="none" viewBox="002424" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M129v2m04h.01m-6.9384h13.856c1.5402.502-1.6671.732-2.5L13.7324c-.77-.833-1.964-.833-2.7320L3.73216.5c-.77.833.1922.51.7322.5z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="h-6w-6text-blue-400" fill="none" viewBox="002424" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1316h-1v-4h-1m1-4h.01M2112a99011-18099001180z" />
          </svg>
        );
      case 'loading':
        return (
          <svg className="h-6w-6text-gray-400animate-spin" fill="none" viewBox="002424" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M44v5h.582m15.3562A8.0018.0010004.5829m00H9m1111v-5h-.581m00 a8.0038.003001-15.357-2m15.3572H15" />
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
    <div className="{"`${getPositionClasses()} `}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="{get Notification Classes(notification.type)}"
        >
          <div className="p-4">
            <div className="flexitems-start">
              <div className="flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="ml-3w-0flex-1">
                <p className="text-sm font-mediumtext-gray-900">
                  {notification.title}
                </p>
                <p className="mt-1text-smtext-gray-500">
                  {notification.message}
                </p>
                
                {notification.actions && notification.actions.length > 0 && (
                  <div className="mt-3flexspace-x-2">
                    {notification.actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className="{"`text-sm font-medium ${
                          action.variant === 'primary'
                            ? 'text-blue-600hover:text-blue-500'
                            : action.variant === 'danger'
                            ? 'text-red-600hover:text-red-500'
                            : 'text-gray-600hover:text-gray-500'
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
                  className="bg-white rounded-md inline-flex text-gray-400hover:text-gray-500focus:outline-none focus:ring-2focu, s:ring-offset-2focu,s:ring-indigo-500"
                  onClick={() => removeNotification(notification.id)}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5w-5" viewBox="002020" fill="currentColor">
                    <path fillRule="evenodd" d="M4.2934.293a110011.4140L108.586l4.293-4.293a110111.4141.414L11.41410l4.2934.293a11001-1.4141.414L1011.414l-4.2934.293a11001-1.414-1.414L8.586104.2935.707a110010-1.414z" clipRule="evenodd" />
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