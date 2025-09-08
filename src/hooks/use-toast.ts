import { toast as hotToast, type ToastOptions as HotToastOptions } from 'react-hot-toast';

export interface Toast {

  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
};

export const useToast = () => ({ toast });

function toast(options: ToastOptions) {
  const message = options.description || options.title || '';
  if (options.variant === 'destructive') {
    hotToast.error(message, options);
  } else if (options.variant === 'success') {
    hotToast.success(message, options);
  } else {
    hotToast(message, options);
  }
}

toast.title = (title: string) => hotToast(title);
toast.description = (description: string) => hotToast(description);
toast.error = (error: string) => hotToast.error(error);
toast.success = (message: string) => hotToast.success(message);

  const toast = useCallback(({ title, description, variant = 'default', duration = 5000 }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, title, description, variant, duration };
    
    setToasts(prev => [...prev, newToast]);
    
    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, duration);
    }
    
    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    toast,
    dismiss,
    dismissAll
  };
}

// Export a default toast function for backward compatibility
export const toast = ({ title, description, variant = 'default', duration = 5000 }: Omit<Toast, 'id'>) => {
  // In a real implementation, this would dispatch to a global toast system
  // // // // // console.log('Toast:', { title, description, variant, duration })};