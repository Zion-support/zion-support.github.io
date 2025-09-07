<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface Notification {
  id: string,
  type: 'success' | 'error' | 'warning' | 'info',
  message: string,
=======
import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle  } from 'lucide-react';
ursor/automate-test-improve-and-merge-code-646c;
  id: string;
  type: "success" | "error" | "warning" | "info";title?: string;
  message: string;
  duration?: number;
}const getNotificationStyles = (type: Notification["type"]): string => {const baseStyles = "border-l-4";
  const typeStyles = {success: "bg-green-50 border-green-400 text-green-800";
    error: "bg-red-50 border-red-400 text-red-800";
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800";
    info: "bg-blue-50 border-blue-400 text-blue-800";
  }
  return `${baseStyles} ${typeStyles[type]}`;
}
export default function NotificationSystem({notifications;
  onDismiss;
key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification.title && (<h4 className="font-medium mb-1">{notification.title}</h4>)}
              <p className="text-sm">{notification.message}</p>;
            </div>;
            {onDismiss && (<button;
                onClick={() => onDismiss(notification.id)}
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion  } from 'framer-motion';
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' }
type NotificationContextValue = {notify: (message: string, tone?: 'default' | 'success' | 'error') => void;
}
const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} })export function useToast() {return useContext(NotificationContext)}
export function NotificationProvider() {const [toasts, setToasts] = useState<Toast[]>([])const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {const id = Math.random().toString(36).slice(2)setToasts((prev) => [...prev, { id, message, tone }])setTimeout(() => {setToasts((prev) => prev.filter((t) => t.id !== id))}, 3000)}, [])success: "bg-green-50 border-green-400 text-green-800",error: "bg-red-50 border-red-400 text-red-800",warning: "bg-yellow-50 border-yellow-400 text-yellow-800",info: "bg-blue-50 border-blue-400 text-blue-800";
    info: "bg-blue-50 border-blue-400 text-blue-800";
  }return `${baseStyles} ${typeStyles[type]}`;
}import React from 'react';
import React, { createContext, useContext, useState, ReactNode } from 'react';
interface Notification  {id: string;
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';


  id: string;


=======
<<<<<<< HEAD
<<<<<<< HEAD
interface Notification {
=======
import React from "react";
export interface Notification {
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  id: string;
  type: "success" | "error" | "warning" | "info";

  type: "success" | "error" | "warning" | "info";

>>>>>>> origin/main
=======
import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

<<<<<<< HEAD
<<<<<<< HEAD

  id: string;
<<<<<<< HEAD
  type: "success" | "error" | "warning" | "info";

pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  type: 'success' | 'error' | 'warning' | 'info';

  id: string;
  type: "success" | "error" | "warning" | "info";
interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";

pr-12243
  type: 'success' | 'error' | 'warning' | 'info';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  title?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
pr-12243
const getNotificationStyles = (type: Notification["type"]): string => {
  const baseStyles = "border-l-4";
  const typeStyles = {
    success: "bg-green-50 border-green-400 text-green-800"
    error: "bg-red-50 border-red-400 text-red-800"
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800"
    info: "bg-blue-50 border-blue-400 text-blue-800"
  }
  return `${baseStyles} ${typeStyles[type]}`;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface NotificationSystemProps {
<<<<<<< HEAD
  notifications: Notification[],
  onDismiss?: (id: string) => void,
  className?: string;
=======
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
<<<<<<< HEAD
const getNotificationStyles = (type: Notification["type"]): string => {
  const baseStyles = "border-l-4";
  const typeStyles = {
    success: "bg-green-50 border-green-400 text-green-800"
    error: "bg-red-50 border-red-400 text-red-800"
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800"
    info: "bg-blue-50 border-blue-400 text-blue-800"
  }
  return `${baseStyles} ${typeStyles[type]}`;
>>>>>>> origin/main
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications;
  onDismiss;
  className;
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onDismiss,
  position = 'top-right',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}) => {
  const [visibleNotifications, setVisibleNotifications] = useState<Notification[]>([]);

  const handleDismiss = useCallback((id: string) => {
    setVisibleNotifications(prev => prev.filter(n => n.id !== id));
    onDismiss?.(id);
  }, [onDismiss]);

  useEffect(() => {
    setVisibleNotifications(notifications);
  }, [notifications]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    notifications.forEach(notification => {
      if (notification.duration && notification.duration > 0) {
        const timer = setTimeout(() => {
          handleDismiss(notification.id);
        }, notification.duration);
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [notifications, handleDismiss]);

  const getNotificationStyles = (type: Notification['type']) => {
    const baseStyles = 'border-l-4';
    switch (type) {
<<<<<<< HEAD
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
=======
      case 'success':
        return `${baseStyles} border-green-500 bg-green-50 text-green-800`;
      case 'error':
        return `${baseStyles} border-red-500 bg-red-50 text-red-800`;
      case 'warning':
        return `${baseStyles} border-yellow-500 bg-yellow-50 text-yellow-800`;
      case 'info':
        return `${baseStyles} border-blue-500 bg-blue-50 text-blue-800`;
      default:
        return `${baseStyles} border-gray-500 bg-gray-50 text-gray-800`;
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
pr-12243
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPositionStyles = () => {
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
  };
=======
          key={notification.id};
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`};

<<<<<<< HEAD
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
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' };

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
};

const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} }),

export function useToast() {
  return useContext(NotificationContext)
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, tone }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, []);
>>>>>>> pr-11992

  return (
    <div className={`fixed top-4 right-4 z-50 space-y-2 ${className}`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {notification.title && (
                <h4 className="font-medium mb-1">{notification.title}</h4>
              )}
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
<<<<<<< HEAD
                className="ml-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
=======
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
<<<<<<< HEAD
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' }
type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
=======
            {onDismiss && (<button;}
                onClick = {() =    /> onDismiss(notification.id)}
import React, { createContext, useContext,;}
  useState, useCallback, ReactNode } from 'react'
import { AnimatePresence, motion  } from 'framer-motion'
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error';}

type NotificationContextValue = {notify: (message: string, tone?: 'default' | 'success' | 'error') => void;}

const NotificationContext = createContext<NotificationContextValue    />({ notify: () => {}
})export function useToast()
  return useContext(NotificationContext
export function NotificationProvider() {const [toasts, setToasts] = useState<Toast[]    />([])const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => ;}"
  const id = Math.random().toString(36).slice(2)setToasts((prev) => [...prev, { id, message, tone }])setTimeout(() => {setToasts((prev) => prev.filter((t) => t.id !== id))}, 3000)}, [])success: \"bg-green-50 border-green-400 text-green-800\",error: \"bg-red-50 border-red-400 text-red-800\",warning: \"bg-yellow-50 border-yellow-400 text-yellow-800\",info: \'bg-blue-50 border-blue-400 text-blue-800\';"
    info: \'bg-blue-50 border-blue-400 text-blue-800\'
  }return `${baseStyles} ${typeStyles[type]}`
}import React from 'react'
import React, { createContext, useContext, useState, ReactNode } from 'react'
interface Notification  {id: string;}
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
  title?: string
  message: string;}
  duration?: number;}

interface NotificationSystemProps {
  notifications: Notification[]
  onDismiss?: (id: string) => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
const NotificationSystem: React.FC<NotificationSystemProps    /> = ({ notifications,
  onDismiss}
  position = 'top-right'}
   }) => {

  const [visibleNotifications, setVisibleNotifications] = useState<Notification[]    />([])
const handleDismiss = useCallback((id: string) => {
    setVisibleNotifications(prev => prev.filter(n => n.id !== id));}
    onDismiss?.(id);}
  }, [onDismiss])
  useEffect(() => {

    setVisibleNotifications(notifications);}
  }, [notifications])
  useEffect(() => {

    const timers: ReturnType<typeof setTimeout    />[] = []
    notifications.forEach(notification = > {
  if($2) {

  const timer = setTimeout(() => {}
          handleDismiss(notification.id);}
        }, notification.duration)
        timers.push(timer)
    })
    return () => {}
      timers.forEach(timer => clearTimeout(timer))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} })
export function useToast() {
  return useContext(NotificationContext)
}
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, tone }])
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
import React from 'react';

<<<<<<< HEAD
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
=======
  if (visibleNotifications.length === 0) return null;

  return (
    <div className={`fixed ${getPositionStyles()} z-50 space-y-2`}>
      {visibleNotifications.map(notification => (
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
<<<<<<< HEAD
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
        <NotificationItem
          key={notification.id}
className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
<<<<<<< HEAD
<<<<<<< HEAD
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />

pr-12243
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              <div className="flex items-start space-x-2">
                {getIcon(notification.type)}
                <div className="flex-1">
                  {notification.title && (
                    <h4 className="font-medium mb-1">{notification.title}</h4>
                  )}
                  <p className="text-sm">{notification.message}</p>
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
              </div>
            </div>
            {onDismiss && (
              <button
                onClick={() => handleDismiss(notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
=======
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />

<<<<<<< HEAD
const NotificationContainer: React.FC = () => {}
 ;}
  const { notifications, removeNotification } = useNotifications()
=======
pr-12243
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return ("
    <div className=\"fixed top-4 right-4 z-50 space-y-2\"    />
      {notifications.map((notification) => (}
        <div;}
key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
            />"
          <div className=\"flex items-start justify-between\"    />"
            <div className=\"flex-1\"    />"
              <div className=\"flex items-start space-x-2\"    />
                {getIcon(notification.type)}"
                <div className=\"flex-1\"    />
                  {notification.title && (}"
                    <h4 className=\"font-medium mb-1\"    />{notification.title}</h4>
                  )}"
                  <p className=\"text-sm\"    />{notification.message}</p>
                </div>
              </div>
            </div>
            {onDismiss && (}
              <button;}
onClick={() =    /> handleDismiss(notification.id)}"
                className=\"ml-2 text-gray-400 hover: text-gray-600 transition-colors\"
              >"
                <X className=\"h-4 w-4\"    />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
              </button>
            )}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/main
      ))}
    </div>
<<<<<<< HEAD
  );
};

<<<<<<< HEAD
export default NotificationSystem;
=======
      </div>
    </NotificationContext.Provider>
  )
}
>>>>>>> pr-11992
=======
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  const Icon = icons[notification.type];
export default NotificationSystem;

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

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
=======
  )
}
              {notification.title && (
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      ))}
<<<<<<< HEAD
    </div>;
  );
=======
    </div>
  )
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
export default NotificationSystem;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {notification.title && (
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
        <div
          key={notification && notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification && notification.type)}`}>;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification && notification.title && (;
                <h4 className="font-medium mb-1">{notification && notification.title}</h4>;
              )}
}
}

  return (
<div className="fixed top - 4 right - 4 z - 50 space - y-2">;
      {notifications.map ((notification) => (
        <div;
          key={notification.id}
          className={`max - w-sm w - full border rounded - lg p - 4 shadow - lg ${getNotificationStyles (notification.type)}`}
        >;
          <div className="flex items - start justify - between">;
            <div className="flex - 1">;
              {notification.title && (
                <h4 className="font - medium mb - 1">{notification.title}</h4>)}
              <p className="text - sm">{notification.message}</p>;
            </div>;

}
const NotificationItem: React.FC<{
  notification: Notification;
  onRemove: (id: string) => void;
}> = ({ notification, onRemove }) => {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

pr-12243
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  const Icon = icons[notification.type];
<<<<<<< HEAD
=======
export default NotificationSystem;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export default NotificationSystem;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
    <div className={colors[notification.type] + ' text-white p-4 rounded-lg shadow-lg max-w-sm'} />"
      <div className=\"flex items-start\" />"
        <Icon className=\"w-5 h-5 mt-0.5 mr-3 flex-shrink-0\" />"
        <div className=\"flex-1\" />"
          <h4 className=\"font-semibold\" />{notification.title}</h4>"
          <p className=\"text-sm opacity-90\" />{notification.message}</p>
        </div>
        <button;
onClick={() = /> onRemove(notification.id)}"
          className=\"ml-3 flex-shrink-0 hover: opacity-75\"
        >"
          <X className=\"w-4 h-4\" />
        </button>
      </div>
    </div>
  )
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
        <div;
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">"
            <div className="flex-1">

"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
export const useNotifications = (
 ;
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');) => {
  return $3;}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
<<<<<<< HEAD
  }
  return context;
};

"
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
