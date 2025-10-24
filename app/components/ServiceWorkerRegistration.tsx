'use client';

import React, { useEffect } from 'react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
  onError?: (_error: Error) => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled,
<<<<<<< HEAD
  onError: _onError,
=======
  onError,
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
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
      } catch (error) {
        _onError?.(error as Error);
=======
      } catch (_error) {
        onError?.(_error as Error);
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
      }
    };

    registerServiceWorker();
<<<<<<< HEAD
  }, [onUpdateAvailable, onUpdateInstalled, _onError]);
=======
  }, [onUpdateAvailable, onUpdateInstalled, onError]);
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6

  return null;
};

export default ServiceWorkerRegistration;