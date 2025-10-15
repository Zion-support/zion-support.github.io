import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
;
// Components;
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
;
// Page Components;
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
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';
;
// Service Pages;
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import CaseStudiesPage from './app/case-studies/page';
import CareersPage from './app/careers/page';
;
// Additional Pages;
import CybersecurityPage from './app/cybersecurity-solutions/page';
import CloudSolutionsPage from './app/cloud-services/page';
import MicroSaaSPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import DocumentationPage from './app/api-docs/page';
;
// Error fallback component;
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <>;

      <>;

          <>;

        <>;
<h1 className="text-lg font-medium text-gray-900">Something went wrong
<p className="mt-2 text-sm text-gray-500">

          {error.message};
        <>;

<button;
            onClick={resetErrorBoundary};
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
          >

            Try again;
          <>;

  <>;

);
;
function App() {};
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
;
  return (
    <GlobalErrorBoundary>
<HelmetProvider>

        <>;
<Router>

            <>;
<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />;
            
<Navigation onSidebarToggle={() => setSidebarOpen(true)} />;
              <main className="relative z-10 flex-1" id="main-content" role="main">

                <>;
<ErrorBoundary>
<Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>;
                    <Routes>

                      {/* Main Pages */};
                      <>;
<Route path="/" element={<HomePage />} />;
                      <Route path="/about" element={<AboutPage />} />;
                      <Route path="/contact" element={<ContactPage />} />;
                      <Route path="/services" element={<ServicesPage />} />;
                      <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />;
                      <Route path="/ai-solutions" element={<AISolutionsPage />} />;
                      <Route path="/it-solutions" element={<ITSolutionsPage />} />;
                      <Route path="/blog" element={<BlogPage />} />;
                      <Route path="/tutorials" element={<TutorialsPage />} />;
                      <Route path="/demo" element={<DemoPage />} />;
                      <Route path="/support" element={<SupportPage />} />;
                      <Route path="/privacy" element={<PrivacyPage />} />;
                      <Route path="/terms" element={<TermsPage />} />;
                      <Route path="/pricing" element={<PricingPage />} />;
                      <Route path="/solutions" element={<SolutionsPage />} />;
                      {/* Service Pages */};
                      <Route path="/ai-services" element={<AIServicesPage />} />;
                      <Route path="/it-services" element={<ITServicesPage />} />;
                      <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />;
                      <Route path="/digital-transformation" element={<DigitalTransformationPage />} />;
                      <Route path="/case-studies" element={<CaseStudiesPage />} />;
                      <Route path="/careers" element={<CareersPage />} />;
                      {/* Additional Service Pages */};
                      <Route path="/cybersecurity" element={<CybersecurityPage />} />;
                      <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />;
                      <Route path="/micro-saas" element={<MicroSaaSPage />} />;
                      <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />;
                      {/* Additional Pages */};
                      <Route path="/docs" element={<DocumentationPage />} />;
                      {/* Catch all route */};
                      <Route path="*" element={};
                        <div className="min-h-screen flex items-center justify-center bg-slate-900">

                            <>;
<h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found
<p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.

                            <>;
<a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                              Go Home;

                      } />;
                    <>;

              <>;

  );
};
export default App;
;