import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { usePerformance } from './hooks/usePerformance';
import { ErrorBoundary as CustomErrorBoundary } from './components/ErrorMonitor';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { performanceMonitor } from './utils/performanceMonitor';

// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

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

// Import PlaceholderPage for missing components
import PlaceholderPage from './components/PlaceholderPage';

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./routes/Home'));
const About = createLazyComponent(() => import('./components/About'));
const Contact = createLazyComponent(() => import('./components/Contact'));
const Services = createLazyComponent(() => import('./components/Services'));

// Placeholder components for missing pages
const Team = () => <PlaceholderPage title="Our Team" description="Meet the talented individuals behind our success." />;
const Partners = () => <PlaceholderPage title="Our Partners" description="Strategic partnerships that drive innovation." />;
const HelpCenter = () => <PlaceholderPage title="Help Center" description="Find answers to common questions and get support." />;
const PrivacyPolicy = createLazyComponent(() => import('./legal/PrivacyPolicy'));
const TermsOfService = createLazyComponent(() => import('./legal/TermsOfService'));
const Pricing = () => <PlaceholderPage title="Pricing" description="Transparent pricing for all our services." />;
const Blog = () => <PlaceholderPage title="Blog" description="Latest insights and updates from our team." />;
const News = () => <PlaceholderPage title="News" description="Stay updated with our latest news and announcements." />;
const Careers = () => <PlaceholderPage title="Careers" description="Join our team and help shape the future of technology." />;
const Login = () => <PlaceholderPage title="Login" description="Access your account and manage your services." />;
const Marketplace = () => <PlaceholderPage title="Marketplace" description="Discover and purchase technology solutions." />;
const Documentation = () => <PlaceholderPage title="Documentation" description="Comprehensive guides and API documentation." />;
const Training = () => <PlaceholderPage title="Training" description="Enhance your skills with our training programs." />;
const Webinars = () => <PlaceholderPage title="Webinars" description="Join our educational webinars and workshops." />;
const Research = () => <PlaceholderPage title="Research" description="Cutting-edge research and development insights." />;
const Sitemap = () => <PlaceholderPage title="Sitemap" description="Navigate our website with ease." />;

// Additional required components
const FAQ = () => <PlaceholderPage title="FAQ" description="Frequently asked questions and answers." />;
const Privacy = createLazyComponent(() => import('./legal/PrivacyPolicy'));
const Terms = createLazyComponent(() => import('./legal/TermsOfService'));
const Cookies = () => <PlaceholderPage title="Cookie Policy" description="Learn about our cookie usage and preferences." />;
const DataProtection = () => <PlaceholderPage title="Data Protection" description="How we protect and handle your data." />;
const Accessibility = () => <PlaceholderPage title="Accessibility" description="Our commitment to digital accessibility." />;
const SystemStatus = () => <PlaceholderPage title="System Status" description="Real-time status of our services and systems." />;
const Search = () => <PlaceholderPage title="Search" description="Find what you're looking for across our platform." />;
const Categories = () => <PlaceholderPage title="Categories" description="Browse our services by category." />;

// Service pages with placeholder components
const Cybersecurity = () => <PlaceholderPage title="Cybersecurity Services" description="Comprehensive security solutions to protect your business." />;
const CloudMigration = () => <PlaceholderPage title="Cloud Migration Services" description="Seamless migration to the cloud with minimal downtime." />;
const DevOps = () => <PlaceholderPage title="DevOps Services" description="Streamline your development and deployment processes." />;
const MobileDevelopment = () => <PlaceholderPage title="Mobile Development" description="Custom mobile applications for iOS and Android." />;

// Additional service pages with placeholder components
const AIEmailResponder = () => <PlaceholderPage title="AI Email Responder" description="Automated email responses powered by artificial intelligence." />;
const MobileSurveyTool = () => <PlaceholderPage title="Mobile Survey Tool" description="Create and manage surveys on mobile devices." />;
const AITalentMatching = () => <PlaceholderPage title="AI Talent Matching" description="Match the right talent with the right opportunities using AI." />;
const EcommerceReturnManagement = () => <PlaceholderPage title="E-commerce Return Management" description="Streamline your return process with automated solutions." />;
const AIContentCreation = () => <PlaceholderPage title="AI Content Creation" description="Generate high-quality content using artificial intelligence." />;
const CloudDevOpsServices = () => <PlaceholderPage title="Cloud DevOps Services" description="Cloud-based DevOps solutions for modern applications." />;
const CybersecurityServices = () => <PlaceholderPage title="Cybersecurity Services" description="Advanced security solutions for your digital assets." />;
const AICustomerServiceAutomation = () => <PlaceholderPage title="AI Customer Service Automation" description="Automate customer service with intelligent chatbots and systems." />;

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
      <CustomErrorBoundary>
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
      </CustomErrorBoundary>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;