import { toast as hotToast } from 'react-hot-toast';

export const useToast = () => ({ toast });

function toast(message, options) {
  hotToast(message, options);
}

toast.error = (message) => hotToast.error(message);
toast.success = (message) => hotToast.success(message);

export { toast };