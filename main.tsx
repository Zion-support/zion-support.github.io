import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        console.log('SW registered: ', registration);
      })
        console.log('SW registration failed: ', registrationError);
      });
  });