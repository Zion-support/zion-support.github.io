import React from 'react';

<<<<<<< HEAD
export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
  );
=======
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App   />
  </React.StrictMode>
  );

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('SW registered: ', registration);})
    .catch((registrationError) => {console.log('SW registration failed: ', registrationError);});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
}