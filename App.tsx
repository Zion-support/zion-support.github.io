import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/home/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));

// Components
import ErrorBoundary from './app/components/ErrorBoundary';

// Loading component
const LoadingSpinner = memo(() => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
));
LoadingSpinner.displayName = 'LoadingSpinner';

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PricingPage />
              </Suspense>
            } 
          />
          <Route 
            path="/ai-services" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AIServicesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/it-services" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ITServicesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/micro-saas" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MicroSaasPage />
              </Suspense>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPage />
              </Suspense>
            } 
          />
          <Route 
            path="/case-studies" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CaseStudiesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/team" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <TeamPage />
              </Suspense>
            } 
          />
          <Route 
            path="/careers" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CareersPage />
              </Suspense>
            } 
          />
          <Route 
            path="/privacy" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PrivacyPage />
              </Suspense>
            } 
          />
          <Route 
            path="/terms" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <TermsPage />
              </Suspense>
            } 
          />
          <Route 
            path="/cookies" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CookiesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/docs" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <DocsPage />
              </Suspense>
            } 
          />
          <Route 
            path="/api-docs" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ApiDocsPage />
              </Suspense>
            } 
          />
          <Route 
            path="/support" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <SupportPage />
              </Suspense>
            } 
          />
          <Route 
            path="/status" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <StatusPage />
              </Suspense>
            } 
          />
          <Route 
            path="/demo" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <DemoPage />
              </Suspense>
            } 
          />
          <Route 
            path="/consultation" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ConsultationPage />
              </Suspense>
            } 
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;