import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  GlobeAltIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const microSaaSPricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI tools',
      features: [
        'AI Content Generator (1,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Templates',
        '1 User Account',
        'Basic Integrations'
      ],
      popular: false,
      cta: 'Start Free Trial',
      href: '/contact'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'AI Content Generator (10,000 words/month)',
        'Advanced Analytics Dashboard',
        'Priority Support',
        'Custom Templates',
        '5 User Accounts',
        'Advanced Integrations',
        'API Access',
        'Custom Branding'
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited AI Content Generation',
        'Custom Analytics Solutions',
        '24/7 Dedicated Support',
        'Fully Customizable',
        'Unlimited User Accounts',
        'White-label Solutions',
        'Advanced API Access',
        'Custom Development',
        'SLA Guarantee'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const aiServicesPricing = [
    {
      name: 'Machine Learning Solutions',
      price: '$5,000',
      period: 'starting',
      description: 'Custom ML models for your specific business needs',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Model training & optimization',
        'Deployment & monitoring',
        '3 months support included',
        'Documentation & training'
      ],
      delivery: '4-8 weeks',
      cta: 'Get Quote',
      href: '/contact'
    },
    {
      name: 'Natural Language Processing',
      price: '$3,500',
      period: 'starting',
      description: 'Advanced text analysis and language understanding',
      features: [
        'Text classification & sentiment analysis',
        'Language translation services',
        'Chatbot development',
        'API integration',
        '2 months support included',
        'Performance optimization'
      ],
      delivery: '3-6 weeks',
      cta: 'Get Quote',
      href: '/contact'
    },
    {
      name: 'Computer Vision Solutions',
      price: '$4,500',
      period: 'starting',
      description: 'Image and video analysis for automation',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition systems',
        'Video analysis capabilities',
        '3 months support included',
        'Real-time processing'
      ],
      delivery: '4-7 weeks',
      cta: 'Get Quote',
      href: '/contact'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure Setup',
      price: '$2,000',
      period: 'starting',
      description: 'Complete cloud infrastructure design and implementation',
      features: [
        'AWS/Azure/GCP setup',
        'Security configuration',
        'Monitoring & alerting',
        'Backup strategies',
        '24/7 support (first month)',
        'Documentation & training'
      ],
      delivery: '1-2 weeks',
      cta: 'Start Project',
      href: '/contact'
    },
    {
      name: 'Cybersecurity Solutions',
      price: '$3,500',
      period: 'starting',
      description: 'Comprehensive security audit and implementation',
      features: [
        'Security assessment',
        'Threat detection setup',
        'Incident response planning',
        'Compliance management',
        '3 months monitoring',
        'Security training'
      ],
      delivery: '2-4 weeks',
      cta: 'Get Security Audit',
      href: '/contact'
    },
    {
      name: 'Web Application Development',
      price: '$5,000',
      period: 'starting',
      description: 'Custom web applications with modern technologies',
      features: [
        'Responsive design',
        'Performance optimization',
        'Security implementation',
        'SEO optimization',
        '3 months maintenance',
        'Source code delivery'
      ],
      delivery: '6-12 weeks',
      cta: 'Start Project',
      href: '/contact'
    }
  ];

  const additionalServices = [
    {
      name: 'Digital Transformation Consulting',
      price: '$10,000',
      period: 'starting',
      description: 'Strategic consulting for business modernization',
      features: ['Process analysis', 'Technology roadmap', 'Implementation planning', 'Change management'],
      delivery: '2-4 weeks',
      cta: 'Schedule Consultation',
      href: '/contact'
    },
    {
      name: '5G Network Solutions',
      price: '$15,000',
      period: 'starting',
      description: 'Next-generation 5G infrastructure development',
      features: ['Network design', 'Infrastructure setup', 'Application development', 'Performance optimization'],
      delivery: '8-16 weeks',
      cta: 'Get Quote',
      href: '/contact'
    },
    {
      name: 'Blockchain Solutions',
      price: '$12,000',
      period: 'starting',
      description: 'Secure, decentralized application development',
      features: ['Smart contract development', 'DApp creation', 'Security auditing', 'Integration services'],
      delivery: '6-14 weeks',
      cta: 'Start Project',
      href: '/contact'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI, IT, and Micro SaaS services from Zion Tech Group. Competitive rates with flexible options for businesses of all sizes." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SaaS pricing, Zion Tech Group" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI, IT, and Micro SaaS services from Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Transparent Pricing
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All our services come with transparent pricing and no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable monthly subscriptions for specialized software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaaSPricing.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl transition-all duration-300 transform hover:scale-105 border ${
                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom AI solutions tailored to your specific business requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-cyan-500">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 ml-2">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">Delivery: {service.delivery}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    {service.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services with transparent project-based pricing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServicesPricing.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-green-500">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400 ml-2">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">Delivery: {service.delivery}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                  >
                    {service.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Additional</span> Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized services for cutting-edge technologies and strategic consulting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-yellow-500">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold text-yellow-400">{service.price}</span>
                      <span className="text-gray-400 ml-2 text-sm">{service.period}</span>
                    </div>
                    <div className="text-xs text-gray-400">Delivery: {service.delivery}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    {service.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for personalized pricing based on your specific requirements and project scope.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+1-302-464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PricingPage;
