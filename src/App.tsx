import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnhancedLoading } from "./components/ui/enhanced-loading";
import { MainNavigation } from "./layout/MainNavigation";
import { Footer } from "./components/Footer";
import { ToastContainer } from "./components/ui/toast";
import { motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ExpandedServicesPage = lazy(() => import('./pages/ServicesShowcase'));
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesComparisonPage = lazy(() => import('./pages/ServicesComparison'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

// New enhanced service pages
const ComprehensiveITServices = lazy(() => import('./pages/ComprehensiveITServices'));
const EnhancedMicroSaasServices = lazy(() => import('./pages/EnhancedMicroSaasServices'));
const InnovativeAIServices = lazy(() => import('./pages/InnovativeAIServices'));
// const NotFound = lazy(() => import('./pages/NotFound'));

// Enhanced loading fallback
const EnhancedLoadingFallback = () => (
  <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
    <div className="text-center">
      <EnhancedLoading size="xl" text="Loading Zion Tech Group..." variant="pulse" className="mb-8"/>
      <motion.div
        className="mt-8 text-zion-slate-light text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Please wait while we prepare your experience...
      </motion.div>
    </div>
  </div>
);

const App = () => {
  useScrollToTop();

  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <MainNavigation />
            
            {/* Main Content with enhanced Suspense */}
            <main className="pt-20 min-h-screen">
              <Suspense fallback={<EnhancedLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services-showcase" element={<ExpandedServicesPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityServicesPage />} />
                  <Route path="/services-comparison" element={<ServicesComparisonPage />} />
                  <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                  
                  {/* New enhanced service routes */}
                  <Route path="/comprehensive-it-services" element={<ComprehensiveITServices />} />
                  <Route path="/enhanced-micro-saas" element={<EnhancedMicroSaasServices />} />
                  <Route path="/innovative-ai-services" element={<InnovativeAIServices />} />
                  
                  {/* Our enhanced service routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <ToastContainer />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
};

export default App;