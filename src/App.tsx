import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

// Essential lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Company information pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));

// New comprehensive services pages
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesOverview2025 = lazy(() => import('./pages/ComprehensiveServicesOverview2025'));

// Additional pages
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Support = lazy(() => import('./pages/Support'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services-showcase" element={<ServicesShowcase />} />
                
                {/* New Comprehensive Services Routes */}
                <Route path="/enhanced-services-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} />
                <Route path="/comprehensive-services-overview-2025" element={<ComprehensiveServicesOverview2025 />} />
                
                {/* Company Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/blog" element={<Blog />} />
                
                {/* Support & Legal */}
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
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