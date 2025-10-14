import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics',
        '1GB storage'
      ],
      popular: false,
      color: 'purple'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'Premium templates',
        'Advanced analytics',
        '10GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      color: 'cyan'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom templates',
        'Enterprise analytics',
        'Unlimited storage',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const consultingRates = [
    {
      service: 'AI Consulting',
      hourlyRate: 150,
      description: 'Machine learning, NLP, computer vision, and AI strategy consulting',
      features: ['Custom AI solutions', 'Model development', 'Data analysis', 'Implementation support']
    },
    {
      service: 'IT Infrastructure',
      hourlyRate: 100,
      description: 'Cloud setup, cybersecurity, DevOps, and system architecture',
      features: ['Cloud migration', 'Security audits', 'CI/CD setup', 'Performance optimization']
    },
    {
      service: 'Digital Transformation',
      hourlyRate: 200,
      description: 'Strategic planning, process optimization, and technology roadmaps',
      features: ['Strategy development', 'Process analysis', 'Technology selection', 'Change management']
    },
    {
      service: 'Custom Development',
      hourlyRate: 120,
      description: 'Custom software development, microservices, and API development',
      features: ['Custom applications', 'API development', 'Database design', 'Third-party integrations']
    }
  ];

  const projectPackages = [
    {
      name: 'Quick Start Package',
      price: 2500,
      duration: '2-3 weeks',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic AI integration',
        'Simple dashboard',
        'User authentication',
        'Basic analytics',
        'Documentation',
        '2 weeks support'
      ],
      color: 'purple'
    },
    {
      name: 'Growth Package',
      price: 7500,
      duration: '4-6 weeks',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Advanced AI features',
        'Custom dashboard',
        'Multi-user system',
        'Advanced analytics',
        'API development',
        'Mobile responsive',
        '1 month support'
      ],
      color: 'cyan',
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 15000,
      duration: '8-12 weeks',
      description: 'Full-scale enterprise solution',
      features: [
        'Complete AI suite',
        'Custom enterprise dashboard',
        'Advanced user management',
        'Enterprise analytics',
        'Full API suite',
        'Mobile app',
        'Custom integrations',
        '3 months support',
        'Dedicated project manager'
      ],
      color: 'green'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent & Competitive Pricing</title>
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and micro SaaS applications. Choose from flexible plans and packages that fit your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT consulting rates, micro SaaS pricing, enterprise solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Micro SaaS Plans */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Micro SaaS Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use micro SaaS applications with flexible pricing options
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-purple-400">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-semibold mb-4">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 glow-effect ${
                      plan.color === 'purple' 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : plan.color === 'cyan'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                    }`}
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Rates */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Consulting Rates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert consulting services with transparent hourly rates
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {consultingRates.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <h3 className="text-xl font-bold text-white mb-2 gradient-text">{service.service}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">${service.hourlyRate}</div>
                  <div className="text-sm text-gray-400 mb-4">per hour</div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Packages */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Project Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete project solutions with fixed pricing and clear deliverables
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projectPackages.map((pkg, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative ${pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{pkg.name}</h3>
                    <p className="text-gray-300 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-purple-400 mb-2">${pkg.price.toLocaleString()}</div>
                    <div className="text-gray-400">{pkg.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 glow-effect ${
                      pkg.color === 'purple' 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : pkg.color === 'cyan'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                    }`}
                  >
                    Get Quote
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We offer custom pricing for enterprise solutions and specialized projects. 
              Contact us to discuss your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact Us
                <PhoneIcon className="w-5 h-5" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Email Us
                <EnvelopeIcon className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <ClockIcon className="w-5 h-5 text-purple-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
