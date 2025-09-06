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
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}interface NotificationContextType  {notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
}const NotificationContext  = createContext<NotificationContextType | undefined>(undefined)interface NotificationProviderProps  {children: ReactNode;
}export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {const [notifications, setNotifications]  = useState<Notification[]>([])const addNotification = (notification: Omit<Notification, 'id'>) => {const id = Math.random().toString(36).substr(2, 9)const newNotification  = { ...notification, id }setNotifications(prev => [...prev, newNotification])if (notification.duration !== 0) {setTimeout(() => {removeNotification(id)}, notification.duration || 5000)}
  }const removeNotification = (id: string) => {setNotifications(prev => prev.filter(notification => notification.id !== id))}return (<NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>;
      {children}
      <NotificationContainer />;
    </NotificationContext.Provider>;
  )}const NotificationContainer: React.FC = () => {const { notifications, removeNotification }  = useNotifications()return (<div className="fixed top-4 right-4 z-50 space-y-2">;
      {notifications.map((notification) => (ursor/automate-test-improve-and-merge-code-646c;
        <div;
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              <div className="flex items-start space-x-2">;
                {getIcon(notification.type)}
                <div className="flex-1">;
                  {notification.title && (<h4 className="font-medium mb-1">{notification.title}</h4>;
                  )}
                  <p className="text-sm">{notification.message}</p>;
                </div>;
              </div>;
            </div>;
            {onDismiss && (<button;
                onClick={() => handleDismiss(notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors";
              >;
                <X className="h-4 w-4" />;
              </button>;
            )}
          </div>;
        </div>;
        <NotificationItem;
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />;
      ))}
    </div>;
  )}export default NotificationSystem;
ursor/automate-test-improve-and-merge-code-646c;
              {notification.title && (<p className="text-sm">{notification.message}</p>;
            </div>;
            {onDismiss && (<button;
                onClick={() => onDismiss(notification.id)}
        <div;
          key={notification && notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification && notification.type)}`}>;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification && notification.title && (<h4 className="font-medium mb-1">{notification && notification.title}</h4>;
              )}
}
}
const NotificationItem: React.FC<{notification: Notification;
  onRemove: (id: string) => void;
}> = ({ notification, onRemove }) => {const icons = {success: CheckCircle,error: AlertCircle,warning: AlertTriangle,info: Info;
  }const colors = {success: 'bg-green-500',error: 'bg-red-500',warning: 'bg-yellow-500',info: 'bg-blue-500';
  }const Icon  = icons[notification.type];info: 'bg-blue-500';
  }const Icon  = icons[notification.type];return (<div className={colors[notification.type] + ' text-white p-4 rounded-lg shadow-lg max-w-sm'}>;
      <div className="flex items-start">;
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />;
        <div className="flex-1">;
          <h4 className="font-semibold">{notification.title}</h4>;
          <p className="text-sm opacity-90">{notification.message}</p>;
        </div>;
        <button;
          onClick={() => onRemove(notification.id)}
          className="ml-3 flex-shrink-0 hover:opacity-75";
        >;
          <X className="w-4 h-4" />;
        </button>;
      </div>;
    </div>;
  )}export const useNotifications = () => {const context = useContext(NotificationContext)if (context === undefined) {throw new Error('useNotifications must be used within a NotificationProvider')}
  return context;
}ursor/automate-test-improve-and-merge-code-646c;