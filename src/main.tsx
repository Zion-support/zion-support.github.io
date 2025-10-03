import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
async function reportWebVitals(): void {
  try {
    const { onCLS, onLCP, onFCP, onTTFB } = await import("web-vitals");
    const log = (metric: { name: string; value: number }) => {
      if (import.meta.env.PROD) {
        // eslint-disable-next-line no-console
        console.log(`[WebVitals] ${metric.name}:`, Math.round(metric.value));
      }
    };
    onCLS(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
  } catch {
    // ignore in unsupported environments
  }
};

// Optimized service worker registration
const registerServiceWorker = () => {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Silently fail if service worker registration fails
      });
    });
  }
};

// Main app initialization with performance optimizations
const initializeApp = () => {
  const container = document.getElementById("root");
  if (!container) {
    // eslint-disable-next-line no-console
    console.error("Root container not found");
    return;
  }

  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Initialize performance monitoring and service worker
  if (import.meta.env.PROD) {
    void reportWebVitals();
    registerServiceWorker();
  }
};

// Start the app
initializeApp();
