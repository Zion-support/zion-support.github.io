import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface ToastProps {



import React from 'react';
 export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {;


  message?: string;
  duration?: number;
  onClose?: (id: string) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

  showToast: (toast: Omit<ToastProps, 'id'>) => void;

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {

const ToastItem: React.FC<ToastProps> = ({

    
      
    







          


export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = useCallback((toast: Omit<ToastProps, 'id'>) => {


const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {



        return <CheckCircle className="w-5 h-5 text-green-400" />;

        return <CheckCircle className='w-5 h-5 text-green-400' />;
        return <AlertCircle className='w-5 h-5 text-red-400' />;
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
        return <Info className='w-5 h-5 text-blue-400' />;
        return <Info className='w-5 h-5 text-blue-400' />;    }      case 'error':;
        return <AlertCircle className="w-5 h-5 text-red-400" />;
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
        return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />;

        return <AlertCircle className='w-5 h-5 text-red-400' />;
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
        return <Info className='w-5 h-5 text-blue-400' />;


        return <Info className='w-5 h-5 text-blue-400' />;    }








          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      </AnimatePresence>

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
      <AnimatePresence>

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      </AnimatePresence>
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);
  }, []);


  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // Limit toasts to prevent memory issues
  useEffect(() => {
    if (toasts.length > 5) {
      setToasts(prev => prev.slice(-5));
    }
  }, [toasts.length]);

  const contextValue: ToastContextType = {
    showToast,
    hideToast,
    clearToasts
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {toasts.length > 0 && createPortal(
        <div
          className="fixed top-4 right-4 z-50 space-y-2 max-w-sm"
          role="region"
          aria-label="Notifications"
        >
          {toasts.map(toast => (
            <ToastItem
              key={toast.id}
              {...toast}
              onClose={hideToast}
            />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const toast = {
  success: (title: string, message?: string, options?: Partial<ToastProps>) => {
  error: (title: string, message?: string, options?: Partial<ToastProps>) => {
  warning: (title: string, message?: string, options?: Partial<ToastProps>) => {
  info: (title: string, message?: string, options?: Partial<ToastProps>) => {

// HOC to wrap components with toast functionality
export const withToast = <P extends object>(
export const withToast = <P extends object>(
  Component: React.ComponentType<P & { toast?: ToastContextType }>
    <ToastContext.Consumer>
        <Component {...props} toast={toastContext} />
    </ToastContext.Consumer>
  
  
      <AnimatePresence>;
        {toasts.map (toast => (          <ToastItem key={toast.id} toast={toast} on_remove={on_remove} />))}
      </AnimatePresence>;
          <X className="w - 4 h - 4 text - white / 60 hover:text - white" />;
