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
const CareersPage = lazy(() => import('./pages/careers'));
const NewsPage = lazy(() => import('./pages/news'));
const EventsPage = lazy(() => import('./pages/events'));
const BlogPage = lazy(() => import('./pages/blog'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const TermsPage = lazy(() => import('./pages/terms'));

// Service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));
const AIServices = lazy(() => import('./pages/ai-services/ai-services'));
const ITServices = lazy(() => import('./pages/it-services'));
const MicroSaasServices = lazy(() => import('./pages/micro-saas'));
const QuantumServices = lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = lazy(() => import('./pages/services/blockchain-development-platform'));
const CybersecurityServices = lazy(() => import('./pages/services/ai-cybersecurity-platform'));
const DataAnalyticsServices = lazy(() => import('./pages/services/data-analytics'));
const IoTEdgeServices = lazy(() => import('./pages/services/iot-edge-computing-platform'));
const DigitalTransformationServices = lazy(() => import('./pages/services/digital-transformation'));
const GreenITServices = lazy(() => import('./pages/services/green-it'));
const HealthcareTechServices = lazy(() => import('./pages/services/healthcare-tech'));
const SpaceTechServices = lazy(() => import('./pages/services/space-tech'));
const SustainabilityServices = lazy(() => import('./pages/services/sustainability'));
;
// Enhanced Header component
const Header = () => (
  <header className="bg-zion-slate-dark text-white shadow-lg">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
          <div className="relative group">
            <a href="/services" className="hover:text-cyan-400 transition-colors">Services</a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <a href="/services" className="block px-4 py-2 hover:bg-zion-slate transition-colors">All Services</a>
                <a href="/ai-services" className="block px-4 py-2 hover:bg-zion-slate transition-colors">AI Services</a>
                <a href="/it-services" className="block px-4 py-2 hover:bg-zion-slate transition-colors">IT Services</a>
                <a href="/micro-saas" className="block px-4 py-2 hover:bg-zion-slate transition-colors">Micro SaaS</a>
                <a href="/services/quantum-computing" className="block px-4 py-2 hover:bg-zion-slate transition-colors">Quantum Computing</a>
                <a href="/services/blockchain-development-platform" className="block px-4 py-2 hover:bg-zion-slate transition-colors">Blockchain</a>
                <a href="/services/ai-cybersecurity-platform" className="block px-4 py-2 hover:bg-zion-slate transition-colors">Cybersecurity</a>
              </div>
            </div>
          </div>
          <a href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
          <a href="/careers" className="hover:text-cyan-400 transition-colors">Careers</a>
          <a href="/news" className="hover:text-cyan-400 transition-colors">News</a>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="tel:+13024640950" className="text-sm hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
          <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
        </div>
      </div>
    </div>
  </header>
);
;
// Enhanced Footer component
const Footer = () => (
  <footer className="bg-zion-slate-dark text-white mt-auto">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
          <p className="text-gray-300 mb-4">
            Leading technology solutions provider specializing in AI, cybersecurity, 
            cloud infrastructure, and digital transformation services.
          </p>
          <div className="text-sm text-gray-300">
            <p>364 E Main St STE 1008</p>
            <p>Middletown DE 19709</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/ai-services" className="hover:text-cyan-400 transition-colors">AI Services</a></li>
            <li><a href="/it-services" className="hover:text-cyan-400 transition-colors">IT Services</a></li>
            <li><a href="/micro-saas" className="hover:text-cyan-400 transition-colors">Micro SaaS</a></li>
            <li><a href="/services/quantum-computing" className="hover:text-cyan-400 transition-colors">Quantum Computing</a></li>
            <li><a href="/services/blockchain-development-platform" className="hover:text-cyan-400 transition-colors">Blockchain</a></li>
            <li><a href="/services/ai-cybersecurity-platform" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
            <li><a href="/careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            <li><a href="/news" className="hover:text-cyan-400 transition-colors">News</a></li>
            <li><a href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</a></li>
            <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Phone: <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a></p>
            <p>Website: <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">ziontechgroup.com</a></p>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
;
function App() {
  return (
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
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Service Category Pages */}
            <Route path="/ai-services" element={<AIServices />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/micro-saas" element={<MicroSaasServices />} />
            
            {/* Individual Service Pages */}
            <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
            <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
            <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
            <Route path="/services/quantum-computing" element={<QuantumServices />} />
            <Route path="/services/blockchain-development-platform" element={<BlockchainServices />} />
            <Route path="/services/ai-cybersecurity-platform" element={<CybersecurityServices />} />
            <Route path="/services/data-analytics" element={<DataAnalyticsServices />} />
            <Route path="/services/iot-edge-computing-platform" element={<IoTEdgeServices />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformationServices />} />
            <Route path="/services/green-it" element={<GreenITServices />} />
            <Route path="/services/healthcare-tech" element={<HealthcareTechServices />} />
            <Route path="/services/space-tech" element={<SpaceTechServices />} />
            <Route path="/services/sustainability" element={<SustainabilityServices />} />
            
            {/* 404 Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
;
export default App;