import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/home/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import Sidebar from './app/components/Sidebar';

// Service Pages
// import AIServicesPage from './app/pages/AIServicesPage';
// import ITServicesPage from './app/pages/ITServicesPage';
// import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
// import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
// import CaseStudiesPage from './app/pages/CaseStudiesPage';
// import CareersPage from './app/pages/CareersPage';

// Additional Pages
import ServicesPage from './app/pages/ServicesPage';
import AISolutionsPage from './app/pages/AISolutionsPage';
import TutorialsPage from './app/pages/TutorialsPage';
import CybersecurityPage from './app/pages/CybersecurityPage';
import CloudSolutionsPage from './app/pages/CloudSolutionsPage';
import MicroSaaSPage from './app/pages/MicroSaaSPage';
import FiveGSolutionsPage from './app/pages/FiveGSolutionsPage';
import DocumentationPage from './app/pages/DocumentationPage';

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-lg font-medium text-gray-900">Something went wrong</h1>
        <p className="mt-2 text-sm text-gray-500">
          {error.message}
        </p>
        <div className="mt-6">
          <button
            onClick={resetErrorBoundary}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
);

function App() {

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={() => {}} />
              <main className="relative z-10 flex-1" id="main-content" role="main">
              <ErrorBoundary>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                  
                  {/* Service Pages */}
                  {/* <Route path="/ai-services" element={<AIServicesPage />} /> */}
                  {/* <Route path="/it-services" element={<ITServicesPage />} /> */}
                  {/* <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} /> */}
                  {/* <Route path="/digital-transformation" element={<DigitalTransformationPage />} /> */}
                  {/* <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
                  {/* <Route path="/careers" element={<CareersPage />} /> */}
                  
                  {/* Additional Service Pages */}
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
                  <Route path="/micro-saas" element={<MicroSaaSPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  
                  {/* Additional Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/docs" element={<DocumentationPage />} />
                  {/* Catch all route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-slate-900">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                        <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                          Go Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </ErrorBoundary>
              </main>
              <Footer />
              <PerformanceMonitor>
                <div></div>
              </PerformanceMonitor>
              <AccessibilityEnhancer />
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
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
    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


export default App;