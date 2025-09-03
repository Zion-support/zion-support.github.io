import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { ModernHeader } from './components/header/ModernHeader';
import { SimpleFooter } from './components/layout/SimpleFooter';
import { Sidebar } from './components/layout/Sidebar';
import { PageLoader } from './components/PageLoader';
import { ErrorFallback } from './components/ErrorFallback';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/index'));
const About = lazy(() => import('../pages/about'));
const Contact = lazy(() => import('../pages/contact'));
const Services = lazy(() => import('../pages/services'));
const Solutions = lazy(() => import('../pages/solutions'));
const MicroSaaS = lazy(() => import('../pages/micro-saas'));
const AIServices = lazy(() => import('../pages/ai-services'));
const ITServices = lazy(() => import('../pages/it-services'));
const Blog = lazy(() => import('../pages/blog'));
const Careers = lazy(() => import('../pages/careers'));
const Partners = lazy(() => import('../pages/partners'));
const CaseStudies = lazy(() => import('../pages/case-studies'));
const News = lazy(() => import('../pages/news'));
const Team = lazy(() => import('../pages/team'));
const Help = lazy(() => import('../pages/help'));
const Privacy = lazy(() => import('../pages/privacy'));
const Terms = lazy(() => import('../pages/terms'));
const Cookies = lazy(() => import('../pages/cookies'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const RequestQuote = lazy(() => import('../pages/request-quote'));
const Marketplace = lazy(() => import('../pages/marketplace'));
const Products = lazy(() => import('../pages/products'));
const Talent = lazy(() => import('../pages/talent'));
const Training = lazy(() => import('../pages/training'));
const Documentation = lazy(() => import('../pages/documentation'));
const Developer = lazy(() => import('../pages/developer'));
const Demo = lazy(() => import('../pages/demo'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Search = lazy(() => import('../pages/search'));
const Status = lazy(() => import('../pages/status'));
const Sitemap = lazy(() => import('../pages/sitemap'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
        <PerformanceOptimizer>
          <SEO />
          <div className="min-h-screen bg-gray-50">
            <ModernHeader />
            <div className="flex">
              <Sidebar />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Core Pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/talent" element={<Talent />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/search" element={<Search />} />
                    
                    {/* Services */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/ai" element={<AIServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/it-services" element={<ITServices />} />
                    
                    {/* Legal */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    
                    {/* 404 Fallback */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            <SimpleFooter />
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;