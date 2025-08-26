<<<<<<< HEAD
import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  variant?: 'default' | 'destructive';
=======
import { useState, useCallback } from 'react';
export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}
export interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
  duration?: number;
}
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
<<<<<<< HEAD

  const toast = (options: Omit<Toast, 'id'>) => {
    const id = Date.now().toString();
=======
  const toast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
    const newToast: Toast = {
      id,
      duration: 5000,
      ...options
    };
    setToasts(prev => [...prev, newToast]);
<<<<<<< HEAD

    // Auto remove toast after duration
=======
    // Auto-remove toast after duration
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, newToast.duration);
    return id;
<<<<<<< HEAD
  };

  const dismiss = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const success = (title: string, description?: string) => {
    return toast({ title, description, type: 'success' });
  };

  const error = (title: string, description?: string) => {
    return toast({ title, description, type: 'error', variant: 'destructive' });
  };

  const warning = (title: string, description?: string) => {
    return toast({ title, description, type: 'warning' });
  };

  const info = (title: string, description?: string) => {
    return toast({ title, description, type: 'info' });
  };

=======
  }, []);
  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);
  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
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
<<<<<<< HEAD

// Export a standalone toast function for convenience
export const toast = (options: Omit<Toast, 'id'>) => {
  // This is a simplified version that just logs to console
  // In a real app, you'd want to integrate with a toast library
=======
// Export a default toast function for backward compatibility
export const toast = (options: ToastOptions) => {
  // This is a simplified version - in a real app, you'd want to use a toast context
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
  console.log('Toast:', options);
  return Date.now().toString();
};