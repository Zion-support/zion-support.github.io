'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Filter,
  Search,
  Eye,
  MessageSquare,
  Cpu,
  Layers,
  Bot,
  Sparkles
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    // AI Development & Implementation
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting for enterprise transformation',
      category: 'Consulting',
      price: '$299/hour',
      duration: '2-12 weeks',
      features: [
        'AI readiness assessment and gap analysis',
        'Custom AI strategy development and roadmap',
        'Technology stack recommendations and selection',
        'ROI analysis and business case development',
        'Change management and training programs',
        'AI governance and ethics framework',
        'Implementation planning and project management',
        'Ongoing support and optimization',
        'Compliance and regulatory guidance',
        'Performance monitoring and analytics'
      ],
      icon: Brain,
      popular: true,
      rating: 4.9,
      clients: '200+',
      link: 'https://ziontechgroup.com/ai-strategy-consulting'
    },
    {
      id: 2,
      title: 'Custom AI Model Development',
      description: 'Bespoke AI model development tailored to your specific business requirements and data',
      category: 'Development',
      price: '$15,000 - $150,000',
      duration: '4-16 weeks',
      features: [
        'Custom machine learning model development',
        'Deep learning and neural network solutions',
        'Natural language processing (NLP) models',
        'Computer vision and image recognition',
        'Predictive analytics and forecasting models',
        'Recommendation systems and personalization',
        'Model training and optimization',
        'API development and integration',
        'Model deployment and scaling',
        'Performance monitoring and maintenance'
      ],
      icon: Cpu,
      popular: true,
      rating: 4.8,
      clients: '150+',
      link: 'https://ziontechgroup.com/custom-ai-models'
    },
    {
      id: 3,
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI solutions for customer service, sales, and internal operations',
      category: 'Conversational AI',
      price: '$5,000 - $50,000',
      duration: '2-8 weeks',
      features: [
        'GPT-4 powered conversational AI',
        'Multi-channel deployment (web, mobile, voice)',
        'Natural language understanding and processing',
        'Intent recognition and entity extraction',
        'Context-aware conversations and memory',
        'Integration with CRM and business systems',
        'Multi-language support (50+ languages)',
        'Analytics and conversation insights',
        'Custom training and knowledge base',
        '24/7 monitoring and support'
      ],
      icon: Bot,
      popular: true,
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/ai-chatbot'
    },
    {
      id: 4,
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision and image recognition solutions for various industries',
      category: 'Computer Vision',
      price: '$10,000 - $100,000',
      duration: '3-12 weeks',
      features: [
        'Object detection and recognition',
        'Facial recognition and biometric systems',
        'Medical image analysis and diagnosis',
        'Quality control and defect detection',
        'Autonomous vehicle vision systems',
        'Augmented reality applications',
        'Document processing and OCR',
        'Real-time video analysis',
        'Edge computing deployment',
        'Custom model training and optimization'
      ],
      icon: Eye,
      popular: false,
      rating: 4.7,
      clients: '120+',
      link: 'https://ziontechgroup.com/computer-vision'
    },
    {
      id: 5,
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive analytics and forecasting solutions for business intelligence',
      category: 'Analytics',
      price: '$25,000 - $200,000',
      duration: '6-20 weeks',
      features: [
        'Advanced forecasting and prediction models',
        'Time series analysis and trend detection',
        'Customer behavior prediction and segmentation',
        'Risk assessment and fraud detection',
        'Demand forecasting and inventory optimization',
        'Financial modeling and market analysis',
        'Real-time data processing and streaming',
        'Interactive dashboards and visualization',
        'API integration and data connectors',
        'Machine learning model management'
      ],
      icon: TrendingUp,
      popular: true,
      rating: 4.8,
      clients: '180+',
      link: 'https://ziontechgroup.com/predictive-analytics'
    },
    {
      id: 6,
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation and workflow optimization using AI technologies',
      category: 'Automation',
      price: '$15,000 - $100,000',
      duration: '4-16 weeks',
      features: [
        'Intelligent document processing and extraction',
        'Automated decision making and routing',
        'Process mining and optimization',
        'RPA integration with AI capabilities',
        'Workflow automation and orchestration',
        'Exception handling and error recovery',
        'Integration with existing business systems',
        'Performance monitoring and analytics',
        'Custom automation rules and triggers',
        'Scalable cloud deployment'
      ],
      icon: Zap,
      popular: false,
      rating: 4.6,
      clients: '140+',
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: 7,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
      category: 'NLP',
      price: '$8,000 - $75,000',
      duration: '3-10 weeks',
      features: [
        'Text classification and categorization',
        'Sentiment analysis and emotion detection',
        'Named entity recognition and extraction',
        'Language translation and localization',
        'Text summarization and generation',
        'Question answering systems',
        'Document analysis and processing',
        'Multi-language support and processing',
        'Custom model training and fine-tuning',
        'API development and integration'
      ],
      icon: MessageSquare,
      popular: false,
      rating: 4.7,
      clients: '160+',
      link: 'https://ziontechgroup.com/nlp-solutions'
    },
    {
      id: 8,
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive AI-powered data analytics and business intelligence platform',
      category: 'Analytics',
      price: '$20,000 - $150,000',
      duration: '5-18 weeks',
      features: [
        'Advanced data visualization and dashboards',
        'AI-powered insights and recommendations',
        'Real-time data processing and analysis',
        'Custom analytics models and algorithms',
        'Data integration and ETL processes',
        'Interactive reporting and exploration',
        'Machine learning model integration',
        'Cloud and on-premises deployment',
        'API access and custom integrations',
        'Advanced security and compliance'
      ],
      icon: BarChart,
      popular: true,
      rating: 4.9,
      clients: '220+',
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 9,
      title: 'AI Content Generation',
      description: 'AI-powered content creation and generation solutions for marketing and communications',
      category: 'Content AI',
      price: '$5,000 - $40,000',
      duration: '2-6 weeks',
      features: [
        'Automated content writing and generation',
        'Multi-format content creation (text, images, video)',
        'Brand voice training and customization',
        'SEO optimization and keyword integration',
        'Content personalization and targeting',
        'Multi-language content generation',
        'Content quality assessment and scoring',
        'Workflow automation and scheduling',
        'Team collaboration and approval processes',
        'Analytics and performance tracking'
      ],
      icon: FileText,
      popular: false,
      rating: 4.8,
      clients: '190+',
      link: 'https://ziontechgroup.com/ai-content'
    },
    {
      id: 10,
      title: 'AI Security & Fraud Detection',
      description: 'Advanced AI-powered security solutions and fraud detection systems',
      category: 'Security',
      price: '$30,000 - $250,000',
      duration: '6-24 weeks',
      features: [
        'Real-time fraud detection and prevention',
        'Anomaly detection and behavioral analysis',
        'Threat intelligence and risk assessment',
        'Cybersecurity monitoring and response',
        'Identity verification and authentication',
        'Transaction monitoring and analysis',
        'Compliance and regulatory reporting',
        'Machine learning model training',
        'Integration with security systems',
        '24/7 monitoring and support'
      ],
      icon: Shield,
      popular: true,
      rating: 4.9,
      clients: '110+',
      link: 'https://ziontechgroup.com/ai-security'
    },
    {
      id: 11,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for healthcare, medical imaging, and patient care',
      category: 'Healthcare',
      price: '$50,000 - $500,000',
      duration: '8-32 weeks',
      features: [
        'Medical image analysis and diagnosis',
        'Drug discovery and development',
        'Patient monitoring and care management',
        'Clinical decision support systems',
        'Electronic health record integration',
        'Telemedicine and remote care solutions',
        'HIPAA compliance and security',
        'FDA approval support and guidance',
        'Clinical trial optimization',
        'Healthcare analytics and insights'
      ],
      icon: Database,
      popular: false,
      rating: 4.8,
      clients: '80+',
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      id: 12,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for financial services, trading, and risk management',
      category: 'Finance',
      price: '$40,000 - $300,000',
      duration: '6-20 weeks',
      features: [
        'Algorithmic trading and investment strategies',
        'Risk assessment and portfolio management',
        'Credit scoring and loan approval',
        'Fraud detection and prevention',
        'Regulatory compliance and reporting',
        'Market analysis and forecasting',
        'Customer service and support',
        'Real-time transaction monitoring',
        'Integration with financial systems',
        'Advanced security and encryption'
      ],
      icon: TrendingUp,
      popular: false,
      rating: 4.7,
      clients: '90+',
      link: 'https://ziontechgroup.com/ai-finance'
    },
    {
      id: 13,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce solutions with personalization and optimization',
      category: 'E-commerce',
      price: '$15,000 - $120,000',
      duration: '4-14 weeks',
      features: [
        'Product recommendation engines',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Inventory management and forecasting',
        'Search and discovery optimization',
        'Personalized marketing campaigns',
        'Chatbot and customer support',
        'Visual search and image recognition',
        'Multi-channel integration',
        'Advanced analytics and reporting'
      ],
      icon: Globe,
      popular: true,
      rating: 4.8,
      clients: '170+',
      link: 'https://ziontechgroup.com/ai-ecommerce'
    },
    {
      id: 14,
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management and optimization solutions',
      category: 'Supply Chain',
      price: '$25,000 - $200,000',
      duration: '6-18 weeks',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization and management',
        'Route optimization and logistics',
        'Supplier risk assessment',
        'Quality control and monitoring',
        'Cost optimization and analysis',
        'Real-time tracking and visibility',
        'Integration with ERP systems',
        'Predictive maintenance',
        'Sustainability and carbon footprint'
      ],
      icon: Layers,
      popular: false,
      rating: 4.6,
      clients: '130+',
      link: 'https://ziontechgroup.com/ai-supply-chain'
    },
    {
      id: 15,
      title: 'AI Marketing Automation',
      description: 'Advanced AI-powered marketing automation and personalization platform',
      category: 'Marketing',
      price: '$10,000 - $80,000',
      duration: '3-12 weeks',
      features: [
        'Customer segmentation and targeting',
        'Personalized content and campaigns',
        'Predictive customer analytics',
        'Marketing attribution and ROI analysis',
        'Cross-channel campaign orchestration',
        'A/B testing and optimization',
        'Lead scoring and qualification',
        'Email and social media automation',
        'Integration with marketing tools',
        'Advanced reporting and analytics'
      ],
      icon: Target,
      popular: true,
      rating: 4.9,
      clients: '250+',
      link: 'https://ziontechgroup.com/ai-marketing'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services' },
    { id: 'Consulting', name: 'AI Consulting' },
    { id: 'Development', name: 'AI Development' },
    { id: 'Conversational AI', name: 'Conversational AI' },
    { id: 'Computer Vision', name: 'Computer Vision' },
    { id: 'Analytics', name: 'AI Analytics' },
    { id: 'Automation', name: 'AI Automation' },
    { id: 'NLP', name: 'Natural Language Processing' },
    { id: 'Content AI', name: 'Content AI' },
    { id: 'Security', name: 'AI Security' },
    { id: 'Healthcare', name: 'Healthcare AI' },
    { id: 'Finance', name: 'Financial AI' },
    { id: 'E-commerce', name: 'E-commerce AI' },
    { id: 'Supply Chain', name: 'Supply Chain AI' },
    { id: 'Marketing', name: 'Marketing AI' }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Expert AI Team',
      description: 'Certified AI engineers and data scientists with 10+ years of experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2, GDPR, and HIPAA compliance'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with proven methodologies and best practices'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and results'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : aiServices.filter(service => 
        service.category === selectedCategory && (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group - Advanced AI Solutions & Consulting</title>
        <meta name="description" content="Comprehensive AI services including custom AI development, machine learning, computer vision, NLP, and AI consulting. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, computer vision, NLP, AI development, AI solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced <span className="text-cyan-400">AI Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From strategy to implementation, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'all' ? 'All AI Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-300">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 relative ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.clients}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-gray-400 text-sm">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 text-center block ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    }`}
                  >
                    Get Quote
                  </a>
                  <a
                    href="/contact"
                    className="w-full py-2 px-6 rounded-lg font-medium text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals. 
              Contact us today for a free consultation and custom AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;