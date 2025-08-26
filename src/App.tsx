import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/LoadingSpinner';
import { AppWrapper } from './AppWrapper';
import { PerformanceMonitor } from './components/ui/performance-monitor';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices.jsx'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const Signup = React.lazy(() => import('./pages/Signup'));
const NotFound = React.lazy(() => import('./pages/404.jsx'));
const InnovativeServices2027 = React.lazy(() => import('./pages/InnovativeServices2027'));
const ComprehensivePricing2027 = React.lazy(() => import('./pages/ComprehensivePricing2027'));
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));

function App() {
  return (
    <AppWrapper>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/micro-saas-services" element={<MicroSaasServices />} />
                <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                <Route path="/hire-ai" element={<ZionHireAI />} />
                <Route path="/innovative-services-2027" element={<InnovativeServices2027 />} />
                <Route path="/comprehensive-pricing-2027" element={<ComprehensivePricing2027 />} />
                <Route path="/all-services-2027" element={<AllServices2027 />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceMonitor enabled={true} autoRefresh={true} />
        </div>
      </Router>
    </AppWrapper>
  );
}

export default App;