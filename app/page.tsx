import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import components
import ContentPromotionBanner from './components/ContentPromotionBanner';
import ContentCarousel from './components/ContentCarousel';
import DynamicContentShowcase from './components/DynamicContentShowcase';
import ContentStatistics from './components/ContentStatistics';
import ContentNewsletterSignup from './components/ContentNewsletterSignup';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

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
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md z-50 neon-pulse"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section with Futuristic Design */}
        <section
          className={`text-center mb-16 transition-all duration-1000 relative ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          {/* Holographic Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 
              id="hero-heading" 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 holographic neon-glow"
            >
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 mb-8 font-medium" role="doc-subtitle">
              Advanced AI & Technology Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your business with our proven strategies delivering $50M+ annual savings and 95% process automation.
            </p>
            
            {/* CTA Buttons with Futuristic Design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-2xl neon-pulse flex items-center"
                aria-label="Call us at (302) 464-0950"
              >
                <span className="text-2xl mr-3 group-hover:animate-pulse">📞</span>
                Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="group glass-effect text-white px-8 py-4 rounded-xl font-semibold border-2 border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-2xl flex items-center"
              >
                <span className="text-2xl mr-3 group-hover:animate-spin">⚡</span>
                Get Free Consultation
              </a>
            </div>
            
            {/* Key Benefits with Futuristic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-5xl mb-4 group-hover:animate-bounce">🚀</div>
                <h3 className="font-bold text-cyan-300 mb-4 text-xl">AI-Powered Solutions</h3>
                <p className="text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-5xl mb-4 group-hover:animate-bounce">⚡</div>
                <h3 className="font-bold text-purple-300 mb-4 text-xl">Proven Results</h3>
                <p className="text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-5xl mb-4 group-hover:animate-bounce">🔒</div>
                <h3 className="font-bold text-blue-300 mb-4 text-xl">Enterprise Security</h3>
                <p className="text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Futuristic Design */}
        <section className="mb-16 relative" aria-labelledby="services-heading">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 holographic">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cyber-border">
                <div className="text-6xl mb-6 text-center group-hover:animate-bounce">🤖</div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">AI Services</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
                  <div className="text-sm text-green-400">Save up to 40% vs market rates</div>
                </div>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Machine Learning Models</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Natural Language Processing</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Computer Vision</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Predictive Analytics</li>
                </ul>
                <a href="/ai-services" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center group">
                  Learn More <span className="group-hover:ml-2 transition-all duration-300">→</span>
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cyber-border">
                <div className="text-6xl mb-6 text-center group-hover:animate-bounce">⚛️</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">Quantum Computing</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                  <div className="text-sm text-green-400">Contact for enterprise pricing</div>
                </div>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Quantum Algorithms</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Optimization Problems</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Quantum Simulation</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Research Support</li>
                </ul>
                <a href="/quantum-computing" className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 text-center group">
                  Learn More <span className="group-hover:ml-2 transition-all duration-300">→</span>
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cyber-border">
                <div className="text-6xl mb-6 text-center group-hover:animate-bounce">🔄</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Autonomous Systems</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations and infrastructure.
                </p>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $2,500/month</div>
                  <div className="text-sm text-green-400">Save up to 35% vs market rates</div>
                </div>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Self-Managing Systems</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Process Automation</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Predictive Maintenance</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Intelligent Monitoring</li>
                </ul>
                <a href="/autonomous-systems" className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 text-center group">
                  Learn More <span className="group-hover:ml-2 transition-all duration-300">→</span>
                </a>
              </article>
            </Suspense>
          </div>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Social Proof Section with Futuristic Design */}
        <section className="py-20 relative" aria-labelledby="social-proof-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h2 id="social-proof-heading" className="text-4xl md:text-5xl font-bold text-center text-white mb-16 holographic">
              Trusted by Industry Leaders
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">$2.5B+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="text-center glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-yellow-400 text-3xl mb-6 group-hover:animate-pulse">★★★★★</div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"Zion Tech Group transformed our operations with AI solutions that delivered $50M in annual savings. Their expertise is unmatched."</p>
                  <div className="font-semibold text-cyan-300 text-xl">Sarah Johnson</div>
                  <div className="text-sm text-gray-400">CTO, Fortune 500 Company</div>
                </div>
                
                <div className="text-center group">
                  <div className="text-yellow-400 text-3xl mb-6 group-hover:animate-pulse">★★★★★</div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"The digital transformation they implemented increased our efficiency by 300%. Highly recommend their services."</p>
                  <div className="font-semibold text-purple-300 text-xl">Michael Chen</div>
                  <div className="text-sm text-gray-400">VP Operations, Global Corp</div>
                </div>
                
                <div className="text-center group">
                  <div className="text-yellow-400 text-3xl mb-6 group-hover:animate-pulse">★★★★★</div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"Outstanding cloud infrastructure and AI implementation. They exceeded all our expectations."</p>
                  <div className="font-semibold text-green-300 text-xl">Emily Rodriguez</div>
                  <div className="text-sm text-gray-400">Director of Technology, Tech Giant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <ContentNewsletterSignup />

        {/* Call to Action Section with Futuristic Design */}
        <section className="text-center relative py-20" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl"></div>
          <div className="relative glass-effect rounded-3xl p-16 shadow-2xl">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 holographic">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of enterprises that have already transformed their operations with our AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-2xl neon-pulse flex items-center"
                aria-label="Call us at (302) 464-0950"
              >
                <span className="text-2xl mr-3 group-hover:animate-pulse">📞</span>
                Call Now: (302) 464-0950
              </a>
              
              <a
                href="/contact"
                className="group glass-effect text-white px-10 py-5 rounded-xl font-semibold border-2 border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-2xl flex items-center"
                aria-label="Contact us via form"
              >
                <span className="text-2xl mr-3 group-hover:animate-spin">⚡</span>
                Get Free Consultation
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-cyan-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                <span>Custom solution design</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                <span>24/7 support available</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
