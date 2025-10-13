<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

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
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< HEAD
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app/globals.css';
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React .StrictMode>
      <App />
    </React.StrictMode>
<<<<<<< HEAD
  );
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
);
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
