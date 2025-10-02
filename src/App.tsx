import React, { JSX, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './app/components/Navigation';
import ErrorBoundary from './src/components/ErrorBoundary';
import { PageLoader } from './src/components/LoadingSpinner';
import './app/globals.css';
import ConsensusIntelligenceBreakthroughBanner from "./components/ConsensusIntelligenceBreakthroughBanner"
import AutonomousEnterpriseBreakthroughBanner from "./components/AutonomousEnterpriseBreakthroughBanner"
import June2026MegaBreakthroughBanner from "./components/June2026MegaBreakthroughBanner"
import QuantumConsciousnessRevolutionBanner from "./components/QuantumConsciousnessRevolutionBanner"
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
const LazyAIInvoiceProcessingPage = React.lazy(() => import('./app/services/ai-invoice-processing-saas/page'));
const LazyComprehensiveITServicesPage = React.lazy(() => import('./app/services/comprehensive-it-services/page'));
const LazyContactPage = React.lazy(() => import('./app/contact/page'));
const LazyAboutPage = React.lazy(() => import('./app/about/page'));

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-slate-950">
          <Header />
          
          {/* NEW: June 2026 Mega Breakthrough Banner - Most Prominent */}
          <June2026MegaBreakthroughBanner />

          {/* NEW: Quantum Consciousness Revolution Banner - Revolutionary Technology */}
          <QuantumConsciousnessRevolutionBanner />

          {/* Existing Banners and Sections */}
          <ConsensusIntelligenceBreakthroughBanner />
          <AutonomousEnterpriseBreakthroughBanner />
          
          <main className="min-h-screen">
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
                <Route path="/services/ai-invoice-processing-saas" element={<LazyAIInvoiceProcessingPage />} />
                <Route path="/services/comprehensive-it-services" element={<LazyComprehensiveITServicesPage />} />
                <Route path="/services/comprehensive-micro-saas-solutions" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">Comprehensive Micro SaaS Solutions</h1></div>} />
                <Route path="/services/ai-voice-assistant-platform" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">AI Voice Assistant Platform</h1></div>} />
                <Route path="/services/ai-document-automation-platform" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">AI Document Automation Platform</h1></div>} />
                <Route path="/services/ai-business-intelligence-platform" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">AI Business Intelligence Platform</h1></div>} />
                <Route path="/comprehensive-micro-saas-services" element={<LazyServicesPage />} />
                <Route path="/comprehensive-it-services" element={<LazyComprehensiveITServicesPage />} />
                <Route path="/case-studies" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">Case Studies</h1></div>} />
                <Route path="/contact" element={<LazyContactPage />} />
                <Route path="/about" element={<LazyAboutPage />} />
                <Route path="*" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">404 - Page Not Found</h1></div>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}