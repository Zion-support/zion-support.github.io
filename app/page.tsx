import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredServices = [
    ...servicesData.aiServices.slice(0, 3),
    ...servicesData.microSaas.slice(0, 3),
    ...servicesData.itSolutions.slice(0, 3)
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cloud infrastructure, digital transformation, artificial intelligence, machine learning" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="animated-grid"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`fade-in ${visibleElements.has('hero-title') ? 'visible' : ''}`} id="hero-title">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="holographic">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future with cutting-edge AI and IT solutions that transform businesses and accelerate growth in the digital age.
              </p>
            </div>
            
            <div className={`fade-in ${visibleElements.has('hero-buttons') ? 'visible' : ''}`} id="hero-buttons">
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link to="/contact" className="neon-button text-lg px-8 py-4">
                  Get Started Today
                </Link>
                <Link to="/services" className="neon-button neon-button-purple text-lg px-8 py-4">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className={`fade-in ${visibleElements.has('hero-stats') ? 'visible' : ''}`} id="hero-stats">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="neon-text text-3xl md:text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="neon-text-purple text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="neon-text-pink text-3xl md:text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="neon-text-green text-3xl md:text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-400">AI Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('services-title') ? 'visible' : ''}`} id="services-title">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                <span className="holographic">Our Services</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className={`slide-in-left ${visibleElements.has('ai-services') ? 'visible' : ''}`} id="ai-services">
                <div className="neon-card h-full">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold neon-text mb-4">AI Services</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-gray-400">• Custom AI Development</li>
                    <li className="text-gray-400">• Machine Learning Models</li>
                    <li className="text-gray-400">• Natural Language Processing</li>
                    <li className="text-gray-400">• Computer Vision</li>
                  </ul>
                  <Link to="/ai-services" className="neon-button w-full text-center">
                    Explore AI Services
                  </Link>
                </div>
              </div>

              {/* Micro SAAS */}
              <div className={`fade-in ${visibleElements.has('micro-saas') ? 'visible' : ''}`} id="micro-saas">
                <div className="neon-card h-full">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold neon-text-purple mb-4">Micro SAAS</h3>
                  <p className="text-gray-300 mb-6">
                    Innovative software-as-a-service solutions that streamline business processes and boost productivity.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-gray-400">• Task Management</li>
                    <li className="text-gray-400">• Workflow Automation</li>
                    <li className="text-gray-400">• Email Marketing</li>
                    <li className="text-gray-400">• Social Media Management</li>
                  </ul>
                  <Link to="/micro-saas-solutions" className="neon-button neon-button-purple w-full text-center">
                    View SAAS Solutions
                  </Link>
                </div>
              </div>

              {/* IT Solutions */}
              <div className={`slide-in-right ${visibleElements.has('it-solutions') ? 'visible' : ''}`} id="it-solutions">
                <div className="neon-card h-full">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold neon-text-pink mb-4">IT Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive IT services including cloud infrastructure, web development, and cybersecurity solutions.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-gray-400">• Cloud Infrastructure</li>
                    <li className="text-gray-400">• Web Development</li>
                    <li className="text-gray-400">• Mobile Apps</li>
                    <li className="text-gray-400">• Cybersecurity</li>
                  </ul>
                  <Link to="/it-services" className="neon-button neon-button-purple w-full text-center">
                    Discover IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('featured-title') ? 'visible' : ''}`} id="featured-title">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                <span className="holographic">Featured Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Discover our most popular AI and IT solutions trusted by businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`fade-in ${visibleElements.has(`service-${index}`) ? 'visible' : ''}`} 
                  id={`service-${index}`}
                >
                  <div className="neon-card h-full group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.shortDescription}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-cyan-400 font-bold">
                        From ${service.pricing.basic}/mo
                      </span>
                      <span className="text-green-400 text-sm">✓ Available</span>
                    </div>
                    <Link 
                      to={`/${service.id}`} 
                      className="neon-button w-full text-center text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`fade-in ${visibleElements.has('cta') ? 'visible' : ''}`} id="cta">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our experts and discover how our AI and IT solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="neon-button text-lg px-8 py-4">
                  Contact Us Today
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="neon-button neon-button-purple text-lg px-8 py-4"
                >
                  Call +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;