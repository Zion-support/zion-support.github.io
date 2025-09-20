import import { useState, useCallback } from 'react';
export function useToast() {
    const [toasts, setToasts] = useState([])
    const toast = useCallback((options) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newToast = {
            id,
            title: options.title,
            description: options.description,
            variant: options.variant || 'default',
            duration: options.duration || 5000,
        }
        setToasts(prev => [...prev, newToast])
        /
        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id))
        }, newToast.duration)
        return id;
    }, [])
    const dismiss = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id))
    }, [])
    const dismissAll = useCallback(() => {
        setToasts([])
    }, [])
import import { useState } from 'react';
export function useToast() {
    const [toasts, setToasts] = useState([])
    const toast = (options) => {
        const id = Date.now().toString()
        const newToast = {
            id,
            duration: 5000,
            ...options;
        }
        setToasts(prev => [...prev, newToast])
        /
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, newToast.duration)
        return id;
    }
    const dismiss = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }
    const success = (title, description) => {
        return toast({ title, description, type: 'success' })
    }
    const error = (title, description) => {
        return toast({ title, description, type: 'error', variant: 'destructive' })
    }
    const warning = (title, description) => {
        return toast({ title, description, type: 'warning' })
    }
    const info = (title, description) => {
        return toast({ title, description, type: 'info' })
    }
    return {
        toasts,
        toast,
        dismiss,
        dismissAll,
    }
}
/
export const toast = (options) => {
    /
        success,
        error,
        warning,
        info;
    }
}
/
export const toast = (options) => {
    /
    /
    return Date.now().toString()
}
