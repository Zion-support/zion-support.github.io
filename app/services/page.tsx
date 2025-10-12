'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation for increased efficiency',
      icon: Zap,
      features: ['Workflow Automation', 'RPA Integration', 'Smart Scheduling', 'Document Processing'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'AI Analytics',
      description: 'Advanced data insights and business intelligence',
      icon: BarChart,
      features: ['Real-time Dashboards', 'Predictive Modeling', 'Custom Reports', 'Data Visualization'],
      price: 'Starting at $3,000/month'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications and platforms',
      icon: Code,
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development'],
      price: 'Starting at $2,000/month'
    }
  ];

  const microSaasServices = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform',
      icon: BarChart,
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      price: '$299/month'
    },
    {
      title: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot',
      icon: Brain,
      features: ['24/7 Support', 'Multi-language', 'CRM Integration'],
      price: '$199/month'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring',
      icon: Shield,
      features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reports'],
      price: '$399/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including development, cloud infrastructure, cybersecurity, and micro SAAS solutions." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
        </section>

        {/* AI Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            AI Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Advanced artificial intelligence solutions to automate and optimize your business processes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Complete technology infrastructure solutions to modernize and secure your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Micro SAAS Solutions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Ready-to-use business tools with AI and automation built-in
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our experts today for a free consultation and discover how our services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;