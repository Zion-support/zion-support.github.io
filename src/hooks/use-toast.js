import React from "react";
import { useState, useCallback } from 'react';

let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
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

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const toast = useCallback((message, options = {}) => {
    return addToast({
      message,
      type: 'default',
      duration: 5000,
      ...options});
  }, [addToast]);

  return {
    toasts,
    toast,
    addToast,
    removeToast};
}
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((message, options = {}) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = {
      id,
      message,
      type: options.type || 'default',
      duration: options.duration || 5000};

    setToasts(prev => [...prev, newToast]);

    if (newToast.duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, newToast.duration);
    }

    return id;
  }, []);

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return {
    toast,
    dismiss,
    toasts};
}

export default useToast;
