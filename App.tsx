import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './src/Footer';
import Header from './src/Header';
import ScrollToTop from './src/ScrollToTop';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import './src/index.css';
import './src/styles/accessibility.css';
import './src/styles/optimizations.css';

// Import only existing components
import About from './About';
import Blog from './src/pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <PerformanceOptimizer />
        <AccessibilityEnhancer />
        <SEOOptimizer />
        <MobileOptimizer />
        <ModernSEOOptimizer />
        <ModernMobileOptimizer />
        <EnhancedAccessibilityPanel />
        <ModernPerformanceMonitor />
        <PerformanceDashboard />
        <AdvancedPerformanceOptimizer2025 />
        <AdvancedSEOOptimizer2025 />
        <AdvancedAnalyticsTracker2025 />
        <EnhancedAccessibility2025 />
        <MobileOptimizer2025 />
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <EnhancedHeroSection />
                <FeaturedContentSection />
              </div>
            }
          />

          {/* Legacy Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          {/* Catch-all route for SPA */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a
                    href="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;