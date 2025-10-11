'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Code, BarChart, Search, Filter } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      category: 'development',
      icon: Code,
      features: ['Machine Learning Models', 'Deep Learning Solutions', 'Custom AI Algorithms'],
      price: 'Starting at $799/month'
    },
    {
      id: 2,
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence',
      category: 'analytics',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization'],
      price: 'Starting at $499/month'
    },
    {
      id: 3,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI infrastructure and cloud-based services',
      category: 'cloud',
      icon: Cloud,
      features: ['Cloud AI Services', 'Auto-scaling', 'Global Deployment'],
      price: 'Starting at $599/month'
    },
    {
      id: 4,
      title: 'AI Automation',
      description: 'Intelligent automation for business processes',
      category: 'automation',
      icon: Brain,
      features: ['Process Automation', 'Workflow Optimization', 'Smart Decision Making'],
      price: 'Starting at $399/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'automation', name: 'Automation' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
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
              Discover our comprehensive range of AI services designed to transform your business and drive innovation.
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Contact our AI experts to discuss your specific needs and get a customized solution.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiServicesPage;