import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const Main: React.FC = () => {
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Main />);
}

export default Main;