import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root')!;

function ErrorFallback({error}: {error: Error}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function renderApp(): void {
  if (!rootElement) return;

  ReactDOM.createRoot(rootElement).render(
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
}

renderApp();
