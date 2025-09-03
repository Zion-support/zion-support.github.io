import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import { Footer } from './components/layout/Footer';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const ServicesOverview = lazy(() => import('./pages/services-overview'));

// Service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));

// New innovative services
const AIResumeBuilder = lazy(() => import('./pages/services/ai-resume-builder'));
const BlockchainDocumentVerification = lazy(() => import('./pages/services/blockchain-document-verification'));
const AIMarketAnalysis = lazy(() => import('./pages/services/ai-market-analysis'));
const NLPCustomerService = lazy(() => import('./pages/services/nlp-customer-service'));
const QuantumComputingConsultation = lazy(() => import('./pages/services/quantum-computing-consultation'));
const IoTIntegrationServices = lazy(() => import('./pages/services/iot-integration-services'));
const AIFraudDetection = lazy(() => import('./pages/services/ai-fraud-detection'));
const SmartContractAuditor = lazy(() => import('./pages/services/smart-contract-auditor'));
const PredictiveMaintenance = lazy(() => import('./pages/services/predictive-maintenance'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/ai-healthcare-diagnostics'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-overview" element={<ServicesOverview />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                
                {/* Existing Service pages */}
                <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
                <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
                <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
                
                {/* New innovative services */}
                <Route path="/services/ai-resume-builder" element={<AIResumeBuilder />} />
                <Route path="/services/blockchain-document-verification" element={<BlockchainDocumentVerification />} />
                <Route path="/services/ai-market-analysis" element={<AIMarketAnalysis />} />
                <Route path="/services/nlp-customer-service" element={<NLPCustomerService />} />
                <Route path="/services/quantum-computing-consultation" element={<QuantumComputingConsultation />} />
                <Route path="/services/iot-integration-services" element={<IoTIntegrationServices />} />
                <Route path="/services/ai-fraud-detection" element={<AIFraudDetection />} />
                <Route path="/services/smart-contract-auditor" element={<SmartContractAuditor />} />
                <Route path="/services/predictive-maintenance" element={<PredictiveMaintenance />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
;
export default App;