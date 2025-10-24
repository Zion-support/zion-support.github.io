import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Zion Tech Group</h1>
      <p>Welcome to our application</p>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
