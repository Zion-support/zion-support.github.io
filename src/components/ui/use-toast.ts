<<<<<<< HEAD
interface ToastOptions {}
duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"}

duration?: number;"""
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"""
}
;
export function useToast(...args[]):  {}
  const showToast: any = (message: string, options?: ToastOptions)  => {}
    return toast(message, options)

  return { showToast }};"""
'"'"""
=======
import { toast                } from 'react-hot-toast.ts'

interface ToastOptions {

duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";













}

export function useToast(...args[]: any):  {

  const showToast = (message: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring, options?: ToastOptions)                => {

    return toast(message, options)
  return { showToast };
};
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
