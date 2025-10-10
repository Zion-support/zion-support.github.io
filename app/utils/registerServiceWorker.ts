/**
 * Service Worker Registration Utility
 */export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void
  onUpdate?: (registration: ServiceWorkerRegistration) => void}
export interface ServiceWorkerConfig {}
  onSuccess?: (registration: ServiceWorkerRegistration) => void
  onUpdate?: (registration: ServiceWorkerRegistration) => void
  onError?: (error: Error) => void}
export interface ServiceWorkerConfig {/* TODO: Fix JSX expression */}
}
/**
 * Register service worker with lifecycle callbacks
 */export async function registerServiceWorker(config: ServiceWorkerConfig;

export default registerServiceWorker