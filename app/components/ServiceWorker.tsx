'use client';
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
<<<<<<< HEAD
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
=======
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  return null;
};

export default ServiceWorker;
