import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Cloud, Database, Smartphone, Lock, BarChart, Users, Code, Palette, Search, MessageSquare, FileText, Settings, Target, TrendingUp, DollarSign, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" /> },
    { id: 'saas', name: 'Micro SAAS', icon: <Cloud className="w-5 h-5" /> },
    { id: 'it', name: 'IT Solutions', icon: <Settings className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" /> }
  ];

  const aiServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing',
      price: '$99/month',
      features: ['Unlimited content generation', 'Multi-language support', 'SEO optimization', 'Brand voice customization'],
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      link: '/ai-content-generator',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive modeling', 'Data visualization', 'Automated reporting'],
      icon: <BarChart className="w-8 h-8 text-green-500" />,
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with 24/7 customer service capabilities',
      price: '$79/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      link: '/ai-customer-support-bot',
      popular: false
    },
    {
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant with code review and optimization',
      price: '$199/month',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation generation'],
      icon: <Code className="w-8 h-8 text-orange-500" />,
      link: '/ai-code-assistant',
      popular: true
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring system',
      price: '$299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Compliance reporting'],
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/ai-cybersecurity-monitor',
      popular: false
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing and data extraction',
      price: '$129/month',
      features: ['OCR technology', 'Data extraction', 'Form processing', 'Document classification'],
      icon: <FileText className="w-8 h-8 text-indigo-500" />,
      link: '/ai-document-processor',
      popular: false
    }
  ];

  const saasServices = [
    {
      title: 'Project Management Suite',
      description: 'Complete project management with team collaboration tools',
      price: '$49/month',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Resource planning'],
      icon: <Target className="w-8 h-8 text-blue-500" />,
      link: '/project-management-suite',
      popular: true
    },
    {
      title: 'CRM & Sales Automation',
      description: 'Customer relationship management with sales pipeline automation',
      price: '$89/month',
      features: ['Lead management', 'Sales pipeline', 'Email automation', 'Performance tracking'],
      icon: <Users className="w-8 h-8 text-green-500" />,
      link: '/crm-sales-automation',
      popular: false
    },
    {
      title: 'Email Marketing Platform',
      description: 'Advanced email marketing with automation and analytics',
      price: '$39/month',
      features: ['Email templates', 'Automation workflows', 'A/B testing', 'Analytics dashboard'],
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      link: '/email-marketing-platform',
      popular: false
    },
    {
      title: 'Financial Analytics Tool',
      description: 'Comprehensive financial analysis and reporting platform',
      price: '$159/month',
      features: ['Financial reporting', 'Budget tracking', 'Forecasting', 'Compliance monitoring'],
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      link: '/financial-analytics-tool',
      popular: true
    },
    {
      title: 'Inventory Management System',
      description: 'Smart inventory tracking with predictive analytics',
      price: '$69/month',
      features: ['Stock tracking', 'Reorder alerts', 'Supplier management', 'Demand forecasting'],
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      link: '/inventory-management-system',
      popular: false
    },
    {
      title: 'HR Management Platform',
      description: 'Complete human resources management solution',
      price: '$79/month',
      features: ['Employee records', 'Payroll management', 'Performance reviews', 'Recruitment tools'],
      icon: <Users className="w-8 h-8 text-pink-500" />,
      link: '/hr-management-platform',
      popular: false
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud migration and infrastructure optimization',
      price: 'Starting at $2,999',
      features: ['Cloud migration', 'Infrastructure design', 'Security implementation', '24/7 monitoring'],
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      link: '/cloud-infrastructure-setup',
      popular: true
    },
    {
      title: '5G Network Implementation',
      description: 'Next-generation 5G network deployment and optimization',
      price: 'Starting at $15,999',
      features: ['5G deployment', 'Network optimization', 'IoT integration', 'Performance monitoring'],
      icon: <Globe className="w-8 h-8 text-green-500" />,
      link: '/5g-implementation',
      popular: false
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and vulnerability testing',
      price: 'Starting at $1,999',
      features: ['Security audit', 'Penetration testing', 'Compliance check', 'Remediation plan'],
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/cybersecurity-audit',
      popular: false
    },
    {
      title: 'Database Optimization',
      description: 'Database performance tuning and optimization services',
      price: 'Starting at $1,499',
      features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Backup strategy'],
      icon: <Database className="w-8 h-8 text-purple-500" />,
      link: '/database-optimization',
      popular: false
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations',
      price: 'Starting at $2,499',
      features: ['Custom API design', 'Integration development', 'Documentation', 'Testing & deployment'],
      icon: <Code className="w-8 h-8 text-orange-500" />,
      link: '/api-development-integration',
      popular: true
    },
    {
      title: 'DevOps Implementation',
      description: 'Complete DevOps pipeline setup and automation',
      price: 'Starting at $3,999',
      features: ['CI/CD pipeline', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      link: '/devops-implementation',
      popular: false
    }
  ];

  const mobileServices = [
    {
      title: 'iOS App Development',
      description: 'Native iOS app development with modern design patterns',
      price: 'Starting at $4,999',
      features: ['Native iOS development', 'App Store optimization', 'Push notifications', 'Analytics integration'],
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      link: '/ios-app-development',
      popular: true
    },
    {
      title: 'Android App Development',
      description: 'Native Android app development with Material Design',
      price: 'Starting at $4,999',
      features: ['Native Android development', 'Google Play optimization', 'Material Design', 'Performance optimization'],
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      link: '/android-app-development',
      popular: false
    },
    {
      title: 'Cross-Platform App Development',
      description: 'React Native and Flutter cross-platform development',
      price: 'Starting at $6,999',
      features: ['Cross-platform development', 'Single codebase', 'Native performance', 'Rapid deployment'],
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      link: '/cross-platform-app-development',
      popular: true
    },
    {
      title: 'Progressive Web App (PWA)',
      description: 'Modern web app with native app-like experience',
      price: 'Starting at $3,999',
      features: ['Offline functionality', 'Push notifications', 'App-like experience', 'Cross-platform compatibility'],
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      link: '/progressive-web-app',
      popular: false
    }
  ];

  const getCurrentServices = () => {
    switch (activeCategory) {
      case 'ai': return aiServices;
      case 'saas': return saasServices;
      case 'it': return itServices;
      case 'mobile': return mobileServices;
      default: return aiServices;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and micro SAAS services. From AI content generation to 5G implementation, we provide cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, mobile app development, cloud services, 5G implementation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation. From AI-powered tools to enterprise IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentServices().map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                  <div className="text-gray-400 text-sm">per month</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-3">
                  <Link 
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="border-2 border-white/30 text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;