import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
<<<<<<< HEAD

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
=======
ReactDOM.createRoot(document.getElementById("root")!).render(
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
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
