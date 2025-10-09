'use client';
import React from 'react';
import { CheckCircle, Code, Zap, Phone, Mail, MapPin, Star, Award, Users, TrendingUp, Brain, Shield, Clock, Globe, Smartphone, Laptop, Database, Settings, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const APIDevelopmentPage: React.FC = () => {
  const features = [
    'RESTful API design and development',
    'GraphQL API implementation',
    'Microservices architecture design',
    'API security and authentication',
    'Rate limiting and throttling',
    'API documentation and testing',
    'Real-time API with WebSockets',
    'API versioning and migration',
    'Performance optimization',
    'Cloud-native API deployment'
  ];

  const benefits = [
    'Accelerate development by 300%',
    'Reduce integration time by 80%',
    'Improve system scalability by 500%',
    'Enhance security with enterprise-grade authentication',
    'Enable seamless third-party integrations',
    'Reduce maintenance costs by 60%',
    'Improve data consistency across platforms',
    'Enable rapid prototyping and MVP development'
  ];

  const services = [
    {
      title: 'Custom API Development',
      description: 'Tailored APIs built for your specific business needs',
      icon: '🔧',
      features: ['RESTful design', 'GraphQL support', 'Custom endpoints', 'Business logic integration']
    },
    {
      title: 'API Integration',
      description: 'Connect your systems with external services and platforms',
      icon: '🔗',
      features: ['Third-party APIs', 'Payment gateways', 'Social media APIs', 'Cloud services']
    },
    {
      title: 'API Security',
      description: 'Enterprise-grade security for your API infrastructure',
      icon: '🔒',
      features: ['OAuth 2.0', 'JWT tokens', 'Rate limiting', 'Encryption']
    },
    {
      title: 'API Maintenance',
      description: 'Ongoing support and optimization for your APIs',
      icon: '⚙️',
      features: ['Performance monitoring', 'Bug fixes', 'Updates', 'Documentation']
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$2,500',
      description: 'Simple API development',
      features: [
        'Up to 5 endpoints',
        'Basic authentication',
        'RESTful design',
        'Documentation',
        'Testing',
        '1 month support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      description: 'Advanced API solutions',
      features: [
        'Up to 20 endpoints',
        'Advanced authentication',
        'GraphQL support',
        'Rate limiting',
        'Comprehensive testing',
        '3 months support',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,000+',
      description: 'Complex API ecosystems',
      features: [
        'Unlimited endpoints',
        'Microservices architecture',
        'Custom security',
        'Real-time features',
        'Load balancing',
        '6 months support',
        'Dedicated team'
      ],
      popular: false
    }
  ];

  const technologies = [
    'Node.js', 'Python', 'Java', 'C#', 'Go', 'PHP', 'Express.js', 'Django',
    'Spring Boot', 'ASP.NET Core', 'FastAPI', 'GraphQL', 'REST', 'WebSocket',
    'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Azure', 'Google Cloud'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            <span>API Development</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Development Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional API development services that connect your systems, enable integrations, 
            and power your digital transformation with robust, scalable, and secure APIs.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Integration Time Saved</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
              <div className="text-gray-300">Scalability Boost</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Comprehensive API Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our API Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Professional API development that accelerates your digital transformation and enables seamless integrations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our API Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-blue-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="cyber-card px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">one-time project</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} API Development`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your API?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert developers create powerful, scalable APIs that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=API Development Inquiry"
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APIDevelopmentPage;
