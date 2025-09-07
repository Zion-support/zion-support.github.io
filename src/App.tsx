import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

// Service Pages
import AIServices from './pages/AIServices';
import ITServices from './pages/ITServices';
import MicroSaaS from './pages/MicroSaaS';
import Cybersecurity from './pages/Cybersecurity';
import CloudMigration from './pages/CloudMigration';
import MobileDevelopment from './pages/MobileDevelopment';

// Additional Pages
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <AccessibilityEnhancer>
            <Router>
              <ScrollToTop />
              <PerformanceMonitor />
              <div className="min-h-screen bg-background text-foreground" id="main-content">
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/pricing" element={<Pricing />} />
                  
                  {/* Service Routes */}
                  <Route path="/services/ai-services" element={<AIServices />} />
                  <Route path="/services/it-services" element={<ITServices />} />
                  <Route path="/services/micro-saas" element={<MicroSaaS />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                  <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                  
                  {/* Additional Routes */}
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/support" element={<Support />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;