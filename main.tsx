import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
);

// Register service worker for PWA functionality;
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  }