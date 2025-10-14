'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$29/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Team collaboration tools',
        'Analytics dashboard'
      ],
      category: 'AI & Content',
      icon: CpuChipIcon,
      popular: true,
      href: '/ai-content-generator'
    },
    {
      id: 'cybersecurity-monitor',
      name: 'Cybersecurity Monitor Suite',
      description: 'Real-time threat detection and security monitoring for small to medium businesses.',
      price: '$49/month',
      features: [
        '24/7 threat monitoring',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Security training modules',
        'Mobile app monitoring',
        'Custom alerts',
        'Expert support'
      ],
      category: 'Security',
      icon: ShieldCheckIcon,
      popular: false,
      href: '/cybersecurity-monitor'
    },
    {
      id: 'cloud-analytics',
      name: 'Cloud Analytics Dashboard',
      description: 'Comprehensive cloud infrastructure monitoring and cost optimization platform.',
      price: '$39/month',
      features: [
        'Multi-cloud support',
        'Cost optimization insights',
        'Performance monitoring',
        'Automated scaling',
        'Resource utilization tracking',
        'Custom dashboards',
        'API integrations',
        'Predictive analytics'
      ],
      category: 'Cloud & Infrastructure',
      icon: CloudIcon,
      popular: true,
      href: '/cloud-analytics'
    },
    {
      id: 'ai-automation',
      name: 'AI Business Automation',
      description: 'Intelligent workflow automation for repetitive business processes and tasks.',
      price: '$59/month',
      features: [
        'Workflow builder',
        'AI-powered decision making',
        'Integration with 100+ apps',
        'Custom automation rules',
        'Performance analytics',
        'Team collaboration',
        'Mobile access',
        'Priority support'
      ],
      category: 'AI & Automation',
      icon: RocketLaunchIcon,
      popular: false,
      href: '/ai-automation'
    },
    {
      id: 'customer-insights',
      name: 'Customer Insights Pro',
      description: 'Advanced customer analytics and behavior prediction using machine learning.',
      price: '$79/month',
      features: [
        'Customer segmentation',
        'Churn prediction',
        'Sentiment analysis',
        'Purchase recommendations',
        'Lifetime value calculation',
        'Real-time dashboards',
        'Email marketing integration',
        'Custom reports'
      ],
      category: 'Analytics & CRM',
      icon: ChartBarIcon,
      popular: true,
      href: '/customer-insights'
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      description: 'Complete API lifecycle management with security, monitoring, and analytics.',
      price: '$99/month',
      features: [
        'API gateway',
        'Rate limiting',
        'Authentication & authorization',
        'API documentation',
        'Performance monitoring',
        'Developer portal',
        'Version control',
        'Enterprise support'
      ],
      category: 'Development & APIs',
      icon: CogIcon,
      popular: false,
      href: '/api-management'
    }
  ];

  const categories = [
    'All Services',
    'AI & Content',
    'Security',
    'Cloud & Infrastructure',
    'AI & Automation',
    'Analytics & CRM',
    'Development & APIs'
  ];

  const benefits = [
    {
      icon: ClockIcon,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process and comprehensive documentation.'
    },
    {
      icon: UserGroupIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support from our expert team to ensure your success.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business needs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions designed to streamline your business operations with AI, automation, and cutting-edge technology." />
        <meta name="keywords" content="micro saas, saas solutions, business automation, ai tools, cloud services, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of micro SaaS solutions. 
              From AI-powered automation to advanced analytics, we provide the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg group"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions designed to address specific business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div 
                  key={service.id}
                  className={`relative bg-slate-800 rounded-xl p-6 border transition-all duration-300 hover:scale-105 group ${
                    service.popular 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                      : 'border-slate-700 hover:border-purple-400'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-sm text-gray-400">Billed monthly</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-center block group"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border border-slate-600 text-gray-300 py-3 rounded-lg hover:border-purple-400 hover:text-white transition-all duration-300 font-semibold text-center block"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide more than just software - we deliver complete business transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SaaS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg group"
              >
                Start Your Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Choosing the Right Solution?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1-302-464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;