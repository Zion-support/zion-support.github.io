import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './Notification.css';
const Notification = ({ id, type, title, message, duration = 5000, onClose, action, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    useEffect(() => {
        // Trigger entrance animation
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration]);
    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            onClose(id);
        }, 300); // Match CSS transition duration
    };
    const getIcon = () => {
        switch (type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            case 'info':
                return 'ℹ';
            default:
                return 'ℹ';
        }
    };
    return (_jsxs("div", { className: `notification notification--${type} ${isVisible ? 'notification--visible' : ''} ${isLeaving ? 'notification--leaving' : ''}`, role: 'alert', "aria-live": 'polite', children: [_jsx("div", { className: 'notification__icon', children: getIcon() }), _jsxs("div", { className: 'notification__content', children: [_jsx("div", { className: 'notification__title', children: title }), message && _jsx("div", { className: 'notification__message', children: message }), action && (_jsx("button", { className: 'notification__action', onClick: action.onClick, type: 'button', children: action.label }))] }), _jsx("button", { className: 'notification__close', onClick: handleClose, "aria-label": 'Close notification', type: 'button', children: "\u00D7" })] }));
};
export default Notification;
