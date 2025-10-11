import React from 'react';
import { CheckCircle, ArrowRight, Brain, BarChart3, Users, Settings, Lock, Globe, Zap, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Business Intelligence',
      description: 'Advanced AI analytics and business intelligence solutions for data-driven decision making.',
      features: ['Predictive Analytics', 'Data Visualization', 'Machine Learning Models', 'Real-time Insights'],
      pricing: 'Starting at $4,000',
      link: '/ai-business-intelligence',
      category: 'AI Analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'AI Customer Support',
      description: 'Intelligent customer service automation with natural language processing capabilities.',
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Human Handoff'],
      pricing: 'Starting at $2,500',
      link: '/ai-customer-support',
      category: 'Customer Service'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Financial Forecasting',
      description: 'AI-powered financial analysis and forecasting for better investment decisions.',
      features: ['Risk Assessment', 'Market Analysis', 'Investment Optimization', 'Compliance Reporting'],
      pricing: 'Starting at $6,000',
      link: '/ai-financial-forecasting',
      category: 'Financial AI'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced AI-powered threat detection and security monitoring systems.',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Response', 'Threat Intelligence'],
      pricing: 'Starting at $3,500',
      link: '/ai-cybersecurity-monitor',
      category: 'AI Security'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes using AI and robotic process automation.',
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Quality Control'],
      pricing: 'Starting at $5,000',
      link: '/ai-automation',
      category: 'Process Automation'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'AI Climate Solutions',
      description: 'AI-powered environmental monitoring and sustainability solutions.',
      features: ['Carbon Footprint Analysis', 'Energy Optimization', 'Environmental Monitoring', 'Sustainability Reporting'],
      pricing: 'Starting at $7,000',
      link: '/ai-climate-solutions-pro',
      category: 'Environmental AI'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'AI Content Generation',
      description: 'Advanced AI content creation tools for marketing, blogs, and social media.',
      features: ['Multi-language Support', 'Brand Voice Training', 'SEO Optimization', 'Content Templates'],
      pricing: 'Starting at $1,500',
      link: '/ai-content-generation-pro',
      category: 'Content AI'
    },
    {
      icon: <Star className="w-8 h-8 text-pink-400" />,
      title: 'AI Voice Solutions',
      description: 'Cutting-edge voice AI solutions including synthesis, recognition, and processing.',
      features: ['Voice Synthesis', 'Speech Recognition', 'Voice Cloning', 'Multi-language Support'],
      pricing: 'Starting at $3,000',
      link: '/ai-voice-solutions',
      category: 'Voice AI'
    }
  ];

  const categories = [
    { name: 'AI Analytics', services: aiServices.filter(s => s.category === 'AI Analytics') },
    { name: 'Customer Service', services: aiServices.filter(s => s.category === 'Customer Service') },
    { name: 'Financial AI', services: aiServices.filter(s => s.category === 'Financial AI') },
    { name: 'AI Security', services: aiServices.filter(s => s.category === 'AI Security') },
    { name: 'Process Automation', services: aiServices.filter(s => s.category === 'Process Automation') },
    { name: 'Environmental AI', services: aiServices.filter(s => s.category === 'Environmental AI') },
    { name: 'Content AI', services: aiServices.filter(s => s.category === 'Content AI') },
    { name: 'Voice AI', services: aiServices.filter(s => s.category === 'Voice AI') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, customer support, financial forecasting, cybersecurity, and process automation. Transform your business with cutting-edge AI." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, customer support AI, financial AI, cybersecurity AI" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services by Category */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {category.name === 'AI Analytics' && 'Data-driven insights and predictive analytics powered by AI'}
                {category.name === 'Customer Service' && 'Intelligent customer support and engagement solutions'}
                {category.name === 'Financial AI' && 'AI-powered financial analysis and forecasting tools'}
                {category.name === 'AI Security' && 'Advanced AI security monitoring and threat detection'}
                {category.name === 'Process Automation' && 'Intelligent automation of business processes'}
                {category.name === 'Environmental AI' && 'AI solutions for sustainability and environmental monitoring'}
                {category.name === 'Content AI' && 'AI-powered content creation and management tools'}
                {category.name === 'Voice AI' && 'Advanced voice synthesis and recognition solutions'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {category.services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Implement AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start AI Implementation
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;