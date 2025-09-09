import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';

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
