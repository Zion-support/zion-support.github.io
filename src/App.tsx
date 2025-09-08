import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/MicroSAASSolutions'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));

// New pages
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide'));
const Help = React.lazy(() => import('./pages/Help'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Team = React.lazy(() => import('./pages/Team'));
const Press = React.lazy(() => import('./pages/Press'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Signup = React.lazy(() => import('./pages/Signup'));

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));
const Resources = lazy(() => import('./pages/Resources'));

// Additional missing page imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Partners = lazy(() => import('./pages/Partners'));
const News = lazy(() => import('./pages/News'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// 2026 AI Marketplace Services
const Zion2026AIMarketplaceShowcase = lazy(() => import('./pages/Zion2026AIMarketplaceShowcase'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const APIDocs = React.lazy(() => import('./pages/APIDocs'));
const Developers = React.lazy(() => import('./pages/Developers'));

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
// New AI Services 2025
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
// New Innovative Services 2025
const AIAutonomousBusinessIntelligence = createLazyComponent(() => import('./pages/services/ai-autonomous-business-intelligence-platform'));
const AICybersecurityThreatIntelligence = createLazyComponent(() => import('./pages/services/ai-cybersecurity-threat-intelligence-platform'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
// Solution pages
const EnterpriseSolutions = createLazyComponent(() => import('./pages/solutions/enterprise'));
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/solutions/ai-business-intelligence'));
const QuantumAIPlatform = createLazyComponent(() => import('./pages/solutions/quantum-ai-platform'));
const DigitalTwinSolutions = createLazyComponent(() => import('./pages/solutions/digital-twin'));
const ZeroTrustSecurity = createLazyComponent(() => import('./pages/solutions/zero-trust-security'));
// Additional pages
const Careers = createLazyComponent(() => import('./pages/careers'));
const Partners = createLazyComponent(() => import('./pages/partners'));
const Blog = createLazyComponent(() => import('./pages/blog'));
const CaseStudies = createLazyComponent(() => import('./pages/case-studies'));
const Support = createLazyComponent(() => import('./pages/support'));
// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
// Pricing page
const Pricing = createLazyComponent(() => import('./pages/Pricing').then(module => ({ default: module.Pricing })));
// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened. Please try again.</p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ServiceDetailPage = ({ title, description }: { title: string; description: string }) => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">{title}</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advanced technology implementation</li>
            <li>Expert consultation and support</li>
            <li>Customized solutions for your business</li>
            <li>24/7 monitoring and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Go Home
      </Link>
    </div>
  </div>
);

// Additional service components referenced in navigation
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Enhanced Navigation */}
            <EnhancedNavigation />
            {/* Skip Link for Accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            {/* Main Content */}
            <main id="main-content" className="flex-1 pt-32">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route
                      path="/"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Home />
                        </motion.div>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurity />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcare />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                    {/* New Innovative Services 2025 */}
                    <Route path="/services/ai-autonomous-business-intelligence-platform" element={<AIAutonomousBusinessIntelligence />} />
                    <Route path="/services/ai-cybersecurity-threat-intelligence-platform" element={<AICybersecurityThreatIntelligence />} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalytics />} />
                    {/* Solution Routes */}
                    <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
                    <Route path="/solutions/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/solutions/quantum-ai-platform" element={<QuantumAIPlatform />} />
                    <Route path="/solutions/digital-twin" element={<DigitalTwinSolutions />} />
                    <Route path="/solutions/zero-trust-security" element={<ZeroTrustSecurity />} />
                    {/* Additional Routes */}
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/support" element={<Support />} />
                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    {/* Pricing Route */}
                    <Route path="/pricing" element={<Pricing />} />
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
            {/* Enhanced Footer */}
            <EnhancedFooter />
            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />
            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} />
            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />
            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />
            {/* Advanced Analytics Dashboard */}
            <AdvancedAnalyticsDashboard enabled={true} />
            {/* AI Content Optimizer */}
            <AIContentOptimizer enabled={true} />
            {/* Security Monitoring System */}
            <SecurityMonitoringSystem enabled={true} />
            {/* User Experience Optimizer */}
            <UserExperienceOptimizer enabled={true} />
            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;