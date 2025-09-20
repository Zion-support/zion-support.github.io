import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components for better performance
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyContact = React.lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <React.Suspense fallback={
          <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <LoadingSpinner size="lg" text="Loading application..." />
          </div>
        }>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/contact" element={<LazyContact />} />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
export default App;
