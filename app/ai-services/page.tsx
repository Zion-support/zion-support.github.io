import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-recruitment-assistant',
      title: 'AI Recruitment Assistant',
      description: 'Transform your hiring process with AI-powered resume screening, candidate matching, and bias detection.',
      icon: Users,
      features: ['Resume Screening', 'Candidate Matching', 'Bias Detection'],
      price: 'Starting at $199/month',
      featured: true
    },
    {
      id: 'ai-predictive-modeling',
      title: 'AI Predictive Modeling',
      description: 'Build accurate predictive models with advanced ML algorithms and real-time data processing.',
      icon: BarChart3,
      features: ['50+ ML Algorithms', 'Real-time Processing', 'Model Explainability'],
      price: 'Starting at $299/month',
      featured: true
    },
    {
      id: 'ai-sentiment-analyzer',
      title: 'AI Sentiment Analyzer',
      description: 'Real-time sentiment analysis across 50+ languages and 20+ platforms with emotion detection.',
      icon: Brain,
      features: ['Real-time Analysis', 'Emotion Detection', 'Multi-Platform'],
      price: 'Starting at $99/month',
      featured: true
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      description: 'Advanced analytics powered by artificial intelligence for data-driven insights.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'],
      price: 'Starting at $299/month',
      featured: false
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Automated content creation using cutting-edge AI technology.',
      icon: Code,
      features: ['Blog Posts', 'Social Media', 'Marketing Copy'],
      price: 'Starting at $199/month',
      featured: false
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: 'Intelligent chatbots and automated customer service solutions.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Smart Routing'],
      price: 'Starting at $399/month',
      featured: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment'],
      price: 'Starting at $599/month',
      featured: false
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable business intelligence.',
      icon: Database,
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis'],
      price: 'Starting at $349/month',
      featured: false
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Processing',
      description: 'Automated document analysis and processing solutions.',
      icon: Mail,
      features: ['OCR Technology', 'Data Extraction', 'Automated Workflows'],
      price: 'Starting at $249/month',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including analytics, content generation, customer support, cybersecurity, and data processing solutions."
        keywords="AI services, artificial intelligence, machine learning, analytics, automation, cybersecurity, data processing"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                      <Clock className="w-4 h-4 mr-1" />
                      <span>24/7 Support</span>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All AI Services</h2>
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
                      <Clock className="w-4 h-4 mr-1" />
                      <span>24/7 Support</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Start Your AI Journey
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

export default AIServicesPage;