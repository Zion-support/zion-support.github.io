import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
export interface Notification {
  id: string;,
  type: NotificationType;,
  title: string;,
  message?: string;
  duration?: number;
  action?: {
    label: string;,
    onClick: () => void;
  };
}
interface NotificationContextType {
  notifications: Notification[];,
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id:,  string) => void;,
  clearAllNotifications: () => void;
}
<<<<<<< HEAD

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    );
=======
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context ===,  undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  }
  return context;
};
interface NotificationProviderProps {
  children: React.ReactNode;
}
<<<<<<< HEAD

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newNotification: Notification = {
        id,
        duration: 5000,
        ...notification,
      };

      setNotifications(prev => [...prev, newNotification]);

      // Auto remove notification after duration
      if (newNotification.duration && newNotification.duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, newNotification.duration);
      }
    },
    [],
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id),
    );
  }, []);

=======
export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {,
  const [notifications, setNotifications] = useState<Notification[]>([]);,
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {'
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {,
      id,
      duration: 5000,
      ...notification,
    };,
    setNotifications(prev => [...prev, newNotification]);
    // Auto remove notification after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }
  }, []);,
  const removeNotification = useCallback((id:,  string) => {,
    setNotifications(prev => prev.filter(notification => notification.id !==,  id));
  }, []);,
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  const clearAllNotifications = useCallback(() => {
    setNotifications([]);,
  }, []);,
  const getIcon = (type:,  NotificationType) => {,
    switch (type) {
      case 'success':'
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':'
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'warning':'
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':'
        return <Info className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };
  const getBgColor = (type:,  NotificationType) => {,
    switch (type) {
      case 'success':'
        return 'bg-green-900/50 border-green-500/20';
      case 'error':'
        return 'bg-red-900/50 border-red-500/20';
      case 'warning':'
        return 'bg-yellow-900/50 border-yellow-500/20';
      case 'info':'
        return 'bg-blue-900/50 border-blue-500/20';
      default:
        return 'bg-blue-900/50 border-blue-500/20';
    }
  };
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearAllNotifications,
      }}
    >
      {children}

      {/* Notification Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">"
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
<<<<<<< HEAD
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`max-w-sm w-full ${getBgColor(notification.type)} backdrop-blur-sm rounded-lg border p-4 shadow-lg`}
=======
transition={{ duration: 0.3, ease: "easeInOut" }}"
              className={`max-w-sm w-full ${getBgColor(notification.type)} backdrop-blur-sm rounded-lg border p-4 shadow-lg`}`
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
            >
              <div className="flex items-start">"
                <div className="flex-shrink-0 mr-3">"
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">"
                  <h4 className="text-sm font-semibold text-white">"
                    {notification.title}
                  </h4>
                  {notification.message && (
                    <p className="mt-1 text-sm text-gray-300">"
                      {notification.message}
                    </p>
                  )}
                  {notification.action && (
                    <button
                      onClick={notification.action.onClick}
                      className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium""
                    >
                      {notification.action.label}
                    </button>
                  )}
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors""
                >
                  <X className="w-4 h-4" />"
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};
