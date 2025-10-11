'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 10 AI models',
        'Basic analytics',
        'Email support',
        'Standard security',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50 AI models',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        '50GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI models',
        'Custom analytics',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited storage',
        'Full API access',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div>

    <>
      <Helmet>
  
        <title>Pricing | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
          <div>
  
          <div>
  
            <h1>
  
              Simple
              <span>
  
                Pricing
              </span>
            </h1>
            <p>
  
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              {plans.map((plan, index) => (
                <div>
  
                  {plan.popular && (
                    <div>
  
                      <span>
  
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div>
  
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div>
  
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul>
  
                    {plan.features.map((feature, featureIndex) => (
                      <li>
  
                        <CheckCircle>
  
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button>
  
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Frequently Asked Questions
            </h2>
            
            <div>
  
              <div>
  
                <h3>
  
                  Can I change my plan anytime?
                </h3>
                <p>
  
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div>
  
                <h3>
  
                  Is there a free trial available?
                </h3>
                <p>
  
                  Yes, we offer a 14-day free trial for all plans. No credit card required.
                </p>
              </div>
              
              <div>
  
                <h3>
  
                  What payment methods do you accept?
                </h3>
                <p>
  
                  We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Ready to Get Started?
            </h2>
            <p>
  
              Join thousands of companies already using our platform
            </p>
            <div>
  
              <button>
  
                Start Free Trial
              </button>
              <button>
  
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;