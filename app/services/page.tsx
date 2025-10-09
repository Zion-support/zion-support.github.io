'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Phone, Mail, TrendingUp, Users, Star } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Services', price: '$1,500/month', description: 'Comprehensive AI solutions including machine learning and automation' },
        { name: 'AI Marketing', price: '$199/month', description: 'AI-powered marketing automation and optimization' },
        { name: 'AI Automation', price: '$399/month', description: 'Intelligent process automation and workflow optimization' },
        { name: 'AI Healthcare', price: '$1,999/month', description: 'Medical AI solutions and healthcare automation' },
        { name: 'AI Fintech', price: '$1,499/month', description: 'Financial AI applications and trading algorithms' },
        { name: 'AI Content Generation', price: '$199/month', description: 'AI-powered content creation and optimization' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'IT Infrastructure', price: '$999/month', description: 'Enterprise-grade IT infrastructure and management' },
        { name: 'Cybersecurity', price: '$799/month', description: 'Advanced security solutions and threat protection' },
        { name: 'Cloud Services', price: '$599/month', description: 'Cloud migration, management, and optimization' },
        { name: 'DevOps & CI/CD', price: '$299/month', description: 'Development operations and continuous integration' },
        { name: 'Database Services', price: '$199/month', description: 'Database design, optimization, and management' },
        { name: 'Networking', price: '$399/month', description: 'Network infrastructure and optimization' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Micro SAAS Solutions', price: '$79/month', description: '50+ ready-to-use AI-powered applications' },
        { name: 'Business Apps', price: '$149/month', description: 'Custom business applications and productivity tools' },
        { name: 'Marketing Tools', price: '$99/month', description: 'AI-powered marketing and analytics tools' },
        { name: 'Developer Tools', price: '$199/month', description: 'AI-enhanced development and productivity tools' },
        { name: 'Analytics Tools', price: '$149/month', description: 'Advanced analytics and reporting solutions' },
        { name: 'Productivity Tools', price: '$79/month', description: 'AI-powered productivity and efficiency tools' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Quantum Computing', price: 'Custom', description: 'Next-generation quantum computing solutions' },
        { name: 'Autonomous Systems', price: '$2,499/month', description: 'Self-managing systems and robotics' },
        { name: 'Blockchain & Web3', price: '$699/month', description: 'Decentralized solutions and smart contracts' },
        { name: 'IoT & Edge Computing', price: '$499/month', description: 'Connected devices and edge computing' },
        { name: 'Business Intelligence', price: '$399/month', description: 'Data-driven insights and predictive analytics' },
        { name: 'Robotics', price: 'Custom', description: 'Intelligent robotic solutions for various industries' }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    },
    {
      icon: Star,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Services - Zion Tech Group"
        description="Comprehensive AI and IT services including machine learning, automation, cloud infrastructure, and specialized solutions. Starting at $149/month."
        keywords={['ai services', 'it services', 'machine learning', 'automation', 'cloud services', 'cybersecurity', 'micro saas', 'specialized solutions']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Comprehensive AI and IT solutions for modern businesses
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            From AI-powered automation to enterprise IT infrastructure, we provide 
            cutting-edge solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$149</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI and IT services designed to meet your business needs
            </p>
          </div>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-800/30 rounded-xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <a
                          href="/contact"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through proven expertise, cutting-edge technology, and unwavering commitment to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert team help you choose the perfect services to accelerate your growth and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;