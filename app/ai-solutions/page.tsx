'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  DocumentTextIcon,
  CogIcon,
  LightBulbIcon,
  BeakerIcon,
  CommandLineIcon,
  CircleStackIcon,
  PresentationChartLineIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  KeyIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon,
  HeartIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  PuzzlePieceIcon,
  CubeIcon,
  Squares2X2Icon,
  ChartPieIcon,
  BrainIcon,
  MicrophoneIcon,
  CameraIcon,
  DocumentIcon,
  LanguageIcon,
  ScaleIcon,
  TruckIcon,
  HomeIcon,
  WifiIcon,
  SignalIcon,
  CpuChipIcon as AIIcon,
  ChartBarIcon as AnalyticsIcon,
  CogIcon as AutomationIcon,
  LightBulbIcon as InnovationIcon,
  BeakerIcon as ResearchIcon,
  CommandLineIcon as DevIcon,
  CircleStackIcon as DataIcon,
  PresentationChartLineIcon as ReportingIcon,
  ChatBubbleLeftRightIcon as CommunicationIcon,
  EyeIcon as MonitoringIcon,
  KeyIcon as AccessIcon,
  ServerIcon as InfrastructureIcon,
  WrenchScrewdriverIcon as MaintenanceIcon,
  AcademicCapIcon as EducationIcon,
  PaintBrushIcon as DesignIcon,
  CodeBracketIcon as CodeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ClipboardDocumentListIcon as ManagementIcon,
  BanknotesIcon as FinanceIcon,
  ShoppingCartIcon as EcommerceIcon,
  BuildingOfficeIcon as BusinessIcon,
  HeartIcon as HealthIcon,
  SparklesIcon as MagicIcon,
  BoltIcon as PowerIcon,
  FireIcon as HotIcon,
  PuzzlePieceIcon as IntegrationIcon,
  RocketLaunchIcon as LaunchIcon,
  CubeIcon as BlockIcon,
  Squares2X2Icon as GridIcon,
  ChartPieIcon as PieChartIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced AI-driven analytics platform with predictive insights and automated reporting for data-driven decision making',
      icon: AnalyticsIcon,
      features: [
        'Predictive analytics & forecasting',
        'Natural language querying',
        'Automated report generation',
        'Real-time data visualization',
        'Machine learning insights',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Anomaly detection',
        'Trend analysis',
        'ROI optimization recommendations'
      ],
      price: 'Starting at $499/month',
      color: 'from-blue-500 to-indigo-500',
      category: 'Analytics & BI',
      marketPrice: '$799-1499/month',
      benefits: [
        'Increase decision accuracy by 60%',
        'Reduce analysis time by 80%',
        'Improve forecasting accuracy by 45%',
        'Save 30+ hours per week'
      ],
      useCases: [
        'Financial forecasting',
        'Sales performance analysis',
        'Market trend prediction',
        'Operational optimization'
      ],
      href: '/ai-business-intelligence-pro'
    },
    {
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI content creation platform with multi-format support, brand customization, and SEO optimization',
      icon: DesignIcon,
      features: [
        'Multi-format content generation',
        'Brand voice customization',
        'SEO optimization',
        'Content planning & scheduling',
        'Plagiarism detection',
        'Multi-language support (100+ languages)',
        'Image & video generation',
        'Social media content',
        'Email marketing campaigns',
        'Content performance analytics'
      ],
      price: 'Starting at $299/month',
      color: 'from-pink-500 to-rose-500',
      category: 'Content Creation',
      marketPrice: '$499-999/month',
      benefits: [
        'Reduce content creation time by 75%',
        'Improve content quality by 40%',
        'Increase engagement rates by 35%',
        'Scale content production 10x'
      ],
      useCases: [
        'Blog content creation',
        'Social media marketing',
        'Email campaigns',
        'Product descriptions'
      ],
      href: '/ai-content-generation-pro'
    },
    {
      name: 'AI Customer Service Automation',
      description: 'Intelligent customer service platform with advanced NLP, sentiment analysis, and seamless human handoff',
      icon: CommunicationIcon,
      features: [
        'Advanced NLP & understanding',
        'Sentiment analysis',
        'Multi-channel support',
        'Intent recognition',
        'Automated ticket routing',
        'Knowledge base integration',
        'Human agent handoff',
        'Performance analytics',
        'Custom training',
        '24/7 availability'
      ],
      price: 'Starting at $399/month',
      color: 'from-green-500 to-emerald-500',
      category: 'Customer Service',
      marketPrice: '$699-1299/month',
      benefits: [
        'Reduce response time by 90%',
        'Increase customer satisfaction by 50%',
        'Handle 85% of inquiries automatically',
        'Reduce support costs by 70%'
      ],
      useCases: [
        'Customer support automation',
        'Lead qualification',
        'FAQ automation',
        'Order processing'
      ],
      href: '/ai-customer-service-pro'
    },
    {
      name: 'AI Code Assistant & Developer Tools',
      description: 'Advanced AI-powered development platform with code generation, review, optimization, and security analysis',
      icon: CodeIcon,
      features: [
        'Code generation & completion',
        'Bug detection & fixing',
        'Code review automation',
        'Security vulnerability scanning',
        'Performance optimization',
        'Documentation generation',
        'Refactoring suggestions',
        'Multi-language support',
        'IDE integration',
        'Team collaboration tools'
      ],
      price: 'Starting at $399/month',
      color: 'from-yellow-500 to-orange-500',
      category: 'Development',
      marketPrice: '$599-1199/month',
      benefits: [
        'Increase development speed by 50%',
        'Reduce bugs by 70%',
        'Improve code quality by 60%',
        'Faster team onboarding'
      ],
      useCases: [
        'Software development',
        'Code review automation',
        'Legacy code modernization',
        'Team training'
      ],
      href: '/ai-code-assistant-pro'
    },
    {
      name: 'AI Marketing Automation Platform',
      description: 'Comprehensive AI marketing platform with campaign optimization, audience targeting, and performance prediction',
      icon: EcommerceIcon,
      features: [
        'Campaign optimization',
        'Audience segmentation',
        'Performance prediction',
        'A/B testing automation',
        'Content personalization',
        'Channel optimization',
        'Budget allocation',
        'ROI forecasting',
        'Competitor analysis',
        'Lead scoring'
      ],
      price: 'Starting at $599/month',
      color: 'from-purple-500 to-violet-500',
      category: 'Marketing',
      marketPrice: '$999-1999/month',
      benefits: [
        'Increase conversion rates by 40%',
        'Reduce marketing costs by 30%',
        'Improve campaign ROI by 60%',
        'Automate 80% of marketing tasks'
      ],
      useCases: [
        'Email marketing campaigns',
        'Social media advertising',
        'Content marketing',
        'Lead generation'
      ],
      href: '/ai-marketing-automation-pro'
    },
    {
      name: 'AI Data Analytics & Insights',
      description: 'Advanced AI data analytics platform with automated insights, pattern recognition, and predictive modeling',
      icon: DataIcon,
      features: [
        'Automated data processing',
        'Pattern recognition',
        'Predictive modeling',
        'Real-time analytics',
        'Data visualization',
        'Statistical analysis',
        'Machine learning models',
        'Data quality assessment',
        'Custom algorithms',
        'API integrations'
      ],
      price: 'Starting at $449/month',
      color: 'from-cyan-500 to-blue-500',
      category: 'Data Analytics',
      marketPrice: '$799-1499/month',
      benefits: [
        'Uncover hidden insights',
        'Improve data accuracy by 90%',
        'Reduce analysis time by 85%',
        'Better business decisions'
      ],
      useCases: [
        'Business intelligence',
        'Customer analytics',
        'Financial modeling',
        'Risk assessment'
      ],
      href: '/ai-data-analytics-pro'
    },
    {
      name: 'AI Process Automation Suite',
      description: 'Intelligent process automation platform with workflow optimization, decision automation, and intelligent document processing',
      icon: AutomationIcon,
      features: [
        'Workflow automation',
        'Intelligent document processing',
        'Decision automation',
        'Process optimization',
        'Exception handling',
        'Integration capabilities',
        'Performance monitoring',
        'Custom automation rules',
        'Scalability options',
        'Compliance tracking'
      ],
      price: 'Starting at $349/month',
      color: 'from-teal-500 to-cyan-500',
      category: 'Automation',
      marketPrice: '$599-1199/month',
      benefits: [
        'Reduce manual work by 85%',
        'Improve process efficiency by 60%',
        'Reduce errors by 95%',
        'Scale operations easily'
      ],
      useCases: [
        'Document processing',
        'Invoice automation',
        'Customer onboarding',
        'Data entry automation'
      ],
      href: '/ai-process-automation-pro'
    },
    {
      name: 'AI Cybersecurity & Threat Detection',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, behavioral analysis, and automated response',
      icon: SecurityIcon,
      features: [
        'Threat detection & prevention',
        'Behavioral analysis',
        'Anomaly detection',
        'Automated response',
        'Risk assessment',
        'Compliance monitoring',
        'Incident investigation',
        'Security analytics',
        'Integration capabilities',
        '24/7 monitoring'
      ],
      price: 'Starting at $599/month',
      color: 'from-red-500 to-pink-500',
      category: 'Cybersecurity',
      marketPrice: '$999-1999/month',
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Improve security posture',
        'Automate incident response'
      ],
      useCases: [
        'Network security',
        'Endpoint protection',
        'Cloud security',
        'Compliance management'
      ],
      href: '/ai-cybersecurity-pro'
    },
    {
      name: 'AI Healthcare Solutions',
      description: 'Specialized AI healthcare platform with medical imaging analysis, diagnosis assistance, and patient monitoring',
      icon: HealthIcon,
      features: [
        'Medical imaging analysis',
        'Diagnosis assistance',
        'Patient monitoring',
        'Drug discovery support',
        'Treatment recommendations',
        'Clinical decision support',
        'Health risk assessment',
        'Telemedicine integration',
        'Compliance management',
        'Research analytics'
      ],
      price: 'Starting at $799/month',
      color: 'from-emerald-500 to-green-500',
      category: 'Healthcare',
      marketPrice: '$1299-2999/month',
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce diagnosis time by 50%',
        'Enhance patient outcomes',
        'Optimize treatment plans'
      ],
      useCases: [
        'Medical imaging',
        'Clinical decision support',
        'Patient monitoring',
        'Drug development'
      ],
      href: '/ai-healthcare-solutions-pro'
    },
    {
      name: 'AI Financial Services Platform',
      description: 'Comprehensive AI financial platform with fraud detection, risk assessment, algorithmic trading, and compliance automation',
      icon: FinanceIcon,
      features: [
        'Fraud detection & prevention',
        'Risk assessment & modeling',
        'Algorithmic trading',
        'Credit scoring',
        'Compliance automation',
        'Regulatory reporting',
        'Market analysis',
        'Portfolio optimization',
        'Transaction monitoring',
        'Financial forecasting'
      ],
      price: 'Starting at $699/month',
      color: 'from-amber-500 to-yellow-500',
      category: 'Financial Services',
      marketPrice: '$1199-2499/month',
      benefits: [
        'Reduce fraud by 90%',
        'Improve risk assessment accuracy',
        'Increase trading efficiency',
        'Automate compliance'
      ],
      useCases: [
        'Fraud prevention',
        'Risk management',
        'Algorithmic trading',
        'Regulatory compliance'
      ],
      href: '/ai-financial-services-pro'
    },
    {
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain platform with demand forecasting, inventory optimization, and logistics automation',
      icon: TruckIcon,
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Logistics automation',
        'Supplier management',
        'Quality control',
        'Cost optimization',
        'Risk assessment',
        'Performance monitoring',
        'Integration capabilities',
        'Sustainability tracking'
      ],
      price: 'Starting at $549/month',
      color: 'from-indigo-500 to-purple-500',
      category: 'Supply Chain',
      marketPrice: '$899-1799/month',
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve demand accuracy by 40%',
        'Optimize logistics efficiency',
        'Reduce supply chain risks'
      ],
      useCases: [
        'Inventory management',
        'Demand planning',
        'Logistics optimization',
        'Supplier relationship management'
      ],
      href: '/ai-supply-chain-pro'
    },
    {
      name: 'AI Climate & Sustainability Solutions',
      description: 'Advanced AI platform for environmental monitoring, carbon tracking, and sustainability optimization',
      icon: InnovationIcon,
      features: [
        'Environmental monitoring',
        'Carbon footprint tracking',
        'Sustainability reporting',
        'Climate risk assessment',
        'Energy optimization',
        'Waste reduction analytics',
        'Compliance monitoring',
        'Predictive modeling',
        'Stakeholder reporting',
        'Integration capabilities'
      ],
      price: 'Starting at $449/month',
      color: 'from-lime-500 to-green-500',
      category: 'Sustainability',
      marketPrice: '$799-1499/month',
      benefits: [
        'Reduce carbon footprint by 30%',
        'Improve sustainability metrics',
        'Ensure compliance',
        'Optimize resource usage'
      ],
      useCases: [
        'Corporate sustainability',
        'Environmental compliance',
        'Energy management',
        'Climate risk assessment'
      ],
      href: '/ai-climate-solutions-pro'
    }
  ];

  const features = [
    'Advanced Machine Learning',
    'Real-time Processing',
    'Scalable Cloud Infrastructure',
    '24/7 Expert Support',
    'Custom Model Training',
    'Enterprise Security',
    'API Integration',
    'White-label Solutions',
    'Performance Monitoring',
    'Compliance Ready'
  ];

  const stats = [
    { number: '200+', label: 'AI Solutions' },
    { number: '1000+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Support' }
  ];

  const categories = [
    'Analytics & BI',
    'Content Creation',
    'Customer Service',
    'Development',
    'Marketing',
    'Data Analytics',
    'Automation',
    'Cybersecurity',
    'Healthcare',
    'Financial Services',
    'Supply Chain',
    'Sustainability'
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group | Advanced Artificial Intelligence Services</title>
        <meta name="description" content="Discover our comprehensive AI solutions including machine learning, natural language processing, computer vision, and automation. Enterprise-grade AI services starting from $299/month." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, NLP, computer vision, automation, AI services, Zion Tech Group, enterprise AI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-50">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8">
                <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">12 Categories • 200+ AI Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                AI Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to automation, we deliver enterprise-grade AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/demo"
                  className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    Schedule Demo
                    <PlayIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <BuildingOfficeIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-800/50 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-slate-700 hover:border-purple-500"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive innovation across all industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full bg-slate-700 text-gray-300">
                      {service.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold text-lg">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {service.marketPrice}
                      </span>
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      Save up to 50% vs market price
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                    {service.features.slice(0, 5).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-xs text-purple-400 font-medium">
                        +{service.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="space-y-3">
                    <div className="text-xs text-gray-500">
                      <strong>Key Benefits:</strong> {service.benefits.slice(0, 2).join(' • ')}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={service.href}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-purple-500 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are built on cutting-edge technology and industry best practices to deliver exceptional results and drive business transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your AI requirements and create a comprehensive solution that drives innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;