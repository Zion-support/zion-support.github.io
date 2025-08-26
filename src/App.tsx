import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Additional pages that were missing
const Careers = lazy(() => import('./pages/Careers'));
const Solutions = lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const News = lazy(() => import('./pages/News'));
const Events = lazy(() => import('./pages/Events'));
const Blog = lazy(() => import('./pages/Blog'));
const Documentation = lazy(() => import('./pages/Documentation'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Training = lazy(() => import('./pages/Training'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Support = lazy(() => import('./pages/Support'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Partners = lazy(() => import('./pages/Partners'));

// Service-specific pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudServices = lazy(() => import('./pages/services/CloudServices'));
const CybersecurityServices = lazy(() => import('./pages/services/CybersecurityServices'));
const InfrastructureServices = lazy(() => import('./pages/services/InfrastructureServices'));
const TransformationServices = lazy(() => import('./pages/services/TransformationServices'));
const ConsultingServices = lazy(() => import('./pages/services/ConsultingServices'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-500 mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">
        Go back home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <AppHeader />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Company Pages */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* Resource Pages */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              
              {/* Support Pages */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Service-Specific Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/transformation" element={<TransformationServices />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;