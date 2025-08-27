console.log("main.jsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
const rootElement = document.getElementById('root');
function renderApp() {
    const app = React.createElement(React.StrictMode, null,
        React.createElement(App, null)
    );
    if (rootElement?.hasChildNodes()) {
        // Hydrate if server-side rendered content exists
        hydrateRoot(rootElement, app);
    } else if (rootElement) {
        // Create new root if no existing content
        createRoot(rootElement).render(app);
    }
}
function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;color:#ef4444;">
        <h1>Application Error</h1>
        <p>${message}</p>
        <button onclick="window.location.reload()" style="padding:10px 20px;background:#3b82f6;color:white;border:none;border-radius:5px;cursor:pointer;">
          Reload Page
        </button>
      </div>`;
    }
}
try {
    renderApp();
} catch (error) {
    console.error('Global error caught in main.jsx:', error);
    displayFatalError(error.message);
}
window.addEventListener('error', (e) => {
    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});
// Add performance monitoring
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
  }
});
// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }
    });
}
