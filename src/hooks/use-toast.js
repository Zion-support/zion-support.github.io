import { toast as hotToast } from 'react-hot-toast';

export const useToast = () => {
  const toast = (message, options) => {
    hotToast(message, options);
  };

  toast.success = (message) => hotToast.success(message);
  toast.error = (message) => hotToast.error(message);
  toast.loading = (message) => hotToast.loading(message);

  return { toast };
};

export default useToast;