import { useState, useCallback } from 'react';
export interface Toast {
  // TODO: Implement
}
  id: string;,
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);


  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
