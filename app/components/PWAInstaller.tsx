// // 'use client'; // Removed for Vite compatibility // Removed for Vite compatibility

import React, { useEffect, useState } from 'react';

/**
 * PWA Installer Component
 * Handles service worker registration and install prompts
 */

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Register service worker
    if ('serviceWorker' in navigator && process.env['NODE_ENV'] === 'production') {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          // Service Worker registered

          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000); // Check every hour

          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available
                  if (confirm('New version available! Reload to update?')) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
.catch(() => {
          // Service Worker registration failed
        });

      // Listen for controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      
      // Show prompt after a delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for successful installation
    window.addEventListener('appinstalled', () => {
      // PWA installed successfully
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user's response
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      // User accepted the install prompt
    } else {
      // User dismissed the install prompt
    }

    // Clear the deferred prompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    
    // Don't show again for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Don't show if already installed or dismissed
  if (isInstalled || !isInstallable || !showPrompt) {
    return null;
  }

  // Check if dismissed in this session
  if (typeof window !== 'undefined' && sessionStorage.getItem('pwa-prompt-dismissed')) {
    return null;
  }

  return (
    <div className='fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up'>
      <div className='bg-white rounded-lg shadow-2xl p-6 border border-gray-200'>
        <div className='flex items-start'>
          <div className='flex-shrink-0'>
            <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-indigo-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            </div>
          </div>
          <div className='ml-4 flex-1'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Install Zion Tech App
            </h3>
            <p className='mt-1 text-sm text-gray-600'>
              Get quick access and offline support. Install our app for a better
              experience!
            </p>
            <div className='mt-4 flex space-x-3'>
              <button
                onClick={handleInstallClick}
                className='px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className='px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
              >
                Not Now
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className='ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none'
            aria-label='Close'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
