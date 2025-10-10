'use client';

import React from 'react';
import { ArrowRight, CheckCircle, BarChart, Target, Users, Zap, Brain, Globe, Rocket, Shield, Settings, Clock, TrendingUp, DollarSign, PieChart, Activity, AlertTriangle, Star, Award, Phone, Mail, MapPin, Eye, Monitor, Layers, Box } from 'lucide-react';

const AIHolographicWorkspace: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "3D Holographic Interface",
      description: "Immersive 3D workspace that projects your work into physical space",
      benefits: ["Spatial computing", "Gesture controls", "Multi-dimensional data visualization"]
    },
    {
      icon: Layers,
      title: "Virtual Reality Integration",
      description: "Seamlessly blend virtual and physical environments for enhanced productivity",
      benefits: ["VR/AR compatibility", "Mixed reality", "Immersive collaboration"]
    },
    {
      icon: Monitor,
      title: "Spatial Computing",
      description: "Work with data and applications in three-dimensional space",
      benefits: ["3D data manipulation", "Spatial organization", "Natural interactions"]
    },
    {
      icon: Box,
      title: "Collaborative Workspaces",
      description: "Share holographic spaces with team members for real-time collaboration",
      benefits: ["Remote collaboration", "Shared virtual spaces", "Real-time synchronization"]
    }
  ];

  const pricingTiers = [
    {
      name: "Individual",
      price: "$199",
      period: "per month",
      description: "Perfect for creative professionals and developers",
      features: [
        "Personal holographic workspace",
        "Basic 3D tools",
        "VR headset compatibility",
        "Email support",
        "5GB cloud storage"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$499",
      period: "per month",
      description: "Ideal for small teams and creative agencies",
      features: [
        "Up to 10 team members",
        "Advanced 3D collaboration",
        "Custom holographic environments",
        "Priority support",
        "50GB cloud storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "For large organizations and complex projects",
      features: [
        "Unlimited team members",
        "Custom holographic solutions",
        "Advanced analytics",
        "Dedicated support",
        "Unlimited cloud storage",
        "Full API access",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      icon: BarChart,
      title: "Data Visualization",
      description: "Transform complex data into interactive 3D holographic displays",
      examples: ["Financial modeling", "Scientific research", "Business analytics"]
    },
    {
      icon: Users,
      title: "Remote Collaboration",
      description: "Work together in shared holographic spaces from anywhere",
      examples: ["Design reviews", "Brainstorming sessions", "Training programs"]
    },
    {
      icon: Brain,
      title: "Creative Design",
      description: "Design and prototype in immersive 3D environments",
      examples: ["Product design", "Architecture", "Game development"]
    },
    {
      icon: Settings,
      title: "Training & Education",
      description: "Interactive learning experiences in holographic environments",
      examples: ["Medical training", "Technical education", "Skill development"]
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
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <Eye className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Holographic Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Holographic Workspace
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the future of work with our AI-powered holographic workspace. 
              Experience immersive 3D computing, spatial collaboration, and next-generation productivity tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">360°</div>
              <div className="text-gray-300">Immersive View</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-gray-300">Virtual Space</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-gray-300">Holographic Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Holographic Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Holographic Workspace combines cutting-edge holographic displays with 
              advanced AI to create the most immersive work environment ever built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
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

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how the AI Holographic Workspace can transform your work across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <application.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{application.description}</p>
                <ul className="space-y-1">
                  {application.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-xs text-cyan-400">• {example}</li>
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
              Choose Your Holographic Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your holographic workspace needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${tier.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-700'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Step Into the Future of Work
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the holographic revolution and experience productivity like never before. 
            Start your free trial today and see the future of work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHolographicWorkspace;