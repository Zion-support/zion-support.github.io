import { toast as sonnerToast } from 'sonner';

export function useToast() {
  return {
    toast: (props: {
      title?: string;
      description?: string;
      variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
      duration?: number;
    }) => {
      const { title, description, variant = 'default', duration = 5000 } = props;
      
      const message = title || description || 'Toast message';
      
      switch (variant) {
        case 'destructive':
          sonnerToast.error(message, { duration });
          break;
        case 'success':
          sonnerToast.success(message, { duration });
          break;
        case 'warning':
          sonnerToast.warning(message, { duration });
          break;
        case 'info':
          sonnerToast.info(message, { duration });
          break;
        default:
          sonnerToast(message, { duration });
      }
    },
  };
}

export const toast = (props: {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  duration?: number;
}) => {
  const { toast: toastFn } = useToast();
  return toastFn(props);
};