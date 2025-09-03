import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Sidebar } from './components/sidebar/Sidebar';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/home').then(module => ({ default: module.default })));
const ServicesPage = lazy(() => import('./pages/services').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/solutions').then(module => ({ default: module.default })));
const AboutPage = lazy(() => import('./pages/about').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('./pages/contact').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('./pages/blog').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));
const ComprehensiveServicesShowcase2026 = lazy(() => import('./pages/ComprehensiveServicesShowcase2026').then(module => ({ default: module.default })));
const ComprehensiveMarketingPage2026 = lazy(() => import('./pages/ComprehensiveMarketingPage2026').then(module => ({ default: module.default })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

// New page imports
const TeamPage = lazy(() => import('./pages/team').then(module => ({ default: module.default })));
const ResourcesPage = lazy(() => import('./pages/resources').then(module => ({ default: module.default })));
const NewsPage = lazy(() => import('./pages/news').then(module => ({ default: module.default })));
const EventsPage = lazy(() => import('./pages/events').then(module => ({ default: module.default })));
const PartnersPage = lazy(() => import('./pages/partners').then(module => ({ default: module.default })));
const AISalesCopilotPage = lazy(() => import('./pages/services/ai-sales-copilot').then(module => ({ default: module.default })));
const CloudFinOpsOptimizerPage = lazy(() => import('./pages/services/cloud-finops-optimizer').then(module => ({ default: module.default })));

// New service pages
const MicroSaaSPage = lazy(() => import('./pages/micro-saas').then(module => ({ default: module.default })));
const AIServicesPage = lazy(() => import('./pages/ai-services').then(module => ({ default: module.default })));
const ITServicesPage = lazy(() => import('./pages/it-services').then(module => ({ default: module.default })));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-900 text-white">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="lg:ml-80">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                <Route path="/comprehensive-marketing-2026" element={<ComprehensiveMarketingPage2026 />} />
                <Route path="/services/ai-sales-copilot" element={<AISalesCopilotPage />} />
                <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizerPage />} />
                
                {/* New service routes */}
                <Route path="/micro-saas" element={<MicroSaaSPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                
                {/* Additional routes */}
                <Route path="/careers" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Careers</h1><p>Join our team of innovators and help shape the future of technology.</p></div>} />
                <Route path="/privacy" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Privacy Policy</h1><p>Your privacy is important to us. Learn how we protect your data.</p></div>} />
                <Route path="/terms" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Terms of Service</h1><p>Read our terms and conditions for using our services.</p></div>} />
                <Route path="/cookies" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Cookie Policy</h1><p>Learn about how we use cookies to improve your experience.</p></div>} />
                
                <Route path="*" element={<NotFoundPage />} />
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