'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, 
  Bot, CpuChip, Database as DbIcon, Layers, Search, Filter, 
  Activity, Zap as ZapIcon, Target as TargetIcon, RefreshCw, 
  Lightbulb, BookOpen, PieChart, LineChart, BarChart3, 
  Brain as BrainIcon, Sparkles as SparklesIcon, Cpu as CpuIcon
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling',
      price: 'Starting at $2,500/month',
      features: [
        'Real-time data processing',
        'Predictive analytics models',
        'Custom dashboard creation',
        'Natural language queries',
        'Automated reporting',
        'Machine learning insights',
        'Data visualization',
        'API integrations'
      ],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 234,
      popular: true,
      benefits: [
        'Increase revenue by 25% through data-driven decisions',
        'Reduce analysis time by 80%',
        'Identify new business opportunities',
        'Improve customer retention'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation that learns and adapts to your needs',
      price: 'Starting at $1,800/month',
      features: [
        'Process automation',
        'Document processing',
        'Email automation',
        'Task scheduling',
        'Workflow optimization',
        'Error handling',
        'Performance monitoring',
        'Custom integrations'
      ],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      category: 'Automation',
      rating: 4.8,
      reviews: 189,
      popular: true,
      benefits: [
        'Save 40+ hours per week on repetitive tasks',
        'Reduce human errors by 95%',
        'Scale operations without additional staff',
        'Improve process consistency'
      ]
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot & Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that understand context and provide human-like interactions',
      price: 'Starting at $1,200/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Sentiment analysis',
        'Voice integration',
        'Custom training',
        'Analytics dashboard',
        'API connections'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      category: 'Conversational AI',
      rating: 4.7,
      reviews: 156,
      popular: false,
      benefits: [
        'Handle 80% of customer inquiries automatically',
        'Available 24/7 for customer support',
        'Reduce support costs by 60%',
        'Improve customer satisfaction scores'
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and prevention using machine learning to protect against evolving cyber threats',
      price: 'Starting at $3,500/month',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Anomaly detection',
        'Automated response',
        'Compliance monitoring',
        'Security analytics',
        'Incident investigation',
        'Risk assessment'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.9,
      reviews: 298,
      popular: true,
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Reduce false positives by 85%',
        'Prevent 99.9% of known attack patterns',
        'Ensure compliance with security standards'
      ]
    },
    {
      id: 'ai-crm',
      title: 'AI-Enhanced CRM',
      description: 'Intelligent customer relationship management with predictive insights and automated workflows',
      price: 'Starting at $2,200/month',
      features: [
        'Lead scoring',
        'Sales forecasting',
        'Customer segmentation',
        'Automated follow-ups',
        'Churn prediction',
        'Upselling recommendations',
        'Performance analytics',
        'Integration capabilities'
      ],
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      category: 'CRM',
      rating: 4.8,
      reviews: 187,
      popular: true,
      benefits: [
        'Increase sales conversion by 35%',
        'Improve lead quality by 50%',
        'Reduce sales cycle time by 30%',
        'Enhance customer lifetime value'
      ]
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Platform',
      description: 'Advanced data analytics with machine learning models for comprehensive business intelligence',
      price: 'Starting at $2,800/month',
      features: [
        'Big data processing',
        'Machine learning models',
        'Real-time analytics',
        'Data visualization',
        'Predictive modeling',
        'Statistical analysis',
        'Data mining',
        'Custom algorithms'
      ],
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 245,
      popular: true,
      benefits: [
        'Process data 100x faster than traditional methods',
        'Uncover hidden patterns in data',
        'Make predictions with 90%+ accuracy',
        'Reduce data analysis costs by 70%'
      ]
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Solutions',
      description: 'Revolutionary AI applications for healthcare including diagnostics, treatment planning, and patient monitoring',
      price: 'Starting at $5,000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Patient monitoring',
        'Drug discovery support',
        'Clinical decision support',
        'Health risk assessment',
        'Compliance management'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 167,
      popular: false,
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce treatment costs by 25%',
        'Enhance patient outcomes',
        'Accelerate drug discovery processes'
      ]
    },
    {
      id: 'ai-financial-services',
      title: 'AI Financial Services',
      description: 'Intelligent financial solutions including fraud detection, risk assessment, and automated trading',
      price: 'Starting at $4,200/month',
      features: [
        'Fraud detection',
        'Risk assessment',
        'Algorithmic trading',
        'Credit scoring',
        'Market analysis',
        'Regulatory compliance',
        'Portfolio optimization',
        'Financial forecasting'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      category: 'Finance',
      rating: 4.8,
      reviews: 198,
      popular: true,
      benefits: [
        'Detect fraud with 99.5% accuracy',
        'Reduce financial risks by 40%',
        'Improve trading performance by 25%',
        'Ensure regulatory compliance'
      ]
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and visual inspection',
      price: 'Starting at $2,000/month',
      features: [
        'Object detection',
        'Facial recognition',
        'Image classification',
        'Video analysis',
        'Quality inspection',
        'Motion tracking',
        'Scene understanding',
        'Real-time processing'
      ],
      icon: Eye,
      color: 'from-violet-500 to-purple-500',
      category: 'Computer Vision',
      rating: 4.7,
      reviews: 134,
      popular: false,
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy by 95%',
        'Reduce manual labor costs by 80%',
        'Enable real-time decision making'
      ]
    },
    {
      id: 'ai-voice-solutions',
      title: 'AI Voice & Speech Solutions',
      description: 'Advanced speech recognition, text-to-speech, and voice analytics for enhanced communication',
      price: 'Starting at $1,500/month',
      features: [
        'Speech recognition',
        'Text-to-speech',
        'Voice analytics',
        'Language translation',
        'Voice biometrics',
        'Call center automation',
        'Voice commands',
        'Real-time transcription'
      ],
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      category: 'Voice AI',
      rating: 4.6,
      reviews: 112,
      popular: false,
      benefits: [
        'Improve accessibility for users',
        'Automate call center operations',
        'Enable hands-free interactions',
        'Enhance customer experience'
      ]
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and documentation',
      price: 'Starting at $800/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Marketing copy',
        'Technical documentation',
        'Email campaigns',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training'
      ],
      icon: FileText,
      color: 'from-teal-500 to-cyan-500',
      category: 'Content',
      rating: 4.5,
      reviews: 89,
      popular: false,
      benefits: [
        'Generate content 10x faster',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Scale content production'
      ]
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Pro',
      description: 'Enterprise-grade workflow automation with AI decision-making and process optimization',
      price: 'Starting at $3,000/month',
      features: [
        'Complex workflow design',
        'AI decision making',
        'Process optimization',
        'Exception handling',
        'Performance analytics',
        'Custom integrations',
        'Scalable architecture',
        'Compliance tracking'
      ],
      icon: Settings,
      color: 'from-gray-500 to-slate-500',
      category: 'Automation',
      rating: 4.8,
      reviews: 156,
      popular: true,
      benefits: [
        'Automate complex business processes',
        'Reduce operational costs by 50%',
        'Improve process efficiency by 60%',
        'Ensure compliance and audit trails'
      ]
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Conversational AI', 'Security', 'CRM', 'Healthcare', 'Finance', 'Computer Vision', 'Voice AI', 'Content'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'AI Support', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterprises." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver AI that drives real business value.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <span className="text-sm text-gray-400">Monthly subscription</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400 text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/${service.id}`}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Services */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert AI Team</h3>
                <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years of experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300">Deploy AI solutions in weeks, not months with our proven methodology</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance with SOC 2, GDPR, and HIPAA</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">Average 300% ROI within 6 months of AI implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;