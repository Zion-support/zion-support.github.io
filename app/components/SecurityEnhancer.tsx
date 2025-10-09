'use client';
import React, { useEffect } from 'react';

const SecurityEnhancer = () => {
  useEffect(() => {
    // Disable right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e) => e.preventDefault();
      document.addEventListener('contextmenu', handleContextMenu);
      
      return () => document.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);

  return null;
};

export default SecurityEnhancer;