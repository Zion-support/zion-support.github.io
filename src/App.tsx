import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Careers = lazy(() => import('./pages/careers'));
const Services = lazy(() => import('./pages/services/index'));
const AIServices = lazy(() => import('./pages/services/ai-services'));
const ITServices = lazy(() => import('./pages/services/it-services'));
const MicroSaaS = lazy(() => import('./pages/services/micro-saas'));
const Pricing = lazy(() => import('./pages/pricing'));
const PricingGuide = lazy(() => import('./pages/pricing-guide'));
const Blog = lazy(() => import('./pages/blog'));
const CaseStudies = lazy(() => import('./pages/case-studies'));
const WhitePapers = lazy(() => import('./pages/white-papers'));
const Webinars = lazy(() => import('./pages/webinars'));
const Team = lazy(() => import('./pages/team'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const Sitemap = lazy(() => import('./pages/sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service sub-pages
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AICustomerExperience = lazy(() => import('./pages/services/AICustomerExperience'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIEnterpriseOrchestrator = lazy(() => import('./pages/services/AIEnterpriseOrchestrator'));
const AIHealthcareAnalyticsPlatform = lazy(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AIFinancialPlanning = lazy(() => import('./pages/services/AIFinancialPlanning'));

// Simple header component
const SimpleHeader = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

// Simple footer component
const SimpleFooter = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/team" className="hover:text-blue-400">Team</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-blue-400">All Services</a></li>
            <li><a href="/ai-services" className="hover:text-blue-400">AI Solutions</a></li>
            <li><a href="/it-services" className="hover:text-blue-400">IT Services</a></li>
            <li><a href="/micro-saas" className="hover:text-blue-400">Micro SaaS</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/help-center" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/documentation" className="hover:text-blue-400">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        <div className="mt-4">
          <p>Mobile: +1 302 464 0950</p>
          <p>Email: kleber@ziontechgroup.com</p>
          <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
        </div>
      </div>
    </div>
  </footer>
);

// Main App component
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
          <SimpleHeader />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/pricing-guide" element={<PricingGuide />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  
                  {/* Service sub-pages */}
                  <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                  <Route path="/services/ai-customer-experience" element={<AICustomerExperience />} />
                  <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                  <Route path="/services/ai-enterprise-orchestrator" element={<AIEnterpriseOrchestrator />} />
                  <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                  <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                  <Route path="/services/ai-financial-planning" element={<AIFinancialPlanning />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>
          <SimpleFooter />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;