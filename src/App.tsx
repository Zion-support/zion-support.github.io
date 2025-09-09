import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Cloud,
  Lock
} from 'lucide-react';

// Home Page Component
const HomePage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { value: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { value: "15+", label: "Years Experience", icon: <Star className="w-6 h-6" /> }
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, predictive analytics, and intelligent automation",
      price: "From $299/month",
      features: ["Custom AI Models", "Predictive Analytics", "Process Automation", "24/7 Monitoring"]
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions including threat detection and compliance",
      price: "From $499/month",
      features: ["Threat Detection", "Compliance Management", "Security Audits", "Incident Response"]
    },
    {
      title: "Cloud Solutions",
      description: "Multi-cloud management, optimization, and migration services",
      price: "From $399/month",
      features: ["Multi-Cloud Management", "Cost Optimization", "Migration Support", "Performance Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Cpu className="w-8 h-8 text-cyan-400 mr-3" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future with revolutionary AI, cybersecurity, and cloud solutions that drive business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Explore Our Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Mobile: +1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>Email: kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already accelerated their growth with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Your Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-cyan-400 mr-3" />
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 mb-4">
                Pioneering the future with revolutionary technology solutions
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Services</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// About Page Component
const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        About Zion Tech Group
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        We are a leading technology solutions provider with over 15 years of experience in delivering innovative AI, cybersecurity, and cloud solutions to businesses worldwide.
      </p>
    </div>
  </div>
);

// Contact Page Component
const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Contact Us
      </h1>
      <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-4 text-gray-300">
              <p><strong>Phone:</strong> +1 302 464 0950</p>
              <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const ServicesShowcase2025 = createLazyComponent(() => import('./pages/ServicesShowcase2025'));

// Lazy load pages for better performance with error boundaries
const Home = lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Services = lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const Contact = lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));
const Pricing = lazy(() => import('./pages/Pricing').catch(() => ({ default: () => <div>Error loading Pricing page</div> })));
const NotFound = lazy(() => import('./pages/NotFound').catch(() => ({ default: () => <div>Error loading NotFound page</div> })));

// Additional pages from comprehensive improvements
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = lazy(() => import('./pages/EquipmentDetail'));
const Analytics = lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = lazy(() => import('./pages/MobileLaunchPage'));
// const CommunityPage = lazy(() => import('./pages/CommunityPage')); // Page not found
const Categories = lazy(() => import('./pages/Categories'));
const Blog = lazy(() => import('./pages/Blog'));
// const BlogPost = lazy(() => import('./pages/BlogPost')); // Page not found
const PartnersPage = lazy(() => import('./pages/Partners'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
// const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect')); // Page not found
const ContactPage = lazy(() => import('./pages/Contact'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));
const ExpandedServicesPage = lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceComparisonPage = lazy(() => import('./pages/ServiceComparisonPage'));
const ServiceCalculatorPage = lazy(() => import('./pages/ServiceCalculatorPage'));
const AllServicesOverviewPage = lazy(() => import('./pages/AllServicesOverviewPage'));
const ServiceAnalyticsDashboard = lazy(() => import('./pages/ServiceAnalyticsDashboard'));
const ServiceMarketplace = lazy(() => import('./pages/ServiceMarketplace'));

// Service Pages - Lazy loaded for better performance
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const CloudMigration = lazy(() => import('./pages/CloudMigration'));
const MobileDevelopment = lazy(() => import('./pages/MobileDevelopment'));

// Additional Pages - Lazy loaded for better performance
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Support = lazy(() => import('./pages/Support'));

const App = memo(() => {
  // Setup global error handling
  useEffect(() => {
    setupGlobalErrorHandling();
    // Initialize bundle optimization
    bundleOptimizer.preloadCriticalResources();
    // Register service worker
    registerServiceWorker();
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="App">
            {/* Header */}
            <Header />
            
            {/* Main Content */}
            <main id="main-content" className="pt-20">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/services-showcase-2025" element={<ServicesShowcase2025 />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurity />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcare />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />

                    {/* 2031 Cutting-Edge Services */}
                    <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    <Route path="/cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    
                    {/* Comprehensive Pricing Guide 2031 */}
                    <Route path="/comprehensive-pricing-2031" element={<ComprehensivePricingGuide2031 />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />

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
            <Footer />

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
    </QueryClientProvider>
  );
});

App.displayName = 'App';

export default App;