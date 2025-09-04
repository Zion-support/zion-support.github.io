import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Users, Clock, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$2,999",
      period: "/month",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      features: [
        "Up to 5 users",
        "Basic AI automation",
        "Standard security features",
        "Email support",
        "Basic analytics",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$7,999",
      period: "/month",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Up to 25 users",
        "Advanced AI & ML solutions",
        "Enhanced security & compliance",
        "Priority support",
        "Advanced analytics",
        "Weekly reports",
        "Custom integrations",
        "Training sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      period: "",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: [
        "Unlimited users",
        "Full AI & quantum solutions",
        "Enterprise security",
        "24/7 dedicated support",
        "Real-time analytics",
        "Custom reporting",
        "Full customization",
        "Dedicated account manager",
        "On-site training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: "AI Development",
      description: "Custom AI models and machine learning solutions",
      price: "$5,000 - $50,000",
      icon: "🤖"
    },
    {
      name: "Cybersecurity Audit",
      description: "Comprehensive security assessment and recommendations",
      price: "$3,000 - $15,000",
      icon: "🔒"
    },
    {
      name: "Cloud Migration",
      description: "Complete cloud infrastructure setup and migration",
      price: "$10,000 - $100,000",
      icon: "☁️"
    },
    {
      name: "IoT Implementation",
      description: "Internet of Things device integration and management",
      price: "$8,000 - $75,000",
      icon: "🌐"
    },
    {
      name: "Quantum Computing",
      description: "Quantum algorithm development and implementation",
      price: "$25,000 - $200,000",
      icon: "⚛️"
    },
    {
      name: "Blockchain Solutions",
      description: "Smart contracts and decentralized applications",
      price: "$15,000 - $150,000",
      icon: "⛓️"
    }
  ];

  const faqs = [
    {
      question: "What's included in the monthly pricing?",
      answer: "Monthly pricing includes all core features, support, updates, and maintenance. Additional services like custom development are billed separately."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
    },
    {
      question: "Is there a setup fee?",
      answer: "Setup fees vary by plan. Starter and Professional plans include basic setup. Enterprise plans may have custom setup requirements."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all plans. Enterprise clients have custom terms based on their agreement."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Technology Solutions Pricing</title>
        <meta name="description" content="Explore Zion Tech Group's transparent pricing for AI, cybersecurity, cloud, and technology solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="technology pricing, AI services pricing, cybersecurity pricing, cloud services pricing, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                      : 'border-slate-700 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'border-transparent text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                        : 'border-cyan-500 text-cyan-400 bg-transparent hover:bg-cyan-500/10'
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

        {/* Add-on Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your solution with our specialized services and custom development options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your needs and get a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}