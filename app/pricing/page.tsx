import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Target, BarChart } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI automation',
        'Email support',
        'Monthly reporting',
        'Up to 5 users',
        'Standard integrations'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Real-time analytics',
        'Up to 25 users',
        'Custom integrations',
        'Dedicated account manager',
        'Training sessions'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Full AI suite',
        '24/7 premium support',
        'Advanced analytics & reporting',
        'Unlimited users',
        'Custom development',
        'Dedicated team',
        'On-site training',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const addOns = [
    {
      name: 'AI Marketing Automation',
      price: '$1,500/month',
      description: 'Advanced marketing automation with AI-powered campaigns'
    },
    {
      name: 'AI Data Analytics',
      price: '$2,000/month',
      description: 'Comprehensive data analytics and business intelligence'
    },
    {
      name: 'AI Customer Support',
      price: '$1,000/month',
      description: '24/7 AI-powered customer support system'
    },
    {
      name: 'Custom AI Development',
      price: 'Contact us',
      description: 'Bespoke AI solutions tailored to your specific needs'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '300% ROI Guarantee',
      description: 'We guarantee 300% return on investment within the first year or we refund the difference.'
    },
    {
      icon: Target,
      title: '70% Cost Reduction',
      description: 'Our AI solutions typically reduce operational costs by 70% through intelligent automation.'
    },
    {
      icon: BarChart,
      title: '90% Efficiency Gains',
      description: 'Improve productivity and efficiency across all business operations with our AI tools.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from Starter, Professional, or Enterprise plans. All plans include our 300% ROI guarantee." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, enterprise solutions, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Choose the perfect plan for your business. All plans include our 300% ROI guarantee and 24/7 support.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold text-center block`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-cyan-400 font-bold mb-3">{addon.price}</p>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our Plans?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan later?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">What's included in the ROI guarantee?</h3>
                <p className="text-gray-300">We guarantee 300% return on investment within the first year. If you don't achieve this, we'll refund the difference.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Yes, we provide custom AI and IT solutions tailored to your specific business needs. Contact us for a consultation.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">What support is included?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-12 text-center backdrop-blur-sm border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and custom pricing based on your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/case-studies"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;