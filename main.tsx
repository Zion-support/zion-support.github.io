import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './app/styles/globals.css';
import './app/styles/futuristic.css';

// Add manifest link to head
if (typeof document !== 'undefined') {
  const manifestLink = document.createElement('link');
  manifestLink.rel = 'manifest';
  manifestLink.href = '/manifest.json';
  document.head.appendChild(manifestLink);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registration failed: ', registrationError);
        }
      });
  });
}
