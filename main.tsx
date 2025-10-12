import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/globals.css'

// Polyfill for React scheduler to fix unstable_now error
if (typeof window !== 'undefined') {
  // Ensure scheduler is available
  if (!window.scheduler) {
    window.scheduler = {
      unstable_now: () => performance.now(),
      unstable_scheduleCallback: (priority, callback) => {
        if (priority === 1) {
          return setTimeout(callback, 0);
        }
        return setTimeout(callback, 5);
      },
      unstable_cancelCallback: (id) => {
        clearTimeout(id);
      }
    };
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('SW registered: ', registration);
    })
    .catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
}

// Handle message channel errors
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('message channel closed')) {
    console.warn('Message channel error handled:', event.message);
    event.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('message channel closed')) {
    console.warn('Unhandled promise rejection handled:', event.reason.message);
    event.preventDefault();
    return false;
  }
});