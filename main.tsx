<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
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
      .then(() => {
        // Service worker registered successfully
      })
      .catch(() => {
        // Service worker registration failed
      });
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-48ac
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
