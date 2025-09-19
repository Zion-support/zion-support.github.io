import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './utils/performanceMonitor'

// Register service worker for PWA functionality
if (typeof window !== 'undefined' && 'serviceWorker' in (window as any).navigator) {
  window.addEventListener('load', () => {
    (window as any).navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        // console.log('SW registration failed: ', registrationError)
      })
  })
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}