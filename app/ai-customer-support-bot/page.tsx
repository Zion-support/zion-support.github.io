'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Bot, BarChart, Users, Zap, Target, TrendingUp, Clock, Award, MessageSquare, Headphones, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AICustomerSupportBotPage: React.FC = () => {
  const features = [
    "24/7 AI-powered customer support",
    "Natural language processing",
    "Multi-language support",
    "Intelligent ticket routing",
    "Sentiment analysis and escalation",
    "Knowledge base integration",
    "Live chat handoff capability",
    "Advanced analytics and reporting"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Provide instant support around the clock with AI-powered responses"
    },
    {
      icon: Users,
      title: "Improved Satisfaction",
      description: "Increase customer satisfaction by 85% with faster response times"
    },
    {
      icon: BarChart,
      title: "Cost Reduction",
      description: "Reduce support costs by up to 70% with automated responses"
    },
    {
      icon: Target,
      title: "Better Resolution",
      description: "Resolve 80% of queries automatically with intelligent responses"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI responses",
        "Email support",
        "Basic analytics",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI with learning",
        "Multi-language support",
        "Advanced analytics",
        "Live chat integration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      features: [
        "Unlimited conversations",
        "Custom AI training",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Customer Support Bot - Zion Tech Group"
        description="Transform your customer support with our AI-powered chatbot. Provide 24/7 support, reduce costs by 70%, and increase satisfaction by 85%."
        keywords={["AI customer support", "chatbot", "customer service automation", "AI support bot", "Zion Tech Group"]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Customer Support Bot
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your customer support with our AI-powered chatbot. Provide 24/7 support, 
            reduce costs by 70%, and increase customer satisfaction by 85%.
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
              <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-gray-400">Satisfaction Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">80%</div>
              <div className="text-gray-400">Auto Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Support Features</h2>
            <p className="text-xl text-gray-300">Everything you need to provide exceptional customer support</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Customer Support Bot?</h2>
            <p className="text-xl text-gray-300">Experience the future of customer support</p>
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
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI Customer Support Bot to provide better service.
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

export default AICustomerSupportBotPage;