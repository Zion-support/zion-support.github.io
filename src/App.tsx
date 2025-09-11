import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoadingSpinner from './components/LoadingSpinner';
import { Button } from './components/ui/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));
const AIEmailResponder = lazy(() => import('./pages/services/ai-email-responder'));
const MobileSurveyTool = lazy(() => import('./pages/services/mobile-survey-tool'));
const AITalentMatching = lazy(() => import('./pages/services/ai-talent-matching'));
const EcommerceReturnManagement = lazy(() => import('./pages/services/ecommerce-return-management'));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Header />
          <Sidebar />
          <React.Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Service routes */}
              <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
              <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
              <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
              <Route path="/services/ai-email-responder" element={<AIEmailResponder />} />
              <Route path="/services/mobile-survey-tool" element={<MobileSurveyTool />} />
              <Route path="/services/ai-talent-matching" element={<AITalentMatching />} />
              <Route path="/services/ecommerce-return-management" element={<EcommerceReturnManagement />} />
            </Routes>
          </React.Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;