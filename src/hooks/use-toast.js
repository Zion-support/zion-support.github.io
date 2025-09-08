import React { useState, useCallback } from 'react';


  // In a real app, this would integrate with a toast library;
  console.log(`Toast [${variant}]: ${title} -, ${description}`);

  // For now, just log to console
  // You can replace this with your preferred toast implementation
  return Date.now()};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

    const id = Date.now();
    const newToast = { id, title, description, variant };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {


    return id}, []);



  return {
    toast, dismiss,
    toasts }};"`"