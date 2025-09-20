import { useState, useCallback } from 'react',
import { ToastProps } from '../components/Toast',

export interface ToastItem extends ToastProps {
  id: string
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]),

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, []),

  const addToast = useCallback((toast: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9),
    const newToast: ToastItem = {
      ...toast,
      id,
      onClose: () => removeToast(id)
    },
    
    setToasts(prev => [...prev, newToast]),
    return id,
  }, [removeToast]),

  const removeAllToasts = useCallback(() => {
    setToasts([]),
  }, []),

  const showSuccess = useCallback((message: string, duration?: number) => {
    return addToast({ message, type: 'success', duration }),
  }, [addToast]),

  const showError = useCallback((message: string, duration?: number) => {
    return addToast({ message, type: 'error', duration }),
  }, [addToast]),

  const showWarning = useCallback((message: string, duration?: number) => {
    return addToast({ message, type: 'warning', duration }),
  }, [addToast]),

  const showInfo = useCallback((message: string, duration?: number) => {
    return addToast({ message, type: 'info', duration }),
  }, [addToast]),

  return {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo
  },
},