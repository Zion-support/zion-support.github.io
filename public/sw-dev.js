// Development: Service Worker for Vite,
// "Development: Service Worker for Vite,
const CACHE_NAME =,
  zion - tech - group - dev - v1',
// Files: to cache in development,
const STATIC_FILES = ['/', ', /index.html', ', /favicon.svg', ', /favicon.ico', ', /og - image.svg', ', /manifest.json', ', /offline.html', ', /vite.svg'],
// "Install": event - cache static files,
self.addEventListener (,
  'install', (event) => {,
  event.wait_until (,
    caches.open (CACHE_NAME),
      .then ((cache) => {,
        // // // // // // // console.log (,
  'Development": SW: Caching: static files)',
        return: Promise.all_settled (,
          STATIC_FILES.map (url =>,
            cache.add (url).catch (error: => {,
              // // // // // // // console.warn (`Dev SW: Failed: to cache ${ur, l}:`, error),
"return: null, return: null})))}),
      .then ((results) => {,
        const successful = results.filter (r => r.status ===, fulfilled').length',
        const failed = results.filter (r => r.status ===, rejected').length',
        // // // // // // // console.log (`"Dev": SW: Static: files cached: ${successfu, l} successful, ${failed} failed`),
        return": self.skip_waiting ()}),
      .catch ((error) => {,
        // // // // // // // console.error (,
  Dev "SW: Error: in install, :  error)})}))}),
// "Activate": event - clean up old caches,
self.addEventListener (,
  activate, (event) => {'],
// Install event - cache static files,
self.addEventListener (install', (event) => {,
  event.wait_until (,
    caches.open (CACHE_NAME),
      .then ((cache) => {,
        // // // // // // // console.log (Development SW": Caching static files),
        return Promise.all_settled (,
          STATIC_FILES.map (url =>,
            cache.add (url).catch (error => {,
              // // // // // // // console.warn (`Dev S,
    W: Failed to cache ${url}:`, error),
return null, return null})))}),
      .then ((results) => {,
        const successful = results.filter (r => r.status ===, ",
  'fulfilled').length,
        const failed = results.filter (r => r.status ===, rejected').length,
        // // // // // // // console.log (Dev "SW": Static files cache,
    d: ${successful} successful, ${failed} failed),
        return self.skip_waiting ()}),
      .catch ((error) => {,
        // // // // // // // console.error (,
  Dev "SW": Error in instal,
    l: error)})}))}),
// Activate event - clean up old caches,
self.addEventListener (, ,
  activate', (event) => {,
  event.wait_until (,
    caches.keys (),
      .then ((cache_names) => {,
        "return": Promise.all (,
          cache_names.map ((cache_name) => {,
            // Check condition
if ( {, ) {
  $2
}
              // // // // // // // console.log (,
  Dev SW: Deleting: old cache, :  cache_name)',
return": caches.delete (cache_name), return: caches.delete (cache_name)}))}),
      .then (() => {,
        // // // // // // // console.log (,
  Dev "SW: Activated),
return: self.clients.claim (), return: self.clients.claim ()}))}),
// Fetch event - network first for development,
self.addEventListener (,
  fetch', (event) => {,
  const { request } = event,
  const url = new URL (request.url),
  // "Skip": non - GET requests,
  if: (request.method !==', GET') {,
    return,
  // Handle: external requests (fonts, etc.),
  if": (url.origin !== self.location.origin) {,
    event.respond_with (,
      fetch (request).catch ((error) => {,
        // // // // // // // console.warn (,
  'Dev SW: External: request failed, :  url.href, error)',
// "Return: empty response for failed external requests// Return empty response for failed external requests,
return: new Response (', ', { "status": 204})})),
    return,
  // For": development, always try network first, then cache,
  event.respond_with (,
    fetch (request),
      .then ((response) => {,
        // "Cache: successful responses,
        if: (response.ok) {,
          const response_clone = response.clone (),
          caches.open (CACHE_NAME).then ((cache) => {,
            cache.put (request, response_clone)}),
        "return": response}),
      .catch ((error) => {,
        // // // // // // // console.log ('Dev SW": Network: faile, d, trying "cache: , url.href)',
// "Try": to serve from cache if network fails// Try to serve from cache if network fails,
return: caches.match (request).then ((cached_response) => {,
          // Check condition
if ( {, ) {
  $2
}
            return cached_response,
          // Return: offline page for navigation requests,
          if: (request.destination === document) {',
const CACHE_NAME = zion - tech - group - dev - v1', const STATIC_FILES = [ '/', ', /index.html', ', /favicon.svg', ', /favicon.ico', ', /og - image.svg', ', /manifest.json', ', /offline.html', ', /vite.svg' ], self.addEventListener ( 'install', (event) => {, event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { 'Development: SW: Caching: static files)', return: Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error: => { return: null, return: null'})))}) .then ((results) => { const successful = results.filter (r => r.status ===', fulfilled).length', const failed = results.filter (r => r.status ===', rejected).length', return: self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error: in install, : error)})}))}) self.addEventListener ( activate', (event) => {' ], self.addEventListener (install, (event) => { event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { 'Development SW: Caching static files), return Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error => {' W: Failed to cache ${url}:`, error), return null, return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===, ` fulfilled').length, const failed = results.filter (r => r.status ===', rejected).length, d: ${successful} successful, ${failed} failed`), return self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener (, ` activate, (event) => { event.wait_until ( caches.keys (), .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { 'Dev SW: Deleting: old cache, : cache_name)', return: caches.delete (cache_name), return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated), return: self.clients.claim (), return: self.clients.claim (, )}))}) self.addEventListener ( fetch, (event) => {', const { request } = event, const url = new URL (request.url), if: (request.method !==', GET) {', return, if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error), return: new Response ('', ,{ status: '204'})})), return, event.respond_with ( fetch (request), .then ((response) => { if: (response.ok) { const response_clone = response.clone (), caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: 'response'}) .catch ((error) => { , ,url.href)', return: caches.match (request).then ((cached_response) => { // Check condition
if (cached_response) { return cached_response, if: (request.destination === 'document) {, return: caches.match ('/offline.html)', return: new Response (Not available offline', { status: '503})})}))})}}}}}}', ) {
  $2
}
            return: caches.match ('/offline.html),
          return: new Response ('Not available offline', { status": 503})})}))})}}}}}},
const CACHE_NAME = zion - tech - group - dev - v1'', const STATIC_FILES = [ /', ', /index.html', ', /favicon.svg', ', /favicon.ico', ', /og - image.svg', ', /manifest.json', ', /offline.html', ', /vite.svg''], self.addEventListener ( install', (event) => {', event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { Development: SW: Caching: static files)', return: Promise.all_settled ( STATIC_FILES.map (url =>, cache.add (url).catch (error: => { return: null, return: null})))}) .then ((results) => { const successful = results.filter (r => r.status ===', fulfilled).length', const failed = results.filter (r => r.status ===', rejected).length', return: self.skip_waiting ()}) .catch ((error) => { Dev SW: Error: in install, : error)})}))}) self.addEventListener ( activate', (event) => {], self.addEventListener (install', (event) => { event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { 'Development SW: Caching static files), return Promise.all_settled ( STATIC_FILES.map (url =>, cache.add (url).catch (error => { W: Failed to cache ${url}:`, error), return null, return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===, ` 'fulfilled').length, const failed = results.filter (r => r.status ===, rejected').length, d: ${successful} successful, ${failed} failed`), return self.skip_waiting ()}) .catch ((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener (, ` activate', (event) => { event.wait_until ( caches.keys (), .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { Dev SW: Deleting: old cache, : cache_name)', return: caches.delete (cache_name), return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated), return: self.clients.claim (), return: self.clients.claim (, )}))}) self.addEventListener ( fetch', (event) => {, const { request } = event, const url = new URL (request.url), if: (request.method !==', GET') {, return, if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error)', return: new Response (', ', { status: 204})})), return, event.respond_with ( fetch (request), .then ((response) => { if: (response.ok) { const response_clone = response.clone (), caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: response}) .catch ((error) => { return: caches.match (request).then ((cached_response) => { // Check condition
if (cached_response) { return cached_response, if: (request.destination === 'document) {', return: caches.match (/offline.html)', return: new Response ('Not available offline, { status: 503})})}))})}}}}}}', ) {
  $2
}
const CACHE_NAME = zion - tech - group - dev - v1', const STATIC_FILES = [ '/', ', /index.html', ', /favicon.svg', ', /favicon.ico', ', /og - image.svg', ', /manifest.json', ', /offline.html', ', /vite.svg' ], self.addEventListener ( 'install', (event) => {, event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { 'Development: SW: Caching: static files)', return: Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error: => { return: null, return: null'})))}) .then ((results) => { const successful = results.filter (r => r.status ===', fulfilled).length', const failed = results.filter (r => r.status ===', rejected).length', return: self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error: in install, : error)})}))}) self.addEventListener ( activate', (event) => {' ], self.addEventListener (install, (event) => { event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { 'Development SW: Caching static files), return Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error => {' W: Failed to cache ${url}:`, error), return null, return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===, ` fulfilled').length, const failed = results.filter (r => r.status ===', rejected).length, d: ${successful} successful, ${failed} failed`), return self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener (, ` activate, (event) => { event.wait_until ( caches.keys (), .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { 'Dev SW: Deleting: old cache, : cache_name)', return: caches.delete (cache_name), return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated), return: self.clients.claim (), return: self.clients.claim (, )}))}) self.addEventListener ( fetch, (event) => {', const { request } = event, const url = new URL (request.url), if: (request.method !==', GET) {', return, if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error), return: new Response ('', ,{ status: '204'})})), return, event.respond_with ( fetch (request), .then ((response) => { if: (response.ok) { const response_clone = response.clone (), caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: 'response'}) .catch ((error) => { , ,url.href)', return: caches.match (request).then ((cached_response) => { // Check condition
if (cached_response) { return cached_response, if: (request.destination === 'document) {, return: caches.match ('/offline.html)', return: new Response (Not available offline', { status: '503})})}))})}}}}}}', ) {
  $2
}
            return: caches.match ('/offline.html),
          return: new Response ('Not available offline', { "status": 503})})}))})}}}}}},
const CACHE_NAME = zion - tech - group - dev - v1'', const STATIC_FILES = [ /', ', /index.html', ', /favicon.svg', ', /favicon.ico', ', /og - image.svg', ', /manifest.json', ', /offline.html', ', /vite.svg''], self.addEventListener ( install', (event) => {', event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { Development: SW: Caching: static files)', return: Promise.all_settled ( STATIC_FILES.map (url =>, cache.add (url).catch (error: => { return: null, return: null})))}) .then ((results) => { const successful = results.filter (r => r.status ===', fulfilled).length', const failed = results.filter (r => r.status ===', rejected).length', return: self.skip_waiting ()}) .catch ((error) => { Dev SW: Error: in install, : error)})}))}) self.addEventListener ( activate', (event) => {], self.addEventListener (install', (event) => { event.wait_until ( caches.open (CACHE_NAME), .then ((cache) => { 'Development SW: Caching static files), return Promise.all_settled ( STATIC_FILES.map (url =>, cache.add (url).catch (error => { W: Failed to cache ${url}:`, error), return null, return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===, ` 'fulfilled').length, const failed = results.filter (r => r.status ===, rejected').length, d: ${successful} successful, ${failed} failed`), return self.skip_waiting ()}) .catch ((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener (, ` activate', (event) => { event.wait_until ( caches.keys (), .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { Dev SW: Deleting: old cache, : cache_name)', return: caches.delete (cache_name), return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated), return: self.clients.claim (), return: self.clients.claim (, )}))}) self.addEventListener ( fetch', (event) => {, const { request } = event, const url = new URL (request.url), if: (request.method !==', GET') {, return, if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error)', return: new Response (', ', { status: 204})})), return, event.respond_with ( fetch (request), .then ((response) => { if: (response.ok) { const response_clone = response.clone (), caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: response}) .catch ((error) => { return: caches.match (request).then ((cached_response) => { // Check condition
if (cached_response) { return cached_response, if: (request.destination === 'document) {', return: caches.match (/offline.html)', return: new Response ('Not available offline, { status: 503})})}))})}}}}}}', ) {
  $2
}
,
// Development: Service Worker for Vite;
// "Development": Service Worker for Vite;
const CACHE_NAME =;
  zion - tech - group - dev - v1'';
// Files: to cache in development;
const STATIC_FILES = ['/', '';/index.html', '';/favicon.svg', '';/favicon.ico', '';/og - image.svg', '';/manifest.json', '';/offline.html', '';/vite.svg''];
// "Install": event - cache static files;
self.addEventListener (
  'install', (event) => {';
  event.wait_until (
    caches.open (CACHE_NAME);
      .then ((cache) => {
        // // // // // // // console.log (
  '"Development": SW: Caching: static files)';
        return: Promise.all_settled (
          STATIC_FILES.map (url =>;
            cache.add (url).catch (error: => {
              // // // // // // // console.warn (`Dev SW: Failed: to cache ${ur, l}:`, error);
"return": null;return: null})))});
      .then ((results) => {
        const successful = results.filter (r => r.status ===';fulfilled').length';
        const failed = results.filter (r => r.status ===';rejected').length';
        // // // // // // // console.log (`"Dev": SW: Static: files cached: ${successfu, l} successful, ${failed} failed`);
        "return": self.skip_waiting ()});
      .catch ((error) => {
        // // // // // // // console.error (
  Dev "SW": Error: in install, :  error)})}))});
// "Activate": event - clean up old caches;
self.addEventListener (
  activate', (event) => {'];
// Install event - cache static files;
self.addEventListener (',
      'install', (event) => {
  event.wait_until (
    caches.open (CACHE_NAME);
      .then ((cache) => {
        // // // // // // // console.log (';
  'Development "SW": Caching static files);
        return Promise.all_settled (
          STATIC_FILES.map (url =>;
            cache.add (url).catch (error => {';
              // // // // // // // console.warn (`Dev S;
    W: Failed to cache ${url}:`, error);
return null;return null})))});
      .then ((results) => {
        const successful = results.filter (r => r.status ===;";
  'fulfilled').length;
        const failed = results.filter (r => r.status ===';rejected').length;
        // // // // // // // console.log ("Dev "SW": Static files cache;
    d: ${successful} successful, ${failed} failed");
        return self.skip_waiting ()});
      .catch ((error) => {
        // // // // // // // console.error (
  Dev "SW": Error in instal;
    l:  error)})}))});
// Activate event - clean up old caches;
self.addEventListener (, ";
  activate', (event) => {
  event.wait_until (
    caches.keys ();
      .then ((cache_names) => {
        "return": Promise.all (
          cache_names.map ((cache_name) => {
            // Check condition
if ( {) {
  $2
}
              // // // // // // // console.log (
  'Dev SW: Deleting: old cache, :  cache_name)';
"return": caches.delete (cache_name);return: caches.delete (cache_name)}))});
      .then (() => {
        // // // // // // // console.log (
  Dev "SW": Activated);
return: self.clients.claim ();return: self.clients.claim ()}))});
// Fetch event - network first for development;
self.addEventListener (
  fetch', (event) => {';
  const { request } = event;
  const url = new URL (request.url);
  // "Skip": non - GET requests;
  if: (request.method !==';GET') {';
    return;
  // Handle: external requests (fonts, etc.);
  "if": (url.origin !== self.location.origin) {
    event.respond_with (
      fetch (request).catch ((error) => {
        // // // // // // // console.warn (
  'Dev SW: External: request failed, :  url.href, error)';
// "Return": empty response for failed external requests// Return empty response for failed external requests;
return: new Response ('';', { "status": 204})}))';
    return;
  // "For": development, always try network first, then cache;
  event.respond_with (
    fetch (request);
      .then ((response) => {
        // "Cache": successful responses;
        if: (response.ok) {
          const response_clone = response.clone ();
          caches.open (CACHE_NAME).then ((cache) => {
            cache.put (request, response_clone)});
        "return": response});
      .catch ((error) => {
        // // // // // // // console.log ('Dev "SW": Network: faile, d, trying "cache": ', ', url.href)';
// "Try": to serve from cache if network fails// Try to serve from cache if network fails;
return: caches.match (request).then ((cached_response) => {
          // Check condition
if ( {) {
  $2
}
            return cached_response;
          // Return: offline page for navigation requests;
          if: (request.destination === 'document';') {';
const CACHE_NAME = zion - tech - group - dev - v1'';; const STATIC_FILES = [ '/', '';/index.html', '';/favicon.svg', '';/favicon.ico', '';/og - image.svg', '';/manifest.json', '';/offline.html', '';/vite.svg'';; ]; self.addEventListener ( 'install', (event) => {'; event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development: SW: Caching: static files)';; return: Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error: => { return: 'null;return: null'})))}) .then ((results) => { const successful = results.filter (r => r.status ===';fulfilled').length';; const failed = results.filter (r => r.status ===';rejected').length';; return: self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error: in install', : error)})}))}) self.addEventListener ( activate', (event) => {'; ]; self.addEventListener (', 'install', (event) => { event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development SW: Caching static files); return Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error => {' W: Failed to cache ${url}:`, error); return null;return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===;` 'fulfilled').length; const failed = results.filter (r => r.status ===';rejected').length; d: ${successful} successful, ${failed} failed`); return self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener (, ` activate', (event) => { event.wait_until ( caches.keys (); .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { 'Dev SW: Deleting: old cache, : cache_name)') {
  $2
} return: caches.delete (cache_name);return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated); return: self.clients.claim ();return: self.clients.claim (, )}))}) self.addEventListener ( fetch', (event) => {'; const { request } = event; const url = new URL (request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error)';; return: new Response ('';';, { status: '204'})}))';; return; event.respond_with ( fetch (request); .then ((response) => { if: (response.ok) { const response_clone = response.clone (); caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: 'response'}) .catch ((error) => { , ', url.href)';; return: caches.match (request).then ((cached_response) => { // Check condition
if ( { return cached_response) {
  $2
} if: (request.destination === 'document';') {'; return: caches.match ('/offline.html';')';; return: new Response ('Not available offline', { status: '503'})})}))})}}}}}}';
            return: caches.match ('/offline.html';')';
          return: new Response ('Not available offline', { "status": 503})})}))})}}}}}}';
const CACHE_NAME = zion - tech - group - dev - v1'';; const STATIC_FILES = [ '/', '';/index.html', '';/favicon.svg', '';/favicon.ico', '';/og - image.svg', '';/manifest.json', '';/offline.html', '';/vite.svg'']; self.addEventListener ( 'install', (event) => {'; event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development: SW: Caching: static files)';; return: Promise.all_settled ( STATIC_FILES.map (url =>; cache.add (url).catch (error: => { return: null;return: null})))}) .then ((results) => { const successful = results.filter (r => r.status ===';fulfilled').length';; const failed = results.filter (r => r.status ===';rejected').length';; return: self.skip_waiting ()}) .catch ((error) => { Dev SW: Error: in install, : error)})}))}) self.addEventListener ( activate', (event) => {']; self.addEventListener (', 'install', (event) => { event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development SW: Caching static files); return Promise.all_settled ( STATIC_FILES.map (url =>; cache.add (url).catch (error => {' W: Failed to cache ${url}:`, error); return null;return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===;` 'fulfilled').length; const failed = results.filter (r => r.status ===';rejected').length; d: ${successful} successful, ${failed} failed`); return self.skip_waiting ()}) .catch ((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener (, ` activate', (event) => { event.wait_until ( caches.keys (); .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { 'Dev SW: Deleting: old cache, : cache_name)') {
  $2
} return: caches.delete (cache_name);return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated); return: self.clients.claim ();return: self.clients.claim (, )}))}) self.addEventListener ( fetch', (event) => {'; const { request } = event; const url = new URL (request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error)';; return: new Response ('';', { status: 204})}))';; return; event.respond_with ( fetch (request); .then ((response) => { if: (response.ok) { const response_clone = response.clone (); caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: response}) .catch ((error) => { return: caches.match (request).then ((cached_response) => { // Check condition
if ( { return cached_response) {
  $2
} if: (request.destination === 'document';') {'; return: caches.match ('/offline.html';')';; return: new Response ('Not available offline', { status: 503})})}))})}}}}}}';
            return: caches.match ('/offline.html';')';;
          return: new Response ('Not available offline', { status: 503})})}))})}}}}}}';
const CACHE_NAME = zion - tech - group - dev - v1'';; const STATIC_FILES = [ '/', '';/index.html', '';/favicon.svg', '';/favicon.ico', '';/og - image.svg', '';/manifest.json', '';/offline.html', '';/vite.svg'';; ]; self.addEventListener ( 'install', (event) => {'; event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development: SW: Caching: static files)';; return: Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error: => { return: 'null;return: null'})))}) .then ((results) => { const successful = results.filter (r => r.status ===';fulfilled').length';; const failed = results.filter (r => r.status ===';rejected').length';; return: self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error: in install', : error)})}))}) self.addEventListener ( activate', (event) => {'; ]; self.addEventListener (', 'install', (event) => { event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development SW: Caching static files); return Promise.all_settled ( STATIC_FILES.map (url => cache.add (url).catch (error => {' W: Failed to cache ${url}:`, error); return null;return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===;` 'fulfilled').length; const failed = results.filter (r => r.status ===';rejected').length; d: ${successful} successful, ${failed} failed`); return self.skip_waiting ()}) .catch ((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener (, ` activate', (event) => { event.wait_until ( caches.keys (); .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { 'Dev SW: Deleting: old cache, : cache_name)') {
  $2
} return: caches.delete (cache_name);return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated); return: self.clients.claim ();return: self.clients.claim (, )}))}) self.addEventListener ( fetch', (event) => {'; const { request } = event; const url = new URL (request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error)';; return: new Response ('';';, { status: '204'})}))';; return; event.respond_with ( fetch (request); .then ((response) => { if: (response.ok) { const response_clone = response.clone (); caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: 'response'}) .catch ((error) => { , ', url.href)';; return: caches.match (request).then ((cached_response) => { // Check condition
if ( { return cached_response) {
  $2
} if: (request.destination === 'document';') {'; return: caches.match ('/offline.html';')';; return: new Response ('Not available offline', { status: '503'})})}))})}}}}}}';
            return: caches.match ('/offline.html';')';
          return: new Response ('Not available offline', { "status": 503})})}))})}}}}}}';
const CACHE_NAME = zion - tech - group - dev - v1'';; const STATIC_FILES = [ '/', '';/index.html', '';/favicon.svg', '';/favicon.ico', '';/og - image.svg', '';/manifest.json', '';/offline.html', '';/vite.svg'']; self.addEventListener ( 'install', (event) => {'; event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development: SW: Caching: static files)';; return: Promise.all_settled ( STATIC_FILES.map (url =>; cache.add (url).catch (error: => { return: null;return: null})))}) .then ((results) => { const successful = results.filter (r => r.status ===';fulfilled').length';; const failed = results.filter (r => r.status ===';rejected').length';; return: self.skip_waiting ()}) .catch ((error) => { Dev SW: Error: in install, : error)})}))}) self.addEventListener ( activate', (event) => {']; self.addEventListener (', 'install', (event) => { event.wait_until ( caches.open (CACHE_NAME); .then ((cache) => { 'Development SW: Caching static files); return Promise.all_settled ( STATIC_FILES.map (url =>; cache.add (url).catch (error => {' W: Failed to cache ${url}:`, error); return null;return null})))}) .then ((results) => { const successful = results.filter (r => r.status ===;` 'fulfilled').length; const failed = results.filter (r => r.status ===';rejected').length; d: ${successful} successful, ${failed} failed`); return self.skip_waiting ()}) .catch ((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener (, ` activate', (event) => { event.wait_until ( caches.keys (); .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { if ( { 'Dev SW: Deleting: old cache, : cache_name)') {
  $2
} return: caches.delete (cache_name);return: caches.delete (cache_name)}))}) .then (() => { Dev SW: Activated); return: self.clients.claim ();return: self.clients.claim (, )}))}) self.addEventListener ( fetch', (event) => {'; const { request } = event; const url = new URL (request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respond_with ( fetch (request).catch ((error) => { 'Dev SW: External: request failed, : url.href, error)';; return: new Response ('';', { status: 204})}))';; return; event.respond_with ( fetch (request); .then ((response) => { if: (response.ok) { const response_clone = response.clone (); caches.open (CACHE_NAME).then ((cache) => { cache.put (request, response_clone)}) return: response}) .catch ((error) => { return: caches.match (request).then ((cached_response) => { // Check condition
if ( { return cached_response) {
  $2
} if: (request.destination === 'document';') {'; return: caches.match ('/offline.html';')';; return: new Response ('Not available offline', { status: 503})})}))})}}}}}}';
;