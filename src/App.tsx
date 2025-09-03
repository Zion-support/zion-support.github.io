import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// Lazy loading helper function
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
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

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                <Route path="/comprehensive-marketing-2026" element={<ComprehensiveMarketingPage2026 />} />
                <Route path="/services/ai-sales-copilot" element={<AISalesCopilotPage />} />
                <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizerPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;