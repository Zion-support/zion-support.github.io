<<<<<<< HEAD
import React from 'react';
=======
"use client";
import React, { useEffect, useState } from 'react';

import { Download, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled
}) => {
  const [isInstalling, setIsInstalling] = useState(false);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isUpdateInstalled, setIsUpdateInstalled] = useState(false);
  const [registration, setRegistration] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      const swRegistration = await navigator.serviceWorker.register('/sw.js');
      setRegistration(swRegistration);
      
      // Check for updates
      swRegistration.addEventListener('updatefound', () => {
        const newWorker = swRegistration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setIsUpdateAvailable(true);
              onUpdateAvailable?.();
            }
          });
        }
      });

      // Handle controller change (update installed)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setIsUpdateInstalled(true);
        onUpdateInstalled?.();
        
        // Reload after a short delay to ensure the new service worker is active
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_VERSION') {
          console.log('Service Worker version:', event.data.version);
        }
      });

    } catch (error) {
      console.error('Service worker registration failed:', error);
      setError('Failed to register service worker');
    }
  };

  const handleUpdate = async () => {
    if (!registration) return;

    setIsInstalling(true);
    setError(null);

    try {
      // Send message to service worker to skip waiting
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }

      // Check for updates
      await registration.update();
      
      // Force reload to activate new service worker
      window.location.reload();
    } catch (error) {
      console.error('Update failed:', error);
      setError('Failed to update application');
    } finally {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setIsUpdateAvailable(false);
    setIsUpdateInstalled(false);
  };

  // Don't render anything if service worker is not supported
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ServiceWorkerRegistration: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServiceWorkerRegistration</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ServiceWorkerRegistration;