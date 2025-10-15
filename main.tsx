import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
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
=======

ReactDOM.createRoot(document.getElementById('root')!).render(
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD
// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
      });
  });
}
=======
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
