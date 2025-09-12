import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback } from 'react';
import Notification from '../components/Notification';
import './NotificationProvider.css';
const NotificationContext = createContext(undefined);
export function NotificationProvider({ children, maxNotifications = 5, }) {
    const [notifications, setNotifications] = useState([]);
    const showNotification = useCallback((notification) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newNotification = Object.assign(Object.assign({}, notification), { id, onClose: hideNotification });
        setNotifications(prev => {
            const updated = [newNotification, ...prev];
            // Keep only the most recent notifications
            return updated.slice(0, maxNotifications);
        });
    }, [maxNotifications]);
    const hideNotification = useCallback((id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, []);
    const clearAllNotifications = useCallback(() => {
        setNotifications([]);
    }, []);
    const value = {
        showNotification,
        hideNotification,
        clearAllNotifications,
    };
    return (_jsxs(NotificationContext.Provider, { value: value, children: [children, _jsx("div", { className: 'notification-container', children: notifications.map(notification => (_jsx(Notification, Object.assign({}, notification), notification.id))) })] }));
}
export function useNotifications() {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
