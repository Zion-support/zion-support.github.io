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
<<<<<<< HEAD
    // eslint-disable-next-line no-console
    console.log('[SW] Service Workers not supported');
=======
    logger.info('[SW] Service Workers not supported');
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
    return;
  }

  // Only register in production or if explicitly enabled
<<<<<<< HEAD
=======
  const _isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );

>>>>>>> cursor/fix-errors-and-merge-to-main-add2
  try {
    // Wait for page to load
    await new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    });

<<<<<<< HEAD
    // eslint-disable-next-line no-console
    console.log('[SW] Registering service worker...');
=======
    logger.info('[SW] Registering service worker...');
>>>>>>> cursor/fix-errors-and-merge-to-main-add2

    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/',
    });

<<<<<<< HEAD
    // eslint-disable-next-line no-console
    console.log('[SW] Service worker registered:', registration);
=======
    logger.info('[SW] Service worker registered:', registration);
>>>>>>> cursor/fix-errors-and-merge-to-main-add2

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const installingWorker = registration.installing;
      
      if (!installingWorker) return;

      installingWorker.addEventListener('statechange', () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New update available
<<<<<<< HEAD
            // eslint-disable-next-line no-console
    console.log('[SW] New content available; please refresh.');
=======
            logger.info('[SW] New content available; please refresh.');
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
            
            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // Content cached for offline use
<<<<<<< HEAD
            // eslint-disable-next-line no-console
    console.log('[SW] Content cached for offline use.');
=======
            logger.info('[SW] Content cached for offline use.');
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
            
            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      });
    });

    return registration;
  } catch (error) {
<<<<<<< HEAD
    // eslint-disable-next-line no-console
    console.error('[SW] Registration failed:', error);
=======
    logger.error('[SW] Registration failed:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
    
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
<<<<<<< HEAD
    // eslint-disable-next-line no-console
    console.log('[SW] Service worker unregistered:', result);
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SW] Unregistration failed:', error);
=======
    logger.info('[SW] Service worker unregistered:', result);
    return result;
  } catch (error) {
    logger.error('[SW] Unregistration failed:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
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
<<<<<<< HEAD
    // eslint-disable-next-line no-console
    console.log('[SW] Update check completed');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SW] Update check failed:', error);
=======
    logger.info('[SW] Update check completed');
  } catch (error) {
    logger.error('[SW] Update check failed:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
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
<<<<<<< HEAD
  // eslint-disable-next-line no-console
    console.log('[SW] Cache clear requested');
=======
  logger.info('[SW] Cache clear requested');
>>>>>>> cursor/fix-errors-and-merge-to-main-add2
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