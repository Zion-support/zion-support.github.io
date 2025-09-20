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
=======
=======
import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  variant?: 'default' | 'destructive';
  duration?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
=======
  const toast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
=======

  const toast = (options: Omit<Toast, 'id'>) => {
    const id = Date.now().toString();
    const newToast: Toast = {
      id,
      title: options.title,
      description: options.description,
      variant: options.variant || 'default',
      duration: options.duration || 5000,
    };

=======
    setToasts(prev => [...prev, newToast]);
    // Auto-remove toast after duration
=======
    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, newToast.duration);

    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

=======
=======
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

  return {
    toasts,
    toast,
    dismiss,
    dismissAll,
  };
}
=======
// Export a default toast function for backward compatibility
export const toast = (options: ToastOptions) => {
  // This is a simplified version - in a real app, you'd want to use a toast context
=======

// Export a standalone toast function for convenience
export const toast = (options: Omit<Toast, 'id'>) => {
  // This is a simplified version that just logs to console
  // In a real app, you'd want to integrate with a toast library
  console.log('Toast:', options);
};