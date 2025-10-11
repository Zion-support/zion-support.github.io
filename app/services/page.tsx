import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Cloud, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence services to transform your business operations and decision-making processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Automation'],
      link: '/ai-services',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions with ultra-fast speeds, low latency, and massive IoT capabilities.',
      features: ['Network Design', 'Infrastructure Setup', 'IoT Integration', 'Edge Computing', 'Performance Optimization'],
      link: '/5g-implementation',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to modernize your IT infrastructure and reduce operational costs.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'DevOps Implementation', 'Cost Optimization', 'Security Hardening'],
      link: '/cloud-services',
      color: 'from-purple-600 to-violet-600'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management', 'Security Training'],
      link: '/cybersecurity',
      color: 'from-red-600 to-rose-600'
    }
  ];

  const specializedServices = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform.',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital overhaul of your business processes and customer experiences.',
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique business requirements.',
      icon: <Brain className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Data Management',
      description: 'Comprehensive data strategy, storage, and processing solutions for modern businesses.',
      icon: <Cloud className="w-8 h-8 text-green-500" />
    },
    {
      title: 'IoT Solutions',
      description: 'Connect and manage devices with our Internet of Things implementation services.',
      icon: <Zap className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance and implement robust governance frameworks.',
      icon: <Lock className="w-8 h-8 text-red-500" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business goals, current challenges, and technical requirements through comprehensive analysis.',
      details: ['Business Assessment', 'Technical Audit', 'Requirement Gathering', 'Stakeholder Interviews']
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a customized strategy and implementation plan tailored to your specific needs and objectives.',
      details: ['Solution Design', 'Technology Selection', 'Timeline Planning', 'Resource Allocation']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring minimal disruption to your operations while delivering maximum value.',
      details: ['Development & Deployment', 'Integration & Testing', 'Training & Documentation', 'Quality Assurance']
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and support to ensure your solutions perform at peak efficiency.',
      details: ['Performance Monitoring', 'Regular Updates', '24/7 Support', 'Continuous Improvement']
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'AI-powered diagnostics, telemedicine, and patient management systems' },
    { name: 'Finance', description: 'Fraud detection, algorithmic trading, and risk management solutions' },
    { name: 'Manufacturing', description: 'Smart factories, predictive maintenance, and quality control systems' },
    { name: 'Retail', description: 'Personalized shopping experiences, inventory optimization, and customer analytics' },
    { name: 'Education', description: 'AI tutoring, learning analytics, and educational content generation' },
    { name: 'Transportation', description: 'Autonomous vehicles, smart traffic management, and logistics optimization' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, 5G implementation, cloud infrastructure, and cybersecurity. Transform your business today." />
        <meta name="keywords" content="AI services, 5G implementation, cloud infrastructure, cybersecurity, digital transformation, IT services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship services that form the foundation of modern digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Additional services to address specific business needs and industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-2"></div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We have experience across multiple industries, delivering tailored solutions for each sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;