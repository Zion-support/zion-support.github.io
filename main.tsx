import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById("root")!).render(
=======

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD
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
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
