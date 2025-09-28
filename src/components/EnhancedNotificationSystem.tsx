/**
 * Enhanced Notification System
 * Provides advanced notification management with animations and accessibility
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  persistent?: boolean;
  actions?: Array<{
    label: string;
    action: () => void;
    variant?: 'primary' | 'secondary';
  }>;
  onClose?: () => void;
  timestamp: Date;
}

interface NotificationSystem {
  success: (title: string, message: string, options?: Partial<Notification>) => string;
  error: (title: string, message: string, options?: Partial<Notification>) => string;
  warning: (title: string, message: string, options?: Partial<Notification>) => string;
  info: (title: string, message: string, options?: Partial<Notification>) => string;
  remove: (id: string) => void;
  clear: () => void;
}

interface NotificationSystemProps {
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  enableAnimations?: boolean;
  enableSounds?: boolean;
  enableVibrations?: boolean;
  enableAccessibility?: boolean;
  className?: string;
}

const EnhancedNotificationSystem: React.FC<NotificationSystemProps> = ({
  maxNotifications = 5,
  position = 'top-right',
  enableAnimations = true,
  enableSounds = false,
  enableVibrations = false,
  enableAccessibility = true,
  className = ''
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Position classes
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  };

  // Type styles
  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-400',
      iconBg: 'bg-green-100',
      title: 'text-green-800',
      message: 'text-green-700'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-400',
      iconBg: 'bg-red-100',
      title: 'text-red-800',
      message: 'text-red-700'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-400',
      iconBg: 'bg-yellow-100',
      title: 'text-yellow-800',
      message: 'text-yellow-700'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-400',
      iconBg: 'bg-blue-100',
      title: 'text-blue-800',
      message: 'text-blue-700'
    }
  };

  // Icons for each type
  const typeIcons = {
    success: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    )
  };

  // Add notification
  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const id = `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification: Notification = {
      ...notification,
      id,
      timestamp: new Date()
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev].slice(0, maxNotifications);
      return updated;
    });

    setIsVisible(true);

    // Play sound if enabled
    if (enableSounds) {
      this.playNotificationSound(notification.type);
    }

    // Vibrate if enabled
    if (enableVibrations && 'vibrate' in navigator) {
      const vibrationPattern = {
        success: [100],
        error: [200, 100, 200],
        warning: [150, 100, 150],
        info: [100]
      };
      navigator.vibrate(vibrationPattern[notification.type]);
    }

    // Auto-remove notification after duration
    if (!notification.persistent && notification.duration !== 0) {
      const duration = notification.duration || 5000;
      const timeout = setTimeout(() => {
        removeNotification(id);
      }, duration);
      timeoutRefs.current.set(id, timeout);
    }

    return id;
  }, [maxNotifications, enableSounds, enableVibrations]);

  // Remove notification
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    
    // Clear timeout if exists
    const timeout = timeoutRefs.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(id);
    }

    // Hide container if no notifications
    setNotifications(current => {
      if (current.length === 1) {
        setIsVisible(false);
      }
      return current;
    });
  }, []);

  // Clear all notifications
  const clearAll = useCallback(() => {
    notifications.forEach(notification => {
      removeNotification(notification.id);
    });
  }, [notifications, removeNotification]);

  // Play notification sound (placeholder for future implementation)
  // const playNotificationSound = (type: Notification['type']) => {
  //   // In a real implementation, you would play actual sound files
  //   console.log(`🔊 Playing ${type} notification sound`);
  // };

  // Cleanup timeouts on unmount
  useEffect(() => {
    const currentTimeouts = timeoutRefs.current;
    return () => {
      currentTimeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  // Expose methods globally for easy access
  useEffect(() => {
    (window as Window & { notificationSystem?: NotificationSystem }).notificationSystem = {
      success: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'success', title, message, ...options }),
      error: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'error', title, message, ...options }),
      warning: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'warning', title, message, ...options }),
      info: (title: string, message: string, options?: Partial<Notification>) =>
        addNotification({ type: 'info', title, message, ...options }),
      remove: removeNotification,
      clear: clearAll
    };
  }, [addNotification, removeNotification, clearAll]);

  if (!isVisible || notifications.length === 0) {
    return null;
  }

  return (
    <div
      className={`fixed z-50 ${positionClasses[position]} ${className}`}
      role={enableAccessibility ? 'alert' : undefined}
      aria-live={enableAccessibility ? 'polite' : undefined}
    >
      <div className="space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className={`
              max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto border-l-4
              ${typeStyles[notification.type].border}
              ${enableAnimations ? 'animate-in slide-in-from-right-full duration-300' : ''}
            `}
            style={{
              animationDelay: enableAnimations ? `${index * 100}ms` : undefined
            }}
            role={enableAccessibility ? 'alert' : undefined}
            aria-labelledby={`notification-title-${notification.id}`}
            aria-describedby={`notification-message-${notification.id}`}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${typeStyles[notification.type].iconBg} rounded-full p-1`}>
                  <div className={typeStyles[notification.type].icon}>
                    {typeIcons[notification.type]}
                  </div>
                </div>
                <div className="ml-3 w-0 flex-1">
                  <p
                    id={`notification-title-${notification.id}`}
                    className={`text-sm font-medium ${typeStyles[notification.type].title}`}
                  >
                    {notification.title}
                  </p>
                  <p
                    id={`notification-message-${notification.id}`}
                    className={`mt-1 text-sm ${typeStyles[notification.type].message}`}
                  >
                    {notification.message}
                  </p>
                  
                  {notification.actions && notification.actions.length > 0 && (
                    <div className="mt-3 flex space-x-2">
                      {notification.actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={action.action}
                          className={`
                            text-sm font-medium rounded px-3 py-1 transition-colors
                            ${action.variant === 'primary' 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }
                          `}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label={enableAccessibility ? 'Close notification' : undefined}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedNotificationSystem;