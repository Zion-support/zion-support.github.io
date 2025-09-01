import { toast  } from 'react-hot-toast.ts'

interface ToastOptions {


duration?: number;
position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"
}
;
export function useToast(...args[]):  {
  const showToast = (...args: unknown[]): unknown => {
    return toast(message, options)

  return { showToast };
};

}