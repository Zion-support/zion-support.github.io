
// Core components - keep these synchronous for critical path;
import Navigation from './app/components/Navigation';'
import Sidebar from './app/components/Sidebar';'
import Footer from './app/components/Footer';'
import LightweightErrorBoundary from './app/components/LightweightErrorBoundary';'
import PerformanceMonitor from './app/components/PerformanceMonitor';'

// Lazy load pages for better performance;
const HomePage = lazy(() => import('./app/page'));'
const AboutPage = lazy(() => import('./app/about/page'));'
const ServicesPage = lazy(() => import('./app/services/page'));'
const ContactPage = lazy(() => import('./app/contact/page'));'

            Try again
          </button>
        </div>
      </div>
    </div>
// Loading component;
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">"
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>"
  </div>
  return (
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

import React from 'react';'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';'
import { HelmetProvider } from 'react-helmet-async';'

// Core components - keep these synchronous for critical path;
import Navigation from './app/components/Navigation';'
import Footer from './app/components/Footer';'
import ErrorBoundary from './app/components/ErrorBoundary';'


const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">"
            <Navigation />
            <main className="flex-1">"
              <Routes>
                <Route path="/" element={">
                  <div className="p-6">"
                    <h1 className="text-2xl font-bold mb-4">Optimized App</h1>"
                    <p>This is an optimized version of the app.</p>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );


    </LightweightErrorBoundary>";"
  );";";"
}";";";"
