import React from 'react';
// import from 'react-router-dom'; // Empty import removed
// import from 'react-helmet-async'; // Empty import removed

// Components;
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Page Components'
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';

// Service Pages'
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CareersPage from './app/pages/CareersPage';

// Additional Pages'
import CybersecurityPage from './app/pages/CybersecurityPage';
import CloudSolutionsPage from './app/pages/CloudSolutionsPage';
import MicroSaaSPage from './app/pages/MicroSaaSPage';
import FiveGSolutionsPage from './app/pages/5GSolutionsPage';
import TeamPage from './app/pages/TeamPage';
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
          {}
        </p>
        <div className="mt-6">
          <button
            onClick={}
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
    <div className="flex h-screen bg-gray-100">
      <SidebarNavigation isOpen={false} onClose={() => {}} />
      <div className="flex-1 flex flex-col">
        <Navigation onSidebarToggle={() => {}} />
        <main className="relative z-10 flex-1" id="main-content" role="main">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/services" element={<div>Services Page</div>} />
                <Route path="/micro-saas-solutions" element={<div>Micro SaaS Solutions</div>} />
                <Route path="/ai-solutions" element={<div>AI Solutions</div>} />
                <Route path="/it-solutions" element={<div>IT Solutions</div>} />
                <Route path="/blog" element={<div>Blog Page</div>} />
                <Route path="/tutorials" element={<div>Tutorials Page</div>} />
                <Route path="/demo" element={<div>Demo Page</div>} />
                <Route path="/support" element={<div>Support Page</div>} />
                <Route path="/privacy" element={<div>Privacy Page</div>} />
                <Route path="/terms" element={<div>Terms Page</div>} />
                <Route path="/pricing" element={<div>Pricing Page</div>} />
                <Route path="/solutions" element={<div>Solutions Page</div>} />
                <Route path="/ai-services" element={<div>AI Services Page</div>} />
                <Route path="/it-services" element={<div>IT Services Page</div>} />
                <Route path="/cloud-infrastructure" element={<div>Cloud Infrastructure Page</div>} />
                <Route path="/digital-transformation" element={<div>Digital Transformation Page</div>} />
                <Route path="/case-studies" element={<div>Case Studies Page</div>} />
                <Route path="/careers" element={<div>Careers Page</div>} />
                <Route path="/cybersecurity" element={<div>Cybersecurity Page</div>} />
                <Route path="/cloud-solutions" element={<div>Cloud Solutions Page</div>} />
                <Route path="/micro-saas" element={<div>Micro SaaS Page</div>} />
                <Route path="/5g-solutions" element={<div>5G Solutions Page</div>} />
                <Route path="/team" element={<div>Team Page</div>} />
                <Route path="/docs" element={<div>Documentation Page</div>} />
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
                </ErrorBoundary>
              </main>
              <Footer />
              <PerformanceMonitor />
              <AccessibilityEnhancer />
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;