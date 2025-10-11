'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Atom, 
  Server, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: 'Micro SAAS Services',
      description: 'Affordable micro SAAS solutions for small to medium businesses',
      icon: Rocket,
      link: '/micro-saas-services',
      color: 'from-purple-500 to-pink-500',
      features: ['12+ Micro Services', 'Affordable Pricing', 'Easy Integration', '24/7 Support']
    },
    {
      title: 'Advanced AI Services',
      description: 'Cutting-edge AI solutions including quantum computing and neural interfaces',
      icon: Atom,
      link: '/ai-services-advanced',
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum Computing', 'Neural Interfaces', 'Autonomous Systems', 'Healthcare AI']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions from cloud migration to 24/7 support',
      icon: Server,
      link: '/it-services-comprehensive',
      color: 'from-green-500 to-emerald-500',
      features: ['Cloud Migration', 'Cybersecurity', 'Web Development', '24/7 Support']
    }
  ];

  const allServices = [
    {
      title: 'AI Services',
      description: 'AI-powered solutions for business automation and intelligence',
      icon: Brain,
      link: '/ai-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      link: '/cloud-infrastructure',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      icon: Shield,
      link: '/cybersecurity',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      icon: Code,
      link: '/web-development',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps',
      icon: Smartphone,
      link: '/mobile-development',
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: BarChart3,
      link: '/data-analytics',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const benefits = [
    'Expert team with 15+ years experience',
    'Cutting-edge technology solutions',
    '24/7 support and maintenance',
    'Competitive pricing and flexible plans',
    'Proven track record of success',
    'Custom solutions for every business'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS, advanced AI, cloud infrastructure, cybersecurity, and more." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud infrastructure, cybersecurity, web development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Our <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth. 
              From micro SAAS to advanced AI, we have everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative service categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-6`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All <span className="text-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete range of technology solutions for every business need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-green-400">Our Services</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value and results for every client
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our experts today to discuss your project requirements and get a personalized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
