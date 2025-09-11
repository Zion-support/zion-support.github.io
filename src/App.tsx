import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';
import LoadingSpinner from './components/LoadingSpinner';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { ErrorBoundary as CustomErrorBoundary } from './components/ErrorMonitor';

// Loading component
const LoadingSpinnerComponent = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600'></div>
  </div>
);

// Optimized lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinnerComponent />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/Help'));
const PrivacyPolicy = createLazyComponent(() => import('./pages/PrivacyPolicy'));
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Additional required components
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const DataProtection = createLazyComponent(() => import('./pages/DataProtection'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const SystemStatus = createLazyComponent(() => import('./pages/SystemStatus'));
const Search = createLazyComponent(() => import('./pages/Search'));
const Categories = createLazyComponent(() => import('./pages/Categories'));

// Service pages with error handling
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity').catch(() => ({ default: () => <div>Error loading Cybersecurity page</div> })));
const CloudMigration = React.lazy(() => import('./pages/CloudMigrationServices').catch(() => ({ default: () => <div>Error loading Cloud Migration page</div> })));
const DevOps = React.lazy(() => import('./pages/CloudDevOpsServices').catch(() => ({ default: () => <div>Error loading DevOps page</div> })));
const MobileDevelopment = React.lazy(() => import('./pages/MobileAppPage').catch(() => ({ default: () => <div>Error loading Mobile Development page</div> })));

// Additional service pages with error handling
const AIEmailResponder = lazy(() => import('./pages/services/ai-email-responder').catch(() => ({ default: () => <div>Error loading AI Email Responder</div> })));
const MobileSurveyTool = lazy(() => import('./pages/services/mobile-survey-tool').catch(() => ({ default: () => <div>Error loading Mobile Survey Tool</div> })));
const AITalentMatching = lazy(() => import('./pages/services/ai-talent-matching').catch(() => ({ default: () => <div>Error loading AI Talent Matching</div> })));
const EcommerceReturnManagement = lazy(() => import('./pages/services/ecommerce-return-management').catch(() => ({ default: () => <div>Error loading Ecommerce Return Management</div> })));
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation').catch(() => ({ default: () => <div>Error loading AI Content Creation</div> })));
const CloudDevOpsServices = lazy(() => import('./pages/services/CloudDevOpsServices').catch(() => ({ default: () => <div>Error loading Cloud DevOps Services</div> })));
const CybersecurityServices = lazy(() => import('./pages/services/CybersecurityServices').catch(() => ({ default: () => <div>Error loading Cybersecurity Services</div> })));
const AICustomerServiceAutomation = lazy(() => import('./pages/services/AICustomerServiceAutomation').catch(() => ({ default: () => <div>Error loading AI Customer Service Automation</div> })));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
    <div className='text-center text-white max-w-md mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-4 text-red-400'>Something went wrong</h1>
      <p className='text-gray-300 mb-6'>
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className='space-y-3'>
        <button
          onClick={resetErrorBoundary}
          className='w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors'
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className='w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);

const App = memo(() => {
  const { metrics, trackInteraction } = usePerformance('App', {
    measureRender: true,
    measureInteraction: true,
    logMetrics: process.env.NODE_ENV === 'development',
  });

  // Initialize performance monitoring
  React.useEffect(() => {
    const cleanup = () => {
      performanceMonitor.cleanup();
    };
    
    return cleanup;
  }, []);

  return (
    <HelmetProvider>
      <ErrorMonitorProvider>
        <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
          <AccessibilityEnhancer>
            <Router>
              <div 
                className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
                onClick={() => trackInteraction('app-click')}
              >
                <PerformanceMonitor />
                <EnhancedHeader />
                <div className='flex'>
                  <Sidebar />
                  <main className='flex-1'>
                    <Suspense fallback={<LoadingSpinnerComponent />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/partners" element={<Partners />} />
                        <Route path="/help" element={<HelpCenter />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/webinars" element={<Webinars />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/sitemap" element={<Sitemap />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/cookies" element={<Cookies />} />
                        <Route path="/data-protection" element={<DataProtection />} />
                        <Route path="/accessibility" element={<Accessibility />} />
                        <Route path="/system-status" element={<SystemStatus />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/categories" element={<Categories />} />
                        
                        {/* Service routes */}
                        <Route path="/cybersecurity" element={<Cybersecurity />} />
                        <Route path="/cloud-migration" element={<CloudMigration />} />
                        <Route path="/devops" element={<DevOps />} />
                        <Route path="/mobile-development" element={<MobileDevelopment />} />
                        
                        {/* Additional service routes */}
                        <Route path="/services/ai-email-responder" element={<AIEmailResponder />} />
                        <Route path="/services/mobile-survey-tool" element={<MobileSurveyTool />} />
                        <Route path="/services/ai-talent-matching" element={<AITalentMatching />} />
                        <Route path="/services/ecommerce-return-management" element={<EcommerceReturnManagement />} />
                        <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                        <Route path="/services/cloud-devops-services" element={<CloudDevOpsServices />} />
                        <Route path="/services/cybersecurity-services" element={<CybersecurityServices />} />
                        <Route path="/services/ai-customer-service-automation" element={<AICustomerServiceAutomation />} />
                      </Routes>
                    </Suspense>
                  </main>
                </div>
                <EnhancedFooter />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </ErrorMonitorProvider>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;