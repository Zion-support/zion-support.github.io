import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import NeonButton from '../components/NeonButton';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Basic AI consultation (2 hours/month)',
        'Email support',
        'Monthly performance reports',
        'Up to 3 AI tools access',
        'Basic analytics dashboard',
        'Standard integrations'
      ],
      limitations: [
        'Limited to 1,000 API calls/month',
        'Basic support only',
        'No custom development'
      ],
      popular: false,
      glowColor: 'cyan' as const
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'Advanced AI consultation (8 hours/month)',
        'Priority email & phone support',
        'Weekly performance reports',
        'Access to all AI tools',
        'Advanced analytics dashboard',
        'Custom integrations',
        'API access with higher limits',
        'Training sessions included'
      ],
      limitations: [
        'Up to 10,000 API calls/month',
        'Business hours support only'
      ],
      popular: true,
      glowColor: 'purple' as const
    },
    {
      name: 'Enterprise',
      description: 'Complete AI transformation for large organizations',
      monthlyPrice: 1499,
      yearlyPrice: 14990,
      features: [
        'Unlimited AI consultation',
        '24/7 dedicated support',
        'Real-time monitoring & alerts',
        'Custom AI model development',
        'White-label solutions',
        'Dedicated account manager',
        'Unlimited API calls',
        'On-site training available',
        'SLA guarantees',
        'Custom integrations & APIs'
      ],
      limitations: [],
      popular: false,
      glowColor: 'pink' as const
    }
  ];

  const microSaasPricing = [
    {
      category: 'AI Tools',
      services: [
        { name: 'AI Content Moderator', price: 49, period: 'month' },
        { name: 'AI Sales Predictor', price: 99, period: 'month' },
        { name: 'AI Financial Forecaster', price: 149, period: 'month' },
        { name: 'AI Workflow Automator', price: 199, period: 'month' },
        { name: 'AI Document Analyzer', price: 79, period: 'month' }
      ]
    },
    {
      category: 'IT Services',
      services: [
        { name: 'Web Development', price: 5000, period: 'project' },
        { name: 'Mobile App Development', price: 15000, period: 'project' },
        { name: 'Cloud Infrastructure Setup', price: 2000, period: 'project' },
        { name: 'Database Management', price: 500, period: 'month' },
        { name: 'Network Security Audit', price: 2500, period: 'project' }
      ]
    },
    {
      category: 'Consulting',
      services: [
        { name: 'AI Strategy Consultation', price: 300, period: 'hour' },
        { name: 'Digital Transformation', price: 10000, period: 'project' },
        { name: 'Technology Assessment', price: 5000, period: 'project' },
        { name: 'Security Audit', price: 200, period: 'hour' },
        { name: 'Performance Optimization', price: 150, period: 'hour' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="AI pricing, IT services pricing, micro saas pricing, business solutions cost" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <FuturisticBackground className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for our comprehensive AI and IT services. Choose the plan that fits your business needs.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
          
          {/* Main Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={plan.name} 
                glowColor={plan.glowColor} 
                className={`relative ${plan.popular ? 'ring-2 ring-purple-500/50' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-gray-400 text-sm flex items-center">
                          <svg className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <NeonButton 
                  to="/contact" 
                  variant={plan.popular ? 'primary' : 'secondary'} 
                  className="w-full"
                >
                  Get Started
                </NeonButton>
              </FuturisticCard>
            ))}
          </div>

          {/* Micro SaaS Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center mb-12">
              Micro SaaS & Individual Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPricing.map((category, categoryIndex) => (
                <FuturisticCard key={categoryIndex} glowColor="green" className="h-full">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-b-0">
                        <span className="text-gray-300 text-sm">{service.name}</span>
                        <div className="text-right">
                          <span className="text-cyan-400 font-semibold">${service.price}</span>
                          <span className="text-gray-400 text-xs ml-1">/{service.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <FuturisticCard glowColor="blue" className="text-center p-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We offer custom pricing for enterprise solutions and specialized requirements. 
              Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton to="/contact" variant="primary" size="lg">
                Get Custom Quote
              </NeonButton>
              <NeonButton to="/contact" variant="secondary" size="lg">
                Schedule Consultation
              </NeonButton>
            </div>
            <div className="mt-8 text-sm text-gray-400 space-y-2">
              <p>📞 <strong className="text-cyan-300">Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong className="text-cyan-300">Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong className="text-cyan-300">Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </FuturisticCard>
        </div>
      </FuturisticBackground>
    </>
  );
};

export default PricingPage;