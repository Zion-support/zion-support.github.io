import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  DocumentTextIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  MicrophoneIcon,
  CameraIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  DatabaseIcon,
  LockClosedIcon,
  BeakerIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HeartIcon,
  CurrencyDollarIcon as DollarIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  NetworkIcon
} from '@heroicons/react/24/outline';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'ai-content-generator-pro',
      title: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content creation platform with advanced natural language processing, 50+ templates, and multi-language support.',
      features: [
        '50+ Content Templates',
        'Multi-language Support (100+ languages)',
        'SEO Optimization Engine',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Social Media Integration',
        'Real-time Collaboration',
        'API Integration',
        'Analytics Dashboard',
        'Custom Workflows'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', 'Basic templates', 'Email support', 'Standard quality', '5 team members'] },
        professional: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Priority support', 'High quality', 'API access', '25 team members'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'Premium quality', 'White-label solution', 'Unlimited team members'] }
      },
      icon: DocumentTextIcon,
      category: 'Content & Marketing',
      popularity: 'Most Popular',
      applications: ['Blog Writing', 'Social Media', 'Email Marketing', 'Product Descriptions', 'SEO Content', 'Ad Copy'],
      link: '/ai-content-generator-pro',
      marketPrice: '$49-299/month',
      competitors: ['Jasper AI', 'Copy.ai', 'Writesonic']
    },
    {
      id: 'cyber-guard-monitor',
      title: 'CyberGuard Monitor',
      description: 'Advanced cybersecurity monitoring platform with real-time threat detection, vulnerability scanning, and automated incident response.',
      features: [
        'Real-time Threat Detection',
        'Vulnerability Scanning',
        'Incident Response Automation',
        'Compliance Reporting',
        '24/7 Monitoring',
        'Mobile App Alerts',
        'Threat Intelligence',
        'Security Analytics',
        'Custom Rules Engine',
        'Integration APIs'
      ],
      pricing: {
        basic: { price: 49, period: 'month', features: ['Up to 10 devices', 'Basic monitoring', 'Email alerts', 'Standard protection'] },
        professional: { price: 99, period: 'month', features: ['Up to 50 devices', 'Advanced monitoring', 'SMS alerts', 'Enhanced protection', 'Custom rules'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited devices', 'Full monitoring', 'Dedicated support', 'Maximum protection', 'Custom development'] }
      },
      icon: ShieldCheckIcon,
      category: 'Cybersecurity',
      popularity: 'Trending',
      applications: ['Threat Detection', 'Network Security', 'Endpoint Protection', 'Compliance', 'Incident Response'],
      link: '/cyber-guard-monitor',
      marketPrice: '$99-499/month',
      competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace']
    },
    {
      id: 'cloud-cost-optimizer',
      title: 'CloudCost Optimizer',
      description: 'Intelligent cloud resource optimization platform that reduces costs by up to 40% while maintaining performance and reliability.',
      features: [
        'Cost Analysis & Reporting',
        'Auto-scaling Recommendations',
        'Resource Right-sizing',
        'Waste Detection',
        'Multi-cloud Support',
        'ROI Tracking',
        'Budget Alerts',
        'Cost Forecasting',
        'Resource Tagging',
        'API Integration'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Up to $1K monthly spend', 'Basic optimization', 'Weekly reports', 'Email support'] },
        business: { price: 89, period: 'month', features: ['Up to $10K monthly spend', 'Advanced optimization', 'Daily reports', 'API access', 'Priority support'] },
        enterprise: { price: 179, period: 'month', features: ['Unlimited spend', 'Full optimization', 'Real-time monitoring', 'Dedicated support', 'Custom development'] }
      },
      icon: CloudIcon,
      category: 'Cloud & Infrastructure',
      popularity: 'New',
      applications: ['Cost Optimization', 'Resource Management', 'Budget Planning', 'Performance Tuning', 'Multi-cloud Management'],
      link: '/cloud-cost-optimizer',
      marketPrice: '$79-299/month',
      competitors: ['CloudHealth', 'Cloudability', 'Spot.io']
    },
    {
      id: 'data-viz-analytics-pro',
      title: 'DataViz Analytics Pro',
      description: 'Comprehensive business analytics platform with real-time data visualization, AI-powered insights, and automated reporting.',
      features: [
        'Real-time Dashboards',
        'Custom Data Sources',
        'AI-powered Insights',
        'Automated Reports',
        'Team Collaboration',
        'Mobile App',
        'Data Connectors',
        'Custom Visualizations',
        'Scheduled Reports',
        'White-label Options'
      ],
      pricing: {
        basic: { price: 59, period: 'month', features: ['5 dashboards', 'Basic integrations', 'Email support', 'Standard data sources'] },
        professional: { price: 129, period: 'month', features: ['Unlimited dashboards', 'All integrations', 'Priority support', 'Custom branding', 'Advanced analytics'] },
        enterprise: { price: 249, period: 'month', features: ['Advanced analytics', 'White-label', 'Dedicated support', 'Custom development', 'On-premise option'] }
      },
      icon: ChartBarIcon,
      category: 'Analytics & BI',
      popularity: 'Best Value',
      applications: ['Business Intelligence', 'Data Visualization', 'KPI Tracking', 'Performance Monitoring', 'Custom Reports'],
      link: '/data-viz-analytics-pro',
      marketPrice: '$99-399/month',
      competitors: ['Tableau', 'Power BI', 'Looker']
    },
    {
      id: 'api-gateway-manager',
      title: 'APIGateway Manager',
      description: 'Complete API management platform with monitoring, security, rate limiting, and developer portal for modern applications.',
      features: [
        'API Gateway',
        'Rate Limiting',
        'Authentication & Authorization',
        'Analytics & Monitoring',
        'Developer Portal',
        'Documentation Generator',
        'API Versioning',
        'Load Balancing',
        'Security Policies',
        'Webhook Management'
      ],
      pricing: {
        developer: { price: 19, period: 'month', features: ['Up to 10 APIs', 'Basic monitoring', 'Community support', 'Standard security'] },
        business: { price: 79, period: 'month', features: ['Up to 100 APIs', 'Advanced monitoring', 'Priority support', 'Custom domains', 'Advanced security'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited APIs', 'Full features', 'Dedicated support', 'On-premise option', 'Custom development'] }
      },
      icon: CogIcon,
      category: 'API Management',
      popularity: 'Developer Favorite',
      applications: ['API Gateway', 'Microservices', 'Developer Tools', 'API Security', 'Integration Platform'],
      link: '/api-gateway-manager',
      marketPrice: '$49-199/month',
      competitors: ['Kong', 'AWS API Gateway', 'Apigee']
    },
    {
      id: 'site-watch-monitor',
      title: 'SiteWatch Monitor',
      description: 'Website uptime monitoring and performance optimization platform with global testing locations and comprehensive reporting.',
      features: [
        'Uptime Monitoring',
        'Performance Testing',
        'Global Test Locations',
        'Alert Management',
        'Historical Reports',
        'Mobile Monitoring',
        'SSL Certificate Monitoring',
        'DNS Monitoring',
        'API Monitoring',
        'Custom Checks'
      ],
      pricing: {
        basic: { price: 9, period: 'month', features: ['Up to 5 websites', '5-minute intervals', 'Email alerts', 'Basic reporting'] },
        professional: { price: 29, period: 'month', features: ['Up to 25 websites', '1-minute intervals', 'SMS alerts', 'Advanced reports', 'API access'] },
        enterprise: { price: 79, period: 'month', features: ['Unlimited websites', '30-second intervals', 'All alert types', 'Custom monitoring', 'Dedicated support'] }
      },
      icon: GlobeAltIcon,
      category: 'Monitoring',
      popularity: 'Essential',
      applications: ['Website Monitoring', 'Performance Testing', 'Uptime Tracking', 'Alert Management', 'Performance Optimization'],
      link: '/site-watch-monitor',
      marketPrice: '$19-99/month',
      competitors: ['Pingdom', 'UptimeRobot', 'StatusCake']
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'No-code AI chatbot creation platform with natural language processing, multi-channel support, and advanced analytics.',
      features: [
        'No-code Builder',
        'Natural Language Processing',
        'Multi-channel Support',
        'Custom Training',
        'Analytics Dashboard',
        'Integration APIs',
        'Voice Recognition',
        'Multi-language Support',
        'A/B Testing',
        'Custom Branding'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Up to 1,000 conversations', 'Basic NLP', 'Email support', 'Standard templates'] },
        professional: { price: 99, period: 'month', features: ['Up to 10,000 conversations', 'Advanced NLP', 'Priority support', 'Custom integrations', 'Analytics'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited conversations', 'Custom AI models', 'Dedicated support', 'Full customization', 'White-label'] }
      },
      icon: ChatBubbleLeftRightIcon,
      category: 'AI & Automation',
      popularity: 'AI Powered',
      applications: ['Customer Support', 'Sales Assistance', 'Lead Generation', 'FAQ Automation', 'Order Processing'],
      link: '/ai-chatbot-builder',
      marketPrice: '$49-199/month',
      competitors: ['Chatfuel', 'ManyChat', 'Dialogflow']
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler Pro',
      description: 'Advanced social media management platform with AI-powered content suggestions, scheduling, and comprehensive analytics.',
      features: [
        'Multi-platform Scheduling',
        'AI Content Suggestions',
        'Visual Content Creator',
        'Analytics & Reporting',
        'Team Collaboration',
        'Hashtag Research',
        'Content Calendar',
        'Auto-posting',
        'Engagement Tracking',
        'Competitor Analysis'
      ],
      pricing: {
        basic: { price: 19, period: 'month', features: ['3 social accounts', 'Basic scheduling', 'Email support', 'Standard analytics'] },
        professional: { price: 49, period: 'month', features: ['10 social accounts', 'Advanced features', 'Priority support', 'Team collaboration', 'AI suggestions'] },
        enterprise: { price: 99, period: 'month', features: ['Unlimited accounts', 'Full features', 'Dedicated support', 'Custom branding', 'Advanced analytics'] }
      },
      icon: DevicePhoneMobileIcon,
      category: 'Social Media',
      popularity: 'Social Media',
      applications: ['Content Scheduling', 'Social Media Management', 'Analytics', 'Team Collaboration', 'Content Creation'],
      link: '/social-media-scheduler',
      marketPrice: '$29-149/month',
      competitors: ['Hootsuite', 'Buffer', 'Sprout Social']
    }
  ];

  const categories = [
    { name: 'AI & Content', count: 12, icon: CpuChipIcon, color: 'purple' },
    { name: 'Cybersecurity', count: 8, icon: ShieldCheckIcon, color: 'red' },
    { name: 'Cloud & Infrastructure', count: 15, icon: CloudIcon, color: 'blue' },
    { name: 'Analytics & BI', count: 10, icon: ChartBarIcon, color: 'green' },
    { name: 'API Management', count: 6, icon: CogIcon, color: 'yellow' },
    { name: 'Monitoring', count: 9, icon: GlobeAltIcon, color: 'cyan' },
    { name: 'Social Media', count: 7, icon: DevicePhoneMobileIcon, color: 'pink' },
    { name: 'E-commerce', count: 11, icon: BuildingOfficeIcon, color: 'orange' }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Affordable pricing starting from $9/month with no hidden fees',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process',
      icon: RocketLaunchIcon
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed',
      icon: UserGroupIcon
    },
    {
      title: 'Scalable',
      description: 'Grow with your business with flexible pricing tiers',
      icon: ChartBarIcon
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security and data protection',
      icon: LockClosedIcon
    },
    {
      title: 'Integrations',
      description: 'Connect with 100+ popular business tools',
      icon: CogIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Affordable Business Software</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI tools, cybersecurity, cloud optimization, analytics, and more. Affordable business software starting from $9/month." />
        <meta name="keywords" content="micro SAAS, business software, AI tools, cybersecurity, cloud optimization, analytics, affordable software, business solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable software solutions designed for modern businesses. Get started with our micro SAAS products and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 interactive-glow"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Try Free Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of micro SAAS solutions across different business categories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={category.name} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.count} Solutions</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Products */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Featured Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular micro SAAS solutions with competitive pricing and powerful features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={product.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    {product.popularity && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {product.popularity}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app, idx) => (
                        <span key={idx} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(product.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{tier}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      Market Price: {product.marketPrice}
                    </div>
                  </div>
                  
                  <Link 
                    to={product.link} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of our carefully crafted micro SAAS products
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started with Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our range of micro SAAS solutions and start transforming your business today. All plans include free trials and no setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-gray-300">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;
