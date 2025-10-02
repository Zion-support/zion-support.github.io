import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import HomePage from './pages/HomePage';

// HomePage is imported from './pages/HomePage'

interface WindowWithEnhancements extends Window {
  advancedPerformanceOptimizer?: { initialize?: () => void };
  advancedSEOOptimizer?: { initialize?: () => void };
  advancedSecurityManager?: { initialize?: () => void };
  advancedAnalytics?: { initialize?: () => void };
  advancedErrorHandler?: { initialize?: () => void };
  advancedCachingSystem?: { initialize?: () => void };
  advancedUXOptimizer?: { initialize?: () => void };
  advancedTestingFramework?: { initialize?: () => void };
  advancedI18n?: { initialize?: () => void };
  enhancements?: Record<string, unknown>;
  performanceOptimizer?: Record<string, unknown>;
  seoOptimizer?: Record<string, unknown>;
  securityManager?: Record<string, unknown>;
  analytics?: Record<string, unknown>;
  errorHandler?: Record<string, unknown>;
  cachingSystem?: Record<string, unknown>;
  uxOptimizer?: Record<string, unknown>;
  testingFramework?: Record<string, unknown>;
  i18n?: Record<string, unknown>;
}

// Initialize performance enhancements function
const initializePerformanceEnhancements = () => {
  // Performance enhancement initialization logic
  // Performance enhancements initialized
};

// Simple placeholder components for other routes
const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">AI Services</h3>
          <p className="text-gray-600 mb-4">Advanced AI solutions for your business</p>
          <a href="/services" className="text-blue-600 hover:underline">Learn More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Micro SaaS</h3>
          <p className="text-gray-600 mb-4">Custom micro SaaS solutions</p>
          <a href="/services" className="text-blue-600 hover:underline">Learn More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">IT Services</h3>
          <p className="text-gray-600 mb-4">Comprehensive IT consulting and implementation</p>
          <a href="/services" className="text-blue-600 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Zion Tech Group</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          Zion Tech Group is a leading provider of AI, micro SaaS, and IT solutions. 
          We help businesses transform their operations with cutting-edge technology.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-2">
            <p><strong>Phone:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Ready to transform your business? Contact us today for a consultation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

// Main App Component
const App: React.FC = () => {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  interface SEOData {
    title: string;
    description: string;
    canonical: string;
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles and initialization
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    
    // Initialize performance enhancements
    try {
      initializePerformanceEnhancements();
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <AccessibilityEnhancer>
      <EnhancedErrorBoundary>
        <EnhancedSEOHead 
          title={seoDataForOptimizer.title} 
          description={seoDataForOptimizer.description} 
          canonical={seoDataForOptimizer.canonical}
          keywords={['AI', 'IT Solutions', 'Enterprise Automation', 'Technology Services', 'Artificial Intelligence']}
          author="Zion Tech Group"
        />
        <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonical} />
        <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
        <PerformanceMonitor enabled={true} showMetrics={process.env.NODE_ENV === 'development'} />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="text-center text-gray-600">
            <p>364 E Main St STE 1008</p>
            <p>Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </EnhancedErrorBoundary>
    </AccessibilityEnhancer>
  );
}

export default App;