import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { Toaster } from './components/ui/toaster';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import EnhancedScrollToTop from './components/EnhancedScrollToTop';
import { EnhancedLoading } from './components/EnhancedLoading';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
// Temporarily commented out problematic imports
// const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
// const AdvancedServices2025 = lazy(() => import('./pages/AdvancedServices2025'));
// const AdvancedServicesShowcase2025 = lazy(() => import('./pages/AdvancedServicesShowcase2025'));
// const ComprehensivePricing2025 = lazy(() => import('./pages/ComprehensivePricing2025'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));
const Careers = lazy(() => import('./pages/Careers'));
const Leadership = lazy(() => import('./pages/Leadership'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load service pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const Consulting = lazy(() => import('./pages/services/Consulting'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light flex items-center justify-center">
    <EnhancedLoading 
      size="xl" 
      variant="futuristic" 
      text="Loading Zion Tech Group"
      showProgress={true}
      progress={85}
    />
  </div>
);

function App() {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  // Toggle performance monitor with keyboard shortcut (Ctrl+Shift+P)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowPerformanceMonitor(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-background">
        <Header />
        <main className="pt-16 lg:pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              {/* Temporarily commented out problematic routes
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
              <Route path="/advanced-services-showcase-2025" element={<AdvancedServicesShowcase2025 />} />
              <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
              */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/news" element={<News />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/leadership" element={<Leadership />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudDevOps />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<Consulting />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActionButton />
        <EnhancedScrollToTop />
      </div>
    </Router>
  );
}

export default App;