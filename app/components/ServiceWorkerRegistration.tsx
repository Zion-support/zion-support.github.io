'use client';

import React, { useEffect } from 'react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
<<<<<<< HEAD
  onError?: (_error: Error) => void;
=======
  onError?: (error: Error) => void;
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
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

<<<<<<< HEAD
      } catch (_error) {
        onError?.(_error as Error);
=======
      } catch (error) {
        onError?.(error as Error);
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
      }
    };

    registerServiceWorker();
  }, [onUpdateAvailable, onUpdateInstalled, onError]);

  return null;
};

export default ServiceWorkerRegistration;