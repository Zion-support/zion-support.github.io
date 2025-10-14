import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  CodeBracketIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  CogIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with AI-driven insights and predictive analytics for data-driven decision making.',
      href: '/ai-analytics-dashboard-pro',
      icon: ChartBarIcon,
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Dashboards', 'Data Visualization'],
      pricing: '$2,500/month',
      category: 'Analytics',
      popular: true
    },
    {
      title: 'AI Content Generation Suite',
      description: 'Automated content creation using advanced AI for blogs, social media, marketing materials, and documentation.',
      href: '/ai-content-generation-pro',
      icon: DocumentTextIcon,
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Matching', 'Bulk Generation'],
      pricing: '$1,800/month',
      category: 'Content'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing for 24/7 customer support automation.',
      href: '/ai-customer-support-chatbot',
      icon: UserGroupIcon,
      features: ['24/7 Availability', 'Multi-language Support', 'Ticket Management', 'Human Handoff'],
      pricing: '$1,200/month',
      category: 'Customer Service'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring system powered by machine learning algorithms.',
      href: '/ai-cybersecurity-monitor-pro',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reporting', 'Incident Response'],
      pricing: '$3,200/month',
      category: 'Security'
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'Intelligent coding assistant with code generation, debugging, and optimization capabilities.',
      href: '/ai-code-assistant-pro',
      icon: CodeBracketIcon,
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Documentation'],
      pricing: '$2,000/month',
      category: 'Development'
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Comprehensive BI solution with AI-powered insights, forecasting, and automated reporting.',
      href: '/ai-business-intelligence-pro',
      icon: ChartBarIcon,
      features: ['Advanced Analytics', 'Predictive Modeling', 'Automated Reports', 'KPI Tracking'],
      pricing: '$2,800/month',
      category: 'Analytics'
    },
    {
      title: 'AI CRM Assistant',
      description: 'Smart CRM enhancement with AI-driven lead scoring, automated follow-ups, and sales predictions.',
      href: '/ai-crm-assistant',
      icon: BriefcaseIcon,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      pricing: '$1,500/month',
      category: 'Sales'
    },
    {
      title: 'AI Data Mining Pro',
      description: 'Advanced data extraction and analysis tool for uncovering hidden patterns and business insights.',
      href: '/ai-data-mining-pro',
      icon: CpuChipIcon,
      features: ['Pattern Recognition', 'Data Extraction', 'Trend Analysis', 'Custom Algorithms'],
      pricing: '$2,200/month',
      category: 'Data Science'
    },
    {
      title: 'AI Content Moderation Pro',
      description: 'Automated content moderation system using AI to maintain platform safety and compliance.',
      href: '/ai-content-moderation-pro',
      icon: ShieldCheckIcon,
      features: ['Real-time Moderation', 'Multi-language Support', 'Custom Rules', 'Audit Trails'],
      pricing: '$1,600/month',
      category: 'Moderation'
    },
    {
      title: 'AI API Manager',
      description: 'Intelligent API management platform with automated monitoring, optimization, and security.',
      href: '/ai-api-manager',
      icon: CogIcon,
      features: ['API Monitoring', 'Performance Optimization', 'Security Management', 'Usage Analytics'],
      pricing: '$1,400/month',
      category: 'API Management'
    },
    {
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and sustainability analytics platform for climate-conscious businesses.',
      href: '/ai-climate-solutions-pro',
      icon: GlobeAltIcon,
      features: ['Carbon Tracking', 'Sustainability Metrics', 'Environmental Reports', 'Green Recommendations'],
      pricing: '$2,100/month',
      category: 'Sustainability'
    },
    {
      title: 'AI Agricultural Intelligence Pro',
      description: 'Smart farming solution with crop monitoring, yield prediction, and agricultural optimization.',
      href: '/ai-agricultural-intelligence-pro',
      icon: GlobeAltIcon,
      features: ['Crop Monitoring', 'Yield Prediction', 'Weather Analysis', 'Resource Optimization'],
      pricing: '$2,600/month',
      category: 'Agriculture'
    }
  ];

  const categories = ['All', 'Analytics', 'Content', 'Customer Service', 'Security', 'Development', 'Sales', 'Data Science', 'Moderation', 'API Management', 'Sustainability', 'Agriculture'];

  const benefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SAAS solution up and running in weeks, not months',
      icon: ClockIcon
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise',
      icon: CloudIcon
    },
    {
      title: 'Cost-Effective',
      description: 'Lower upfront costs compared to traditional software development',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems and workflows',
      icon: CogIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions including AI analytics, content generation, customer support bots, cybersecurity monitoring, and more. Starting from $1,200/month." />
        <meta name="keywords" content="micro SAAS, AI solutions, business intelligence, content generation, customer support, cybersecurity, API management, data analytics" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive micro SAAS solutions including AI analytics, content generation, customer support bots, cybersecurity monitoring, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, AI-driven micro software-as-a-service solutions designed to solve specific business challenges and accelerate growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Live Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Micro SAAS solutions offer targeted functionality with lower costs and faster implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions designed to address specific business needs with precision and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes setup, training & support</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={service.href} 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span> Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$1,200<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>1 Micro SAAS Solution</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Setup & Training</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Monthly Updates</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$2,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Up to 3 Micro SAAS Solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom Integration</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Weekly Updates</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-300 block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited Solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom Development</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Real-time Updates</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss which micro SAAS solutions are perfect for your business needs. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;