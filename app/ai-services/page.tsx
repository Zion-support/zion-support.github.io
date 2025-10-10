'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Zap, Shield, Globe, Database, Users, Settings, MessageSquare, Eye, Mic, FileText, Search, Phone, Mail, MapPin, Star, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  link: string;
  benefits: string[];
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const aiServices: AIService[] = [
    {
      id: '1',
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI algorithms and machine learning models.',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Custom AI model development',
        'Natural language query interface',
        'Automated report generation',
        'Multi-source data integration'
      ],
      price: '$2,500/month',
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      benefits: ['Increase decision speed by 60%', 'Reduce manual analysis time by 80%', 'Improve forecast accuracy by 45%']
    },
    {
      id: '2',
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like interactions.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Human handoff capabilities',
        'Performance analytics'
      ],
      price: '$1,800/month',
      category: 'Support',
      popular: false,
      link: 'https://ziontechgroup.com/ai-customer-support',
      benefits: ['Reduce support costs by 50%', 'Improve response time by 90%', 'Increase customer satisfaction by 35%']
    },
    {
      id: '3',
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for quality control, security, and automated visual inspection.',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Medical image analysis',
        'Real-time video processing',
        'Custom model training'
      ],
      price: '$3,200/month',
      category: 'Vision',
      popular: true,
      link: 'https://ziontechgroup.com/computer-vision',
      benefits: ['Automate visual inspections', 'Reduce human error by 95%', 'Process images 10x faster']
    },
    {
      id: '4',
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and technical documentation.',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Performance tracking'
      ],
      price: '$1,200/month',
      category: 'Content',
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-generation',
      benefits: ['Increase content output by 300%', 'Reduce content costs by 70%', 'Improve SEO rankings by 40%']
    },
    {
      id: '5',
      icon: <Mic className="w-8 h-8 text-pink-500" />,
      title: 'Speech Recognition & Processing',
      description: 'Convert speech to text, analyze voice patterns, and create voice-controlled applications.',
      features: [
        'Real-time speech-to-text',
        'Voice command processing',
        'Speaker identification',
        'Emotion detection',
        'Multi-language support',
        'Custom voice models'
      ],
      price: '$2,000/month',
      category: 'Speech',
      popular: false,
      link: 'https://ziontechgroup.com/speech-recognition',
      benefits: ['Enable hands-free operations', 'Improve accessibility', 'Reduce transcription costs by 80%']
    },
    {
      id: '6',
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Search & Discovery',
      description: 'Intelligent search engines that understand context and provide relevant results with semantic understanding.',
      features: [
        'Semantic search capabilities',
        'Contextual understanding',
        'Personalized results',
        'Multi-modal search',
        'Real-time indexing',
        'Advanced filtering'
      ],
      price: '$1,500/month',
      category: 'Search',
      popular: false,
      link: 'https://ziontechgroup.com/ai-search',
      benefits: ['Improve search relevance by 60%', 'Reduce search time by 50%', 'Increase user engagement by 45%']
    },
    {
      id: '7',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning to identify and stop cyber attacks.',
      features: [
        'Threat detection and analysis',
        'Anomaly detection',
        'Automated incident response',
        'Behavioral analysis',
        'Real-time monitoring',
        'Predictive security'
      ],
      price: '$4,000/month',
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      benefits: ['Detect threats 5x faster', 'Reduce false positives by 80%', 'Prevent 99% of known attacks']
    },
    {
      id: '8',
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'AI HR & Talent Management',
      description: 'Intelligent recruitment, employee analytics, and workforce optimization using AI algorithms.',
      features: [
        'Resume screening and matching',
        'Candidate assessment',
        'Employee performance analysis',
        'Predictive attrition modeling',
        'Skills gap analysis',
        'Diversity and inclusion metrics'
      ],
      price: '$2,800/month',
      category: 'HR',
      popular: false,
      link: 'https://ziontechgroup.com/ai-hr',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality by 40%', 'Increase retention by 25%']
    },
    {
      id: '9',
      icon: <BarChart className="w-8 h-8 text-emerald-500" />,
      title: 'AI Financial Analysis',
      description: 'Automated financial modeling, risk assessment, and investment analysis using machine learning.',
      features: [
        'Automated financial modeling',
        'Risk assessment and scoring',
        'Fraud detection',
        'Investment recommendations',
        'Market trend analysis',
        'Regulatory compliance'
      ],
      price: '$3,500/month',
      category: 'Finance',
      popular: true,
      link: 'https://ziontechgroup.com/ai-financial-analysis',
      benefits: ['Improve accuracy by 70%', 'Reduce analysis time by 85%', 'Increase ROI by 30%']
    },
    {
      id: '10',
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes using AI to optimize workflows and reduce manual work.',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Task prioritization',
        'Resource optimization',
        'Performance monitoring'
      ],
      price: '$2,200/month',
      category: 'Automation',
      popular: false,
      link: 'https://ziontechgroup.com/ai-automation',
      benefits: ['Reduce manual work by 75%', 'Increase efficiency by 60%', 'Lower operational costs by 40%']
    }
  ];

  const categories = ['All', 'Analytics', 'Support', 'Vision', 'Content', 'Speech', 'Search', 'Security', 'HR', 'Finance', 'Automation'];

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Monitoring' },
    { number: '50+', label: 'Industry Solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, automation, business intelligence" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
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
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                    category === selectedCategory
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full inline-block">
                      {service.category}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm text-gray-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-cyan-600 text-white px-4 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and discover how our solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;