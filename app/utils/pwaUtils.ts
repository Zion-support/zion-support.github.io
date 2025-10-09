export function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return Promise.resolve(null);
  }

  return navigator.serviceWorker
    .register('/sw.js')
    .then((registration) => {
      console.log('Service Worker registered successfully:', registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, notify user
              if (confirm('New content is available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });

      return registration;
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
      return null;
    });
}

export function unregisterServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return Promise.resolve(false);
  }

  return navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      return Promise.all(
        registrations.map((registration) => registration.unregister())
      );
    })
    .then((results) => results.every((result) => result))
    .catch((error) => {
      console.error('Service Worker unregistration failed:', error);
      return false;
    });
}

export function requestNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return Promise.resolve('denied');
  }

  if (Notification.permission === 'granted') {
    return Promise.resolve('granted');
  }

  if (Notification.permission === 'denied') {
    return Promise.resolve('denied');
  }

  return Notification.requestPermission();
}

export function showNotification(title: string, options?: NotificationOptions): void {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return;
  }

  if (Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      ...options,
    });
  }
}

export function isOnline(): boolean {
  if (typeof window === 'undefined') {
    return true;
  }
  return navigator.onLine;
}

export function addOnlineStatusListener(callback: (isOnline: boolean) => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleOnline = () => callback(true);
  const handleOffline = () => callback(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

export function getInstallPrompt(): Promise<BeforeInstallPromptEvent | null> {
  if (typeof window === 'undefined') {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    const handler = (e: Event) => {
      e.preventDefault();
      resolve(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Clean up after a timeout
    setTimeout(() => {
      window.removeEventListener('beforeinstallprompt', handler);
      resolve(null);
    }, 10000);
  });
}

export function installApp(prompt: BeforeInstallPromptEvent): Promise<boolean> {
  return prompt
    .prompt()
    .then((result) => {
      console.log('Install prompt result:', result);
      return true;
    })
    .catch((error) => {
      console.error('Install prompt failed:', error);
      return false;
    });
}

export function isAppInstalled(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true
  );
}

export function addAppInstalledListener(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handler = () => callback();
  window.addEventListener('appinstalled', handler);

  return () => {
    window.removeEventListener('appinstalled', handler);
  };
}

// Type definitions
export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}