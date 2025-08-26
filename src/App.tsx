import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
<<<<<<< HEAD
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
=======
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const MicroSAAS = React.lazy(() => import('./pages/micro-saas'));
const Marketplace = React.lazy(() => import('./pages/marketplace'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-futuristic">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold">
        ZION
      </div>
>>>>>>> main
    </div>
  </div>
);

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>
              </div>
            </div>
          </div>
        </header>
=======
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
>>>>>>> main
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
<<<<<<< HEAD
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
=======
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/marketplace" element={<Marketplace />} />
>>>>>>> main
            </Routes>
          </Suspense>
        </main>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;