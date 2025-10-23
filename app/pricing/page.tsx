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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      price: '$500/month',
      description: 'Access to premium AI models and algorithms'
    },
    {
      name: 'Extended Support',
      price: '$1,000/month',
      description: '24/7 phone and chat support with dedicated account manager'
    },
    {
      name: 'Custom Integrations',
      price: '$2,000/month',
      description: 'Integration with your existing systems and workflows'
    },
    {
      name: 'Training & Consulting',
      price: '$1,500/day',
      description: 'On-site training and consulting services'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title><>
<//title>
<meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." /><>
</meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
<meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" /><>
</meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
<meta property="og:title" content="Pricing - Zion Tech Group" /><>
</meta property="og:title" content="Pricing - Zion Tech Group" />
<meta property="og:description" content="Transparent pricing for AI and IT solutions" /><>
</meta property="og:description" content="Transparent pricing for AI and IT solutions" />
<meta property="og:type" content="website" /><>
</meta property="og:type" content="website" />
<meta property="og:url" content="https://ziontechgroup.com/pricing" /><>
</meta property="og:url" content="https://ziontechgroup.com/pricing" />
</Helmet><//Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"><>
</section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold mb-6"></h1><//h1>
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span><>
<//span>
</h1><>
<//h1>
<p className="text-xl md:text-2xl mb-8 text-blue-100"></p><//p>
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Pricing Plans */}
      <section className="py-20 bg-white"><>
</section className="py-20 bg-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<div className="grid md:grid-cols-3 gap-8"></div><//div>
              {plans.map((plan, index) => (</div><>
<//div>
<div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}></div><//div>
                  {plan.popular && (</div><>
<//div>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div><>
<//div>
<span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1"><>
</span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
<Star className="w-4 h-4" /></Star className="w-4 h-4" />
                        Most Popular
                      </span><>
<//span>
</div><//div>
                  )}
                  
                  <div className="text-center mb-8"></div><>
<//div>
<h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3><>
<//h3>
<p className="text-gray-600 mb-6">{plan.description}</p><>
<//p>
<div className="flex items-baseline justify-center"></div><>
<//div>
<span className="text-4xl font-bold text-gray-900">{plan.price}</span><>
<//span>
<span className="text-gray-600 ml-2">{plan.period}</span><>
<//span>
</div><>
<//div>
</div><>
<//div>
<ul className="space-y-4 mb-8"></ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center"><>
</li key={featureIndex} className="flex items-center">
<CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
<span className="text-gray-600">{feature}</span><>
<//span>
</li><//li>
                    ))}
                  </ul><>
<//ul>
<button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}></button><//button>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</button><>
<//button>
</button><>
<//button>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50"><>
</section className="py-20 bg-gray-50">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl font-bold text-gray-900 mb-4">Add-on Services</h2><>
<//h2>
<p className="text-xl text-gray-600">Enhance your plan with additional services</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
              {addOns.map((addOn, index) => (</div><>
<//div>
<div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"></div><>
<//div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3><>
<//h3>
<p className="text-2xl font-bold text-blue-600 mb-2">{addOn.price}</p><>
<//p>
<p className="text-gray-600 text-sm">{addOn.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* FAQ Section */}
      <section className="py-20 bg-white"><>
</section className="py-20 bg-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto"></div><>
<//div>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2><>
<//h2>
<div className="space-y-8"></div><>
<//div>
<div></div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3><>
<//h3>
<p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p><>
<//p>
</div><>
<//div>
<div></div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a setup fee?</h3><>
<//h3>
<p className="text-gray-600">No setup fees for Starter and Professional plans. Enterprise plans may include custom setup costs based on requirements.</p><>
<//p>
</div><>
<//div>
<div></div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3><>
<//h3>
<p className="text-gray-600">We accept all major credit cards, bank transfers, and can arrange custom billing for Enterprise customers.</p><>
<//p>
</div><>
<//div>
<div></div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer refunds?</h3><>
<//h3>
<p className="text-gray-600">We offer a 30-day money-back guarantee for all plans. Enterprise customers have custom terms based on their agreement.</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"><>
</section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2><>
<//h2>
<p className="text-xl mb-8 text-blue-100"></p><//p>
              Choose your plan and start transforming your business with AI and IT solutions today.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"></button><>
<//button>
<Zap className="mr-2 w-5 h-5" /></Zap className="mr-2 w-5 h-5" />
                Start Free Trial
              </button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"></button><//button>
                Contact Sales</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><//div>
  );
};

export default PricingPage;
