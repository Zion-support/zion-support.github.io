import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

<<<<<<< HEAD
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
=======
ReactDOM.createRoot(document.getElementById('root')!).render(
>>>>>>> 4b819355ccb44a5b24eeefb1407608395a1110cb
  <React.StrictMode>
    <App />
  </React.StrictMode>
);