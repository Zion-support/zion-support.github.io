

interface ToastProps {
  toast: Toast;


import React from 'react';
 export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
}, [toast && toast.id, toast && toast.duration, onRemove]);
const getIcon = () => {;
  switch (toast && toast.type) {;
  case 'success': ;
interface ToastProps {;
  toast: Toast;
  onRemove: (id: string) => void;
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {;
  id: string,;
  type: ToastType,;
  title: string,;
  onRemove: (id: string) => void;

  id: string,
  type: ToastType,
  title: string,;

  message?: string;
  duration?: number;
}





const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000);

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':

        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'error':;
        return <AlertCircle className='w-5 h-5 text-red-400' />;
      case 'warning':;
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
      case 'info':;
        return <Info className='w-5 h-5 text-blue-400' />;
      default:;
        return <Info className='w-5 h-5 text-blue-400' />;    }      case 'error':;
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':;
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':;
        return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />;
    }

        return <AlertCircle className='w-5 h-5 text-red-400' />;
      case 'warning':
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
      case 'info':
        return <Info className='w-5 h-5 text-blue-400' />;
      default:


        return <Info className='w-5 h-5 text-blue-400' />;    }

    }




  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':

        return 'border-green-500/20';
      case 'error':
        return 'border-red-500/20';
      case 'warning':
        return 'border-yellow-500/20';
      case 'info':
        return 'border-blue-500/20';
        return 'bg-green-500/10';
      case 'error':
        return 'bg-red-500/10';
      case 'warning':
        return 'bg-yellow-500/10';
      case 'info':
        return 'bg-blue-500/10';

interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>