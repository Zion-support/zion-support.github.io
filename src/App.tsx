import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import SimplePage from './pages/SimplePage';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));

// Note: Other pages will be rendered via SimplePage placeholders to ensure 200 responses

// Service pages - only import existing ones

// Simple placeholder pages for missing ones
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <SEO />
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Core sitemap pages rendered via SimplePage placeholders (if dedicated pages are absent) */}
                <Route path="/about" element={<SimplePage title="About" description="Learn about Zion Tech Group." />} />
                <Route path="/contact" element={<SimplePage title="Contact" description="Get in touch with us." />} />
                <Route path="/blog" element={<SimplePage title="Blog" description="Latest news and insights." />} />
                <Route path="/faq" element={<SimplePage title="FAQ" description="Frequently asked questions." />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partners" element={<SimplePage title="Partners" description="Our strategic partners." />} />
                <Route path="/news" element={<SimplePage title="News" description="Company news and updates." />} />
                <Route path="/solutions" element={<SimplePage title="Solutions" description="Explore our solutions." />} />
                <Route path="/research-development" element={<SimplePage title="Research & Development" description="Our R&D initiatives." />} />
                <Route path="/request-quote" element={<SimplePage title="Request a Quote" description="Tell us about your needs." />} />
                <Route path="/green-it" element={<SimplePage title="Green IT" description="Sustainable technology solutions." />} />

                {/* Services hubs */}
                <Route path="/services" element={<SimplePage title="Services" description="All services in one place." />} />
                <Route path="/services/ai-analytics" element={<SimplePage title="AI & Analytics" />} />
                <Route path="/services/cybersecurity" element={<SimplePage title="Cybersecurity" />} />
                <Route path="/services/cloud-devops" element={<SimplePage title="Cloud & DevOps" />} />
                <Route path="/services/iot-edge" element={<SimplePage title="IoT & Edge" />} />
                <Route path="/services/quantum-computing" element={<SimplePage title="Quantum Computing" />} />
                <Route path="/services/blockchain" element={<SimplePage title="Blockchain" />} />
                <Route path="/services/digital-twin" element={<SimplePage title="Digital Twin" />} />
                <Route path="/services/sustainability" element={<SimplePage title="Sustainability" />} />
                <Route path="/services/data-analytics" element={<SimplePage title="Data & Analytics" />} />
                <Route path="/services/infrastructure" element={<SimplePage title="Infrastructure" />} />
                <Route path="/services/digital-transformation" element={<SimplePage title="Digital Transformation" />} />
                <Route path="/services/consulting" element={<SimplePage title="Consulting" />} />
                <Route path="/services/onsite-support" element={<SimplePage title="Onsite Support" />} />
                <Route path="/services/5g-solutions" element={<SimplePage title="5G Solutions" />} />

                {/* Micro SAAS */}
                <Route path="/micro-saas" element={<SimplePage title="Micro SAAS" />} />
                <Route path="/micro-saas/ai-business-intelligence" element={<SimplePage title="AI Business Intelligence" />} />
                <Route path="/micro-saas/customer-experience" element={<SimplePage title="Customer Experience" />} />
                <Route path="/micro-saas/quantum-computing" element={<SimplePage title="Quantum Computing SAAS" />} />
                <Route path="/micro-saas/supply-chain" element={<SimplePage title="Supply Chain" />} />
                <Route path="/micro-saas/cybersecurity" element={<SimplePage title="Cybersecurity" />} />
                <Route path="/micro-saas/iot-edge" element={<SimplePage title="IoT & Edge SAAS" />} />
                <Route path="/micro-saas/content-creation" element={<SimplePage title="Content Creation" />} />
                <Route path="/micro-saas/hr-platform" element={<SimplePage title="HR Platform" />} />

                {/* IT Services */}
                <Route path="/it-services" element={<SimplePage title="IT Services" />} />
                <Route path="/it-services/infrastructure" element={<SimplePage title="IT Infrastructure" />} />
                <Route path="/it-services/digital-transformation" element={<SimplePage title="Digital Transformation" />} />
                <Route path="/it-services/consulting" element={<SimplePage title="IT Consulting" />} />
                <Route path="/it-services/onsite-support" element={<SimplePage title="Onsite Support" />} />
                <Route path="/it-services/green-it" element={<SimplePage title="Green IT" />} />
                <Route path="/it-services/5g-solutions" element={<SimplePage title="5G Solutions" />} />

                {/* Marketplace */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/marketplace/products" element={<SimplePage title="Marketplace Products" />} />
                <Route path="/marketplace/talent" element={<SimplePage title="Marketplace Talent" />} />
                <Route path="/marketplace/equipment" element={<SimplePage title="Marketplace Equipment" />} />
                <Route path="/marketplace/services" element={<SimplePage title="Marketplace Services" />} />
                <Route path="/talent" element={<SimplePage title="Talent" />} />
                <Route path="/equipment" element={<SimplePage title="Equipment" />} />
                <Route path="/it-onsite-services" element={<SimplePage title="IT Onsite Services" />} />

                {/* Company */}
                <Route path="/team" element={<SimplePage title="Our Team" />} />
                <Route path="/help" element={<SimplePage title="Help Center" />} />
                <Route path="/security" element={<SimplePage title="Security" />} />
                <Route path="/status" element={<SimplePage title="Status" />} />

                {/* Legal */}
                <Route path="/privacy" element={<SimplePage title="Privacy Policy" />} />
                <Route path="/terms" element={<SimplePage title="Terms of Service" />} />
                <Route path="/cookies" element={<SimplePage title="Cookie Policy" />} />
                <Route path="/sitemap" element={<SimplePage title="Sitemap" />} />

                {/* Auth */}
                <Route path="/login" element={<SimplePage title="Login" />} />
                <Route path="/signup" element={<SimplePage title="Sign Up" />} />
                
                {/* Keep any specifically implemented service pages if present later */}
                
                {/* Catch all route */}
                <Route path="*" element={<SimplePage title="Page" description="This page is coming soon." />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;