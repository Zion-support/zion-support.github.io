import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceMonitor } from './components/PerformanceOptimizer';
import LoadingSpinner from './components/LoadingSpinner';

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
const Demo = React.lazy(() => import('./pages/Demo'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AIAnalytics = React.lazy(() => import('./pages/services/ai-analytics'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices.jsx'));
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/micro-saas/ai-business-intelligence'));
const CustomerExperience = React.lazy(() => import('./pages/micro-saas/customer-experience'));
const QuantumComputing = React.lazy(() => import('./pages/micro-saas/quantum-computing'));
const SupplyChain = React.lazy(() => import('./pages/micro-saas/supply-chain'));
const Cybersecurity = React.lazy(() => import('./pages/micro-saas/cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/micro-saas/iot-edge'));
const ContentCreation = React.lazy(() => import('./pages/micro-saas/content-creation'));
const HRPlatform = React.lazy(() => import('./pages/micro-saas/hr-platform'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const Signup = React.lazy(() => import('./pages/Signup'));
const NotFound = React.lazy(() => import('./pages/404.jsx'));
const InnovativeServices2027 = React.lazy(() => import('./pages/InnovativeServices2027'));
const ComprehensivePricing2027 = React.lazy(() => import('./pages/ComprehensivePricing2027'));
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-futuristic">
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
              <Route path="/demo" element={<Demo />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai-analytics" element={<AIAnalytics />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/micro-saas-services" element={<MicroSaasServices />} />
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              <Route path="/micro-saas/quantum-computing" element={<QuantumComputing />} />
              <Route path="/micro-saas/supply-chain" element={<SupplyChain />} />
              <Route path="/micro-saas/cybersecurity" element={<Cybersecurity />} />
              <Route path="/micro-saas/iot-edge" element={<IoTEdgeComputing />} />
              <Route path="/micro-saas/content-creation" element={<ContentCreation />} />
              <Route path="/micro-saas/hr-platform" element={<HRPlatform />} />
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
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;