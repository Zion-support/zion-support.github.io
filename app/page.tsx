import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './futuristic-design.css';

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
    <div className="min-h-screen futuristic-bg cyber-grid">
      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 neon-button z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <h1 
            id="hero-heading" 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text glitch" 
            data-text="Zion Tech Group"
          >
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium holographic" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="futuristic-card p-6 floating-element">
              <div className="text-3xl mb-3 floating-element">🚀</div>
              <h3 className="font-bold text-white mb-3 text-lg neon-text">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
            </div>
            <div className="futuristic-card p-6 floating-element">
              <div className="text-3xl mb-3 floating-element">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg neon-text-pink">Proven Results</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
            </div>
            <div className="futuristic-card p-6 floating-element">
              <div className="text-3xl mb-3 floating-element">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg neon-text-purple">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="neon-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="neon-button neon-text-purple"
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto holographic">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card p-8 floating-element">
                <div className="text-5xl mb-6 text-center floating-element">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">AI Services</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold neon-text-pink mb-2">Starting at $1,500/month</div>
                  <a href="/ai-services" className="neon-text hover:neon-text-pink font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card p-8 floating-element">
                <div className="text-5xl mb-6 text-center floating-element">⚛️</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text-purple">Quantum Computing</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold neon-text-purple mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="neon-text-purple hover:neon-text-pink font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="futuristic-card p-8 floating-element">
                <div className="text-5xl mb-6 text-center floating-element">🔄</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Autonomous Systems</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations and infrastructure.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold neon-text-pink mb-2">Starting at $2,500/month</div>
                  <a href="/autonomous-systems" className="neon-text hover:neon-text-pink font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="futuristic-card p-6 floating-element">
              <div className="text-4xl mb-4 floating-element">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </article>

            <article className="futuristic-card p-6 floating-element">
              <div className="text-4xl mb-4 floating-element">🔄</div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Transform your business processes with cutting-edge technology and expert
                consultation.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Optimization</li>
                <li>• Change Management</li>
              </ul>
            </article>

            <article className="futuristic-card p-6 floating-element">
              <div className="text-4xl mb-4 floating-element">☁️</div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text-pink">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps & CI/CD</li>
                <li>• 24/7 Monitoring</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Social Proof Section */}
        <section className="bg-gray-900 py-16 relative overflow-hidden" aria-labelledby="social-proof-heading">
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h2 id="social-proof-heading" className="text-3xl font-bold text-center text-white mb-12 neon-text">
              Trusted by Industry Leaders
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center futuristic-card p-6">
                <div className="text-4xl font-bold neon-text mb-2">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-4xl font-bold neon-text-pink mb-2">$2.5B+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-4xl font-bold neon-text-purple mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-4xl font-bold neon-text mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>

            <div className="futuristic-card p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">What Our Clients Say</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center futuristic-card p-6">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"Zion Tech Group transformed our operations with AI solutions that delivered $50M in annual savings. Their expertise is unmatched."</p>
                  <div className="font-semibold text-white neon-text">Sarah Johnson</div>
                  <div className="text-sm text-gray-400">CTO, Fortune 500 Company</div>
                </div>
                
                <div className="text-center futuristic-card p-6">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"The digital transformation they implemented increased our efficiency by 300%. Highly recommend their services."</p>
                  <div className="font-semibold text-white neon-text-pink">Michael Chen</div>
                  <div className="text-sm text-gray-400">VP Operations, Global Corp</div>
                </div>
                
                <div className="text-center futuristic-card p-6">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"Outstanding cloud infrastructure and AI implementation. They exceeded all our expectations."</p>
                  <div className="font-semibold text-white neon-text-purple">Emily Rodriguez</div>
                  <div className="text-sm text-gray-400">Director of Technology, Tech Giant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <ContentNewsletterSignup />

        {/* Call to Action Section */}
        <section className="text-center futuristic-card p-12 relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="relative">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text glitch" data-text="Ready to Transform Your Business?">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto holographic">
              Join thousands of enterprises that have already transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="neon-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="neon-button neon-text-purple"
              >
                Get Free Consultation
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ Free initial consultation</p>
              <p>✓ Custom solution design</p>
              <p>✓ 24/7 support available</p>
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
