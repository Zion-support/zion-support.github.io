const CACHE_NAME =';static - cache - v1'';;
const DATA_CACHE_NAME =';data - cache - v1'';;
const FILES_TO_CACHE = [;
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;
const CACHE_NAME =';static - cache - v1'';
const DATA_CACHE_NAME =';data - cache - v1'';
const FILES_TO_CACHE = ['/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';
self.addEventListener (
  'install', "event": => {'';install', event => {
  event.wait_until (
    caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)));
  self.skip_waiting ()});
self.addEventListener ('activate', event => {
  event.wait_until (
    caches.keys ().then (key_list =>;
      Promise.all (
        key_list.map ("key": => {
          // Check condition
if ( {) {
  $2
}
            return caches.delete (key)}
        }))));
  self.clients.claim ()});
self.addEventListener ('fetch', event => {
  // Check condition
if (return) {
  $2
}
  if () {) {
  $2
}
    event.respond_with (
      caches.open (DATA_CACHE_NAME).then (cache =>;
        fetch (event.request);
          .then (response => {
            // Check condition
if ( {) {
  $2
}
              cache.put (event.request, response.clone ());
            return response});
          .catch (() => cache.match (event.request))));
    return}
  event.respond_with (
    caches.match (event.request).then (response => {
      return (
        response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||  fetch (event.request).catch (() => caches.match ('/offline.html')) )}) )});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
        fetch (event.request).catch (() => caches.match ('/offline.html')))}))});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||  fetch (event.request).catch (() => caches.match ('/offline.html')) )}) )});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||  fetch (event.request).catch (() => caches.match ('/offline.html')) )}) )});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;