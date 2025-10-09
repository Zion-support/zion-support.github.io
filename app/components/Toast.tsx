'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStyles = () => {
    const baseStyles = 'bg-gray-800 border-l-4 rounded-lg shadow-lg p-4 mb-4 transition-all duration-300 transform';
    
    switch (type) {
      case 'success':
        return `${baseStyles} border-green-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      case 'error':
        return `${baseStyles} border-red-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      case 'warning':
        return `${baseStyles} border-yellow-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      case 'info':
        return `${baseStyles} border-blue-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      default:
        return `${baseStyles} border-blue-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
    }
  };

  return (
    <div className={getStyles()}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-white">{title}</h4>
          {message && (
            <p className="mt-1 text-sm text-gray-300">{message}</p>
          )}
        </div>
        <div className="flex-shrink-0 ml-3">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Toast Container Component
interface ToastContainerProps {
  toasts: Array<{
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
  }>;
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Toast;