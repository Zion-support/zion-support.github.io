import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon,
CheckIcon
  ArrowRightIcon,
PhoneIcon
  EnvelopeIcon,
CpuChipIcon
  ShieldCheckIcon,
CloudIcon } from '@heroicons/react/24/outline';
const PricingPage: React.FC = () => {,
  return null;
  const plans = [
    {
      name: 'Starter',
      price: '$2,999'
      period: '/month',
      description: 'Perfect for small businesses getting started with technology solutions',
      features: [,
        'Basic AI Solutions'
        'Standard Security'
        'Cloud Infrastructure'
        'Email Support'
        'Monthly Reports'
        'Basic Analytics'
      ]
      popular: false
    }
    {
      name: 'Professional',
      price: '$7,999'
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      features: [,
        'Advanced AI Solutions'
        'Enhanced Security'
        'Scalable Cloud Infrastructure'
        'Priority Support'
        'Weekly Reports'
        'Advanced Analytics'
        'Custom Integrations'
        '24/7 Monitoring'
      ]
      popular: true
    }
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [,
        'Custom AI Solutions'
        'Enterprise Security'
        'Multi-cloud Infrastructure'
        'Dedicated Support'
        'Real-time Reports'
        'Custom Analytics'
        'Full Customization'
        '24/7 Dedicated Support'
        'On-site Consulting'
        'SLA Guarantees'
      ]
      popular: false;
    };
  ];
  const addOns = [
    {
      name: 'AI Development',
      price: '$1,500'
      period: '/month',
      description: 'Additional AI model development and training'
    }
    {
      name: 'Security Audit',
      price: '$2,500'
      period: '/audit',
      description: 'Comprehensive security assessment and recommendations'
    }
    {
      name: 'Cloud Migration',
      price: '$5,000'
      period: '/project',
      description: 'Complete cloud infrastructure migration service'
    }
    {
      name: 'Training & Support',
      price: '$800',
      period: '/hour',
      description: 'Custom training sessions for your team';
    };
  ];
  return (
    <></>
      <Helmet /></Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, cybersecurity, cloud infrastructure, and IT solutions. Choose the plan that fits your business needs." / /></meta>
        <meta name="keywords" content="pricing, AI solutions pricing, cybersecurity pricing, cloud infrastructure pricing, IT services pricing" / /></meta>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden" /></section>
        <div className="absolute inset-0 opacity-20" /></div>
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20" /></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center" /></div>
          <div className="max-w-4 xl mx-auto" /></div>
            <h1 className="text-6 xl md: text-7 xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" />,
              Transparent Pricing
            </h1>
            <p className="text-xl md: text-2 xl text-gray-300 mb-8 leading-relaxed" />,
              Choose the Plan That Fits Your Business
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3 xl mx-auto" /></p>
              Our pricing is designed to scale with your business. Start with our Starter plan,
and upgrade as your needs grow, or go straight to Enterprise for comprehensive solutions.
            </p>
          </div>
        </section>
      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900" /></section>
        <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8" />,
          <div className="text-center mb-16" /></div>
            <h2 className="text-4 xl md: text-5 xl font-bold text-white mb-6" />,
              Our Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
              Flexible pricing options to meet your business needs
            </p>
          </div>)
          <div className="grid md: grid-cols-3 gap-8" />),
            {plans.map((plan, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}""
                  className={""
                  }""