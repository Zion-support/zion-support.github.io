import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp, Cpu
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Data Mining'],
      price: 'Starting at $2,500',
      color: 'from-cyan-500 to-blue-500',
      category: 'AI Core'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: 'Natural Language Processing',
      description: 'Enable machines to understand and process human language',
      features: ['Chatbots', 'Text Analysis', 'Language Translation', 'Sentiment Analysis'],
      price: 'Starting at $1,800',
      color: 'from-green-500 to-emerald-500',
      category: 'AI Core'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: 'Computer Vision',
      description: 'Extract insights from images and videos using advanced AI',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      price: 'Starting at $3,000',
      color: 'from-purple-500 to-pink-500',
      category: 'AI Core'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      features: ['Workflow Automation', 'Document Processing', 'Email Automation', 'Task Scheduling'],
      price: 'Starting at $2,200',
      color: 'from-yellow-500 to-orange-500',
      category: 'Automation'
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: 'AI Analytics',
      description: 'Transform data into actionable insights with AI-powered analytics',
      features: ['Predictive Modeling', 'Real-time Analytics', 'Data Visualization', 'Business Intelligence'],
      price: 'Starting at $2,800',
      color: 'from-blue-500 to-indigo-500',
      category: 'Analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions',
      features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Security Monitoring'],
      price: 'Starting at $3,500',
      color: 'from-red-500 to-pink-500',
      category: 'Security'
    }
  ];

  const categories = ['All', 'AI Core', 'Automation', 'Analytics', 'Security'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredServices = activeTab === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Services",
          "description": "Advanced artificial intelligence solutions for businesses",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can transform your business and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;