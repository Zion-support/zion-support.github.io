

// Core components - keep these synchronous for critical path
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import LightweightErrorBoundary from './app/components/LightweightErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
  </div>

  return (

>>>>>>> main
                              Go Home
                            </a>
                          </div>
                        </div>,
                      } />
                    </Routes>
                  </Suspense>
                </LightweightErrorBoundary>
              </main>
              <Footer />
              <PerformanceMonitor />
              <AccessibilityEnhancer />
            </div>
          </div>
        </Router>
      </HelmetProvider>

}

export default App

