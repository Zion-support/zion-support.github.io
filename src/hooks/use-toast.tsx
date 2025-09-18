import React, { useState, useCallback } from 'react';
import ToastComponent, { Toast, ToastType } from '@/components/ui/toast';

interface ToastOptions {
  title: string;
  message?: string;
  type?: ToastType;
  duration?: number;
}
interface ToastContextType {
  toasts: Toast[];
  toast: (options: ToastOptions) => void;
  removeToast: (id: string) => void;
const ToastContext = React.createContext<ToastContextType | undefined>(undefined);
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);
  const toast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      title: options.title,
      message: options.message,
      type: options.type || 'info',
      duration: options.duration || 5000,
    };
    
    setToasts(prev => [...prev, newToast]);
  return (
    <ToastContext.Provider value={{ toasts, toast, removeToast }}>
      {children}
      {toasts.map(toastItem => (
        <ToastComponent
          key={toastItem.id}
          toast={toastItem}
          onRemove={removeToast}
        />
      ))}
    </ToastContext.Provider>
  );
};
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
