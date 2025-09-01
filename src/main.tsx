import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundary';

function renderApp(): void {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

renderApp();
=======
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
