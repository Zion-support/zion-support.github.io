import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { PageLoader } from './components/LoadingSpinner';

// Lazy load components
const LazyHomePage = React.lazy(() => import('./pages/HomePage'));
const LazyBlogPage = React.lazy(() => import('./pages/BlogPage'));
const LazyCaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const LazyContactPage = React.lazy(() => import('./pages/ContactPage'));
const LazyServicesPage = React.lazy(() => import('./pages/ServicesPage'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-slate-950 text-white">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<LazyHomePage />} />
              <Route path="/blog" element={<LazyBlogPage />} />
              <Route path="/case-studies" element={<LazyCaseStudiesPage />} />
              <Route path="/contact" element={<LazyContactPage />} />
              <Route path="/services" element={<LazyServicesPage />} />
              
              {/* Service-specific routes */}
              <Route path="/services/quantum-consciousness-ai-consulting" element={
                React.createElement(React.lazy(() => import('./pages/services/QuantumConsciousnessAIConsulting')))
              } />
              <Route path="/services/ai-workflow-automation" element={
                React.createElement(React.lazy(() => import('./pages/services/AIWorkflowAutomation')))
              } />
              <Route path="/services/ai-virtual-assistant" element={
                React.createElement(React.lazy(() => import('./pages/services/AIVirtualAssistant')))
              } />
              <Route path="/services/ai-mlops-automation" element={
                React.createElement(React.lazy(() => import('./pages/services/AIMLOpsAutomation')))
              } />
              <Route path="/services/ai-intelligent-document-processing" element={
                React.createElement(React.lazy(() => import('./pages/services/AIIntelligentDocumentProcessing')))
              } />
              <Route path="/services/advanced-cybersecurity-ai" element={
                React.createElement(React.lazy(() => import('./pages/services/AdvancedCybersecurityAI')))
              } />
              <Route path="/services/autonomous-business-operations" element={
                React.createElement(React.lazy(() => import('./pages/services/AutonomousBusinessOperations')))
              } />
              <Route path="/services/real-time-cognitive-automation" element={
                React.createElement(React.lazy(() => import('./pages/services/RealTimeCognitiveAutomation')))
              } />
              <Route path="/services/ai-data-analytics" element={
                React.createElement(React.lazy(() => import('./pages/services/AIDataAnalytics')))
              } />
              <Route path="/services/enterprise-ai-solutions" element={
                React.createElement(React.lazy(() => import('./pages/EnterpriseAISolutions')))
              } />
              
              {/* 404 fallback */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;