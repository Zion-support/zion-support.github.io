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
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import BlogPage from './app/blog/page';
import PricingPage from './app/pricing/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';

// Service Pages
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-solutions/page';
import CloudInfrastructurePage from './app/cloud-services/page';
import CaseStudiesPage from './app/case-studies/page';

// New AI Service Pages
import AIAccountingAssistantPage from './app/ai-accounting-assistant/page';
import AIClimatePredictionEnginePage from './app/ai-climate-prediction-engine/page';
import AICybersecuritySuiteProPage from './app/ai-cybersecurity-suite-pro/page';

// Additional Pages
import CloudSolutionsPage from './app/cloud-services/page';
import MicroSaaSPage from './app/micro-saas-solutions/page';
import FiveGSolutionsPage from './app/5g-solutions/page';

// Lazy load heavy components
const LazyHomePage = React.lazy(() => import('./app/page'));
const LazyAboutPage = React.lazy(() => import('./app/about/page'));
const LazyContactPage = React.lazy(() => import('./app/contact/page'));
const LazyServicesPage = React.lazy(() => import('./app/services/page'));

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <AccessibilityEnhancer>
            <PerformanceMonitor />
            <SEOHead />
            <div className="min-h-screen bg-slate-900 flex relative overflow-hidden text-white">
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
                <Header />
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
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      
                      {/* Service Pages */}
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
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