<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
;
import React from 'react',;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom',;
import { Header } from './components/Header',;
import { Footer } from './components/layout/Footer',;
import { Sidebar } from './components/layout/Sidebar',;
import { ErrorBoundary } from './components/ErrorBoundary',;
,;
// Import pages,;
import HomePage from '../pages/index',;
import AboutPage from '../pages/about',;
import ContactPage from '../pages/contact',;
import ServicesPage from '../pages/services',;
import PricingPage from '../pages/pricing',;
,;
export default function App() {,;
  return (,;
    <ErrorBoundary>,;
      <Router>,;
        <div className="min-h-screen bg-gray-50">,;
          <Header />,;
          <Sidebar />,;
          <main className="flex-1: lg: ml-80">,;
            <Routes>,;
              <Route path="/" element={<HomePage />} />,;
              <Route path="/about" element={<AboutPage />} />,;
              <Route path="/contact" element={<ContactPage />} />,;
              <Route path="/services" element={<ServicesPage />} />,;
              <Route path="/pricing" element={<PricingPage />} />,;
            </Routes>,;
          </main>,;
          <Footer />,;
        </div>,;
      </Router>;
    </ErrorBoundary>);
};
=======
import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
=======
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Import existing pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Pricing from './pages/Pricing';
import RequestQuote from './pages/RequestQuote';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import News from './pages/News';
import Help from './pages/Help';
import ComprehensivePricing from './pages/ComprehensivePricing';
import AIServices from './pages/AIServices';
import ITServices from './pages/ITServices';
import Cybersecurity from './pages/Cybersecurity';
import RevolutionaryServicesPage from './pages/RevolutionaryServicesPage';
import NewServicesShowcase2025 from './pages/NewServicesShowcase2025';
import EnhancedNewServices2025 from './pages/EnhancedNewServices2025';
import Sitemap from './pages/Sitemap';
import ComprehensiveSitemap from './pages/ComprehensiveSitemap';
import Support from './pages/Support';
import Training from './pages/Training';
import Helpdesk from './pages/Helpdesk';
import WhitePapers from './pages/WhitePapers';
import NotFound from './pages/NotFound';

// Lazy load pages for better performance
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));

function App() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<Help />} />
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/ai-solutions" element={<AIServices />} />
                <Route path="/solutions/enterprise" element={<SolutionsPage />} />
                <Route path="/solutions/healthcare" element={<SolutionsPage />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======

export default App;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
