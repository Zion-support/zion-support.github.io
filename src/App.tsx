import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { SidebarProvider } from './context/SidebarContext';
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import { Toaster as SonnerToaster } from "./components/ui/sonner";

// Core pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AboutPage = React.lazy(() => import('./pages/About'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));

// Additional service pages
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));

// Company pages
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));

// Support pages
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <WhitelabelProvider>
          <SidebarProvider>
            <EnhancedErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  
                  {/* Service routes */}
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/ai-marketing-automation" element={<AIMarketingAutomation />} />
                  <Route path="/iot-management-platform" element={<IoTManagementPlatform />} />
                  <Route path="/blockchain-defi-solutions" element={<BlockchainDeFiSolutions />} />
                  <Route path="/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                  <Route path="/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/iot-data-analytics" element={<IoTDataAnalytics />} />
                  
                  {/* Company routes */}
                  <Route path="/mission" element={<Mission />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/news" element={<News />} />
                  
                  {/* Support routes */}
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  
                  {/* 404 route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold text-cyan-500 mb-4">404</h1>
                        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                        <a 
                          href="/" 
                          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                          Go Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </Suspense>
              <SonnerToaster />
            </EnhancedErrorBoundary>
          </SidebarProvider>
        </WhitelabelProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;