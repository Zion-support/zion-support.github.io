import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  FileText,
  Code,
  Clock
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights, predictive analytics, and customizable reports. Perfect for data-driven businesses.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile app', 'White-label options'],
      price: 'From $299/month',
      originalPrice: '$599/month',
      featured: true,
      category: 'Analytics'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection with AI-powered analysis and automated incident response.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['AI threat detection', '24/7 monitoring', 'Automated response', 'Compliance reporting', 'Vulnerability scanning', 'Security training'],
      price: 'From $499/month',
      originalPrice: '$999/month',
      featured: true,
      category: 'Security'
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption, automated backups, and advanced file sharing capabilities.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing', 'Version control', 'Access management', 'Compliance tools'],
      price: 'From $99/month',
      originalPrice: '$199/month',
      featured: true,
      category: 'Storage'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform with SEO optimization and team collaboration tools.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'SEO optimization', 'Content calendar', 'Team collaboration', 'Brand voice training', 'Multi-format output'],
      price: 'From $149/month',
      originalPrice: '$299/month',
      featured: true,
      category: 'Content'
    },
    {
      title: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated script generation for marketing and training.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-video-generator',
      features: ['AI video editing', 'Voice synthesis', 'Auto script generation', 'Template library', 'Brand customization', 'Multi-language support'],
      price: 'From $199/month',
      originalPrice: '$399/month',
      featured: true,
      category: 'Video'
    },
    {
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered data extraction, payment tracking, and financial reporting capabilities.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/zion-ai-invoice-generator',
      features: ['Auto invoice generation', 'Payment tracking', 'Financial reporting', 'Tax calculations', 'Multi-currency support', 'Integration APIs'],
      price: 'From $79/month',
      originalPrice: '$159/month',
      featured: false,
      category: 'Finance'
    },
    {
      title: 'Zion AI Customer Insights',
      description: 'Advanced customer analytics with sentiment analysis, behavior tracking, and personalized recommendation engine.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-customer-insights',
      features: ['Sentiment analysis', 'Behavior tracking', 'Personalization engine', 'Customer segmentation', 'Churn prediction', 'ROI analytics'],
      price: 'From $179/month',
      originalPrice: '$359/month',
      featured: true,
      category: 'Customer Analytics'
    },
    {
      title: 'Zion AI Email Analyzer',
      description: 'Intelligent email analysis with spam detection, sentiment analysis, and automated response suggestions for better communication.',
      icon: <Mail className="w-8 h-8" />,
      path: '/zion-ai-email-analyzer',
      features: ['Spam detection', 'Sentiment analysis', 'Auto responses', 'Email optimization', 'Template suggestions', 'Performance metrics'],
      price: 'From $59/month',
      originalPrice: '$119/month',
      featured: false,
      category: 'Communication'
    },
    {
      title: 'Zion Smart Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and manufacturing.',
      icon: <Database className="w-8 h-8" />,
      path: '/zion-smart-inventory-optimizer',
      features: ['Demand forecasting', 'Auto reordering', 'Cost optimization', 'Stock alerts', 'Supplier management', 'Analytics dashboard'],
      price: 'From $249/month',
      originalPrice: '$499/month',
      featured: true,
      category: 'Inventory'
    },
    {
      title: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time customer sentiment monitoring across all channels with automated alerts and response recommendations.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-customer-sentiment-tracker',
      features: ['Real-time monitoring', 'Multi-channel tracking', 'Automated alerts', 'Response suggestions', 'Trend analysis', 'Team notifications'],
      price: 'From $129/month',
      originalPrice: '$259/month',
      featured: false,
      category: 'Customer Service'
    },
    {
      title: 'Zion Smart Expense Categorizer',
      description: 'Automated expense categorization with receipt scanning, tax optimization, and financial reporting for businesses and individuals.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/zion-smart-expense-categorizer',
      features: ['Receipt scanning', 'Auto categorization', 'Tax optimization', 'Financial reports', 'Budget tracking', 'Integration APIs'],
      price: 'From $49/month',
      originalPrice: '$99/month',
      featured: false,
      category: 'Finance'
    },
    {
      title: 'Zion AI Voice Assistant Pro',
      description: 'Advanced voice assistant with natural language processing, task automation, and integration with business applications.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-voice-assistant-pro',
      features: ['Natural language processing', 'Task automation', 'App integration', 'Voice commands', 'Multi-language support', 'Custom training'],
      price: 'From $199/month',
      originalPrice: '$399/month',
      featured: true,
      category: 'Voice AI'
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Automated code review with bug detection, security analysis, and performance optimization suggestions for development teams.',
      icon: <Code className="w-8 h-8" />,
      path: '/zion-ai-code-reviewer',
      features: ['Bug detection', 'Security analysis', 'Performance optimization', 'Code quality metrics', 'Team collaboration', 'Integration tools'],
      price: 'From $149/month',
      originalPrice: '$299/month',
      featured: true,
      category: 'Development'
    },
    {
      title: 'Zion AI Social Media Manager',
      description: 'AI-powered social media management with content scheduling, engagement analysis, and automated posting across platforms.',
      icon: <Globe className="w-8 h-8" />,
      path: '/zion-ai-social-media-manager',
      features: ['Content scheduling', 'Engagement analysis', 'Auto posting', 'Hashtag optimization', 'Performance tracking', 'Multi-platform support'],
      price: 'From $99/month',
      originalPrice: '$199/month',
      featured: false,
      category: 'Social Media'
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'Intelligent contract analysis with risk assessment, clause extraction, and automated compliance checking for legal teams.',
      icon: <FileText className="w-8 h-8" />,
      path: '/zion-ai-contract-analyzer',
      features: ['Risk assessment', 'Clause extraction', 'Compliance checking', 'Contract comparison', 'Automated alerts', 'Legal database'],
      price: 'From $299/month',
      originalPrice: '$599/month',
      featured: true,
      category: 'Legal Tech'
    },
    {
      title: 'Zion AI Performance Optimizer',
      description: 'Website and application performance optimization with automated testing, speed analysis, and improvement recommendations.',
      icon: <Zap className="w-8 h-8" />,
      path: '/zion-ai-performance-optimizer',
      features: ['Speed analysis', 'Automated testing', 'Improvement suggestions', 'Performance monitoring', 'CDN optimization', 'Mobile optimization'],
      price: 'From $119/month',
      originalPrice: '$239/month',
      featured: false,
      category: 'Performance'
    },
    {
      title: 'Zion AI Customer Churn Predictor',
      description: 'Predict customer churn with machine learning models, early warning systems, and retention strategy recommendations.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-customer-churn-predictor',
      features: ['Churn prediction', 'Early warning systems', 'Retention strategies', 'Customer scoring', 'Intervention alerts', 'ROI tracking'],
      price: 'From $179/month',
      originalPrice: '$359/month',
      featured: true,
      category: 'Customer Analytics'
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Optimize supply chain operations with demand forecasting, route optimization, and supplier performance analysis.',
      icon: <Globe className="w-8 h-8" />,
      path: '/zion-ai-supply-chain-optimizer',
      features: ['Demand forecasting', 'Route optimization', 'Supplier analysis', 'Cost reduction', 'Risk assessment', 'Performance metrics'],
      price: 'From $279/month',
      originalPrice: '$559/month',
      featured: true,
      category: 'Supply Chain'
    },
    {
      title: 'Zion AI Financial Forecaster',
      description: 'Advanced financial forecasting with market analysis, investment recommendations, and risk assessment for financial planning.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/zion-ai-financial-forecaster',
      features: ['Financial forecasting', 'Market analysis', 'Investment recommendations', 'Risk assessment', 'Portfolio optimization', 'Tax planning'],
      price: 'From $349/month',
      originalPrice: '$699/month',
      featured: true,
      category: 'Finance'
    },
    {
      title: 'Zion AI Content Moderator',
      description: 'Automated content moderation with AI-powered detection of inappropriate content, spam filtering, and community management.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-ai-content-moderator',
      features: ['Content detection', 'Spam filtering', 'Community management', 'Automated actions', 'Custom rules', 'Analytics dashboard'],
      price: 'From $89/month',
      originalPrice: '$179/month',
      featured: false,
      category: 'Content Moderation'
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation service with real-time translation, document processing, and multi-language support for global businesses.',
      icon: <Globe className="w-8 h-8" />,
      path: '/zion-ai-translator-pro',
      features: ['Real-time translation', 'Document processing', 'Multi-language support', 'Context awareness', 'API integration', 'Quality assurance'],
      price: 'From $129/month',
      originalPrice: '$259/month',
      featured: false,
      category: 'Translation'
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Automated data cleaning and validation with duplicate detection, format standardization, and data quality reporting.',
      icon: <Database className="w-8 h-8" />,
      path: '/zion-ai-data-cleaner',
      features: ['Duplicate detection', 'Format standardization', 'Data validation', 'Quality reporting', 'Automated cleaning', 'API integration'],
      price: 'From $79/month',
      originalPrice: '$159/month',
      featured: false,
      category: 'Data Management'
    },
    {
      title: 'Zion AI Task Scheduler',
      description: 'Intelligent task scheduling with priority optimization, resource allocation, and automated deadline management.',
      icon: <Clock className="w-8 h-8" />,
      path: '/zion-ai-task-scheduler',
      features: ['Priority optimization', 'Resource allocation', 'Deadline management', 'Team coordination', 'Progress tracking', 'Automated reminders'],
      price: 'From $69/month',
      originalPrice: '$139/month',
      featured: false,
      category: 'Productivity'
    },
    {
      title: 'Zion AI Customer Support Pro',
      description: 'Advanced customer support automation with ticket routing, response generation, and knowledge base management.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-customer-support-pro',
      features: ['Ticket routing', 'Response generation', 'Knowledge base', 'Multi-channel support', 'Escalation management', 'Performance analytics'],
      price: 'From $199/month',
      originalPrice: '$399/month',
      featured: true,
      category: 'Customer Support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SAAS solutions designed to streamline your business operations. Analytics, security, cloud storage, and more." />
        <meta name="keywords" content="micro saas, business software, analytics, security, cloud storage, productivity tools" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business challenges 
              and boost productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized tools designed to address specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    product.featured ? 'border-cyan-500/30' : 'border-white/10'
                  }`}
                >
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-xs text-cyan-400 text-center">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-cyan-400 font-bold text-lg">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-gray-500 line-through text-sm">{product.originalPrice}</div>
                      )}
                    </div>
                    <Link
                      to={product.path}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with modern technology and designed for scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300">
                  Optimized for speed and performance, delivering instant results and seamless user experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
                <p className="text-gray-300">
                  Enterprise-grade security with 99.9% uptime guarantee and comprehensive data protection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
                <p className="text-gray-300">
                  Grows with your business, from startup to enterprise, with flexible pricing and features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey with our micro SAAS solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
