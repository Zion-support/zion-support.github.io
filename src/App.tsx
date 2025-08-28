import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home').then(module => ({ 
  default: module.default 
})));

const About = lazy(() => import('./pages/About').then(module => ({ 
  default: module.default 
})));

const Contact = lazy(() => import('./pages/Contact').then(module => ({ 
  default: module.default 
})));

const Blog = lazy(() => import('./pages/Blog').then(module => ({ 
  default: module.default 
})));

const BlogPost = lazy(() => import('./pages/BlogPost').then(module => ({ 
  default: module.default 
})));

const Services = lazy(() => import('./pages/Services').then(module => ({ 
  default: module.default 
})));

const RequestQuote = lazy(() => import('./pages/RequestQuote').then(module => ({ 
  default: module.default 
})));

const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ 
  default: module.default 
})));

const Login = lazy(() => import('./pages/Login').then(module => ({ 
  default: module.default 
})));

const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ 
  default: module.default 
})));

const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ 
  default: module.default 
})));

const Terms = lazy(() => import('./pages/Terms').then(module => ({ 
  default: module.default 
})));

const Cookies = lazy(() => import('./pages/Cookies').then(module => ({ 
  default: module.default 
})));

const SearchPage = lazy(() => import('./pages/SearchPage').then(module => ({ 
  default: module.default 
})));

// Enhanced services pages with better error handling
const ComprehensivePricingGuide2027 = lazy(() => 
  import('./pages/ComprehensivePricingGuide2027.tsx').then(module => ({ 
    default: module.default 
  }))
);

const ComprehensivePricingGuide2030 = lazy(() => 
  import('./pages/ComprehensivePricingGuide2030.tsx').then(module => ({ 
    default: module.default 
  }))
);

const ComprehensiveServicesLanding2025 = lazy(() => 
  import('./pages/ComprehensiveServicesLanding2025.jsx').then(module => ({ 
    default: module.default 
  }))
);

const EnhancedServicesLanding = lazy(() => 
  import('./pages/EnhancedServicesLanding.tsx').then(module => ({ 
    default: module.default 
  }))
);

// Service pages with optimized loading
const CloudDevOps = lazy(() => 
  import('./pages/services/CloudDevOps').then(module => ({ 
    default: module.default 
  }))
);

const DigitalTwin = lazy(() => 
  import('./pages/services/DigitalTwin').then(module => ({ 
    default: module.default 
  }))
);

const DataAnalytics = lazy(() => 
  import('./pages/services/DataAnalytics').then(module => ({ 
    default: module.default 
  }))
);

const ITInfrastructure = lazy(() => 
  import('./pages/services/ITInfrastructure').then(module => ({ 
    default: module.default 
  }))
);

const AIBusinessIntelligence = lazy(() => 
  import('./pages/services/AIBusinessIntelligence').then(module => ({ 
    default: module.default 
  }))
);

const MicroSaaSProducts = lazy(() => 
  import('./pages/services/MicroSaaSProducts').then(module => ({ 
    default: module.default 
  }))
);

// Enhanced placeholder pages with better SEO and accessibility
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
      keywords="careers, jobs, technology, AI, Zion Tech Group, employment opportunities"
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
      <div className="mt-8">
        <p className="text-gray-400 mb-4">We're always looking for talented individuals to join our mission</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
          View Open Positions
        </button>
      </div>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
      keywords="marketplace, AI solutions, technology services, Zion Tech Group"
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
      <div className="mt-8">
        <p className="text-gray-400 mb-4">Discover cutting-edge AI and technology solutions</p>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
          Browse Solutions
        </button>
      </div>
    </div>
  </div>
);

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner size="xl" color="cyan" text="Loading amazing content..." showText={true} />
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
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
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;