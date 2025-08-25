import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SkipToContent } from './components/Accessibility'
import './index.css'

// Register service worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Service Worker registered successfully
      })
      .catch((registrationError) => {
        // Don't log as error, just info - service worker is optional
        console.info('SW registration failed (optional): ', registrationError);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SkipToContent />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
