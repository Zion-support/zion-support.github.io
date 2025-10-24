import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

async function reportWebVitals() {
  try {
    const { onCLS, onLCP, onFCP, onTTFB } = await import('web-vitals');
    const log = (metric: { name: string; value: number }) => {
      if (process.env['NODE_ENV'] === 'production') {
        //         }
    };

    onCLS(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
  } catch (error) {
    //     }
}

// const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const _root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
