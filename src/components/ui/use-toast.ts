<<<<<<< HEAD
import { toast   } from 'react-hot-toast';
=======
import { toast } from 'react-hot-toast'

>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
interface ToastOptions {
  duration?: number;
  position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
}

export function useToast() {
  const showToast = (message: string, options?: ToastOptions) => {
    return toast(message, options);
  };

  return { showToast }};';
;';;';