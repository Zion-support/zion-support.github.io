import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import BlogPage from './app/blog/page';
import CaseStudiesPage from './app/case-studies/page';
import AIServicesPage from './app/ai-services/page';
import AIMarketingPage from './app/ai-marketing/page';
import AIAutomationPage from './app/ai-automation/page';
import AIHealthcarePage from './app/ai-healthcare/page';
import AIFintechPage from './app/ai-fintech/page';
import QuantumComputingPage from './app/quantum-computing/page';
import MicroSaasPage from './app/micro-saas/page';
import AIContentGenerationPage from './app/ai-content-generation/page';
import ITInfrastructurePage from './app/it-infrastructure/page';
import EnterprisePage from './app/enterprise/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import NotFoundPage from './app/not-found';

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('App Error Boundary caught an error:', error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              We're working to fix this issue. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/ai-marketing" element={<AIMarketingPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
            <Route path="/ai-fintech" element={<AIFintechPage />} />
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
            <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
