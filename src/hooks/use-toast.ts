import React from "react";

// Simple toast implementation for development
export type ToastOptions = {
  description?: string;
  title?: string;
  variant?: "default" | "destructive" | "success";
};

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

// Export the callable toast function
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void;
  description: (description: string) => void;
  error: (error: string) => void;
  success: (message: string) => void;
};