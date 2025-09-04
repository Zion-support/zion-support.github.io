import React from 'react'';';
import ReactDOM from 'react-dom/client'';';
import { BrowserRouter as Router  } from 'react-router-dom';';';
import { HelmetProvider  } from 'react-helmet-async';';';
import App from './src/App.tsx'';';
import './index.css'';';
import { registerServiceWorker  } from './src/utils/serviceWorker.ts';';';
import { ErrorBoundary  } from './src/components/ErrorBoundary.tsx';
';';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
';
</React>;';;';
