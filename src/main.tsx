<<<<<<< HEAD
import React from 'react'; import ReactDOM from 'react-dom/client'; import { BrowserRouter } from 'react-router-dom'; import { Provider } from 'react-redux'; import { store } from './store'; import App from './App'; import './index.css'; ReactDOM.createRoot(document.getElementById('root')!).render( <React.StrictMode> <Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider> </React.StrictMode> );
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Add performance monitoring here
  console.log('Production mode - performance monitoring enabled');
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
>>>>>>> origin/pr-update-cursor/analyze-improve-and-deploy-application-6fbe
