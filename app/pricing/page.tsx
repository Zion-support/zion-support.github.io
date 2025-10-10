'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false});;)
},
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true});;)
},
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false});;)
}
  ];

  return (
    <>
      <Helmet></Helmet>
        <titl></titl>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
=======
      <div></div>
        <div></div>
          <div></div>
            <h1></h1>
              Transparent <spa></spa>Pricing</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            </h1>
            <p></p>
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>

          <div></div>
            {plans.map((plan, index) => (
              <div></div>
                {plan.popular && (
                  <div></div>
                    <div></div>
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                );

                <div></div>
                  <h></h>{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div></div>
                    <spa></spa>{plan.price}</span>
                    <spa></spa>{plan.period}</span>
                  </div>
                </div>

                <ul></ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ));
                </ul>

                <Link></Link>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ));
          </div>

          <div></div>
            <div></div>
              <h3></h3>
                Need a Custom Solution?
              </h3>
              <p></p>
                We understand that every business is unique. Contact us for a personalized quote tailored to your specific requirements.
              </p>
              <Link></Link>
                <Zap className="w-5 h-5" />
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  ));)
};

export default PricingPage;