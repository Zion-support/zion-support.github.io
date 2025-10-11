'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Shield, BarChart, Users, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'Analytics',
      icon: BarChart,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      price: 'Starting at $999/month'
    },
    {
      id: 2,
      title: 'Intelligent Automation',
      description: 'Automate complex business processes with AI-powered workflow solutions.',
      category: 'Automation',
      icon: Zap,
      features: [
        'Process automation',
        'Document processing',
        'Email automation',
        'Task scheduling'
      ],
      price: 'Starting at $799/month'
    },
    {
      id: 3,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-driven cybersecurity and threat detection.',
      category: 'Security',
      icon: Shield,
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Security monitoring'
      ],
      price: 'Starting at $1,299/month'
    },
    {
      id: 4,
      title: 'Customer Intelligence',
      description: 'Understand your customers better with AI-powered customer analytics and insights.',
      category: 'Customer',
      icon: Users,
      features: [
        'Customer segmentation',
        'Behavior analysis',
        'Churn prediction',
        'Personalization'
      ],
      price: 'Starting at $699/month'
    },
    {
      id: 5,
      title: 'AI Chatbots',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support and assistance.',
      category: 'Support',
      icon: Brain,
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Integration capabilities',
        'Analytics and reporting'
      ],
      price: 'Starting at $499/month'
    },
    {
      id: 6,
      title: 'AI Infrastructure',
      description: 'Build and deploy AI models at scale with our comprehensive infrastructure solutions.',
      category: 'Infrastructure',
      icon: Settings,
      features: [
        'Model deployment',
        'Scalable infrastructure',
        'Monitoring and logging',
        'Performance optimization'
      ],
      price: 'Starting at $1,999/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Security', name: 'Security' },
    { id: 'Customer', name: 'Customer' },
    { id: 'Support', name: 'Support' },
    { id: 'Infrastructure', name: 'Infrastructure' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, security, and customer intelligence. Transform your business with our cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, automation, AI security, chatbots" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI services designed to transform your business operations and drive innovation across all departments.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiServicesPage;