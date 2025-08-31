<<<<<<< HEAD
import React, { useState, useCallback } from 'react';

// Simple toast function for direct import
export const toast = ({ title, description, variant = 'default' }) => {
  // In a real app, this would integrate with a toast library
  console.log(`Toast [${variant}]: ${title} - ${description}`);

  // For now, just log to console
  // You can replace this with your preferred toast implementation
  return Date.now();
};

=======
import React, { useState } from 'react';
import { useState, useCallback } from 'react';
// Simple toast function for direct import
export const toast = ({ title, description, variant = 'default' }) => {
  // In a real app, this would integrate with a toast library
  // // // // // // // console.log(`Toast [${variant}]: ${title} - ${description}`);
=======
  console.log(`Toast [${variant}]: ${title} - ${description}`);
  // For now, just log to console
  // You can replace this with your preferred toast implementation
  return Date.now()};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

=======
    setToasts(prev => prev.filter(t => t.id !== id))}, []);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return {
    toast,
    dismiss,
    dismissAll,
    toasts
  };
};