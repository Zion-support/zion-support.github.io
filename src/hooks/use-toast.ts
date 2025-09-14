import React from "react";
<<<<<<< HEAD
import {
  useToast as useToastHook,
  Toast} from "@/components/ui/toast";

// Extend the Toast component props with common toast options
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {
=======

// Simple toast implementation for development
export type ToastOptions = {
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
  description?: string;
  title?: string;
  variant?: "default" | "destructive" | "success";
};

<<<<<<< HEAD
export const useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {
  const { toast } = useToastHook();
  toast(props);
}

// Convenience helpers mirroring common toast variants.
=======
export const useToast = () => {
  const toast = (props: ToastOptions) => {
    console.log('Toast:', props.title || props.description || 'Toast notification');
  };
  
  return { toast };
};

// Base toast function
function baseToast(props: ToastOptions) {
  console.log('Toast:', props.title || props.description || 'Toast notification');
}

// Convenience helpers
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
baseToast.title = (title: string) => {
  baseToast({ title });
};

baseToast.description = (description: string) => {
  baseToast({ description });
};

baseToast.error = (error: string) => {
  baseToast({ variant: "destructive", title: "Error", description: error });
};

baseToast.success = (message: string) => {
  baseToast({ variant: "success", title: "Success", description: message });
};

<<<<<<< HEAD
// Export the callable toast function.
=======
// Export the callable toast function
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void;
  description: (description: string) => void;
  error: (error: string) => void;
  success: (message: string) => void;
};