import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { PageLoader } from './components/LoadingSpinner';

// Lazy load pages for better performance
const LazyHomePage = React.lazy(() => import('./pages/Home'));
const LazyBlogPage = React.lazy(() => import('./pages/Blog'));
const LazyCaseStudiesPage = React.lazy(() => import('./pages/CaseStudies'));
const LazyContactPage = React.lazy(() => import('./pages/Contact'));
const LazyServicesPage = React.lazy(() => import('./pages/Services'));

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="text-left">
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
                <div className="text-left">
                  <div className="text-left">
                    <h1 className="text-left">404 - Page Not Found</h1>
                    <p className="text-left">The page you're looking for doesn't exist.</p>
                    <a href="/" className="text-left">
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