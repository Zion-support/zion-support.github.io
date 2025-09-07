<<<<<<< HEAD
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

  title?: string;
  message: string;
  duration?: number;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
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

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              <div className="flex items-start space-x-2">
                {getIcon(notification.type)}
                <div className="flex-1">
                  {notification.title && (
                    <h4 className="font-medium mb-1">{notification.title}</h4>
                  )}
                  <p className="text-sm">{notification.message}</p>
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

const NotificationContainer: React.FC = () => {}
 ;}
  const { notifications, removeNotification } = useNotifications()
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
              </button>
            )}
          </div>
        </div>


      ))}
    </div>
<<<<<<< HEAD
  );
};

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
      ))}
    </div>;
  );
}
<<<<<<< HEAD
  }
  return context;
};

"
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
