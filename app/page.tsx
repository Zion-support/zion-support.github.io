import React from "react";
import { Helmet    } from "react-helmet-async";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced data analytics with machine learning insights',
      price: '$2,500/month',
      features: ['Real-time insights', 'Predictive analytics', 'Custom dashboards']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities',
      price: '$3,000/month',
      features: ['Process automation', 'Exception handling', 'Workflow optimization']
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Advanced threat detection and security automation',
      price: '$2,800/month',
      features: ['Threat detection', 'Security automation', 'Compliance monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />

      <main id="main-content" className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <br />
                <span className="text-2xl sm:text-4xl lg:text-5xl text-gray-300">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI technology, advanced automation, and intelligent solutions designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {aiServices.map((service, index) => (
                <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                  <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4 text-center">🤖</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-center leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">{service.price}</div>
                      <a href={`/ai-${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              ))}
          </div>
          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          {/* Micro SAAS Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI-Powered CRM</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$149/month</div>
                    <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Analytics Dashboard</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$199/month</div>
                    <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Studio</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$299/month</div>
                    <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$99/month</div>
                    <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Email Marketing</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$179/month</div>
                    <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Mobile App Builder</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$399/month</div>
                    <a href="/ai-mobile-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI SEO Optimizer</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$129/month</div>
                    <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Invoice Generator</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$79/month</div>
                    <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
            </div>
          </div>
          </div>
          {/* IT Services & Infrastructure */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee and 24/7 expert support.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month</div>
                  <a href="/cloud-migration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cybersecurity Suite</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$799/month</div>
                  <a href="/cybersecurity-suite" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$599/month</div>
                  <a href="/devops-cicd" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Database Management</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$399/month</div>
                  <a href="/database-management" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Network Solutions</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$699/month</div>
                  <a href="/network-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Mobile App Development</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$1,999/month</div>
                  <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Consulting</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Strategic IT planning, technology assessment, and digital transformation consulting.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$299/hour</div>
                  <a href="/it-consulting" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Support & Maintenance</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$499/month</div>
                  <a href="/it-support" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* New AI Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              Advanced AI Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Customer Support</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $199/month</div>
                  <a href="/ai-customer-support" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sales Automation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Starting at $299/month</div>
                  <a href="/ai-sales-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Workflow Automation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">Starting at $99/month</div>
                  <a href="/ai-workflow-automation" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Data Visualization</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Starting at $149/month</div>
                  <a href="/ai-data-visualization" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Lead Generation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">Starting at $199/month</div>
                  <a href="/ai-lead-generation" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Document Processing</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $149/month</div>
                  <a href="/ai-document-processing" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Emerging Technologies Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              Emerging Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Robotics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent robotic solutions for manufacturing, healthcare, and service industries.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">Custom Pricing</div>
                  <a href="/robotics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">IoT & Edge</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Connected devices and edge computing solutions for smart cities and industrial automation.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">Starting at $499/month</div>
                  <a href="/iot-edge-computing" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔗</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Blockchain & Web3</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Decentralized solutions, smart contracts, and Web3 applications for the future of business.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">Starting at $699/month</div>
                  <a href="/blockchain-web3" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Business Intelligence</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Data-driven insights and predictive analytics to optimize business performance and decision-making.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">Starting at $399/month</div>
                  <a href="/business-intelligence" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* IT Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">Starting at $299/month</div>
                  <a href="/devops" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Mobile Development</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">Starting at $1,299/month</div>
                  <a href="/ai-mobile-app-development" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Database Services</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-400 mb-2">Starting at $199/month</div>
                  <a href="/database" className="text-teal-400 hover:text-teal-300 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Micro SAAS Solutions Section */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          </p>
          {/* Productivity Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Productivity & Business Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Writing Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
                  <a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Smart Analytics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Real-time business analytics with AI insights, automated reports, and predictive forecasting.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month</div>
                  <a href="/smart-analytics" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📅</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Scheduler</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent scheduling with calendar optimization, meeting coordination, and time management.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month</div>
                  <a href="/ai-scheduler" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Expense Tracker</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered expense management with receipt scanning, categorization, and budget insights.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$15/month</div>
                  <a href="/expense-tracker" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Task Manager Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced task management with AI prioritization, team collaboration, and progress tracking.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$39/month</div>
                  <a href="/task-manager-pro" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">CRM Lite</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$59/month</div>
                  <a href="/crm-lite" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Email Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$25/month</div>
                  <a href="/email-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Social Media Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-driven social media management with content creation, scheduling, and performance analytics.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-2">$45/month</div>
                  <a href="/social-media-manager" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Marketing & Sales Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Marketing & Sales Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Design Studio</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create stunning graphics, logos, and marketing materials with AI-powered design tools.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$35/month</div>
                  <a href="/ai-design-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Landing Page Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Build high-converting landing pages with AI optimization and A/B testing capabilities.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
                  <a href="/landing-page-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">SEO Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered SEO analysis and optimization with keyword research and content suggestions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month</div>
                  <a href="/seo-optimizer" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Ad Campaign Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$79/month</div>
                  <a href="/ad-campaign-manager" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Developer Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Developer Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Code Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$39/month</div>
                  <a href="/code-assistant" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">API Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$59/month</div>
                  <a href="/api-builder" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐛</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Bug Tracker Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400 mb-2">$25/month</div>
                  <a href="/bug-tracker-pro" className="text-red-400 hover:text-red-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Doc Generator</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automatically generate technical documentation, API docs, and user guides from code.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month</div>
                  <a href="/doc-generator" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        </Suspense>
        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentCarousel />
        </Suspense>
        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <DynamicContentShowcase />
        </Suspense>
        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Contact Section */}
        <section className="mb-16" aria-labelledby="contact-heading">
        </section>
          <div className="max-w-6xl mx-auto">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your AI and IT needs. We're here to help you achieve unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                      <p className="text-white font-semibold">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Form */}
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SAAS Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your project or requirements"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full cyber-button text-center py-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
