import React, { useState, createContext, useContext, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle, Bell } from 'lucide-react';
import { Button } from './Button';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

type Notification = {
  id: string;
  title: string;
  message?: string;
  timestamp: Date;
  dismissible?: boolean;
  duration?: number;
  type: NotificationType;
  action?: { label: string; onClick: () => void };
};

type NotificationContextValue = {
  notifications: Notification[];
  addNotification: (n: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
};

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}

export function NotificationProvider({ children, maxNotifications = 5, position = 'top-right' }: { children: ReactNode; maxNotifications?: number; position?: string }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      dismissible: notification.dismissible ?? true,
      duration: notification.duration ?? 5000,
    };
    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => removeNotification(newNotification.id), newNotification.duration);
    }
  }, [maxNotifications, removeNotification]);

  const clearAll = useCallback(() => setNotifications([]), []);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer position={position} />
    </NotificationContext.Provider>
  );
}

function NotificationContainer({ position }: { position: string }) {
  const { notifications, removeNotification } = useNotifications();

  const getPositionClasses = (pos: string) => {
    switch (pos) {
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
    <div className={`fixed z-50 ${getPositionClasses(position)} space-y-2`}>
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80 max-w-md"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {notification.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
                {notification.type === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
                {notification.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                {notification.type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                {notification.message && (
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                )}
                {notification.action && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2"
                    onClick={notification.action.onClick}
                  >
                    {notification.action.label}
                  </Button>
                )}
              </div>
              {notification.dismissible && (
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { NotificationProvider, useNotifications };
