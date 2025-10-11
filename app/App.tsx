<<<<<<< HEAD
import React, { Suspense  } from 'react';
import {  BrowserRouter, Routes, Route   } from 'react-router-dom';
import {  HelmetProvider   } from 'react-helmet-async';
import {  ErrorBoundary   } from 'react-error-boundary';
=======
import React from 'react'
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      <h1>App Component</h1>
    </div>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

export default App