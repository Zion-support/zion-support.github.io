<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
=======
import React, {_createContext, _useContext, _useState, _ReactNode} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface Notification {_id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;}

interface NotificationContextType {_notifications: Notification[];
  addNotification: (_notification: Omit<Notification, _'id'>) => void;
  removeNotification: (_id: string) => void;}

const _NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

interface NotificationProviderProps {_children: ReactNode;}

export const NotificationProvider: React.FC<NotificationProviderProps> = (_{_children, _}) => {_const [notifications, _setNotifications] = useState<Notification[]>([]);

  const _addNotification = (_notification: Omit<Notification, _'id'>) => {
    const _id = Math.random().toString(36).substr(2, _9);
    const _newNotification = { ...notification, _id};

    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration !== 0) {_setTimeout__(() => {
        removeNotification(id);}, notification.duration || 5000);
    }
  };

  const _removeNotification = (_id: string) => {_setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
<<<<<<< HEAD
    );
  };
=======
          key={notification.id},
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`},

        >,
<<<<<<< HEAD
          <div className="flex items-start justify-between">,
            <div className="flex-1">,
              {notification.title && (
                <h4 className="font-medium mb-1">{notification.title}</h4>)},
              <p className="text-sm">{notification.message}</p>,
=======
          <div className=&quot;flex items-start justify-between&quot;>,
            <div className=&quot;flex-1&quot;>,
              {notification.title && (,
                <h4 className=&quot;font-medium mb-1&quot;>{notification.title}</h4>)};
              <p className=&quot;text-sm&quot;>{notification.message}</p>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>,
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)},
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react',
import { AnimatePresence, motion } from 'framer-motion',

export type Toast = { id: string, message: string, tone?: 'default' | 'success' | 'error' },

type NotificationContextValue = {
  notify: (message: string, tone?: 'default' | 'success' | 'error') => void,
},

const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} }),

export function useToast() {
  return useContext(NotificationContext),
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]),

  const notify = useCallback((message: string, tone: 'default' | 'success' | 'error' = 'default') => {
    const id = Math.random().toString(36).slice(2),
    setToasts((prev) => [...prev, { id, message, tone }]),
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id)),
    }, 3000),
  }, []),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
    );};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <NotificationContext.Provider
      value={_{ notifications, _addNotification, _removeNotification}}
    >
<<<<<<< HEAD
      {children}
<<<<<<< HEAD
=======
      {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <NotificationContainer />
=======
      <div className=&quot;fixed inset-x-0 top-4 z-[100] flex justify-center pointer-events-none&quot;>
        <div className=&quot;w-full max-w-md px-4&quot;>
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    </NotificationContext.Provider>
<<<<<<< HEAD
  );
};

const NotificationContainer: React.FC = () => {_const { notifications, _removeNotification} = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {_notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          notification={_notification}
          onRemove={_removeNotification}
        />
      ))}
    </div>
  );
};

const NotificationItem: React.FC<{_notification: Notification;
  onRemove: (_id: string) => void;}> = (_{_notification, _onRemove}) => {_const _icons = {
    success: CheckCircle, _error: AlertCircle, _warning: AlertTriangle, _info: Info, };

  const _colors = {_success: 'bg-green-500', _error: 'bg-red-500', _warning: 'bg-yellow-500', _info: 'bg-blue-500', };

  const _Icon = icons[notification.type];

  return (_<div
      className={_colors[notification.type] +
        ' text-white p-4 rounded-lg shadow-lg max-w-sm'}
    >
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold">{_notification.title}</h4>
          <p className="text-sm opacity-90">{_notification.message}</p>
        </div>
        <button
          onClick={_() => onRemove(notification.id)}
          className="ml-3 flex-shrink-0 hover:opacity-75"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const _useNotifications = () => {_const _context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider'
    );}
  return context;
};
=======
  ),
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
