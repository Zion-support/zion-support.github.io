<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
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
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
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
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
>>>>>>> cursor/delete-records-a75e
=======
);
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('SW registered: ', registration);
    })
    .catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
