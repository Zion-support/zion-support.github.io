<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const PricingPage: NextPage = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with digital transformation',
      features: [
        'Basic website development',
        'Cloud setup & migration',
        'Email support',
        'Monthly performance reports',
        'Basic security monitoring',
        'Up to 5 users'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      features: [
        'Custom web applications',
        'Advanced cloud infrastructure',
        'Priority support',
        'Weekly performance reports',
        'Advanced security monitoring',
        'AI/ML integration',
        'Up to 25 users',
        'API development'
      ],
      popular: true,
      cta: 'Most Popular',
      color: 'from-zion-cyan to-blue-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Enterprise-grade applications',
        'Multi-cloud architecture',
        '24/7 dedicated support',
        'Real-time monitoring',
        'Advanced security & compliance',
        'Custom AI/ML solutions',
        'Unlimited users',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Development',
      price: '$5,000',
      description: 'Custom AI solutions and machine learning models'
    },
    {
      name: 'Cybersecurity Audit',
      price: '$3,500',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Data Analytics',
      price: '$4,000',
      description: 'Business intelligence and data visualization solutions'
    },
    {
      name: 'Mobile App Development',
      price: '$8,000',
      description: 'Native iOS and Android applications'
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the monthly pricing?',
      answer: 'Our monthly pricing includes ongoing support, maintenance, monitoring, and updates. It also covers cloud infrastructure costs and security services.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll work with you to ensure a smooth transition.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our Enterprise plan is fully customizable, and we can create tailored solutions for any business size or requirement.'
    },
    {
      question: 'What about one-time projects?',
      answer: 'We also offer project-based pricing for specific initiatives. Contact us to discuss your project requirements.'
=======
import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEOHead';
import { Check, Star, Zap, Shield, Globe, Users, ArrowRight, Phone, Mail } from 'lucide-react';

const Pricing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - Zion Tech Group",
    "url": "https://ziontechgroup.com/pricing",
    "description": "Transparent pricing for AI services, IT solutions, and micro SaaS development",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI consultation",
        "Up to 5 AI integrations",
        "Email support",
        "Monthly progress reports",
        "Basic analytics dashboard"
      ],
      popular: false,
      cta: "Get Started",
      href: "/contact"
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced AI solutions",
        "Up to 20 AI integrations",
        "Priority support",
        "Weekly progress reports",
        "Advanced analytics & insights",
        "Custom AI model training",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial",
      href: "/contact"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom AI development",
        "Unlimited integrations",
        "24/7 dedicated support",
        "Real-time monitoring",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales",
      href: "/contact"
    }
  ];

  const addOns = [
    {
      name: "AI Model Training",
      price: "$1,500",
      description: "Custom AI model development and training"
    },
    {
      name: "Data Migration",
      price: "$2,000",
      description: "Complete data migration and setup"
    },
    {
      name: "Training & Support",
      price: "$500",
      description: "Team training and ongoing support"
    },
    {
      name: "Custom Integrations",
      price: "$3,000",
      description: "Custom API integrations and connections"
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Choose the perfect plan for your business needs. All plans include our core services and support.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-zion-cyan scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {plan.cta}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold text-center block hover:opacity-90 transition-opacity`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-zion-cyan mb-3">{service.price}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your needs and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PricingPage;
=======
    <>
      <SEOHead 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI services, IT solutions, and micro SaaS development. Choose the plan that fits your business needs."
        keywords="pricing, AI services, IT solutions, micro SaaS, enterprise pricing"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, Transparent
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business. All plans include our core AI services with no hidden fees.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  30-day money back
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Enhance your plan with these optional add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">What's included in the free trial?</h3>
                <p className="text-gray-300">
                  The free trial includes full access to all Professional plan features for 14 days. 
                  No credit card required to start.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">
                  Yes, we offer custom pricing for enterprise clients with specific requirements. 
                  Contact our sales team to discuss your needs.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">What support is included?</h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support, 
                  and Enterprise includes 24/7 dedicated support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;
>>>>>>> origin/main
