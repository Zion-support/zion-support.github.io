import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Brain, 
  Code, 
  BarChart, 
  Users, 
  Shield, 
  Globe,
  Smartphone,
  Database,
  Target,
  TrendingUp,
  Lock,
  Cpu,
  Sparkles,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  Bot,
  Eye,
  MessageSquare,
  FileText,
  ShoppingCart,
  CreditCard,
  Activity,
  Layers,
  Settings
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-consulting',
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development and implementation planning for enterprise organizations.',
      icon: Brain,
      category: 'Consulting',
      price: '$2,500/month',
      originalPrice: '$4,000/month',
      features: [
        'AI Readiness Assessment',
        'Strategic Roadmap Development',
        'Technology Stack Recommendations',
        'ROI Analysis & Projections',
        'Change Management Planning',
        'Implementation Support',
        'Training & Education',
        'Ongoing Advisory'
      ],
      benefits: [
        'Reduce AI implementation time by 60%',
        'Increase AI project success rate by 80%',
        'Save $100K+ in implementation costs',
        'Accelerate time-to-market by 50%'
      ],
      popular: true,
      rating: 4.9,
      clients: '150+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms tailored to your specific business needs.',
      icon: Cpu,
      category: 'Development',
      price: '$3,500/month',
      originalPrice: '$5,500/month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'A/B Testing & Validation',
        'Model Deployment & Monitoring',
        'Performance Analytics',
        'Continuous Learning',
        'API Integration'
      ],
      benefits: [
        'Improve prediction accuracy by 85%',
        'Automate decision-making processes',
        'Reduce operational costs by 40%',
        'Scale ML capabilities efficiently'
      ],
      rating: 4.8,
      clients: '200+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: MessageSquare,
      category: 'Development',
      price: '$2,800/month',
      originalPrice: '$4,200/month',
      features: [
        'Text Classification & Categorization',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Language Translation',
        'Text Summarization',
        'Chatbot Development',
        'Voice Recognition',
        'Document Processing'
      ],
      benefits: [
        'Process 10x more text data',
        'Improve customer understanding by 70%',
        'Automate content analysis',
        'Enhance user experience'
      ],
      rating: 4.7,
      clients: '180+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Solutions',
      description: 'AI-powered image and video analysis for object detection, recognition, and processing.',
      icon: Eye,
      category: 'Development',
      price: '$4,200/month',
      originalPrice: '$6,500/month',
      features: [
        'Object Detection & Recognition',
        'Image Classification',
        'Facial Recognition',
        'OCR & Text Extraction',
        'Video Analysis',
        'Quality Inspection',
        'Medical Imaging',
        'Security Monitoring'
      ],
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy by 95%',
        'Reduce manual labor by 80%',
        'Enable real-time analysis'
      ],
      rating: 4.9,
      clients: '120+',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling and forecasting solutions for business intelligence.',
      icon: BarChart,
      category: 'Analytics',
      price: '$2,200/month',
      originalPrice: '$3,500/month',
      features: [
        'Predictive Modeling',
        'Time Series Forecasting',
        'Risk Assessment',
        'Demand Planning',
        'Customer Lifetime Value',
        'Churn Prediction',
        'Price Optimization',
        'Real-time Dashboards'
      ],
      benefits: [
        'Improve forecasting accuracy by 75%',
        'Reduce inventory costs by 30%',
        'Increase revenue by 25%',
        'Make data-driven decisions'
      ],
      rating: 4.6,
      clients: '250+',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: Settings,
      category: 'Automation',
      price: '$1,800/month',
      originalPrice: '$2,800/month',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Email Automation',
        'Data Entry Automation',
        'Report Generation',
        'Exception Handling',
        'Process Optimization',
        'Integration Management'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Improve process efficiency by 60%',
        'Eliminate human errors',
        'Scale operations easily'
      ],
      rating: 4.8,
      clients: '300+',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI solutions for customer service and support.',
      icon: Bot,
      category: 'Customer Service',
      price: '$1,500/month',
      originalPrice: '$2,200/month',
      features: [
        'Natural Language Understanding',
        'Multi-channel Support',
        'Context Awareness',
        'Human Handoff',
        'Analytics & Insights',
        'Custom Training',
        'Integration APIs',
        '24/7 Availability'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response time by 90%',
        'Increase customer satisfaction',
        'Handle 80% of queries automatically'
      ],
      rating: 4.7,
      clients: '400+',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for marketing, documentation, and communication.',
      icon: FileText,
      category: 'Content',
      price: '$800/month',
      originalPrice: '$1,200/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing',
        'Product Descriptions',
        'Technical Documentation',
        'Multilingual Support',
        'SEO Optimization',
        'Brand Voice Training'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent quality',
        'Scale content production',
        'Reduce content costs by 60%'
      ],
      rating: 4.5,
      clients: '500+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-ecommerce',
      title: 'AI E-commerce Solutions',
      description: 'AI-powered e-commerce platform with personalization, recommendations, and automation.',
      icon: ShoppingCart,
      category: 'E-commerce',
      price: '$3,000/month',
      originalPrice: '$4,500/month',
      features: [
        'Product Recommendations',
        'Personalized Shopping',
        'Dynamic Pricing',
        'Inventory Optimization',
        'Customer Segmentation',
        'Fraud Detection',
        'Search Optimization',
        'Analytics Dashboard'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Boost average order value by 25%',
        'Reduce cart abandonment by 30%',
        'Improve customer experience'
      ],
      rating: 4.8,
      clients: '100+',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'ai-finance',
      title: 'AI Financial Solutions',
      description: 'AI-powered financial services including fraud detection, risk assessment, and trading.',
      icon: CreditCard,
      category: 'Finance',
      price: '$4,500/month',
      originalPrice: '$7,000/month',
      features: [
        'Fraud Detection',
        'Credit Scoring',
        'Risk Assessment',
        'Algorithmic Trading',
        'Compliance Monitoring',
        'Anti-Money Laundering',
        'Portfolio Optimization',
        'Real-time Monitoring'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Improve risk assessment accuracy',
        'Automate compliance processes',
        'Optimize trading strategies'
      ],
      rating: 4.9,
      clients: '80+',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Solutions',
      description: 'Advanced AI solutions for medical diagnosis, drug discovery, and patient care.',
      icon: Activity,
      category: 'Healthcare',
      price: '$5,500/month',
      originalPrice: '$8,500/month',
      features: [
        'Medical Image Analysis',
        'Drug Discovery',
        'Patient Monitoring',
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Clinical Trial Optimization',
        'Electronic Health Records',
        'Telemedicine Support'
      ],
      benefits: [
        'Improve diagnostic accuracy by 90%',
        'Reduce treatment costs by 35%',
        'Accelerate drug discovery',
        'Enhance patient outcomes'
      ],
      rating: 4.9,
      clients: '60+',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-infrastructure',
      title: 'AI Infrastructure & MLOps',
      description: 'Complete AI infrastructure setup with MLOps, monitoring, and scaling capabilities.',
      icon: Layers,
      category: 'Infrastructure',
      price: '$2,800/month',
      originalPrice: '$4,200/month',
      features: [
        'MLOps Pipeline Setup',
        'Model Versioning',
        'Automated Deployment',
        'Performance Monitoring',
        'Auto-scaling',
        'Security & Compliance',
        'Data Pipeline Management',
        'Cost Optimization'
      ],
      benefits: [
        'Deploy models 5x faster',
        'Reduce infrastructure costs by 40%',
        'Improve model reliability',
        'Scale AI operations efficiently'
      ],
      rating: 4.7,
      clients: '150+',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  const categories = [
    { name: 'All Services', count: aiServices.length, active: true },
    { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
    { name: 'Development', count: aiServices.filter(s => s.category === 'Development').length },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Content', count: aiServices.filter(s => s.category === 'Content').length },
    { name: 'E-commerce', count: aiServices.filter(s => s.category === 'E-commerce').length },
    { name: 'Finance', count: aiServices.filter(s => s.category === 'Finance').length },
    { name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length },
    { name: 'Infrastructure', count: aiServices.filter(s => s.category === 'Infrastructure').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'AI Projects Delivered', value: '1,200+', icon: Rocket },
    { label: 'Enterprise Clients', value: '500+', icon: Users },
    { label: 'AI Models Deployed', value: '3,500+', icon: Brain },
    { label: 'Success Rate', value: '98%', icon: Award }
  ];

  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing',
      description: 'Implemented AI-powered quality control system reducing defects by 85%',
      result: '$2.5M annual savings',
      icon: Shield
    },
    {
      title: 'Healthcare Provider',
      description: 'Deployed AI diagnostic assistant improving accuracy by 90%',
      result: '50% faster diagnosis',
      icon: Activity
    },
    {
      title: 'E-commerce Platform',
      description: 'AI personalization increased conversion rates by 40%',
      result: '$5M revenue increase',
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20 cyber-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors">Micro SAAS</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow max-w-4xl mx-auto">
              Advanced artificial intelligence solutions that transform your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cyber-input"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <span className="inline-block bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>⭐ {service.rating}/5</span>
                    <span>{service.clients} clients</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-cyan-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="w-full border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-500/10 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{study.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI technology and designed for maximum efficiency and business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert AI Team</h3>
              <p className="text-gray-300">Our team of AI experts has 10+ years of experience in machine learning and AI development.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Deploy AI solutions in weeks, not months, with our proven implementation methodology.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and 99.9% uptime guarantee.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our AI solutions deliver average ROI of 300% within the first year of implementation.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team to ensure your AI systems run smoothly.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Scale</h3>
              <p className="text-gray-300">Scale your AI solutions globally with our multi-cloud infrastructure and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using our AI solutions to increase productivity, reduce costs, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-cyan-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST | 24/7 Support Available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved. Empowering businesses with AI innovation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Enterprise Security
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                Global Services
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIServicesPage;