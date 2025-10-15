import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Futuristic Technology</title>
        <meta name="description" content="Leading provider of cutting-edge AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, digital transformation, and innovative micro SAAS solutions." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, cloud infrastructure, digital transformation, artificial intelligence, business automation, technology consulting" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="cyber-bg"></div>
        <div className="neon-grid"></div>
        
        {/* Floating Particles */}
        <div className="particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="floating">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic">
                ZION TECH GROUP
              </h1>
              <p className="text-2xl md:text-3xl neon-text mb-4">
                Advanced AI & IT Solutions
              </p>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, innovative micro SAAS solutions, 
              and futuristic technology that drives growth and efficiency in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="neon-button glow">
                Get Started Now
              </a>
              <a href="/about" className="neon-button-purple">
                Learn More
              </a>
              <a href="tel:+13024640950" className="neon-button-green">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Micro SAAS Solutions */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-purple">
              Revolutionary Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Innovative, real-world micro SAAS applications designed to solve specific business challenges with AI-powered intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {servicesData.microSaas.map((service, index) => (
                <div key={service.id} className="futuristic-card group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold neon-text-green">${service.pricing.basic} - ${service.pricing.enterprise}/month</div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a 
                    href={service.link || '#'} 
                    className="neon-button w-full text-center block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
              Advanced AI Services
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions that revolutionize how businesses operate and compete.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service, index) => (
                <div key={service.id} className="futuristic-card group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 neon-text-purple">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold neon-text-green">${service.pricing.basic.toLocaleString()} - ${service.pricing.enterprise.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Custom pricing available</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a href="/ai-services" className="neon-button-purple w-full text-center block">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-green">
              AI-Powered Tools
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Powerful AI tools that automate tasks, provide insights, and enhance productivity across your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiTools.map((tool, index) => (
                <div key={tool.id} className="futuristic-card group">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold mb-3 neon-text-green">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold neon-text-green">${tool.pricing.basic} - ${tool.pricing.enterprise}/month</div>
                    <div className="text-sm text-gray-400">Market Price: {tool.marketPrice}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {tool.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a 
                    href={tool.link || '#'} 
                    className="neon-button-green w-full text-center block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
              Enterprise IT Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Comprehensive IT infrastructure and solutions that scale with your business and drive digital transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((solution, index) => (
                <div key={solution.id} className="futuristic-card group">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-3 neon-text">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{solution.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold neon-text-green">${solution.pricing.basic.toLocaleString()} - ${solution.pricing.enterprise.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Custom enterprise pricing</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a href="/it-services" className="neon-button w-full text-center block">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mb-20">
            <div className="futuristic-card max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 holographic">
                Ready to Transform Your Business?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className="text-lg font-bold neon-text mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-neon-blue transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">✉️</div>
                  <h3 className="text-lg font-bold neon-text-purple mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-neon-purple transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="text-lg font-bold neon-text-green mb-2">Address</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="neon-button glow">
                  Get Free Consultation
                </a>
                <a href="/pricing" className="neon-button-purple">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;