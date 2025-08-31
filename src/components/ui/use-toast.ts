import { toast                } from 'react-hot-toast.ts'

interface ToastOptions {














>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";













}

export function useToast(...args[]: any):  {
  const showToast = (message: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring, options?: ToastOptions)                => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    return toast(message, options)
  return { showToast };
};
