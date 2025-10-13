import React, { Suspense, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/futuristic-advanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";

// Simple loading component
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
  </div>
);

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation onSidebarToggle={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          
          <main className="relative z-10" id="main-content" role="main">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />

                {/* Catch all route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
