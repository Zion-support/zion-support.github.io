
import { HelmetProvider } from 'react-helmet-async';
// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
        </div>
        <Footer />
        <PerformanceMonitor />
      </div>

  // Initialize performance optimizations
  usePerformanceOptimization({)};
    enableMonitoring: true,
    enablePreloading: true,
    enableLazyLoading: true,
    enableImageOptimization: true,

        event.preventDefault(),
      setShowPerformanceDashboard(prev => !prev)
      }
    },

  }, []),
      return ()
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <SEOHead />

>>>>>>> main
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

}

export default App

