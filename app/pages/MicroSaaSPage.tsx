import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const microSaaSServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice customization.',
      features: [
        'AI-powered blog posts, articles, and social media content',
        'Multi-language support (50+ languages)',
        'SEO optimization and keyword research',
        'Brand voice customization and tone matching',
        'Content calendar and scheduling',
        'Plagiarism detection and originality scoring',
        'Team collaboration and approval workflows',
        'Analytics and performance tracking'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', '5 team members', 'Basic templates'] },
        professional: { price: 79, period: 'month', features: ['50,000 words/month', '25 team members', 'Advanced AI models', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Unlimited team members', 'Custom AI training', 'Priority support'] }
      },
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'cyber-security-monitor',
      title: 'CyberGuard Security Monitor',
      description: 'Real-time cybersecurity monitoring and threat detection system for small to medium businesses.',
      features: [
        '24/7 real-time threat monitoring',
        'Automated vulnerability scanning',
        'Incident response and alerting',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Dark web monitoring',
        'Security awareness training',
        'Penetration testing reports',
        'Custom security policies'
      ],
      pricing: {
        basic: { price: 99, period: 'month', features: ['Up to 10 devices', 'Basic monitoring', 'Email alerts'] },
        advanced: { price: 199, period: 'month', features: ['Up to 50 devices', 'Advanced threat detection', 'SMS alerts', 'Compliance reports'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited devices', 'AI-powered analysis', '24/7 support', 'Custom integrations'] }
      },
      icon: ShieldCheckIcon,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: 'https://ziontechgroup.com/cyber-security-monitor'
    },
    {
      id: 'data-analytics-dashboard',
      title: 'DataViz Analytics Dashboard',
      description: 'Comprehensive business intelligence and data visualization platform with real-time insights.',
      features: [
        'Real-time data visualization',
        'Custom dashboard creation',
        'Automated report generation',
        'Data source integrations (50+ connectors)',
        'Predictive analytics and forecasting',
        'Mobile app for on-the-go insights',
        'Team collaboration and sharing',
        'White-label customization'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['5 dashboards', '3 data sources', 'Basic charts'] },
        professional: { price: 129, period: 'month', features: ['25 dashboards', '15 data sources', 'Advanced analytics', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited dashboards', 'Unlimited sources', 'Custom integrations', 'Dedicated support'] }
      },
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: 'https://ziontechgroup.com/data-analytics-dashboard'
    },
    {
      id: 'project-management-suite',
      title: 'ProManage Suite',
      description: 'All-in-one project management platform with AI-powered insights and team collaboration tools.',
      features: [
        'Kanban boards and Gantt charts',
        'AI-powered project insights',
        'Time tracking and resource management',
        'Team collaboration and messaging',
        'File sharing and version control',
        'Budget tracking and invoicing',
        'Client portal and reporting',
        'Mobile apps for all platforms'
      ],
      pricing: {
        basic: { price: 19, period: 'month', features: ['Up to 5 projects', '5 team members', 'Basic features'] },
        professional: { price: 49, period: 'month', features: ['Unlimited projects', '25 team members', 'Advanced features', 'Integrations'] },
        enterprise: { price: 99, period: 'month', features: ['Everything in Pro', 'Unlimited team members', 'Custom fields', 'Priority support'] }
      },
      icon: RocketLaunchIcon,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: 'https://ziontechgroup.com/project-management-suite'
    },
    {
      id: 'customer-support-chatbot',
      title: 'SupportBot AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support.',
      features: [
        'AI-powered conversation handling',
        'Multi-language support',
        'Integration with popular platforms',
        'Custom knowledge base creation',
        'Escalation to human agents',
        'Analytics and conversation insights',
        'Voice and text support',
        'Custom branding and theming'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['1,000 conversations/month', 'Basic AI', 'Email support'] },
        professional: { price: 89, period: 'month', features: ['10,000 conversations/month', 'Advanced AI', 'Phone support', 'Integrations'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'White-label'] }
      },
      icon: GlobeAltIcon,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: 'https://ziontechgroup.com/customer-support-chatbot'
    },
    {
      id: 'inventory-management-system',
      title: 'InventoryMaster Pro',
      description: 'Advanced inventory management system with barcode scanning, automated reordering, and analytics.',
      features: [
        'Barcode and QR code scanning',
        'Automated reorder points',
        'Multi-location inventory tracking',
        'Supplier management and PO creation',
        'Real-time stock alerts',
        'Inventory analytics and reporting',
        'Mobile app for field operations',
        'Integration with accounting systems'
      ],
      pricing: {
        basic: { price: 59, period: 'month', features: ['Up to 1,000 SKUs', 'Basic reporting', 'Email support'] },
        professional: { price: 129, period: 'month', features: ['Up to 10,000 SKUs', 'Advanced analytics', 'Phone support', 'Integrations'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited SKUs', 'Custom features', 'Dedicated support', 'API access'] }
      },
      icon: ChartBarIcon,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: 'https://ziontechgroup.com/inventory-management-system'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications." />
        <meta name="keywords" content="micro SaaS, business software, project management, inventory management, AI tools, cybersecurity, data analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Powerful, focused software solutions designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our micro SaaS products are built with modern technology, designed for scalability, 
              and priced for accessibility. Each solution addresses a specific business need with 
              comprehensive features and excellent support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {microSaaSServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        ${service.pricing.professional.price}
                        <span className="text-lg text-gray-400">/{service.pricing.professional.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">Professional Plan</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing Plans:</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center">
                          <div className="font-semibold text-white capitalize">{plan}</div>
                          <div className="text-gray-400">${details.price}/{details.period}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      Try Free Demo
                      <ArrowRightIcon className="w-4 h-4" />
                    </a>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro SaaS */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We focus on creating specialized tools that solve real business problems with modern technology and excellent support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Implementation</h3>
              <p className="text-gray-300">
                Get up and running in minutes, not months. Our solutions are designed for quick deployment and immediate value.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and regular security audits to protect your data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
              <p className="text-gray-300">
                Built to grow with your business. Our solutions scale automatically to handle increased load and users.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support from our expert team to ensure your success and minimize downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose from our comprehensive suite of micro SaaS solutions or let us build a custom solution for your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}