'use client';

import React from 'react';
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Shield,
  Rocket,
  Code,
  Brain,
  Cloud
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "AI Project Manager Pro",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 Users Included",
        "10GB Storage",
        "Basic Integrations"
      ],
      popular: false,
      icon: Code
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "All Starter Features",
        "AI Customer Support Bot",
        "Advanced Analytics",
        "Priority Support",
        "25 Users Included",
        "100GB Storage",
        "Advanced Integrations",
        "Custom Workflows"
      ],
      popular: true,
      icon: Brain
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "All Professional Features",
        "AI Drug Discovery Pro",
        "AI Climate Solutions Pro",
        "24/7 Phone Support",
        "Unlimited Users",
        "1TB Storage",
        "Custom Integrations",
        "Dedicated Account Manager",
        "SLA Guarantee"
      ],
      popular: false,
      icon: Cloud
    }
  ];

  const addOns = [
    {
      name: "AI Content Generation",
      price: "$79/mo",
      description: "Advanced AI-powered content creation tools"
    },
    {
      name: "AI Social Media Manager",
      price: "$129/mo",
      description: "Automated social media management and posting"
    },
    {
      name: "AI Email Marketing Suite",
      price: "$89/mo",
      description: "Intelligent email campaigns and automation"
    },
    {
      name: "AI Video Generator",
      price: "$199/mo",
      description: "AI-powered video creation and editing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pricing Plans
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI services with flexible options to scale.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400/30' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional AI services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{addon.price}</div>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <button className="w-full border border-cyan-400 text-cyan-400 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Is there a free trial?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">What support is included?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 phone support.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Yes, we can create custom AI solutions tailored to your specific business needs. Contact our sales team for more information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team is here to help you find the perfect plan for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;