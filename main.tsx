<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import './app/utils/errorHandler';
import './app/utils/messageHandler';

// Ensure React scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for React scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/globals.css'
const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        // Service worker registered successfully
      })
      .catch(() => {
        // Service worker registration failed
      });
  });
}

// Fix message channel error by ensuring proper cleanup
window.addEventListener('beforeunload', () => {
  // Clean up any pending message channels
  if (window.chrome && window.chrome.runtime) {
    try {
      window.chrome.runtime.onMessage.removeListener();
    } catch (e) {
      // Ignore errors during cleanup
    }
  }
});
