'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, CheckCircle, ArrowRight, Star, Clock, Globe, Database, Users, Settings, Cpu, Sparkles, Lock, Cloud, Code, BarChart3, MessageSquare as ChatIcon, Target as Aim, FileText as Document, Search as SearchIcon, Phone as PhoneIcon, Mail } from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
  category: string;
  benefits: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const AIServicesPage: React.FC = () => {
  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI algorithms and machine learning models.',
      features: [
        'Real-time data analysis and visualization',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Custom AI model training',
        'Natural language query interface',
        'Multi-source data integration'
      ],
      price: '$2,500/month',
      popular: true,
      category: 'Analytics',
      benefits: ['Increase decision speed by 70%', 'Reduce manual analysis time by 80%', 'Improve forecast accuracy by 60%'],
      marketPrice: '$3,000-5,000/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Support Automation',
      description: 'Deploy intelligent chatbots and virtual assistants to handle customer inquiries 24/7.',
      features: [
        'Multi-language chatbot deployment',
        'Sentiment analysis and response optimization',
        'Human handoff capabilities',
        'Integration with CRM systems',
        'Voice and text support',
        'Performance analytics dashboard'
      ],
      price: '$1,800/month',
      popular: true,
      category: 'Customer Service',
      benefits: ['Reduce support costs by 50%', 'Improve response time by 90%', 'Increase customer satisfaction by 40%'],
      marketPrice: '$2,500-4,000/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '3',
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Implement advanced image recognition and computer vision for quality control, security, and automation.',
      features: [
        'Object detection and classification',
        'Facial recognition systems',
        'Quality control automation',
        'Real-time video analysis',
        'Custom model training',
        'API integration capabilities'
      ],
      price: '$3,200/month',
      popular: false,
      category: 'Computer Vision',
      benefits: ['Automate quality control processes', 'Reduce human error by 95%', 'Enable 24/7 monitoring'],
      marketPrice: '$4,000-7,000/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '4',
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent workflow automation and RPA integration.',
      features: [
        'Workflow design and optimization',
        'RPA bot development and deployment',
        'Document processing automation',
        'Email and communication automation',
        'Integration with existing systems',
        'Performance monitoring and analytics'
      ],
      price: '$2,200/month',
      popular: true,
      category: 'Automation',
      benefits: ['Reduce manual work by 75%', 'Improve process accuracy by 90%', 'Scale operations without additional staff'],
      marketPrice: '$3,000-5,500/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '5',
      icon: BarChart,
      title: 'AI-Powered Financial Analytics',
      description: 'Advanced financial modeling, risk assessment, and investment optimization using AI algorithms.',
      features: [
        'Risk assessment and modeling',
        'Investment portfolio optimization',
        'Fraud detection and prevention',
        'Market trend analysis',
        'Automated trading signals',
        'Compliance monitoring'
      ],
      price: '$4,500/month',
      popular: false,
      category: 'Finance',
      benefits: ['Improve investment returns by 25%', 'Reduce risk exposure by 40%', 'Automate compliance reporting'],
      marketPrice: '$6,000-10,000/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '6',
      icon: Box,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale using advanced natural language processing and generation models.',
      features: [
        'Blog posts and articles generation',
        'Social media content creation',
        'Email marketing automation',
        'Product descriptions and copywriting',
        'Multi-language content support',
        'Brand voice customization'
      ],
      price: '$1,500/month',
      popular: true,
      category: 'Content',
      benefits: ['Increase content output by 300%', 'Reduce content creation costs by 60%', 'Maintain consistent brand voice'],
      marketPrice: '$2,000-3,500/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '7',
      icon: Mic,
      title: 'AI Voice & Speech Solutions',
      description: 'Implement voice recognition, speech-to-text, and text-to-speech solutions for enhanced user experience.',
      features: [
        'Voice command recognition',
        'Speech-to-text transcription',
        'Text-to-speech synthesis',
        'Voice biometric authentication',
        'Multi-language support',
        'Real-time processing'
      ],
      price: '$2,800/month',
      popular: false,
      category: 'Voice',
      benefits: ['Improve accessibility by 80%', 'Enable hands-free operations', 'Enhance user experience'],
      marketPrice: '$3,500-6,000/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: '8',
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms and behavioral analysis.',
      features: [
        'Real-time threat detection',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Security analytics dashboard',
        'Compliance reporting'
      ],
      price: '$3,500/month',
      popular: true,
      category: 'Security',
      benefits: ['Reduce security incidents by 85%', 'Improve response time by 70%', 'Ensure compliance standards'],
      marketPrice: '$4,500-8,000/month',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Service', 'Computer Vision', 'Automation', 'Finance', 'Content', 'Voice', 'Security'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '500+', label: 'AI Models Deployed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.7%', label: 'Accuracy Rate' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '24/7', label: 'AI Monitoring' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2.5x', label: 'Performance Boost' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, automation, computer vision, and more. Expert AI solutions with competitive pricing." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, automation, computer vision, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From automation to analytics, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border ${
                service.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'
              }`}>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">Save up to 30% with our competitive pricing</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-cyan-300">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Get Started
                  </Link>
                  <div className="text-center">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center justify-center"
                    >
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      {service.contactInfo.phone}
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center justify-center mt-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {service.contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our AI experts to discuss your requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Contact Information:</p>
              <p className="text-cyan-400">Phone: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p className="text-cyan-400">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;