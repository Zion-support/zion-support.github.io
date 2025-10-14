import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import Loading from "./app/components/Loading";
import ErrorBoundary from "./app/components/ErrorBoundary";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const SolutionsPage = React.lazy(() => import("./app/solutions/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const MicroSaaSPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const BlockchainPage = React.lazy(() => import("./app/blockchain/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const IoTEdgePage = React.lazy(() => import("./app/iot-edge/page"));
const AutonomousSystemsPage = React.lazy(() => import("./app/autonomous-systems/page"));
const DigitalTransformationPage = React.lazy(() => import("./app/digital-transformation/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const DocumentationPage = React.lazy(() => import("./app/api-docs/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const GDPRPage = React.lazy(() => import("./app/gdpr/page"));
const TeamPage = React.lazy(() => import("./app/team/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const NotFoundPage = React.lazy(() => import("./app/not-found"));

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
            <main className="relative">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/micro-saas" element={<MicroSaaSPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/blockchain" element={<BlockchainPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/iot-edge" element={<IoTEdgePage />} />
                  <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/api-docs" element={<DocumentationPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/gdpr" element={<GDPRPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;