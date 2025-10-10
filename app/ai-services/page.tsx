'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Real-time learning'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$499/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection',
        'Facial recognition',
        'Quality control',
        'Security monitoring',
        'Real-time processing'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Reduced manual inspection',
        '24/7 monitoring'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and response generation',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Automated ticket routing',
        'Response generation',
        'Customer sentiment analysis',
        'Knowledge base integration',
        'Multi-channel support'
      ],
      benefits: [
        'Faster response times',
        'Improved customer satisfaction',
        'Reduced support costs',
        'Scalable operations'
      ],
      category: 'Customer Service',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated optimization',
      price: '$449/month',
      marketPrice: '$800-3000/month',
      features: [
        'Personalized campaigns',
        'A/B testing automation',
        'Customer segmentation',
        'Lead scoring',
        'ROI optimization'
      ],
      benefits: [
        'Higher conversion rates',
        'Reduced marketing costs',
        'Better customer targeting',
        'Automated optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Voice-enabled AI solutions for hands-free business operations and customer interactions',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Voice recognition',
        'Natural language understanding',
        'Multi-language support',
        'Integration with business systems',
        'Custom voice training'
      ],
      benefits: [
        'Hands-free business operations',
        'Improve accessibility',
        'Automate voice interactions',
        'Enhanced user experience'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced content generation platform with multi-format support and brand consistency',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Multi-format content generation',
        'Brand voice customization',
        'SEO-optimized content',
        'Content planning and scheduling',
        'Plagiarism detection',
        'Content performance analytics',
        'Integration with CMS platforms',
        'Custom content templates'
      ],
      benefits: [
        'Save 80% content creation time',
        'Maintain brand consistency',
        'Scale content production',
        'Reduce content costs'
      ],
      category: 'Content Generation',
      popular: true,
      icon: FileText
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Voice AI', name: 'Voice AI', count: services.filter(s => s.category === 'Voice AI').length },
    { id: 'Content Generation', name: 'Content Generation', count: services.filter(s => s.category === 'Content Generation').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, content generation, data analytics, computer vision, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
                Transform Your Business with Advanced AI Technology
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Our comprehensive AI services are designed to automate processes, enhance decision-making, 
                and drive growth across all aspects of your business.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card-enhanced hologram-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-green-400">
                        <Star className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                    <a
                      href={`/ai-services/${service.id}`}
                      className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact our AI experts today for a free consultation and discover how our solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiServicesPage;