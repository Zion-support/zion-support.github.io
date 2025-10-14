<<<<<<< HEAD
import React from 'react";
import { createRoot } from 'react-dom/client";
import App from './App";
import "./index.css"
=======
<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
>>>>>>> origin/main
// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {'
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {}
    window.performance.now = window.performance.now || (() => Date.now())
const root = createRoot(
<<<<<<< HEAD
  document.getElementById('root') as HTMLElement'
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
=======
  document.getElementById('root') as HTMLElement
);
=======
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
>>>>>>> origin/main
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
<<<<<<< HEAD
>>>>>>> origin/main
// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {"
  window.addEventListener("load", () => {"
    navigator.serviceWorker
      .register("/sw.js")"
      .then((registration) => {
        // Service worker registered successfully
<<<<<<< HEAD
        console.log('Service worker registered:', registration)"})"
      .catch((registrationError) => {// Service worker registration failed
        console.log('Service worker registration failed:', registrationError)"})"
  }
=======
        console.log('Service worker registered:', registration);
      })
      .catch((registrationError) => {
        // Service worker registration failed
        console.log('Service worker registration failed:', registrationError);
      });
  });
}
=======
>>>>>>> origin/main
>>>>>>> origin/main
