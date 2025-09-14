import { toast as sonnerToast } from 'sonner';

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
}

export function toast(options: ToastOptions) {
  const { title, description, variant = 'default' } = options;
  
  if (variant === 'destructive') {
    sonnerToast.error(title || 'Error', {
      description,
    });
  } else if (variant === 'success') {
    sonnerToast.success(title || 'Success', {
      description,
    });
  } else {
    sonnerToast(title || 'Notification', {
      description,
    });
  }
}

export const useToast = () => ({
  toast,
});