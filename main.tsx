<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface mainProps {
  className?: string;
  children?: React.ReactNode;
}

export default function main({ className = '', children }: mainProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
<<<<<<< HEAD
}
=======
}
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
      });
  });
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
