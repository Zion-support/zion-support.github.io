import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));

import './globals.css';

// Mock components for now - these will be implemented
const PerformanceOptimizer = () => null;
const SEOOptimizer = () => null;
const AccessibilityEnhancer = () => null;
const UserExperienceEnhancer = () => null;
const SecurityEnhancer = () => null;

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-services" element={<AiServicesPage />} />
            <Route path="/ai-marketing" element={<AiMarketingPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-fintech" element={<AiFintechPage />} />
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
