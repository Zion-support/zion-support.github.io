import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
import App from '../App';
import './globals.css';
import { measureWebVitals } from './utils/performanceMonitor';

// Initialize performance monitoring;
if (typeof window !== 'undefined') {
  measureWebVitals();
}

// Register service worker;
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
<<<<<<< HEAD
      .then(() => {
        // Service Worker registered successfully;
      })
      .catch(() => {
        // Service Worker registration failed - handled silently;
=======
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      });
  });
}

const root = document.getElementById('root');
if (root) {
<<<<<<< HEAD
  ReactDOM.createRoot(root).render(<React.StrictMode>)
      <App />)
    </React.StrictMode>)
=======
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  );
}