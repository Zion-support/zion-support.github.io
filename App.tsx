
import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
)
// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
)

// Global Error Boundary
const GlobalErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    {children}
  </ErrorBoundary>
);

// Placeholder components - these should be imported from their respective files
const Navigation = () => <nav>Navigation</nav>;
const Sidebar = () => <aside>Sidebar</aside>;
const Footer = () => <footer>Footer</footer>;
const PerformanceMonitor = () => <div>Performance Monitor</div>;
const AccessibilityEnhancer = () => <div>Accessibility Enhancer</div>;

// Page components - these should be imported from their respective files
const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;
const ServicesPage = () => <div>Services Page</div>;
const PricingPage = () => <div>Pricing Page</div>;
const CaseStudiesPage = () => <div>Case Studies Page</div>;
const BlogPage = () => <div>Blog Page</div>;
const TeamPage = () => <div>Team Page</div>;
const CareersPage = () => <div>Careers Page</div>;
const PrivacyPage = () => <div>Privacy Page</div>;
const TermsPage = () => <div>Terms Page</div>;
const CookiesPage = () => <div>Cookies Page</div>;
const AIServicesPage = () => <div>AI Services Page</div>;
const AISolutionsPage = () => <div>AI Solutions Page</div>;
const ITServicesPage = () => <div>IT Services Page</div>;
const CloudInfrastructurePage = () => <div>Cloud Infrastructure Page</div>;
const DigitalTransformationPage = () => <div>Digital Transformation Page</div>;
const FiveGSolutionsPage = () => <div>5G Solutions Page</div>;

function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/styles.css';
      link.as = 'style';
      document.head.appendChild(link);
    };

    preloadCriticalResources();
  }, []);

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer />
                
                <Suspense fallback={<LoadingFallback />}>
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
                    
                    {/* AI Services */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    
                    {/* IT Services */}
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />

                    
                    {/* Catch all route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600 mb-8">Page not found</p>
                        <a href="/" className="text-blue-600 hover:text-blue-800">Go back home</a>
                      </div>
                    </div>} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}

export default App;