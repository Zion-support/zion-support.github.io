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
  RocketLaunchIcon as RocketIcon,
  CubeIcon,
  Squares2X2Icon,
  ChartPieIcon,
  CurrencyDollarIcon as DollarIcon,
  ClockIcon as TimeIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  GlobeAltIcon as WebIcon,
  ShieldCheckIcon as SecurityIcon,
  CloudIcon as CloudServiceIcon,
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
  RocketIcon as LaunchIcon,
  CubeIcon as BlockIcon,
  Squares2X2Icon as GridIcon,
  ChartPieIcon as PieChartIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: 'AI-Powered Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time AI-driven insights and predictive analytics',
      icon: AnalyticsIcon,
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom dashboard builder',
        'Multi-source data integration',
        'Automated reporting',
        'Mobile-responsive design',
        'Advanced filtering & search',
        'Export capabilities (PDF, Excel)',
        'White-label options',
        'API access'
      ],
      price: 'Starting at $199/month',
      color: 'from-blue-500 to-cyan-500',
      category: 'Analytics & BI',
      marketPrice: '$299-499/month',
      benefits: [
        'Increase decision-making speed by 40%',
        'Reduce manual reporting by 80%',
        'Improve data accuracy by 95%',
        'Save 20+ hours per week'
      ],
      useCases: [
        'E-commerce performance tracking',
        'Marketing campaign analysis',
        'Financial reporting automation',
        'Customer behavior insights'
      ],
      href: '/ai-analytics-dashboard-pro'
    },
    {
      name: 'Smart Customer Support Bot Enterprise',
      description: 'Advanced AI chatbot with natural language processing, multi-language support, and learning capabilities',
      icon: AIIcon,
      features: [
        '24/7 automated support',
        'Multi-language support (50+ languages)',
        'Machine learning & continuous improvement',
        'Integration with CRM systems',
        'Voice & text support',
        'Sentiment analysis',
        'Escalation to human agents',
        'Custom knowledge base',
        'Analytics & reporting',
        'White-label customization'
      ],
      price: 'Starting at $299/month',
      color: 'from-purple-500 to-pink-500',
      category: 'Customer Service',
      marketPrice: '$399-799/month',
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 35%',
        'Handle 80% of inquiries automatically'
      ],
      useCases: [
        'E-commerce customer support',
        'SaaS product assistance',
        'Lead qualification',
        'FAQ automation'
      ],
      href: '/ai-chatbot-enterprise'
    },
    {
      name: 'Cloud Security Monitor Pro',
      description: 'Comprehensive security monitoring and threat detection for cloud infrastructure with compliance reporting',
      icon: SecurityIcon,
      features: [
        'Real-time threat detection',
        'Compliance monitoring (SOC2, GDPR, HIPAA)',
        'Automated security alerts',
        'Vulnerability scanning',
        'Access control monitoring',
        'Data encryption monitoring',
        'Incident response automation',
        'Security reporting dashboard',
        'Integration with SIEM tools',
        '24/7 security operations center'
      ],
      price: 'Starting at $399/month',
      color: 'from-green-500 to-emerald-500',
      category: 'Security',
      marketPrice: '$599-1299/month',
      benefits: [
        'Reduce security incidents by 85%',
        'Achieve compliance faster',
        'Lower security audit costs',
        'Improve incident response time'
      ],
      useCases: [
        'Cloud infrastructure protection',
        'Compliance management',
        'Threat intelligence',
        'Security operations'
      ],
      href: '/advanced-security-suite'
    },
    {
      name: 'Project Management Suite Pro',
      description: 'Complete project management platform with team collaboration, time tracking, and resource management',
      icon: ManagementIcon,
      features: [
        'Advanced task management',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Resource allocation',
        'Gantt charts & timelines',
        'Budget tracking',
        'Document management',
        'Mobile app access',
        'Integration with 100+ tools',
        'Custom workflows'
      ],
      price: 'Starting at $149/month',
      color: 'from-orange-500 to-red-500',
      category: 'Project Management',
      marketPrice: '$199-399/month',
      benefits: [
        'Increase team productivity by 30%',
        'Reduce project delays by 40%',
        'Improve resource utilization',
        'Better project visibility'
      ],
      useCases: [
        'Software development projects',
        'Marketing campaign management',
        'Construction project tracking',
        'Event planning'
      ],
      href: '/project-management-suite-pro'
    },
    {
      name: 'E-commerce Analytics Pro',
      description: 'Advanced analytics platform for e-commerce businesses with AI-powered insights and recommendations',
      icon: EcommerceIcon,
      features: [
        'Sales performance tracking',
        'Customer behavior analysis',
        'Inventory optimization',
        'Conversion rate optimization',
        'A/B testing tools',
        'Customer lifetime value analysis',
        'Product performance insights',
        'Marketing attribution',
        'Revenue forecasting',
        'Competitive analysis'
      ],
      price: 'Starting at $249/month',
      color: 'from-indigo-500 to-purple-500',
      category: 'E-commerce',
      marketPrice: '$349-699/month',
      benefits: [
        'Increase conversion rates by 25%',
        'Reduce cart abandonment by 30%',
        'Optimize inventory costs',
        'Improve customer retention'
      ],
      useCases: [
        'Online store optimization',
        'Product performance analysis',
        'Customer segmentation',
        'Marketing ROI tracking'
      ],
      href: '/ecommerce-analytics-pro'
    },
    {
      name: 'API Gateway Manager Pro',
      description: 'Enterprise-grade API management platform with monitoring, security, and developer tools',
      icon: InfrastructureIcon,
      features: [
        'API lifecycle management',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'API documentation generator',
        'Performance monitoring',
        'Analytics & reporting',
        'Developer portal',
        'API versioning',
        'Load balancing',
        'Security policies'
      ],
      price: 'Starting at $349/month',
      color: 'from-teal-500 to-cyan-500',
      category: 'API Management',
      marketPrice: '$499-1299/month',
      benefits: [
        'Reduce API development time by 50%',
        'Improve API security',
        'Better developer experience',
        'Centralized API management'
      ],
      useCases: [
        'Microservices architecture',
        'Third-party integrations',
        'API monetization',
        'Developer ecosystem'
      ],
      href: '/api-gateway-manager-pro'
    },
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with multiple content types and brand customization',
      icon: DesignIcon,
      features: [
        'Multi-format content generation',
        'Brand voice customization',
        'SEO optimization',
        'Content planning & scheduling',
        'Plagiarism detection',
        'Multi-language support',
        'Image generation',
        'Video script creation',
        'Social media content',
        'Content performance analytics'
      ],
      price: 'Starting at $199/month',
      color: 'from-pink-500 to-rose-500',
      category: 'Content Creation',
      marketPrice: '$299-599/month',
      benefits: [
        'Reduce content creation time by 70%',
        'Improve content quality',
        'Increase engagement rates',
        'Scale content production'
      ],
      useCases: [
        'Blog content creation',
        'Social media marketing',
        'Email marketing campaigns',
        'Product descriptions'
      ],
      href: '/ai-content-generator-pro'
    },
    {
      name: 'AI Code Assistant Pro',
      description: 'Intelligent code generation and review platform with support for multiple programming languages',
      icon: CodeIcon,
      features: [
        'Code generation & completion',
        'Bug detection & fixing',
        'Code review automation',
        'Documentation generation',
        'Refactoring suggestions',
        'Security vulnerability scanning',
        'Performance optimization',
        'Multi-language support',
        'IDE integration',
        'Team collaboration features'
      ],
      price: 'Starting at $299/month',
      color: 'from-yellow-500 to-orange-500',
      category: 'Development',
      marketPrice: '$399-799/month',
      benefits: [
        'Increase development speed by 40%',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Faster onboarding'
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
      name: 'AI Business Intelligence Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, forecasting, and automated reporting',
      icon: ReportingIcon,
      features: [
        'AI-powered insights',
        'Predictive analytics',
        'Automated reporting',
        'Data visualization',
        'Custom dashboards',
        'Real-time monitoring',
        'Data integration',
        'Mobile access',
        'Collaboration tools',
        'White-label options'
      ],
      price: 'Starting at $399/month',
      color: 'from-violet-500 to-purple-500',
      category: 'Business Intelligence',
      marketPrice: '$599-1299/month',
      benefits: [
        'Improve decision-making',
        'Reduce reporting time by 80%',
        'Increase data accuracy',
        'Better business insights'
      ],
      useCases: [
        'Executive dashboards',
        'Financial reporting',
        'Sales analytics',
        'Operational monitoring'
      ],
      href: '/ai-business-intelligence-pro'
    },
    {
      name: 'AI Automation Suite Pro',
      description: 'Comprehensive automation platform with AI-powered workflow automation and process optimization',
      icon: AutomationIcon,
      features: [
        'Workflow automation',
        'Process optimization',
        'AI decision making',
        'Integration capabilities',
        'Custom automation rules',
        'Performance monitoring',
        'Error handling',
        'Scalability options',
        'User management',
        'Analytics & reporting'
      ],
      price: 'Starting at $249/month',
      color: 'from-cyan-500 to-blue-500',
      category: 'Automation',
      marketPrice: '$349-699/month',
      benefits: [
        'Reduce manual work by 80%',
        'Improve process efficiency',
        'Reduce human errors',
        'Scale operations easily'
      ],
      useCases: [
        'Business process automation',
        'Data processing',
        'Customer onboarding',
        'Inventory management'
      ],
      href: '/ai-automation-suite-pro'
    },
    {
      name: 'AI Climate Solutions Pro',
      description: 'Advanced climate monitoring and sustainability platform with AI-powered environmental insights',
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
      price: 'Starting at $399/month',
      color: 'from-emerald-500 to-green-500',
      category: 'Sustainability',
      marketPrice: '$599-1299/month',
      benefits: [
        'Reduce carbon footprint',
        'Improve sustainability metrics',
        'Comply with regulations',
        'Optimize resource usage'
      ],
      useCases: [
        'Corporate sustainability',
        'Environmental compliance',
        'Energy management',
        'Climate risk assessment'
      ],
      href: '/ai-climate-solutions-pro'
    },
    {
      name: 'AI Agricultural Intelligence Pro',
      description: 'Smart farming platform with AI-powered crop monitoring, yield prediction, and farm management',
      icon: InnovationIcon,
      features: [
        'Crop monitoring & analysis',
        'Yield prediction',
        'Weather integration',
        'Soil analysis',
        'Pest detection',
        'Irrigation optimization',
        'Equipment monitoring',
        'Market price tracking',
        'Compliance reporting',
        'Mobile farm management'
      ],
      price: 'Starting at $299/month',
      color: 'from-lime-500 to-green-500',
      category: 'Agriculture',
      marketPrice: '$399-799/month',
      benefits: [
        'Increase crop yields by 20%',
        'Reduce water usage by 30%',
        'Optimize fertilizer usage',
        'Improve farm efficiency'
      ],
      useCases: [
        'Precision farming',
        'Crop optimization',
        'Resource management',
        'Yield forecasting'
      ],
      href: '/ai-agricultural-intelligence-pro'
    }
  ];

  const features = [
    'Scalable Cloud Architecture',
    '24/7 Expert Support',
    'Easy Integration & APIs',
    'Custom Development',
    'Enterprise Security',
    'Performance Monitoring',
    'White-label Options',
    'Mobile Responsive',
    'Multi-tenant Support',
    'Automated Backups'
  ];

  const stats = [
    { number: '100+', label: 'Micro SaaS Solutions' },
    { number: '500+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  const categories = [
    'Analytics & BI',
    'Customer Service', 
    'Security',
    'Project Management',
    'E-commerce',
    'API Management',
    'Content Creation',
    'Development',
    'Business Intelligence',
    'Automation',
    'Sustainability',
    'Agriculture'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Advanced Business Software</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to accelerate your business growth with cutting-edge AI, analytics, and automation technology. Starting from $149/month." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business software, cloud applications, AI analytics, automation, Zion Tech Group, enterprise software" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
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
                <span className="text-purple-300 font-medium">12 Categories • 100+ Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Powerful, scalable micro SaaS applications designed to solve specific business challenges and drive exponential growth with cutting-edge AI and automation.
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

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions designed to address specific business needs with enterprise-grade features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full bg-slate-700 text-gray-300">
                      {solution.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {solution.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold text-lg">
                        {solution.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {solution.marketPrice}
                      </span>
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      Save up to 40% vs market price
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                    {solution.features.slice(0, 5).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                    {solution.features.length > 5 && (
                      <li className="text-xs text-purple-400 font-medium">
                        +{solution.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="space-y-3">
                    <div className="text-xs text-gray-500">
                      <strong>Key Benefits:</strong> {solution.benefits.slice(0, 2).join(' • ')}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={solution.href}
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
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions are built with modern architecture and best practices to ensure reliability, scalability, and exceptional performance.
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
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create a custom micro SaaS solution that drives your business forward with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your Project
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

export default MicroSaaSSolutionsPage;