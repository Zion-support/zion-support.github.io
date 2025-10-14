import React from &apos;react&apos;;
import { createRoot } from &apos;react-dom/client&apos;;
import App from &apos;./App&apos;;
import &apos;./index.css&apos;;

// Ensure scheduler is properly initialized
if (typeof window !== &apos;undefined&apos;) {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

const container = document.getElementById(&apos;root&apos;);
if (!container) {throw new Error(&apos;Root element not found&apos;)}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((_registration) => {
        if (process.env.NODE_ENV === &apos;development&apos;) {;
          console.warn(&apos;Service Worker registered successfully&apos;)}
      })
      .catch((_error) => {if (process.env.NODE_ENV === &apos;development&apos;) {;
          console.warn(&apos;Service Worker registration failed&apos;)}
      });
  });
}