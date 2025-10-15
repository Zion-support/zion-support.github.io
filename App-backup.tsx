import { HelmetProvider } from 'react-helmet-async';'

// Components;
import Navigation from './app/components/Navigation';'
import Sidebar from './app/components/Sidebar';'
import Footer from './app/components/Footer';'
import ErrorBoundary from './app/components/ErrorBoundary';'
import PerformanceMonitor from './app/components/PerformanceMonitor';'

            Try again
          </button>
function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-900">"
        <Navigation />
        <div className="flex">"
          <Sidebar />
          <main className="flex-1 p-6">"
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />"
                  <Route path="/about" element={<AboutPage />} />"
                  <Route path="/services" element={<ServicesPage />} />"
                  <Route path="/contact" element={<ContactPage />} />"
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
        </div>
        <Footer />
        <PerformanceMonitor />
      </div>
  // Initialize performance optimizations;
usePerformanceOptimization({)};
    enableMonitoring: true,
    enablePreloading: true,
    enableLazyLoading: true,
    enableImageOptimization: true,
        event.preventDefault(),
      setShowPerformanceDashboard(prev => !prev)

  }, []),
      return ()
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <SEOHead />
                              Go Home
                            </a>
                          </div>
                        </div>
                      } />
                    </Routes>
                  </>
                </LightweightErrorBoundary>
              </main>
              <Footer />
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              <PerformanceDashboard>
                isVisible={showPerformanceDashboard};
                onClose={() => setShowPerformanceDashboard(false)};
              />
            </div>
          </div>
        </Router>
      </HelmetProvider>

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <div className="min-h-screen bg-gray-50">"
            <Navigation />
            <main className="flex">"
              <Sidebar />
              <div className="flex-1 p-6">"
                <h1 className="text-2xl font-bold mb-4">App Backup</h1>"
                <p>This is a backup version of the app.</p>
              </div>
            </main>
            <Footer />
          </div>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  );


    </ErrorBoundary>";"
  );";";"
}";";";"
