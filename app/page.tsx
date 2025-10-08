import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FuturisticBackground from './components/FuturisticBackground';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid relative">
      {/* Futuristic Background */}
      <FuturisticBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16 relative z-10" role="main">
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
          >
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-lg">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg">Proven Results</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
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
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Services</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">📢</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Marketing</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-2">Starting at $199/month</div>
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">⚙️</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Automation</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Starting at $399/month</div>
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* New AI Services Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">💬</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Customer Service</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Transform customer experience with intelligent AI chatbots, voice assistants, and predictive analytics.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $299/month</div>
                  <a href="/ai-customer-service" className="text-green-400 hover:text-green-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">✍️</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Content Generation</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Create high-quality, SEO-optimized content at scale with advanced AI writing tools and templates.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">Starting at $49/month</div>
                  <a href="/ai-content-generation" className="text-orange-400 hover:text-orange-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Sales Automation</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Automate your sales process with AI-powered lead scoring, email sequences, and conversation intelligence.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">Starting at $199/month</div>
                  <a href="/ai-sales-automation" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Additional AI Services Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Data Visualization</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Transform data into actionable insights with AI-generated interactive dashboards and visualizations.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Starting at $99/month</div>
                  <a href="/ai-data-visualization" className="text-purple-400 hover:text-purple-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">📧</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Email Marketing</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Supercharge email campaigns with AI-generated content, smart segmentation, and send time optimization.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400 mb-2">Starting at $79/month</div>
                  <a href="/ai-email-marketing" className="text-teal-400 hover:text-teal-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">🏥</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Healthcare</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">🏥</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Healthcare</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Fintech</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card">
                <div className="text-5xl mb-6 text-center">⚛️</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Computing</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-6 text-center">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Autonomous Systems</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations and infrastructure.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Starting at $2,500/month</div>
                  <a href="/autonomous-systems" className="text-green-600 hover:text-green-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
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

            <article className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Transformation</h3>
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

            <article className="cyber-card hologram-card">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Services</h3>
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
          
          <div className="text-center mt-8">
            <a 
              href="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Content Statistics */}
        <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Social Proof Section */}
        <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16" aria-labelledby="social-proof-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="social-proof-heading" className="text-3xl font-bold text-center text-white mb-12 neon-text">
              Trusted by Industry Leaders
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center cyber-card">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center cyber-card">
                <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="text-center cyber-card">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center cyber-card">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">What Our Clients Say</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"Zion Tech Group transformed our operations with AI solutions that delivered $50M in annual savings. Their expertise is unmatched."</p>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-gray-400">CTO, Fortune 500 Company</div>
                </div>
                
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"The digital transformation they implemented increased our efficiency by 300%. Highly recommend their services."</p>
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-sm text-gray-400">VP Operations, Global Corp</div>
                </div>
                
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"Outstanding cloud infrastructure and AI implementation. They exceeded all our expectations."</p>
                  <div className="font-semibold text-white">Emily Rodriguez</div>
                  <div className="text-sm text-gray-400">Director of Technology, Tech Giant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
