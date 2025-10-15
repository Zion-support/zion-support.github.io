import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'ai' | 'saas' | 'it'>('ai');

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

  const renderServiceCard = (service: any, index: number) => (
    <div 
      key={service.id} 
      className={`fade-in ${visibleElements.has(`service-${service.id}`) ? 'visible' : ''}`} 
      id={`service-${service.id}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="neon-card h-full group hover:scale-105 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{service.icon}</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">${service.pricing.basic}</div>
            <div className="text-sm text-gray-400">starting</div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {service.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <li key={idx} className="text-gray-400 text-sm flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
              <li key={idx} className="text-gray-400 text-sm flex items-center">
                <span className="text-purple-400 mr-2">→</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Link 
            to={`/${service.id}`} 
            className="neon-button w-full text-center text-sm"
          >
            Learn More
          </Link>
          <a 
            href={`mailto:${service.email}?subject=Inquiry about ${service.title}`}
            className="neon-button neon-button-purple w-full text-center text-sm"
          >
            Contact Sales
          </a>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex justify-between text-xs text-gray-500">
            <span>📞 {service.contact}</span>
            <span>📧 {service.email}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cloud infrastructure, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="animated-grid"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('hero') ? 'visible' : ''}`} id="hero">
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                <span className="holographic">Our Services</span>
              </h1>
              <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center mb-12">
              <div className="flex bg-gray-900 rounded-lg p-1 mb-4 md:mb-0">
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === 'ai' 
                      ? 'bg-cyan-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  AI Services
                </button>
                <button
                  onClick={() => setActiveTab('saas')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === 'saas' 
                      ? 'bg-purple-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Micro SAAS
                </button>
                <button
                  onClick={() => setActiveTab('it')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === 'it' 
                      ? 'bg-pink-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  IT Solutions
                </button>
              </div>
            </div>

            {/* AI Services */}
            {activeTab === 'ai' && (
              <div className={`fade-in ${visibleElements.has('ai-services') ? 'visible' : ''}`} id="ai-services">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold neon-text mb-4">AI Services</h2>
                  <p className="text-gray-300 text-lg">
                    Advanced artificial intelligence solutions powered by cutting-edge machine learning and deep learning technologies.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesData.aiServices.map((service, index) => renderServiceCard(service, index))}
                </div>
              </div>
            )}

            {/* Micro SAAS Services */}
            {activeTab === 'saas' && (
              <div className={`fade-in ${visibleElements.has('saas-services') ? 'visible' : ''}`} id="saas-services">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold neon-text-purple mb-4">Micro SAAS Solutions</h2>
                  <p className="text-gray-300 text-lg">
                    Innovative software-as-a-service solutions that streamline business processes and boost productivity.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesData.microSaas.map((service, index) => renderServiceCard(service, index))}
                </div>
              </div>
            )}

            {/* IT Solutions */}
            {activeTab === 'it' && (
              <div className={`fade-in ${visibleElements.has('it-services') ? 'visible' : ''}`} id="it-services">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold neon-text-pink mb-4">IT Solutions</h2>
                  <p className="text-gray-300 text-lg">
                    Comprehensive IT services including cloud infrastructure, web development, and cybersecurity solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesData.itSolutions.map((service, index) => renderServiceCard(service, index))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('pricing') ? 'visible' : ''}`} id="pricing">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="holographic">Flexible Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="neon-card text-center">
                <h3 className="text-2xl font-bold neon-text mb-4">Basic</h3>
                <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Up to 5 users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Basic features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Standard SLA
                  </li>
                </ul>
                <Link to="/contact" className="neon-button w-full">
                  Get Started
                </Link>
              </div>

              <div className="neon-card text-center glow-border">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold neon-text-purple mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    Up to 25 users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    Custom integrations
                  </li>
                </ul>
                <Link to="/contact" className="neon-button neon-button-purple w-full">
                  Get Started
                </Link>
              </div>

              <div className="neon-card text-center">
                <h3 className="text-2xl font-bold neon-text-pink mb-4">Enterprise</h3>
                <div className="text-4xl font-bold mb-4">$299<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span>
                    Unlimited users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span>
                    All features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span>
                    24/7 phone support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span>
                    Custom development
                  </li>
                </ul>
                <Link to="/contact" className="neon-button w-full">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`fade-in ${visibleElements.has('cta') ? 'visible' : ''}`} id="cta">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your specific needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="neon-button text-lg px-8 py-4">
                  Contact Us
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="neon-button neon-button-purple text-lg px-8 py-4"
                >
                  Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;