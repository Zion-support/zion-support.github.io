import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')!).render(
=======
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
  <React.StrictMode>
    <App />
  </React.StrictMode>
);