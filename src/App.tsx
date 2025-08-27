import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages - comprehensive import list with enhanced chunking
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage.jsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage.jsx'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const Settings = React.lazy(() => import('./pages/Settings.jsx'));
const Signup = React.lazy(() => import('./pages/Signup.jsx'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.jsx'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.tsx'));
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025.jsx'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote.jsx'));

// Additional enhanced services from remote
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026.tsx'));

// Enhanced loading spinner with accessibility
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
      <div className="sr-only">Loading page content, please wait...</div>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-zion-slate-light mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  // Performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark">
        {/* Performance Monitor */}
        <PerformanceMonitor />
        
        {/* Enhanced Header */}
        <AppHeader />
        
        {/* Main Content */}
        <main className="pt-24">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />
              
              {/* Main Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/enhanced-services-2025" element={<EnhancedServicesPage />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              
              {/* Auth Pages */}
              <Route path="/login" element={<Login />} />
              
              {/* Service Pages */}
              <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/ultimate-innovative-services-showcase-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
              
              {/* Service Detail Pages */}
              <Route path="/services/:serviceId" element={<ServicesPage />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-services" element={<EnhancedServicesPage />} />
              <Route path="/cloud-devops" element={<EnhancedServicesPage />} />
              <Route path="/emerging-tech" element={<EnhancedServicesPage />} />
              <Route path="/solutions" element={<EnhancedServicesPage />} />
              
              {/* Revolutionary Services Routes */}
              <Route path="/revolutionary-services-2030" element={<RevolutionaryServicesShowcase2030 />} />
              
              {/* Company Routes */}
              <Route path="/leadership" element={<About />} />
              <Route path="/news" element={<About />} />
              <Route path="/case-studies" element={<About />} />
              <Route path="/partners" element={<About />} />
              
              {/* Resources Routes */}
              <Route path="/docs" element={<About />} />
              <Route path="/api" element={<About />} />
              <Route path="/help" element={<About />} />
              <Route path="/training" element={<About />} />
              <Route path="/webinars" element={<About />} />
              <Route path="/white-papers" element={<About />} />
              <Route path="/research" element={<About />} />
              
              {/* Industry Solutions Routes */}
              <Route path="/solutions/healthcare" element={<EnhancedServicesPage />} />
              <Route path="/solutions/financial" element={<EnhancedServicesPage />} />
              <Route path="/solutions/manufacturing" element={<EnhancedServicesPage />} />
              <Route path="/solutions/retail" element={<EnhancedServicesPage />} />
              <Route path="/solutions/transportation" element={<EnhancedServicesPage />} />
              <Route path="/solutions/energy" element={<EnhancedServicesPage />} />
              <Route path="/solutions/real-estate" element={<EnhancedServicesPage />} />
              <Route path="/solutions/agriculture" element={<EnhancedServicesPage />} />
              
              {/* 404 Route */}
              <Route path="*" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Enhanced Footer */}
        <Footer />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;