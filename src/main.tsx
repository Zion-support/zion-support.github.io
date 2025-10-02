import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Report web vitals to help monitor performance in production
async function reportWebVitals() {
  try {
    const { onCLS, onFID, onLCP, onFCP, onTTFB, onINP } = await import('web-vitals');
    const log = (metric: { name: string; value: number }) => {
      // Replace with analytics endpoint if available
      console.log(`[WebVitals] ${metric.name}:`, Math.round(metric.value));
    };
    onCLS(log);
    onFID(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
    // @ts-ignore web-vitals v4 also exports onINP
    if (onINP) onINP(log);
  } catch {
    // no-op in dev or if unsupported
  }
}

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
  if (import.meta.env.PROD) {
    void reportWebVitals();
  }
}
