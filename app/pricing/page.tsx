'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Up to 5 AI models',
        'Email support',
        'Monthly reporting',
        'Basic analytics dashboard',
        'Standard security features',
        'Basic AI integration',
        'Email support',
        'Standard analytics',
        'Up to 5 users',
        'Basic automation'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI consultation',
        'Up to 20 AI models',
        'Priority support',
        'Weekly reporting',
        'Advanced analytics dashboard',
        'Enhanced security features'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Custom AI solutions',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Real-time reporting',
        'Custom analytics dashboard',
        'Enterprise security features',
        'Custom integrations',
        'Dedicated team',
        'SLA guarantee',
        'On-site support',
        'Custom AI solutions',
        '24/7 dedicated support',
        'Custom analytics',
        'Unlimited users',
        'White-label options',
        'On-premise deployment',
        'Custom training'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Consulting',
      price: '$299/hour',
      description: 'Expert guidance on AI strategy and implementation'
    },
    {
      name: 'Cloud Migration',
      price: '$5,000/project',
      description: 'Seamless migration to cloud infrastructure'
    },
    {
      name: 'Security Audit',
      price: '$2,500/audit',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Bespoke software solutions for your specific needs'
    },
    {
      name: 'Data Analytics',
      price: '$200/hour',
      description: 'Advanced data analysis and visualization services'
    },
    {
      name: 'Training & Support',
      price: '$100/hour',
      description: 'Team training and ongoing technical support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our flexible plans designed to meet your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services cost, enterprise pricing, business plans, technology pricing" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Simple, <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transparent</span> Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your business. All plans include our core AI and IT services 
                with flexible options to scale as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10 scale-105'
                      : 'border-cyan-500/20 hover:border-cyan-400/40'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Add-on Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your package with additional services tailored to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOnServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</p>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Common questions about our pricing and services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
                <p className="text-gray-300">
                  Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Is there a free trial?</h3>
                <p className="text-gray-300">
                  We offer a 30-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Free Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;