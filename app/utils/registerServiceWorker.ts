// Service Worker Registration utility
export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onError?: (error: Error) => void;
}

export class ServiceWorkerRegistrar {
  private static instance: ServiceWorkerRegistrar;
  private config: ServiceWorkerConfig = {};

  static getInstance(): ServiceWorkerRegistrar {
    if (!ServiceWorkerRegistrar.instance) {
      ServiceWorkerRegistrar.instance = new ServiceWorkerRegistrar();
    }
    return ServiceWorkerRegistrar.instance;
  }

  configure(config: ServiceWorkerConfig): void {
    this.config = { ...this.config, ...config };
  }

  async register(swPath: string = '/sw.js'): Promise<ServiceWorkerRegistration | null> {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service workers are not supported in this browser');
      return null;
    }

    try {
      const registration = await navigator.serviceWorker.register(swPath);
      
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker waiting');
      } else if (registration.active) {
        console.log('Service worker active');
        this.config.onSuccess?.(registration);
      }

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('New service worker available');
              this.config.onUpdate?.(registration);
            }
          });
        }
      });

      return registration;
    } catch (error) {
      console.error('Service worker registration failed:', error);
      this.config.onError?.(error as Error);
      return null;
    }
  }

  async unregister(): Promise<boolean> {
    if (!('serviceWorker' in navigator)) {
      return false;
    }

    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
      return true;
    } catch (error) {
      console.error('Service worker unregistration failed:', error);
      return false;
    }
  }
}

export default ServiceWorkerRegistrar;