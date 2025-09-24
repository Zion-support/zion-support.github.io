import React from 'react',
'use client',
,
import {,
  createContext,;
  useContext,;
  useState,;
  ReactNode,;
  useCallback,;
} from 'react',
import { ToastContainer, ToastProps } from '../components/Toast',
,
interface ToastContextType {,
  toasts: ToastProps[],
  addToast: (toast: Omit<ToastProps, 'id'>) => string,
  removeToast: (id: string) => void,
  success: (,
    title: string,;
    description?: string,;
    options?: Partial<ToastProps>,
  ) => string,
  error: (,
    title: string,;
    description?: string,;
    options?: Partial<ToastProps>,
  ) => string,
  warning: (,
    title: string,;
    description?: string,;
    options?: Partial<ToastProps>,
  ) => string,
  info: (,
    title: string,;
    description?: string,;
    options?: Partial<ToastProps>,
  ) => string,
}
,
const ToastContext = createContext<ToastContextType | undefined>(undefined),
,
export function useToast() {,
  const context = useContext(ToastContext),
  if (context === undefined) {,
    throw new Error('useToast must be used within a ToastProvider'),
  }
  return context,
}
,
interface ToastProviderProps {,
  children: ReactNode,
  maxToasts?: number,
,}
,
export function ToastProvider({ children, maxToasts = 5 }: ToastProviderProps) {,
  const [toasts, setToasts] = useState<ToastProps[]>([]),
,
  const addToast = useCallback(,
    (toast: Omit<ToastProps, 'id'>) => {,
      const id = Math.random().toString(36).substr(2, 9),
      const newToast: ToastProps = { ...toast, id };
,
      setToasts(prev => {,
        const updated = [...prev, newToast],
        // Remove oldest toasts if we exceed maxToasts,
        return updated.length > maxToasts ? updated.slice(-maxToasts) : updated,
      }),
,
      return id,
    },;
    [maxToasts],
  ),
,
  const removeToast = useCallback((id: string) => {,
    setToasts(prev => prev.filter(toast => toast.id !== id)),
  ,}, []),
,
  const success = useCallback(,
    (title: string, description?: string, options?: Partial<ToastProps>) => {,
      return addToast({ type: 'success', title, description, ...options }),
    },;
    [addToast],
  ),
,
  const error = useCallback(,
    (title: string, description?: string, options?: Partial<ToastProps>) => {,
      return addToast({ type: 'error', title, description, ...options }),
    },;
    [addToast],
  ),
,
  const warning = useCallback(,
    (title: string, description?: string, options?: Partial<ToastProps>) => {,
      return addToast({ type: 'warning', title, description, ...options }),
    },;
    [addToast],
  ),
,
  const info = useCallback(,
    (title: string, description?: string, options?: Partial<ToastProps>) => {,
      return addToast({ type: 'info', title, description, ...options }),
    },;
    [addToast],
  ),
,
  const value: ToastContextType = {,
    toasts,;
    addToast,;
    removeToast,;
    success,;
    error,;
    warning,;
    info,;
  };
,
  return (,
    <ToastContext.Provider value={value}>,
      {children}
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />,
    </ToastContext.Provider>,
  ),
}
,