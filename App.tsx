import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
import SEOHead from './app/components/SEOHead';

// Page Components
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/pages/MicroSaaSPage';
import AISolutionsPage from './app/pages/AIServicesPage';
import ITSolutionsPage from './app/pages/ITServicesPage';

// Service Pages
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CareersPage from './app/pages/CareersPage';

// New AI Service Pages - using placeholder components for now
const AIAccountingAssistantPage = () => <div>AI Accounting Assistant - Coming Soon</div>;
const AIClimatePredictionEnginePage = () => <div>AI Climate Prediction Engine - Coming Soon</div>;
const AICybersecuritySuiteProPage = () => <div>AI Cybersecurity Suite Pro - Coming Soon</div>;

// Additional Pages
import CloudSolutionsPage from './app/pages/CloudSolutionsPage';
import MicroSaaSPage from './app/pages/MicroSaaSPage';
import FiveGSolutionsPage from './app/pages/FiveGSolutionsPage';
import TeamPage from './app/pages/TeamPage';

// Lazy load heavy components
const LazyHomePage = React.lazy(() => import('./app/page'));
const LazyAboutPage = React.lazy(() => import('./app/pages/AboutPage'));
const LazyContactPage = React.lazy(() => import('./app/pages/ContactPage'));
const LazyServicesPage = React.lazy(() => import('./app/pages/ServicesPage'));

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <AccessibilityEnhancer>
            <PerformanceMonitor />
            <SEOHead />
            <div className="min-h-screen bg-slate-900 flex relative overflow-hidden">
              {/* Futuristic Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
              </div>
              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              <div className="flex-1 flex flex-col">
                <Navigation onSidebarToggle={() => setSidebarOpen(true)} />
                <main className="relative z-10 flex-1" id="main-content" role="main">
                  <Suspense fallback={<LoadingSpinner size="lg" text="Loading page..." />}>
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
                      
                      {/* New AI Service Pages */}
                      <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
                      <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEnginePage />} />
                      <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
                      
                      {/* Additional Service Pages */}
                      <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
                      <Route path="/micro-saas" element={<MicroSaaSPage />} />
                      <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                      
                      {/* Additional Pages */}
                      <Route path="/team" element={<TeamPage />} />
                      
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
                </main>
                
                <Footer />
              </div>
            </div>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;
