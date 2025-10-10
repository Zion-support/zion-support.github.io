'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code, Calculator, Calendar, Compass, PieChart, TrendingDown, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIQuantumFinancialOraclePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum-Powered Predictions",
      description: "Leverage quantum computing algorithms for ultra-accurate financial forecasting and market analysis",
      benefits: ["99.7% prediction accuracy", "Real-time market analysis", "Quantum risk assessment"]
    },
    {
      icon: BarChart,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive financial data visualization with quantum-enhanced insights and trend analysis",
      benefits: ["Interactive charts", "Custom reports", "Real-time updates"]
    },
    {
      icon: Shield,
      title: "Risk Management Suite",
      description: "AI-powered risk assessment with quantum computing for portfolio optimization and fraud detection",
      benefits: ["Portfolio optimization", "Fraud detection", "Compliance monitoring"]
    },
    {
      icon: Target,
      title: "Investment Recommendations",
      description: "Personalized investment strategies based on quantum analysis of market patterns and trends",
      benefits: ["Personalized strategies", "Market pattern analysis", "ROI optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for individual investors and small portfolios",
      features: [
        "Up to 5 portfolios",
        "Basic quantum analysis",
        "Standard risk assessment",
        "Email support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for financial advisors and medium-sized firms",
      features: [
        "Up to 25 portfolios",
        "Advanced quantum algorithms",
        "Real-time risk monitoring",
        "Priority support",
        "Weekly reports",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "Comprehensive solution for large financial institutions",
      features: [
        "Unlimited portfolios",
        "Full quantum computing access",
        "Custom risk models",
        "24/7 dedicated support",
        "Real-time reports",
        "White-label solution",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      company: "Quantum Capital",
      content: "The AI Quantum Financial Oracle has revolutionized our investment strategies. The quantum-powered predictions are incredibly accurate and have increased our portfolio returns by 40%.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Advisor",
      company: "Future Finance Group",
      content: "This is the most advanced financial analysis tool I've ever used. The risk assessment capabilities are unmatched, and the real-time insights help us make better decisions.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Investment Officer",
      company: "Quantum Wealth Management",
      content: "The quantum algorithms provide insights that traditional analysis simply cannot match. Our clients have seen significant improvements in their investment performance.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 cyber-grid-advanced"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8">
            <Brain className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">AI Quantum Financial Oracle</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-enhanced">
            Quantum-Powered Financial Intelligence
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your financial strategy with the world's first AI-powered quantum financial oracle. 
            Get ultra-accurate predictions, advanced risk analysis, and personalized investment recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.7%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2.3B+</div>
              <div className="text-gray-300">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
              <div className="text-gray-300">Financial Institutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing and artificial intelligence for unprecedented financial insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your financial analysis needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-ultra p-8 relative ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'neon-button-ultra' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Trusted by Financial Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry experts say about our quantum financial oracle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-ultra p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400">{testimonial.role}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
            Ready to Transform Your Financial Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of financial professionals who trust our quantum-powered AI for their most critical decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIQuantumFinancialOraclePage;