<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

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

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  root.render(app);
} else {
  // console.error('Root element not found');
}
=======
console.log("main.tsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from "./App.js";
import './index.css';
// import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import './utils/globalFetchInterceptor';
// import './utils/consoleErrorToast';
// Import i18n configuration
// import './i18n';
// import { LanguageProvider } from '@/context/LanguageContext';
// import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";
// import { WhitelabelProvider } from '@/context/WhitelabelContext';
// import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers
// import { AuthProvider } from "./context/auth/AuthProvider";
// import { NotificationProvider } from "./context/notifications/NotificationContext";
// Import analytics provider
// import { AnalyticsProvider } from "./context/AnalyticsContext";
// import { ViewModeProvider } from "./context/ViewModeContext";
// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});
const renderApp() {
    const app = React.createElement(React.StrictMode, null,
        React.createElement(Router, null,
            React.createElement(App, null)
        )
    );
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app)}
    else if (rootElement) {
        createRoot(rootElement).render(app)}
}
function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;">
        <h1>Application Error</h1>
        <p>${message}</p>
      </div>`}
}
try {
    renderApp()}
catch (error) {
    console.error('Global error caught in main.tsx:', error);
    displayFatalError(error.message)}
window.addEventListener('error', (e) => {
    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message)});
// Render the app with proper provider structure
// Note: This section was commented out as it was causing duplicate rendering
// The main render function above handles the app rendering
>>>>>>> origin/clean-error-fixing-automation
