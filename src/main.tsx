<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
=======
<<<<<<< HEAD
import React from
  'react'; import ReactDOM from
  'react-dom/client'; import { BrowserRouter } from
  'react-router-dom'; import { Provider } from
  'react-redux'; import { store } from
  './store'; import App from
  './App'; import
  './index.css'; ReactDOM.createRoot(document.getElementById(
  'root')!).render( <React.StrictMode> <Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider> </React.StrictMode> );
=======
import React from 'react' import ReactDOM from 'react-dom/client' import { BrowserRouter } from 'react-router-dom' import { Provider } from 'react-redux' import { store } from './store' import App from './App' import './index.css' ReactDOM.createRoot(document.getElementById('root')!).render( <React.StrictMode> <Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider> </React.StrictMode> );
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-8c53
