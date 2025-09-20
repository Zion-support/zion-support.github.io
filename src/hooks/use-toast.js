import { toast as sonnerToast } from 'sonner';

export const useToast = () => {
  const toast = (options) => {
    const message = options.description || options.title || '';
    if (options.variant === 'destructive') {
      sonnerToast.error(message, options);
    } else if (options.variant === 'success') {
      sonnerToast.success(message, options);
    } else {
      sonnerToast(message, options);
    }
  };

  toast.title = (title) => sonnerToast(title);
  toast.description = (description) => sonnerToast(description);
  toast.error = (error) => sonnerToast.error(error);
  toast.success = (message) => sonnerToast.success(message);

  return { toast };
};

export const toast = (options) => {
  const message = options?.description || options?.title || '';
  if (options?.variant === 'destructive') {
    sonnerToast.error(message, options);
  } else if (options?.variant === 'success') {
    sonnerToast.success(message, options);
  } else {
    sonnerToast(message, options);
  }
};

toast.title = (title) => sonnerToast(title);
toast.description = (description) => sonnerToast(description);
toast.error = (error) => sonnerToast.error(error);
toast.success = (message) => sonnerToast.success(message);