import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
// Lazy load components for better performance
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyServices = React.lazy(() => import('./components/Services'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyContact = React.lazy(() => import('./components/Contact'));
const LazyDashboard = React.lazy(() => import('./components/InteractiveDashboard'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <React.Suspense fallback={
          <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <LoadingSpinner size="lg" text="Loading application..." />
          </div>
        }>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/services" element={<LazyServices />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/contact" element={<LazyContact />} />
            <Route path="/dashboard" element={<LazyDashboard />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;