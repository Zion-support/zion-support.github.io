/* eslint-env serviceworker */
/* global workbox */

// Try multiple CDNs for Workbox
try {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw-no-eval.js');} catch {
  try {
    importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@6.1.5/build/workbox-sw.js');  } catch {
    try {
      importScripts('https://unpkg.com/workbox-sw@6.1.5/build/workbox-sw.js');    } catch (_e3) {
      console.error('Failed to load Workbox from all CDNs:', e3);      // Fallback to basic service worker without Workbox
      self.skipWaiting();
      self.clientsClaim();
      return;
    }
  }
}

self.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

workbox.routing.registerRoute(
  ({request}) => request.method === GET' && request.url.includes('/api/'),  new workbox.strategies.StaleWhileRevalidate({ cacheName: 'api-get' }));

workbox.routing.registerRoute(
  ({request}) => ['image',font'].includes(request.destination),  new workbox.strategies.CacheFirst({
    cacheName: 'assets',    plugins: [
      new workbox.expiration.ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 })
    ]
  })
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes('/product_images/'),  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'product-images',    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
);

// Cache documentation pages for offline access
workbox.routing.registerRoute(
  ({ url }) => url.pathname.startsWith('/docs') || url.pathname.startsWith('/resources/docs'),  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'docs-pages',    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
);
let bgSyncPlugin = null;
try {
  bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('apiQueue', {'    maxRetentionTime: 24 * 60,
    _callbacks: {
      queueDidReplay: async () => {
        const clients = await self.clients.matchAll();
        for (const client of clients) {
          client.postMessage({ type: 'QUEUE_SYNCED' });        }
      }
    }
  });
} catch {
  console.warn('BackgroundSync disabled: storage unavailable', e);}
;
const networkOnlyOptions = bgSyncPlugin ? { plugins: [bgSyncPlugin] } : {};
workbox.routing.registerRoute(
  ({url, request}) => url.pathname.startsWith('/api/') && request.method !== 'GET',  new workbox.strategies.NetworkOnly(networkOnlyOptions)
);

workbox.routing.setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {'    return caches.match('/offline.html');  }
  return Response.error();
});
