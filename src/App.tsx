import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from './components/ui/loading-spinner';
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
<<<<<<< HEAD
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Partners = lazy(() => import('./pages/Partners'));
const Support = lazy(() => import('./pages/Support'));
const Login = lazy(() => import('./pages/Login'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Privacy = lazy(() => import('./pages/Privacy'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Research = lazy(() => import('./pages/Research'));
const Careers = lazy(() => import('./pages/Careers'));
const ServicesPricingPage = lazy(() => import('./pages/ServicesPricingPage'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const Blog = lazy(() => import('./pages/Blog'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Training = lazy(() => import('./pages/Training'));
const Security = lazy(() => import('./pages/Security'));
const Terms = lazy(() => import('./pages/Terms'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Webinars = lazy(() => import('./pages/Webinars'));
const SystemStatus = lazy(() => import('./pages/SystemStatus'));
const Search = lazy(() => import('./pages/Search'));
const ApiPlayground = lazy(() => import('./pages/ApiPlayground'));
const Categories = lazy(() => import('./pages/Categories'));
=======
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
>>>>>>> cursor/analyze-improve-and-deploy-application-a9ec

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
<<<<<<< HEAD
        <EnhancedHeader />
        <main className="min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/research" element={<Research />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/services-pricing" element={<ServicesPricingPage />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/training" element={<Training />} />
              <Route path="/security" element={<Security />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/system-status" element={<SystemStatus />} />
              <Route path="/search" element={<Search />} />
              <Route path="/api-playground" element={<ApiPlayground />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </Suspense>
        </main>
        <EnhancedFooter />
=======
        <Header />
        <div className="flex pt-16">
          <Sidebar isOpen={false} onToggle={() => {}} />
          <main className="flex-1 ml-64 min-h-screen">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer />
>>>>>>> cursor/analyze-improve-and-deploy-application-a9ec
      </div>
    </ErrorBoundary>
  );
}

export default App;