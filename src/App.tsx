import React, { Suspense, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { EnhancedPerformanceMonitor } from './components/EnhancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import { SecurityEnhancer } from './components/SecurityEnhancer';
import { EnhancedInteractiveFeatures } from './components/EnhancedInteractiveFeatures';

// Core pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Team = React.lazy(() => import('./pages/Team'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Status = React.lazy(() => import('./pages/Status'));
const Events = React.lazy(() => import('./pages/Events'));
const News = React.lazy(() => import('./pages/News'));
const Help = React.lazy(() => import('./pages/Help'));
const Support = React.lazy(() => import('./pages/Support'));
const Training = React.lazy(() => import('./pages/Training'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));

// Service pages that exist
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = React.memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-semibold">Loading Zion Tech Group...</p>
      <p className="text-slate-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
));

EnhancedLoadingSpinner.displayName = 'EnhancedLoadingSpinner';

// Enhanced error boundary component
const AppErrorBoundary = React.memo(({ children }: { children: React.ReactNode }) => (
  <EnhancedErrorBoundary>
    {children}
  </EnhancedErrorBoundary>
));

AppErrorBoundary.displayName = 'AppErrorBoundary';

// Main App component with performance optimizations
const App = React.memo(() => {
  // Memoize the routes to prevent unnecessary re-renders
  const routes = useMemo(() => [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/services', element: <Services /> },
    { path: '/solutions', element: <Solutions /> },
    { path: '/case-studies', element: <CaseStudies /> },
    { path: '/white-papers', element: <WhitePapers /> },
    { path: '/webinars', element: <Webinars /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/privacy', element: <Privacy /> },
    { path: '/terms', element: <Terms /> },
    { path: '/team', element: <Team /> },
    { path: '/signup', element: <Signup /> },
    { path: '/status', element: <Status /> },
    { path: '/events', element: <Events /> },
    { path: '/news', element: <News /> },
    { path: '/help', element: <Help /> },
    { path: '/support', element: <Support /> },
    { path: '/training', element: <Training /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/services-catalog', element: <ServicesCatalog /> },
    { path: '/services-overview', element: <ServicesOverview /> },
    { path: '/services-comparison', element: <ServicesComparisonPage /> },
    { path: '/revolutionary-services-2030', element: <RevolutionaryServices2030 /> },
    { path: '/revolutionary-services-showcase-2030', element: <RevolutionaryServicesShowcase2030 /> },
    { path: '/comprehensive-services-showcase-2026', element: <ComprehensiveServicesShowcase2026 /> },
    { path: '/comprehensive-pricing-guide-2027', element: <ComprehensivePricingGuide2027 /> },
    { path: '/innovative-services-showcase-2025', element: <InnovativeServicesShowcase2025 /> },
    { path: '/schedule-demo', element: <ScheduleDemo /> },
    { path: '/services/cloud-devops', element: <CloudDevOps /> },
    { path: '/services/digital-transformation', element: <DigitalTransformation /> },
    { path: '/services/ai-supply-chain-optimization', element: <AISupplyChainOptimization /> },
  ], []);

  // Memoize the route elements to prevent unnecessary re-renders
  const routeElements = useMemo(() => 
    routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    )), [routes]
  );

  // Memoize the header and footer to prevent unnecessary re-renders
  const header = useMemo(() => <AppHeader />, []);
  const footer = useMemo(() => <Footer />, []);

  // Memoize the chat assistant to prevent unnecessary re-renders
  const chatAssistant = useMemo(() => <ChatAssistant />, []);

  // Memoize the performance components to prevent unnecessary re-renders
  const performanceComponents = useMemo(() => (
    <>
      <PerformanceOptimizer />
      <EnhancedPerformanceMonitor />
      <InteractiveUserExperience />
      <SecurityEnhancer />
      <EnhancedAccessibilityPanel />
      <EnhancedInteractiveFeatures />
    </>
  ), []);

  return (
    <AppErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {header}
          
          <main className="flex-1">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <Routes>
                {routeElements}
              </Routes>
            </Suspense>
          </main>

          {footer}
          {chatAssistant}
          {performanceComponents}
        </div>
      </Router>
    </AppErrorBoundary>
  );
});

App.displayName = 'App';

export default App;