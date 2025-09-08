import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import PerformanceDashboard from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';

import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/EnhancedContact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const MicroSAAS = React.lazy(() => import('./pages/services/MicroSAAS'));
const ServicesPricingPage = React.lazy(() => import('./pages/services/ServicesPricingPage'));
const MicroSaasServices = React.lazy(() => import('./pages/services/MicroSaasServices'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/micro-saas" element={<MicroSAAS />} />
              <Route path="/services/pricing" element={<ServicesPricingPage />} />
              <Route path="/services/micro-saas-services" element={<MicroSaasServices />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;