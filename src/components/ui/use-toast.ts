<<<<<<< HEAD
import { toast   } from 'react-hot-toast.ts'

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
  const showToast = (message: anystring, options?: ToastOptions)   => {
=======
import { toast  } from 'react-hot-toast.ts'

interface ToastOptions {

duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";

}

export function useToast(...args: any[]): any {
  const showToast = (message: anystring, options?: ToastOptions)  => {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    return toast(message, options)

<<<<<<< HEAD
  return { showToast }
}}}
=======
  return { showToast };
};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
