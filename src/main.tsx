import React from 'react';
import { createRoot } from 'react-dom/client';
// Use clean App to bypass corrupted files
import App from './AppClean';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element with id "root" not found in index.html');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

