import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import './globals.css';
import { measureWebVitals } from './utils/performanceMonitor';
// Initialize performance monitoring
if (typeof window !== 'undefined') {
<<<<<<< HEAD
  measureWebVitals();
}
=======
  measureWebVitals()};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Service Worker registered successfully
        if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
          console.log('SW registered: ', registration);
        }
=======
          // console.log removed for production
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, prompt user to refresh
                if (confirm('New version available! Refresh to update?')) {
<<<<<<< HEAD
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((registrationError) => {
        // Service Worker registration failed - handled silently
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registration failed: ', registrationError);
        }
      });
  });
}
=======
                  window.location.reload()};
              };
            })};
        })})
      .catch((registrationError) => {
        // Service Worker registration failed - handled silently
        if (process.env.NODE_ENV === 'development') {
          // console.log removed for production
};
      })})};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React .StrictMode>
      <App />
    </React.StrictMode>
<<<<<<< HEAD
  );
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
