import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerManager from "./src/components/BannerManager";
import PerformanceMonitor from "./src/components/PerformanceMonitor";

// Pages
import Home from "./src/pages/Home";
import Blog from "./src/pages/Blog";
import CaseStudies from "./src/pages/CaseStudies";
import Contact from "./src/pages/Contact";
import EnterpriseAISolutions from "./src/pages/EnterpriseAISolutions";
import Services from "./src/pages/Services";

// Error Boundary
import ErrorBoundary from "./src/components/ErrorBoundary";

// SEO Component
import SEOHead from "./src/components/SEOHead";

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-slate-950">
          <SEOHead 
            title="Zion Tech Group - AI & Enterprise Solutions"
            description="Leading provider of AI consulting, enterprise automation, and cutting-edge technology solutions. Transform your business with our revolutionary AI breakthroughs."
            keywords="AI consulting, enterprise automation, AI solutions, technology consulting, business transformation"
          />
          
          {/* Performance Monitoring */}
          <PerformanceMonitor enabled={true} logLevel="info" />
          
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <main className="relative">
            {/* Banner Management System */}
            <section className="banner-section">
              <BannerManager 
                maxVisibleBanners={3}
                rotationInterval={15000}
                enableRotation={true}
              />
            </section>
            
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enterprise-ai-solutions" element={<EnterpriseAISolutions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai-services" element={<Services />} />
              <Route path="/services/it-services" element={<Services />} />
              <Route path="/services/micro-saas" element={<Services />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}