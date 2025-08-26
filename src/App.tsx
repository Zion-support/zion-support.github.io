import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));

// Lazy load service pages
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));
const QuantumDataAnalytics = React.lazy(() => import('./pages/services/QuantumDataAnalytics'));
const BlockchainInfrastructure = React.lazy(() => import('./pages/services/BlockchainInfrastructure'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-cyan-500 text-lg font-medium">Loading Zion...</p>
      <p className="text-gray-400 text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<ServicesOverview />} />
              
              {/* Service Routes */}
              <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
              <Route path="/services/quantum-data-analytics" element={<QuantumDataAnalytics />} />
              <Route path="/services/blockchain-infrastructure" element={<BlockchainInfrastructure />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;