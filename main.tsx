import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
<<<<<<< HEAD

// Ensure React scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for React scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
=======
ReactDOM.createRoot(document.getElementById("root")!).render(
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
      });
  });
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
