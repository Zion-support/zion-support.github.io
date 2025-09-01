import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Info, X, XCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" aria-hidden="true" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" aria-hidden="true" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" aria-hidden="true" />;
    }
  };

  const getBgColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800';
      default:
        return 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800';
    }
  };

  const getToastRole = () => {
    switch (toast.type) {
      case 'success':
        return 'status';
      case 'error':
        return 'alert';
      case 'warning':
        return 'alert';
      case 'info':
        return 'status';
      default:
        return 'status';
    }
  };

  const getToastAriaLabel = () => {
    const typeLabel = toast.type.charAt(0).toUpperCase() + toast.type.slice(1);
    return `${typeLabel} notification: ${toast.title}${toast.message ? ` - ${toast.message}` : ''}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative p-4 rounded-lg border shadow-lg ${getBgColor()} max-w-sm w-full`}
      role={getToastRole()}
      aria-label={getToastAriaLabel()}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            {toast.title}
          </h4>
          {toast.message && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {toast.message}
            </p>
          )}
        </div>
        <button
          onClick={() => {
            setTimeout(() => onRemove(toast.id), 300);
          }}
          aria-label={`Dismiss ${toast.type} notification`}
          className="flex-shrink-0 ml-2 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Expose addToast globally for easy access
  useEffect(() => {
    (window as any).showToast = addToast;
    return () => {
      delete (window as any).showToast;
    };
  }, []);

  return (
    <div
      className="fixed top-4 right-4 z-50 space-y-2"
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      aria-atomic="false"
    >
      <AnimatePresence>
        {toasts.map(toast => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onRemove={removeToast}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Utility function to show toasts
export const showToast = (type: ToastType, title: string, message?: string, duration?: number) => {
  if (typeof window !== 'undefined' && (window as any).showToast) {
    (window as any).showToast({ type, title, message, duration });
  }
};