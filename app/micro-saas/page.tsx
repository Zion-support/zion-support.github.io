import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Music, Lock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'ai-smart-contract-auditor',
      title: 'AI Smart Contract Auditor',
      description: 'Advanced AI-powered smart contract auditing with 99.7% vulnerability detection accuracy.',
      icon: Shield,
      features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking'],
      price: 'From $199/month',
      featured: true
    },
    {
      id: 'ai-music-composition',
      title: 'AI Music Composition',
      description: 'Create professional-quality music with AI-powered composition tools and voice-to-music conversion.',
      icon: Music,
      features: ['AI Composition', 'Voice-to-Music', 'Professional Mixing'],
      price: 'From $29/month',
      featured: true
    },
    {
      id: 'ai-password-manager',
      title: 'AI Password Manager',
      description: 'Secure your digital life with AI-powered password management and biometric authentication.',
      icon: Lock,
      features: ['AI Generation', 'Breach Detection', 'Biometric Auth'],
      price: 'From $4.99/month',
      featured: true
    },
    {
      id: 'ai-sentiment-analyzer',
      title: 'AI Sentiment Analyzer',
      description: 'Real-time sentiment analysis across 50+ languages and 20+ platforms with emotion detection.',
      icon: BarChart3,
      features: ['Real-time Analysis', 'Emotion Detection', 'Multi-Platform'],
      price: 'From $99/month',
      featured: true
    },
    {
      id: 'project-management-tool',
      title: 'Project Management Tool',
      description: 'Streamline your project workflows with our intelligent project management solution.',
      icon: Settings,
      features: ['Task Tracking', 'Team Collaboration', 'Progress Analytics'],
      price: '$29/month',
      featured: false
    },
    {
      id: 'customer-relationship-manager',
      title: 'Customer Relationship Manager',
      description: 'Manage your customer relationships with our AI-powered CRM system.',
      icon: Users,
      features: ['Contact Management', 'Sales Pipeline', 'Customer Analytics'],
      price: '$39/month',
      featured: false
    },
    {
      id: 'inventory-management-system',
      title: 'Inventory Management System',
      description: 'Optimize your inventory with smart tracking and automated reordering.',
      icon: Database,
      features: ['Stock Tracking', 'Automated Reordering', 'Analytics Dashboard'],
      price: '$49/month',
      featured: false
    },
    {
      id: 'financial-reporting-tool',
      title: 'Financial Reporting Tool',
      description: 'Generate comprehensive financial reports and insights automatically.',
      icon: BarChart3,
      features: ['Automated Reports', 'Financial Analytics', 'Budget Tracking'],
      price: '$59/month',
      featured: false
    },
    {
      id: 'employee-time-tracker',
      title: 'Employee Time Tracker',
      description: 'Track employee time and productivity with our advanced time management system.',
      icon: Clock,
      features: ['Time Tracking', 'Productivity Analytics', 'Payroll Integration'],
      price: '$19/month',
      featured: false
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'Schedule and manage your social media content across all platforms.',
      icon: Mail,
      features: ['Multi-Platform', 'Content Calendar', 'Analytics'],
      price: '$25/month',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Custom micro software-as-a-service solutions designed to streamline your business operations and boost productivity."
        keywords="micro SAAS, software as a service, business tools, productivity, automation, project management, CRM"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Custom micro software-as-a-service solutions designed to streamline your business operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Micro SAAS Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.filter(service => service.featured).map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6 relative">
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-blue-400" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-400">{service.price}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Cloud className="w-4 h-4 mr-1" />
                      <span>Cloud Hosted</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Micro SAAS Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-blue-400" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-400">{service.price}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Cloud className="w-4 h-4 mr-1" />
                      <span>Cloud Hosted</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our micro SAAS solutions can help you automate processes and increase efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Start Your SAAS Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;