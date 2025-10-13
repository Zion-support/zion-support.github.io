import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import MicroSaasPage from './app/micro-saas/page';
import ContactPage from './app/contact/page';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
import EnhancedErrorFeedback from './app/components/EnhancedErrorFeedback';
import AdvancedPerformanceMonitor from './app/components/AdvancedPerformanceMonitor';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import SecurityEnhancer from './app/components/SecurityEnhancer';
import UserExperienceEnhancer from './app/components/UserExperienceEnhancer';

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-2xl border border-slate-700 p-8 text-center">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      
      <h1 className="text-2xl font-bold text-white mb-4">
        Oops! Something went wrong
      </h1>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
      </p>

      {process.env.NODE_ENV === 'development' && (
        <details className="mb-6 text-left">
          <summary className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors mb-2">
            Error Details (Development)
          </summary>
          <div className="bg-slate-900 rounded-lg p-4 text-xs text-red-400 font-mono overflow-auto max-h-32">
            <div className="mb-2">
              <strong>Error:</strong> {error.message}
            </div>
            <div>
              <strong>Stack:</strong>
              <pre className="whitespace-pre-wrap mt-1">
                {error.stack}
              </pre>
            </div>
          </div>
        </details>
      )}

      <div className="space-y-4">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
        
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </button>
      </div>
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Error caught by boundary:', error, errorInfo);
        // Here you would typically send the error to a logging service
      }}
    >
      <EnhancedErrorFeedback>
        <AdvancedPerformanceMonitor showDebugInfo={process.env.NODE_ENV === 'development'}>
          <EnhancedAccessibility showControls={true}>
            <SecurityEnhancer showSecurityInfo={process.env.NODE_ENV === 'development'}>
              <UserExperienceEnhancer showControls={true}>
                <Router>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <Navigation />
                    
                    <main id="main-content" role="main" aria-label="Main content">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-analytics" element={<div>AI Analytics Page</div>} />
                        <Route path="/ai-cybersecurity" element={<div>AI Cybersecurity Page</div>} />
                        <Route path="/ai-content-generation" element={<div>AI Content Generation Page</div>} />
                        <Route path="/ai-customer-support" element={<div>AI Customer Support Page</div>} />
                        <Route path="/ai-data-analytics" element={<div>AI Data Analytics Page</div>} />
                        <Route path="/ai-marketing-automation" element={<div>AI Marketing Automation Page</div>} />
                        <Route path="/ai-predictive-analytics" element={<div>AI Predictive Analytics Page</div>} />
                        <Route path="/ai-voice-assistant" element={<div>AI Voice Assistant Page</div>} />
                        
                        {/* Micro SAAS Routes */}
                        <Route path="/zion-analytics-pro" element={<div>Zion Analytics Pro Page</div>} />
                        <Route path="/zion-security-shield" element={<div>Zion Security Shield Page</div>} />
                        <Route path="/zion-cloud-vault" element={<div>Zion Cloud Vault Page</div>} />
                        <Route path="/zion-ai-crm-pro" element={<div>Zion AI CRM Pro Page</div>} />
                        <Route path="/zion-ai-marketing-automation-pro" element={<div>Zion AI Marketing Automation Pro Page</div>} />
                        <Route path="/zion-ai-project-manager-pro" element={<div>Zion AI Project Manager Pro Page</div>} />
                        
                        {/* 5G Solutions Routes */}
                        <Route path="/5g-solutions" element={<div>5G Solutions Page</div>} />
                        <Route path="/5g-network-infrastructure" element={<div>5G Network Infrastructure Page</div>} />
                        <Route path="/5g-iot-solutions" element={<div>5G IoT Solutions Page</div>} />
                        <Route path="/5g-smart-city-solutions" element={<div>5G Smart City Solutions Page</div>} />
                        
                        {/* IT Services Routes */}
                        <Route path="/services" element={<div>IT Services Page</div>} />
                        <Route path="/cloud-infrastructure" element={<div>Cloud Infrastructure Page</div>} />
                        <Route path="/cybersecurity" element={<div>Cybersecurity Page</div>} />
                        <Route path="/digital-transformation" element={<div>Digital Transformation Page</div>} />
                        <Route path="/it-consulting" element={<div>IT Consulting Page</div>} />
                        <Route path="/system-integration" element={<div>System Integration Page</div>} />
                        <Route path="/data-management" element={<div>Data Management Page</div>} />
                        
                        {/* Company Routes */}
                        <Route path="/team" element={<div>Our Team Page</div>} />
                        <Route path="/careers" element={<div>Careers Page</div>} />
                        <Route path="/news" element={<div>News Page</div>} />
                        <Route path="/case-studies" element={<div>Case Studies Page</div>} />
                        <Route path="/blog" element={<div>Blog Page</div>} />
                        
                        {/* Support Routes */}
                        <Route path="/help" element={<div>Help Center Page</div>} />
                        <Route path="/docs" element={<div>Documentation Page</div>} />
                        <Route path="/api" element={<div>API Reference Page</div>} />
                        <Route path="/status" element={<div>Status Page</div>} />
                        <Route path="/support" element={<div>Support Page</div>} />
                        
                        {/* Legal Routes */}
                        <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
                        <Route path="/terms" element={<div>Terms of Service Page</div>} />
                        <Route path="/cookies" element={<div>Cookie Policy Page</div>} />
                        <Route path="/gdpr" element={<div>GDPR Page</div>} />
                        <Route path="/security" element={<div>Security Page</div>} />
                        <Route path="/compliance" element={<div>Compliance Page</div>} />
                        
                        {/* 404 Route */}
                        <Route path="*" element={<div>404 - Page Not Found</div>} />
                      </Routes>
                    </main>
                    
                    <Footer />
                  </div>
                </Router>
              </UserExperienceEnhancer>
            </SecurityEnhancer>
          </EnhancedAccessibility>
        </AdvancedPerformanceMonitor>
      </EnhancedErrorFeedback>
    </ErrorBoundary>
  );
};

export default App;