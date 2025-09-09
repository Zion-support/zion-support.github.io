import { toast as radixToast } from '@radix-ui/react-toast';

export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
};

export const useToast = () => ({ toast });

function toast(options: ToastOptions) {
  const message = options.description || options.title || '';
  const duration = options.duration || 5000;
  
  // For now, we'll use a simple console.log as a fallback
  // In a real implementation, you'd integrate with @radix-ui/react-toast
  console.log(`[Toast] ${options.variant || 'default'}: ${message}`);
  
  // You can implement proper toast functionality here using @radix-ui/react-toast
  // This is a placeholder implementation
}

toast.title = (title: string) => toast({ title });
toast.description = (description: string) => toast({ description });
toast.error = (error: string) => toast({ error, variant: 'destructive' });
toast.success = (message: string) => toast({ message, variant: 'success' });

  const { title, description, variant, action } = props;
  const message = title || description || ''; // Sonner needs a primary message.

  // If only description is provided, sonner uses it as the main message.
  // If title is also there, description goes into options.
  const options: { description?: string; action?: React.ReactNode; } = {};
  if (title && description) {
    options.description = description;
  }
  if (action) {
    options.action = action;
  }

  switch (variant) {
    case 'destructive':
      sonnerToast.error(message, options);
      break;
    case 'success':
      sonnerToast.success(message, options);
      break;
    default:
      // If there's a title and description, pass description in options.
      // If only title, it's the main message. If only description, it's also the main message.
      if (title && description) {
        sonnerToast(title, { description });
      } else if (title) {
        sonnerToast(title, options);
      } else if (description) {
        sonnerToast(description, options);
      } else {
        // Fallback if neither title nor description, though unlikely with current usage
        sonnerToast("Notification", options);
      }
      break;
  }
};

// Re-exporting specific sonner methods if they are used directly elsewhere,
// or to maintain compatibility if some parts of the app use toast.success("message")
toastAdapter.success = (message: string, options?: object) => sonnerToast.success(message, options);
toastAdapter.error = (message: string, options?: object) => sonnerToast.error(message, options);
toastAdapter.info = (message: string, options?: object) => sonnerToast.info(message, options);
toastAdapter.warning = (message: string, options?: object) => sonnerToast.warning(message, options);
toastAdapter.loading = (message: string, options?: object) => sonnerToast.loading(message, options);
// Ensure the component passed to the custom adapter is a ReactElement, or a function returning one.
// Sonner's own `custom` type is `(component: (() => React.ReactNode) | React.ReactNode, options?: ExternalToastOptions) => number | string;`
// The issue was likely my () => component was too generic. Let's align with Sonner's flexibility but fix the immediate error.
// The error "Type 'ReactNode' is not assignable to type 'ReactElement'" suggests that 'component' itself was the problem.
toastAdapter.custom = (component: React.ReactElement, options?: object) => sonnerToast.custom(() => component, options);
toastAdapter.dismiss = (toastId?: string | number) => sonnerToast.dismiss(toastId);

export const toast = toastAdapter;
export const useToast = () => ({ toast: toastAdapter });
