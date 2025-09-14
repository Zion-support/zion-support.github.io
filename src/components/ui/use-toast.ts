import { toast as sonnerToast } from 'sonner';

export function toast(options: {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
}) {
  const { title, description, variant = 'default' } = options;
  
  const message = title && description ? `${title}: ${description}` : title || description || '';
  
  switch (variant) {
    case 'destructive':
      sonnerToast.error(message);
      break;
    case 'success':
      sonnerToast.success(message);
      break;
    case 'warning':
      sonnerToast.warning(message);
      break;
    case 'info':
      sonnerToast.info(message);
      break;
    default:
      sonnerToast(message);
  }
}