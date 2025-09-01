import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.tsx';

// Home and main pages'
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));

// Services pages
const ComprehensivePricing = lazy(() => 
  import('./pages/ComprehensivePricing2025.tsx')
);
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/pricing" element={<ComprehensivePricing />} />

              {/* Services routes */}
              <Route path="/services" element={<ServicesPage />} />

              {/* Catch-all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-zion-cyan mb-4">
                        404 - Page Not Found
                      </h1>
                      <p className="text-zion-slate-light mb-6">
                        The page you're looking for doesn't exist.
                      </p>
                      <a
                        href="/"
                        className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;