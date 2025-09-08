import { useState } from 'react';
export function useToast() {
    const [toasts, setToasts] = useState([]);
    const toast = (options) => {
        const id = Date.now().toString();
        const newToast = {
            id,
            duration: 5000,
            ...options
        };
        setToasts(prev => [...prev, newToast]);
        // Auto remove toast after duration
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, newToast.duration);
        return id;
    };
    const dismiss = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };
    const success = (title, description) => {
        return toast({ title, description, type: 'success' });
    };
    const error = (title, description) => {
        return toast({ title, description, type: 'error', variant: 'destructive' });
    };
    const warning = (title, description) => {
        return toast({ title, description, type: 'warning' });
    };
    const info = (title, description) => {
        return toast({ title, description, type: 'info' });
    };
    return {
        toasts,
        toast,
        dismiss,
        success,
        error,
        warning,
        info
    };
}
// Export a standalone toast function for convenience
export const toast = (options) => {
    // This is a simplified version that just logs to console
    // In a real app, you'd want to integrate with a toast library
    console.log('Toast:', options);
    return Date.now().toString();
};
