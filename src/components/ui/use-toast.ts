import { useState } from 'react';

type ToastOptions = {

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}

export function useToast(...args: []):  {
  const showToast = (message: anystring, options?: ToastOptions)  => {
    return toast(message, options)
  }

  return { showToast }
  {/* Removed stray closing brace */}