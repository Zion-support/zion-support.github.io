import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';
import { registerServiceWorker } from './utils/serviceWorker';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong:</h2>
        <pre className="text-red-400 mb-4">{error.message}</pre>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Reload page
        </button>
      </div>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Register service worker for PWA functionality
registerServiceWorker();
