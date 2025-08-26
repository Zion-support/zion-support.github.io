import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

// Service showcase pages
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));
const ComprehensivePricing2027 = React.lazy(() => import('./pages/ComprehensivePricing2027'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const Zion2026ComprehensivePricingGuide = React.lazy(() => import('./pages/Zion2026ComprehensivePricingGuide'));
const Zion2026InnovativeServicesShowcase = React.lazy(() => import('./pages/Zion2026InnovativeServicesShowcase'));
const Zion2026ServicesOverview = React.lazy(() => import('./pages/Zion2026ServicesOverview'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const InnovativeServicesShowcase2028 = React.lazy(() => import('./pages/InnovativeServicesShowcase2028'));

function App() {
  return (
    <EnhancedErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request-quote" element={<RequestQuote />} />

            {/* Service Showcase Routes */}
            <Route path="/services/2025/enhanced-showcase" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/services/2025/comprehensive-pricing" element={<ComprehensivePricingGuide2025 />} />
            <Route path="/services/comprehensive-overview" element={<ComprehensiveServicesOverview />} />
            <Route path="/services/2027/all-services" element={<AllServices2027 />} />
            <Route path="/services/2027/comprehensive-pricing" element={<ComprehensivePricing2027 />} />
            <Route path="/services/2027/innovative-showcase" element={<InnovativeServicesShowcase2027 />} />
            <Route path="/services/2026/comprehensive-showcase" element={<ComprehensiveServicesShowcase2026 />} />
            <Route path="/services/2026/comprehensive-pricing" element={<Zion2026ComprehensivePricingGuide />} />
            <Route path="/services/2026/innovative-showcase" element={<Zion2026InnovativeServicesShowcase />} />
            <Route path="/services/2026/overview" element={<Zion2026ServicesOverview />} />
            <Route path="/services/2027/enhanced-innovative" element={<EnhancedInnovativeServicesShowcase2027 />} />
            <Route path="/services/2028/innovative-showcase" element={<InnovativeServicesShowcase2028 />} />
          </Routes>
        </Suspense>
      </Router>
    </EnhancedErrorBoundary>
  );
}

export default App;