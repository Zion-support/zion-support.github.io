import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app/globals.css";

// Ensure React scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Check if scheduler is available
  try {
    // This will be handled by React internally
    console.log('React scheduler will be initialized by React');
  } catch (error) {
    console.warn('Scheduler initialization warning:', error);
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
