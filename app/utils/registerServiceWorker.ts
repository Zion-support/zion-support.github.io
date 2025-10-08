/**
 * Service Worker Registration Utility
 */

export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onError?: (error: Error) => void;
}

/**
 * Register service worker with lifecycle callbacks
 */
export async function registerServiceWorker(
  config: ServiceWorkerConfig = {}
): Promise<ServiceWorkerRegistration | undefined> {
  // Check if service workers are supported
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    // eslint-disable-next-line no-console
    console.log('[SW] Service Workers not supported');
    return;
  }

  // Only register in production or if explicitly enabled
  try {
    // Wait for page to load
    await new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    });

    // eslint-disable-next-line no-console
    console.log('[SW] Registering service worker...');

    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/',
    });

    // eslint-disable-next-line no-console
    console.log('[SW] Service worker registered:', registration);

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const installingWorker = registration.installing;
      
      if (!installingWorker) return;

      installingWorker.addEventListener('statechange', () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New update available
            // eslint-disable-next-line no-console
    console.log('[SW] New content available; please refresh.');
            
            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // Content cached for offline use
            // eslint-disable-next-line no-console
    console.log('[SW] Content cached for offline use.');
            
            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      });
    });

    return registration;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SW] Registration failed:', error);
    
    if (config.onError && error instanceof Error) {
      config.onError(error);
    }
  }
}

/**
 * Unregister service worker
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (!('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const result = await registration.unregister();
    // eslint-disable-next-line no-console
    console.log('[SW] Service worker unregistered:', result);
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SW] Unregistration failed:', error);
    return false;
  }
}

/**
 * Check for service worker updates
 */
export async function checkForUpdates(): Promise<void> {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
    // eslint-disable-next-line no-console
    console.log('[SW] Update check completed');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SW] Update check failed:', error);
  }
}

/**
 * Skip waiting and activate new service worker
 */
export function skipWaiting(): void {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    return;
  }

  navigator.serviceWorker.controller.postMessage({ action: 'skipWaiting' });
}

/**
 * Clear all caches
 */
export function clearCaches(): void {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    return;
  }

  navigator.serviceWorker.controller.postMessage({ action: 'clearCache' });
  // eslint-disable-next-line no-console
    console.log('[SW] Cache clear requested');
}

/**
 * Get service worker registration status
 */
export async function getServiceWorkerStatus(): Promise<{
  supported: boolean;
  registered: boolean;
  active: boolean;
}> {
  if (!('serviceWorker' in navigator)) {
    return {
      supported: false,
      registered: false,
      active: false,
    };
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    return {
      supported: true,
      registered: !!registration,
      active: !!registration?.active,
    };
  } catch {
    return {
      supported: true,
      registered: false,
      active: false,
    };
  }
}

export default registerServiceWorker;