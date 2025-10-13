import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Video, 
  FileText, 
  Users, 
  Phone, 
  Code, 
  FileCheck, 
  TrendingUp, 
  Globe, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'zion-ai-video-generator',
      title: 'Zion AI Video Generator',
      description: 'Create professional videos in minutes with our AI-powered video generation platform.',
      icon: <Video className="w-8 h-8" />,
      features: ['AI Script Generation', 'Auto Voiceover', 'Multiple Templates', 'HD Export'],
      price: '$99/month',
      rating: 4.9,
      reviews: 234,
      category: 'Content Creation'
    },
    {
      id: 'zion-ai-invoice-generator',
      title: 'Zion AI Invoice Generator',
      description: 'Automate invoice creation and management with intelligent AI assistance.',
      icon: <FileText className="w-8 h-8" />,
      features: ['Auto Invoice Creation', 'Payment Tracking', 'Tax Calculations', 'Client Management'],
      price: '$49/month',
      rating: 4.8,
      reviews: 189,
      category: 'Business Tools'
    },
    {
      id: 'zion-ai-customer-insights',
      title: 'Zion AI Customer Insights',
      description: 'Gain deep insights into customer behavior and preferences with AI analytics.',
      icon: <Users className="w-8 h-8" />,
      features: ['Customer Segmentation', 'Behavior Analysis', 'Predictive Analytics', 'Custom Reports'],
      price: '$149/month',
      rating: 4.9,
      reviews: 156,
      category: 'Analytics'
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      title: 'Zion AI Voice Assistant Pro',
      description: 'Build custom voice assistants for your business with advanced AI capabilities.',
      icon: <Phone className="w-8 h-8" />,
      features: ['Voice Recognition', 'Natural Language Processing', 'Custom Commands', 'Multi-language'],
      price: '$199/month',
      rating: 4.8,
      reviews: 98,
      category: 'AI Assistant'
    },
    {
      id: 'zion-ai-code-reviewer',
      title: 'Zion AI Code Reviewer',
      description: 'Automate code reviews and improve code quality with AI-powered analysis.',
      icon: <Code className="w-8 h-8" />,
      features: ['Code Quality Analysis', 'Security Scanning', 'Performance Optimization', 'Best Practices'],
      price: '$79/month',
      rating: 4.9,
      reviews: 167,
      category: 'Development'
    },
    {
      id: 'zion-ai-contract-analyzer',
      title: 'Zion AI Contract Analyzer',
      description: 'Analyze and review contracts with AI-powered legal document processing.',
      icon: <FileCheck className="w-8 h-8" />,
      features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
      price: '$129/month',
      rating: 4.8,
      reviews: 89,
      category: 'Legal Tech'
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Optimize your supply chain operations with AI-driven insights and recommendations.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Cost Analysis'],
      price: '$299/month',
      rating: 4.9,
      reviews: 134,
      category: 'Supply Chain'
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Professional translation services powered by advanced AI technology.',
      icon: <Globe className="w-8 h-8" />,
      features: ['100+ Languages', 'Context Awareness', 'Industry-Specific', 'Real-time Translation'],
      price: '$59/month',
      rating: 4.8,
      reviews: 201,
      category: 'Translation'
    },
    {
      id: 'zion-ai-data-cleaner',
      title: 'Zion AI Data Cleaner',
      description: 'Clean and prepare your data with intelligent AI-powered data processing.',
      icon: <Database className="w-8 h-8" />,
      features: ['Data Validation', 'Duplicate Detection', 'Format Standardization', 'Quality Scoring'],
      price: '$89/month',
      rating: 4.7,
      reviews: 112,
      category: 'Data Management'
    }
  ];

  const categories = ['All', 'Content Creation', 'Business Tools', 'Analytics', 'AI Assistant', 'Development', 'Legal Tech', 'Supply Chain', 'Translation', 'Data Management'];

  const benefits = [
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance and optimize with detailed analytics.',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. AI-powered tools for every business need."
        keywords="micro SAAS, business tools, AI solutions, productivity software, business automation, SaaS tools"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Package className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SAAS</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-driven micro SAAS solutions designed to streamline your business operations. 
              Choose from our comprehensive suite of tools that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS Solutions?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our micro SAAS products are designed to be powerful, easy to use, and cost-effective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Micro SAAS Products</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of AI-powered micro SAAS solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-blue-400">
                      {product.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold text-lg">{product.price}</span>
                  <Link
                    to={`/${product.id}`}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;