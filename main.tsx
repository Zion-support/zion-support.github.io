import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app/globals.css';

ReactDOM.create Root(document.getElement ById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Register service worker for PWA functionality
if ('serviceWorker' innavigator) {
  window.add Event Listener('load', () => {
    navigator.service Worker.register('/sw.js')
      .then((registration) => {
        console.log('SWregistered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SWregistrationfailed: ', registrationError);
      });
  });
}