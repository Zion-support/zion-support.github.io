import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      price: '$29/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content calendar integration',
        'Analytics dashboard'
      ],
      category: 'Content Creation',
      popular: true,
      href: '/ai-content-generator'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard Pro',
      description: 'Comprehensive business intelligence platform with AI-powered insights and predictions.',
      price: '$49/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom report builder',
        'Automated alerts',
        'Multi-source data integration',
        'Advanced filtering',
        'Export capabilities',
        'Team collaboration tools'
      ],
      category: 'Analytics',
      popular: true,
      href: '/ai-analytics-dashboard-pro'
    },
    {
      id: 'ai-customer-support-bot',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution for 24/7 customer support with natural language processing.',
      price: '$39/month',
      features: [
        'Multi-channel support',
        'Natural language processing',
        'Custom knowledge base',
        'Escalation to human agents',
        'Multi-language support',
        'Integration with CRM',
        'Performance analytics',
        'Custom branding'
      ],
      category: 'Customer Support',
      popular: false,
      href: '/ai-customer-support-chatbot'
    },
    {
      id: 'ai-cybersecurity-monitor',
      title: 'AI Cybersecurity Monitor Pro',
      description: 'Advanced threat detection and security monitoring system with AI-powered analysis.',
      price: '$79/month',
      features: [
        'Real-time threat detection',
        'AI-powered analysis',
        'Automated incident response',
        'Compliance reporting',
        'Network monitoring',
        'Vulnerability scanning',
        'Security alerts',
        '24/7 monitoring'
      ],
      category: 'Cybersecurity',
      popular: true,
      href: '/ai-cybersecurity-monitor-pro'
    },
    {
      id: 'ai-automation-suite',
      title: 'AI Automation Suite',
      description: 'Complete workflow automation platform with AI-powered decision making and task optimization.',
      price: '$59/month',
      features: [
        'Workflow automation',
        'AI decision making',
        'Task optimization',
        'Integration with 100+ apps',
        'Custom automation rules',
        'Performance monitoring',
        'Team collaboration',
        'API access'
      ],
      category: 'Automation',
      popular: false,
      href: '/ai-automation-suite'
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with code generation, debugging, and optimization features.',
      price: '$39/month',
      features: [
        'Code generation',
        'Bug detection and fixing',
        'Code optimization',
        'Multi-language support',
        'IDE integration',
        'Code review assistance',
        'Documentation generation',
        'Team collaboration'
      ],
      category: 'Development',
      popular: true,
      href: '/ai-code-assistant-pro'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analysis platform with machine learning models and predictive analytics.',
      price: '$69/month',
      features: [
        'Machine learning models',
        'Predictive analytics',
        'Data visualization',
        'Automated insights',
        'Custom algorithms',
        'Real-time processing',
        'Data integration',
        'Advanced reporting'
      ],
      category: 'Data Analytics',
      popular: false,
      href: '/ai-data-analytics-pro'
    },
    {
      id: 'ai-content-moderation',
      title: 'AI Content Moderation Pro',
      description: 'Automated content moderation system with AI-powered detection of inappropriate content.',
      price: '$49/month',
      features: [
        'Automated content scanning',
        'Multi-format support',
        'Custom moderation rules',
        'Real-time processing',
        'Human review queue',
        'Analytics dashboard',
        'API integration',
        'Custom training models'
      ],
      category: 'Content Moderation',
      popular: false,
      href: '/ai-content-moderation-pro'
    },
    {
      id: 'ai-crm-assistant',
      title: 'AI CRM Assistant',
      description: 'Intelligent CRM enhancement with AI-powered lead scoring, customer insights, and automation.',
      price: '$59/month',
      features: [
        'AI lead scoring',
        'Customer insights',
        'Automated follow-ups',
        'Sales forecasting',
        'Integration with major CRMs',
        'Custom workflows',
        'Performance analytics',
        'Team collaboration'
      ],
      category: 'CRM',
      popular: true,
      href: '/ai-crm-assistant'
    },
    {
      id: 'ai-blockchain-analytics',
      title: 'AI Blockchain Analytics',
      description: 'Advanced blockchain data analysis platform with AI-powered insights and transaction monitoring.',
      price: '$89/month',
      features: [
        'Blockchain data analysis',
        'Transaction monitoring',
        'AI-powered insights',
        'Risk assessment',
        'Compliance reporting',
        'Real-time alerts',
        'Custom dashboards',
        'API access'
      ],
      category: 'Blockchain',
      popular: false,
      href: '/ai-blockchain-analytics'
    },
    {
      id: 'ai-climate-solutions',
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and sustainability analytics platform with AI-powered predictions.',
      price: '$99/month',
      features: [
        'Environmental monitoring',
        'Carbon footprint tracking',
        'Sustainability analytics',
        'AI predictions',
        'Compliance reporting',
        'Custom dashboards',
        'Integration capabilities',
        'Expert consultation'
      ],
      category: 'Sustainability',
      popular: false,
      href: '/ai-climate-solutions-pro'
    },
    {
      id: 'ai-agricultural-intelligence',
      title: 'AI Agricultural Intelligence Pro',
      description: 'Smart farming solution with AI-powered crop monitoring, yield prediction, and resource optimization.',
      price: '$79/month',
      features: [
        'Crop monitoring',
        'Yield prediction',
        'Resource optimization',
        'Weather integration',
        'Pest detection',
        'Soil analysis',
        'Mobile app access',
        'Expert support'
      ],
      category: 'Agriculture',
      popular: false,
      href: '/ai-agricultural-intelligence-pro'
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SaaS solutions designed to solve specific business challenges with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, content generation, analytics, cybersecurity, CRM, blockchain" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful AI-driven tools designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Our micro SaaS solutions combine cutting-edge AI technology with practical business applications 
              to help you automate processes, gain insights, and scale your operations efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
              All Categories
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className="px-6 py-2 bg-slate-800 text-gray-300 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaasServices.map((service) => (
              <div 
                key={service.id}
                className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-2 text-2xl font-bold text-white">
                      <CurrencyDollarIcon className="w-6 h-6 text-green-400" />
                      {service.price}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-3">
                  <Link 
                    to={service.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="w-full border-2 border-purple-400 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
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
              Our micro SaaS solutions are designed with enterprise-grade quality and user-friendly interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and regular security audits
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get up and running in minutes with our intuitive setup process and documentation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support from our expert team to ensure your success
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRightIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable</h3>
              <p className="text-gray-300">
                Solutions that grow with your business and adapt to your changing needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Choose the plan that works for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $29<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>1 Micro SaaS Tool</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Standard Features</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-800 to-purple-700 p-8 rounded-xl border-2 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $79<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>3 Micro SaaS Tools</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced Features</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>API Access</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $149<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited Tools</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 Premium Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom Features</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using our micro SaaS solutions to automate and scale their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
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
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}