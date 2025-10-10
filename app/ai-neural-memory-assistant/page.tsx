'use client';

import React from 'react';
import { ArrowRight, CheckCircle, BarChart, Target, Users, Zap, Brain, Globe, Rocket, Shield, Settings, Clock, TrendingUp, DollarSign, PieChart, Activity, AlertTriangle, Star, Award, Phone, Mail, MapPin, Memory, Cpu, Database, Eye, MessageSquare } from 'lucide-react';

const AINeuralMemoryAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Persistent Memory System",
      description: "Advanced neural networks that maintain context and learn from every interaction",
      benefits: ["Long-term memory retention", "Contextual understanding", "Personalized responses"]
    },
    {
      icon: Memory,
      title: "Cognitive Enhancement",
      description: "AI that thinks, remembers, and learns like a human brain with enhanced capabilities",
      benefits: ["Pattern recognition", "Predictive thinking", "Creative problem solving"]
    },
    {
      icon: Database,
      title: "Knowledge Graph Integration",
      description: "Connects information across domains to provide comprehensive understanding",
      benefits: ["Cross-domain insights", "Knowledge synthesis", "Intelligent recommendations"]
    },
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Engages in human-like conversations with memory of past interactions",
      benefits: ["Contextual dialogue", "Emotional intelligence", "Adaptive communication"]
    }
  ];

  const pricingTiers = [
    {
      name: "Personal",
      price: "$49",
      period: "per month",
      description: "Perfect for individuals and personal productivity",
      features: [
        "Up to 10GB memory storage",
        "Basic neural processing",
        "Personal knowledge base",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for professionals and small teams",
      features: [
        "Up to 100GB memory storage",
        "Advanced neural algorithms",
        "Team collaboration features",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations and complex workflows",
      features: [
        "Unlimited memory storage",
        "Custom neural models",
        "Advanced analytics",
        "Dedicated support",
        "Full API access",
        "Custom development",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Personal Assistant",
      description: "Your AI assistant that remembers everything and helps you stay organized",
      examples: ["Schedule management", "Task prioritization", "Personal reminders"]
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Analyze data patterns and provide insights based on historical knowledge",
      examples: ["Market analysis", "Trend prediction", "Performance optimization"]
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Provide personalized support with memory of customer history",
      examples: ["Issue resolution", "Product recommendations", "Relationship building"]
    },
    {
      icon: Brain,
      title: "Research & Development",
      description: "Accelerate research with AI that remembers and connects information",
      examples: ["Literature review", "Hypothesis generation", "Data synthesis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-400/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Neural AI Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                AI Neural Memory Assistant
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of AI with persistent memory, contextual understanding, and human-like cognition. 
              Your AI assistant that truly remembers and learns from every interaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Memory Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Continuous Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300">Memory Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Neural Memory Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Neural Memory Assistant represents the next generation of artificial intelligence, 
              combining advanced neural networks with persistent memory systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-purple-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how the AI Neural Memory Assistant can revolutionize your personal and professional life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-xs text-purple-400">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Memory Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your memory and learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${tier.popular ? 'border-purple-400 shadow-lg shadow-purple-400/25' : 'border-gray-700'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-purple-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Future of AI Memory
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have transformed their productivity with our 
            AI Neural Memory Assistant. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINeuralMemoryAssistant;