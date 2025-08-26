import { toast as hotToast } from 'react-hot-toast';

export const ToastOptions = {
  title: '',
  description: '',
  variant: 'default'
};

export const useToast = () => ({ toast });

function toast(options) {
  const message = options.description || options.title || '';
  if (options.variant === 'destructive') {
    hotToast.error(message, options);
  } else if (options.variant === 'success') {
    hotToast.success(message, options);
  } else {
    hotToast(message, options);
  }
}

toast.title = (title) => hotToast(title);
toast.description = (description) => hotToast(description);
toast.error = (error) => hotToast.error(error);
toast.success = (message) => hotToast.success(message);

export { toast };
