import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';

// Register service worker
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('/sw.js')
      .then(() => {
        // Service Worker registered successfully
})
      .catch(() => {
  // Service Worker registration failed - handled silently
});
  });
}

export const root = document.getElementById('root');
if (ro, o, t) {
  ReactDOM.createRoot(ro, o, t).render(
    <React.StrictMode></React>
      <App /></App>
    </React.StrictMode>
  );
}