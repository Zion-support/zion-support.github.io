import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PerformanceOptimizer from './PerformanceOptimizer';
import AccessibilityEnhancer from './AccessibilityEnhancer';
import SEOEnhancer from './SEOEnhancer';
import ContentShowcase from './ContentShowcase';
import { 
  NewBlogBanner, 
  AnalyticsPlatformBanner, 
  TechCorpSuccessBanner,
  WorkflowAutomationBanner,
  AIAnalyticsBanner,
  HealthTechSuccessBanner,
  ComprehensiveAIBanner,
  EnterpriseAIBanner,
  CustomerServiceAIBanner,
  HealthcareAIBanner,
  RetailSuccessBanner,
  AIContentShowcaseBanner,
  AIRevolutionBanner,
  AIGoToMarketBanner
} from './PromotionalBanner';

interface EnhancedHomePageProps {
  showDebug?: boolean;
  enablePerformanceOptimization?: boolean;
  enableAccessibilityFeatures?: boolean;
  enableSEOEnhancement?: boolean;
}

export default function EnhancedHomePage({
  showDebug = false,
  enablePerformanceOptimization = true,
  enableAccessibilityFeatures = true,
  enableSEOEnhancement = true
}: EnhancedHomePageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    theme: 'light',
    language: 'en',
    accessibility: {
      highContrast: false,
      largeText: false,
      reducedMotion: false
    }
  });

  useEffect(() => {
    // Load user preferences from localStorage
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    }
    
    // Mark as loaded
    setIsLoaded(true);
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Initialize analytics
    initializeAnalytics();
    
    // Set up service worker
    registerServiceWorker();
  }, []);

  const preloadCriticalResources = () => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/images/hero-bg.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 
                resource.endsWith('.woff2') ? 'font' : 'image';
      document.head.appendChild(link);
    });
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Zion Tech Group - AI & IT Solutions',
        page_location: window.location.href
      });
    }
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  };

  const seoData = {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
    keywords: ['AI services', 'micro SaaS', 'IT services', 'cloud migration', 'DevOps', 'SRE', 'enterprise software', 'automation'],
    canonicalUrl: window.location.href,
    ogImage: '/og-images/home.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Enhancement */}
      {enableSEOEnhancement && (
        <SEOEnhancer 
          seoData={seoData} 
          autoGenerate={true} 
          showDebug={showDebug} 
        />
      )}

      {/* Performance Optimization */}
      {enablePerformanceOptimization && (
        <PerformanceOptimizer 
          showMetrics={showDebug} 
          autoOptimize={true} 
        />
      )}

      {/* Accessibility Enhancement */}
      {enableAccessibilityFeatures && (
        <AccessibilityEnhancer 
          showControls={true} 
          autoDetect={true} 
        />
      )}

      <div className="animate-fade-in">
        {/* Promotional Banners */}
        <AIContentShowcaseBanner />
        <CustomerServiceAIBanner />
        <HealthcareAIBanner />
        <RetailSuccessBanner />
        <AIRevolutionBanner />
        <AIGoToMarketBanner />
        <NewBlogBanner />
        <WorkflowAutomationBanner />
        <AIAnalyticsBanner />
        
        {/* Enhanced Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">$2M+</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Featured Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured AI & IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most popular services that are transforming businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeaturedServiceCard
                title="AI Data Analytics"
                description="Transform data into actionable insights with predictive modeling and real-time dashboards"
                price="$199/month"
                features={['Predictive Analytics', 'Real-time Dashboards', 'Data Integration']}
                to="/services/ai-data-analytics"
                popular={true}
                icon="📊"
              />
              <FeaturedServiceCard
                title="AI Workflow Automation"
                description="Automate business processes with intelligent workflow design and smart triggers"
                price="$149/month"
                features={['Process Automation', 'Smart Triggers', 'Performance Monitoring']}
                to="/services/ai-workflow-automation"
                popular={false}
                icon="⚙️"
              />
              <FeaturedServiceCard
                title="AI Virtual Assistant"
                description="24/7 intelligent customer support with natural language processing"
                price="$99/month"
                features={['24/7 Support', 'Multi-channel', 'Personalized Responses']}
                to="/services/ai-virtual-assistant"
                popular={false}
                icon="🤖"
              />
              <FeaturedServiceCard
                title="Cloud Migration"
                description="Seamless migration to cloud infrastructure with zero downtime"
                price="$2,999"
                features={['Zero Downtime', 'Security Compliance', 'Cost Optimization']}
                to="/services/cloud-migration"
                popular={false}
                icon="☁️"
              />
              <FeaturedServiceCard
                title="DevOps Automation"
                description="Automate CI/CD pipelines and infrastructure management"
                price="$399/month"
                features={['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling']}
                to="/services/devops-automation"
                popular={false}
                icon="🚀"
              />
              <FeaturedServiceCard
                title="Cybersecurity Consulting"
                description="Advanced threat detection and zero-trust security architecture"
                price="$599/month"
                features={['Threat Detection', 'Zero-trust Architecture', 'Compliance']}
                to="/services/cybersecurity-consulting"
                popular={false}
                icon="🛡️"
              />
            </div>
          </div>
        </section>

        {/* Dynamic Content Showcase */}
        <ContentShowcase />
        
        {/* Enhanced Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-6">
                  Stay Ahead with AI & Tech Insights
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get weekly updates on AI trends, tech innovations, and exclusive service offers
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                    aria-label="Email address for newsletter"
                  />
                  <button 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm mt-4 opacity-75">
                  Join 10,000+ professionals. Unsubscribe anytime.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h4 className="font-semibold mb-1">AI Revolution 2025 Guide</h4>
                      <p className="text-sm opacity-90">Complete business transformation strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h4 className="font-semibold mb-1">Workflow Automation Guide</h4>
                      <p className="text-sm opacity-90">Reduce manual work by 80%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h4 className="font-semibold mb-1">AI Analytics Implementation</h4>
                      <p className="text-sm opacity-90">Transform data into insights</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <Link
                    to="/blog"
                    className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    View All Content →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Promotional Banners */}
        <AnalyticsPlatformBanner />
        <HealthTechSuccessBanner />
        <ComprehensiveAIBanner />

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function FeaturedServiceCard({
  title,
  description,
  price,
  features,
  to,
  popular = false,
  icon
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  to: string;
  popular?: boolean;
  icon: string;
}) {
  return (
    <div className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
      popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
    }`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">{price}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={to}
        className={`block w-full text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Learn More
      </Link>
    </div>
  );
}