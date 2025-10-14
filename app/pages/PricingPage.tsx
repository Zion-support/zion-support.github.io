import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$1,200',
      period: '/month',
      icon: CpuChipIcon,
      popular: false,
      features: [
        '1 Core Service',
        'Basic Support (Email)',
        'Setup & Training',
        'Monthly Updates',
        'Standard SLA',
        'Basic Analytics'
      ],
      limitations: [
        'Limited customization',
        'Standard business hours support'
      ],
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$2,500',
      period: '/month',
      icon: ServerIcon,
      popular: true,
      features: [
        'Up to 3 Core Services',
        'Priority Support (Phone + Email)',
        'Custom Integration',
        'Weekly Updates',
        'Enhanced SLA (4 hours)',
        'Advanced Analytics',
        'Dedicated Account Manager',
        'Custom Dashboards'
      ],
      limitations: [
        'Limited to 3 services',
        'Business hours + emergency support'
      ],
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      period: '/month',
      icon: BriefcaseIcon,
      popular: false,
      features: [
        'Unlimited Services',
        '24/7 Dedicated Support',
        'Custom Development',
        'Real-time Updates',
        'Premium SLA (1 hour)',
        'Enterprise Analytics',
        'Dedicated Team',
        'Custom Solutions',
        'On-site Support',
        'Training & Workshops'
      ],
      limitations: [
        'Minimum 12-month commitment',
        'Custom pricing based on requirements'
      ],
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Solutions',
      icon: CpuChipIcon,
      services: [
        { name: 'AI Analytics Dashboard', price: '$2,500/month' },
        { name: 'AI Content Generation', price: '$1,800/month' },
        { name: 'AI Customer Support Bot', price: '$1,200/month' },
        { name: 'AI Cybersecurity Monitor', price: '$3,200/month' },
        { name: 'AI Code Assistant', price: '$2,000/month' }
      ]
    },
    {
      name: 'IT Services',
      icon: ServerIcon,
      services: [
        { name: 'Cloud Infrastructure', price: '$1,200/month' },
        { name: 'Cybersecurity Solutions', price: '$2,000/month' },
        { name: 'Network Infrastructure', price: '$1,500/month' },
        { name: 'DevOps & CI/CD', price: '$2,800/month' },
        { name: 'IT Support & Helpdesk', price: '$1,800/month' }
      ]
    },
    {
      name: 'Micro SAAS',
      icon: CodeBracketIcon,
      services: [
        { name: 'AI-Powered Analytics', price: '$2,500/month' },
        { name: 'Content Generation Suite', price: '$1,800/month' },
        { name: 'Customer Support Bot', price: '$1,200/month' },
        { name: 'API Management Platform', price: '$1,400/month' },
        { name: 'Business Intelligence Pro', price: '$2,800/month' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'Additional Support Hours',
      description: 'Extra support beyond your plan limits',
      price: '$150/hour',
      icon: ClockIcon
    },
    {
      name: 'Custom Development',
      description: 'Bespoke features and integrations',
      price: '$200/hour',
      icon: CodeBracketIcon
    },
    {
      name: 'Training & Workshops',
      description: 'Team training and skill development',
      price: '$500/session',
      icon: UserGroupIcon
    },
    {
      name: 'On-site Support',
      description: 'In-person technical support',
      price: '$300/day + travel',
      icon: GlobeAltIcon
    },
    {
      name: 'Priority Implementation',
      description: 'Expedited project delivery',
      price: '+50% of project cost',
      icon: CogIcon
    },
    {
      name: 'Extended SLA',
      description: 'Faster response times',
      price: '$500/month',
      icon: ShieldCheckIcon
    }
  ];

  const faqs = [
    {
      question: 'What is included in the setup fee?',
      answer: 'Setup includes initial configuration, data migration, integration with your existing systems, team training, and documentation. This is included in all plans at no extra cost.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we prorate any differences.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We will notify you when you approach your limits and offer options to upgrade or purchase additional services. No surprise charges.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer 10% discount for annual billing and 15% discount for multi-year contracts. Contact us for custom enterprise pricing.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all new customers. If you are not satisfied, we will refund your payment in full.'
    },
    {
      question: 'Do you provide training and documentation?',
      answer: 'Yes, all plans include comprehensive training and documentation. Enterprise plans include additional workshops and on-site training sessions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and micro SAAS development. Starting from $1,200/month. No hidden fees, 30-day money-back guarantee." />
        <meta name="keywords" content="AI solutions pricing, IT services pricing, micro SAAS pricing, technology consulting rates, Delaware IT company pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI solutions, IT services, and micro SAAS development. Starting from $1,200/month." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparent, flexible pricing for AI solutions, IT services, and micro SAAS development. 
            No hidden fees, no surprises. Choose the plan that fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  {plan.name === 'Enterprise' && (
                    <p className="text-sm text-gray-400">Custom pricing based on requirements</p>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></span>
                          <span className="text-gray-400 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  to={plan.href}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-white text-purple-900 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service-Specific <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-slate-600 last:border-b-0">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="text-purple-400 font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Quote
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Add-on <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional services to enhance your experience and meet specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 glass-dark">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Quote
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

export default PricingPage;