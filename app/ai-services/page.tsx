import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Code, 
  Cloud, 
  Eye, 
  MessageSquare, 
  Target, 
  TrendingUp,
  Check,
  ArrowRight,
  Star,
  Users,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  Lock,
  Settings,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 1,
      name: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision-making.',
      icon: Brain,
      price: 2500,
      period: 'month',
      features: [
        'Custom Model Development',
        'Predictive Analytics',
        'Pattern Recognition',
        'Real-time Inference',
        'Model Training & Optimization',
        'A/B Testing Framework',
        'Performance Monitoring',
        'Scalable Deployment'
      ],
      category: 'Core AI',
      popular: true,
      color: 'purple'
    },
    {
      id: 2,
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: MessageSquare,
      price: 1800,
      period: 'month',
      features: [
        'Text Analysis & Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Chatbot Development',
        'Document Processing',
        'Voice Recognition',
        'Text Generation',
        'Multi-language Support'
      ],
      category: 'Language AI',
      popular: true,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, facial recognition, and visual intelligence.',
      icon: Eye,
      price: 2200,
      period: 'month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition',
        'Image Classification',
        'Video Analysis',
        'OCR (Optical Character Recognition)',
        'Medical Imaging Analysis',
        'Quality Control Systems',
        'Real-time Processing'
      ],
      category: 'Visual AI',
      popular: false,
      color: 'green'
    },
    {
      id: 4,
      name: 'AI Automation Platform',
      description: 'Intelligent automation solutions for business processes, workflows, and decision-making.',
      icon: Zap,
      price: 3200,
      period: 'month',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Decision Engine',
        'Exception Handling',
        'Integration APIs',
        'Custom Triggers',
        'Performance Analytics',
        'Scalable Architecture'
      ],
      category: 'Automation',
      popular: true,
      color: 'orange'
    },
    {
      id: 5,
      name: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting solutions for business intelligence and strategic planning.',
      icon: BarChart,
      price: 1900,
      period: 'month',
      features: [
        'Forecasting Models',
        'Trend Analysis',
        'Risk Assessment',
        'Customer Behavior Prediction',
        'Market Analysis',
        'Financial Modeling',
        'Scenario Planning',
        'Real-time Dashboards'
      ],
      category: 'Analytics',
      popular: false,
      color: 'indigo'
    },
    {
      id: 6,
      name: 'AI Chatbot Development',
      description: 'Intelligent conversational AI solutions for customer service, support, and engagement.',
      icon: MessageSquare,
      price: 1500,
      period: 'month',
      features: [
        'Natural Conversations',
        'Multi-channel Support',
        'Intent Recognition',
        'Context Awareness',
        'Integration APIs',
        'Analytics Dashboard',
        'Custom Training',
        '24/7 Availability'
      ],
      category: 'Conversational AI',
      popular: true,
      color: 'pink'
    },
    {
      id: 7,
      name: 'AI Content Generation',
      description: 'Automated content creation for marketing, documentation, and creative writing.',
      icon: Code,
      price: 1200,
      period: 'month',
      features: [
        'Blog & Article Writing',
        'Social Media Content',
        'Email Campaigns',
        'Product Descriptions',
        'Technical Documentation',
        'Creative Writing',
        'SEO Optimization',
        'Brand Voice Training'
      ],
      category: 'Content AI',
      popular: false,
      color: 'teal'
    },
    {
      id: 8,
      name: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience.',
      icon: Target,
      price: 2100,
      period: 'month',
      features: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-based Filtering',
        'Real-time Updates',
        'A/B Testing',
        'Performance Metrics',
        'Scalable Architecture',
        'Multi-domain Support'
      ],
      category: 'Recommendation',
      popular: false,
      color: 'cyan'
    }
  ];

  const categories = [
    'All',
    'Core AI',
    'Language AI',
    'Visual AI',
    'Automation',
    'Analytics',
    'Conversational AI',
    'Content AI',
    'Recommendation'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredServices, setFilteredServices] = useState(aiServices);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredServices(aiServices);
    } else {
      setFilteredServices(aiServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-purple-700',
      blue: 'from-blue-500 to-blue-700',
      green: 'from-green-500 to-green-700',
      orange: 'from-orange-500 to-orange-700',
      pink: 'from-pink-500 to-pink-700',
      indigo: 'from-indigo-500 to-indigo-700',
      teal: 'from-teal-500 to-teal-700',
      cyan: 'from-cyan-500 to-cyan-700'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Cutting-Edge Artificial Intelligence Solutions for Modern Businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive AI services. From machine learning and natural language processing 
              to computer vision and automation, we deliver intelligent solutions that drive growth and efficiency.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-xs sm:text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-xs sm:text-sm text-gray-300">ROI Improvement</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">AI Monitoring</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-300">AI Models</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
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
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400">/{service.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-200 bg-gradient-to-r ${getColorClasses(service.color)} text-white hover:shadow-lg hover:scale-105`}
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full py-2 px-4 rounded-lg font-medium text-center transition-all duration-200 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our AI Capabilities
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
                <p className="text-gray-300">Advanced ML algorithms for predictive modeling, pattern recognition, and intelligent automation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-gray-300">Sophisticated NLP for text analysis, sentiment analysis, and conversational AI.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                <p className="text-gray-300">Image and video analysis for object detection, facial recognition, and visual intelligence.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Automation</h3>
                <p className="text-gray-300">Intelligent automation solutions for business processes and workflow optimization.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">Data-driven insights and forecasting for strategic business decision-making.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Personalization</h3>
                <p className="text-gray-300">AI-powered recommendation systems and personalized user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Get started with a free consultation 
              and discover how artificial intelligence can revolutionize your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                Start Free Consultation
              </Link>
              <Link
                to="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call: (302) 464-0950
              </Link>
            </div>
            
            <div className="mt-6 text-sm text-gray-400 space-y-1">
              <p>✓ Free AI assessment • ✓ Custom solution design • ✓ 30-day trial</p>
              <p>✓ Expert AI team • ✓ 24/7 support • ✓ Enterprise security</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
