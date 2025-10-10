'use client';

import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    // Register service worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });

      // Listen for service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.payload);
        }
      });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/styles/critical.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
      });
    };

    // Initialize caching strategies
    const initializeCaching = () => {
      if ('caches' in window) {
        caches.open('zion-tech-v1').then((cache) => {
          // Cache critical resources
          const criticalUrls = [
            '/',
            '/styles/critical.css',
            '/manifest.json'
          ];

          cache.addAll(criticalUrls).catch((error) => {
            console.error('Failed to cache critical resources:', error);
          });
        });
      }
    };

    // Run initialization
    preloadCriticalResources();
    initializeCaching();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default ServiceWorker;