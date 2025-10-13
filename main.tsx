import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app/globals.css";

// Polyfill for React scheduler to fix unstable_now error
if (typeof window !== 'undefined') {
  // Ensure scheduler is available
  if (!window.scheduler) {
    window.scheduler = {
      unstable_now: () => performance.now(),
      unstable_scheduleCallback: () => {},
      unstable_cancelCallback: () => {},
      unstable_shouldYield: () => false,
      unstable_requestPaint: () => {},
      unstable_runWithPriority: (priority, callback) => callback(),
      unstable_wrapCallback: (callback) => callback,
      unstable_getCurrentPriorityLevel: () => 0,
      unstable_continueExecution: () => {},
      unstable_pauseExecution: () => {},
      unstable_getFirstCallbackNode: () => null,
      unstable_forceFrameRate: () => {},
    };
  }
}

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
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
