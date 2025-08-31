import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const AIServices = lazy(() => import('./pages/AIServices'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSAASPage'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));

// New 2029 services
const InnovativeServicesShowcase2029 = lazy(() => import('./pages/InnovativeServicesShowcase2029'));
const ComprehensivePricingGuide2029 = lazy(() => import('./pages/ComprehensivePricingGuide2029'));
const ComprehensiveServices2029 = lazy(() => import('./pages/ComprehensiveServices2029'));
const MicroSAASInnovationHub2029 = lazy(() => import('./pages/MicroSAASInnovationHub2029'));
const ITInfrastructureInnovation2029 = lazy(() => import('./pages/ITInfrastructureInnovation2029'));
const AIServicesInnovation2029 = lazy(() => import('./pages/AIServicesInnovation2029'));

// Enhanced loading component with progress indicator
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-blue-200 dark:border-gray-700 rounded-full animate-pulse"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
    </div>
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Loading Zion Tech Solutions</h2>
      <p className="text-gray-500 dark:text-gray-400">Preparing your future technology experience...</p>
    </div>
  </div>
);

// Enhanced error boundary fallback with better UX
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 flex items-center justify-center px-4">
    <div className="text-center max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Oops! Something went wrong</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        We encountered an unexpected error. Our team has been notified and is working to fix it.
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Go Home
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer">Error Details</summary>
          <pre className="mt-2 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Zion Tech Group</h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Future Technology Solutions</p>
                    </div>
                  </div>
                  
                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
                    <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
                    <div className="relative group">
                      <button 
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span>Services</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4 space-y-3">
                          <a href="/comprehensive-services-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Comprehensive Services</a>
                          <a href="/ai-services-innovation-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">AI Innovation Hub</a>
                          <a href="/micro-saas-innovation-hub-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Micro SAAS Hub</a>
                          <a href="/it-infrastructure-innovation-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">IT Infrastructure</a>
                          <a href="/innovative-services-showcase-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Innovative Services</a>
                          <a href="/comprehensive-pricing-guide-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Pricing Guide</a>
                          <a href="/services" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">All Services</a>
                        </div>
                      </div>
                    </div>
                    <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
                    <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
                    <a 
                      href="tel:+13024640950" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                      aria-label="Call us at +1 302 464 0950"
                    >
                      Call Now
                    </a>
                  </nav>
                  
                  {/* Mobile Menu Button */}
                  <button 
                    className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle mobile menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                  <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                    <nav className="pt-4 space-y-3" role="navigation" aria-label="Mobile navigation">
                      <a 
                        href="/" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                        onClick={closeMobileMenu}
                      >
                        Home
                      </a>
                      <div className="space-y-2">
                        <div className="text-gray-600 dark:text-gray-300 font-medium py-2">Services</div>
                        <div className="pl-4 space-y-2">
                          <a 
                            href="/comprehensive-services-2029" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            Comprehensive Services
                          </a>
                          <a 
                            href="/ai-services-innovation-2029" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            AI Innovation Hub
                          </a>
                          <a 
                            href="/micro-saas-innovation-hub-2029" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            Micro SAAS Hub
                          </a>
                          <a 
                            href="/it-infrastructure-innovation-2029" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            IT Infrastructure
                          </a>
                          <a 
                            href="/innovative-services-showcase-2029" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            Innovative Services
                          </a>
                          <a 
                            href="/comprehensive-pricing-guide-2029" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            Pricing Guide
                          </a>
                          <a 
                            href="/services" 
                            className="block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            All Services
                          </a>
                        </div>
                      </div>
                      <a 
                        href="/about" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                        onClick={closeMobileMenu}
                      >
                        About
                      </a>
                      <a 
                        href="/contact" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                        onClick={closeMobileMenu}
                      >
                        Contact
                      </a>
                      <a 
                        href="tel:+13024640950" 
                        className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center"
                        onClick={closeMobileMenu}
                        aria-label="Call us at +1 302 464 0950"
                      >
                        Call Now
                      </a>
                    </nav>
                  </div>
                )}
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/pricing" element={<Pricing />} />
                  
                  {/* New 2029 Services Routes */}
                  <Route path="/innovative-services-showcase-2029" element={<InnovativeServicesShowcase2029 />} />
                  <Route path="/comprehensive-pricing-guide-2029" element={<ComprehensivePricingGuide2029 />} />
                  <Route path="/comprehensive-services-2029" element={<ComprehensiveServices2029 />} />
                  <Route path="/micro-saas-innovation-hub-2029" element={<MicroSAASInnovationHub2029 />} />
                  <Route path="/it-infrastructure-innovation-2029" element={<ITInfrastructureInnovation2029 />} />
                  <Route path="/ai-services-innovation-2029" element={<AIServicesInnovation2029 />} />
                  
                  {/* Fallback Route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                      <div className="text-center max-w-md mx-4">
                        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist. Let us help you find what you need.</p>
                        <div className="space-y-3">
                          <a 
                            href="/" 
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Go Home
                          </a>
                          <a 
                            href="/services" 
                            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors ml-3"
                          >
                            Browse Services
                          </a>
                        </div>
                      </div>
                    </div>
                  } />
                </Routes>
              </Suspense>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16" role="contentinfo">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Zion Tech Group</h3>
                        <p className="text-sm text-gray-400">Future Technology Solutions</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation. 
                      We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://ziontechgroup.com" 
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="Visit our website"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="Send us an email"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <a 
                        href="tel:+13024640950" 
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="Call us at +1 302 464 0950"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li><a href="/comprehensive-services-2029" className="hover:text-white transition-colors">Comprehensive Services</a></li>
                      <li><a href="/ai-services-innovation-2029" className="hover:text-white transition-colors">AI Innovation Hub</a></li>
                      <li><a href="/micro-saas-innovation-hub-2029" className="hover:text-white transition-colors">Micro SAAS Hub</a></li>
                      <li><a href="/it-infrastructure-innovation-2029" className="hover:text-white transition-colors">IT Infrastructure</a></li>
                      <li><a href="/innovative-services-showcase-2029" className="hover:text-white transition-colors">Innovative Services</a></li>
                      <li><a href="/comprehensive-pricing-guide-2029" className="hover:text-white transition-colors">Pricing Guide</a></li>
                      <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                      <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                      <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
                      <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <div className="space-y-3 text-sm text-gray-400">
                      <p>+1 302 464 0950</p>
                      <p>kleber@ziontechgroup.com</p>
                      <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                  <p className="text-gray-400 text-sm">
                    © 2025 Zion Tech Group. All rights reserved. | 
                    <a 
                      href="https://ziontechgroup.com" 
                      className="text-blue-400 hover:text-blue-300 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ziontechgroup.com
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
