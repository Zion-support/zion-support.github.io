import React, { JSX, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './app/components/Navigation';
import ErrorBoundary from './src/components/ErrorBoundary';
import { PageLoader } from './src/components/LoadingSpinner';
import './app/globals.css';
import ConsensusIntelligenceBreakthroughBanner from "./components/ConsensusIntelligenceBreakthroughBanner";
import AutonomousEnterpriseBreakthroughBanner from "./components/AutonomousEnterpriseBreakthroughBanner";
import June2026MegaBreakthroughBanner from "./components/June2026MegaBreakthroughBanner";
import QuantumConsciousnessRevolutionBanner from "./components/QuantumConsciousnessRevolutionBanner";

// Lazy load pages for better performance
const LazyHomePage = React.lazy(() => import('./app/page'));
const LazySolutionsPage = React.lazy(() => import('./app/solutions/page'));
const LazyResourcesPage = React.lazy(() => import('./app/resources/page'));
const LazyTeamPage = React.lazy(() => import('./app/team/page'));
const LazyNewsPage = React.lazy(() => import('./app/news/page'));
const LazyPressPage = React.lazy(() => import('./app/press/page'));
const LazyCareersPage = React.lazy(() => import('./app/careers/page'));
const LazyMarketplacePage = React.lazy(() => import('./app/marketplace/page'));
const LazyServicesPage = React.lazy(() => import('./app/services/page'));

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <ConsensusIntelligenceBreakthroughBanner />
          <AutonomousEnterpriseBreakthroughBanner />
          <June2026MegaBreakthroughBanner />
          <QuantumConsciousnessRevolutionBanner />
          
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
