import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  duration?: number;
}

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastProps extends Toast {
  action?: ToastAction;
}

let toastCount = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(({ title, description, variant = 'default', duration = 5000, action }: Omit<ToastProps, 'id'>) => {
    const id = (++toastCount).toString();
    const newToast: ToastProps = {
      id,
      title,
      description,
      variant,
      duration,
      action,
    };

    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }

    return {
      id,
      dismiss: () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      update: (props: Partial<ToastProps>) =>
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, ...props } : t))
        ),
    };
  }, []);

  const dismiss = useCallback((toastId?: string) => {
    if (toastId) {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    } else {
      setToasts([]);
    }
  }, []);

  return {
    toast,
    dismiss,
    toasts,
  };
};

// For backward compatibility
export const toast = (props: Omit<ToastProps, 'id'>) => {
  // This is a simplified version for direct usage
  console.log('Toast:', props.title || props.description);
  return {
    id: (++toastCount).toString(),
    dismiss: () => {},
    update: () => {},
  };
};

// Additional exports for compatibility
export const _useToast = useToast;
export const _toast = toast;