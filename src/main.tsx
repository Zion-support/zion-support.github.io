import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppWrapper } from './AppWrapper';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppWrapper>
        <Router>
          <App />
        </Router>
      </AppWrapper>
    </HelmetProvider>
  </React.StrictMode>
);