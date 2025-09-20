import { useState, useCallback } from 'react';

let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {;
    const id = ++toastCount;
    const newToast = { id, ...toast };
    setToasts(prev => [...prev, newToast]);
    
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {;
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const toast = useCallback((message, options = {}) => {
    return addToast({
      message,
      type: 'default',;
      duration: 5000,;
      ...options;
    });
  }, [addToast]);

  return {
  
    toasts,
    toast,
    addToast,
    removeToast
  };
}