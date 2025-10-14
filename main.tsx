import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);

// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
