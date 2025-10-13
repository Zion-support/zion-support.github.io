import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './app/globals.css';

// Ensure React scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for React scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}