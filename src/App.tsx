import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Team = React.lazy(() => import('./pages/Team'));
const Support = React.lazy(() => import('./pages/Support'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[18rem_1fr] gap-8">
              <Sidebar />
              <div id="main-content">
                <React.Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services/*" element={<ServicesPage />} />
                    <Route path="/solutions/*" element={<SolutionsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog/*" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route
                      path="*"
                      element={
                        <div className="min-h-screen flex items-center justify-center">
                          <div className="text-center">
                            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                            <p className="text-xl text-gray-600 mb-8">Page not found</p>
                            <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Return Home</a>
                          </div>
                        </div>
                      }
                    />
                  </Routes>
                </React.Suspense>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;