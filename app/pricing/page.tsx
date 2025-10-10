'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, Phone, Mail, Zap, Shield, Brain } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI chatbot',
        'Email support',
        'Standard analytics',
        'Up to 1,000 interactions/month',
        'Basic integrations',
        'Monthly reports'
      ],
      popular: false,
      icon: Brain
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Advanced analytics',
        'Up to 10,000 interactions/month',
        'Custom integrations',
        'Weekly reports',
        'Dedicated account manager',
        'API access'
      ],
      popular: true,
      icon: Zap
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Full AI suite',
        '24/7 phone support',
        'Custom analytics dashboard',
        'Unlimited interactions',
        'White-label solutions',
        'Real-time reports',
        'Dedicated support team',
        'Custom development',
        'SLA guarantee',
        'On-site training'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const addOnServices = [
    {
      name: 'AI Content Generation',
      price: '$299/month',
      description: 'Automated content creation for blogs, social media, and marketing'
    },
    {
      name: 'Advanced Analytics',
      price: '$199/month',
      description: 'Deep insights and predictive analytics for your business'
    },
    {
      name: 'Custom Integration',
      price: '$1,999/project',
      description: 'Seamless integration with your existing systems and workflows'
    },
    {
      name: 'Priority Support',
      price: '$499/month',
      description: '24/7 priority support with guaranteed response times'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, enterprise, professional, starter" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI and IT solutions 
            with no hidden fees or surprise charges.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500 scale-105 shadow-2xl shadow-cyan-500/25'
                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-cyan-400 text-xl font-bold mb-3">{service.price}</p>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Common questions about our pricing and services</p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">
                Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
              <p className="text-gray-300">
                All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your requirements and find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;