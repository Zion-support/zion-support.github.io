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
    }
  ];

  return (
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