import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const BlogPage = lazy(() => import('./blog/page'));
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const DevOpsPage = lazy(() => import('./devops/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're working to fix this issue. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* AI Services */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-marketing" element={<AIMarketingPage />} />
              <Route path="/ai-automation" element={<AIAutomationPage />} />
              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
              <Route path="/ai-fintech" element={<AIFintechPage />} />
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/micro-saas" element={<MicroSAASPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              
              {/* IT Solutions */}
              <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/devops" element={<DevOpsPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              
              {/* 404 Fallback */}
              <Route path="*" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-gray-300 mb-8">Page not found</p>
                    <a
                      href="/"
                      className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
