import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';

const rootElement: any = document.getElementById('root');

function renderApp(): void {}
  if (!rootElement) return;

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <App />
          </ErrorBoundary>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

renderApp();