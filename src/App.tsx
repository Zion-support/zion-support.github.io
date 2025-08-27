import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';

// Lazy load pages - only import existing ones
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Talent = lazy(() => import('./pages/Talent'));
const Equipment = lazy(() => import('./pages/EquipmentPage'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Status = lazy(() => import('./pages/Status'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/NotFound'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const ComprehensiveServicesShowcase = lazy(() => import('./components/ComprehensiveServicesShowcase'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-500/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-500 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-500 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <FuturisticAnimatedBackground />
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Content Pages */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/partners-page" element={<PartnersPage />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/status" element={<Status />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Enhanced Services */}
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />
              
              {/* 404 Route */}
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