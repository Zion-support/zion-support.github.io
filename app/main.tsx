import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './globals.css';

async function reportWebVitals() {
  try {
    const { onCLS, onLCP, onFCP, onTTFB, onINP } = await import('web-vitals');
    const log = (metric: { name: string; value: number }) => {
      if (process.env['NODE_ENV'] === 'production') {
        console.log('Web Vital:', metric);
      }
    };

    onCLS(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
    onINP(log);
  } catch (error) {
    console.warn('Failed to load web-vitals:', error);
  }
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
