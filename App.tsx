import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import LoadingSpinner from './src/components/LoadingSpinner';
import ErrorBoundary from './src/components/ErrorBoundary';

// Import existing pages
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Services from './src/pages/Services';
import FAQ from './src/pages/FAQ';
import Careers from './src/pages/Careers';
import Privacy from './src/pages/Privacy';
import Terms from './src/pages/Terms';
import Cookies from './src/pages/Cookies';
import Pricing from './src/pages/Pricing';
import RequestQuote from './src/pages/RequestQuote';
import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import News from './src/pages/News';
import Help from './src/pages/Help';
import ComprehensivePricing from './src/pages/ComprehensivePricing';
import AIServices from './src/pages/AIServices';
import ITServices from './src/pages/ITServices';
import RevolutionaryServicesPage from './src/pages/RevolutionaryServicesPage';
import NewServicesShowcase2025 from './src/pages/NewServicesShowcase2025';
import EnhancedNewServices2025 from './src/pages/EnhancedNewServices2025';
import Sitemap from './src/pages/Sitemap';
import ComprehensiveSitemap from './src/pages/ComprehensiveSitemap';
import Support from './src/pages/Support';
import Training from './src/pages/Training';
import Helpdesk from './src/pages/Helpdesk';
import WhitePapers from './src/pages/WhitePapers';
import NotFound from './src/pages/NotFound';

// Lazy load pages for better performance
const SolutionsPage = lazy(() => import('./src/pages/Solutions').then(module => ({ default: module.default })));

function App() {
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

export default App;