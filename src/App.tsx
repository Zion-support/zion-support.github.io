import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import EnhancedSEO from './components/EnhancedSEO';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));

// Company information pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const AdvancedServices2025 = lazy(() => import('./pages/AdvancedServices2025'));
const AdvancedServicesShowcase2025 = lazy(() => import('./pages/AdvancedServicesShowcase2025'));
const ComprehensivePricing2025 = lazy(() => import('./pages/ComprehensivePricing2025'));
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensiveServicesOverview2025 = lazy(() => import('./pages/ComprehensiveServicesOverview2025'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));

// Additional pages
const Community = lazy(() => import('./pages/CommunityPage'));
const Status = lazy(() => import('./pages/Status'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  // Performance optimization: Preload critical routes
  useEffect(() => {
    const preloadCriticalRoutes = () => {
      // Preload critical pages
      const criticalRoutes = [
        () => import('./pages/Services'),
        () => import('./pages/Contact')
      ];
      
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          criticalRoutes.forEach(preload => preload());
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          criticalRoutes.forEach(preload => preload());
        }, 1000);
      }
    };

    preloadCriticalRoutes();
  }, []);

  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            {/* Enhanced SEO */}
            <EnhancedSEO 
              title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
              description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
              keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
              type="website"
              url="https://ziontechgroup.com"
            />
            
            <Header />
            <Sidebar />
            
            <main className="pt-20">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  
                  {/* Missing pages from analysis */}
                  <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                  <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                  
                  {/* Company Routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mission" element={<Mission />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/news" element={<News />} />
                  
                  {/* Additional Routes */}
                  <Route path="/community" element={<Community />} />
                  <Route path="/status" element={<Status />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <SonnerToaster />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
}

export default App;