import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// 2027 Innovation Services
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricing2027 = lazy(() => import('./pages/ComprehensivePricing2027'));
const AllServices2027 = lazy(() => import('./pages/AllServices2027'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 2027 Innovation Services */}
          <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
          <Route path="/comprehensive-pricing-2027" element={<ComprehensivePricing2027 />} />
          <Route path="/all-services-2027" element={<AllServices2027 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;