import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

<<<<<<< HEAD
// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
      window.performance.now = window.performance.now || (() => Date.now());
  }
}

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => {
        // Service worker registered successfully
          console.log('Service worker registered successfully');
      })
      .catch((registrationError) => {
        // Service worker registration failed
        console.error('Service worker registration failed:', registrationError);
      });
    });
}
=======
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
