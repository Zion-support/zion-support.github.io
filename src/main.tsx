import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// Fallback simple ThemeProvider to avoid missing module errors
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);
import App from "./App";
import "./index.css";

// Register enhanced service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw-enhanced.js")
      .then((registration) => {
        // console.log("🚀 Enhanced Service Worker registered successfully:", registration.scope);

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // console.log("🔄 New service worker available. Reloading...");
                window.location.reload();
              }
            });
          }
        });
      })
      .catch((error) => {
        // console.error("❌ Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
