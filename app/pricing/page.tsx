import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Services</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS applications. Competitive rates with no hidden fees. Get a custom quote today." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, custom quotes, transparent pricing" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text cyber-font">
              PRICING & PLANS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transparent, competitive pricing for all our AI services, IT solutions, and micro SAAS applications. 
              No hidden fees, no surprises. Get a custom quote tailored to your specific needs.
            </p>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              AI SERVICES PRICING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{service.shortDescription}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold neon-text">{service.marketPrice}</span>
                  </div>
                  
                  <ul className="text-gray-300 space-y-3 mb-8">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-blue mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="neon-button w-full text-center block"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SAAS Pricing */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-pink">
              MICRO SAAS PRICING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{service.shortDescription}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold neon-text-purple">{service.marketPrice}</span>
                  </div>
                  
                  <ul className="text-gray-300 space-y-3 mb-8">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-purple mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={`/${service.id}`} 
                    className="neon-button neon-button-purple w-full text-center block"
                  >
                    Try Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services Pricing */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text">
              IT SERVICES PRICING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{service.shortDescription}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold neon-text">{service.marketPrice}</span>
                  </div>
                  
                  <ul className="text-gray-300 space-y-3 mb-8">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-blue mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="neon-button w-full text-center block"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              SERVICE TIERS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text mb-6">$1,000 - $5,000</div>
                <p className="text-gray-300 mb-8">Perfect for small businesses and startups</p>
                <ul className="text-gray-300 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="text-neon-blue mr-3">✓</span>
                    Basic consultation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-blue mr-3">✓</span>
                    Standard implementation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-blue mr-3">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-blue mr-3">✓</span>
                    Basic documentation
                  </li>
                </ul>
                <a href="/contact" className="neon-button w-full">Get Started</a>
              </div>
              
              <div className="futuristic-card p-8 text-center border-2 border-neon-purple">
                <div className="text-neon-purple text-sm font-bold mb-2">MOST POPULAR</div>
                <h3 className="text-3xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold neon-text-purple mb-6">$5,000 - $20,000</div>
                <p className="text-gray-300 mb-8">Ideal for growing businesses</p>
                <ul className="text-gray-300 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="text-neon-purple mr-3">✓</span>
                    Comprehensive consultation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-purple mr-3">✓</span>
                    Advanced implementation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-purple mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-purple mr-3">✓</span>
                    Detailed documentation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-purple mr-3">✓</span>
                    Training sessions
                  </li>
                </ul>
                <a href="/contact" className="neon-button neon-button-purple w-full">Get Started</a>
              </div>
              
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-6">$20,000+</div>
                <p className="text-gray-300 mb-8">For large organizations and enterprises</p>
                <ul className="text-gray-300 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-3">✓</span>
                    Dedicated consultation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-3">✓</span>
                    Custom implementation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-3">✓</span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-3">✓</span>
                    Custom documentation
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-3">✓</span>
                    On-site training
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-3">✓</span>
                    SLA guarantees
                  </li>
                </ul>
                <a href="/contact" className="neon-button w-full">Contact Sales</a>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-pink">
              ADDITIONAL SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.additionalServices.map((service) => (
                <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{service.shortDescription}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold neon-text-pink">{service.marketPrice}</span>
                  </div>
                  
                  <ul className="text-gray-300 space-y-3 mb-8">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-pink mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="neon-button neon-button-purple w-full text-center block"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Why Our Pricing */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text">
              WHY OUR PRICING IS COMPETITIVE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-white mb-4">No Hidden Fees</h3>
                <p className="text-gray-300">Transparent pricing with no surprise charges or hidden costs</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Flexible Plans</h3>
                <p className="text-gray-300">Customizable solutions that fit your budget and requirements</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Quick ROI</h3>
                <p className="text-gray-300">Fast implementation and measurable return on investment</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">Value Focused</h3>
                <p className="text-gray-300">Quality solutions that deliver maximum value for your investment</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO GET STARTED?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and personalized quote. 
                We'll work with you to find the perfect solution within your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Get Free Quote
                </a>
                <a 
                  href="/contact" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;