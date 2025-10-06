import React from 'react';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import Header from './components/Header';

// Styles
import './index.css';

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <SEOOptimizer>
        <div className="App">
          <Header />
          <main id="main-content">
            {children}
          </main>
        </div>
      </SEOOptimizer>
    </ErrorBoundary>
  );
};

export default App;