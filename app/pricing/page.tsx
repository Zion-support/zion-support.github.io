<<<<<<< HEAD
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Users, Clock, DollarSign, Award, TrendingUp } from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { CheckCircle, Star, Phone, Mail, MapPin, Zap, Brain, Cloud, Code } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-6266

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
<<<<<<< HEAD
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 AI services',
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic analytics'
=======
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$1,500',
      period: '/month',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      features: [
        'AI Strategy Consultation',
        'Basic ML Model Development',
        'Monthly Performance Review',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 AI Integrations'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
<<<<<<< HEAD
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 15 AI services',
        'Priority IT support',
        'Phone & email support',
        'Advanced security',
        'Weekly reports',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
=======
      name: 'AI Professional',
      description: 'Comprehensive AI solutions for growing businesses',
      price: '$2,500',
      period: '/month',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Advanced AI Strategy & Planning',
        'Custom ML Model Development',
        'AI Workflow Automation',
        'Priority Support (24/7)',
        'Advanced Analytics & Reporting',
        'Up to 15 AI Integrations',
        'Monthly Strategy Sessions',
        'Performance Optimization',
        'Security & Compliance Review'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
<<<<<<< HEAD
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI services',
        '24/7 IT support',
        'Dedicated support team',
        'Enterprise security',
        'Real-time reports',
        'Custom analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
=======
      name: 'AI Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$5,000',
      period: '/month',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      features: [
        'Full AI Transformation Strategy',
        'Custom AI Solution Development',
        'Advanced Workflow Automation',
        'Dedicated Account Manager',
        'Real-time Analytics & Monitoring',
        'Unlimited AI Integrations',
        'Weekly Strategy Sessions',
        'Advanced Security & Compliance',
        'Custom Training & Support',
        'ROI Guarantee'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

<<<<<<< HEAD
  const addOns = [
    {
      name: 'AI Model Training',
      price: '$199/month',
      description: 'Custom AI model training for your specific needs'
    },
    {
      name: 'Additional Storage',
      price: '$99/month',
      description: 'Extra 1TB of cloud storage'
    },
    {
      name: 'Priority Support',
      price: '$149/month',
      description: '24/7 priority support with 1-hour response time'
    },
    {
      name: 'Custom Development',
      price: '$299/hour',
      description: 'Custom feature development and integrations'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing Plans - Zion Tech Group"
        description="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at $299/month."
        keywords={['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprise pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Choose the perfect plan for your business needs
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                All plans include our core AI and IT services with no hidden fees. 
                Scale up or down as your business grows.
              </p>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
=======
  const addOnServices = [
    {
      name: 'AI Content Generation',
      price: '$500/month',
      description: 'Automated content creation for blogs, social media, and marketing'
    },
    {
      name: 'AI Data Analytics',
      price: '$750/month',
      description: 'Advanced data insights and predictive analytics'
    },
    {
      name: 'AI Cybersecurity',
      price: '$1,000/month',
      description: 'AI-powered security monitoring and threat detection'
    },
    {
      name: 'Quantum Computing Solutions',
      price: '$2,500/month',
      description: 'Next-generation quantum algorithms and security'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from our flexible plans designed to meet your business needs and budget." />
        <meta name="keywords" content="AI pricing, IT services pricing, enterprise AI solutions, AI consulting costs, technology pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our 30-day money-back guarantee.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20' 
                      : 'border-white/20'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        {plan.cta}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.popular ? "mailto:kleber@ziontechgroup.com" : "tel:+13024640950"}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.popular ? 'Contact Sales' : plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your needs and find the perfect plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
=======
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
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
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Guarantee */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-8 border border-green-500/30">
              <Star className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">ROI Guarantee</h2>
              <p className="text-xl text-gray-300 mb-6">
                We guarantee a minimum 300% ROI within 12 months or we'll refund your investment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-gray-300">Minimum ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                  <div className="text-gray-300">Months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Money Back</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific requirements and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Middletown, DE</div>
                  <div className="text-gray-400 text-sm">Our location</div>
                </div>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
    </>
  );
};

export default PricingPage;