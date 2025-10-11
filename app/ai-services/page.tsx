import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Code, BarChart, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a roadmap for AI implementation.',
      category: 'consulting',
      icon: Brain,
      features: ['AI strategy development', 'Technology assessment', 'Implementation planning', 'ROI analysis'],
      price: 'Starting at $299/month'
    },
    {
      id: 2,
      title: 'Machine Learning Development',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      category: 'development',
      icon: Code,
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Performance optimization'],
      price: 'Starting at $799/month'
    },
    {
      id: 3,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI infrastructure and deployment services on leading cloud platforms.',
      category: 'infrastructure',
      icon: Cloud,
      features: ['Cloud architecture design', 'Auto-scaling solutions', 'Security implementation', '24/7 monitoring'],
      price: 'Starting at $499/month'
    },
    {
      id: 4,
      title: 'Data Analytics & Insights',
      description: 'Advanced analytics and business intelligence solutions powered by AI.',
      category: 'analytics',
      icon: BarChart,
      features: ['Predictive analytics', 'Real-time dashboards', 'Data visualization', 'Business intelligence'],
      price: 'Starting at $399/month'
    },
    {
      id: 5,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
      category: 'automation',
      icon: Users,
      features: ['Process automation', 'Workflow optimization', 'Task automation', 'Integration services'],
      price: 'Starting at $599/month'
    },
    {
      id: 6,
      title: 'AI Security Solutions',
      description: 'Advanced security solutions powered by AI to protect your business and data.',
      category: 'security',
      icon: Shield,
      features: ['Threat detection', 'Fraud prevention', 'Security monitoring', 'Compliance management'],
      price: 'Starting at $699/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'development', name: 'Development' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'automation', name: 'Automation' },
    { id: 'security', name: 'Security' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, cloud solutions, data analytics, automation, and security. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, cloud AI, data analytics, AI automation, AI security" />
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
                Comprehensive AI solutions to transform your business. From consulting to implementation, we provide end-to-end AI services.
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
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
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
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4 text-cyan-400">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;