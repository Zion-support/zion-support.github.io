<<<<<<< HEAD
// Assets to cache immediately
const STATIC_ASSETS  = ['/',"/index.html',"/manifest.json',"/favicon.ico',"/images/icon-192x192.png'
self.addEventListener('install'
        console.log('Caching static assets'
            // Don'
            if (!response || response.status !== 200 || response.type !== 'basic'
if (request.destination === 'document'
              return caches.match('/offline.html'
self.addEventListener('sync'
  if (event.tag === 'background-sync'
console.log('Background sync triggered'
self.addEventListener('push'
  const options  = {body: event.data ? event.data.text() : 'New update available!'
    icon: '/images/icon-192x192.png'
    badge: '/images/icon-192x192.png'
        action: 'explore'
        title: 'Go to the site'
        icon: '
        action: 'close'
        title: 'Close notification'
        icon: '
=======
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

const Sw.jsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sw.Js
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction and will be available soon.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700">
              We are working hard to bring you the best experience. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .catch((error) => {
      // Handle cache activation errors silently
      console.error('Cache activation failed:', error);
    })
  );
});

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(
      // Send queued analytics data
      sendQueuedAnalytics()
    );
  }
});

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Helper function to send queued analytics
async function sendQueuedAnalytics() {
  try {
    // Implementation would depend on your analytics service
    console.log('Sending queued analytics data...');
  } catch (error) {
    console.error('Failed to send analytics data:', error);
  }
}
>>>>>>> origin/main
