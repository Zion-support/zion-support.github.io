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
      name: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform accelerating pharmaceutical research by 10x',
      icon: Brain,
      features: [
        'Molecular Structure Analysis',
        'Drug Interaction Prediction',
        'Clinical Trial Optimization',
        'Regulatory Compliance Automation',
        'Side Effect Prediction',
        'Drug Repurposing Analysis',
        'Biomarker Discovery'
      ],
      category: 'Healthcare',
      popular: true,
      rating: 4.9,
      users: '500+',
      price: 'Starting at $50,000/month',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '90% faster drug discovery process',
        '60% reduction in clinical trial costs',
        'Real-time molecular analysis',
        'Predictive drug efficacy modeling'
      ]
    },
    {
      id: 2,
      name: 'AI Climate Solutions Pro',
      description: 'Advanced climate modeling and environmental impact analysis using cutting-edge AI',
      icon: Globe,
      features: [
        'Climate Change Modeling',
        'Carbon Footprint Analysis',
        'Sustainability Planning',
        'Environmental Risk Assessment',
        'Renewable Energy Optimization',
        'Weather Pattern Prediction',
        'Ecosystem Monitoring'
      ],
      category: 'Environment',
      popular: true,
      rating: 4.8,
      users: '300+',
      price: 'Starting at $25,000/month',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '95% accuracy in climate predictions',
        '40% reduction in carbon emissions',
        'Real-time environmental monitoring',
        'Automated sustainability reporting'
      ]
    },
    {
      id: 3,
      name: 'AI Space Technology Pro',
      description: 'Space exploration and satellite data analysis powered by advanced AI algorithms',
      icon: Rocket,
      features: [
        'Satellite Data Analysis',
        'Space Mission Planning',
        'Orbital Mechanics Calculation',
        'Space Weather Prediction',
        'Asteroid Detection',
        'Space Debris Tracking',
        'Planetary Surface Analysis'
      ],
      category: 'Space',
      popular: false,
      rating: 4.7,
      users: '150+',
      price: 'Starting at $75,000/month',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '99.9% accuracy in orbital predictions',
        'Real-time space weather monitoring',
        'Automated mission planning',
        'Advanced satellite constellation management'
      ]
    },
    {
      id: 4,
      name: 'AI Financial Crime Detection Pro',
      description: 'Advanced fraud detection and financial crime prevention system with real-time monitoring',
      icon: Shield,
      features: [
        'Real-time Fraud Detection',
        'Transaction Pattern Analysis',
        'Risk Assessment Scoring',
        'Compliance Reporting',
        'Money Laundering Detection',
        'Identity Verification',
        'Behavioral Analytics'
      ],
      category: 'Finance',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      price: 'Starting at $30,000/month',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.5% fraud detection accuracy',
        'Real-time transaction monitoring',
        'Automated compliance reporting',
        'Predictive risk modeling'
      ]
    },
    {
      id: 5,
      name: 'AI Supply Chain Optimization Pro',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: Target,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Supplier Risk Assessment',
        'Route Optimization',
        'Quality Control Automation',
        'Cost Reduction Analysis',
        'Sustainability Tracking'
      ],
      category: 'Logistics',
      popular: true,
      rating: 4.8,
      users: '800+',
      price: 'Starting at $35,000/month',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        '30% reduction in supply chain costs',
        '95% demand forecasting accuracy',
        'Real-time supply chain monitoring',
        'Automated optimization recommendations'
      ]
    },
    {
      id: 6,
      name: 'AI Energy Grid Management Pro',
      description: 'Smart energy grid management with AI-powered optimization and monitoring',
      icon: Zap,
      features: [
        'Grid Load Balancing',
        'Energy Demand Prediction',
        'Renewable Energy Integration',
        'Fault Detection & Diagnosis',
        'Power Quality Monitoring',
        'Energy Trading Optimization',
        'Grid Stability Analysis'
      ],
      category: 'Energy',
      popular: false,
      rating: 4.7,
      users: '200+',
      price: 'Starting at $60,000/month',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        '25% improvement in grid efficiency',
        'Real-time energy optimization',
        'Predictive maintenance alerts',
        'Automated load balancing'
      ]
    },
    {
      id: 7,
      name: 'AI Agricultural Intelligence Pro',
      description: 'Precision agriculture with AI-powered crop monitoring and yield optimization',
      icon: Sprout,
      features: [
        'Crop Health Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Pest Detection',
        'Irrigation Optimization',
        'Weather Integration',
        'Harvest Planning'
      ],
      category: 'Agriculture',
      popular: true,
      rating: 4.8,
      users: '400+',
      price: 'Starting at $20,000/month',
      color: 'from-green-500 to-teal-600',
      capabilities: [
        '35% increase in crop yields',
        'Real-time crop monitoring',
        'Predictive pest management',
        'Automated irrigation control'
      ]
    },
    {
      id: 8,
      name: 'AI Legal Research Pro',
      description: 'Advanced legal research and case analysis powered by natural language processing',
      icon: FileText,
      features: [
        'Case Law Analysis',
        'Legal Document Review',
        'Contract Analysis',
        'Precedent Research',
        'Legal Writing Assistance',
        'Compliance Checking',
        'Risk Assessment'
      ],
      category: 'Legal',
      popular: false,
      rating: 4.6,
      users: '300+',
      price: 'Starting at $15,000/month',
      color: 'from-gray-500 to-slate-600',
      capabilities: [
        '80% faster legal research',
        'Automated document analysis',
        'Real-time case law updates',
        'Predictive legal outcomes'
      ]
    }
  ];

  const categories = ['All', 'Healthcare', 'Environment', 'Space', 'Finance', 'Logistics', 'Energy', 'Agriculture', 'Legal'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  {service.users} users
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="text-2xl font-bold text-cyan-400 mb-4">
                {service.price}
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-gray-300">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities?.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <a
                  href={`https://ziontechgroup.com/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="w-full border border-purple-400 text-purple-400 py-2 px-4 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all block text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of companies already using our AI solutions
          </p>
          <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;