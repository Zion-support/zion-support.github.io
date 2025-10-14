import React from 'react';
import ReactDOM from 'react-dom/client';
// App component would be imported here

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div>App component would be rendered here</div>
  </React.StrictMode>
);
