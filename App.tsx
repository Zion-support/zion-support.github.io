import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import PerformanceDashboard from './app/components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './app/components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './app/components/AdvancedErrorBoundary';
import SEOEnhancer from './app/components/SEOEnhancer';
import AdvancedSEOOptimizer from './app/components/AdvancedSEOOptimizer';
import LoadingSpinner from './app/components/LoadingSpinner';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import Analytics from './app/components/Analytics';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const EnterprisePage = React.lazy(() => import('./app/enterprise/page'));
const ServicesAdvertisingPage = React.lazy(() => import('./app/services-advertising/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));

// AI Services Pages
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const AIMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AIFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AICloudInfrastructurePage = React.lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AIEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AIMobileAppDevelopmentPage = React.lazy(() => import('./app/ai-mobile-app-development/page'));

// IT Services Pages
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSAASPage = React.lazy(() => import('./app/micro-saas/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));

// Specialized Technology Pages
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'));
const BusinessIntelligencePage = React.lazy(() => import('./app/business-intelligence/page'));
const BlockchainWeb3Page = React.lazy(() => import('./app/blockchain-web3/page'));
const IoTEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'));

// Additional Pages
const BlogPage = React.lazy(() => import('./app/blog-index'));
const GuidesPage = React.lazy(() => import('./app/guides/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// Utils
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './app/utils/performanceOptimizer';
import { logger } from './app/utils/logger';
import performanceMonitor from './app/utils/performanceMonitor';
import seoOptimizer from './app/utils/seoOptimizer';
import accessibilityEnhancer from './app/utils/accessibilityEnhancer';

// Styles
import './app/globals.css';

const App: React.FC = () => {
  React.useEffect(() => {
    // Initialize global error handling
    logger.info('initialized', { component: 'App' });

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    performanceMonitor.init();
    
    // Initialize SEO optimization
    seoOptimizer.init();
    
    // Initialize accessibility enhancements
    accessibilityEnhancer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      const performanceMetrics = performanceMonitor.getMetrics();
      
      if (pageLoadMetrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
      }
      if (performanceMetrics) {
        // eslint-disable-next-line no-console
        console.log('Core Web Vitals:', performanceMetrics);
      }
    }
    
    // Log performance and accessibility metrics periodically - optimized
    const metricsInterval = setInterval(() => {
      if (process.env.NODE_ENV === 'development') {
        const performanceMetrics = performanceMonitor.getMetrics();
        const accessibilityMetrics = accessibilityEnhancer.getMetrics();
        
        if (performanceMetrics) {
          // eslint-disable-next-line no-console
          console.log('Performance Score:', performanceMonitor.getScore());
        }
        if (accessibilityMetrics) {
          // eslint-disable-next-line no-console
          console.log('Accessibility Score:', accessibilityMetrics.overallScore);
        }
      }
    }, 30000);
    
    logger.info('performance monitoring initialized', { component: 'App' });
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', { component: 'App' });

    return () => {
      // Cleanup
      performanceOptimizer.cleanup();
      performanceMonitor.cleanup();
      accessibilityEnhancer.cleanup();
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error(error.message, { error, errorInfo });
        }}
      >
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <SEOEnhancer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
            >
              <AdvancedSEOOptimizer
                config={{
                  title: 'Zion Tech Group - Advanced AI and IT Solutions',
                  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                  keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
                  canonicalUrl: 'https://ziontechgroup.com',
                  ogImage: 'https://ziontechgroup.com/og-image.jpg',
                  structuredData: {
                    '@type': 'TechCompany',
                    name: 'Zion Tech Group',
                    description: 'Advanced AI and IT Solutions Provider',
                    foundingDate: '2020',
                    numberOfEmployees: '50-100',
                    industry: 'Technology',
                    services: [
                      'AI Solutions',
                      'Digital Transformation',
                      'Cloud Services',
                      'Automation',
                      'Business Intelligence'
                    ]
                  }
                }}
                enableStructuredData={true}
                enableOpenGraph={true}
                enableTwitterCards={true}
                enableSchemaMarkup={true}
              />
              <Router>
                <div className="App">
                  <Analytics trackingId="G-XXXXXXXXXX" />
                  <Navigation />
                  <main id="main-content">
                    <React.Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/enterprise" element={<EnterprisePage />} />
                        <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/ai-marketing" element={<AIMarketingPage />} />
                        <Route path="/ai-automation" element={<AIAutomationPage />} />
                        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                        <Route path="/ai-fintech" element={<AIFintechPage />} />
                        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                        <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
                        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
                        
                        {/* IT Services Routes */}
                        <Route path="/it-services" element={<ITServicesPage />} />
                        <Route path="/micro-saas" element={<MicroSAASPage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        
                        {/* Specialized Technology Routes */}
                        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                        
                        {/* Additional Routes */}
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/guides" element={<GuidesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                      </Routes>
                    </React.Suspense>
                  </main>
                  <Footer />

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />
                  
                  {/* Advanced Performance Monitor */}
                  <AdvancedPerformanceMonitor
                    enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                    onMetricsUpdate={(metrics) => {
                      if (process.env['NODE_ENV'] === 'development') {
                        logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics });
                      }
                    }}
                  />
                </div>
              </Router>
            </SEOEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;