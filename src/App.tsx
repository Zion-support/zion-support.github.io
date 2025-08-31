import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
        <p className="mt-4">Loading...</p>
      </div>
    </div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// New Cutting-Edge AI Services 2029 - these are the new services we created
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/AI-Autonomous-Research-Assistant'));
const AIAutonomousBusinessManager = createLazyComponent(() => import('./pages/services/AI-Autonomous-Business-Manager'));
const AIConsciousnessSimulationPlatform = createLazyComponent(() => import('./pages/services/AI-Consciousness-Simulation-Platform'));

// Zion Cutting Edge Services 2029 Showcase
const ZionCuttingEdgeServices2029 = createLazyComponent(() => import('./pages/Zion-Cutting-Edge-Services-2029'));

// Simple Header Component
const SimpleHeader = () => (
  <header className="bg-slate-900 border-b border-slate-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/zion-cutting-edge-services-2029" className="text-gray-300 hover:text-white transition-colors">Services</a>
        </nav>
      </div>
    </div>
  </header>
);

// Simple Footer Component
const SimpleFooter = () => (
  <footer className="bg-slate-900 border-t border-slate-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Zion Tech Group</h3>
          <p className="text-gray-400">Leading provider of cutting-edge AI and technology solutions.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-400">
            <p>Mobile: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <div className="space-y-2 text-gray-400">
            <a href="/services/ai-quantum-hybrid-platform" className="block hover:text-white transition-colors">AI-Quantum Hybrid Platform</a>
            <a href="/services/ai-autonomous-research-assistant" className="block hover:text-white transition-colors">AI Autonomous Research Assistant</a>
            <a href="/services/ai-autonomous-business-manager" className="block hover:text-white transition-colors">AI Autonomous Business Manager</a>
            <a href="/services/ai-consciousness-simulation-platform" className="block hover:text-white transition-colors">AI Consciousness Simulation Platform</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
        <p>&copy; 2029 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error!} resetErrorBoundary={() => this.setState({ hasError: false })} />;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
          {/* Header */}
          <SimpleHeader />

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
                <p className="mt-4">Loading...</p>
              </div>
            </div>}>
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Home Route - Simple landing page */}
                  <Route
                    path="/"
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                      >
                        <div className="text-center text-white">
                          <h1 className="text-6xl font-bold mb-4">Zion Tech Group</h1>
                          <h2 className="text-2xl font-semibold mb-4">Cutting-Edge AI Services 2029</h2>
                          <p className="text-gray-300 mb-8">
                            Welcome to the future of AI technology. Explore our revolutionary services.
                          </p>
                          <div className="space-y-4">
                            <a
                              href="/zion-cutting-edge-services-2029"
                              className="block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                              View All Services
                            </a>
                            <a
                              href="/services/ai-quantum-hybrid-platform"
                              className="block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                            >
                              AI-Quantum Hybrid Platform
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    }
                  />

                  {/* New Cutting-Edge AI Service Routes 2029 */}
                  <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                  <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                  <Route path="/services/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                  <Route path="/services/ai-consciousness-simulation-platform" element={<AIConsciousnessSimulationPlatform />} />

                  {/* 2029 Cutting-Edge Services Showcase */}
                  <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                  <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />

                  {/* 404 Page */}
                  <Route
                    path="*"
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                      >
                        <div className="text-center text-white">
                          <h1 className="text-6xl font-bold mb-4">404</h1>
                          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                          <p className="text-gray-300 mb-8">
                            The page you're looking for doesn't exist or has been moved.
                          </p>
                          <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                          >
                            Go Back
                          </button>
                          <button
                            onClick={() => window.location.href = '/'}
                            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            Go Home
                          </button>
                        </div>
                      </motion.div>
                    }
                  />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          {/* Footer */}
          <SimpleFooter />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
