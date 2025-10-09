import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
<<<<<<< HEAD:app/main.tsx
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
=======
        // Service Worker registered successfully
      })
      .catch((registrationError) => {
        // Service Worker registration failed - handled silently
>>>>>>> cursor/website-audit-and-update-with-deployment-572b:src/main.tsx
      });
  });
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
