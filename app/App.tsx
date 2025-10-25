<<<<<<< HEAD
'use client';
=======
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
>>>>>>> origin/main

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            {/* App content goes here */}
          </div>
        </BrowserRouter>
<<<<<<< HEAD
      </ErrorBoundary>
    </HelmetProvider>;
=======
      </HelmetProvider>
    </ErrorBoundary>
>>>>>>> origin/main
  );
};

export default App;
