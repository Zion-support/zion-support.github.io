<<<<<<< HEAD
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check, Send, BarChart3, DollarSign, Activity, Lock, FileText, CreditCard, Building2, Sparkles, PieChart } from "lucide-react";
=======
import React from 'react';
import Link from 'next/link';
import { DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
>>>>>>> origin/main

export default function PricingPage() {
  const features = [
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
      ],
      popular: false
    },
    {
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
      ],
      popular: true
    },
    {
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
      ],
      popular: false
    }
  ];
=======
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description of the first key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description of the second key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description of the third key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Feature 4',
      description: 'Description of the fourth key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    }
  ];

  const stats = [
    { number: '95%', label: 'Success Rate' },
    { number: '80%', label: 'Efficiency Gain' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];
>>>>>>> origin/main

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Flexible pricing plans to fit your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

<<<<<<< HEAD
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
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white"
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
=======
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
>>>>>>> origin/main
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn more about our solutions.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}