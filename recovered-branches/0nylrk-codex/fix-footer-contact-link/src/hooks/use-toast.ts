import React from &quot;react&quot;;
import {
  useToast as useToastHook,
  Toast} from &quot;@/components/ui/toast&quot;;

// Extend the Toast component props with common toast options
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {
  description?: string;
  title?: string;
  variant?: &quot;default&quot; | &quot;destructive&quot; | &quot;success&quot;;
};

export const useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {
  const { toast } = useToastHook();
  toast(props);
}

// Convenience helpers mirroring common toast variants.
baseToast.title = (title: string) => {
  baseToast({ title });
};

baseToast.description = (description: string) => {
  baseToast({ description });
};

baseToast.error = (error: string) => {
  baseToast({ variant: &quot;destructive&quot;, title: &quot;Error&quot;, description: error });
};

baseToast.success = (message: string) => {
  baseToast({ variant: &quot;success&quot;, title: &quot;Success&quot;, description: message });
};

// Export the callable toast function.
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void;
  description: (description: string) => void;
  error: (error: string) => void;
  success: (message: string) => void;
};
