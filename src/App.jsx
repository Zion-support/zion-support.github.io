import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './layout/AppHeader';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

// Home and main pages
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Blog = lazy(() => import('./pages/Blog.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));
const Privacy = lazy(() => import('./pages/Privacy.tsx'));
const Terms = lazy(() => import('./pages/Terms.tsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.tsx'));

// Services pages
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'));
const ServicesPricingPage = lazy(() => import('./pages/ServicesPricingPage.tsx'));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing.tsx'));

// Marketplace pages
const Marketplace = lazy(() => import('./pages/Marketplace.tsx'));

// Support pages
const Support = lazy(() => import('./pages/Support.tsx'));
const Security = lazy(() => import('./pages/Security.tsx'));
const SystemStatus = lazy(() => import('./pages/SystemStatus.tsx'));
const Accessibility = lazy(() => import('./pages/Accessibility.tsx'));

// Documentation pages
const Documentation = lazy(() => import('./pages/Documentation.tsx'));
const WhitePapers = lazy(() => import('./pages/WhitePapers.tsx'));
const Webinars = lazy(() => import('./pages/Webinars.tsx'));
const Training = lazy(() => import('./pages/Training.tsx'));
const Research = lazy(() => import('./pages/Research.tsx'));

// Search and categories
const Search = lazy(() => import('./pages/Search.tsx'));
const Categories = lazy(() => import('./pages/Categories.tsx'));

// API Playground
const ApiPlayground = lazy(() => import('./pages/ApiPlayground.tsx'));

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
              <Route path="/blog" element={<Blog />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/pricing" element={<ComprehensivePricing />} />

              {/* Services routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/pricing" element={<ServicesPricingPage />} />

              {/* Marketplace routes */}
              <Route path="/marketplace" element={<Marketplace />} />

              {/* Support routes */}
              <Route path="/support" element={<Support />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<SystemStatus />} />
              <Route path="/accessibility" element={<Accessibility />} />

              {/* Documentation routes */}
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/research" element={<Research />} />

              {/* Search and categories */}
              <Route path="/search" element={<Search />} />
              <Route path="/categories" element={<Categories />} />

              {/* API Playground */}
              <Route path="/api-playground" element={<ApiPlayground />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                    <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
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
