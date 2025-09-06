<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

export interface Notification {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  type: "success" | "error" | "warning" | "info";
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
  title?: string;
  message: string;
  duration?: number;
}

<<<<<<< HEAD
interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onDismiss,
  position = 'top-right',
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
    }
  };

  if (visibleNotifications.length === 0) return null;

  return (
    <div className={`fixed ${getPositionStyles()} z-50 space-y-2`}>
      {visibleNotifications.map(notification => (
=======

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
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' }
type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
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

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
}
<<<<<<< HEAD
interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  className?: string;
}

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
},

const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} }),

export function useToast() {
  return useContext(NotificationContext)
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]),

<<<<<<< HEAD
  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice(2),
    setToasts((prev) => [...prev, { id, message, tone }]),
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, []),

}: NotificationSystemProps) {;
}: NotificationSystemProps) {
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  if (notifications.length === 0) return null;

  return (

=======
  if (notifications.length === 0) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 space-y-2 ${className}`}>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {notifications.map((notification) => (
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
<<<<<<< HEAD
              <div className="flex items-start space-x-2">
                {getIcon(notification.type)}
                <div className="flex-1">
                  {notification.title && (
                    <h4 className="font-medium mb-1">{notification.title}</h4>
                  )}
                  <p className="text-sm">{notification.message}</p>
                </div>
              </div>
            </div>
            {onDismiss && (
              <button
                onClick={() => handleDismiss(notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;
=======
              {notification.title && (
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              >
                ×
              </button>
            )}
          </div>
        </div>
=======
      ))}
    </div>
  );
=======
        <div
          key={notification && notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification && notification.type)}`}>;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification && notification.title && (;
                <h4 className="font-medium mb-1">{notification && notification.title}</h4>;
              )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
}

}
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
export default function NotificationSystem ({
  notifications,
  on_dismiss,
key={notification.id},
          className={`max - w-sm w - full border rounded - lg p - 4 shadow - lg ${getNotificationStyles (notification.type)}`},
        >,
          <div className="flex items - start justify - between">,
            <div className="flex - 1">,
              {notification.title && (,
                <h4 className="font - medium mb - 1">{notification.title}</h4>)},
              <p className="text - sm">{notification.message}</p>,
            </div>,
            {on_dismiss && (,
              <button,
                on_click={() => on_dismiss (notification.id)},
import React, { create_context, useContext, useState, useCallback, ReactNode } from 'react',
import { AnimatePresence, motion } from 'framer-motion',
;
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' },
type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void;
},
const NotificationContext = create_context < NotificationContextValue>({ notify: () => {} }),
export /**
 * use_toast - Function description
 */
function use_toast() {
  return useContext (NotificationContext);
}
export /**
 * NotificationProvider - Function description
 */
function NotificationProvider() {
  const [toasts, set_toasts] = useState < Toast[]>([]),
  const notify = useCallback ((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random ().to_string (36).slice (2),
    set_toasts ((prev) => [...prev, { id, message, tone }]),
    set_timeout (() => {
      set_toasts ((prev) => prev.filter ((t) => t.id !== id));
    }, 3000);
  }, []),
}: NotificationSystemProps) {
  // Check condition
if (return null) {
  $2
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



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
