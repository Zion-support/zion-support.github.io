import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import core components
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
// import SEOHead from './components/SEOHead';
=======
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
>>>>>>> cursor/fix-errors-and-merge-to-main-798c

// Simple Home component
const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced AI and IT Solutions for Modern Businesses
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Solutions</h3>
              <p className="text-gray-600">Cutting-edge artificial intelligence implementations</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Infrastructure</h3>
              <p className="text-gray-600">Robust and scalable technology infrastructure</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Services</h3>
              <p className="text-gray-600">Comprehensive cloud migration and management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
<<<<<<< HEAD
=======
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  // const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  // Performance monitoring toggle
  const togglePerformanceMonitor = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  // Performance metrics collection
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
          togglePerformanceMonitor();
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [togglePerformanceMonitor]);

>>>>>>> cursor/fix-errors-and-merge-to-main-798c
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* <SEOHead /> */}
          <Header />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/services" element={<Home />} />
            </Routes>
          </main>

<<<<<<< HEAD
          <Footer />
=======
            <Footer />

            {/* Performance Monitor Modal */}
            {showPerformanceMonitor && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={togglePerformanceMonitor}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Performance Monitor</h2>
                    <button
                      onClick={togglePerformanceMonitor}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <PerformanceMonitor />
                </motion.div>
              </motion.div>
            )}

            {/* Performance Optimizer (hidden) */}
            <PerformanceOptimizer isVisible={false} onClose={() => {}} />
          </EnhancedErrorBoundary>
>>>>>>> cursor/fix-errors-and-merge-to-main-798c
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;