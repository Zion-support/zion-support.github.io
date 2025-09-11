<<<<<<< HEAD
<<<<<<< HEAD
import React from './react';
;
export interface Notification {
export interface Notification {;
import React from "react";

export interface Notification {
export interface Notification {;





=======

=======
import React from "react";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  duration?: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface NotificationSystemProps {
interface NotificationSystemProps {;
  notifications: Notification[];
  on_dismiss?: (id: string) => void;
}

const getNotificationStyles = (type: Notification["type"]): string => {;
  const baseStyles = "border-l-4";
  const typeStyles = {;
    success: "bg-green-50 border-green-400 text-green-800",;
    error: "bg-red-50 border-red-400 text-red-800",;
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",;
    info: "bg-blue-50 border-blue-400 text-blue-800",;
<<<<<<< HEAD
  };
  return `${baseStyles} ${typeStyles[type]}`;
};
export default function NotificationSystem(): any ({;
  notifications,;
  onDismiss,;
}: NotificationSystemProps) {;
  if (notifications && notifications.length === 0) return null;
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">;
      {notifications && notifications.map((notification) => (;
        <div
          key={notification && notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification && notification.type)}`}>;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification && notification.title && (;
                <h4 className="font-medium mb-1">{notification && notification.title}</h4>;
              )}
              <p className="text-sm">{notification && notification.message}</p>;
            </div>;
            {onDismiss && (;
              <button
                onClick={() => onDismiss(notification && notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600";
              >;
                ×;
              </button>;
            )}
          </div>;
        </div>;
      ))}
    </div>;
  );
}
import React from 'react';
interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
}
interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
  className?: string;
=======

interface NotificationSystemProps {
interface NotificationSystemProps {;
  notifications: Notification[];
  onDismiss?: (id: string) => void;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

          key;


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
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    success: "bg-green-50 border-green-400 text-green-800",
    error: "bg-red-50 border-red-400 text-red-800",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    info: "bg-blue-50 border-blue-400 text-blue-800",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  return `${baseStyles} ${typeStyles[type]}`;
};

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
<<<<<<< HEAD
<<<<<<< HEAD
export default function NotificationSystem({
  notifications,
  onDismiss,
key={notification.id},
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`},

        >,
          <div className="flex items-start justify-between">,
            <div className="flex-1">,
              {notification.title && (,
                <h4 className="font-medium mb-1">{notification.title}</h4>)},
              <p className="text-sm">{notification.message}</p>,
            </div>,
            {onDismiss && (,
              <button,
                onClick={() => onDismiss(notification.id)},;
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react',;
import { AnimatePresence, motion } from 'framer-motion',;
;
export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' },

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
},

const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} }),

export function useToast() {
  return useContext(NotificationContext)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]),

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      default: 
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function NotificationSystem({
  notifications,
  onDismiss,


  if (notifications.length === 0) return null;

<<<<<<< HEAD
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
  if (notifications.length === 0) return null;
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
=======
  return (
<<<<<<< HEAD
    <div className={`fixed top-4 right-4 z-50 space-y-2 ${className}`}>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>
<<<<<<< HEAD


}



      ))}
    </div>;
  );
}
}

}
}
=======
      ))}
    </div>
  );

const getNotificationStyles = (type: Notification["type"]): string => {
  const base_styles = "border - l-4";
  const type_styles = {
    success: "bg - green - 50 border - green - 400 text - green - 800",
    error: "bg - red - 50 border - red - 400 text - red - 800",
    warning: "bg - yellow - 50 border - yellow - 400 text - yellow - 800",
    info: "bg - blue - 50 border - blue - 400 text - blue - 800",
  }
  return `${base_styles} ${type_styles[type]}`;
}
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            {on_dismiss && (
              <button;
                on_click={() => on_dismiss (notification.id)}
                className="ml - 2 text - gray - 400 hover:text - gray - 600";
              >;
                ×;
              </button>)}
          </div>;
        </div>))}
    </div>);
}

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

}

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
