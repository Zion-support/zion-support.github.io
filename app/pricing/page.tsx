'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Brain, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Chatbot',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics',
        'Up to 1,000 interactions/month',
        'Standard Response Time'
      ],
      popular: false,
      icon: Brain
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Real-time Analytics',
        'Custom Integrations',
        'Up to 10,000 interactions/month',
        '24/7 Support',
        'Custom Training',
        'API Access'
      ],
      popular: true,
      icon: Zap
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Development',
        'Dedicated Support Team',
        'Advanced Security',
        'Unlimited Interactions',
        'Custom Integrations',
        'SLA Guarantee',
        'Training & Consulting',
        'White-label Solutions'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model training for your specific use case',
      price: '$2,500',
      period: '/project'
    },
    {
      name: 'Data Migration',
      description: 'Secure migration of your existing data to our platform',
      price: '$1,800',
      period: '/project'
    },
    {
      name: 'Custom Integration',
      description: 'Integration with your existing systems and workflows',
      price: '$3,200',
      period: '/project'
    },
    {
      name: '24/7 Premium Support',
      description: 'Round-the-clock support with guaranteed response times',
      price: '$800',
      period: '/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, enterprise, professional, starter" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with no hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/40 ring-2 ring-cyan-500/20'
                      : 'border-cyan-500/20 hover:border-cyan-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    <span>{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-gray-300">Enhance your plan with these additional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about our pricing</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. You only pay the monthly subscription cost.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">What happens if I exceed my plan limits?</h3>
                <p className="text-gray-300">We'll notify you when you're approaching your limits and help you upgrade to a higher plan.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your needs and find the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;