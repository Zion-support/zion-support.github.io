'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CogIcon,
  ServerIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

export default function ITInfrastructureManagementPro() {
  const services = [
    {
      icon: ServerIcon,
      title: 'Server Management',
      description: 'Complete server administration, monitoring, and optimization for maximum uptime.',
      price: '$299/month per server'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, and GCP management with cost optimization and security hardening.',
      price: '$499/month per environment'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Desktop Support',
      description: 'End-user support, software deployment, and device management across your organization.',
      price: '$99/month per user'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Network Management',
      description: 'Network design, implementation, and ongoing maintenance for optimal performance.',
      price: '$399/month per location'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Management',
      description: 'Comprehensive security monitoring, patch management, and compliance maintenance.',
      price: '$599/month per environment'
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Monitoring',
      description: '24/7 monitoring and alerting for all critical systems and applications.',
      price: '$199/month per system'
    }
  ];

  const features = [
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your critical systems.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Proactive Maintenance',
      description: 'Preventive maintenance and updates to avoid downtime and security vulnerabilities.'
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Optimization',
      description: 'Continuous optimization to ensure peak performance and cost efficiency.'
    },
    {
      icon: UserGroupIcon,
      title: 'Dedicated Team',
      description: 'Assigned technical experts who understand your specific infrastructure needs.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard maintenance',
        'Monthly reports',
        '1 dedicated engineer'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        '24/7 phone support',
        'Proactive maintenance',
        'Weekly reports',
        '3 dedicated engineers',
        'Cloud management',
        'Security services'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Full monitoring suite',
        'Dedicated support team',
        'Custom maintenance',
        'Real-time dashboards',
        'Unlimited engineers',
        'Multi-cloud management',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce IT downtime by 90%',
    'Save 40% on IT operational costs',
    'Improve system performance by 60%',
    'Enhance security posture with proactive monitoring',
    'Scale infrastructure seamlessly as you grow',
    'Get expert guidance on technology decisions'
  ];

  const technologies = [
    {
      name: 'Microsoft Azure',
      description: 'Cloud infrastructure and services management',
      icon: '☁️'
    },
    {
      name: 'Amazon AWS',
      description: 'Scalable cloud computing and storage solutions',
      icon: '🚀'
    },
    {
      name: 'Google Cloud',
      description: 'AI-powered cloud services and analytics',
      icon: '🔍'
    },
    {
      name: 'VMware',
      description: 'Virtualization and container management',
      icon: '📦'
    },
    {
      name: 'Docker',
      description: 'Containerization and orchestration',
      icon: '🐳'
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration and management',
      icon: '⚙️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Infrastructure Management Pro - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure management services including server management, cloud infrastructure, network management, and 24/7 support for businesses of all sizes." />
        <meta name="keywords" content="IT infrastructure management, server management, cloud services, network management, IT support, infrastructure monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
              IT Infrastructure Management Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT infrastructure management with 24/7 support and proactive monitoring
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Let us handle your IT infrastructure so you can focus on growing your business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Infrastructure Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT infrastructure management tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="text-purple-400 font-semibold">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert IT management with proven results and exceptional support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Technologies We Manage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert management of all major cloud and infrastructure platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{tech.name}</h3>
                <p className="text-gray-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements that drive business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Management Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the management level that fits your infrastructure needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                plan.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-slate-600 hover:border-purple-500'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Optimize Your IT?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let our experts manage your IT infrastructure so you can focus on business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Infrastructure Assessment
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}