import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import EnhancedSEO from './components/EnhancedSEO';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));

// Company information pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));

// Additional pages
const Community = lazy(() => import('./pages/CommunityPage'));
const Status = lazy(() => import('./pages/Status'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            {/* Enhanced SEO */}
            <EnhancedSEO 
              title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
              description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
              keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
              type="website"
              url="https://ziontechgroup.com"
            />
            
            <Header />
            <Sidebar />
            
            <main className="pt-20">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  
                  {/* Missing pages from analysis */}
                  <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                  <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                  
                  {/* Company Routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mission" element={<Mission />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/news" element={<News />} />
                  
                  {/* Additional Routes */}
                  <Route path="/community" element={<Community />} />
                  <Route path="/status" element={<Status />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <SonnerToaster />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
};

export default App;