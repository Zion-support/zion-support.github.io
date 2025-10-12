import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Globe, Users, DollarSign, Clock, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const aiPricing = [
    {
      name: 'AI Content Generator',
      price: '$99',
      period: '/month',
      description: 'Generate high-quality content with AI assistance',
      features: ['Unlimited content generation', 'Multiple content types', 'SEO optimization', 'Brand voice customization', 'API access'],
      popular: false
    },
    {
      name: 'AI Chatbot Enterprise',
      price: '$299',
      period: '/month',
      description: 'Intelligent chatbots for customer support',
      features: ['Multi-language support', 'Custom training', 'CRM integration', 'Analytics dashboard', '24/7 support'],
      popular: true
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$199',
      period: '/month',
      description: 'Advanced business intelligence with AI insights',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'API access', 'Data visualization'],
      popular: false
    },
    {
      name: 'AI Voice Assistant',
      price: '$199',
      period: '/month',
      description: 'Advanced voice recognition and NLP',
      features: ['Voice commands', 'Multi-language support', 'Custom wake words', 'Integration APIs', 'Cloud processing'],
      popular: false
    },
    {
      name: 'AI Cybersecurity Suite',
      price: '$399',
      period: '/month',
      description: 'Comprehensive AI-powered security solutions',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring', 'Real-time alerts'],
      popular: false
    },
    {
      name: 'AI Predictive Analytics',
      price: '$299',
      period: '/month',
      description: 'Advanced machine learning for forecasting',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Custom algorithms', 'Data integration'],
      popular: false
    }
  ];

  const itPricing = [
    {
      name: 'Cloud Migration',
      price: '$2,500',
      period: '/project',
      description: 'Seamless migration to cloud platforms',
      features: ['AWS/Azure/GCP migration', 'Cost optimization', 'Security implementation', '24/7 monitoring', 'Training included'],
      popular: true
    },
    {
      name: 'Cybersecurity Solutions',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive security services',
      features: ['Threat monitoring', 'Vulnerability assessment', 'Compliance management', 'Incident response', 'Security audits'],
      popular: false
    },
    {
      name: 'Custom Software Development',
      price: '$150',
      period: '/hour',
      description: 'Tailored software solutions',
      features: ['Web applications', 'Mobile apps', 'API development', 'Legacy modernization', 'Quality assurance'],
      popular: false
    },
    {
      name: 'Database Management',
      price: '$299',
      period: '/month',
      description: 'Expert database services',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      popular: false
    },
    {
      name: 'Network Infrastructure',
      price: '$1,200',
      period: '/month',
      description: 'Robust network solutions',
      features: ['Network design', 'Hardware installation', 'Security configuration', 'Performance monitoring', 'Maintenance'],
      popular: false
    },
    {
      name: 'Mobile App Development',
      price: '$8,000',
      period: '/project',
      description: 'Native and cross-platform apps',
      features: ['iOS development', 'Android development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      popular: false
    }
  ];

  const microSaasPricing = [
    {
      name: 'AI-Powered CRM',
      price: '$99',
      period: '/month',
      description: 'Intelligent customer relationship management',
      features: ['Lead scoring & qualification', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Mobile app'],
      popular: true
    },
    {
      name: 'Smart Analytics Platform',
      price: '$149',
      period: '/month',
      description: 'Business intelligence with AI insights',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time monitoring'],
      popular: false
    },
    {
      name: 'AI Invoice Generator Pro',
      price: '$69',
      period: '/month',
      description: 'Intelligent invoice creation and billing',
      features: ['Auto-invoice generation', 'Payment tracking', 'Tax calculations', 'Multi-currency support', 'Client portal'],
      popular: false
    },
    {
      name: 'Smart Inventory Manager',
      price: '$139',
      period: '/month',
      description: 'AI-powered inventory optimization',
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Multi-location support', 'Supplier management'],
      popular: false
    },
    {
      name: 'AI Meeting Assistant',
      price: '$89',
      period: '/month',
      description: 'Intelligent meeting transcription and automation',
      features: ['Live transcription', 'Action item extraction', 'Meeting summaries', 'Calendar integration', 'Team collaboration'],
      popular: false
    },
    {
      name: 'Smart HR Management',
      price: '$199',
      period: '/month',
      description: 'AI-enhanced HR platform',
      features: ['Resume screening', 'Performance analytics', 'Employee engagement', 'Payroll integration', 'Compliance tracking'],
      popular: false
    }
  ];

  const enterprisePricing = [
    {
      name: 'Enterprise AI Suite',
      price: 'Custom',
      period: '',
      description: 'Complete AI transformation package',
      features: ['All AI services included', 'Custom development', 'Dedicated support', 'SLA guarantees', 'Training & onboarding'],
      popular: false
    },
    {
      name: 'Enterprise IT Solutions',
      price: 'Custom',
      period: '',
      description: 'Comprehensive IT infrastructure',
      features: ['Full IT management', '24/7 support', 'Security compliance', 'Disaster recovery', 'Scalable infrastructure'],
      popular: true
    },
    {
      name: 'White-Label Solutions',
      price: 'Custom',
      period: '',
      description: 'Customizable solutions for resellers',
      features: ['White-label branding', 'Custom features', 'API access', 'Multi-tenant support', 'Revenue sharing'],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6 text-blue-400" /> },
    { number: '100+', label: 'Happy Clients', icon: <Users className="w-6 h-6 text-green-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS applications. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, enterprise solutions" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Choose the perfect plan for your business needs. All our services come with 
              flexible pricing options and no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">AI Services Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Advanced AI solutions with flexible pricing options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiPricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">IT Services Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Professional IT solutions with transparent pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itPricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Micro SAAS Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Affordable micro SAAS solutions for every business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasPricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Custom solutions for large organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterprisePricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Contact Sales
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Contact us today to discuss your requirements and get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;