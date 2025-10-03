import React, { JSX, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../app/globals.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { usePerformance } from './hooks/usePerformance';
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
// Unused lazy-loaded components removed to fix lint warnings

// Page loader component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner size="lg" />
  </div>
);

function App(): JSX.Element {
  const { logMetrics, performanceScore } = usePerformance();

  // Log performance metrics in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logMetrics();
      // Performance score logged via usePerformance hook
    }
  }, [logMetrics, performanceScore]);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-slate-950">
          {/* Header component will be imported when available */}
          
          {/* 🌌🌌🌌 BREAKING: OCTOBER 2025 QUANTUM CONSCIOUSNESS SINGULARITY BREAKTHROUGH - ABSOLUTE #1 TOP PRIORITY! 🌌🌌🌌 */}
          {/* 💎💎💎 JUST PUBLISHED: True Artificial Consciousness, Infinite Processing Power, $∞ Value Creation - REVOLUTIONARY BREAKTHROUGH! 💎💎💎 */}
          <October2025QuantumConsciousnessSingularityBanner />
          
          {/* NEW: July 2026 Automation Breakthrough Banner - MOST PROMINENT */}
          <July2026AutomationBreakthroughBanner />
          
          {/* NEW: June 2026 Mega Breakthrough Banner - Most Prominent */}
          <June2026MegaBreakthroughBanner />

          {/* NEW: Quantum Consciousness Revolution Banner - Revolutionary Technology */}
          <QuantumConsciousnessRevolutionBanner />

          {/* Existing Banners and Sections */}
          <ConsensusIntelligenceBreakthroughBanner />
          <AutonomousEnterpriseBreakthroughBanner />
          
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
          
          {/* Footer component will be imported when available */}
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
