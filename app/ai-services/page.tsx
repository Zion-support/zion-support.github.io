'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Brain, Cpu, MessageCircle, Monitor, Settings, BarChart, Users, FileText, Shield, Heart } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps',
      icon: Brain,
      category: 'strategy',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and planning',
        'Implementation strategy'
      ],
      price: 'Custom'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs',
      icon: Cpu,
      category: 'ml',
      features: [
        'Custom ML model development',
        'Data preprocessing and cleaning',
        'Model training and optimization',
        'Performance monitoring'
      ],
      price: 'From $5,000'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding',
      icon: MessageCircle,
      category: 'nlp',
      features: [
        'Text analysis and sentiment',
        'Chatbot development',
        'Language translation',
        'Document processing'
      ],
      price: 'From $3,000'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for various business applications',
      icon: Monitor,
      category: 'vision',
      features: [
        'Image recognition',
        'Object detection',
        'Video analysis',
        'Quality inspection'
      ],
      price: 'From $4,000'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline your business operations',
      icon: Settings,
      category: 'automation',
      features: [
        'Workflow automation',
        'Document processing',
        'Data entry automation',
        'Process optimization'
      ],
      price: 'From $2,500'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by AI',
      icon: BarChart,
      category: 'analytics',
      features: [
        'Predictive analytics',
        'Real-time insights',
        'Custom dashboards',
        'Data visualization'
      ],
      price: 'From $3,500'
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer service solutions with AI-powered chatbots',
      icon: Users,
      category: 'support',
      features: [
        '24/7 chatbot support',
        'Multi-language support',
        'CRM integration',
        'Performance analytics'
      ],
      price: 'From $1,500'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing, documentation, and more',
      icon: FileText,
      category: 'content',
      features: [
        'Content writing',
        'Social media posts',
        'Email campaigns',
        'Document generation'
      ],
      price: 'From $2,000'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions to protect your digital assets',
      icon: Shield,
      category: 'security',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Security monitoring',
        'Incident response'
      ],
      price: 'From $4,500'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare and medical applications',
      icon: Heart,
      category: 'healthcare',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient monitoring',
        'Drug discovery'
      ],
      price: 'From $6,000'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'nlp', name: 'NLP' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'support', name: 'Support' },
    { id: 'content', name: 'Content' },
    { id: 'security', name: 'Security' },
    { id: 'healthcare', name: 'Healthcare' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            AI <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business operations 
            and drive innovation across all departments.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <a
                    href="/contact"
                    className="w-full cyber-button py-3 px-6 text-center font-semibold inline-flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Process Section */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our AI Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">
                  We analyze your business needs and identify AI opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                <p className="text-gray-300">
                  We design the AI solution architecture and user experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Development</h3>
                <p className="text-gray-300">
                  We build and train the AI models using agile methodologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment</h3>
                <p className="text-gray-300">
                  We deploy the solution and provide ongoing support
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiServicesPage;