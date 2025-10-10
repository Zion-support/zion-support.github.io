'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Mail, BarChart, Users, Zap, Target, TrendingUp, Clock, Award, Send, Filter, Palette } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    "AI-powered email content generation",
    "Smart segmentation and personalization",
    "Advanced A/B testing automation",
    "Predictive send-time optimization",
    "Behavioral trigger campaigns",
    "Advanced analytics and reporting",
    "Template library with AI customization",
    "Deliverability optimization"
  ];

  const benefits = [
    {
      icon: BarChart,
      title: "Higher Open Rates",
      description: "Increase open rates by up to 40% with AI-optimized subject lines"
    },
    {
      icon: Target,
      title: "Better Targeting",
      description: "Reach the right audience with AI-powered segmentation"
    },
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Generate 3x more revenue with personalized email campaigns"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save 15+ hours per week with automated campaign management"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      features: [
        "Up to 5,000 subscribers",
        "Basic AI content generation",
        "Email templates",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      features: [
        "Up to 25,000 subscribers",
        "Advanced AI personalization",
        "A/B testing",
        "Advanced analytics",
        "Automation workflows",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited subscribers",
        "Premium AI features",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Email Marketing Suite - Zion Tech Group"
        description="Transform your email marketing with AI-powered personalization, automation, and optimization. Increase open rates by 40% and revenue by 3x."
        keywords={["AI email marketing", "email automation", "email personalization", "email analytics", "Zion Tech Group"]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Email Marketing Suite
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your email marketing with AI-powered personalization, automation, and optimization. 
            Increase open rates by 40% and revenue by 3x.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-400">Higher Open Rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-400">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
              <div className="text-gray-400">Hours Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Deliverability Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Email Marketing Features</h2>
            <p className="text-xl text-gray-300">Everything you need to create high-converting email campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Email Marketing Suite?</h2>
            <p className="text-xl text-gray-300">Experience the future of email marketing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI Email Marketing Suite to boost their email performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIEmailMarketingPage;