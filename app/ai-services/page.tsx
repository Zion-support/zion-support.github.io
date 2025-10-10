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
  Search,
  Filter
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
      id: 'ai-content',
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
      icon: Brain
    },
    {
      id: 'ai-analytics',
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
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, drug discovery, and patient care optimization',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Medical image analysis',
        'Drug discovery algorithms',
        'Patient risk assessment',
        'Treatment recommendations',
        'Clinical trial optimization'
      ],
      benefits: [
        'Improved diagnosis accuracy',
        'Faster drug development',
        'Better patient outcomes',
        'Cost reduction'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-fintech',
      name: 'AI Financial Services',
      description: 'Advanced AI for fraud detection, algorithmic trading, and financial risk management',
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Fraud detection algorithms',
        'Algorithmic trading systems',
        'Credit risk assessment',
        'Market prediction models',
        'Regulatory compliance'
      ],
      benefits: [
        'Reduced fraud losses',
        'Better trading performance',
        'Risk mitigation',
        'Compliance automation'
      ],
      category: 'Fintech',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Optimization',
      description: 'AI-powered solutions for product recommendations, pricing, and customer experience',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'Personalized recommendations',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'Conversion optimization'
      ],
      benefits: [
        'Increased sales',
        'Better customer experience',
        'Optimized pricing',
        'Reduced inventory costs'
      ],
      category: 'E-commerce',
      popular: true,
      icon: Box
    },
    {
      id: 'ai-hr',
      name: 'AI HR & Recruitment',
      description: 'Intelligent HR solutions for talent acquisition, employee analytics, and workforce optimization',
      price: '$399/month',
      marketPrice: '$600-2000/month',
      features: [
        'Resume screening AI',
        'Candidate matching algorithms',
        'Employee performance analytics',
        'Predictive attrition models',
        'Skills gap analysis'
      ],
      benefits: [
        'Faster hiring',
        'Better candidate fit',
        'Reduced turnover',
        'Data-driven HR decisions'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced AI for threat detection, vulnerability assessment, and security automation',
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Threat detection algorithms',
        'Vulnerability scanning',
        'Security incident response',
        'Behavioral analysis',
        'Compliance monitoring'
      ],
      benefits: [
        'Proactive security',
        'Faster threat response',
        'Reduced false positives',
        'Compliance assurance'
      ],
      category: 'Cybersecurity',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-iot',
      name: 'AI IoT & Edge Computing',
      description: 'AI solutions for Internet of Things devices and edge computing optimization',
      price: '$549/month',
      marketPrice: '$900-2500/month',
      features: [
        'Edge AI processing',
        'IoT device optimization',
        'Real-time data analysis',
        'Predictive maintenance',
        'Energy efficiency optimization'
      ],
      benefits: [
        'Reduced latency',
        'Lower bandwidth usage',
        'Predictive maintenance',
        'Energy savings'
      ],
      category: 'IoT',
      popular: false,
      icon: Zap
    },
    {
      id: 'ai-education',
      name: 'AI Education Platform',
      description: 'Personalized learning experiences with AI-powered adaptive education systems',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'Adaptive learning paths',
        'Intelligent tutoring systems',
        'Automated assessment',
        'Learning analytics',
        'Content personalization'
      ],
      benefits: [
        'Personalized learning',
        'Better outcomes',
        'Automated grading',
        'Data-driven insights'
      ],
      category: 'Education',
      popular: false,
      icon: Brain
    },
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-powered targeting and optimization',
      price: '$349/month',
      marketPrice: '$600-2000/month',
      features: [
        'Customer segmentation AI',
        'Predictive marketing models',
        'Automated campaign optimization',
        'Content personalization',
        'ROI prediction'
      ],
      benefits: [
        'Higher conversion rates',
        'Better targeting',
        'Automated optimization',
        'Improved ROI'
      ],
      category: 'Marketing',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and automation',
      price: '$499/month',
      marketPrice: '$800-2500/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Real-time tracking'
      ],
      benefits: [
        'Reduced costs',
        'Better efficiency',
        'Risk mitigation',
        'Improved visibility'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-energy',
      name: 'AI Energy Management',
      description: 'Smart energy solutions with AI-powered optimization and renewable energy integration',
      price: '$399/month',
      marketPrice: '$700-2000/month',
      features: [
        'Energy consumption optimization',
        'Renewable energy forecasting',
        'Smart grid management',
        'Carbon footprint tracking',
        'Automated energy trading'
      ],
      benefits: [
        'Energy cost reduction',
        'Sustainability goals',
        'Grid optimization',
        'Carbon neutrality'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap
    },
    {
      id: 'ai-real-estate',
      name: 'AI Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment optimization using AI',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'Property valuation models',
        'Market trend analysis',
        'Investment recommendations',
        'Risk assessment',
        'Automated property matching'
      ],
      benefits: [
        'Accurate valuations',
        'Better investments',
        'Risk reduction',
        'Market insights'
      ],
      category: 'Real Estate',
      popular: false,
      icon: TrendingUp
    },
    {
      id: 'ai-legal',
      name: 'AI Legal Assistant',
      description: 'Intelligent legal research, document analysis, and contract review automation',
      price: '$449/month',
      marketPrice: '$800-2000/month',
      features: [
        'Legal document analysis',
        'Contract review automation',
        'Legal research assistance',
        'Compliance monitoring',
        'Case outcome prediction'
      ],
      benefits: [
        'Faster document review',
        'Reduced legal costs',
        'Better accuracy',
        'Compliance assurance'
      ],
      category: 'Legal',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-manufacturing',
      name: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing with AI-powered quality control and predictive maintenance',
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Quality control automation',
        'Predictive maintenance',
        'Production optimization',
        'Defect detection',
        'Supply chain integration'
      ],
      benefits: [
        'Higher quality',
        'Reduced downtime',
        'Cost optimization',
        'Better efficiency'
      ],
      category: 'Manufacturing',
      popular: false,
      icon: Box
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: services.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Healthcare', name: 'Healthcare', count: services.filter(s => s.category === 'Healthcare').length },
    { id: 'Fintech', name: 'Fintech', count: services.filter(s => s.category === 'Fintech').length },
    { id: 'E-commerce', name: 'E-commerce', count: services.filter(s => s.category === 'E-commerce').length },
    { id: 'Human Resources', name: 'Human Resources', count: services.filter(s => s.category === 'Human Resources').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: services.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
    { id: 'Education', name: 'Education', count: services.filter(s => s.category === 'Education').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: services.filter(s => s.category === 'Supply Chain').length },
    { id: 'Energy', name: 'Energy', count: services.filter(s => s.category === 'Energy').length },
    { id: 'Real Estate', name: 'Real Estate', count: services.filter(s => s.category === 'Real Estate').length },
    { id: 'Legal', name: 'Legal', count: services.filter(s => s.category === 'Legal').length },
    { id: 'Manufacturing', name: 'Manufacturing', count: services.filter(s => s.category === 'Manufacturing').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, analytics, computer vision, and workflow automation." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations. 
                From chatbots to computer vision, we have the AI expertise you need.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    {service.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our AI experts help you choose the right solutions for your business needs. 
                  Get a free consultation and see how AI can transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiServicesPage;
