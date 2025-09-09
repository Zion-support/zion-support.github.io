import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Simple components
import { ErrorBoundary } from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { NotificationToast } from './components/NotificationToast';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

// Our enhanced service pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));

// Additional pages
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const CloudInfrastructure = lazy(() => import('./pages/CloudInfrastructure'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const ServicesComparison = lazy(() => import('./pages/ServicesComparison'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-xl mb-8">AI & IT Solutions</p>
      <div className="text-green-400 text-lg">
        ✅ Successfully built and deployed! 🚀
      </div>
    </div>
  </div>
);

// Simple NotFound component
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 to-purple-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you're looking for doesn't exist.</p>
    </div>
  </div>
);

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Router>
            <div className="App">
              <main className="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    
                    {/* Services Routes */}
                    <Route path="/services" element={<ServicesOverview />} />
                    <Route path="/comprehensive-services" element={<ServicesOverview />} />
                    <Route path="/services-comparison" element={<ServicesComparison />} />
                    <Route path="/services-showcase" element={<ServicesOverview />} />
                    <Route path="/it-onsite-services" element={<ServicesOverview />} />
                    
                    {/* Enhanced Service Pages */}
                    <Route path="/services/overview" element={<ServicesOverview />} />
                    <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-saas" element={<MicroSAASSolutions />} />
                    <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                    
                    {/* AI & Technology Routes */}
                    <Route path="/ai-solutions" element={<AIAutonomousSystems />} />
                    <Route path="/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
                    
                    {/* Company Routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    
                    {/* Legal Routes */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    
                    {/* Utility Routes */}
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            <NotificationToast />
          </Router>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;