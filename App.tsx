import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
import ErrorBoundary from "./app/components/ErrorBoundary";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./app/page"));
const AboutPage = lazy(() => import("./app/about/page"));
const ServicesPage = lazy(() => import("./app/services/page"));
const ContactPage = lazy(() => import("./app/contact/page"));
const AIServicesPage = lazy(() => import("./app/ai-services/page"));
const ITServicesPage = lazy(() => import("./app/it-services/page"));
const FiveGSolutionsPage = lazy(() => import("./app/5g-solutions/page"));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation 
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <Sidebar 
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <main className="relative">
              <Suspense fallback={<LoadingPage />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;