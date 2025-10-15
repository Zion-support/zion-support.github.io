import React from 'react';
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
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Page Components
import HomePage from './app/page';
import AboutPage from './app/about';
// import ContactPage from './app/pages/ContactPage';
// import ServicesPage from './app/pages/ServicesPage';
// import BlogPage from './app/pages/BlogPage';
// import TutorialsPage from './app/pages/TutorialsPage';
// import DemoPage from './app/pages/DemoPage';
// import SupportPage from './app/pages/SupportPage';
// import PrivacyPage from './app/pages/PrivacyPage';
// import TermsPage from './app/pages/TermsPage';
// import PricingPage from './app/pages/PricingPage';
// import SolutionsPage from './app/pages/SolutionsPage';
// import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
// import AISolutionsPage from './app/ai-solutions/page';
// import ITSolutionsPage from './app/it-solutions/page';

// Service Pages
// import AIServicesPage from './app/pages/AIServicesPage';
// import ITServicesPage from './app/pages/ITServicesPage';
// import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
// import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
// import CaseStudiesPage from './app/pages/CaseStudiesPage';
// import CareersPage from './app/pages/CareersPage';

// Additional Pages
// import CybersecurityPage from './app/pages/CybersecurityPage';
// import CloudSolutionsPage from './app/pages/CloudSolutionsPage';
// import MicroSaaSPage from './app/pages/MicroSaaSPage';
// import FiveGSolutionsPage from './app/pages/5GSolutionsPage';
// import TeamPage from './app/pages/TeamPage';
// import DocumentationPage from './app/pages/DocumentationPage';

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
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
              <Navigation />
              <main className="relative z-10 flex-1" id="main-content" role="main">
              <ErrorBoundary>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  {/* <Route path="/contact" element={<ContactPage />} /> */}
                  {/* <Route path="/services" element={<ServicesPage />} /> */}
                  {/* <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} /> */}
                  {/* <Route path="/ai-solutions" element={<AISolutionsPage />} /> */}
                  {/* <Route path="/it-solutions" element={<ITSolutionsPage />} /> */}
                  {/* <Route path="/blog" element={<BlogPage />} /> */}
                  {/* <Route path="/tutorials" element={<TutorialsPage />} /> */}
                  {/* <Route path="/demo" element={<DemoPage />} /> */}
                  {/* <Route path="/support" element={<SupportPage />} /> */}
                  {/* <Route path="/privacy" element={<PrivacyPage />} /> */}
                  {/* <Route path="/terms" element={<TermsPage />} /> */}
                  {/* <Route path="/pricing" element={<PricingPage />} /> */}
                  {/* <Route path="/solutions" element={<SolutionsPage />} /> */}
                  
                  {/* Service Pages */}
                  {/* <Route path="/ai-services" element={<AIServicesPage />} /> */}
                  {/* <Route path="/it-services" element={<ITServicesPage />} /> */}
                  {/* <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} /> */}
                  {/* <Route path="/digital-transformation" element={<DigitalTransformationPage />} /> */}
                  {/* <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
                  {/* <Route path="/careers" element={<CareersPage />} /> */}
                  
                  {/* Additional Service Pages */}
                  {/* <Route path="/cybersecurity" element={<CybersecurityPage />} /> */}
                  {/* <Route path="/cloud-solutions" element={<CloudSolutionsPage />} /> */}
                  {/* <Route path="/micro-saas" element={<MicroSaaSPage />} /> */}
                  {/* <Route path="/5g-solutions" element={<FiveGSolutionsPage />} /> */}
                  
                  {/* Additional Pages */}
                  {/* <Route path="/team" element={<TeamPage />} /> */}
                  {/* <Route path="/docs" element={<DocumentationPage />} /> */}
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
              <PerformanceMonitor />
              <AccessibilityEnhancer>
                <div>Content</div>
              </AccessibilityEnhancer>
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

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
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

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/api-docs" element={<ApiDocsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;