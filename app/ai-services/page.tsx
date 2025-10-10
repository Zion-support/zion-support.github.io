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
      icon: <Target className="w-8 h-8" />,
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
      users: '1,500+',
      color: 'from-red-500 to-orange-600'
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating} ({service.users} users)
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{service.category}</span>
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

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