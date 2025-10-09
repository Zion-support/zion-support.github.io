'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

// Lazy load components for better performance

// Lazy load pages for better performance
const _HomePage = lazy(() => import('./page'));
const _AboutPage = lazy(() => import('./about/page'));
const _ServicesPage = lazy(() => import('./services/page'));
const _ContactPage = lazy(() => import('./contact/page'));
const _TeamPage = lazy(() => import('./team/page'));
const _PrivacyPage = lazy(() => import('./privacy/page'));
const _TermsPage = lazy(() => import('./terms/page'));
const _EnterprisePage = lazy(() => import('./enterprise/page'));
const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const _CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services Pages
const _AIServicesPage = lazy(() => import('./ai-services/page'));
const _AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const _AIAutomationPage = lazy(() => import('./ai-automation/page'));
const _AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const _AIFintechPage = lazy(() => import('./ai-fintech/page'));
const _AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const _AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const _AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const _AICloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const _AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const _AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));

// IT Services Pages
const _ITServicesPage = lazy(() => import('./it-services/page'));
const _MicroSAASPage = lazy(() => import('./micro-saas/page'));
const _CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const _CloudServicesPage = lazy(() => import('./cloud-services/page'));
const _DevOpsPage = lazy(() => import('./devops/page'));
const _DatabasePage = lazy(() => import('./database/page'));
const _NetworkingPage = lazy(() => import('./networking/page'));

// Additional Pages
const _SecurityPage = lazy(() => import('./security/page'));
const _CareersPage = lazy(() => import('./careers/page'));
const _SupportPage = lazy(() => import('./support/page'));
const _CookiesPage = lazy(() => import('./cookies/page'));
const _GDPRPage = lazy(() => import('./gdpr/page'));
const _CompliancePage = lazy(() => import('./compliance/page'));
const _StatusPage = lazy(() => import('./status/page'));
const _SystemStatusPage = lazy(() => import('./system-status/page'));
const _DocsPage = lazy(() => import('./docs/page'));
const _APIPage = lazy(() => import('./api/page'));
const _APIDocsPage = lazy(() => import('./api-docs/page'));
const _NewsPage = lazy(() => import('./news/page'));
const _DeveloperToolsPage = lazy(() => import('./developer-tools/page'));
const _BusinessAppsPage = lazy(() => import('./business-apps/page'));
const _ProductivityPage = lazy(() => import('./productivity/page'));
const _MarketingToolsPage = lazy(() => import('./marketing-tools/page'));

// Specialized Technology Pages
const _QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const _AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const _BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const _BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const _IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));

// Additional Pages
const _BlogPage = lazy(() => import('./blog-index'));
const _SitemapPage = lazy(() => import('./sitemap/page'));

// Utils
import { logger } from './utils/logger';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
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
      // const performanceMetrics = performanceMonitor.getMetrics();
      
      if (pageLoadMetrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
      }
      // Performance metrics logging removed for production
    }
    
    // Log performance and accessibility metrics periodically
    const metricsInterval = setInterval(() => {
      // const performanceMetrics = performanceMonitor.getMetrics();
      const accessibilityMetrics = accessibilityEnhancer.getMetrics();
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance Score:', performanceMonitor.getScore());
        // eslint-disable-next-line no-console
        console.log('Accessibility Score:', accessibilityMetrics.overallScore);
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
  );
};

export default App;