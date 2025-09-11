import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoadingSpinner from './components/LoadingSpinner';
import { Button } from './components/ui/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';

// Lazy load pages with better error handling
const Home = React.lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = React.lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Services = React.lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const Pricing = React.lazy(() => import('./pages/Pricing').catch(() => ({ default: () => <div>Error loading Pricing page</div> })));
const Contact = React.lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));

// Service pages with error handling
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity').catch(() => ({ default: () => <div>Error loading Cybersecurity page</div> })));
const CloudMigration = React.lazy(() => import('./pages/CloudMigrationServices').catch(() => ({ default: () => <div>Error loading Cloud Migration page</div> })));
const DevOps = React.lazy(() => import('./pages/CloudDevOpsServices').catch(() => ({ default: () => <div>Error loading DevOps page</div> })));
const MobileDevelopment = React.lazy(() => import('./pages/MobileAppPage').catch(() => ({ default: () => <div>Error loading Mobile Development page</div> })));

// Additional service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite').catch(() => ({ default: () => <div>Error loading AI Content Generation Suite</div> })));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services').catch(() => ({ default: () => <div>Error loading Cloud Migration Services</div> })));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform').catch(() => ({ default: () => <div>Error loading Smart CRM Platform</div> })));
const AIEmailResponder = lazy(() => import('./pages/services/ai-email-responder').catch(() => ({ default: () => <div>Error loading AI Email Responder</div> })));
const MobileSurveyTool = lazy(() => import('./pages/services/mobile-survey-tool').catch(() => ({ default: () => <div>Error loading Mobile Survey Tool</div> })));
const AITalentMatching = lazy(() => import('./pages/services/ai-talent-matching').catch(() => ({ default: () => <div>Error loading AI Talent Matching</div> })));
const EcommerceReturnManagement = lazy(() => import('./pages/services/ecommerce-return-management').catch(() => ({ default: () => <div>Error loading Ecommerce Return Management</div> })));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Header />
          <Sidebar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Original service routes */}
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/cloud-migration" element={<CloudMigration />} />
              <Route path="/devops" element={<DevOps />} />
              <Route path="/mobile-development" element={<MobileDevelopment />} />
              
              {/* Additional service routes */}
              <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
              <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
              <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
              <Route path="/services/ai-email-responder" element={<AIEmailResponder />} />
              <Route path="/services/mobile-survey-tool" element={<MobileSurveyTool />} />
              <Route path="/services/ai-talent-matching" element={<AITalentMatching />} />
              <Route path="/services/ecommerce-return-management" element={<EcommerceReturnManagement />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;