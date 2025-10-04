import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

async function reportWebVitals() {
  try {
    const { onCLS, onLCP, onFCP, onTTFB } = await import('web-vitals');
    const log = (metric: { name: string; value: number }) => {
      if (process.env.NODE_ENV === 'production') {
        console.log(`[WebVitals] ${metric.name}:`, Math.round(metric.value));
      }
    };
    onCLS(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
  } catch {
    // ignore in unsupported environments
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
