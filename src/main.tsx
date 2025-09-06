import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
=======

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
  <React.StrictMode>
    <App />
  </React.StrictMode>
);