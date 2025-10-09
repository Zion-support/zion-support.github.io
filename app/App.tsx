"use client";

import React, { Suspense, lazy, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

// Components

// Lazy load components for better performance
// const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026 = lazy(
//   () => import('./components/InteractiveContentShowcase2026')
// );
// const InteractiveAIROICalculator = lazy(
//   () => import('./components/InteractiveAIROICalculator')
// );

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ServicesPage = lazy(() => import("./services/page"));
const ContactPage = lazy(() => import("./contact/page"));
const TeamPage = lazy(() => import("./team/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const EnterprisePage = lazy(() => import("./enterprise/page"));
const ServicesAdvertisingPage = lazy(
  () => import("./services-advertising/page"),
);
const CaseStudiesPage = lazy(() => import("./case-studies/page"));

// Additional service pages
const AiServicesPage = lazy(() => import("./ai-services/page"));
const AiMarketingPage = lazy(() => import("./ai-marketing/page"));
const AiAutomationPage = lazy(() => import("./ai-automation/page"));
const AiHealthcarePage = lazy(() => import("./ai-healthcare/page"));
const AiFintechPage = lazy(() => import("./ai-fintech/page"));
const ItServicesPage = lazy(() => import("./it-services/page"));
const MicroSaasPage = lazy(() => import("./micro-saas/page"));
const QuantumComputingPage = lazy(() => import("./quantum-computing/page"));
const AutonomousSystemsPage = lazy(() => import("./autonomous-systems/page"));
const BlockchainWeb3Page = lazy(() => import("./blockchain-web3/page"));
const BlockchainPage = lazy(() => import("./blockchain/page"));
const CybersecurityPage = lazy(() => import("./cybersecurity/page"));
const BusinessIntelligencePage = lazy(
  () => import("./business-intelligence/page"),
);
const IotEdgeComputingPage = lazy(() => import("./iot-edge-computing/page"));
const IotEdgePage = lazy(() => import("./iot-edge/page"));
const RoboticsPage = lazy(() => import("./robotics/page"));

// Additional pages
const BlogPage = lazy(() => import("./blog-index"));
const GuidesPage = lazy(() => import("./guides/page"));
const SitemapPage = lazy(() => import("./sitemap/page"));
const NotFoundPage = lazy(() => import("./not-found"));
const OfflinePage = lazy(() => import("./offline/page"));

// Utils
import { logger } from "./utils/logger";
import {
  lazyLoadImages,
  preloadCriticalResources,
} from "./utils/performanceUtils";
import {
  performanceOptimizer,
  performanceMonitor,
} from "./utils/performanceUtils";
import { seoOptimizer } from "./utils/seoUtils";
import { accessibilityEnhancer } from "./utils/accessibilityUtils";
import { collectPerformanceMetrics } from "./utils/performanceUtils";

// Enhanced Components
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import SEOOptimizer from "./components/SEOOptimizer";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import UserExperienceEnhancer from "./components/UserExperienceEnhancer";
import SecurityEnhancer from "./components/SecurityEnhancer";

// Styles
import "./globals.css";

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== "undefined") {
      performanceOptimizer();
      performanceMonitor();
      seoOptimizer();
      accessibilityEnhancer();
      collectPerformanceMetrics();
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <SEOOptimizer />
        <AccessibilityEnhancer />
        <UserExperienceEnhancer />
        <SecurityEnhancer />

        {/* Main App Content */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
            </div>
          }
        >
          <HomePage />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;
