<<<<<<< HEAD
export: type NotificationType = "success" | "error" | "warning" | "info"; ; export: interface Notification { id: string; type: NotificationType; title: string; message: string; duration?: number; action?: { label: string; onClick: : unknown: void;, }; dismissible?: boolean; } interface: NotificationContextType { notifications: Notification[]; addNotification: (notification: Omit<Notificatio,n,id">) => void; removeNotification: (id: string) => void; clearAll: () => void;, } const: NotificationContext = createContext<NotificationContextType | undefined>( undefined ); export: const useNotifications = () => { const context = useContext(NotificationContext); if: (!context) { throw new Error(" "useNotifications must be used within a NotificationProvider" ); } return: context; }; interface: NotificationProviderProps { // Add your props here children: React.ReactNode; maxNotifications?: number; export: function NotificationProvider({ childre,n, maxNotifications = 5}: NotificationProviderProps) { const: [notifications, setNotifications] = useState<Notification[]>([]); const: removeNotification = useCallback((id: string) => { setNotifications(prev: => prev.filter(n => n.id !== id));, }, []); const: addNotification = useCallback(" (notification: Omit<Notificatio,n,id">) => { const: id = Math.random().toString(36).substr(2, 9); const: newNotification: Notification: = { i,d, duration: 500,0, dismissible: tru,e, ...notification}; setNotifications(prev: => { const updated = [newNotification, ...prev]; if: (updated.length > maxNotifications) { return updated.slice(0, maxNotifications); } return: updated; }); // Auto-dismiss: if (newNotification.duration && newNotification.duration > 0) { setTimeout(() => { removeNotification(id); }, newNotification.duration); } }, [maxNotifications, removeNotification] ); const: clearAll = useCallback(: unknown: { setNotifications([]); }, []); return() <NotificationContext.Provider: value={{ notifications, addNotification, removeNotification, clearAll }} > {children} <NotificationContainer /> </NotificationContext.Provider> ); } ; function: NotificationContainer(...args: unknown[]): unknown: { const { notification,s, removeNotification, clearAll } = useNotifications(); if: (notifications.length === 0) return null; return() <div: className="fixed top-4 right-4 z-50 space-y-2 max-w-sm"> <AnimatePresence> {notifications.map(notification => ( <NotificationItem key={notification.id} notification={notification} onRemove={removeNotification} /> ))} </AnimatePresence> {notifications.length > 1 && ( <motion.button initial={{ opacity:  ,0, scale: 0.8, }} animate={{ opacity:  ,1, scale: 1, }} exit={{ opacity:  ,0, scale: 0.8, }} onClick={clearAll}" className="w-full: bg-gray-800 text-gray-300 text-sm py-2 px-3 rounded-lg hover: bg-gray-700: transition-colors duration-200" > Clear All ({notifications.lengt,h}) </motion.button> )} </div> ); } interface: NotificationItemProps { // Add your props here notification: Notification; onRemove: id: string: void; function: NotificationItem({ notificatio,n, onRemove }: NotificationItemProps) { const: getIcon = (type: NotificationType) => { switch: (type) { case "success":" return: ""; case: "error":" return: ""; case: "warning":" return: ""; case: "info":" return: ""; default:" return: "";, } }; const: getColors = (type: NotificationType) => { switch: (type) { case "success":" return: "bg-green-600 border-green-500"; case: "error":" return: "bg-red-600 border-red-500"; case: "warning":" return: "bg-yellow-600 border-yellow-500"; case: "info":" return: "bg-blue-600 border-blue-500"; default:" return: "bg-gray-600 border-gray-500";, } }; const: getProgressColor = (type: NotificationType) => { switch: (type) { case "success":" return: "bg-green-400"; case: "error":" return: "bg-red-400"; case: "warning":" return: "bg-yellow-400"; case: "info":" return: "bg-blue-400"; default:" return: "bg-gray-400";, } }; return() <motion.div: initial={{ opacity:  ,0, x: 30,0, scale: 0.8, }} animate={{ opacity:  ,1, x:  ,0, scale: 1, }} exit={{ opacity:  ,0, x: 30,0, scale: 0.8, }} transition={{ type: "spring,", stiffness: 30,0, damping: 30, }} className={`${getColors(notification.type)} border-l-4: rounded-lg shadow-lg overflow-hidden`} >" <div className="p-4">" <div className="flex items-start space-x-3">" <div className="text-2xl flex-shrink-0"> {getIcon(notification.type)} </div> " <div className="flex-1 min-w-0">" <h4 className="text-white font-semibold text-sm mb-1"> {notification.title} </h4>" <p className="text-gray-100 text-sm leading-relaxed"> {notification.message} </p> {notification.action && ( <button onClick={notification.action.onClick}" className="mt-2 text-white text-xs underline hover: no-underline: transition-all duration-200" > {notification.action.labe,l} </button> )} </div> {notification.dismissible && ( <button onClick={() => onRemove(notification.id)}" className="text-gray-300 hover: text-white: transition-colors duration-200 flex-shrink-0" > </button> ,)} </div> </div> {/* Progress bar for auto-dismiss */} {notification.duration && notification.duration > 0 && ( <motion.div` className={`h-1 ${getProgressColor(notification.type)}`} initial={{ width: "100%", }} animate={{ width: "0%", }} transition={{ duration: notification.duration: / 100,0, ease: "linear,"}} /> )} </motion.div> ); } // Hook: for easy notification creation; export: const useNotificationActions = (...args: unknown[]): unknown: => { const { addNotification, } = useNotifications(); const: showSuccess = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "success,", title, message, ...options: }); }, [addNotification] ); const: showError = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "error,", title, message, ...options: }); }, [addNotification] ); const: showWarning = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "warning,", title, message, ...options: }); }, [addNotification] ); const: showInfo = useCallback() (title: strin,g, message: strin,g, options?: Partial<Notification>) => { addNotification({ type: "info,", title, message, ...options: }); }, [addNotification] ); return: { showSuccess, showError, showWarning, showInfo }; }; // Example: usage component export function NotificationExample() { const { showSuccess, showError, showWarning, showInfo } = useNotificationActions(); return: (" <div className="space-y-4 p-6">" <h2 className="text-2xl font-bold">Notification Examples</h2> " <div className="grid grid-cols-2 md: grid-cols-4: gap-4"> <button onClick={() => showSuccess("Success!,",Operation completed successfully.") }" className="bg-green-600 text-white px-4 py-2 rounded hover: bg-green-700: transition-colors" > Show Success </button> <button onClick={() => showError("Error!,",Something went wrong. Please try again.") }" className="bg-red-600 text-white px-4 py-2 rounded hover: bg-red-700: transition-colors" > Show Error </button> <button onClick={() => showWarning(" "Warning!,",Please review your input before proceeding." ) }" className="bg-yellow-600 text-white px-4 py-2 rounded hover: bg-yellow-700: transition-colors" > Show Warning </button> <button" onClick={() => showInfo("Info,",Here is some helpful information.")}" className="bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700: transition-colors" > Show Info </button> </div> " <div className="mt-8"> <button onClick={() => showSuccess("Custom Action,",Click the action button below.", { action: { label: "View: Details,", onClick: () => alert("Action: clicked!",)}, duration: 1000,0}) }" className="bg-purple-600: text-white px-6 py-3 rounded-lg hover: bg-purple-700: transition-colors" > Show Custom Action Notification </button> </div> </div> );, } "` 
=======
<<<<<<< HEAD
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = "success" | "error" | "warning" | "info";
=======
<<<<<<< HEAD
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export type NotificationType = "success" | "error" | "warning" | "info";
=======
<<<<<<< HEAD
export type NotificationType = "success" | "error" | "warning" | "info"; ; export interface Notification { id: string; type: NotificationType; title: string; message: string; duration?: number; action?: { label: string; onClick: : unknown void; }; dismissible?: boolean; } interface NotificationContextType { notifications: Notification[]; addNotification: (notification: Omit<Notification, id">) => void; removeNotification: (id: string) => void; clearAll: () => void; } const NotificationContext = createContext<NotificationContextType | undefined>( undefined ); export const useNotifications = () => { const context = useContext(NotificationContext); if (!context) { throw new Error(" "useNotifications must be used within a NotificationProvider" ); } return context; }; interface NotificationProviderProps { // Add your props here children: React.ReactNode; maxNotifications?: number; export function NotificationProvider({ children, maxNotifications = 5}: NotificationProviderProps) { const [notifications, setNotifications] = useState<Notification[]>([]); const removeNotification = useCallback((id: string) => { setNotifications(prev => prev.filter(n => n.id !== id)); }, []); const addNotification = useCallback(" (notification: Omit<Notification, id">) => { const id = Math.random().toString(36).substr(2, 9); const newNotification: Notification = { id, duration: 5000, dismissible: true, ...notification}; setNotifications(prev => { const updated = [newNotification, ...prev]; if (updated.length > maxNotifications) { return updated.slice(0, maxNotifications); } return updated; }); // Auto-dismiss if (newNotification.duration && newNotification.duration > 0) { setTimeout(() => { removeNotification(id); }, newNotification.duration); } }, [maxNotifications, removeNotification] ); const clearAll = useCallback(: unknown { setNotifications([]); }, []); return() <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }} > {children} <NotificationContainer /> </NotificationContext.Provider> ); } ; function NotificationContainer(...args: unknown[]): unknown { const { notifications, removeNotification, clearAll } = useNotifications(); if (notifications.length === 0) return null; return() <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm"> <AnimatePresence> {notifications.map(notification => ( <NotificationItem key={notification.id} notification={notification} onRemove={removeNotification} /> ))} </AnimatePresence> {notifications.length > 1 && ( <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={clearAll}" className="w-full bg-gray-800 text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200" > Clear All ({notifications.length}) </motion.button> )} </div> ); } interface NotificationItemProps { // Add your props here notification: Notification; onRemove: id: string void; function NotificationItem({ notification, onRemove }: NotificationItemProps) { const getIcon = (type: NotificationType) => { switch (type) { case "success": " return ""; case "error": " return ""; case "warning": " return ""; case "info": " return ""; default: " return ""; } }; const getColors = (type: NotificationType) => { switch (type) { case "success": " return "bg-green-600 border-green-500"; case "error": " return "bg-red-600 border-red-500"; case "warning": " return "bg-yellow-600 border-yellow-500"; case "info": " return "bg-blue-600 border-blue-500"; default: " return "bg-gray-600 border-gray-500"; } }; const getProgressColor = (type: NotificationType) => { switch (type) { case "success": " return "bg-green-400"; case "error": " return "bg-red-400"; case "warning": " return "bg-yellow-400"; case "info": " return "bg-blue-400"; default: " return "bg-gray-400"; } }; return() <motion.div initial={{ opacity: 0, x: 300, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 300, scale: 0.8 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className={`${getColors(notification.type)} border-l-4 rounded-lg shadow-lg overflow-hidden`} >" <div className="p-4">" <div className="flex items-start space-x-3">" <div className="text-2xl flex-shrink-0"> {getIcon(notification.type)} </div> " <div className="flex-1 min-w-0">" <h4 className="text-white font-semibold text-sm mb-1"> {notification.title} </h4>" <p className="text-gray-100 text-sm leading-relaxed"> {notification.message} </p> {notification.action && ( <button onClick={notification.action.onClick}" className="mt-2 text-white text-xs underline hover: no-underline transition-all duration-200" > {notification.action.label} </button> )} </div> {notification.dismissible && ( <button onClick={() => onRemove(notification.id)}" className="text-gray-300 hover: text-white transition-colors duration-200 flex-shrink-0" > </button> )} </div> </div> {/* Progress bar for auto-dismiss */} {notification.duration && notification.duration > 0 && ( <motion.div` className={`h-1 ${getProgressColor(notification.type)}`} initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: notification.duration / 1000, ease: "linear"}} /> )} </motion.div> ); } // Hook for easy notification creation; export const useNotificationActions = (...args: unknown[]): unknown => { const { addNotification } = useNotifications(); const showSuccess = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "success", title, message, ...options }); }, [addNotification] ); const showError = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "error", title, message, ...options }); }, [addNotification] ); const showWarning = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "warning", title, message, ...options }); }, [addNotification] ); const showInfo = useCallback() (title: string, message: string, options?: Partial<Notification>) => { addNotification({ type: "info", title, message, ...options }); }, [addNotification] ); return { showSuccess, showError, showWarning, showInfo }; }; // Example usage component export function NotificationExample() { const { showSuccess, showError, showWarning, showInfo } = useNotificationActions(); return (" <div className="space-y-4 p-6">" <h2 className="text-2xl font-bold">Notification Examples</h2> " <div className="grid grid-cols-2 md: grid-cols-4 gap-4"> <button onClick={() => showSuccess("Success!", Operation completed successfully.") }" className="bg-green-600 text-white px-4 py-2 rounded hover: bg-green-700 transition-colors" > Show Success </button> <button onClick={() => showError("Error!", Something went wrong. Please try again.") }" className="bg-red-600 text-white px-4 py-2 rounded hover: bg-red-700 transition-colors" > Show Error </button> <button onClick={() => showWarning(" "Warning!", Please review your input before proceeding." ) }" className="bg-yellow-600 text-white px-4 py-2 rounded hover: bg-yellow-700 transition-colors" > Show Warning </button> <button" onClick={() => showInfo("Info", Here is some helpful information.")}" className="bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700 transition-colors" > Show Info </button> </div> " <div className="mt-8"> <button onClick={() => showSuccess("Custom Action", Click the action button below.", { action: { label: "View Details", onClick: () => alert("Action clicked!")}, duration: 10000}) }" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover: bg-purple-700 transition-colors" > Show Custom Action Notification </button> </div> </div> ); } "` "
=======
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
<<<<<<< HEAD
'
=======

<<<<<<< HEAD
export type NotificationType = "success" | "error" | "warning" | "info";
=======
>>>>>>> main
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
>>>>>>> main
>>>>>>> main
>>>>>>> main

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  action?: {
<<<<<<< HEAD
    label: string;
    onClick: () => void;
=======
<<<<<<< HEAD
    label: string;
    onClick: () => void;
=======
    labe,
    l: string;
    onClic,
    k: () => void;
>>>>>>> main
>>>>>>> main
  };
  dismissible?: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

<<<<<<< HEAD
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);
=======
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
>>>>>>> main

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
<<<<<<< HEAD
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
=======
    throw new Error("useNotifications must be used within a NotificationProvider");
=======
<<<<<<< HEAD
  addNotificatio,
    n: (notificatio,
    n: Omit<Notification, 'id'>) => void;
  removeNotification: (i,
    d: string) => void;
  clearAl,
    l: () => void;
=======
<<<<<<< HEAD
  addNotification: (notification: Omit<Notification, "id">) => void;
=======
  addNotification: (notification: Omit<Notification, 'id'>) => void;
>>>>>>> main
  removeNotification: (id: string) => void;
  clearAll: () => void;
>>>>>>> main
}

<<<<<<< HEAD
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);
=======
<<<<<<< HEAD
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);
=======
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
>>>>>>> main
>>>>>>> main

export const useNotifications = () => {
  const context = useContext(NotificationContext);
<<<<<<< HEAD
  if (!context) {'
=======
  if (!context) {
<<<<<<< HEAD
    throw new Error(
      'useNotifications must be used within a NotificationProvider'
    );
=======
<<<<<<< HEAD
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
=======
>>>>>>> main
    throw new Error('useNotifications must be used within a NotificationProvider');
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
  maxNotifications?: number;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
export function NotificationProvider({ children, maxNotifications = 5 }: NotificationProviderProps) {
=======
<<<<<<< HEAD
export function NotificationProvider({
  children,
  maxNotifications = 5,
}: NotificationProviderProps) {
=======
<<<<<<< HEAD
>>>>>>> main
export function NotificationProvider({
  children,
  maxNotifications = 5
}: NotificationProviderProps) {
<<<<<<< HEAD
=======
=======
export function NotificationProvider({ children, maxNotifications = 5 }: NotificationProviderProps) {
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);
<<<<<<< HEAD

  const addNotification = useCallback(
    (notification: Omit<Notification, "id">) => {
=======
<<<<<<< HEAD

  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
=======
<<<<<<< HEAD
'
=======

<<<<<<< HEAD
  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
=======
<<<<<<< HEAD
  const addNotification = useCallback(
    (notification: Omit<Notification, "id">) => {
>>>>>>> main
>>>>>>> main
      const id = Math.random().toString(36).substr(2, 9);
      const newNotification: Notification = {
        id,
        duration: 5000,
        dismissible: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
        ...notification,
      };
=======
>>>>>>> main
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
<<<<<<< HEAD
=======
=======
>>>>>>> main
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
>>>>>>> main
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      id,
      duration: 5000,
      dismissible: true,
      ...notification
    };
<<<<<<< HEAD

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      if (updated.length > maxNotifications) {
        return updated.slice(0, maxNotifications);
      }
=======
>>>>>>> main

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
<<<<<<< HEAD
    },
    [maxNotifications, removeNotification]
  );
=======
>>>>>>> main
      return updated;
    });

    // Auto-dismiss
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }
  }, [maxNotifications, removeNotification]);
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }}>
=======
<<<<<<< HEAD
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification, clearAll }}
    >
=======
<<<<<<< HEAD
>>>>>>> main
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearAll
      }}
    >
<<<<<<< HEAD
=======
=======
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }}>
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
}

function NotificationContainer() {
  const { notifications, removeNotification, clearAll } = useNotifications();

  if (notifications.length === 0) return null;

<<<<<<< HEAD
  return (
=======
<<<<<<< HEAD
  return (
=======
  return ('
>>>>>>> main
>>>>>>> main
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      <AnimatePresence>
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRemove={removeNotification}
          />
<<<<<<< HEAD
        ))}
=======
<<<<<<< HEAD
        ))}
=======
        ));
>>>>>>> main
>>>>>>> main
      </AnimatePresence>
      {notifications.length > 1 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
<<<<<<< HEAD
          onClick={clearAll}
=======
<<<<<<< HEAD
          onClick={clearAll}
=======
          onClick={clearAll}"
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
  onRemove: (id: string) => void;
=======
<<<<<<< HEAD
  onRemove: (id: string) => void;
=======
  onRemov,
    e: (i,
    d: string) => void;
>>>>>>> main
>>>>>>> main
}

function NotificationItem({ notification, onRemove }: NotificationItemProps) {
  const getIcon = (type: NotificationType) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    switch (type) {"
      case 'success':'
        return <CheckCircle className="w-6 h-6" />;"
      case 'error':'
        return <XCircle className="w-6 h-6" />;"
      case 'warning':'
        return <AlertTriangle className="w-6 h-6" />;"
      case 'info':'
=======
    switch (type) {
<<<<<<< HEAD
      case "success":
        return <CheckCircle className="w-6 h-6" />;
      case "error":
        return <XCircle className="w-6 h-6" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6" />;
      case "info":
=======
      case 'success':
        return <CheckCircle className="w-6 h-6" />;
      case 'error':
        return <XCircle className="w-6 h-6" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6" />;
      case 'info':
>>>>>>> main
>>>>>>> main
        return <Info className="w-6 h-6" />;
      defaul,
    t:"
        return <Info className="w-6 h-6" />;
>>>>>>> main
>>>>>>> main
    }
  };

  const getColors = (type: NotificationType) => {
<<<<<<< HEAD
    switch (type) {
=======
<<<<<<< HEAD
    switch (type) {
=======
<<<<<<< HEAD
    switch (type) {"
      case 'success':'
=======
    switch (type) {
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
      case 'success':
>>>>>>> main
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
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  };

  const getProgressColor = (type: NotificationType) => {
<<<<<<< HEAD
    switch (type) {
=======
<<<<<<< HEAD
    switch (type) {
=======
<<<<<<< HEAD
    switch (type) {'
      case 'success':'
=======
    switch (type) {
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
      case 'success':
>>>>>>> main
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
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
=======
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
>>>>>>> main
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
>>>>>>> main
>>>>>>> main
            <p className="text-gray-100 text-sm leading-relaxed">
              {notification.message}
            </p>
            {notification.action && (
              <button
<<<<<<< HEAD
                onClick={notification.action.onClick}
                className="mt-2 text-white text-xs underline hover:no-underline transition-all duration-200"
=======
<<<<<<< HEAD
                onClick={notification.action.onClick}
                className="mt-2 text-white text-xs underline hover:no-underline transition-all duration-200"
=======
<<<<<<< HEAD
                onClick={notification.action.onClick}"
                className="mt-2 text-white text-xs underline hover:no-underline transition-all duration-200"
=======
                onClick={notification.action.onClick}
                className="mt-2 text-white text-xs underline hover: no-underline transition-all duration-200"
>>>>>>> main
>>>>>>> main
>>>>>>> main
              >
                {notification.action.label}
              </button>
            )}
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

          {notification.dismissible && (
            <button
              onClick={() => onRemove(notification.id)}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex-shrink-0"
            >
<<<<<<< HEAD
              ✕
=======
              <X className="w-4 h-4" />
=======
          {notification.dismissible && (
            <button
<<<<<<< HEAD
              onClick={() => onRemove(notification.id)}"
              className="text-gray-300 hover:text-white transition-colors duration-200 flex-shrink-0"
            >"
=======
              onClick={() => onRemove(notification.id)}
              className="text-gray-300 hover: text-white transition-colors duration-200 flex-shrink-0"
            >
>>>>>>> main
              <X className="w-5 h-5" />
>>>>>>> main
>>>>>>> main
            </button>
          )}
        </div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

      {/* Progress bar for auto-dismiss */}
      {notification.duration && notification.duration > 0 && (
        <motion.div
          className={`h-1 ${getProgressColor(notification.type)}`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
<<<<<<< HEAD
          transition={{
            duration: notification.duration / 1000,
            ease: "linear"
          }}
=======
          transition={{ duration: notification.duration / 1000, ease: "linear" }}
=======
      {/* Progress bar for auto-dismiss */}
      {notification.duration && notification.duration > 0 && (
<<<<<<< HEAD
        <motion.div"
          className={`h-1 ${getProgressColor(notification.type)}`}`
=======
        <motion.div
          className={`h-1 ${getProgressColor(notification.type)}`}
<<<<<<< HEAD
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: notification.duration / 1000, ease: "linear" }}
=======
>>>>>>> main
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
<<<<<<< HEAD
          transition={{
            duration: notification.duration / 1000,
            ease: 'linear',
          }}
=======
          transition={{ duration: notification.duration / 1000, ease: 'linear' }}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
        />
      )}
    </motion.div>
  );
}

// Hook for easy notification creation
export const useNotificationActions = () => {
  const { addNotification } = useNotifications();

<<<<<<< HEAD
  const showSuccess = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: "success", title, message, ...options });
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  const showSuccess = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
=======
<<<<<<< HEAD
  const showSuccess = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: 'success', title, message, ...options });
    },
    [addNotification]
  );
=======
<<<<<<< HEAD
  const showSuccess = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({
        type: "success",
        title,
        message,
        ...options
      });
>>>>>>> main
    },
    [addNotification]
  );

  const showError = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
<<<<<<< HEAD
      addNotification({ type: "error", title, message, ...options });
=======
      addNotification({
        type: "error",
        title,
        message,
        ...options
      });
>>>>>>> main
    },
    [addNotification]
  );

  const showWarning = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
<<<<<<< HEAD
      addNotification({ type: "warning", title, message, ...options });
=======
      addNotification({
        type: "warning",
        title,
        message,
        ...options
      });
>>>>>>> main
    },
    [addNotification]
  );

  const showInfo = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
<<<<<<< HEAD
      addNotification({ type: "info", title, message, ...options });
    },
    [addNotification]
  );
=======
      addNotification({
        type: "info",
        title,
        message,
        ...options
      });
    },
    [addNotification]
  );
=======
  const showSuccess = useCallback((title: string, message: string, options?: Partial<Notification>) => {
>>>>>>> main
    addNotification({ type: 'success', title, message, ...options });
  }, [addNotification]);
>>>>>>> main

<<<<<<< HEAD
  const showError = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
    addNotification({ type: 'error', title, message, ...options });
  }, [addNotification]);

  const showWarning = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
    addNotification({ type: 'warning', title, message, ...options });
  }, [addNotification]);

  const showInfo = useCallback((title: string, message: string, options?: Partial<Notification>) => {'
=======
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

<<<<<<< HEAD
  const showInfo = useCallback(
    (title: string, message: string, options?: Partial<Notification>) => {
      addNotification({ type: 'info', title, message, ...options });
    },
    [addNotification]
  );
=======
  const showInfo = useCallback((title: string, message: string, options?: Partial<Notification>) => {
>>>>>>> main
    addNotification({ type: 'info', title, message, ...options });
  }, [addNotification]);
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

  return { showSuccess, showError, showWarning, showInfo };
};

// Example usage component
export function NotificationExample() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
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
<<<<<<< HEAD
          onClick={() => showWarning(
            "Warning!",
            "Please review your input before proceeding."
          )}
=======
          onClick={() => showWarning("Warning!", "Please review your input before proceeding.")}
>>>>>>> main
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
<<<<<<< HEAD
=======
=======
  const { showSuccess, showError, showWarning, showInfo } =
    useNotificationActions();

<<<<<<< HEAD
  return ('
    <div className="space-y-4 p-6">"
      <h2 className="text-2xl font-bold">Notification Examples</h2>"
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button"
          onClick={() => showSuccess('Success!', 'Operation completed successfully.')}
=======
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold">Notification Examples</h2>
      <div className="grid grid-cols-2 md: grid-cols-4 gap-4">
        <button
<<<<<<< HEAD
          onClick={() =>
            showSuccess('Success!', 'Operation completed successfully.')
          }
          className="bg-green-600 text-white px-4 py-2 rounded hover: bg-green-700 transition-colors"
=======
<<<<<<< HEAD
          onClick={() => showSuccess("Success!", "Operation completed successfully.")}
=======
          onClick={() => showSuccess('Success!,Operation completed successfully.')}
>>>>>>> main
>>>>>>> main
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
>>>>>>> main
        >
          Show Success
        </button>
<<<<<<< HEAD
        <button"
          onClick={() => showError('Error!', 'Something went wrong. Please try again.')}
=======
        <button
<<<<<<< HEAD
          onClick={() =>
            showError('Error!', 'Something went wrong. Please try again.')
          }
          className="bg-red-600 text-white px-4 py-2 rounded hover: bg-red-700 transition-colors"
=======
<<<<<<< HEAD
          onClick={() => showError("Error!", "Something went wrong. Please try again.")}
=======
          onClick={() => showError('Error!,Something went wrong. Please try again.')}
>>>>>>> main
>>>>>>> main
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
>>>>>>> main
        >
          Show Error
        </button>
<<<<<<< HEAD
        <button"
          onClick={() => showWarning('Warning!', 'Please review your input before proceeding.')}
=======
        <button
<<<<<<< HEAD
          onClick={() =>
            showWarning(
              'Warning!',
              'Please review your input before proceeding.'
            )
          }
          className="bg-yellow-600 text-white px-4 py-2 rounded hover: bg-yellow-700 transition-colors"
=======
<<<<<<< HEAD
          onClick={() => showWarning("Warning!", "Please review your input before proceeding.")}
=======
          onClick={() => showWarning('Warning!,Please review your input before proceeding.')}
>>>>>>> main
>>>>>>> main
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
>>>>>>> main
        >
          Show Warning
        </button>
<<<<<<< HEAD
        <button"
=======
        <button
<<<<<<< HEAD
>>>>>>> main
          onClick={() => showInfo('Info', 'Here is some helpful information.')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700 transition-colors"
=======
<<<<<<< HEAD
          onClick={() => showInfo("Info", "Here is some helpful information.")}
=======
          onClick={() => showInfo('Info,Here is some helpful information.')}
>>>>>>> main
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
>>>>>>> main
        >
          Show Info
        </button>
      </div>"
      <div className="mt-8">
<<<<<<< HEAD
        <button"
          onClick={() => showSuccess('Custom Action', 'Click the action button below.', {
            action: {'
              labe,
    l: 'View Details',
              onClick: () => alert('Action clicked!');
=======
        <button
<<<<<<< HEAD
          onClick={() =>
            showSuccess('Custom Action', 'Click the action button below.', {
              action: {
                label: 'View Details',
                onClick: () => alert('Action clicked!'),
              },
              duration: 10000,
            })
          }
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover: bg-purple-700 transition-colors"
=======
<<<<<<< HEAD
          onClick={() =>
            showSuccess("Custom Action", "Click the action button below.", {
              action: {
                label: "View Details",
                onClick: () => alert("Action clicked!")
              },
              duration: 10000
            })
          }
=======
          onClick={() => showSuccess('Custom Action,Click the action button below.', {
            action: {
              label: 'View Details',
              onClick: () => alert('Action clicked!')
>>>>>>> main
            },
            duration: 10000
          })}
>>>>>>> main
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
>>>>>>> main
>>>>>>> main
>>>>>>> main
        >
          Show Custom Action Notification
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}"
=======
}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
