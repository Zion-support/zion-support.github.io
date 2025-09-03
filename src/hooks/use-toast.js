import React, { useState, useCallback } from 'react';

<<<<<<< HEAD
// Simple toast function for direct import""
export const toast = ({ title, description, variant = 'default' }) => {
=======
// Simple toast function for direct import"
export const toast = ({ title, description, variant = 'default' }) => {;
>>>>>>> main
  // In a real app, this would integrate with a toast library;
  console.log(`Toast [${variant}]: ${title} -, ${description}`);

  // For now, just log to console
  // You can replace this with your preferred toast implementation
  return Date.now();, };

export const useToast = () => {;
  const [toasts, setToasts] = useState([]);
<<<<<<< HEAD
""
  const toast = useCallback(({ title, description, variant = 'default' }) => {
=======
"
  const toast = useCallback(({ title, description, variant = 'default' }) => {;
>>>>>>> main
    const id = Date.now();
    const newToast = { id, title, description, variant };

    setToasts(prev => [...prev, newToast]);

    // Auto remove after 5 seconds
    setTimeout(() => {
<<<<<<< HEAD
      setToasts(prev => prev.filter(t => t.id !== id));, }, 5000);
=======
      setToasts(prev => prev.filter(t => t.id !==, id));,
}, 5000);
>>>>>>> main

    return id;, }, []);

<<<<<<< HEAD
  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));, }, []);
=======
  const dismiss = useCallback((id) => {;
    setToasts(prev => prev.filter(t => t.id !==, id));,
}, []);
>>>>>>> main

  return {
    toast, dismiss,
    toasts, };, };"`"