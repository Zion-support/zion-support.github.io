import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ServicesDirectory = lazy(() => import('./pages/AddedServicesDirectory'));

// Service Pages
const AIQuantumFinancialTrading = lazy(() => import('./pages/services/AIQuantumFinancialTrading'));
const AISmartCityManagement = lazy(() => import('./pages/services/AISmartCityManagement'));
const BlockchainWeb3Development = lazy(() => import('./pages/services/BlockchainWeb3Development'));

// Loading Component
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-white text-lg">Loading...</div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesDirectory />} />
            <Route path="/services/added" element={<ServicesDirectory />} />
            
            {/* Advanced Service Pages */}
            <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
            <Route path="/services/ai-smart-city-management" element={<AISmartCityManagement />} />
            <Route path="/services/blockchain-web3-development" element={<BlockchainWeb3Development />} />
            
            {/* Service Category Routes */}
            <Route path="/services/ai-solutions" element={<ServicesDirectory />} />
            <Route path="/services/cybersecurity" element={<ServicesDirectory />} />
            <Route path="/services/cloud-infrastructure" element={<ServicesDirectory />} />
            <Route path="/services/blockchain-web3" element={<BlockchainWeb3Development />} />
            <Route path="/services/smart-city" element={<AISmartCityManagement />} />
            <Route path="/services/quantum-computing" element={<AIQuantumFinancialTrading />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

