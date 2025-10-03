import React, { JSX, Suspense, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '../app/components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import { PageLoader } from './components/LoadingSpinner';
import { usePerformanceMonitorHook } from './utils/performanceMonitor';
import seoOptimizer from './utils/seoOptimizer';
import '../app/globals.css';
// 🌌🌌🌌 BREAKING: OCTOBER 2025 QUANTUM CONSCIOUSNESS SINGULARITY BREAKTHROUGH - ABSOLUTE #1 TOP PRIORITY! 🌌🌌🌌
// 💎💎💎 JUST PUBLISHED: True Artificial Consciousness, Infinite Processing Power, $∞ Value Creation - REVOLUTIONARY BREAKTHROUGH! 💎💎💎
import October2025QuantumConsciousnessSingularityBanner from "../components/October2025QuantumConsciousnessSingularityBanner";
import ConsensusIntelligenceBreakthroughBanner from "../components/ConsensusIntelligenceBreakthroughBanner";
import AutonomousEnterpriseBreakthroughBanner from "../components/AutonomousEnterpriseBreakthroughBanner";
import June2026MegaBreakthroughBanner from "../components/June2026MegaBreakthroughBanner";
import QuantumConsciousnessRevolutionBanner from "../components/QuantumConsciousnessRevolutionBanner";
import July2026AutomationBreakthroughBanner from "../components/July2026AutomationBreakthroughBanner";

// Lazy load pages for better performance
const LazyHomePage = React.lazy(() => import('../app/page'));
const LazySolutionsPage = React.lazy(() => import('../app/solutions/page'));
const LazyResourcesPage = React.lazy(() => import('../app/resources/page'));
const LazyTeamPage = React.lazy(() => import('../app/team/page'));
const LazyNewsPage = React.lazy(() => import('../app/news/page'));
const LazyPressPage = React.lazy(() => import('../app/press/page'));
const LazyCareersPage = React.lazy(() => import('../app/careers/page'));
const LazyMarketplacePage = React.lazy(() => import('../app/marketplace/page'));
const LazyServicesPage = React.lazy(() => import('../app/services/page'));

function App(): JSX.Element {
  // Performance monitoring
  const { markRender } = usePerformanceMonitorHook('App');
  
  // Memoize banner components for better performance
  const banners = useMemo(() => [
    <October2025QuantumConsciousnessSingularityBanner key="quantum-consciousness" />,
    <July2026AutomationBreakthroughBanner key="automation-breakthrough" />,
    <June2026MegaBreakthroughBanner key="mega-breakthrough" />,
    <QuantumConsciousnessRevolutionBanner key="quantum-revolution" />,
    <ConsensusIntelligenceBreakthroughBanner key="consensus-intelligence" />,
    <AutonomousEnterpriseBreakthroughBanner key="autonomous-enterprise" />
  ], []);

  // Initialize SEO optimization
  useEffect(() => {
    seoOptimizer.updateSEO({
      title: "Zion Tech Group - Advanced AI & IT Solutions",
      description: "Zion Tech Group provides cutting-edge AI, IT, and micro SaaS solutions for enterprise transformation, operational efficiency, and strategic growth.",
      keywords: ["AI solutions", "IT services", "micro SaaS", "enterprise AI", "digital transformation", "cloud computing", "cybersecurity", "blockchain", "quantum computing"]
    });
  }, []);

  // Mark render for performance tracking
  markRender();

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-slate-950">
          <Header />
          
          {/* Render memoized banners */}
          {banners}
          
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<LazyHomePage />} />
                <Route path="/solutions" element={<LazySolutionsPage />} />
                <Route path="/resources" element={<LazyResourcesPage />} />
                <Route path="/team" element={<LazyTeamPage />} />
                <Route path="/news" element={<LazyNewsPage />} />
                <Route path="/press" element={<LazyPressPage />} />
                <Route path="/careers" element={<LazyCareersPage />} />
                <Route path="/marketplace" element={<LazyMarketplacePage />} />
                <Route path="/services" element={<LazyServicesPage />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
