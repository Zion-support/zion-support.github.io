import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const ServicesOverview = lazy(() => import('./pages/services-overview'));

// New pages
const FAQPage = lazy(() => import('./pages/faq'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const TermsPage = lazy(() => import('./pages/terms'));
const HelpPage = lazy(() => import('./pages/help'));
const SecurityPage = lazy(() => import('./pages/security'));
const StatusPage = lazy(() => import('./pages/status'));

// Service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));

// Enhanced Header component
const Header = () => (
  <header className="bg-zion-slate-dark text-white p-4 shadow-lg">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-zion-cyan transition-colors">Home</a>
          <a href="/about" className="hover:text-zion-cyan transition-colors">About</a>
          <a href="/services" className="hover:text-zion-cyan transition-colors">Services</a>
          <a href="/solutions" className="hover:text-zion-cyan transition-colors">Solutions</a>
          <a href="/contact" className="hover:text-zion-cyan transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="tel:+13024640950" className="text-sm hover:text-zion-cyan transition-colors">
            +1 302 464 0950
          </a>
          <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-zion-cyan transition-colors">
            kleber@ziontechgroup.com
          </a>
        </div>
      </div>
    </div>
  </header>
);

// Enhanced Footer component
const Footer = () => (
  <footer className="bg-zion-slate-dark text-white p-8 mt-auto">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Zion Tech Group
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Leading technology solutions provider specializing in AI, cybersecurity, 
            cloud infrastructure, and digital transformation services.
          </p>
          <div className="text-sm text-gray-300">
            <p>364 E Main St STE 1008</p>
            <p>Middletown, DE 19709</p>
          </div>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="text-gray-300 hover:text-zion-cyan transition-colors">All Services</a></li>
            <li><a href="/services/ai-analytics" className="text-gray-300 hover:text-zion-cyan transition-colors">AI Analytics</a></li>
            <li><a href="/services/cybersecurity" className="text-gray-300 hover:text-zion-cyan transition-colors">Cybersecurity</a></li>
            <li><a href="/services/cloud-devops" className="text-gray-300 hover:text-zion-cyan transition-colors">Cloud & DevOps</a></li>
            <li><a href="/micro-saas" className="text-gray-300 hover:text-zion-cyan transition-colors">Micro SAAS</a></li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="text-gray-300 hover:text-zion-cyan transition-colors">About Us</a></li>
            <li><a href="/team" className="text-gray-300 hover:text-zion-cyan transition-colors">Team</a></li>
            <li><a href="/careers" className="text-gray-300 hover:text-zion-cyan transition-colors">Careers</a></li>
            <li><a href="/partners" className="text-gray-300 hover:text-zion-cyan transition-colors">Partners</a></li>
            <li><a href="/news" className="text-gray-300 hover:text-zion-cyan transition-colors">News</a></li>
          </ul>
        </div>
        
        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="text-gray-300 hover:text-zion-cyan transition-colors">Help Center</a></li>
            <li><a href="/faq" className="text-gray-300 hover:text-zion-cyan transition-colors">FAQ</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-zion-cyan transition-colors">Contact</a></li>
            <li><a href="/status" className="text-gray-300 hover:text-zion-cyan transition-colors">System Status</a></li>
            <li><a href="/security" className="text-gray-300 hover:text-zion-cyan transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-300 hover:text-zion-cyan transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-300 hover:text-zion-cyan transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-gray-300 hover:text-zion-cyan transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-overview" element={<ServicesOverview />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                
                {/* Support & Legal Pages */}
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/status" element={<StatusPage />} />
                
                {/* Service pages */}
                <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
                <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
                <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;