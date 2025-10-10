'use client';
import React, { useEffect } from 'react';
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully:', registration);
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, notify user
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload()}
                }
              })}
          })} catch (error) {
          console.error('Service Worker registration failed:', error)}
      };
      // Listen for updates
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATE') {
          // Handle service worker update
          if (confirm('New version available! Reload to update?')) {
            window.location.reload()}
        }
      });
      registerSW()}
  }, []);
  return null};
export default ServiceWorker