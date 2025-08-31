import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface ServiceWorkerRegistrationProps {
  onUpdate?: () => void;
  onSuccess?: () => void;
}

export const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdate,
  onSuccess
}) => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
        onSuccess?.();
      }

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setWaitingWorker(newWorker);
              setShowReload(true);
              onUpdate?.();
              
              toast.success('New version available! Click to update.', {
                duration: 10000,
                action: {
                  label: 'Update',
                  onClick: () => updateApp()
                }
              });
            }
          });
        }
      });

      // Handle controller change
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });

    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  };

  const updateApp = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowReload(false);
    }
  };

  const skipWaiting = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowReload(false);
    }
  };

  // Don't render anything if no update is available
  if (!showReload) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">
              New version available
            </p>
            <p className="text-xs text-zinc-400">
              Click to update the app
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={updateApp}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWorkerRegistration;