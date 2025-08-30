import { useState, useCallback } from 'react';

// Simple toast function for direct import
export const toast = ({ title, description, variant = 'default' }) => {
  // In a real app, this would integrate with a toast library
  console.log(`Toast [${variant}]: ${title} - ${description}`);
  
  // For now, just log to console
  // You can replace this with your preferred toast implementation
  return Date.now();
};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, variant = 'default' }) => {
    const id = Date.now();
    const newToast = { id, title, description, variant };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
    
    return id;
  }, []);

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return {
    toast,
    dismiss,
    toasts
  };
};