import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  MessageSquare, 
  Code, 
  Eye, 
  Wifi, 
  Shield, 
  Database, 
  Cloud, 
  Cpu, 
  BarChart3, 
  Settings, 
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Globe,
  Lock,
  Smartphone
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: '5g', name: '5G Solutions', icon: Wifi },
    { id: 'it', name: 'IT Services', icon: Cpu },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const services = [
    {
      id: 'ai-analytics',
      category: 'ai',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting. Transform your data into actionable intelligence.',
      price: 'Starting at $299/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration', 'Machine Learning Models'],
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 'ai-chatbot',
      category: 'ai',
      icon: MessageSquare,
      title: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI that understands context, handles complex queries, and provides 24/7 customer support with human-like interactions.',
      price: 'Starting at $199/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Voice Recognition'],
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      id: 'ai-code',
      category: 'ai',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Revolutionary AI-powered coding assistant that writes, reviews, and optimizes code. Supports 50+ programming languages with intelligent suggestions.',
      price: 'Starting at $149/month',
      features: ['50+ Languages', 'Code Review', 'Auto-completion', 'Security Scanning', 'Documentation Generation'],
      rating: 4.9,
      reviews: 203,
      popular: true
    },
    {
      id: 'ai-vision',
      category: 'ai',
      icon: Eye,
      title: 'AI Computer Vision Suite',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics. Perfect for manufacturing, retail, and security.',
      price: 'Starting at $399/month',
      features: ['Object Detection', 'Image Classification', 'Real-time Processing', 'Custom Models', 'Video Analytics'],
      rating: 4.7,
      reviews: 156,
      popular: false
    },
    {
      id: '5g-optimization',
      category: '5g',
      icon: Wifi,
      title: '5G Network Optimization',
      description: 'Complete 5G infrastructure solutions with ultra-low latency, massive connectivity, and edge computing capabilities for next-gen applications.',
      price: 'Starting at $2,999/month',
      features: ['Ultra-low Latency', 'Edge Computing', 'IoT Integration', 'Network Slicing', 'Massive MIMO'],
      rating: 4.8,
      reviews: 45,
      popular: true
    },
    {
      id: '5g-iot',
      category: '5g',
      icon: Globe,
      title: '5G IoT Solutions',
      description: 'Comprehensive IoT solutions powered by 5G technology, enabling massive device connectivity and real-time data processing.',
      price: 'Starting at $1,499/month',
      features: ['Device Management', 'Real-time Monitoring', 'Data Analytics', 'Edge Processing', 'Security Protocols'],
      rating: 4.6,
      reviews: 78,
      popular: false
    },
    {
      id: 'security-suite',
      category: 'security',
      icon: Shield,
      title: 'Advanced Security Suite',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection, zero-trust architecture, and 24/7 monitoring for enterprise protection.',
      price: 'Starting at $499/month',
      features: ['AI Threat Detection', 'Zero Trust', '24/7 Monitoring', 'Compliance Tools', 'Incident Response'],
      rating: 4.9,
      reviews: 134,
      popular: true
    },
    {
      id: 'cloud-infrastructure',
      category: 'it',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with hybrid and multi-cloud architectures, ensuring high availability and performance for your applications.',
      price: 'Starting at $799/month',
      features: ['Multi-cloud Support', 'Auto-scaling', 'Disaster Recovery', 'Load Balancing', 'Monitoring'],
      rating: 4.7,
      reviews: 92,
      popular: false
    },
    {
      id: 'data-analytics',
      category: 'it',
      icon: Database,
      title: 'Data Analytics Platform',
      description: 'Powerful data analytics platform that processes, analyzes, and visualizes your data to drive informed business decisions.',
      price: 'Starting at $399/month',
      features: ['Data Processing', 'Visualization', 'Real-time Analytics', 'Custom Reports', 'Data Integration'],
      rating: 4.8,
      reviews: 167,
      popular: true
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, 5G, and IT services designed to accelerate your business growth. Choose from our premium service packages." />
        <meta name="keywords" content="AI services, 5G solutions, IT services, cybersecurity, cloud infrastructure, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8">
                <span className="text-blue-300 text-sm font-medium">🚀 Our Premium Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Technology Solutions
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Comprehensive AI, 5G, and IT services designed to accelerate your business growth. 
                Choose from our premium service packages tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                        <div className="text-sm text-gray-400">Per month • Cancel anytime</div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-400'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-300 ml-2">
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts can create a tailored solution that perfectly fits your business requirements. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Our Experts
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;