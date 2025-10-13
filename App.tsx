import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';

// Lazy load page components for better performance
const HomePage = lazy(() => import('./app/pages/HomePage'));
const AboutPage = lazy(() => import('./app/pages/AboutPage'));
const ContactPage = lazy(() => import('./app/pages/ContactPage'));
const ServicesPage = lazy(() => import('./app/pages/ServicesPage'));
const BlogPage = lazy(() => import('./app/pages/BlogPage'));
const TutorialsPage = lazy(() => import('./app/pages/TutorialsPage'));
const DemoPage = lazy(() => import('./app/pages/DemoPage'));
const SupportPage = lazy(() => import('./app/pages/SupportPage'));
const PrivacyPage = lazy(() => import('./app/pages/PrivacyPage'));
const TermsPage = lazy(() => import('./app/pages/TermsPage'));
const PricingPage = lazy(() => import('./app/pages/PricingPage'));
const SolutionsPage = lazy(() => import('./app/pages/SolutionsPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
);

// Error fallback component

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <main className="relative z-10" id="main-content" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  
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
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;