import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
<<<<<<< HEAD
import { LoadingSpinner } from './components/ui/loading-spinner';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { ChatAssistant } from './components/ChatAssistant';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/search" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/resources" element={<Services />} />
                <Route path="/case-studies" element={<Services />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Services />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule-demo" element={<Contact />} />
                <Route path="/community" element={<Services />} />
                <Route path="/demo" element={<Services />} />
                <Route path="/team" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<Help />} />
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
                {/* Service Routes */}
                <Route path="/ai-services" element={<AISolutions />} />
                <Route path="/it-services" element={<ITServices />} />
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsPage />} />
                <Route path="/solutions/healthcare" element={<SolutionsPage />} />
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<Services />} />
                <Route path="/services/digital-twin" element={<Services />} />
                <Route path="/services/data-analytics" element={<Services />} />
                <Route path="/services/it-infrastructure" element={<Services />} />
                <Route path="/services/ai-business-intelligence" element={<Services />} />
                <Route path="/services/ai-sales-copilot" element={<Services />} />
                <Route path="/services/cloud-finops-optimizer" element={<Services />} />
                <Route path="/services/ai-compliance-assistant" element={<Services />} />
                <Route path="/services/ai-auto-email-responder" element={<Services />} />
                <Route path="/services/mobile-feedback-surveys" element={<Services />} />
                <Route path="/services/ai-compliance-copilot" element={<Services />} />
                <Route path="/services/llm-content-studio" element={<Services />} />
                <Route path="/services/finops-advisor" element={<Services />} />
                <Route path="/services/returns-management" element={<Services />} />
                <Route path="/services/email-sequencer" element={<Services />} />
                <Route path="/services/podcast-transcription" element={<Services />} />
                <Route path="/services/micro-crm" element={<Services />} />
                <Route path="/services/website-analytics" element={<Services />} />
                <Route path="/services/it-helpdesk" element={<Services />} />
                <Route path="/services/affiliate-tracking" element={<Services />} />
                <Route path="/services/mobile-survey" element={<Services />} />
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<Services />} />
                <Route path="/services/interview-assessment" element={<Services />} />
                <Route path="/services/helpdesk" element={<Helpdesk />} />
                <Route path="/services/dsr-portal" element={<Services />} />
                <Route path="/services/security-headers-csp" element={<Services />} />
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<Services />} />
                <Route path="/services/ai-customer-support-automation" element={<Services />} />
                <Route path="/services/ai-financial-analytics" element={<Services />} />
                <Route path="/services/ai-marketing-automation" element={<Services />} />
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<Services />} />
                <Route path="/services/ai-predictive-maintenance" element={<Services />} />
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<Services />} />
                <Route path="/services/ai-data-governance-platform" element={<Services />} />
                <Route path="/services/ai-customer-experience-analytics" element={<Services />} />
                {/* Quantum and advanced services */}
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                {/* Revolutionary services */}
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
                {/* Sitemap routes */}
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                {/* Support routes */}
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                {/* Catch-all route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          {/* Enhanced Components */}
          <PerformanceOptimizer />
          <EnhancedAccessibilityEnhancer />
          <MobileExperienceEnhancer />
          <ChatAssistant />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
=======
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/loading-spinner';
// Lazy load pages for better performance;
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const ServicesOverview = lazy(() => import('./pages/services-overview'));
// Service pages;
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));
// Simple Header component;
const Header = () => (;
  <header className="bg-zion-slate-dark text-white p-4 shadow-lg">;
    <div className="container mx-auto">;
      <h1 className="text-2xl font-bold">Zion Tech Group</h1>;
      <nav className="mt-2">;
        <a href="/" className="mr-4 hover:text-cyan-400">Home</a>;
        <a href="/about" className="mr-4 hover:text-cyan-400">About</a>;
        <a href="/services" className="mr-4 hover:text-cyan-400">Services</a>;
        <a href="/contact" className="hover:text-cyan-400">Contact</a>;
      </nav>;
      <div className="mt-2 text-sm text-gray-300">;
        <a href="tel:+13024640950" className="mr-4 hover:text-cyan-400">+1 302 464 0950</a>;
        <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">kleber@ziontechgroup.com</a>;
      </div>;
    </div>;
  </header>;
);
// Simple Footer component;
const Footer = () => (;
  <footer className="bg-zion-slate-dark text-white p-4 mt-auto">;
    <div className="container mx-auto text-center">;
      <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>;
      <div className="mt-2 text-sm text-gray-300">;
        <p>Phone: <a href="tel:+13024640950" className="hover:text-cyan-400">+1 302 464 0950</a></p>;
        <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">kleber@ziontechgroup.com</a></p>;
        <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>;
        <p>Website: <a href="https://ziontechgroup.com" className="hover:text-cyan-400">https://ziontechgroup.com</a></p>;
      </div>;
    </div>;
  </footer>;
);
function App() {;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <Header />;
      <main className="flex-1">;
        <Suspense fallback={<LoadingSpinner />}>;
          <Routes>;
            <Route path="/" element={<HomePage />} />;
            <Route path="/about" element={<AboutPage />} />;
            <Route path="/contact" element={<ContactPage />} />;
            <Route path="/services" element={<ServicesPage />} />;
            <Route path="/services-overview" element={<ServicesOverview />} />;
            <Route path="/solutions" element={<SolutionsPage />} />;
            {/* Service pages */}
            <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />;
            <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />;
            <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />;
            <Route path="*" element={<HomePage />} />;
          </Routes>;
        </Suspense>;
      </main>;
      <Footer />;
    </div>;
  );
}

export default App;
>>>>>>> origin/automation-fixes
