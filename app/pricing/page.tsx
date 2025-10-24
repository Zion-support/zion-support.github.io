<<<<<<< HEAD
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/delete-records-30ea

const PricingPage: React.FC = () => {
  const plans = [
    {
<<<<<<< HEAD
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI features",
        "Email support",
        "5GB storage",
        "Basic analytics",
        "Standard security"
=======
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Solutions',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users'
>>>>>>> cursor/delete-records-30ea
      ],
      popular: false
    },
    {
<<<<<<< HEAD
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI features",
        "Priority support",
        "50GB storage",
        "Advanced analytics",
        "Enhanced security",
        "Custom integrations",
        "API access"
=======
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Weekly Reports',
        'Up to 25 Users',
        'Custom Integrations'
>>>>>>> cursor/delete-records-30ea
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "All AI features",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom analytics",
        "Enterprise security",
        "Custom integrations",
        "Full API access",
        "Dedicated account manager",
        "Custom training"
=======
      name: 'Enterprise',
      price: '$19,999',
      period: 'per month',
      description: 'Complete solution for large enterprises',
      features: [
        'Full AI Suite',
        '24/7 Support',
        'Real-time Reports',
        'Unlimited Users',
        'Custom Development',
        'Dedicated Account Manager'
>>>>>>> cursor/delete-records-30ea
      ],
      popular: false
    }
  ];

  return (
    <>
<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? "border-emerald-400 ring-2 ring-emerald-400/50" : "border-white/20"
                } relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
=======
      <Helmet>
        <title>Pricing - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Pricing Plans
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI and IT services with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/delete-records-30ea
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
<<<<<<< HEAD
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
=======
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
>>>>>>> cursor/delete-records-30ea
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
<<<<<<< HEAD
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
=======
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
>>>>>>> cursor/delete-records-30ea
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white"
                  }`}>
=======
                  
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
>>>>>>> cursor/delete-records-30ea
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
=======

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact us to discuss your specific requirements and get a tailored quote.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      
>>>>>>> cursor/delete-records-30ea
      <Footer />
    </>
  );
};

export default PricingPage;