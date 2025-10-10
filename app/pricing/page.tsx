'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI Integration (1-2 AI models)',
        'Cloud Infrastructure Setup (AWS/Azure)',
        'Email Support (48-hour response)',
        'Monthly Performance Reports',
        'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard Security Features',
        'Basic Training (2 hours)',
        '99.5% Uptime SLA'
      ],
      popular: false,
      category: 'AI & IT Starter'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses that need advanced AI and IT capabilities',
      features: [
        'Advanced AI Integration (5-10 AI models)',
        'Multi-Cloud Infrastructure (AWS, Azure, GCP)',
        'Priority Support (24-hour response)',
        'Real-time Analytics Dashboard',
        'Advanced Security Features',
        'Up to 25 users',
        'Custom AI Model Training',
        'Comprehensive Training (8 hours)',
        '99.9% Uptime SLA',
        'Dedicated Account Manager',
        'API Access',
        'Custom Integrations'
      ],
      popular: true,
      category: 'AI & IT Professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large enterprises with complex requirements',
      features: [
        'Unlimited AI Models & Custom Development',
        'Hybrid Cloud & On-Premise Solutions',
        '24/7 Dedicated Support',
        'Custom Analytics & Reporting',
        'Enterprise Security & Compliance',
        'Unlimited Users',
        'Custom AI Model Development',
        'Unlimited Training & Workshops',
        '99.99% Uptime SLA',
        'Dedicated Technical Team',
        'Full API & SDK Access',
        'Custom Integrations & Workflows',
        'White-label Solutions',
        'SLA Guarantees',
        'On-site Support Available'
      ],
      popular: false,
      category: 'AI & IT Enterprise'
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the setup process?',
      answer: 'Our setup process includes initial consultation, system architecture design, AI model integration, cloud infrastructure setup, security configuration, and comprehensive training for your team.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll work with you to ensure a smooth transition with no downtime.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our Enterprise plan includes fully customized solutions tailored to your specific business needs and requirements.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including email support, phone support, live chat, and dedicated account management depending on your plan.'
    },
    {
      question: 'Is there a contract commitment?',
      answer: 'Our Starter and Professional plans are month-to-month with no long-term contracts. Enterprise plans may have custom terms based on your specific needs.'
    },
    {
      question: 'Do you offer training and onboarding?',
      answer: 'Yes, all plans include training and onboarding. The amount and depth of training varies by plan, with Enterprise plans including unlimited training and workshops.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing Plans</title>
        <meta name="description" content="Choose the perfect AI and IT solutions plan for your business. Transparent pricing with no hidden fees. Start with our Starter plan or go Enterprise." />
        <meta name="keywords" content="AI solutions pricing, IT services pricing, cloud computing costs, enterprise AI pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Choose the perfect AI and IT solutions plan for your business. Transparent pricing with no hidden fees." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with no hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                      : 'border-slate-700 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.category}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Have questions about our pricing? We've got answers.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your needs and find the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call +1 302 464 0950
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