import React from "react";

// Simple toast implementation for development
export type ToastOptions = {
  description?: string;
  title?: string;
  variant?: "default" | "destructive" | "success";
};

export const useToast = () => {
  const toast = (options: ToastOptions) => {
    console.log('Toast:', options);
    // In a real implementation, this would show a toast notification
  };

  return { toast };
};

export const toast = (options: ToastOptions) => {
  console.log('Toast:', options);
  // In a real implementation, this would show a toast notification
};