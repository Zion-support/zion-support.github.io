<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AppRouter } from './router';
import './index.css';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
// Types and interfaces
interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}
=======
import React, { JSX, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../app/globals.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import { PageLoader } from './components/LoadingSpinner';
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
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37


function App(): JSX.Element {
  const { logMetrics, performanceScore } = usePerformance();

<<<<<<< HEAD
// Main App Component
const App: React.FC = () => {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  interface SEOData {
    title: string;
    description: string;
    canonical: string;
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles and initialization
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    
    // Initialize performance enhancements
    try {
      initializePerformanceEnhancements();
    } catch (error) {
      console.error('Error initializing enhancements:', error);
=======
  // Log performance metrics in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logMetrics();
      // Performance score logged via usePerformance hook
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37
    }
  }, [logMetrics, performanceScore]);

  return (
<<<<<<< HEAD
    <AccessibilityEnhancer>
      <EnhancedErrorBoundary>
        <EnhancedSEOHead 
          title={seoDataForOptimizer.title} 
          description={seoDataForOptimizer.description} 
          canonical={seoDataForOptimizer.canonical}
          keywords={['AI', 'IT Solutions', 'Enterprise Automation', 'Technology Services', 'Artificial Intelligence']}
          author="Zion Tech Group"
        />
        <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonical} />
        <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
        <PerformanceMonitor enabled={true} showMetrics={process.env.NODE_ENV === 'development'} />
        <div className="min-h-screen bg-white">
          <AppRouter />
        </div>

        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
            </div>
          </div>
        )}

        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceMonitor />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </EnhancedErrorBoundary>
    </AccessibilityEnhancer>
=======
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <Header />
          
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
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37
  );
};

export default App;
