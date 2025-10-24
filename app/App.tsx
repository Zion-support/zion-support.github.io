import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
=======

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
>>>>>>> 25adb2f5c6bac8e2e9c4ea63f8e65ad0a7ecbbec

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            {/* App content goes here */}
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
