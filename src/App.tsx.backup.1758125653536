import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import PerformanceMonitor from "./components/PerformanceMonitor";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong</h2>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback error={new Error('Unknown error')} resetErrorBoundary={() => window.location.reload()} />}>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <PerformanceMonitor />
              <Navigation />
              
              {/* Main Content with enhanced Suspense and Error Boundary */}
              <main className="pt-20 min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<Home />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
