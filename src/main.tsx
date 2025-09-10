<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import { createRoot } from 'react-dom/client'
import App from './App'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0a91

// Performance monitoring
if (typeof window !== 'undefined') {
  // Track initial page load
  window.addEventListener('load', () => {
    // Page loaded
  });

  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then((vitals) => {
      if (vitals.onCLS) vitals.onCLS(() => {});
      if (vitals.onINP) vitals.onINP(() => {}); // INP replaces FID
      if (vitals.onFCP) vitals.onFCP(() => {});
      if (vitals.onLCP) vitals.onLCP(() => {});
      if (vitals.onTTFB) vitals.onTTFB(() => {});
    });
  }
}

<<<<<<< HEAD
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );

  root.render(app);
=======
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0a91
} else {
  console.error('Root element not found');
}