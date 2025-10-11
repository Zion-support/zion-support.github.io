'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Brain, Zap, Shield, Database, Eye, Mic, Globe, Users, FileText, Workflow, ArrowRight, CheckCircle } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'automation', name: 'Automation' },
    { id: 'security', name: 'Security' },
    { id: 'content', name: 'Content' },
    { id: 'vision', name: 'Computer Vision' }
  ];

  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      category: 'analytics',
      icon: Database,
      description: 'Transform your data into actionable insights with advanced AI analytics solutions.',
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Machine Learning Models',
        'Data Visualization'
      ],
      benefits: [
        '50% faster decision making',
        '30% increase in accuracy',
        'Real-time insights'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      category: 'automation',
      icon: Workflow,
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: [
        'Workflow Automation',
        'Smart Scheduling',
        'Process Optimization',
        'Task Automation',
        'Integration Management'
      ],
      benefits: [
        '70% reduction in manual work',
        '40% increase in efficiency',
        '24/7 automated processes'
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      category: 'security',
      icon: Shield,
      description: 'Protect your business with AI-powered security solutions and threat detection.',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Security Monitoring',
        'Incident Response',
        'Risk Assessment'
      ],
      benefits: [
        '99.9% threat detection accuracy',
        '60% faster incident response',
        'Proactive security measures'
      ]
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      category: 'content',
      icon: FileText,
      description: 'Create high-quality content at scale with AI-powered content generation tools.',
      features: [
        'Text Generation',
        'Content Optimization',
        'SEO Enhancement',
        'Multi-language Support',
        'Brand Voice Consistency'
      ],
      benefits: [
        '80% faster content creation',
        'Consistent brand voice',
        'SEO-optimized content'
      ]
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision',
      category: 'vision',
      icon: Eye,
      description: 'Extract valuable insights from images and videos with advanced computer vision technology.',
      features: [
        'Image Recognition',
        'Object Detection',
        'Video Analysis',
        'Quality Inspection',
        'Facial Recognition'
      ],
      benefits: [
        '95% accuracy in image analysis',
        'Real-time processing',
        'Automated quality control'
      ]
    },
    {
      id: 'ai-voice-solutions',
      title: 'AI Voice Solutions',
      category: 'automation',
      icon: Mic,
      description: 'Implement voice recognition and speech processing solutions for your business.',
      features: [
        'Speech Recognition',
        'Voice Commands',
        'Language Translation',
        'Voice Analytics',
        'Call Center Automation'
      ],
      benefits: [
        '90% speech recognition accuracy',
        'Multi-language support',
        'Improved customer experience'
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'AI Services' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations 
              and drive innovation across all departments.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let our AI experts help you implement the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/case-studies"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
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