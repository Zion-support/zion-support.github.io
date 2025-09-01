import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance
const HomePage: any = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage: any = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const ServicesShowcase: any = lazy(() => import('./pages/services/ServicesShowcase').then(module => ({ default: module.default })));
const ComprehensivePricing: any = lazy(() => import('./pages/ComprehensivePricing2025').then(module => ({ default: module.default })));
const SimplePage: any = lazy(() => import('./pages/SimplePage').then(module => ({ default: module.default })));

// New Service Pages
const AIAutonomousCodeReview: any = lazy(() => import('./pages/services/ai-autonomous-code-review').then(module => ({ default: module.default })));
const AISupplyChainRiskManagement: any = lazy(() => import('./pages/services/ai-supply-chain-risk-management').then(module => ({ default: module.default })));
const QuantumFinancialTradingPlatform: any = lazy(() => import('./pages/services/quantum-financial-trading-platform').then(module => ({ default: module.default })));

// Loading component
const PageLoader: any = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App(): any {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesShowcase />} />
            <Route path="/services/ai-autonomous-code-review" element={<AIAutonomousCodeReview />} />
            <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
            <Route path="/services/quantum-financial-trading-platform" element={<QuantumFinancialTradingPlatform />} />
            <Route path="/services/*" element={<ServicesPage />} />
            
            {/* Other Routes */}
            <Route path="/pricing" element={<ComprehensivePricing />} />
            <Route path="/comprehensive-services" element={<SimplePage />} />
            <Route path="/solutions" element={<SimplePage />} />
            <Route path="/solutions/*" element={<SimplePage />} />
            <Route path="/about" element={<SimplePage />} />
            <Route path="/about/*" element={<SimplePage />} />
            <Route path="/contact" element={<SimplePage />} />
            <Route path="/blog" element={<SimplePage />} />
            <Route path="/blog/*" element={<SimplePage />} />
            <Route path="/careers" element={<SimplePage />} />
            <Route path="/partners" element={<SimplePage />} />
            <Route path="/press" element={<SimplePage />} />
            <Route path="/case-studies" element={<SimplePage />} />
            <Route path="/research-development" element={<SimplePage />} />
            <Route path="/docs" element={<SimplePage />} />
            <Route path="/api" element={<SimplePage />} />
            <Route path="/developer" element={<SimplePage />} />
            <Route path="/help" element={<SimplePage />} />
            <Route path="/training" element={<SimplePage />} />
            <Route path="/community" element={<SimplePage />} />
            <Route path="/support" element={<SimplePage />} />
            <Route path="/sitemap" element={<SimplePage />} />
            <Route path="/comprehensive-sitemap" element={<SimplePage />} />
            <Route path="/privacy-policy" element={<SimplePage />} />
            <Route path="/terms-of-service" element={<SimplePage />} />
            <Route path="/cookie-policy" element={<SimplePage />} />
            <Route path="/request-quote" element={<SimplePage />} />
            <Route path="*" element={<SimplePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
