import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
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
  SparklesIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, multi-language support, and SEO optimization.',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Social Media Integration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', 'Basic templates', 'Email support'] },
        pro: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'White-label'] }
      },
      icon: CpuChipIcon,
      category: 'AI & Content',
      popularity: 'Most Popular',
      link: '/ai-content-generator'
    },
    {
      id: 'cyber-security-monitor',
      title: 'CyberGuard Monitor',
      description: 'Real-time cybersecurity monitoring and threat detection for small to medium businesses.',
      features: [
        'Real-time Threat Detection',
        'Vulnerability Scanning',
        'Incident Response',
        'Compliance Reporting',
        '24/7 Monitoring',
        'Mobile App Alerts'
      ],
      pricing: {
        basic: { price: 49, period: 'month', features: ['Up to 10 devices', 'Basic monitoring', 'Email alerts'] },
        professional: { price: 99, period: 'month', features: ['Up to 50 devices', 'Advanced monitoring', 'SMS alerts', 'Monthly reports'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited devices', 'Full monitoring', 'Dedicated support', 'Custom reports'] }
      },
      icon: ShieldCheckIcon,
      category: 'Cybersecurity',
      popularity: 'Trending',
      link: '/cyber-security-monitor'
    },
    {
      id: 'cloud-optimizer',
      title: 'CloudCost Optimizer',
      description: 'Intelligent cloud resource optimization to reduce costs by up to 40% while maintaining performance.',
      features: [
        'Cost Analysis & Reporting',
        'Auto-scaling Recommendations',
        'Resource Right-sizing',
        'Waste Detection',
        'Multi-cloud Support',
        'ROI Tracking'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Up to $1K monthly spend', 'Basic optimization', 'Weekly reports'] },
        business: { price: 89, period: 'month', features: ['Up to $10K monthly spend', 'Advanced optimization', 'Daily reports', 'API access'] },
        enterprise: { price: 179, period: 'month', features: ['Unlimited spend', 'Full optimization', 'Real-time monitoring', 'Dedicated support'] }
      },
      icon: CloudIcon,
      category: 'Cloud & Infrastructure',
      popularity: 'New',
      link: '/cloud-optimizer'
    },
    {
      id: 'analytics-dashboard',
      title: 'DataViz Analytics Pro',
      description: 'Comprehensive business analytics dashboard with real-time data visualization and AI-powered insights.',
      features: [
        'Real-time Dashboards',
        'Custom Data Sources',
        'AI-powered Insights',
        'Automated Reports',
        'Team Collaboration',
        'Mobile App'
      ],
      pricing: {
        basic: { price: 59, period: 'month', features: ['5 dashboards', 'Basic integrations', 'Email support'] },
        professional: { price: 129, period: 'month', features: ['Unlimited dashboards', 'All integrations', 'Priority support', 'Custom branding'] },
        enterprise: { price: 249, period: 'month', features: ['Advanced analytics', 'White-label', 'Dedicated support', 'Custom development'] }
      },
      icon: ChartBarIcon,
      category: 'Analytics & BI',
      popularity: 'Best Value',
      link: '/analytics-dashboard'
    },
    {
      id: 'api-manager',
      title: 'APIGateway Manager',
      description: 'Complete API management platform with monitoring, security, and developer portal.',
      features: [
        'API Gateway',
        'Rate Limiting',
        'Authentication',
        'Analytics & Monitoring',
        'Developer Portal',
        'Documentation Generator'
      ],
      pricing: {
        developer: { price: 19, period: 'month', features: ['Up to 10 APIs', 'Basic monitoring', 'Community support'] },
        business: { price: 79, period: 'month', features: ['Up to 100 APIs', 'Advanced monitoring', 'Priority support', 'Custom domains'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited APIs', 'Full features', 'Dedicated support', 'On-premise option'] }
      },
      icon: CogIcon,
      category: 'API Management',
      popularity: 'Developer Favorite',
      link: '/api-manager'
    },
    {
      id: 'website-monitor',
      title: 'SiteWatch Monitor',
      description: 'Website uptime monitoring and performance optimization with global testing locations.',
      features: [
        'Uptime Monitoring',
        'Performance Testing',
        'Global Test Locations',
        'Alert Management',
        'Historical Reports',
        'Mobile Monitoring'
      ],
      pricing: {
        basic: { price: 9, period: 'month', features: ['Up to 5 websites', '5-minute intervals', 'Email alerts'] },
        professional: { price: 29, period: 'month', features: ['Up to 25 websites', '1-minute intervals', 'SMS alerts', 'Advanced reports'] },
        enterprise: { price: 79, period: 'month', features: ['Unlimited websites', '30-second intervals', 'All alert types', 'Custom monitoring'] }
      },
      icon: GlobeAltIcon,
      category: 'Monitoring',
      popularity: 'Essential',
      link: '/website-monitor'
    }
  ];

  const aiServices = [
    {
      id: 'ai-chatbot',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and multi-channel support.',
      pricing: { price: 99, period: 'month' },
      features: ['NLP Processing', 'Multi-channel', 'Custom Training', 'Analytics']
    },
    {
      id: 'ai-predictive',
      title: 'Predictive Analytics Engine',
      description: 'Machine learning models for business forecasting and trend analysis.',
      pricing: { price: 199, period: 'month' },
      features: ['ML Models', 'Forecasting', 'Trend Analysis', 'Custom Models']
    },
    {
      id: 'ai-automation',
      title: 'Process Automation Suite',
      description: 'AI-powered workflow automation for repetitive business processes.',
      pricing: { price: 149, period: 'month' },
      features: ['Workflow Automation', 'RPA Integration', 'Custom Workflows', 'Monitoring']
    }
  ];

  const itServices = [
    {
      id: 'managed-it',
      title: 'Managed IT Services',
      description: 'Complete IT infrastructure management and support.',
      pricing: { price: 299, period: 'month' },
      features: ['24/7 Support', 'Infrastructure Management', 'Security Monitoring', 'Backup Solutions']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime.',
      pricing: { price: 2500, period: 'one-time' },
      features: ['Zero Downtime', 'Data Migration', 'Security Setup', 'Training']
    },
    {
      id: 'cyber-security',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and vulnerability assessment.',
      pricing: { price: 1500, period: 'one-time' },
      features: ['Security Audit', 'Vulnerability Scan', 'Compliance Check', 'Remediation Plan']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, cybersecurity, cloud infrastructure, and digital transformation. Professional services with competitive pricing." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cybersecurity, cloud computing, digital transformation, business solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
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
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, affordable software solutions designed for modern businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.popularity && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {service.popularity}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{tier}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={service.link} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions to transform your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={service.id} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <CpuChipIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300">Starting at:</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        ${service.pricing.price}/{service.pricing.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT solutions and infrastructure management
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={service.id} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                    <CogIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300">Starting at:</span>
                      <span className="text-2xl font-bold text-green-400">
                        ${service.pricing.price}/{service.pricing.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
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

export default ServicesPage;
