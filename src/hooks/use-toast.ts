export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
};

export const useToast = () => {
  const toast = (options: ToastOptions) => {
    const message = options.description || options.title || '';
    console.log(`Toast: ${message}`, options);
  };

  toast.title = (title: string) => console.log(`Toast Title: ${title}`);
  toast.description = (description: string) => console.log(`Toast Description: ${description}`);
  toast.error = (error: string) => console.error(`Toast Error: ${error}`);
  toast.success = (message: string) => console.log(`Toast Success: ${message}`);

  return { toast };
};

export { useToast as default };
