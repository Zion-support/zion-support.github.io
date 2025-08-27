import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { AIChatbotSystem } from './components/AIChatbotSystem';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const Events = React.lazy(() => import('./pages/events'));
const Products = React.lazy(() => import('./pages/products'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Solutions = React.lazy(() => import('./pages/solutions'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-zion-cyan text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
        {/* Futuristic Animated Background */}
        <FuturisticAnimatedBackground />
        
        {/* Navigation */}
        <FuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/events" element={<Events />} />
              <Route path="/products" element={<Products />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/solutions" element={<Solutions />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <FuturisticFooter />
        
        {/* AI Chatbot System */}
        <AIChatbotSystem />
      </div>
    </Router>
  );
}

export default App;