import React, { Suspense  } from 'react';
import {  BrowserRouter, Routes, Route   } from 'react-router-dom';
import {  HelmetProvider   } from 'react-helmet-async';
import {  ErrorBoundary   } from 'react-error-boundary';

// Import the main page component
import HomePage from './page';

// Import other page components
import AboutPage from './about/page';
import AccessibilityPage from './accessibility/page';
import FiveGImplementationPage from './5g-implementation/page';

// Components
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AppLoadingSpinner from './components/AppLoadingSpinner';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App"></div></div>
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage /&gt;} />
                <Route path="/about" element={<AboutPage /&gt;} />
                <Route path="/accessibility" element={<AccessibilityPage /&gt;} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage /&gt;} />
                
                {/* Add more routes as needed */}
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;