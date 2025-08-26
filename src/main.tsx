import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  const app = (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );

  root.render(app);
} else {
  console.error('Root element not found');
}
