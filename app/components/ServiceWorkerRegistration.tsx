<<<<<<< HEAD
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled,
  onError,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New content is available
                  onUpdateAvailable?.();
                } else {
                  // Content is cached for the first time
                  onUpdateInstalled?.();
                }
              }
            });
          }
        });

        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload();
        });

      } catch (error) {
        onError?.(error as Error);
      }
    };

    registerServiceWorker();
  }, [onUpdateAvailable, onUpdateInstalled, onError]);

  return null;
=======
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => { /* empty */ })
          .catch((registrationError) => { /* empty */ });
      });
    }
  }, []);

const ServiceWorkerRegistration = () => {
  return (
    <div>
      <h1>ServiceWorkerRegistration</h1>
      <p>This component is under construction.</p>
    </div>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
};

export default ServiceWorkerRegistration;