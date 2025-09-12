import React, { Suspense, lazy, useEffect, memo, useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  return lazy(importFn);
};

// Lazy load pages for better performance
const Home = createLazyComponent(() => import('./pages/Home').then(module => ({ default: module.default })));
const About = createLazyComponent(() => import('./pages/About').then(module => ({ default: module.default })));
const Contact = createLazyComponent(() => import('./pages/Contact').then(module => ({ default: module.default })));
const Services = createLazyComponent(() => import('./pages/Services').then(module => ({ default: module.default })));
const Solutions = createLazyComponent(() => import('./pages/Solutions').then(module => ({ default: module.default })));
const FAQ = createLazyComponent(() => import('./pages/FAQ').then(module => ({ default: module.default })));
const Privacy = createLazyComponent(() => import('./pages/Privacy').then(module => ({ default: module.default })));
const Terms = createLazyComponent(() => import('./pages/Terms').then(module => ({ default: module.default })));
const Cookies = createLazyComponent(() => import('./pages/Cookies').then(module => ({ default: module.default })));
const Pricing = createLazyComponent(() => import('./pages/Pricing').then(module => ({ default: module.default })));
const Help = createLazyComponent(() => import('./pages/Help').then(module => ({ default: module.default })));
const News = createLazyComponent(() => import('./pages/News').then(module => ({ default: module.default })));
const Careers = createLazyComponent(() => import('./pages/Careers').then(module => ({ default: module.default })));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers').then(module => ({ default: module.default })));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote').then(module => ({ default: module.default })));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard').then(module => ({ default: module.default })));
const Login = createLazyComponent(() => import('./pages/Login').then(module => ({ default: module.default })));
const BlogPage = createLazyComponent(() => import('./pages/BlogPage').then(module => ({ default: module.default })));
const ComprehensivePricing = createLazyComponent(() => import('./pages/ComprehensivePricing').then(module => ({ default: module.default })));

// Service Pages
const AISolutions = createLazyComponent(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));
const QuantumComputing = createLazyComponent(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));
const Cybersecurity = createLazyComponent(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.Cybersecurity })));

// Additional service components
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

// Enhanced Error Boundary Component
const EnhancedErrorBoundary: React.FC<{
  children: React.ReactNode;
  fallback: React.ComponentType<any>;
  showDetails?: boolean;
  enableReporting?: boolean;
}> = ({ children, fallback: FallbackComponent, showDetails = false, enableReporting = false }) => {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={(error, errorInfo) => {
        if (enableReporting) {
          console.error('Application Error:', error, errorInfo);
          // Here you could send to error reporting service
        }
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

const App: React.FC = memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize performance optimizations
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/src/pages/Home.tsx',
        '/src/pages/Services.tsx',
        '/src/pages/About.tsx'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'script';
        document.head.appendChild(link);
      });
    };

    // Enable lazy loading optimizations
    const enableLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    preloadCriticalResources();
    enableLazyLoading();
  }, []);

  // Memoize error boundary fallback
  const errorFallback = useCallback(({ error, resetErrorBoundary }: any) => (
    <div className="error-boundary min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="error-boundary-content text-center p-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-6">{error?.message || 'An unexpected error occurred'}</p>
        <button 
          onClick={resetErrorBoundary}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  ), []);

  return (
    <EnhancedErrorBoundary 
      fallback={errorFallback}
      showDetails={process.env.NODE_ENV === 'development'}
      enableReporting={true}
    >
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          
          <div className="flex flex-1">
            <Sidebar 
              isOpen={isSidebarOpen} 
              onClose={() => setIsSidebarOpen(false)} 
            />
            
            <main className="flex-1 lg:ml-80 min-h-screen">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/search" element={<Services />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/resources" element={<Services />} />
                  <Route path="/case-studies" element={<Services />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/webinars" element={<Services />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/schedule-demo" element={<Contact />} />
                  <Route path="/community" element={<Services />} />
                  <Route path="/demo" element={<Services />} />
                  <Route path="/team" element={<About />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/help" element={<Help />} />
                  
                  {/* Pricing Routes */}
                  <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
                  
                  {/* Service Routes */}
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  
                  {/* Solution Routes */}
                  <Route path="/solutions/enterprise" element={<Solutions />} />
                  <Route path="/solutions/healthcare" element={<Solutions />} />
                  
                  {/* Service Detail Routes */}
                  <Route path="/services/cloud-devops" element={<Services />} />
                  <Route path="/services/digital-twin" element={<Services />} />
                  <Route path="/services/data-analytics" element={<Services />} />
                  <Route path="/services/it-infrastructure" element={<Services />} />
                  <Route path="/services/ai-business-intelligence" element={<Services />} />
                  <Route path="/services/ai-sales-copilot" element={<Services />} />
                  <Route path="/services/cloud-finops-optimizer" element={<Services />} />
                  <Route path="/services/ai-compliance-assistant" element={<Services />} />
                  <Route path="/services/ai-auto-email-responder" element={<Services />} />
                  <Route path="/services/mobile-feedback-surveys" element={<Services />} />
                  <Route path="/services/ai-compliance-copilot" element={<Services />} />
                  <Route path="/services/llm-content-studio" element={<Services />} />
                  <Route path="/services/finops-advisor" element={<Services />} />
                  <Route path="/services/returns-management" element={<Services />} />
                  <Route path="/services/email-sequencer" element={<Services />} />
                  <Route path="/services/podcast-transcription" element={<Services />} />
                  <Route path="/services/micro-crm" element={<Services />} />
                  <Route path="/services/website-analytics" element={<Services />} />
                  <Route path="/services/it-helpdesk" element={<Services />} />
                  <Route path="/services/affiliate-tracking" element={<Services />} />
                  <Route path="/services/mobile-survey" element={<Services />} />
                  <Route path="/services/ai-seo" element={<Services />} />
                  <Route path="/services/interview-assessment" element={<Services />} />
                  <Route path="/services/dsr-portal" element={<Services />} />
                  <Route path="/services/security-headers-csp" element={<Services />} />
                  <Route path="/services/ai-project-management" element={<Services />} />
                  <Route path="/services/ai-customer-support-automation" element={<Services />} />
                  <Route path="/services/ai-financial-analytics" element={<Services />} />
                  <Route path="/services/ai-marketing-automation" element={<Services />} />
                  <Route path="/services/ai-quantum-financial-trading" element={<Services />} />
                  <Route path="/services/ai-predictive-maintenance" element={<Services />} />
                  <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />
                  <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<Services />} />
                  <Route path="/services/ai-data-governance-platform" element={<Services />} />
                  <Route path="/services/ai-customer-experience-analytics" element={<Services />} />
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">404 - Page Not Found</h1></div>} />
                </Routes>
              </Suspense>
            </main>
          </div>
          
          <Footer />
          
          {/* Enhanced Components */}
          <PerformanceOptimizer />
          <EnhancedAccessibilityEnhancer />
          <MobileExperienceEnhancer />
          <ChatAssistant />
        </div>
      </Router>
    </EnhancedErrorBoundary>
  );
});

App.displayName = 'App';

export default App;