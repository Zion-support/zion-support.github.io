import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AppLoadingSpinner from './components/AppLoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Services Pages
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));

// IT Services Pages
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DevOpsPage = lazy(() => import('./devops/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));

// Micro SAAS Pages
const ProjectManagementPage = lazy(() => import('./project-management/page'));
const CustomerSupportPage = lazy(() => import('./customer-support/page'));
const InventoryManagementPage = lazy(() => import('./inventory-management/page'));
const FinancialTrackingPage = lazy(() => import('./financial-tracking/page'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />

                {/* AI Services Pages */}
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-fintech" element={<AIFintechPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />

                {/* IT Services Pages */}
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/devops" element={<DevOpsPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                {/* Micro SAAS Pages */}
                <Route path="/project-management" element={<ProjectManagementPage />} />
                <Route path="/customer-support" element={<CustomerSupportPage />} />
                <Route path="/inventory-management" element={<InventoryManagementPage />} />
                <Route path="/financial-tracking" element={<FinancialTrackingPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;