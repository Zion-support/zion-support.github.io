import React from 'react'
importReactDOMfrom 'react-dom/client'
importAppfrom './App'
import './app/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// RegisterserviceworkerforPWAfunctionalityif ('serviceWorker' innavigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SWregistered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SWregistrationfailed: ', registrationError);
      });
  });
}
