'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, X
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServicesPricing = [
    {
      name: 'AI Analytics Dashboard Pro',
      monthly: '$299',
      yearly: '$2,990',
      description: 'Advanced business intelligence with AI insights',
      features: [
        'Real-time analytics dashboard',
        'Predictive analytics engine',
        'Custom report generation',
        'Team collaboration tools',
        'API integrations',
        'Mobile app access',
        'Data visualization tools',
        'Export to multiple formats'
      ],
      popular: true,
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Content Generator Studio',
      monthly: '$199',
      yearly: '$1,990',
      description: 'AI-powered content creation platform',
      features: [
        'Multi-language content generation',
        'SEO-optimized content',
        'Brand voice training',
        'Content scheduling & publishing',
        'Plagiarism detection',
        'Tone & style customization',
        'Image generation integration',
        'Content performance analytics'
      ],
      popular: false,
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Customer Support Pro',
      monthly: '$399',
      yearly: '$3,990',
      description: 'Intelligent 24/7 customer service solution',
      features: [
        'Multi-channel support',
        'Sentiment analysis & mood detection',
        'Automated ticket routing',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics',
        'Multi-language support',
        'Custom bot training'
      ],
      popular: false,
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'AI Workflow Automation Suite',
      monthly: '$249',
      yearly: '$2,490',
      description: 'Intelligent business process automation',
      features: [
        'Process mapping & optimization',
        'Automated workflow execution',
        'Integration with 500+ apps',
        'Performance monitoring',
        'Exception handling',
        'Custom automation rules',
        'Real-time notifications',
        'Compliance tracking'
      ],
      popular: false,
      icon: Workflow,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure Setup',
      price: '$5,000 - $25,000',
      description: 'Complete cloud migration and setup',
      features: [
        'Cloud architecture design',
        'Migration planning & execution',
        'Security configuration',
        'Performance optimization',
        'Cost optimization',
        '24/7 monitoring setup',
        'Disaster recovery planning',
        'Team training'
      ],
      popular: true,
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Cybersecurity Solutions',
      price: '$3,000 - $15,000',
      description: 'Comprehensive security assessment and implementation',
      features: [
        'Security vulnerability assessment',
        'Penetration testing',
        'Security policy development',
        'Staff security training',
        'Incident response planning',
        'Compliance audit',
        'Security monitoring setup',
        'Ongoing security support'
      ],
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Custom Web Development',
      price: '$8,000 - $50,000',
      description: 'Modern, responsive web applications',
      features: [
        'Custom web application development',
        'Responsive design implementation',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Testing & quality assurance',
        'Deployment & hosting setup',
        'Maintenance & support'
      ],
      popular: false,
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Mobile App Development',
      price: '$12,000 - $75,000',
      description: 'Native and cross-platform mobile applications',
      features: [
        'iOS & Android app development',
        'Cross-platform development',
        'App store optimization',
        'Push notification setup',
        'Offline functionality',
        'Performance optimization',
        'App store submission',
        'Maintenance & updates'
      ],
      popular: false,
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const microSaasPricing = [
    {
      name: 'Zion Analytics Pro',
      monthly: '$99',
      yearly: '$990',
      description: 'Advanced business intelligence platform',
      features: [
        'Real-time analytics dashboard',
        'AI-powered predictive insights',
        'Custom report generation',
        'Team collaboration tools',
        'API integrations',
        'Mobile app access',
        'Data visualization tools',
        'Export capabilities'
      ],
      popular: true,
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Zion Security Shield',
      monthly: '$149',
      yearly: '$1,490',
      description: 'Comprehensive cybersecurity monitoring',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security awareness training',
        '24/7 monitoring',
        'Mobile device management',
        'Firewall management'
      ],
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Zion Content Studio',
      monthly: '$69',
      yearly: '$690',
      description: 'AI-powered content creation platform',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'Brand voice training',
        'Content calendar',
        'SEO optimization',
        'Image generation',
        'Video creation tools',
        'Performance tracking'
      ],
      popular: false,
      icon: FileText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Zion CRM Intelligence',
      monthly: '$89',
      yearly: '$890',
      description: 'Smart customer relationship management',
      features: [
        'Lead scoring automation',
        'Sales forecasting',
        'Customer insights',
        'Automation workflows',
        'Email marketing',
        'Pipeline management',
        'Team collaboration',
        'Mobile CRM access'
      ],
      popular: false,
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const enterprisePricing = [
    {
      name: 'Enterprise AI Suite',
      monthly: '$2,999',
      yearly: '$29,990',
      description: 'Complete AI solution suite for large enterprises',
      features: [
        'All AI services included',
        'Unlimited users',
        'Custom AI model training',
        'Dedicated support team',
        'On-premise deployment option',
        'Custom integrations',
        'SLA guarantees',
        'Priority feature requests'
      ],
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise IT Solutions',
      price: 'Custom Pricing',
      description: 'Comprehensive IT infrastructure and support',
      features: [
        'Complete IT infrastructure setup',
        '24/7 dedicated support',
        'Custom software development',
        'Security & compliance management',
        'Cloud migration & optimization',
        'Disaster recovery planning',
        'Staff training & certification',
        'Ongoing maintenance & updates'
      ],
      popular: false,
      icon: Server,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS products. Choose the perfect plan for your business needs with flexible pricing options." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro saas pricing, business solutions, enterprise pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for all our AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transparent
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Choose the perfect plan for your business needs. All our pricing is transparent with no hidden fees. 
                Start with a free trial and scale as you grow.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="bg-gray-800 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly (Save 20%)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI solutions to transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div key={index} className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {billingCycle === 'monthly' ? service.monthly : service.yearly}
                    </div>
                    <div className="text-sm text-gray-400">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT solutions with transparent project-based pricing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServicesPricing.map((service, index) => (
                <div key={index} className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500 ${
                  service.popular ? 'ring-2 ring-cyan-500' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">one-time project</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions with flexible pricing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasPricing.map((service, index) => (
                <div key={index} className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-green-500 ${
                  service.popular ? 'ring-2 ring-green-500' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {billingCycle === 'monthly' ? service.monthly : service.yearly}
                    </div>
                    <div className="text-sm text-gray-400">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Pricing */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom solutions for large organizations with dedicated support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {enterprisePricing.map((service, index) => (
                <div key={index} className={`group relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {service.monthly || service.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.monthly ? (billingCycle === 'monthly' ? 'per month' : 'per year') : 'contact for pricing'}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Common questions about our pricing and services
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer free trials?</h3>
                <p className="text-gray-300">Yes! All our micro SAAS products come with a 14-day free trial. No credit card required to get started.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">What's included in enterprise pricing?</h3>
                <p className="text-gray-300">Enterprise plans include all features, unlimited users, dedicated support, custom integrations, SLA guarantees, and priority feature requests.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes! For large organizations with specific needs, we offer custom pricing and solutions. Contact our sales team to discuss your requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business and start transforming your operations today. 
              Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;