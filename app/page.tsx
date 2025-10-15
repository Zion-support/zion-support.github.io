import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Future-Ready Technology</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, digital transformation, and innovative micro SAAS solutions." />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, digital transformation, micro SAAS, artificial intelligence, machine learning, cybersecurity, web development, mobile development" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Particle Effects */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Hero Section */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text floating-element">
              ZION TECH GROUP
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-4 holographic">
              ADVANCED AI & IT SOLUTIONS
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, innovative micro SAAS solutions, 
              and comprehensive IT services. We deliver future-ready technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="neon-button px-12 py-4 text-lg font-bold glow-effect"
              >
                Get Started Now
              </a>
              <a 
                href="/about" 
                className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
              >
                Learn More
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">Ready to transform your business?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
                <span>📞 +1 302 464 0950</span>
                <span>✉️ kleber@ziontechgroup.com</span>
                <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className={`mt-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text-purple">
              OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, 
                  computer vision, and custom AI development.
                </p>
                <div className="mb-4">
                  <span className="text-neon-blue font-bold text-lg">$5,000 - $50,000</span>
                </div>
                <a href="/ai-services" className="neon-button w-full text-center block">
                  Explore AI Services
                </a>
              </div>

              {/* Micro SAAS */}
              <div className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-white mb-4 neon-text-pink">Micro SAAS Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Innovative micro SAAS applications including task management, expense tracking, 
                  customer support, and email marketing platforms.
                </p>
                <div className="mb-4">
                  <span className="text-neon-pink font-bold text-lg">$19 - $999/month</span>
                </div>
                <a href="/micro-saas-solutions" className="neon-button neon-button-purple w-full text-center block">
                  View SAAS Solutions
                </a>
              </div>

              {/* IT Solutions */}
              <div className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">IT Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive IT services including cloud infrastructure, cybersecurity, 
                  web development, mobile apps, and network solutions.
                </p>
                <div className="mb-4">
                  <span className="text-neon-blue font-bold text-lg">$1,000 - $60,000</span>
                </div>
                <a href="/it-services" className="neon-button w-full text-center block">
                  Discover IT Solutions
                </a>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className={`mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
              AI-POWERED TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.microSaas.slice(0, 4).map((tool, index) => (
                <div key={tool.id} className="futuristic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.shortDescription}</p>
                  <div className="mb-3">
                    <span className="text-neon-green font-bold text-sm">{tool.marketPrice}</span>
                  </div>
                  <a 
                    href={`/${tool.id}`} 
                    className="neon-button w-full text-center block text-sm py-2"
                  >
                    Try Now
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/services" className="neon-button neon-button-purple px-8 py-3">
                View All Services →
              </a>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={`mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text-pink">
              WHY CHOOSE ZION TECH GROUP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">Cutting-edge technology and innovative solutions</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Rapid deployment and implementation</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Support</h3>
                <p className="text-gray-300">24/7 expert support and maintenance</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI and IT solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Start Your Journey
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
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