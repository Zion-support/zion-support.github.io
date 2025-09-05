<<<<<<< HEAD
          key={notification.id},;
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`},;
;
        >,;
          <div className="flex items-start justify-between">,;
            <div className="flex-1">,;
              {notification.title && (;
                <h4 className="font-medium mb-1">{notification.title}</h4>)},;
              <p className="text-sm">{notification.message}</p>,;
            </div>,;
            {onDismiss && (;
              <button;
                onClick={() => onDismiss(notification.id)},;
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react',;
import { AnimatePresence, motion } from 'framer-motion',;
;
export type Toast = { id:string, message:string, tone?:'default' | 'success' | 'error' },;
;
type NotificationContextValue = {;
  notify:(message:string, tone?:'default' | 'success' | 'error') => void,;
},;
;
const NotificationContext = createContext<NotificationContextValue>({ notify:() => {} }),;
;
export function useToast() {;
  return useContext(NotificationContext),;
}
;
export function NotificationProvider({ children } { children:ReactNode }) {;
  const [toasts, setToasts] = useState<Toast[]>([]),;
;
  const notify = useCallback((message:string, tone:'default' | 'success' | 'error' = 'default') => {;
    const id = Math.random().toString(36).slice(2),;
    setToasts((prev) => [...prev, { id, message, tone }]),;
    setTimeout(() => {;
      setToasts((prev) => prev.filter((t) => t.id !== id)),;
    }, 3000),;
  }, []),;
;
  return (;
    <NotificationContext.Provider value={{ notify }}>;
      {children}
      <div className="fixed inset-x-0 top-4 z-[100] flex justify-center pointer-events-none">;
        <div className="w-full max-w-md px-4">;
          <AnimatePresence>;
            {toasts.map((toast) => (;
              <motion.div;
                key={toast.id}
                initial={{ opacity:0, y:-8 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-8 }}
                className={`mb-2 pointer-events-auto rounded-lg border backdrop-blur px-4 py-3 shadow-lg ${;
                  toast.tone === 'success';
                    ? 'border-emerald-300/50 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200';
                    :toast.tone === 'error';
                    ? 'border-rose-300/50 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200';
                    :'border-gray-200 bg-white/90 text-gray-900 dark:border-gray-800 dark:bg-gray-900/90 dark:text-gray-100';
                }`}
              >;
                <div className="text-sm font-medium">{toast.message}</div>;
              </motion.div>;
            ))}
          </AnimatePresence>;
        </div>;
      </div>;
    </NotificationContext.Provider>;
  ),;
}
=======
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
interface Notification {id: string,
  type: 'success' | 'error' | 'warning' | 'info';
  title: string,
  message: string,
  duration?: number}

interface NotificationContextType {notifications: Notification[];
  addNotification: (notification: Omit<Notification, _'id'>) => void;
  removeNotification: (id: string) => void}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

interface NotificationProviderProps {children: ReactNode}

export const NotificationProvider: React.FC<NotificationProviderProps> = (_{children, _}) => {const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, _'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id};

    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration !== 0) {setTimeout__(() => {
        removeNotification(id)}, notification.duration || 5000)
    }
  };

  const removeNotification = (id: string) => {setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    )
  };            </div>,
            {onDismiss && (
              <button,
onClick={() => onDismiss(notification.id)},
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react',
import { AnimatePresence, motion } from 'framer-motion',

export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' },

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
    )};

  return (
    <NotificationContext.Provider,
value={_{ notifications, addNotification, removeNotification}}
    >
      {children}
      <NotificationContainer />
      <div className=&quot;fixed inset-x-0 top-4 z-[100] flex justify-center pointer-events-none&quot;>
        <div className=&quot;w-full max-w-md px-4&quot;>
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div,
key={toast.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`mb-2 pointer-events-auto rounded-lg border backdrop-blur px-4 py-3 shadow-lg ${
                  toast.tone === 'success'
                    ? 'border-emerald-300/50 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                    : toast.tone === 'error'
                    ? 'border-rose-300/50 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200'
                    : 'border-gray-200 bg-white/90 text-gray-900 dark:border-gray-800 dark:bg-gray-900/90 dark:text-gray-100'
                }`}
              >
                <div className=&quot;text-sm font-medium&quot;>{toast.message}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </NotificationContext.Provider>
  )
};

const NotificationContainer: React.FC = () => {const { notifications, removeNotification} = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <NotificationItem,
key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  )
};

const NotificationItem: React.FC<{notification: Notification,
  onRemove: (id: string) => void}> = (_{notification, onRemove}) => {const icons = {
    success: CheckCircle, error: AlertCircle, warning: AlertTriangle, info: Info };

  const colors = {success: 'bg-green-500', error: 'bg-red-500', warning: 'bg-yellow-500', info: 'bg-blue-500' };

  const Icon = icons[notification.type];

  return (_<div,
className={colors[notification.type] +
        ' text-white p-4 rounded-lg shadow-lg max-w-sm'}
    >
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold">{notification.title}</h4>
          <p className="text-sm opacity-90">{notification.message}</p>
        </div>
        <button,
onClick={_() => onRemove(notification.id)}
          className="ml-3 flex-shrink-0 hover:opacity-75"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
};

export const useNotifications = () => {const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider'
    )}
  return context
};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
