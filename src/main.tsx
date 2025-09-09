import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';
// Removed feat/i18n-implementation and main markers
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/index'; // Adjust the path if your i18n.js is elsewhere
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
import ToastProvider from './components/ToastProvider';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';
import { GlobalSnackbarProvider } from './context/SnackbarContext';
import { GlobalLoaderProvider } from '@/context/GlobalLoaderContext';

// Import i18n configuration
import './i18n';

// Register service worker
import { register } from './serviceWorkerRegistration';

// Performance monitoring
import { performanceMonitor } from './utils/performance';

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', color: '#333' }}>
    <h1>Application Error</h1>
    <p>A critical error occurred while loading the application.</p>
    <p>Error: {error.message}</p>
    <p>Please check the console for more details.</p>
    <button 
      onClick={resetErrorBoundary}
      style={{ 
        padding: '10px 20px', 
        marginTop: '10px', 
        background: '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer' 
      }}
    >
      Reload Page
    </button>
  </div>
);

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontFamily: 'sans-serif',
    color: '#666'
  }}>
    <div>Loading...</div>
  </div>
);

// Error handling function
// const showApiError = (error: unknown): void => {
//   console.error('API Error:', error);
// };

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
  if (event.error) {
    handleGlobalError(event.error);
  }
});

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const errorMessage = typeof reason === 'string' ? reason : 'Unknown error';
  handleGlobalError(new Error(errorMessage));
});

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          console.error('Error caught by boundary:', error, errorInfo);
        }}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>,
  );

  // Register service worker in production
  if (import.meta.env.PROD) {
    register();
  }
} catch (error) {
  handleGlobalError(error as Error);
}
