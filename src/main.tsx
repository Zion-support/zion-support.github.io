<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(;
  <React.StrictMode>;
    <HelmetProvider>;
      <Router>;
        <App />;
      </Router>;
    </HelmetProvider>;
  </React.StrictMode>,
);
=======
import React from 'react'; import ReactDOM from 'react-dom/client'; import { BrowserRouter as Router } from 'react-router-dom'; import { HelmetProvider } from 'react-helmet-async'; import App from './App.tsx'; import './index.css'; import { registerServiceWorker } from './utils/serviceWorker.ts'; import ErrorBoundary from './components/ErrorBoundary.tsx'; ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( <React.StrictMode> <Router> <HelmetProvider> <ErrorBoundary> <App /> </ErrorBoundary> </HelmetProvider> </Router> </React.StrictMode> ); registerServiceWorker();
>>>>>>> origin/automation-improvements
