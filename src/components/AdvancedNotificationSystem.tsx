import React, { useState, useEffect, useCallback } from 'react';
import { 
  XMarkIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  XCircleIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number; // in milliseconds, 0 for persistent
  action?: {
    label: string;
    onClick: () => void;
  };
  timestamp: Date;
}

interface AdvancedNotificationSystemProps {
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  className?: string;
}

const AdvancedNotificationSystem: React.FC<AdvancedNotificationSystemProps> = ({
  maxNotifications = 5,
  position = 'top-right',
  className = ""
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = () => {
    const baseClasses = "fixed z-50 p-4 space-y-3";
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

  const getNotificationIcon = (type: Notification['type']) => {
    const iconClasses = "h-5 w-5";
    switch (type) {
      case 'success':
        return <CheckCircleIcon className={`${iconClasses} text-green-500`} />;
      case 'error':
        return <XCircleIcon className={`${iconClasses} text-red-500`} />;
      case 'warning':
        return <ExclamationTriangleIcon className={`${iconClasses} text-yellow-500`} />;
      case 'info':
        return <InformationCircleIcon className={`${iconClasses} text-blue-500`} />;
      default:
        return <InformationCircleIcon className={`${iconClasses} text-blue-500`} />;
    }
  };

  const getNotificationClasses = (type: Notification['type']) => {
    const baseClasses = "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out";
    switch (type) {
      case 'success':
        return `${baseClasses} border-l-4 border-green-500`;
      case 'error':
        return `${baseClasses} border-l-4 border-red-500`;
      case 'warning':
        return `${baseClasses} border-l-4 border-yellow-500`;
      case 'info':
        return `${baseClasses} border-l-4 border-blue-500`;
      default:
        return `${baseClasses} border-l-4 border-gray-500`;
    }
  };

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });

    setIsVisible(true);

    // Auto-remove notification if duration is specified
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, notification.duration);
    }
  }, [maxNotifications]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
    setIsVisible(false);
  }, []);

  // Global notification methods
  useEffect(() => {
    // Add global methods to window for easy access
    (window as any).notifications = {
      success: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'success', title, message, duration: 5000, ...options }),
      error: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'error', title, message, duration: 0, ...options }),
      warning: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'warning', title, message, duration: 7000, ...options }),
      info: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'info', title, message, duration: 5000, ...options }),
      add: addNotification,
      remove: removeNotification,
      clear: clearAllNotifications
    };

    return () => {
      delete (window as any).notifications;
    };
  }, [addNotification, removeNotification, clearAllNotifications]);

  // Demo notifications on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification({
        type: 'success',
        title: 'Welcome to Zion Tech Group!',
        message: 'Explore our revolutionary AI and quantum computing solutions.',
        duration: 8000,
        action: {
          label: 'Learn More',
          onClick: () => window.location.href = '/pages/AIInnovationHub2026'
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [addNotification]);

  if (notifications.length === 0) return null;

  return (
    <div className={`${getPositionClasses()} ${className}`}>
      {/* Notification Counter */}
      {notifications.length > 3 && (
        <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded-lg text-sm">
          <div className="flex items-center text-gray-600">
            <BellIcon className="h-4 w-4 mr-1" />
            {notifications.length} notifications
          </div>
          <button
            onClick={clearAllNotifications}
            className="text-gray-500 hover:text-gray-700 text-xs underline"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Notifications */}
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`${getNotificationClasses(notification.type)} ${
            index > 2 ? 'opacity-75 scale-95' : ''
          }`}
          style={{
            animationDelay: `${index * 100}ms`,
            zIndex: 1000 - index
          }}
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {notification.message}
                </p>
                {notification.action && (
                  <div className="mt-2">
                    <button
                      onClick={notification.action.onClick}
                      className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                      {notification.action.label}
                    </button>
                  </div>
                )}
                <p className="mt-2 text-xs text-gray-400">
                  {notification.timestamp.toLocaleTimeString()}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => removeNotification(notification.id)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvancedNotificationSystem;