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

export { toast };
