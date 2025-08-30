import { toast                } from 'react-hot-toast.ts'

interface ToastOptions {














<<<<<<< HEAD
duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";













}

export function useToast(...args[]: any):  {
  const showToast = (message: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring, options?: ToastOptions)                => {
    return toast(message, options)

<<<<<<< HEAD
  return { showToast }
}}}
=======
  return { showToast };
};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
