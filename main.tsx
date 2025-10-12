import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/globals.css'
import { handleServiceWorkerMessage } from './app/utils/messageHandler'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Handle service worker messages properly using safe handler
        navigator.serviceWorker.addEventListener('message', handleServiceWorkerMessage);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}