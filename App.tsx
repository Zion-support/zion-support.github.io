import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))

// AI Services Pages
const AIContentGeneration = React.lazy(() => import('./app/ai-content-generation/page'))
const AIChatbotBuilder = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AIAnalyticsDashboard = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AIAutomation = React.lazy(() => import('./app/ai-automation/page'))
const AIComputerVision = React.lazy(() => import('./app/ai-computer-vision/page'))
const AIDataAnalytics = React.lazy(() => import('./app/ai-data-analytics/page'))

// IT Services Pages
const CloudServices = React.lazy(() => import('./app/cloud-services/page'))
const Cybersecurity = React.lazy(() => import('./app/cybersecurity/page'))
const WebDevelopment = React.lazy(() => import('./app/web-development/page'))
const MobileDevelopment = React.lazy(() => import('./app/mobile-development/page'))
const DevOps = React.lazy(() => import('./app/devops/page'))
const DataAnalytics = React.lazy(() => import('./app/data-analytics/page'))

// 5G Services Pages
const FiveGImplementation = React.lazy(() => import('./app/5g-implementation/page'))
const FiveGNetworkInfrastructure = React.lazy(() => import('./app/5g-network-infrastructure/page'))
const FiveGIoTSolutions = React.lazy(() => import('./app/5g-iot-solutions/page'))
const FiveGEdgeComputing = React.lazy(() => import('./app/5g-edge-computing/page'))
const FiveGPrivateNetworks = React.lazy(() => import('./app/5g-private-networks/page'))
const FiveGMobileApplications = React.lazy(() => import('./app/5g-mobile-applications/page'))

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <PerformanceMonitor>
            <AccessibilityEnhancer>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Main Pages */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />

                      {/* AI Services */}
                      <Route path="/ai-content-generation" element={<AIContentGeneration />} />
                      <Route path="/ai-chatbot-builder" element={<AIChatbotBuilder />} />
                      <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboard />} />
                      <Route path="/ai-automation" element={<AIAutomation />} />
                      <Route path="/ai-computer-vision" element={<AIComputerVision />} />
                      <Route path="/ai-data-analytics" element={<AIDataAnalytics />} />

                      {/* IT Services */}
                      <Route path="/cloud-services" element={<CloudServices />} />
                      <Route path="/cybersecurity" element={<Cybersecurity />} />
                      <Route path="/web-development" element={<WebDevelopment />} />
                      <Route path="/mobile-development" element={<MobileDevelopment />} />
                      <Route path="/devops" element={<DevOps />} />
                      <Route path="/data-analytics" element={<DataAnalytics />} />

                      {/* 5G Services */}
                      <Route path="/5g-implementation" element={<FiveGImplementation />} />
                      <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructure />} />
                      <Route path="/5g-iot-solutions" element={<FiveGIoTSolutions />} />
                      <Route path="/5g-edge-computing" element={<FiveGEdgeComputing />} />
                      <Route path="/5g-private-networks" element={<FiveGPrivateNetworks />} />
                      <Route path="/5g-mobile-applications" element={<FiveGMobileApplications />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </AccessibilityEnhancer>
          </PerformanceMonitor>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  )
}

export default App
