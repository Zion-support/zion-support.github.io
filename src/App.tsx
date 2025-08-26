import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor';

<<<<<<< HEAD
// Lazy load main pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load AI services
const AIServices = lazy(() => import('./pages/AIServicesPage'));
const AIAutonomousBusiness = lazy(() => import('./pages/AIServices/AIAutonomousBusinessPlatform'));
const AIAutonomousResearch = lazy(() => import('./pages/AIServices/AIAutonomousResearch'));
const AIBusinessIntelligence = lazy(() => import('./pages/AIServices/AIBusinessIntelligenceElite'));
const AIComputerVision = lazy(() => import('./pages/AIServices/AIComputerVisionPlatform'));

// Lazy load specialized services
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOpsServices'));
const QuantumComputing = lazy(() => import('./pages/QuantumTechnology'));
const IoTServices = lazy(() => import('./pages/IoTServicesPage'));
const BlockchainServices = lazy(() => import('./pages/BlockchainServicesPage'));

// Lazy load business solutions
const BusinessSolutions = lazy(() => import('./pages/BusinessSolutionsPage'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const EnterpriseIT = lazy(() => import('./pages/EnterpriseIT'));

// Lazy load additional pages
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Resources = lazy(() => import('./pages/Resources'));

// Enhanced loading spinner with futuristic design
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      {/* Outer ring */}
      <div className="w-32 h-32 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
      {/* Inner ring */}
      <div className="absolute top-4 left-4 w-24 h-24 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      {/* Center dot */}
      <div className="absolute top-8 left-8 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-pulse"></div>
      {/* Glowing effect */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
=======
// Lazy load pages with better chunking
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030.tsx'));

// Enhanced loading spinner with accessibility
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
      <div className="sr-only">Loading page content, please wait...</div>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
    </div>
  </div>
);

<<<<<<< HEAD
// Enhanced 404 Not Found component with futuristic design
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="text-center relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Page not found in the digital realm
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Return to Home
          </a>
          <div className="text-sm text-gray-500">
            <p>Lost in the matrix? We'll guide you back.</p>
          </div>
        </div>
      </div>
=======
// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-zion-slate-light mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
    </div>
  </div>
);

function App() {
  // Performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Futuristic animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>

        <AppHeader />
        
        <main className="relative z-10">
=======
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1" role="main">
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
              
              {/* AI Services */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/services/ai-autonomous-business" element={<AIAutonomousBusiness />} />
              <Route path="/services/ai-autonomous-research" element={<AIAutonomousResearch />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-computer-vision" element={<AIComputerVision />} />
              
              {/* Specialized Services */}
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/cloud-devops" element={<CloudDevOps />} />
              <Route path="/quantum-computing" element={<QuantumComputing />} />
              <Route path="/iot-services" element={<IoTServices />} />
              <Route path="/blockchain-services" element={<BlockchainServices />} />
              
              {/* Business Solutions */}
              <Route path="/business-solutions" element={<BusinessSolutions />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/enterprise-it" element={<EnterpriseIT />} />
              
              {/* Additional pages */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/resources" element={<Resources />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
=======
              <Route path="/login" element={<Login />} />
              <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/revolutionary-services-2030" element={<RevolutionaryServicesShowcase2030 />} />
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;