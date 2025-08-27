import { toast } from "react-hot-toast"

interface ToastOptions {
  duration?: number
  position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"
}

export function useToast() {
  const showToast = (message: string, options?: ToastOptions) => {
    return toast(message, options)
  }

  return { showToast }
}