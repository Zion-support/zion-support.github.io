

  id: string;
  type: "success" | "error" | "warning" | "info";

  title?: string;
  message: string;
  duration?: number;
}

const getNotificationStyles = (type: Notification["type"]): string => {
  const baseStyles = "border-l-4";
  const typeStyles = {
    success: "bg-green-50 border-green-400 text-green-800"
    error: "bg-red-50 border-red-400 text-red-800"
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800"
    info: "bg-blue-50 border-blue-400 text-blue-800"
  }
  return `${baseStyles} ${typeStyles[type]}`;
}
export default function NotificationSystem({
  notifications
  onDismiss
key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {notification.title && (
                <h4 className="font-medium mb-1">{notification.title}</h4>)}
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' },

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
},

const NotificationContext = $2;
export function useToast() {
  return useContext(NotificationContext)
}

export function NotificationProvider({ children }: { children: ReactNode}) {
  const [toasts, setToasts] = useState<Toast[]>([]),

  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice($2);
    setToasts((prev) => [...prev, { id, message, tone }]),
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])
    success: "bg-green-50 border-green-400 text-green-800",
    error: "bg-red-50 border-red-400 text-red-800",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    info: "bg-blue-50 border-blue-400 text-blue-800",

  };
  return `${baseStyles} ${typeStyles[type]}`;
};

import React from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
}

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

const NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (

      ))}
    </div>
  );
};

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  const Icon = icons[notification.type];

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="fixed inset-x-0 top-4 z-[100] flex justify-center pointer-events-none">
        <div className="w-full max-w-md px-4">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y: -8 }}
                className={`mb-2 pointer-events-auto rounded-lg border backdrop-blur px-4 py-3 shadow-lg ${
                  toast.tone === 'success'
                    ? 'border-emerald-300/50 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                    : toast.tone === 'error'
                    ? 'border-rose-300/50 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200'
                    : 'border-gray-200 bg-white/90 text-gray-900 dark:border-gray-800 dark:bg-gray-900/90 dark:text-gray-100'
                }`}
              >
                <div className="text-sm font-medium">{toast.message}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

