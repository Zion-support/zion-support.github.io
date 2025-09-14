import { toast as sonnerToast } from 'sonner';

export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success" | "warning" | "info";
};

export const useToast = () => {
  return {
    toast: (options: ToastOptions) => {
      const { title, description, variant = "default" } = options;
      
      if (variant === "destructive") {
        sonnerToast.error(title || "Error", { description });
      } else if (variant === "success") {
        sonnerToast.success(title || "Success", { description });
      } else if (variant === "warning") {
        sonnerToast.warning(title || "Warning", { description });
      } else if (variant === "info") {
        sonnerToast.info(title || "Info", { description });
      } else {
        sonnerToast(title || "Notification", { description });
      }
    }
  };
};

// Convenience function for direct usage
export const toast = (options: ToastOptions) => {
  const { toast } = useToast();
  toast(options);
};

// Convenience helpers
toast.title = (title: string) => {
  toast({ title });
};

toast.description = (description: string) => {
  toast({ description });
};

toast.error = (error: string) => {
  toast({ variant: "destructive", title: "Error", description: error });
};

toast.success = (message: string) => {
  toast({ variant: "success", title: "Success", description: message });
};

toast.warning = (message: string) => {
  toast({ variant: "warning", title: "Warning", description: message });
};

toast.info = (message: string) => {
  toast({ variant: "info", title: "Info", description: message });
};