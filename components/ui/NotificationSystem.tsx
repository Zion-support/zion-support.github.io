
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  id: string;
  type: "success | error" | "warning | info";

  type: "success | error" | "warning | info";

>>>>>>> origin/main
=======
import React, { useState, useEffect, useCallback } from 'react;
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from lucide-react';


=======
export interface Notification {
  id: string;
  type: 'success | error' | 'warning | info';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  type: 'success | error' | 'warning | info';

  id: string;
  type: "success | error" | "warning | info";
interface Notification {
  id: string;
  type: "success | error" | "warning | info";

pr-12243
  type: 'success | error' | 'warning | info';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  title?: string;
}


interface NotificationSystemProps {}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications;
  onDismiss;
  className;
=======

}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onDismiss,
  position = 'top-right,
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
    }
  }, [notifications, handleDismiss]);

  const getNotificationStyles = (type: Notification[type']) => {
    const baseStyles = 'border-l-4;
    switch (type) {

  const getIcon = (type: Notification[type']) => {
    switch (type) {
      case 'success:
        return <CheckCircle className="h-5 w-5 text-green-500 />;
      case error':
        return <AlertCircle className=h-5 w-5 text-red-500" />;
      case 'warning:
        return <AlertTriangle className="h-5 w-5 text-yellow-500 />;
      case info':
        return <Info className=h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500 />;
    }
  }

  const getPositionStyles = () => {
    switch (position) {
      case 'top-left:
        return top-4 left-4';
      case 'top-right:
        return top-4 right-4';
      case 'bottom-left:
        return bottom-4 left-4';
      case 'bottom-right:
        return bottom-4 right-4';
      default:
        return 'top-4 right-4;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
  }
=======
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}


}
const NotificationContext = createContext<NotificationContextValue>({ notify: () => {} })
export function useToast() {
  return useContext(NotificationContext)
}
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const notify = useCallback((message: string, tone: default' | 'success | error' = 'default) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, tone }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])
    success: bg-green-50 border-green-400 text-green-800",
    error: "bg-red-50 border-red-400 text-red-800,
    warning: bg-yellow-50 border-yellow-400 text-yellow-800",
    info: "bg-blue-50 border-blue-400 text-blue-800}
  return `${baseStyles} ${typeStyles[type]}`;
}

import React from react';
import React from 'react;


  return (
    <div className=\"fixed top-4 right-4 z-50 space-y-2\"    />
      {notifications.map((notification) => (}
        <div;}
key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
            />
          <div className=\flex items-start justify-between\"    />"
            <div className=\flex-1\    />"
              <div className=\"flex items-start space-x-2\    />
                {getIcon(notification.type)}
                <div className=\"flex-1\"    />
                  {notification.title && (}
                    <h4 className=\font-medium mb-1\"    />{notification.title}</h4>
                  )}"
                  <p className=\text-sm\    />{notification.message}</p>
                </div>
              </div>
            </div>
            {onDismiss && (}
              <button;}
onClick={() =    /> handleDismiss(notification.id)}"
                className=\"ml-2 text-gray-400 hover: text-gray-600 transition-colors\
              >
                <X className=\"h-4 w-4\"    />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
              </button>
            )}
          </div>
        </div>

      ))}
    </div>

=======
  const colors = {
    success: bg-green-500',
    error: 'bg-red-500,
    warning: bg-yellow-500',
    info: 'bg-blue-500}

  const Icon = icons[notification.type];
export default NotificationSystem;

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className=fixed inset-x-0 top-4 z-[100] flex justify-center pointer-events-none>
        <div className="w-full max-w-md px-4">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y: -8 }}
                className={`mb-2 pointer-events-auto rounded-lg border backdrop-blur px-4 py-3 shadow-lg ${
                  toast.tone === success'
                    ? 'border-emerald-300/50 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200
                    : toast.tone === error'
                    ? 'border-rose-300/50 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200
                    : border-gray-200 bg-white/90 text-gray-900 dark:border-gray-800 dark:bg-gray-900/90 dark:text-gray-100'
                }`}
              >
                <div className=text-sm font-medium>{toast.message}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider);
  }
  return context;
}
=======
  )
}
              {notification.title && (
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
                className=ml-2 text-gray-400 hover:text-gray-600
              >
                ×
              </button>
            )}
          </div>
        </div>

      ))}

              {notification.title && (
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
        <div
          key={notification && notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification && notification.type)}`}>;
          <div className=flex items-start justify-between>;
            <div className="flex-1">;
              {notification && notification.title && (;
                <h4 className=font-medium mb-1>{notification && notification.title}</h4>;
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
          <div className=flex items - start justify - between>;
            <div className="flex - 1">;
              {notification.title && (
                <h4 className=font - medium mb - 1>{notification.title}</h4>)}
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
    info: Info}

pr-12243
  const colors = {
    success: bg-green-500',
    error: 'bg-red-500,
    warning: bg-yellow-500',
    info: 'bg-blue-500}

  const Icon = icons[notification.type];

=======
export default NotificationSystem;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
    <div className={colors[notification.type] +  text-white p-4 rounded-lg shadow-lg max-w-sm'} />
      <div className=\flex items-start\" />"
        <Icon className=\w-5 h-5 mt-0.5 mr-3 flex-shrink-0\ />"
        <div className=\"flex-1\ />
          <h4 className=\"font-semibold\" />{notification.title}</h4>
          <p className=\text-sm opacity-90\" />{notification.message}</p>
        </div>
        <button;
onClick={() = /> onRemove(notification.id)}"
          className=\ml-3 flex-shrink-0 hover: opacity-75\
        >"
          <X className=\"w-4 h-4\" />
        </button>
      </div>
    </div>
  )
}
export const useNotifications = (
 ;
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');) => {
  return $3;}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
