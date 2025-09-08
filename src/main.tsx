import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register service worker
import { registerServiceWorker } from './serviceWorkerRegistration';

// Error handling function
const showApiError = (error: unknown): void => {
  console.error('API Error:', error);
};

// Global error handler
const handleGlobalError = (error: Error): void => {
  console.error('Global error caught:', error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif; color: #333;">
        <h1>Application Error</h1>
        <p>A critical error occurred while loading the application.</p>
        <p>Error: ${error.message}</p>
        <p>Please check the console for more details.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `;
  }
};

// Set up global error handlers
window.addEventListener('error', (event) => {
  handleGlobalError(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  handleGlobalError(new Error(event.reason));
});

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

  // Register service worker in production
  if (import.meta.env.PROD) {
    registerServiceWorker();
  }
} catch (error) {
  handleGlobalError(error as Error);
}