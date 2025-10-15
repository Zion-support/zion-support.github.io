import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Page Components (lazy loaded below)
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';
import TeamPage from './app/team/page';
import DocumentationPage from './app/docs/page';

// Service Pages
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import CaseStudiesPage from './app/case-studies/page';
import CareersPage from './app/careers/page';

// Additional Pages
import CybersecurityPage from './app/cybersecurity-solutions/page';
import CloudSolutionsPage from './app/cloud-services/page';
import MicroSaaSPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';

// Lazy load heavy components
const LazyHomePage = React.lazy(() => import('./app/page'));
const LazyAboutPage = React.lazy(() => import('./app/pages/AboutPage'));
const LazyContactPage = React.lazy(() => import('./app/pages/ContactPage'));
const LazyServicesPage = React.lazy(() => import('./app/pages/ServicesPage'));

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={() => setSidebarOpen(true)} />
              <main className="relative z-10 flex-1" id="main-content" role="main">
                <ErrorBoundary>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
                      <Routes>
                        {/* Main Pages */}
                        <Route path="/" element={<LazyHomePage />} />
                        <Route path="/about" element={<LazyAboutPage />} />
                        <Route path="/contact" element={<LazyContactPage />} />
                        <Route path="/services" element={<LazyServicesPage />} />
                        <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                        <Route path="/ai-solutions" element={<AISolutionsPage />} />
                        <Route path="/it-solutions" element={<ITSolutionsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/solutions" element={<SolutionsPage />} />
                        
                        {/* Service Pages */}
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/it-services" element={<ITServicesPage />} />
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        
                        {/* Additional Service Pages */}
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
                        <Route path="/micro-saas" element={<MicroSaaSPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        
                        {/* Additional Pages */}
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/docs" element={<DocumentationPage />} />
                        
                        {/* Catch all route */}
                        <Route path="*" element={
                          <div className="min-h-screen flex items-center justify-center bg-slate-900">
                            <div className="text-center">
                              <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                              <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                              <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                                Go Home
                              </a>
                            </div>
                          </div>
                        } />
                      </Routes>
                    </Suspense>
                  </AccessibilityEnhancer>
                </ErrorBoundary>
              </main>
              
              <Footer />
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
