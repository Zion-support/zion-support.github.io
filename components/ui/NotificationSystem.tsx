<<<<<<< HEAD
          key={notification.id};
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification.title && (;
                <h4 className="font-medium mb-1">{notification.title}</h4>)};
              <p className="text-sm">{notification.message}</p>;
            </div>;
            {onDismiss && (;
              <button;
                onClick={() => onDismiss(notification.id)};
import React from 'react';


  notifications: Notification[], onDismiss?: (id: string) => void,

  className?: string;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({

  notifications,
  onDismiss,
  className = '',

}) => {
  const getNotificationStyles = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800',
    }
  };
=======
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type Toast = { id: string; message: string; tone?: 'default' | 'success' | 'error' };

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void;
};

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

type NotificationProviderProps = {
  children: ReactNode;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, tone };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <NotificationContainer toasts={toasts} onRemove={removeToast} />
    </NotificationContext.Provider>
  );
};

type NotificationContainerProps = {
  toasts: Toast[];
  onRemove: (id: string) => void;
};

const NotificationContainer: React.FC<NotificationContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${
              toast.tone === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800'
                : toast.tone === 'error'
                ? 'bg-red-50 border-red-200 text-red-800'
                : 'bg-white border-gray-200 text-gray-800'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm">{toast.message}</p>
              </div>
              <button
                onClick={() => onRemove(toast.id)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
