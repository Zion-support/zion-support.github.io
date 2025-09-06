<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
export interface Notification {

export interface Notification {;
=======
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export interface Notification {
=======
export interface Notification {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  duration?: number;
}
interface NotificationSystemProps {

interface NotificationSystemProps {;
  notifications: Notification[];
  on_dismiss?: (id: string) => void;
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
<<<<<<< HEAD
  notifications
  onDismiss
key={notification.id}
=======
  notifications,
  onDismiss,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
  className,
}: NotificationSystemProps) {
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
key={notification.id},
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`},


type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void
},

const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} }),

export function useToast() {
  return useContext(NotificationContext)
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]),

  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice(2),
    setToasts((prev) => [...prev, { id, message, tone }]),
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, []),

}: NotificationSystemProps) {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}: NotificationSystemProps) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  if (notifications.length === 0) return null;

<<<<<<< HEAD
=======
>>>>>>> origin/main

>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  return (
    <div className={`fixed top-4 right-4 z-50 space-y-2 ${className}`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}: NotificationSystemProps) {
  if (notifications.length === 0) return null;

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
                ;
              </button>;
            )}
          </div>;
        </div>;
      ))}
    </div>;
  );
}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
                ;
              </button>)}
          </div>;
        </div>))}
    </div>);
}
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD

}

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
}
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
