<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';';';
import ReactDOM from 'react-dom/client';';';
import App from './App.tsx';';';
import './index.css';';
=======';';
import React from 'react'';';
import ReactDOM from 'react-dom/client'';';
import { BrowserRouter as Router  } from 'react-router-dom';';';
import { HelmetProvider  } from 'react-helmet-async';';';
import App from './src/App.tsx'';';
import './index.css'';';
import { registerServiceWorker  } from './src/utils/serviceWorker.ts';';';
import { ErrorBoundary  } from './src/components/ErrorBoundary.tsx';
>>>>>>> origin/merge-pr-10625';
';';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
';
</React>;';;';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
);
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
