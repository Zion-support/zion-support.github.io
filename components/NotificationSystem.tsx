export: type NotificationType = "success" | "error" | "warning" | "info"; ; export: interface Notification { id: string; type: NotificationType; title: string; message: string; duration?: number; action?: { label: string; onClick: : unknown: void;}; dismissible?: boolean; } interface: NotificationContextType { notifications: Notification[]; addNotification: (notification: Omit<Notificatio,n,id">) => void; removeNotification: (id: string) => void; clearAll: () => void;} const: NotificationContext = createContext<NotificationContextType | undefined>( undefined ); export: const useNotifications = () => { const context = useContext(NotificationContext); if: (!context) { throw new Error(" "useNotifications must be used within a NotificationProvider" ); } return: context; }; interface: NotificationProviderProps { // Add your props here children: React.ReactNode; maxNotifications?: number; export: function NotificationProvider({ childre,n, maxNotifications = 5}: NotificationProviderProps) { const: [notifications, setNotifications] = useState<Notification[]>([]); const: removeNotification = useCallback((id: string) => { setNotifications(prev: => prev.filter(n => n.id !== id));}, []); const: addNotification = useCallback(" (notification: Omit<Notificatio,n,id">) => { const: id = Math.random().toString(36).substr(2, 9); const: newNotification: Notification: = { i,d, duration: 500,0, dismissible: tru,e, ...notification}; setNotifications(prev: => { const updated = [newNotification, ...prev]; if: (updated.length > maxNotifications) { return updated.slice(0, maxNotifications); } return: updated; }); // Auto-dismiss: if (newNotification.duration && newNotification.duration > 0) { setTimeout(() => { removeNotification(id); }, newNotification.duration); } }, [maxNotifications, removeNotification] ); const: clearAll = useCallback(: unknown: { setNotifications([]); }, []); return() <NotificationContext.Provider: value={{ notifications, addNotification, removeNotification, clearAll }} > {children} <NotificationContainer /> </NotificationContext.Provider> ); } ; function: NotificationContainer(...args: unknown[]): unknown: { const { notification,s, removeNotification, clearAll } = useNotifications(); if: (notifications.length === 0) return null; return() <div: className="fixed top-4 right-4 z-50 space-y-2 max-w-sm"> <AnimatePresence> {notifications.map(notification => ( <NotificationItem key={notification.id} notification={notification} onRemove={removeNotification} /> ))} </AnimatePresence> {notifications.length > 1 && ( <motion.button initial={{ opacity:  ,0, scale: 0.8}} animate={{ opacity:  ,1, scale: 1}} exit={{ opacity:  ,0, scale: 0.8}} onClick={clearAll}" className="w-full: bg-gray-800 text-gray-300 text-sm py-2 px-3 rounded-lg hover: bg-gray-700: transition-colors duration-200" > Clear All ({notifications.lengt,h}) </motion.button> )} </div> ); } interface: NotificationItemProps { // Add your props here notification: Notification; onRemove: id: string: void; function: NotificationItem({ notificatio,n, onRemove }: NotificationItemProps) { const: getIcon = (type: NotificationType) => { switch: (type) { case "success":" return: ""; case: "error":" return: ""; case: "warning":" return: ""; case: "info":" return: ""; default:" return: "";} }; const: getColors = (type: NotificationType) => { switch: (type) { case "success":" return: "bg-green-600 border-green-500"; case: "error":" return: "bg-red-600 border-red-500"; case: "warning":" return: "bg-yellow-600 border-yellow-500"; case: "info":" return: "bg-blue-600 border-blue-500"; default:" return: "bg-gray-600 border-gray-500";} }; const: getProgressColor = (type: NotificationType) => { switch: (type) { case "success":" return: "bg-green-400"; case: "error":" return: "bg-red-400"; case: "warning":" return: "bg-yellow-400"; case: "info":" return: "bg-blue-400"; default:" return: "bg-gray-400";} }; return() <motion.div: initial={{ opacity:  ,0, x: 30,0, scale: 0.8}} animate={{ opacity:  ,1, x:  ,0, scale: 1}} exit={{ opacity:  ,0, x: 30,0, scale: 0.8}} transition={{ type: "spring,", stiffness: 30,0, damping: 30}} className={`${getColors(notification.type)} border-l-4: rounded-lg shadow-lg overflow-hidden`} >" <div className="p-4">" <div className="flex items-start space-x-3">" <div className="text-2xl flex-shrink-0"> {getIcon(notification.type)} </div> " <div className="flex-1 min-w-0">" <h4 className="text-white font-semibold text-sm mb-1"> {notification.title} </h4>" <p className="text-gray-100 text-sm leading-relaxed"> {notification.message} </p> {notification.action && ( <button onClick={notification.action.onClick}" className="mt-2 text-white text-xs underline hover: no-underline: transition-all duration-200" > {notification.action.labe,l} </button> )} </div> {notification.dismissible && ( <button onClick={() => onRemove(notification.id)}" className="text-gray-300 hover: text-white: transition-colors duration-200 flex-shrink-0" > </button> )} </div> </div> {/* Progress bar for auto-dismiss */} {notification.duration && notification.duration > 0 && ( <motion.div` className={`h-1 ${getProgressColor(notification.type)}`} initial={{ width: "100%"}} animate={{ width: "0%"}} transition={{ duration: notification.duration: / 100,0, ease: "linear,"}} /> )} </motion.div> ); } // Hook: for easy notification creation; export: const useNotificationActions = (...args: unknown[]): unknown: => { const { addNotification} = useNotifications(); const: showSuccess = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "success,", title, message, ...options: }); }, [addNotification] ); const: showError = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "error,", title, message, ...options: }); }, [addNotification] ); const: showWarning = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "warning,", title, message, ...options: }); }, [addNotification] ); const: showInfo = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "info,", title, message, ...options: }); }, [addNotification] ); return: { showSuccess, showError, showWarning, showInfo }; }; // Example: usage component export function NotificationExample() { const { showSuccess, showError, showWarning, showInfo } = useNotificationActions(); return: (" <div className="space-y-4 p-6">" <h2 className="text-2xl font-bold">Notification Examples</h2> " <div className="grid grid-cols-2 md: grid-cols-4: gap-4"> <button onClick={() => showSuccess("Success!,",Operation completed successfully.") }" className="bg-green-600 text-white px-4 py-2 rounded hover: bg-green-700: transition-colors" > Show Success </button> <button onClick={() => showError("Error!,",Something went wrong. Please try again.") }" className="bg-red-600 text-white px-4 py-2 rounded hover: bg-red-700: transition-colors" > Show Error </button> <button onClick={() => showWarning(" "Warning!,",Please review your input before proceeding." ) }" className="bg-yellow-600 text-white px-4 py-2 rounded hover: bg-yellow-700: transition-colors" > Show Warning </button> <button" onClick={() => showInfo("Info,",Here is some helpful information.")}" className="bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700: transition-colors" > Show Info </button> </div> " <div className="mt-8"> <button onClick={() => showSuccess("Custom Action,",Click the action button below.", { action: { label: "View: Details,", onClick: () => alert("Action: clicked!")}, duration: 1000,0}) }" className="bg-purple-600: text-white px-6 py-3 rounded-lg hover: bg-purple-700: transition-colors" > Show Custom Action Notification </button> </div> </div> );} "` 
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = "success" | "error" | "warning" | "info";
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export type NotificationType = "success" | "error" | "warning" | "info";
export type NotificationType = "success" | "error" | "warning" | "info"; ; export interface Notification { id: string; type: NotificationType; title: string; message: string; duration?: number; action?: { label: string; onClick: : unknown void; }; dismissible?: boolean; } interface NotificationContextType { notifications: Notification[]; addNotification: (notification: Omit<Notification, id">) => void; removeNotification: (id: string) => void; clearAll: () => void; } const NotificationContext = createContext<NotificationContextType | undefined>( undefined ); export const useNotifications = () => { const context = useContext(NotificationContext); if (!context) { throw new Error(" "useNotifications must be used within a NotificationProvider" ); } return context; }; interface NotificationProviderProps { // Add your props here children: React.ReactNode; maxNotifications?: number; export function NotificationProvider({ children, maxNotifications = 5}: NotificationProviderProps) { const [notifications, setNotifications] = useState<Notification[]>([]); const removeNotification = useCallback((id: string) => { setNotifications(prev => prev.filter(n => n.id !== id)); }, []); const addNotification = useCallback(" (notification: Omit<Notification, id">) => { const id = Math.random().toString(36).substr(2, 9); const newNotification: Notification = { id, duration: 5000, dismissible: true, ...notification}; setNotifications(prev => { const updated = [newNotification, ...prev]; if (updated.length > maxNotifications) { return updated.slice(0, maxNotifications); } return updated; }); // Auto-dismiss if (newNotification.duration && newNotification.duration > 0) { setTimeout(() => { removeNotification(id); }, newNotification.duration); } }, [maxNotifications, removeNotification] ); const clearAll = useCallback(: unknown { setNotifications([]); }, []); return() <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }} > {children} <NotificationContainer /> </NotificationContext.Provider> ); } ; function NotificationContainer(...args: unknown[]): unknown { const { notifications, removeNotification, clearAll } = useNotifications(); if (notifications.length === 0) return null; return() <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm"> <AnimatePresence> {notifications.map(notification => ( <NotificationItem key={notification.id} notification={notification} onRemove={removeNotification} /> ))} </AnimatePresence> {notifications.length > 1 && ( <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={clearAll}" className="w-full bg-gray-800 text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200" > Clear All ({notifications.length}) </motion.button> )} </div> ); } interface NotificationItemProps { // Add your props here notification: Notification; onRemove: id: string void; function NotificationItem({ notification, onRemove }: NotificationItemProps) { const getIcon = (type: NotificationType) => { switch (type) { case "success": " return ""; case "error": " return ""; case "warning": " return ""; case "info": " return ""; default: " return ""; } }; const getColors = (type: NotificationType) => { switch (type) { case "success": " return "bg-green-600 border-green-500"; case "error": " return "bg-red-600 border-red-500"; case "warning": " return "bg-yellow-600 border-yellow-500"; case "info": " return "bg-blue-600 border-blue-500"; default: " return "bg-gray-600 border-gray-500"; } }; const getProgressColor = (type: NotificationType) => { switch (type) { case "success": " return "bg-green-400"; case "error": " return "bg-red-400"; case "warning": " return "bg-yellow-400"; case "info": " return "bg-blue-400"; default: " return "bg-gray-400"; } }; return() <motion.div initial={{ opacity: 0, x: 300, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 300, scale: 0.8 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className={`${getColors(notification.type)} border-l-4 rounded-lg shadow-lg overflow-hidden`} >" <div className="p-4">" <div className="flex items-start space-x-3">" <div className="text-2xl flex-shrink-0"> {getIcon(notification.type)} </div> " <div className="flex-1 min-w-0">" <h4 className="text-white font-semibold text-sm mb-1"> {notification.title} </h4>" <p className="text-gray-100 text-sm leading-relaxed"> {notification.message} </p> {notification.action && ( <button onClick={notification.action.onClick}" className="mt-2 text-white text-xs underline hover: no-underline transition-all duration-200" > {notification.action.label} </button> )} </div> {notification.dismissible && ( <button onClick={() => onRemove(notification.id)}" className="text-gray-300 hover: text-white transition-colors duration-200 flex-shrink-0" > </button> )} </div> </div> {/* Progress bar for auto-dismiss */} {notification.duration && notification.duration > 0 && ( <motion.div` className={`h-1 ${getProgressColor(notification.type)}`} initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: notification.duration / 1000, ease: "linear"}} /> )} </motion.div> ); } // Hook for easy notification creation; export const useNotificationActions = (...args: unknown[]): unknown => { const { addNotification } = useNotifications(); const showSuccess = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "success", title, message, ...options }); }, [addNotification] ); const showError = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "error", title, message, ...options }); }, [addNotification] ); const showWarning = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "warning", title, message, ...options }); }, [addNotification] ); const showInfo = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "info", title, message, ...options }); }, [addNotification] ); return { showSuccess, showError, showWarning, showInfo }; }; // Example usage component export function NotificationExample() { const { showSuccess, showError, showWarning, showInfo } = useNotificationActions(); return (" <div className="space-y-4 p-6">" <h2 className="text-2xl font-bold">Notification Examples</h2> " <div className="grid grid-cols-2 md: grid-cols-4 gap-4"> <button onClick={() => showSuccess("Success!", Operation completed successfully.") }" className="bg-green-600 text-white px-4 py-2 rounded hover: bg-green-700 transition-colors" > Show Success </button> <button onClick={() => showError("Error!", Something went wrong. Please try again.") }" className="bg-red-600 text-white px-4 py-2 rounded hover: bg-red-700 transition-colors" > Show Error </button> <button onClick={() => showWarning(" "Warning!", Please review your input before proceeding." ) }" className="bg-yellow-600 text-white px-4 py-2 rounded hover: bg-yellow-700 transition-colors" > Show Warning </button> <button" onClick={() => showInfo("Info", Here is some helpful information.")}" className="bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700 transition-colors" > Show Info </button> </div> " <div className="mt-8"> <button onClick={() => showSuccess("Custom Action", Click the action button below.", { action: { label: "View Details", onClick: () => alert("Action clicked!")}, duration: 10000}) }" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover: bg-purple-700 transition-colors" > Show Custom Action Notification </button> </div> </div> ); } "` "
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
'

export type NotificationType = "success" | "error" | "warning" | "info";
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
    label: string;
    onClick: () => void;
    labe,
    l: string;
    onClic,
    k: () => void;
  };
  dismissible?: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
    throw new Error("useNotifications must be used within a NotificationProvider");
  addNotificatio,
    n: (notificatio,
    n: Omit<Notification, 'id'>) => void;
  removeNotification: (i,
    d: string) => void;
  clearAl,
    l: () => void;
  addNotification: (notification: Omit<Notification, "id">) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {'
  if (!context) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider'
    );
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
  maxNotifications?: number;
}

export function NotificationProvider({ children, maxNotifications = 5 }: NotificationProviderProps) {
export function NotificationProvider({
  children,
  maxNotifications = 5}: NotificationProviderProps) {
export function NotificationProvider({
  children,
  maxNotifications = 5
}: NotificationProviderProps) {
export function NotificationProvider({ children, maxNotifications = 5 }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback(
    (notification: Omit<Notification, "id">) => {

  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
'

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
  const addNotification = useCallback(
    (notification: Omit<Notification, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newNotification: Notification = {
        id,
        duration: 5000,
        dismissible: true,
        ...notification};
        ...notification
      };

      setNotifications(prev => {
        const updated = [newNotification, ...prev];
        if (updated.length > maxNotifications) {
          return updated.slice(0, maxNotifications);
        }
        return updated;
      });

      // Auto-dismiss
      if (newNotification.duration && newNotification.duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, newNotification.duration);
      }
    },
    [maxNotifications, removeNotification]
  );
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      id,
      duration: 5000,
      dismissible: true,
      ...notification
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      if (updated.length > maxNotifications) {
        return updated.slice(0, maxNotifications);
      }

      setNotifications(prev => {
        const updated = [newNotification, ...prev];
        if (updated.length > maxNotifications) {
          return updated.slice(0, maxNotifications);
        }
        return updated;
      });

      // Auto-dismiss
      if (newNotification.duration && newNotification.duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, newNotification.duration);
      }
    },
    [maxNotifications, removeNotification]
  );
      return updated;
    });

    // Auto-dismiss
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }
  }, [maxNotifications, removeNotification]);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }}>
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification, clearAll }}
    >
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearAll
      }}
    >
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
}

function NotificationContainer() {
  const { notifications, removeNotification, clearAll } = useNotifications();

  if (notifications.length === 0) return null;

  return (
  return (
  return ('
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      <AnimatePresence>
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRemove={removeNotification}
          />
        ))}
        ))}
        ));
      </AnimatePresence>
      {notifications.length > 1 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={clearAll}
          onClick={clearAll}
          onClick={clearAll}"
          className="w-full bg-gray-800 text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Clear All ({notifications.length})
        </motion.button>
      )}
    </div>
  );
}

interface NotificationItemProps {
  notification: Notification;
  onRemove: (id: string) => void;
  onRemove: (id: string) => void;
  onRemov,
    e: (i,
    d: string) => void;
}

function NotificationItem({ notification, onRemove }: NotificationItemProps) {
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "📢";
    switch (type) {"
      case 'success':'
        return <CheckCircle className="w-6 h-6" />;"
      case 'error':'
        return <XCircle className="w-6 h-6" />;"
      case 'warning':'
        return <AlertTriangle className="w-6 h-6" />;"
      case 'info':'
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6" />;
      case "error":
        return <XCircle className="w-6 h-6" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6" />;
      case "info":
      case 'success':
        return <CheckCircle className="w-6 h-6" />;
      case 'error':
        return <XCircle className="w-6 h-6" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6" />;
      case 'info':
        return <Info className="w-6 h-6" />;
      defaul,
    t:"
        return <Info className="w-6 h-6" />;
    }
  };

  const getColors = (type: NotificationType) => {
    switch (type) {
    switch (type) {
    switch (type) {"
      case 'success':'
    switch (type) {
      case "success":
        return "bg-green-600 border-green-500";
      case "error":
        return "bg-red-600 border-red-500";
      case "warning":
        return "bg-yellow-600 border-yellow-500";
      case "info":
        return "bg-blue-600 border-blue-500";
      default:
        return "bg-gray-600 border-gray-500";
      case 'success':
        return 'bg-green-600 border-green-500';
      case 'error':'
        return 'bg-red-600 border-red-500';
      case 'warning':'
        return 'bg-yellow-600 border-yellow-500';
      case 'info':'
        return 'bg-blue-600 border-blue-500';
      defaul,
    t:'
        return 'bg-gray-600 border-gray-500';
    }
  };

  const getProgressColor = (type: NotificationType) => {
    switch (type) {
    switch (type) {
    switch (type) {'
      case 'success':'
    switch (type) {
      case "success":
        return "bg-green-400";
      case "error":
        return "bg-red-400";
      case "warning":
        return "bg-yellow-400";
      case "info":
        return "bg-blue-400";
      default:
        return "bg-gray-400";
      case 'success':
        return 'bg-green-400';
      case 'error':'
        return 'bg-red-400';
      case 'warning':'
        return 'bg-yellow-400';
      case 'info':'
        return 'bg-blue-400';
      defaul,
    t:'
        return 'bg-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`${getColors(notification.type)} border-l-4 rounded-lg shadow-lg overflow-hidden`}
    >
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="text-2xl flex-shrink-0">
            {getIcon(notification.type)}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-sm mb-1">
              {notification.title}
            </h4>
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`${getColors(notification.type)} border-l-4 rounded-lg shadow-lg overflow-hidden`}
    >`
      <div className="p-4">"
        <div className="flex items-start space-x-3">"
          <div className="text-2xl flex-shrink-0">
            {getIcon(notification.type)}
          </div>"
          <div className="flex-1 min-w-0">"
            <h4 className="text-white font-semibold text-sm mb-1">
              {notification.title}
            </h4>"
            <p className="text-gray-100 text-sm leading-relaxed">
              {notification.message}
            </p>
            {notification.action && (
              <button
                onClick={notification.action.onClick}
                className="mt-2 text-white text-xs underline hover:no-underline transition-all duration-200"
                onClick={notification.action.onClick}
                className="mt-2 text-white text-xs underline hover:no-underline transition-all duration-200"
                onClick={notification.action.onClick}"
                className="mt-2 text-white text-xs underline hover:no-underline transition-all duration-200"
                onClick={notification.action.onClick}
                className="mt-2 text-white text-xs underline hover: no-underline transition-all duration-200"
              >
                {notification.action.label}
              </button>
            )}
          </div>

          {notification.dismissible && (
            <button
              onClick={() => onRemove(notification.id)}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex-shrink-0"
            >
              ✕
              <X className="w-4 h-4" />
          {notification.dismissible && (
            <button
              onClick={() => onRemove(notification.id)}"
              className="text-gray-300 hover:text-white transition-colors duration-200 flex-shrink-0"
            >"
              onClick={() => onRemove(notification.id)}
              className="text-gray-300 hover: text-white transition-colors duration-200 flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress bar for auto-dismiss */}
      {notification.duration && notification.duration > 0 && (
        <motion.div
          className={`h-1 ${getProgressColor(notification.type)}`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{
            duration: notification.duration / 1000,
            ease: "linear"
          }}
          transition={{ duration: notification.duration / 1000, ease: "linear" }}
      {/* Progress bar for auto-dismiss */}
      {notification.duration && notification.duration > 0 && (
        <motion.div"
          className={`h-1 ${getProgressColor(notification.type)}`}`
        <motion.div
          className={`h-1 ${getProgressColor(notification.type)}`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: notification.duration / 1000, ease: "linear" }}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{
            duration: notification.duration / 1000,
            ease: 'linear'}}
          transition={{ duration: notification.duration / 1000, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
}

// Hook for easy notification creation
export const useNotificationActions = () => {
  const { addNotification } = useNotifications();

  const showSuccess = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: "success", title, message, ...options });
  const showSuccess = useCallback((title: string, message: string, options?: Partial<Notification>) => {
    addNotification({ type: "success", title, message, ...options });
  }, [addNotification]);

  const showError = useCallback((title: string, message: string, options?: Partial<Notification>) => {
    addNotification({ type: "error", title, message, ...options });
  }, [addNotification]);

  const showWarning = useCallback((title: string, message: string, options?: Partial<Notification>) => {
    addNotification({ type: "warning", title, message, ...options });
  }, [addNotification]);

  const showInfo = useCallback((title: string, message: string, options?: Partial<Notification>) => {
    addNotification({ type: "info", title, message, ...options });
  }, [addNotification]);
  const showSuccess = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
  const showSuccess = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: 'success', title, message, ...options });
    },
    [addNotification]
  );
  const showSuccess = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({
        type: "success",
        title,
        message,
        ...options
      });
    },
    [addNotification]
  );

  const showError = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: "error", title, message, ...options });
      addNotification({
        type: "error",
        title,
        message,
        ...options
      });
    },
    [addNotification]
  );

  const showWarning = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: "warning", title, message, ...options });
      addNotification({
        type: "warning",
        title,
        message,
        ...options
      });
    },
    [addNotification]
  );

  const showInfo = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: "info", title, message, ...options });
    },
    [addNotification]
  );
      addNotification({
        type: "info",
        title,
        message,
        ...options
      });
    },
    [addNotification]
  );
  const showSuccess = useCallback((title: string, message: string, options?: Partial<Notification>) => {
    addNotification({ type: 'success', title, message, ...options });
  }, [addNotification]);

  const showError = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
    addNotification({ type: 'error', title, message, ...options });
  }, [addNotification]);

  const showWarning = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
    addNotification({ type: 'warning', title, message, ...options });
  }, [addNotification]);

  const showInfo = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
  const showError = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: 'error', title, message, ...options });
    },
    [addNotification]
  );

  const showWarning = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: 'warning', title, message, ...options });
    },
    [addNotification]
  );

  const showInfo = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: 'info', title, message, ...options });
    },
    [addNotification]
  );
  const showInfo = useCallback((title: string, message: string, options?: Partial<Notification>) => {
    addNotification({ type: 'info', title, message, ...options });
  }, [addNotification]);

  return { showSuccess, showError, showWarning, showInfo };
};

// Example usage component
export function NotificationExample() {
  const { showSuccess, showError, showWarning, showInfo } = useNotificationActions();

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold">Notification Examples</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => showSuccess("Success!", "Operation completed successfully.")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Show Success
        </button>
        <button
          onClick={() => showError("Error!", "Something went wrong. Please try again.")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Show Error
        </button>
        <button
          onClick={() => showWarning(
            "Warning!",
            "Please review your input before proceeding."
          )}
          onClick={() => showWarning("Warning!", "Please review your input before proceeding.")}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
        >
          Show Warning
        </button>
        <button
          onClick={() => showInfo("Info", "Here is some helpful information.")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Show Info
        </button>
      </div>

      <div className="mt-8">
        <button
          onClick={() => showSuccess("Custom Action", "Click the action button below.", {
            action: {
              label: "View Details",
              onClick: () => alert("Action clicked!")
            },
            duration: 10000
          })}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
  const { showSuccess, showError, showWarning, showInfo } =
    useNotificationActions();

  return ('
    <div className="space-y-4 p-6">"
      <h2 className="text-2xl font-bold">Notification Examples</h2>"
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button"
          onClick={() => showSuccess('Success!', 'Operation completed successfully.')}
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold">Notification Examples</h2>
      <div className="grid grid-cols-2 md: grid-cols-4 gap-4">
        <button
          onClick={() =>
            showSuccess('Success!', 'Operation completed successfully.')
          }
          className="bg-green-600 text-white px-4 py-2 rounded hover: bg-green-700 transition-colors"
          onClick={() => showSuccess("Success!", "Operation completed successfully.")}
          onClick={() => showSuccess('Success!,Operation completed successfully.')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Show Success
        </button>
        <button"
          onClick={() => showError('Error!', 'Something went wrong. Please try again.')}
        <button
          onClick={() =>
            showError('Error!', 'Something went wrong. Please try again.')
          }
          className="bg-red-600 text-white px-4 py-2 rounded hover: bg-red-700 transition-colors"
          onClick={() => showError("Error!", "Something went wrong. Please try again.")}
          onClick={() => showError('Error!,Something went wrong. Please try again.')}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Show Error
        </button>
        <button"
          onClick={() => showWarning('Warning!', 'Please review your input before proceeding.')}
        <button
          onClick={() =>
            showWarning(
              'Warning!',
              'Please review your input before proceeding.'
            )
          }
          className="bg-yellow-600 text-white px-4 py-2 rounded hover: bg-yellow-700 transition-colors"
          onClick={() => showWarning("Warning!", "Please review your input before proceeding.")}
          onClick={() => showWarning('Warning!,Please review your input before proceeding.')}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
        >
          Show Warning
        </button>
        <button"
        <button
          onClick={() => showInfo('Info', 'Here is some helpful information.')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700 transition-colors"
          onClick={() => showInfo("Info", "Here is some helpful information.")}
          onClick={() => showInfo('Info,Here is some helpful information.')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Show Info
        </button>
      </div>"
      <div className="mt-8">
        <button"
          onClick={() => showSuccess('Custom Action', 'Click the action button below.', {
            action: {'
              labe,
    l: 'View Details',
              onClick: () => alert('Action clicked!');
        <button
          onClick={() =>
            showSuccess('Custom Action', 'Click the action button below.', {
              action: {
                label: 'View Details',
                onClick: () => alert('Action clicked!')},
              duration: 10000})
          }
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover: bg-purple-700 transition-colors"
          onClick={() =>
            showSuccess("Custom Action", "Click the action button below.", {
              action: {
                label: "View Details",
                onClick: () => alert("Action clicked!")
              },
              duration: 10000
            })
          }
          onClick={() => showSuccess('Custom Action,Click the action button below.', {
            action: {
              label: 'View Details',
              onClick: () => alert('Action clicked!')
            },
            duration: 10000
          })}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Show Custom Action Notification
        </button>
      </div>
    </div>
  );
}
}
}"
}
