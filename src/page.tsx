'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';

// Dynamically import heavy components for better performance;
const ContentCarousel = lazy(() =>import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components;
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      import('./components/ContentCarousel');
      import('./components/ContentCarousel');
    }, 100);
  }
}
// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
        preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized;
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, [])
  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div>
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >Skip to main content</a>

        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>

        <main id="main-content" className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 pt-20 sm:pt-24" role="main">
          {/* Hero Section */}
          <section className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div>
              <h1
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-advanced neon-pulse glitch"
                data-text="Zion Tech Group"
              >Zion Tech Group</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-6 sm:mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">Advanced AI and IT Solutions</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div>
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Get Started Today</Link>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Micro SAAS Solutions</h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">Powerful, affordable AI-powered tools designed for modern businesses</p>
            
            <div>
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'cyber-glow-advanced ring-2 ring-cyan-400' : 'holographic-card-advanced'}`}>
                  {service.popular && (
                    <div>
                      <div>Popular</div>
                    </div>
                  )}
                  
                  <div>
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div>
                      {service.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <Link
                      to={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    >Learn More</Link>
                  </div>
                </article>
              ))}
            </div>
            <div>
              <a
                href="/micro-saas" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >View All Micro SAAS Solutions</a>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">AI Services & Solutions</h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">Advanced artificial intelligence solutions for enterprise applications</p>
            
            <div>
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-entanglement p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <Link
                      to="/ai-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >Learn More</Link>
                  </div>
                </article>
              ))}
            </div>
            <div>
              <a
                href="/ai-services" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >View All AI Services</a>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">IT Services & Infrastructure</h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">Comprehensive IT solutions for modern enterprise infrastructure</p>
            
            <div>
              {itServices.map((service, index) => (
                <article key={index} className="holographic-card-advanced p-6 hover:scale-105 transition-all duration-300">
                  <div>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <Link
                      to="/it-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >Learn More</Link>
                  </div>
                </article>
              ))}
            </div>
            <div>
              <a
                href="/it-services" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >View All IT Services</a>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">Our Impact</h2>
            
            <div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
                <div className="text-sm text-gray-300">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">$50M+</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2 neon-text">95%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2 neon-text">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
            </div>
          </section>

          {/* Specialized Solutions Section */}
          <section className="mb-16" aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Specialized Solutions</h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">Cutting-edge technologies for next-generation business solutions</p>
            
            <div>
              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">Next-generation quantum algorithms and quantum security implementations</p>
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Quantum Algorithm Development</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Quantum Security</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Optimization Problems</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Research & Development</li>
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 neon-text text-purple-400">Custom Pricing</div>
                  <a
                    href="/quantum-computing" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >Learn More</a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div>
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Autonomous Systems</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">Self-managing and self-optimizing systems for enterprise operations</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Self-Healing Systems</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Predictive Maintenance</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Resource Optimization</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Performance Monitoring</li>
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 neon-text text-cyan-400">Custom Pricing</div>
                  <a
                    href="/autonomous-systems" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >Learn More</a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div>
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Blockchain & Web3</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">Decentralized solutions, smart contracts, and Web3 applications</p>
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Smart Contract Development</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />DApp Creation</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Token Economics</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />DeFi Solutions</li>
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 neon-text text-green-400">$1,999/month</div>
                  <a
                    href="/blockchain-web3" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-green-400 border border-green-400 hover:bg-green-400 hover:text-slate-900"
                  >Learn More</a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div>
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">IoT & Edge Computing</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">Connected devices and edge computing solutions</p>
                <div>
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Device Management</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Edge Analytics</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Real-time Processing</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Security Implementation</li>
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 neon-text text-orange-400">$1,499/month</div>
                  <a
                    href="/iot-edge-computing" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-slate-900"
                  >Learn More</a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div>
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Business Intelligence</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">Data-driven insights and predictive analytics for decision-making</p>
                <div>
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Data Warehousing</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />ETL Processes</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Advanced Analytics</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Executive Dashboards</li>
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 neon-text text-indigo-400">$1,799/month</div>
                  <a
                    href="/business-intelligence" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-indigo-400 border border-indigo-400 hover:bg-indigo-400 hover:text-slate-900"
                  >Learn More</a>
                </div>
              </article>

              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div>
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Robotics Solutions</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">Intelligent robotic solutions for manufacturing and service industries</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Robotic Process Automation</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Computer Vision Integration</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Human-Robot Collaboration</li>
                    <li className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />Maintenance Systems</li>
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 neon-text text-gray-400">Custom Pricing</div>
                  <a
                    href="/robotics" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-400 border border-gray-400 hover:bg-gray-400 hover:text-slate-900"
                  >Learn More</a>
                </div>
              </article>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">Get In Touch</h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Ready to transform your business? Contact us for a free consultation and discover how our solutions can drive your success.
            </p>
            
            <div>
              <div>
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >Call Now</a>
              </div>
              <div>
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >Send Email</a>
              </div>
              <div>
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >View on Map</a>
              </div>
            </div>
            {/* CTA Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI and IT solutions can revolutionize your operations and drive unprecedented growth.
              </p>
              <div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >Get Free Consultation</a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />+1 302 464 0950</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>);
}
export default HomePage