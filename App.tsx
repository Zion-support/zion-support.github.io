import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import LoadingStates from './app/components/LoadingStates';
import HomePage from './app/page';
import PerformanceMonitoring from './app/components/PerformanceMonitoring';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './app/components/AdvancedErrorBoundary';

// Import only existing pages
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CareersPage from './app/pages/CareersPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import DocumentationPage from './app/pages/DocumentationPage';
import FiveGSolutionsPage from './app/pages/FiveGSolutionsPage';
import TeamPage from './app/pages/TeamPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AdvancedErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={handleSidebarToggle} />
              <main className="relative z-10 flex-1">
                <Suspense fallback={<LoadingStates />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/documentation" element={<DocumentationPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    <Route path="/team" element={<TeamPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <PerformanceMonitoring />
              <AccessibilityEnhancer />
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </AdvancedErrorBoundary>
  );
}

export default App;