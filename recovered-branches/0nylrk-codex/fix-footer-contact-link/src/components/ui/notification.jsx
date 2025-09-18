<<<<<<< HEAD
import React, { useState, createContext, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle, Bell } from 'lucide-react';
import { Button } from './button';
// Context
const NotificationContext = createContext(undefined);
// Hook
export function useNotifications() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
export function NotificationProvider({ children, maxNotifications = 5, position = 'top-right' }) {
    const [notifications, setNotifications] = useState([]);
    const removeNotification = useCallback((id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);
    const addNotification = useCallback((notification) => {
        const newNotification = {
            ...notification,
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date(),
            dismissible: notification.dismissible ?? true,
            duration: notification.duration ?? 5000
        };
        setNotifications(prev => {
            const updated = [newNotification, ...prev];
            return updated.slice(0, maxNotifications);
        });
        // Auto-dismiss after duration
        if (newNotification.duration && newNotification.duration > 0) {
            setTimeout(() => {
                removeNotification(newNotification.id);
            }, newNotification.duration);
        }
    }, [maxNotifications, removeNotification]);
    const clearAll = useCallback(() => {
        setNotifications([]);
    }, []);
    const value = {
        notifications,
        addNotification,
        removeNotification,
        clearAll
    };
    return (<NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer position={position}/>
    </NotificationContext.Provider>);
}
function NotificationContainer({ position }) {
    const { notifications, clearAll } = useNotifications();
    const getPositionClasses = (pos) => {
        switch (pos) {
            case 'top-right':
                return 'top-4 right-4';
            case 'top-left':
                return 'top-4 left-4';
            case 'bottom-right':
                return 'bottom-4 right-4';
            case 'bottom-left':
                return 'bottom-4 left-4';
            case 'top-center':
                return 'top-4 left-1/2 transform -translate-x-1/2';
            case 'bottom-center':
                return 'bottom-4 left-1/2 transform -translate-x-1/2';
            default:
                return 'top-4 right-4';
        }
    };
    if (notifications.length === 0)
        return null;
    return (<div className={`fixed z-50 ${getPositionClasses(position)} max-w-sm w-full`}>
      {/* Header with clear all button */}
      {notifications.length > 1 && (<div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-zion-cyan"/>
            <span className="text-zinc-300 text-sm font-medium">
              {notifications.length} notifications
            </span>
          </div>
          <Button size="sm" variant="ghost" onClick={clearAll} className="text-zinc-400 hover:text-zion-cyan text-xs">
            Clear all
          </Button>
        </div>)}
=======

const notification: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">notification</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default notification;
