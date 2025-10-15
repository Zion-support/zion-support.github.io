import React from 'react';
import SEOHead from './components/SEOHead';
import { 
  CpuChipIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  CogIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CameraIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const AiSolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Suite',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      icon: SparklesIcon,
      price: '$299/mo',
      originalPrice: '$499/mo',
      features: [
        'GPT-4 and Claude integration',
        'Multi-language support (100+ languages)',
        'Brand voice customization',
        'SEO optimization',
        'Content scheduling',
        'Plagiarism detection',
        'API access',
        'Team collaboration tools'
      ],
      gradient: 'from-cyan-500 to-blue-500',
      category: 'Content AI',
      link: '/ai-content-generation',
      marketPrice: '$499-999/mo',
      benefits: 'Generate 50+ pieces of content daily'
    },
    {
      id: 'ai-analytics',
      title: 'AI Business Intelligence',
      description: 'Intelligent data analysis with predictive analytics, automated insights, and real-time business intelligence.',
      icon: ChartBarIcon,
      price: '$399/mo',
      originalPrice: '$699/mo',
      features: [
        'Predictive analytics',
        'Automated insights generation',
        'Real-time dashboards',
        'Natural language queries',
        'Anomaly detection',
        'Custom ML models',
        'Data visualization',
        'API integrations'
      ],
      gradient: 'from-purple-500 to-pink-500',
      category: 'Analytics AI',
      link: '/ai-analytics',
      marketPrice: '$699-1499/mo',
      benefits: 'Increase data-driven decisions by 80%'
    },
    {
      id: 'ai-chatbots',
      title: 'AI Conversational AI Platform',
      description: 'Build intelligent chatbots and virtual assistants with advanced NLP, voice integration, and multi-channel support.',
      icon: ChatBubbleLeftRightIcon,
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'Advanced NLP processing',
        'Multi-channel deployment',
        'Voice integration',
        'Sentiment analysis',
        'Custom training data',
        'Analytics dashboard',
        'API access',
        'White-label options'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      category: 'Conversational AI',
      link: '/ai-chatbots',
      marketPrice: '$399-899/mo',
      benefits: 'Reduce support costs by 70%'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Suite',
      description: 'Advanced image and video analysis with object detection, facial recognition, and automated visual processing.',
      icon: EyeIcon,
      price: '$349/mo',
      originalPrice: '$599/mo',
      features: [
        'Object detection & recognition',
        'Facial recognition',
        'Image classification',
        'Video analysis',
        'OCR capabilities',
        'Custom model training',
        'Real-time processing',
        'API integrations'
      ],
      gradient: 'from-green-500 to-emerald-500',
      category: 'Computer Vision',
      link: '/ai-computer-vision',
      marketPrice: '$599-1299/mo',
      benefits: 'Process 10,000+ images per hour'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation for business processes with RPA, document processing, and workflow optimization.',
      icon: Cog6ToothIcon,
      price: '$249/mo',
      originalPrice: '$449/mo',
      features: [
        'Robotic Process Automation',
        'Document processing',
        'Workflow optimization',
        'Data extraction',
        'Email automation',
        'Custom integrations',
        'Analytics dashboard',
        'Scalable deployment'
      ],
      gradient: 'from-orange-500 to-red-500',
      category: 'Process AI',
      link: '/ai-automation',
      marketPrice: '$449-999/mo',
      benefits: 'Automate 90% of repetitive tasks'
    },
    {
      id: 'ai-predictive',
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling for forecasting, risk assessment, and strategic decision making.',
      icon: LightBulbIcon,
      price: '$449/mo',
      originalPrice: '$799/mo',
      features: [
        'Time series forecasting',
        'Risk assessment models',
        'Customer behavior prediction',
        'Demand forecasting',
        'Fraud detection',
        'Custom ML algorithms',
        'Real-time predictions',
        'Model monitoring'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Predictive AI',
      link: '/ai-predictive',
      marketPrice: '$799-1999/mo',
      benefits: 'Improve accuracy by 60% vs traditional methods'
    }
  ];

  const aiCapabilities = [
    'Natural Language Processing',
    'Machine Learning Models',
    'Deep Learning Networks',
    'Computer Vision',
    'Predictive Analytics',
    'Automated Decision Making',
    'Real-time Processing',
    'Multi-modal AI',
    'Edge Computing',
    'Custom Model Training',
    'API Integration',
    'Scalable Infrastructure'
  ];

  return (
    <>
      <SEOHead 
        title="AI Solutions - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics for modern businesses."
        keywords="AI solutions, machine learning, artificial intelligence, NLP, computer vision, predictive analytics, AI automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6">
                AI Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Call Now: +1 302 464 0950
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions Portfolio</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Comprehensive AI solutions designed to solve complex business challenges with real-world applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Market Price</div>
                      <div className="text-sm text-gray-300">{service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                    <div className="text-sm text-green-400 font-medium">{service.benefits}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <a 
                    href={service.link}
                    className={`block w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI solutions leverage cutting-edge technologies to deliver intelligent automation and insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {aiCapabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 sm:p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="relative">
                    <CpuChipIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Implement AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss your AI requirements and get a customized solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Call Now
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSolutionsPage;
