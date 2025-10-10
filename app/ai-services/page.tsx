'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration'
      ],
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ]
    },
    {
      id: 2,
      name: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation',
      icon: Zap,
      features: [
        'Process Automation',
        'Task Scheduling',
        'Error Handling',
        'Performance Monitoring'
      ],
      category: 'AI Automation & Workflow',
      popular: true,
      rating: 4.9,
      users: '5,200+',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      name: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security systems',
      icon: Shield,
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Automated Response',
        'Security Monitoring'
      ],
      category: 'Security',
      popular: false,
      rating: 4.7,
      users: '1,900+',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 4,
      name: 'AI Customer Support',
      description: '24/7 intelligent customer support with natural language processing',
      icon: Users,
      features: [
        'Chatbot Integration',
        'Sentiment Analysis',
        'Multi-language Support',
        'Escalation Management'
      ],
      category: 'Customer Service',
      popular: true,
      rating: 4.6,
      users: '3,500+',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 5,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      icon: FileText,
      features: [
        'OCR Processing',
        'Data Extraction',
        'Document Classification',
        'Automated Workflows'
      ],
      category: 'Document Processing',
      popular: false,
      rating: 4.7,
      users: '1,500+',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions designed for enterprise-grade performance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-gray-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Rating and Users */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.users} users
                  </div>
                </div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="mb-4">
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;