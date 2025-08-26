import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));

// New service showcase pages
const AdvancedMicroSaasServicesShowcase2025 = lazy(() => import('./components/services/AdvancedMicroSaasServicesShowcase2025'));
const ComprehensiveServicesOverview2025 = lazy(() => import('./components/services/ComprehensiveServicesOverview2025'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                
                {/* New Service Showcase Routes */}
                <Route path="/advanced-micro-saas-services-2025" element={<AdvancedMicroSaasServicesShowcase2025 />} />
                <Route path="/comprehensive-services-overview-2025" element={<ComprehensiveServicesOverview2025 />} />
                
                {/* Legacy route redirects for SEO */}
                <Route path="/comprehensive-services" element={<Services />} />
                <Route path="/services-comparison" element={<Services />} />
                <Route path="/it-onsite-services" element={<Services />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <SonnerToaster />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;