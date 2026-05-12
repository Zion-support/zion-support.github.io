/**
 * Error Tracker — captures uncaught errors and reports to backend
 * Lightweight (~1KB), debounced, with stack traces
 * Usage: import and initialize once in your app root
 */

(function (global) {
  'use strict';

  const ERROR_ENDPOINT = '/api/errors';
  const DEBOUNCE_MS = 5000; // group identical errors within 5s
  const MAX_ERRORS_PER_MINUTE = 20; // rate limit per session

  let pending = [];
  let lastFlush = 0;
  let sessionId = localStorage.getItem('error_session_id') || Date.now().toString(36);
  localStorage.setItem('error_session_id', sessionId);

  function getFingerprint(error) {
    const msg = error.message || String(error);
    const stack = error.stack ? error.stack.split('\n')[0] : '';
    const location = error.filename ? `${error.filename}:${error.lineno || 0}:${error.colno || 0}` : '';
    return `${msg}::${stack}::${location}`.substring(0, 200);
  }

  function sendErrors(errors) {
    if (!errors.length) return;
    const payload = {
      sessionId,
      url: global.location.href,
      userAgent: global.navigator?.userAgent || '',
      errors: errors.map(e => ({
        message: e.message || String(e),
        stack: e.stack || null,
        type: e.type || 'unhandled',
        timestamp: new Date().toISOString(),
        fingerprint: getFingerprint(e),
      })),
    };

    navigator.sendBeacon
      ? navigator.sendBeacon(ERROR_ENDPOINT, JSON.stringify(payload))
      : fetch(ERROR_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
          body: JSON.stringify(payload),
        }).catch(() => {});
  }

  function flush() {
    if (pending.length === 0) return;
    const toSend = pending.splice(0);
    sendErrors(toSend);
    lastFlush = Date.now();
  }

  function scheduleFlush() {
    if (Date.now() - lastFlush > DEBOUNCE_MS) {
      flush();
    } else {
      setTimeout(flush, DEBOUNCE_MS);
    }
  }

  function capture(error, type = 'unhandled') {
    const enriched = { ...error, type };
    pending.push(enriched);
    scheduleFlush();
  }

  // Global handlers
  global.addEventListener('error', (event) => {
    if (event.error) {
      capture(event.error, 'unhandled');
    } else {
      capture({ message: event.message, filename: event.filename, lineno: event.lineno, colno: event.colno }, 'script');
    }
  });

  global.addEventListener('unhandledrejection', (event) => {
    capture({ message: 'Unhandled Promise Rejection', stack: event.reason?.stack, reason: event.reason }, 'promise');
  });

  // Console.error interceptor (optional, captures errors logged via console.error)
  (function () {
    const orig = global.console.error;
    global.console.error = function (...args) {
      orig.apply(global.console, args);
      const message = args.map(String).join(' ');
      capture({ message, stack: new Error().stack.split('\n').slice(1, 3).join('\n') }, 'console');
    };
  })();

  // Expose manual capture
  global.ErrorTracker = { capture };

  // Periodic flush as backup
  setInterval(flush, 30000);

  console.info('✅ ErrorTracker initialized');
})(typeof window !== 'undefined' ? window : global);
