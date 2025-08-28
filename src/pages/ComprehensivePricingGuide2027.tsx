import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  FileText, 
  Users, 
  DollarSign, 
  Building, 
  Code, 
  Workflow,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Award,
  Clock,
  Target,
  Cpu,
  Database,
  Lock,
  Globe,
  Rocket
} from 'lucide-react';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'text-blue-500' },
    { id: 'ai-cybersecurity', name: 'AI & Cybersecurity', icon: Shield, color: 'text-red-500' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: BarChart3, color: 'text-green-500' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Zap, color: 'text-yellow-500' },
    { id: 'ai-content', name: 'AI & Content', icon: FileText, color: 'text-purple-500' },
    { id: 'ai-finance', name: 'AI & Finance', icon: DollarSign, color: 'text-emerald-500' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: Users, color: 'text-pink-500' },
    { id: 'ai-legal', name: 'AI & Legal', icon: Building, color: 'text-indigo-500' },
    { id: 'ai-development', name: 'AI & Development', icon: Code, color: 'text-orange-500' },
    { id: 'ai-workflow', name: 'AI & Workflow', icon: Workflow, color: 'text-cyan-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under-1000', name: 'Under $1,000', min: 0, max: 999 },
    { id: '1000-3000', name: '$1,000 - $3,000', min: 1000, max: 3000 },
    { id: '3000-5000', name: '$3,000 - $5,000', min: 3000, max: 5000 },
    { id: '5000-plus', name: '$5,000+', min: 5000, max: Infinity }
  ];

  const services = [
    {
      id: 'ai-cybersecurity-threat-intelligence',
      title: 'AI Cybersecurity Threat Intelligence Platform',
      description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and predictive security analytics.',
      category: 'ai-cybersecurity',
      price: 3999,
      billing: 'month',
      features: [
        'Real-time threat detection',
        'AI-powered anomaly detection',
        'Automated incident response',
        'Predictive threat modeling',
        'Zero-day vulnerability detection',
        'Behavioral analysis',
        'Threat hunting automation',
        'Security orchestration',
        'Compliance reporting',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce security incidents by 85%',
        'Automate 90% of security tasks',
        'Real-time threat visibility',
        'Proactive security posture',
        'Compliance automation'
      ],
      marketPrice: '$3,999 - $12,999/month',
      roi: '300-500%',
      innovationLevel: 'Cutting-Edge',
      estimatedDelivery: '8-10 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Intelligent supply chain optimization platform that uses AI and machine learning to predict demand, optimize inventory, reduce costs, and improve supply chain resilience.',
      category: 'ai-automation',
      price: 2499,
      billing: 'month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Predictive analytics',
        'Automated procurement',
        'Supply chain mapping',
        'Performance analytics'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve forecast accuracy by 40%',
        'Optimize delivery routes',
        'Reduce supply chain risks',
        'Increase operational efficiency'
      ],
      marketPrice: '$2,499 - $7,999/month',
      roi: '200-350%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-content-creation-suite',
      title: 'AI Content Creation Suite',
      description: 'Comprehensive AI-powered content creation platform that generates high-quality, SEO-optimized content across multiple formats including articles, social media posts, videos, and marketing materials.',
      category: 'ai-content',
      price: 899,
      billing: 'month',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Content planning',
        'Performance analytics',
        'Collaboration tools',
        'Content templates',
        'Multilingual support',
        'Plagiarism detection',
        'Social media automation'
      ],
      benefits: [
        'Increase content production by 500%',
        'Improve SEO rankings',
        'Maintain brand consistency',
        'Reduce content costs',
        'Faster time to market'
      ],
      marketPrice: '$899 - $2,999/month',
      roi: '150-300%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '4-6 weeks',
      supportLevel: 'Professional',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics platform that uses AI to analyze patient data, predict health outcomes, optimize treatment plans, and improve healthcare delivery efficiency.',
      category: 'ai-healthcare',
      price: 5999,
      billing: 'month',
      features: [
        'Patient outcome prediction',
        'Treatment optimization',
        'Risk assessment',
        'Population health analytics',
        'Clinical decision support',
        'Real-time monitoring',
        'Predictive modeling',
        'Data visualization',
        'Compliance reporting',
        'Integration capabilities'
      ],
      benefits: [
        'Improve patient outcomes by 25%',
        'Reduce healthcare costs by 20%',
        'Optimize treatment plans',
        'Early disease detection',
        'Enhanced clinical decision-making'
      ],
      marketPrice: '$5,999 - $19,999/month',
      roi: '400-600%',
      innovationLevel: 'Cutting-Edge',
      estimatedDelivery: '10-12 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-financial-trading',
      title: 'AI Financial Trading Platform',
      description: 'Intelligent financial trading platform that uses AI algorithms to analyze market data, identify trading opportunities, execute trades automatically, and optimize portfolio performance.',
      category: 'ai-finance',
      price: 7999,
      billing: 'month',
      features: [
        'AI-powered market analysis',
        'Algorithmic trading strategies',
        'Risk management',
        'Portfolio optimization',
        'Real-time market data',
        'Backtesting capabilities',
        'Performance analytics',
        'Compliance monitoring',
        'Multi-asset support',
        'API trading access'
      ],
      benefits: [
        'Improve trading performance by 35%',
        'Reduce trading costs',
        '24/7 market monitoring',
        'Risk mitigation',
        'Automated execution'
      ],
      marketPrice: '$7,999 - $25,999/month',
      roi: '500-800%',
      innovationLevel: 'Cutting-Edge',
      estimatedDelivery: '12-16 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-legal-document-automation',
      title: 'AI Legal Document Automation Platform',
      description: 'Intelligent legal document automation platform that uses AI to generate, review, and analyze legal documents, contracts, and agreements with high accuracy and compliance.',
      category: 'ai-legal',
      price: 1999,
      billing: 'month',
      features: [
        'Document generation',
        'Contract analysis',
        'Legal research automation',
        'Compliance checking',
        'Risk assessment',
        'Template management',
        'Collaboration tools',
        'Version control',
        'E-signature integration',
        'Audit trails'
      ],
      benefits: [
        'Reduce document creation time by 80%',
        'Improve accuracy by 95%',
        'Ensure compliance',
        'Reduce legal risks',
        'Increase productivity'
      ],
      marketPrice: '$1,999 - $6,999/month',
      roi: '200-400%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestration Platform',
      description: 'Intelligent workflow orchestration platform that uses AI to automate, optimize, and manage complex business processes across multiple systems and departments.',
      category: 'ai-workflow',
      price: 3499,
      billing: 'month',
      features: [
        'Process automation',
        'Workflow optimization',
        'Intelligent routing',
        'Performance monitoring',
        'Integration management',
        'Real-time analytics',
        'Predictive maintenance',
        'Compliance automation',
        'Mobile access',
        'API management'
      ],
      benefits: [
        'Increase process efficiency by 60%',
        'Reduce manual errors by 90%',
        'Improve compliance',
        'Reduce operational costs',
        'Enhance productivity'
      ],
      marketPrice: '$3,499 - $11,999/month',
      roi: '250-450%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-10 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-data-governance-platform',
      title: 'AI Data Governance Platform',
      description: 'Intelligent data governance platform that uses AI to manage data quality, ensure compliance, enforce policies, and provide comprehensive data lineage and governance capabilities.',
      category: 'ai-analytics',
      price: 4499,
      billing: 'month',
      features: [
        'Data quality management',
        'Compliance monitoring',
        'Policy enforcement',
        'Data lineage tracking',
        'Privacy management',
        'Risk assessment',
        'Automated classification',
        'Access controls',
        'Audit reporting',
        'Integration capabilities'
      ],
      benefits: [
        'Improve data quality by 70%',
        'Ensure compliance',
        'Reduce data risks',
        'Automate governance',
        'Enhance data trust'
      ],
      marketPrice: '$4,499 - $14,999/month',
      roi: '300-500%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '10-12 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics Platform',
      description: 'Advanced customer experience analytics platform that uses AI to analyze customer behavior, predict satisfaction, optimize touchpoints, and improve overall customer experience.',
      category: 'ai-analytics',
      price: 1799,
      billing: 'month',
      features: [
        'Customer behavior analysis',
        'Satisfaction prediction',
        'Touchpoint optimization',
        'Sentiment analysis',
        'Journey mapping',
        'Real-time monitoring',
        'Predictive analytics',
        'Personalization',
        'A/B testing',
        'Integration capabilities'
      ],
      benefits: [
        'Improve customer satisfaction by 40%',
        'Increase retention by 30%',
        'Optimize customer journeys',
        'Reduce churn',
        'Enhance personalization'
      ],
      marketPrice: '$1,799 - $5,999/month',
      roi: '180-320%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      supportLevel: 'Professional',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-financial-risk-management',
      title: 'AI Financial Risk Management Platform',
      description: 'Intelligent financial risk management platform that uses AI to identify, assess, and mitigate financial risks across portfolios, investments, and business operations.',
      category: 'ai-finance',
      price: 5499,
      billing: 'month',
      features: [
        'Risk identification',
        'Portfolio risk assessment',
        'Stress testing',
        'Scenario analysis',
        'Real-time monitoring',
        'Predictive modeling',
        'Compliance reporting',
        'Risk scoring',
        'Alert systems',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce risk exposure by 35%',
        'Improve risk visibility',
        'Automate risk assessment',
        'Ensure compliance',
        'Optimize portfolios'
      ],
      marketPrice: '$5,499 - $17,999/month',
      roi: '350-600%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '10-12 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-marketing-automation-personalization',
      title: 'AI Marketing Automation & Personalization Platform',
      description: 'Intelligent marketing automation platform that uses AI to personalize customer experiences, optimize campaigns, and automate marketing workflows for maximum engagement and ROI.',
      category: 'ai-automation',
      price: 1299,
      billing: 'month',
      features: [
        'Customer segmentation',
        'Personalized content',
        'Campaign optimization',
        'A/B testing automation',
        'Lead scoring',
        'Email automation',
        'Social media management',
        'Performance analytics',
        'Predictive analytics',
        'Integration capabilities'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Improve customer engagement',
        'Reduce marketing costs',
        'Automate workflows',
        'Enhance personalization'
      ],
      marketPrice: '$1,299 - $4,999/month',
      roi: '200-350%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      supportLevel: 'Professional',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-code-review-security-scanner',
      title: 'AI Code Review & Security Scanner',
      description: 'Intelligent code review and security scanning platform that uses AI to automatically review code, detect vulnerabilities, suggest improvements, and ensure code quality and security.',
      category: 'ai-development',
      price: 899,
      billing: 'month',
      features: [
        'Automated code review',
        'Security vulnerability detection',
        'Code quality analysis',
        'Performance optimization',
        'Best practices suggestions',
        'Integration with CI/CD',
        'Real-time scanning',
        'Custom rules engine',
        'Team collaboration',
        'Reporting dashboard'
      ],
      benefits: [
        'Reduce security vulnerabilities by 80%',
        'Improve code quality',
        'Accelerate development',
        'Ensure compliance',
        'Reduce technical debt'
      ],
      marketPrice: '$899 - $2,999/month',
      roi: '150-300%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '4-6 weeks',
      supportLevel: 'Professional',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-devops-automation-platform',
      title: 'AI DevOps Automation Platform',
      description: 'Intelligent DevOps automation platform that uses AI to optimize deployment pipelines, monitor system performance, predict failures, and automate infrastructure management.',
      category: 'ai-development',
      price: 2499,
      billing: 'month',
      features: [
        'Pipeline optimization',
        'Infrastructure automation',
        'Performance monitoring',
        'Failure prediction',
        'Auto-scaling',
        'Deployment automation',
        'Configuration management',
        'Real-time analytics',
        'Integration capabilities',
        'Compliance automation'
      ],
      benefits: [
        'Reduce deployment time by 70%',
        'Improve system reliability',
        'Automate infrastructure',
        'Predict and prevent failures',
        'Optimize performance'
      ],
      marketPrice: '$2,499 - $7,999/month',
      roi: '250-400%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-10 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-business-intelligence-analytics',
      title: 'AI Business Intelligence & Analytics Platform',
      description: 'Advanced business intelligence platform that uses AI to provide deep insights, predictive analytics, and automated reporting for data-driven decision making.',
      category: 'ai-analytics',
      price: 3999,
      billing: 'month',
      features: [
        'Advanced analytics',
        'Predictive modeling',
        'Natural language queries',
        'Automated insights',
        'Real-time dashboards',
        'Data visualization',
        'Machine learning models',
        'Integration capabilities',
        'Mobile access',
        'Collaboration tools'
      ],
      benefits: [
        'Improve decision making by 60%',
        'Automate insights generation',
        'Real-time analytics',
        'Predictive capabilities',
        'Enhanced collaboration'
      ],
      marketPrice: '$3,999 - $12,999/month',
      roi: '300-500%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-10 weeks',
      supportLevel: 'Enterprise',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-customer-experience-support',
      title: 'AI Customer Experience & Support Platform',
      description: 'Intelligent customer experience and support platform that uses AI to provide personalized support, automate responses, and optimize customer interactions across all touchpoints.',
      category: 'ai-automation',
      price: 1599,
      billing: 'month',
      features: [
        'AI-powered chatbots',
        'Personalized support',
        'Automated responses',
        'Customer journey mapping',
        'Sentiment analysis',
        'Knowledge management',
        'Integration capabilities',
        'Analytics dashboard',
        'Multi-channel support',
        'Performance monitoring'
      ],
      benefits: [
        'Improve customer satisfaction by 50%',
        'Reduce support costs by 40%',
        '24/7 availability',
        'Faster response times',
        'Personalized experiences'
      ],
      marketPrice: '$1,599 - $5,999/month',
      roi: '200-350%',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      supportLevel: 'Professional',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const selectedRange = priceRanges.find(range => range.id === selectedPriceRange);
    const matchesPrice = selectedRange && service.price >= selectedRange.min && service.price <= selectedRange.max;
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2027 - AI-Powered Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover transparent pricing for our cutting-edge AI solutions. From cybersecurity to healthcare, 
              finance to content creation - we offer competitive pricing with proven ROI and enterprise-grade support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Phone</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Address</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Pricing Tiers & ROI Expectations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">$899 - $2,999</div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Tier</h3>
              <p className="text-gray-300 mb-4">Perfect for small to medium businesses</p>
              <div className="text-green-400 font-semibold">ROI: 150-350%</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/50">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2,500 - $4,999</div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Tier</h3>
              <p className="text-gray-300 mb-4">Ideal for growing enterprises</p>
              <div className="text-green-400 font-semibold">ROI: 200-450%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$5,000+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Tier</h3>
              <p className="text-gray-300 mb-4">For large organizations</p>
              <div className="text-green-400 font-semibold">ROI: 350-800%</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-white/30 text-white hover:border-blue-400 hover:text-blue-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mr-2 ${category.color}`} />
                    {category.name}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedPriceRange === range.id
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-white/30 text-white hover:border-green-400 hover:text-green-400'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-blue-400">${service.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-400">/{service.billing}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-400">Market Price:</span>
                  <span className="text-sm text-green-400">{service.marketPrice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">ROI:</span>
                  <span className="text-sm text-yellow-400">{service.roi}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.estimatedDelivery}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    {service.supportLevel}
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  service.innovationLevel === 'Cutting-Edge' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  <Star className="w-3 h-3 mr-1" />
                  {service.innovationLevel}
                </span>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-blue-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Custom Quote for ${service.title}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Custom Quote
                </a>
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Pricing
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Proven ROI</h3>
                    <p className="text-blue-100">Our services deliver 150-800% ROI with measurable business impact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Rocket className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Rapid Deployment</h3>
                    <p className="text-blue-100">Get up and running in 4-16 weeks with our proven implementation process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Enterprise Security</h3>
                    <p className="text-blue-100">SOC 2, ISO 27001, and industry-specific compliance certifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
                    <p className="text-blue-100">Professional and enterprise support levels with dedicated account managers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Contact us today for a custom quote tailored to your business needs
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email for Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative AI-powered micro SAAS services with proven ROI and enterprise-grade support.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Phone: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Pricing Tiers</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Professional: $899 - $2,999</li>
                <li>Advanced: $2,500 - $4,999</li>
                <li>Enterprise: $5,000+</li>
                <li>Custom Solutions Available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://ziontechgroup.com" className="hover:text-blue-400">Website</a></li>
                <li><a href="https://ziontechgroup.com/services" className="hover:text-blue-400">Services</a></li>
                <li><a href="https://ziontechgroup.com/contact" className="hover:text-blue-400">Contact</a></li>
                <li><a href="https://ziontechgroup.com/about" className="hover:text-blue-400">About</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2027 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-1">
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
