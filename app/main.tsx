import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layout';
import HomePage from './page';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RootLayout>
          <HomePage />
        </RootLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
