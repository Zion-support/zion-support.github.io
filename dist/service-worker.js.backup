/* eslint-env serviceworker */
/* global workbox */

// Try multiple CDNs for Workbox
try {
<<<<<<< HEAD
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw-no-eval.js');} catch {
=======
<<<<<<< HEAD
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw-no-eval.js');
} catch (e1) {
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  try {
    importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@6.1.5/build/workbox-sw.js');  } catch {
    try {
<<<<<<< HEAD
      importScripts('https://unpkg.com/workbox-sw@6.1.5/build/workbox-sw.js');    } catch (_e3) {
      console.error('Failed to load Workbox from all CDNs:', e3);      // Fallback to basic service worker without Workbox
=======
      importScripts('https://unpkg.com/workbox-sw@6.1.5/build/workbox-sw.js');
    } catch (e3) {
      console.error('Failed to load Workbox from all CDNs:', e3);
      // Fallback to basic service worker without Workbox
=======
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw-no-eval.js');} catch {
  try {
    importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@6.1.5/build/workbox-sw.js');  } catch {
    try {
      importScripts('https://unpkg.com/workbox-sw@6.1.5/build/workbox-sw.js');    } catch (_e3) {
      console.error('Failed to load Workbox from all CDNs:', e3);      // Fallback to basic service worker without Workbox
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
  ({request}) => request.method === GET' && request.url.includes('/api/'),  new workbox.strategies.StaleWhileRevalidate({ cacheName: 'api-get' }));

workbox.routing.registerRoute(
  ({request}) => ['image',font'].includes(request.destination),  new workbox.strategies.CacheFirst({
    cacheName: 'assets',    plugins: [
      new workbox.expiration.ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 })
=======
<<<<<<< HEAD
  ({request}) => request.method === 'GET' && request.url.includes('/api/'),
  new workbox.strategies.StaleWhileRevalidate({ cacheName: 'api-get' })
);

workbox.routing.registerRoute(
  ({request}) => ['image', 'font'].includes(request.destination),
  new workbox.strategies.CacheFirst({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 60, 
        maxAgeSeconds: 30 * 24 * 60 * 60 
      })
=======
  ({request}) => request.method === GET' && request.url.includes('/api/'),  new workbox.strategies.StaleWhileRevalidate({ cacheName: 'api-get' }));

workbox.routing.registerRoute(
  ({request}) => ['image',font'].includes(request.destination),  new workbox.strategies.CacheFirst({
    cacheName: 'assets',    plugins: [
      new workbox.expiration.ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 })
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    ]
  })
);

workbox.routing.registerRoute(
<<<<<<< HEAD
  ({ url }) => url.href.includes('/product_images/'),  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'product-images',    plugins: [
=======
<<<<<<< HEAD
  ({ url }) => url.href.includes('/product_images/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'product-images',
    plugins: [
=======
  ({ url }) => url.href.includes('/product_images/'),  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'product-images',    plugins: [
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
);

// Cache documentation pages for offline access
workbox.routing.registerRoute(
<<<<<<< HEAD
  ({ url }) => url.pathname.startsWith('/docs') || url.pathname.startsWith('/resources/docs'),  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'docs-pages',    plugins: [
=======
<<<<<<< HEAD
  ({ url }) => url.pathname.startsWith('/docs') || url.pathname.startsWith('/resources/docs'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'docs-pages',
    plugins: [
=======
  ({ url }) => url.pathname.startsWith('/docs') || url.pathname.startsWith('/resources/docs'),  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'docs-pages',    plugins: [
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
);
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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

self.addEventListener('push', event => {'  const data = event.data ? event.data.json() : {};
  const title = data.title || Zion Notification';  const options = {
    body: data.body,
    icon: /logos/zion-logo.png''  };
  event.waitUntil(self.registration.showNotification(title, options));
});

<<<<<<< HEAD
self.addEventListener('notificationclick', event => {'  event.notification.close();
=======
self.addEventListener('notificationclick', event => {
  event.notification.close();
=======
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

self.addEventListener('push', event => {'  const data = event.data ? event.data.json() : {};
  const title = data.title || Zion Notification';  const options = {
    body: data.body,
    icon: /logos/zion-logo.png''  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {'  event.notification.close();
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  if (event.notification.data) {
    event.waitUntil(clients.openWindow(event.notification.data));
  }
});

// Manually trigger replay of the Background Sync queue
<<<<<<< HEAD
self.addEventListener('message', event => {'  try {
    if (event.data && event.data.type === SYNC_QUEUE' && bgSyncPlugin) {'      // Add timeout to prevent hanging operations
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Sync timeout')), 30000)      );
=======
<<<<<<< HEAD
self.addEventListener('message', event => {
  try {
    if (event.data && event.data.type === 'SYNC_QUEUE' && bgSyncPlugin) {
      // Add timeout to prevent hanging operations
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Sync timeout')), 30000)
      );
=======
self.addEventListener('message', event => {'  try {
    if (event.data && event.data.type === SYNC_QUEUE' && bgSyncPlugin) {'      // Add timeout to prevent hanging operations
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Sync timeout')), 30000)      );
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      
      const syncPromise = bgSyncPlugin.queue
        .replayRequests()
        .then(() => {
<<<<<<< HEAD
          // Send success response if there's a port'          if (event.ports && event.ports[0]) {
=======
<<<<<<< HEAD
          // Send success response if there's a port
          if (event.ports && event.ports[0]) {
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            try {
              event.ports[0].postMessage({ type: 'SYNC_SUCCESS' });            } catch (_postError) {
              console.error('Failed to post sync success message:', postError);            }
          }
        })
        .catch(err => {
          console.error('Background sync replay failed', err);          // Try to notify clients about the failure
          return self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              try {
<<<<<<< HEAD
                client.postMessage({ type: 'SYNC_FAILED', error: err.message });              } catch (_postError) {
                console.error('Failed to post sync failure message:', postError);              }
=======
                client.postMessage({ type: 'SYNC_FAILED', error: err.message });
              } catch (postError) {
                console.error('Failed to post sync failure message:', postError);
              }
=======
          // Send success response if there's a port'          if (event.ports && event.ports[0]) {
            try {
              event.ports[0].postMessage({ type: 'SYNC_SUCCESS' });            } catch (_postError) {
              console.error('Failed to post sync success message:', postError);            }
          }
        })
        .catch(err => {
          console.error('Background sync replay failed', err);          // Try to notify clients about the failure
          return self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              try {
                client.postMessage({ type: 'SYNC_FAILED', error: err.message });              } catch (_postError) {
                console.error('Failed to post sync failure message:', postError);              }
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            });
          });
        });
      
      event.waitUntil(
        Promise.race([syncPromise, timeoutPromise])
          .catch(timeoutError => {
<<<<<<< HEAD
            console.error('Background sync timed out:', timeoutError);            return self.clients.matchAll().then(clients => {
              clients.forEach(client => {
                try {
                  client.postMessage({ type: 'SYNC_TIMEOUT', error: Sync operation timed out' });                } catch (_postError) {
                  console.error('Failed to post sync timeout message:', postError);                }
=======
<<<<<<< HEAD
            console.error('Background sync timed out:', timeoutError);
            return self.clients.matchAll().then(clients => {
              clients.forEach(client => {
                try {
                  client.postMessage({ type: 'SYNC_TIMEOUT', error: 'Sync operation timed out' });
                } catch (postError) {
                  console.error('Failed to post sync timeout message:', postError);
                }
=======
            console.error('Background sync timed out:', timeoutError);            return self.clients.matchAll().then(clients => {
              clients.forEach(client => {
                try {
                  client.postMessage({ type: 'SYNC_TIMEOUT', error: Sync operation timed out' });                } catch (_postError) {
                  console.error('Failed to post sync timeout message:', postError);                }
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              });
            });
          })
      );
    } else {
      // Handle other message types or send error response
      if (event.ports && event.ports[0]) {
        try {
<<<<<<< HEAD
          event.ports[0].postMessage({ type: 'UNKNOWN_MESSAGE_TYPE' });        } catch (_postError) {
          console.error('Failed to post error message:', postError);        }
=======
<<<<<<< HEAD
          event.ports[0].postMessage({ type: 'UNKNOWN_MESSAGE_TYPE' });
        } catch (postError) {
          console.error('Failed to post error message:', postError);
        }
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      }
    }
  } catch {
    console.('Error handling service worker message:', );    // Try to send  response if possible
    if (event.ports && event.ports[0]) {
      try {
<<<<<<< HEAD
        event.ports[0].postMessage({ type: 'MESSAGE_ERROR', : .message });      } catch (_postError) {
        console.error('Failed to post error message:', postError);      }
=======
        event.ports[0].postMessage({ type: 'MESSAGE_ERROR', error: error.message });
      } catch (postError) {
        console.error('Failed to post error message:', postError);
      }
=======
          event.ports[0].postMessage({ type: 'UNKNOWN_MESSAGE_TYPE' });        } catch (_postError) {
          console.error('Failed to post error message:', postError);        }
      }
    }
  } catch {
    console.('Error handling service worker message:', );    // Try to send  response if possible
    if (event.ports && event.ports[0]) {
      try {
        event.ports[0].postMessage({ type: 'MESSAGE_ERROR', : .message });      } catch (_postError) {
        console.error('Failed to post error message:', postError);      }
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  }
});

<<<<<<< HEAD
self.addEventListener('fetch', event => {'  const url = new URL(event.request.url);
  if (event.request.mode === navigate' && url.pathname.startsWith('/auth/')) {'    event.respondWith(fetch(event.request));
=======
<<<<<<< HEAD
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.mode === 'navigate' && url.pathname.startsWith('/auth/')) {
    event.respondWith(fetch(event.request));
=======
self.addEventListener('fetch', event => {'  const url = new URL(event.request.url);
  if (event.request.mode === navigate' && url.pathname.startsWith('/auth/')) {'    event.respondWith(fetch(event.request));
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  }
});
