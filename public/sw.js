
const CACHE_NAME = 'zion-tech-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker installing');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating');
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker fetching');
});
