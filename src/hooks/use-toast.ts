// Simple toast implementation without external dependencies
export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
};

export const useToast = () => ({ toast });

function toast(options: ToastOptions) {
  const message = options.description || options.title || '';
  const variant = options.variant || 'default';
  
  // For now, just log to console to avoid build errors
  // In production, this could be replaced with a proper toast library
  console.log(`[${variant.toUpperCase()}] ${message}`);
  
  // You can implement a proper toast UI here later
  // For example, using a simple div that appears and disappears
}

toast.title = (title: string) => toast({ title });
toast.description = (description: string) => toast({ description });
toast.error = (error: string) => toast({ description: error, variant: 'destructive' });
toast.success = (message: string) => toast({ description: message, variant: 'success' });

export { toast };
