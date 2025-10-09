'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building, Users, Shield, Zap, CheckCircle, ArrowRight, Star, Award, BarChart, Target } from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Scalable Architecture',
      description: 'Enterprise-grade solutions designed to scale with your business growth and demands.'
    },
    {
      icon: Users,
      title: 'Multi-tenant Support',
      description: 'Support for multiple departments, locations, and user groups with role-based access.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features including SSO, encryption, and compliance management.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for high-volume operations with 99.9% uptime and rapid response times.'
    }
  ];

  const solutions = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions for large organizations with complex business processes.',
      scale: '10K+ users',
      icon: '📊'
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      scale: '1M+ contacts',
      icon: '👥'
    },
    {
      title: 'Business Intelligence',
      description: 'Enterprise BI solutions for data analysis, reporting, and decision making.',
      scale: '100TB+ data',
      icon: '📈'
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions for procurement, inventory, and logistics.',
      scale: 'Global',
      icon: '🚚'
    },
    {
      title: 'Human Resources',
      description: 'Comprehensive HR solutions for talent management and workforce optimization.',
      scale: '50K+ employees',
      icon: '👨‍💼'
    },
    {
      title: 'Financial Management',
      description: 'Enterprise financial systems for accounting, budgeting, and financial reporting.',
      scale: 'Multi-currency',
      icon: '💰'
    }
  ];

  const benefits = [
    'Scale to support thousands of users and millions of records',
    'Integrate with existing enterprise systems and workflows',
    'Ensure compliance with industry regulations and standards',
    'Provide 24/7 support and maintenance services',
    'Deliver measurable ROI and business value',
    'Support global operations and multi-location deployments'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive enterprise solutions designed for large organizations. 
                Scale your business with our robust, secure, and scalable technology platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Global</div>
                <div className="text-gray-300">Deployment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are built with scalability, security, and performance 
                in mind to meet the demanding requirements of large organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From ERP to CRM, we provide comprehensive enterprise solutions 
                that integrate seamlessly with your existing systems and processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{solution.icon}</div>
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {solution.scale}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Enterprise Solutions?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our enterprise solutions are designed to meet the complex needs of large organizations 
                  with robust, scalable, and secure technology platforms.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Enterprise Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Enterprise Clients:</span>
                    <span className="text-green-400 font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uptime SLA:</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Global Deployment:</span>
                    <span className="text-green-400 font-semibold">50+ countries</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Support Coverage:</span>
                    <span className="text-green-400 font-semibold">24/7/365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Scale Your Enterprise</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to implement enterprise solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EnterpriseSolutionsPage;