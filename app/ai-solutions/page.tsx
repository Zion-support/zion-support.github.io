'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon,
  SparklesIcon,
  ChartBarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  BrainIcon,
  LightBulbIcon,
  CodeBracketIcon,
  CloudIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and more.',
      icon: DocumentTextIcon,
      price: 'Starting at $199/mo',
      features: [
        'GPT-4 powered generation',
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Content templates',
        'Plagiarism detection',
        'Bulk generation',
        'API integration'
      ],
      category: 'Content AI',
      gradient: 'from-cyan-500 to-blue-500',
      href: '/ai-content-generation',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics with predictive insights and automated reporting.',
      icon: ChartBarIcon,
      price: 'Starting at $349/mo',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated insights',
        'Custom reports',
        'Data visualization',
        'Trend analysis',
        'Alert system',
        'API access'
      ],
      category: 'Analytics AI',
      gradient: 'from-purple-500 to-pink-500',
      href: '/ai-analytics-dashboard',
      popular: true
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis using state-of-the-art computer vision models.',
      icon: EyeIcon,
      price: 'Starting at $499/mo',
      features: [
        'Object detection',
        'Facial recognition',
        'Image classification',
        'Video analysis',
        'OCR capabilities',
        'Quality assessment',
        'Custom model training',
        'Real-time processing'
      ],
      category: 'Vision AI',
      gradient: 'from-green-500 to-emerald-500',
      href: '/ai-computer-vision'
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Enterprise Chatbot',
      description: 'Intelligent conversational AI for customer support and business automation.',
      icon: ChatBubbleLeftRightIcon,
      price: 'Starting at $299/mo',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Human handoff',
        'Analytics dashboard',
        'Custom training',
        'API integration'
      ],
      category: 'Conversational AI',
      gradient: 'from-orange-500 to-red-500',
      href: '/ai-chatbot-enterprise'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and security monitoring for enterprise protection.',
      icon: ShieldCheckIcon,
      price: 'Starting at $799/mo',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Behavioral analysis',
        'Incident response',
        'Compliance monitoring',
        'Risk assessment',
        '24/7 monitoring',
        'Custom rules'
      ],
      category: 'Security AI',
      gradient: 'from-red-500 to-pink-500',
      href: '/ai-cybersecurity'
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Intelligent process automation using AI to streamline business operations.',
      icon: CogIcon,
      price: 'Starting at $599/mo',
      features: [
        'Process automation',
        'Workflow optimization',
        'Decision automation',
        'Data processing',
        'Integration capabilities',
        'Monitoring dashboard',
        'Custom workflows',
        'API ecosystem'
      ],
      category: 'Automation AI',
      gradient: 'from-indigo-500 to-purple-500',
      href: '/ai-automation-platform'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced BI with AI-powered insights and automated decision support.',
      icon: BrainIcon,
      price: 'Starting at $449/mo',
      features: [
        'Predictive modeling',
        'Data mining',
        'Pattern recognition',
        'Forecasting',
        'Recommendation engine',
        'Custom algorithms',
        'Real-time analysis',
        'Executive dashboards'
      ],
      category: 'Intelligence AI',
      gradient: 'from-teal-500 to-green-500',
      href: '/ai-business-intelligence'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      description: 'Deep customer analytics and personalization using advanced AI models.',
      icon: UserGroupIcon,
      price: 'Starting at $399/mo',
      features: [
        'Customer segmentation',
        'Behavioral analysis',
        'Personalization engine',
        'Churn prediction',
        'Lifetime value analysis',
        'Recommendation system',
        'A/B testing',
        'Real-time insights'
      ],
      category: 'Customer AI',
      gradient: 'from-yellow-500 to-orange-500',
      href: '/ai-customer-insights'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Intelligent coding assistant with code generation, review, and optimization.',
      icon: CodeBracketIcon,
      price: 'Starting at $199/mo',
      features: [
        'Code generation',
        'Bug detection',
        'Code review',
        'Refactoring suggestions',
        'Documentation generation',
        'Test case creation',
        'Security scanning',
        'IDE integration'
      ],
      category: 'Development AI',
      gradient: 'from-violet-500 to-purple-500',
      href: '/ai-code-assistant'
    },
    {
      id: 'ai-cloud-infrastructure',
      name: 'AI Cloud Infrastructure',
      description: 'AI-optimized cloud solutions with intelligent resource management.',
      icon: CloudIcon,
      price: 'Starting at $999/mo',
      features: [
        'Auto-scaling',
        'Resource optimization',
        'Cost management',
        'Performance monitoring',
        'Predictive maintenance',
        'Load balancing',
        'Security automation',
        'Compliance monitoring'
      ],
      category: 'Cloud AI',
      gradient: 'from-sky-500 to-blue-500',
      href: '/ai-cloud-infrastructure'
    },
    {
      id: 'ai-blockchain-solutions',
      name: 'AI Blockchain Solutions',
      description: 'AI-powered blockchain applications and smart contract optimization.',
      icon: GlobeAltIcon,
      price: 'Starting at $699/mo',
      features: [
        'Smart contract analysis',
        'DeFi optimization',
        'Transaction analysis',
        'Risk assessment',
        'Automated trading',
        'Compliance monitoring',
        'Token analytics',
        'Security auditing'
      ],
      category: 'Blockchain AI',
      gradient: 'from-rose-500 to-pink-500',
      href: '/ai-blockchain-solutions'
    },
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions',
      description: 'AI-driven environmental monitoring and sustainability optimization.',
      icon: LightBulbIcon,
      price: 'Starting at $549/mo',
      features: [
        'Environmental monitoring',
        'Carbon footprint analysis',
        'Sustainability optimization',
        'Weather prediction',
        'Resource management',
        'Emission tracking',
        'Green energy optimization',
        'Compliance reporting'
      ],
      category: 'Climate AI',
      gradient: 'from-emerald-500 to-teal-500',
      href: '/ai-climate-solutions'
    }
  ];

  const categories = [
    'All',
    'Content AI',
    'Analytics AI',
    'Vision AI',
    'Conversational AI',
    'Security AI',
    'Automation AI',
    'Intelligence AI',
    'Customer AI',
    'Development AI',
    'Cloud AI',
    'Blockchain AI',
    'Climate AI'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="AI Solutions & Services - Zion Tech Group"
        description="Advanced AI solutions including content generation, analytics, computer vision, chatbots, and automation. Transform your business with cutting-edge artificial intelligence."
        keywords="AI solutions, artificial intelligence, machine learning, AI services, computer vision, natural language processing, AI automation, business intelligence"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Solutions & Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to transform your business. From content generation to predictive analytics, we provide cutting-edge AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>12+ AI Categories</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Custom Models</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <StarIcon className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{service.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-lg font-bold text-white">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-gray-400">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to={service.href}
                        className={`flex-1 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                      >
                        Learn More
                      </Link>
                      <button className="px-4 py-3 border border-slate-600 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300">
                        <BoltIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We leverage the latest AI technologies and models to deliver intelligent solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BrainIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
                <p className="text-gray-400">Advanced ML models for predictive analytics and intelligent automation.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-400">State-of-the-art image and video analysis capabilities.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Natural Language</h3>
                <p className="text-gray-400">Advanced NLP for chatbots, content generation, and analysis.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Process Automation</h3>
                <p className="text-gray-400">Intelligent automation to streamline business processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Harness AI Power?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our AI solutions can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;
