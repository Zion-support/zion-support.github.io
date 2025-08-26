import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

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
    </div>
  </div>
);

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
    </div>
  </div>
);

function App() {
  return (
    <Router>
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
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              
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
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;