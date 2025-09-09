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
}


// Create QueryClient instance with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Lazy load pages for better performance with error boundaries and retry logic
const createLazyComponent = (importFn: () => Promise<any>, componentName: string) => 
  lazy(() => importFn().catch(() => ({ 
    default: () => (
      <div className="flex items-center justify-center min-h-[400px] p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Failed to load {componentName}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    ) 
  })));

const Home = createLazyComponent(() => import('./pages/Home'), 'Home');
const About = createLazyComponent(() => import('./pages/About'), 'About');
const Services = createLazyComponent(() => import('./pages/Services'), 'Services');
const Contact = createLazyComponent(() => import('./pages/Contact'), 'Contact');
const Pricing = createLazyComponent(() => import('./pages/Pricing'), 'Pricing');
const NotFound = createLazyComponent(() => import('./pages/NotFound'), 'NotFound');

// Additional pages from comprehensive improvements
const AIMatcherPage = createLazyComponent(() => import('./pages/AIMatcher'), 'AI Matcher');
const TalentDirectory = createLazyComponent(() => import('./pages/TalentDirectory'), 'Talent Directory');
const TalentsPage = createLazyComponent(() => import('./pages/TalentsPage'), 'Talents');
const ServicesPage = createLazyComponent(() => import('./pages/ServicesPage'), 'Services');
const EquipmentPage = createLazyComponent(() => import('./pages/EquipmentPage'), 'Equipment');
const EquipmentDetail = createLazyComponent(() => import('./pages/EquipmentDetail'), 'Equipment Detail');
const Analytics = createLazyComponent(() => import('./pages/Analytics'), 'Analytics');
const MobileLaunchPage = createLazyComponent(() => import('./pages/MobileLaunchPage'), 'Mobile Launch');
const Categories = createLazyComponent(() => import('./pages/Categories'), 'Categories');
const Blog = createLazyComponent(() => import('./pages/Blog'), 'Blog');
const PartnersPage = createLazyComponent(() => import('./pages/Partners'), 'Partners');
const Login = createLazyComponent(() => import('./pages/Login'), 'Login');
const Signup = createLazyComponent(() => import('./pages/Signup'), 'Signup');
const ITOnsiteServicesPage = createLazyComponent(() => import('./pages/ITOnsiteServicesPage'), 'IT Onsite Services');
const ContactPage = createLazyComponent(() => import('./pages/Contact'), 'Contact');
const ZionHireAI = createLazyComponent(() => import('./pages/ZionHireAI'), 'Zion Hire AI');
const RequestQuotePage = createLazyComponent(() => import('./pages/RequestQuote'), 'Request Quote');
const ExpandedServicesPage = createLazyComponent(() => import('./pages/ExpandedServicesPage'), 'Expanded Services');
const ServiceComparisonPage = createLazyComponent(() => import('./pages/ServiceComparisonPage'), 'Service Comparison');
const ServiceCalculatorPage = createLazyComponent(() => import('./pages/ServiceCalculatorPage'), 'Service Calculator');
const AllServicesOverviewPage = createLazyComponent(() => import('./pages/AllServicesOverviewPage'), 'All Services');
const ServiceAnalyticsDashboard = createLazyComponent(() => import('./pages/ServiceAnalyticsDashboard'), 'Service Analytics');
const ServiceMarketplace = createLazyComponent(() => import('./pages/ServiceMarketplace'), 'Service Marketplace');

// Service Pages - Lazy loaded for better performance
const AIServices = createLazyComponent(() => import('./pages/AIServices'), 'AI Services');
const ITServices = createLazyComponent(() => import('./pages/ITServices'), 'IT Services');
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'), 'Micro SaaS');
const Cybersecurity = createLazyComponent(() => import('./pages/Cybersecurity'), 'Cybersecurity');
const CloudMigration = createLazyComponent(() => import('./pages/CloudMigration'), 'Cloud Migration');
const MobileDevelopment = createLazyComponent(() => import('./pages/MobileDevelopment'), 'Mobile Development');

// Additional Pages - Lazy loaded for better performance
const FAQ = createLazyComponent(() => import('./pages/FAQ'), 'FAQ');
const Privacy = createLazyComponent(() => import('./pages/Privacy'), 'Privacy');
const Terms = createLazyComponent(() => import('./pages/Terms'), 'Terms');
const Support = createLazyComponent(() => import('./pages/Support'), 'Support');

// Missing components that are referenced in routes
const AllCategoriesPage = createLazyComponent(() => import('./pages/AllCategoriesPage'), 'All Categories');
const SimpleSignup = createLazyComponent(() => import('./pages/SimpleSignup'), 'Simple Signup');
const OAuthCallback = createLazyComponent(() => import('./pages/OAuthCallback'), 'OAuth Callback');
const MoreTalentsPage = createLazyComponent(() => import('./pages/MoreTalentsPage'), 'More Talents');
const AdditionalTalentsPage = createLazyComponent(() => import('./pages/AdditionalTalentsPage'), 'Additional Talents');
const NewProductsPage = createLazyComponent(() => import('./pages/NewProductsPage'), 'New Products');
const OpenAppRedirect = createLazyComponent(() => import('./pages/OpenAppRedirect'), 'Open App Redirect');
const CommunityPage = createLazyComponent(() => import('./pages/CommunityPage'), 'Community');
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'), 'Sitemap');
const Help = createLazyComponent(() => import('./pages/Help'), 'Help');
const FavoritesPage = createLazyComponent(() => import('./pages/Favorites'), 'Favorites');
const WishlistPage = createLazyComponent(() => import('./pages/Wishlist'), 'Wishlist');
const CartPage = createLazyComponent(() => import('./pages/Cart'), 'Cart');
const Wallet = createLazyComponent(() => import('./pages/Wallet'), 'Wallet');
const Profile = createLazyComponent(() => import('./pages/Profile'), 'Profile');
const RecommendationsPage = createLazyComponent(() => import('./pages/RecommendationsPage'), 'Recommendations');
const Checkout = createLazyComponent(() => import('./pages/Checkout'), 'Checkout');
const ForgotPassword = createLazyComponent(() => import('./pages/ForgotPassword'), 'Forgot Password');
const ResetPassword = createLazyComponent(() => import('./pages/ResetPassword'), 'Reset Password');
const BlogPost = createLazyComponent(() => import('./pages/BlogPost'), 'Blog Post');

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
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Enhanced SEO */}
                <EnhancedSEO 
                  title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
                  description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
                  keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
                  image="/images/zion-tech-group-og.jpg"
                  type="website"
                  url="https://ziontechgroup.com"
                />
                
                <Header />
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <main className="pt-20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Main Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/ai-solutions" element={<AISolutions />} />
                      <Route path="/services-showcase" element={<ServicesShowcase />} />
                      <Route path="/ai-matcher" element={<AIMatcherPage />} />
                      <Route path="/talent-directory" element={<TalentDirectory />} />
                      <Route path="/talents" element={<TalentsPage />} />
                      <Route path="/emerging-tech" element={<EmergingTech />} />
                      
                      {/* Service Routes */}
                      <Route path="/ai-services" element={<AIServices />} />
                      <Route path="/cloud-devops" element={<CloudDevOps />} />
                      <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                      <Route path="/digital-transformation" element={<DigitalTransformation />} />
                      
                      {/* Missing pages from analysis */}
                      <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                      <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                      <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                      <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
                      <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                      <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/help" element={<HelpCenter />} />
                      
                      {/* Company Routes */}
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/mission" element={<Mission />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/news" element={<News />} />
                      
                      {/* Service Detail Routes */}
                      <Route path="/services-overview" element={<ServicesOverview />} />
                      <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                      <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                      <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                      <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                      <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                      <Route path="/services/innovative-new-services" element={<InnovativeNewServices />} />
                      <Route path="/services/specialized-it-infrastructure" element={<SpecializedITInfrastructure />} />

                      <Route path="/comprehensive-innovative-services" element={<ComprehensiveInnovativeServices />} />
                      <Route path="/enhanced-services-showcase" element={<EnhancedServicesShowcase />} />
                      
                      {/* Solutions Routes */}
                      <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      
                      {/* Legacy route redirects for SEO */}
                      <Route path="/comprehensive-services" element={<Services />} />
                      <Route path="/services-comparison" element={<Services />} />
                      <Route path="/it-onsite-services" element={<Services />} />
                    </Routes>
                  </Suspense>
                </main>
                
                <Footer />
                <SonnerToaster />
                
                {/* Enhanced Accessibility Controls */}
                <EnhancedAccessibility position="bottom-right" />
                
                {/* AI Chatbot - Always Available */}
                <AIChatbot />
                
                {/* Collaborative Text Editor - Development Mode */}
                {import.meta.env.DEV && (
                  <div className="fixed bottom-24 left-6 z-40 w-96">
                    <CollaborativeTextEditor
                      roomId="dev-editor"
                      userId="dev-user"
                      userName="Developer"
                      initialContent="Welcome to the collaborative text editor! Start typing to see AI suggestions and real-time collaboration features."
                      enableAI={true}
                      enableCollaboration={true}
                      enableVersioning={true}
                    />
                  </div>
                )}
                
                {/* AI Code Generator - Development Mode */}
                {import.meta.env.DEV && (
                  <div className="fixed bottom-24 right-6 z-40 w-96">
                    <AICodeGenerator />
                  </div>
                )}
                
                {/* Development Dashboards */}
                {import.meta.env.DEV && (
                  <>
                    {/* Performance Dashboard */}
                    <div className="fixed top-4 left-4 z-40">
                      <PerformanceDashboard />
                    </div>
                    
                    {/* Analytics Dashboard */}
                    <div className="fixed top-4 right-4 z-40">
                      <AnalyticsDashboard />
                    </div>
                    
                    {/* Enterprise Dashboard */}
                    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                      <EnterpriseDashboard />
                    </div>
                    
                    {/* Security & Compliance Dashboard */}
                    <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                      <SecurityComplianceDashboard />
                    </div>
                    
                    {/* Machine Learning Dashboard */}
                    <div className="fixed top-4 right-4 z-40">
                      <MachineLearningDashboard />
                    </div>
                  </>
                )}
                              </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
});

App.displayName = 'App';

export default App;