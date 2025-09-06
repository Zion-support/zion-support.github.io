import React, { createContext, useContext, useState } from 'react';

interface Toast {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';

interface ToastContextType {
  toast: (toast: Toast) => void;

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (newToast: Toast) => {
    setToasts(prev => [...prev, newToast]);
    setTimeout() => {
      setToasts(prev => prev.slice(1);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={ toast }>
      {children}
      {toasts.map(toast, index) => (
        <div
          key={index}
          className={`fixed top-4 right-4 p-4 rounded-md shadow-lg ${
            toast.variant = = 'destructive' 
              ? 'bg-red-500 text-white' 
              : 'bg-green-500 text-white'
          }`}
        >
          <h4 className="font-semibold">{toast.title}</h4>
          {toast.description && <p className="text-sm">{toast.description}</p>}
        </div>
      )}
    </ToastContext.Provider>
  );

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
