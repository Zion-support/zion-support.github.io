import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app/optimized-globals.css";
import { logger } from "./app/utils/logger";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        logger.info("Service Worker registered successfully", { registration });
      })
      .catch((registrationError) => {
        logger.error("Service Worker registration failed", { registrationError });
      });
  });
}

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  // Monitor performance in development
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (perfData) {
      logger.info('Page load performance', {
        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0,
      });
    }
  });
}
