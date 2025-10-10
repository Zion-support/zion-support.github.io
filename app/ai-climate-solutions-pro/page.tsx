'use client';

import React from 'react';
import { ArrowRight, CheckCircle, BarChart, Target, Users, Zap, Brain, Globe, Rocket, Shield, Settings, Clock, TrendingUp, DollarSign, PieChart, Activity, AlertTriangle, Star, Award, Phone, Mail, MapPin, Leaf, Cloud, Droplets } from 'lucide-react';

const AIClimateSolutionsPro: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "Carbon Footprint Analysis",
      description: "AI-powered carbon tracking and reduction strategies for organizations",
      benefits: ["Real-time carbon monitoring", "Emission reduction planning", "Sustainability reporting"]
    },
    {
      icon: Cloud,
      title: "Climate Prediction Models",
      description: "Advanced AI models for accurate climate forecasting and weather prediction",
      benefits: ["Long-term climate modeling", "Weather pattern analysis", "Disaster prediction"]
    },
    {
      icon: Droplets,
      title: "Water Resource Management",
      description: "Optimize water usage and manage resources with AI-driven insights",
      benefits: ["Water consumption optimization", "Leak detection", "Resource allocation"]
    },
    {
      icon: Globe,
      title: "Environmental Monitoring",
      description: "Comprehensive environmental data collection and analysis",
      benefits: ["Air quality monitoring", "Ecosystem health tracking", "Biodiversity assessment"]
    }
  ];

  const pricingTiers = [
    {
      name: "Environmental",
      price: "$199",
      period: "per month",
      description: "Perfect for environmental organizations and NGOs",
      features: [
        "Basic carbon tracking",
        "Climate data access",
        "Environmental reports",
        "Email support",
        "5GB data storage"
      ],
      popular: false
    },
    {
      name: "Corporate",
      price: "$599",
      period: "per month",
      description: "Ideal for businesses committed to sustainability",
      features: [
        "Advanced carbon analytics",
        "Custom climate models",
        "Sustainability dashboards",
        "Priority support",
        "50GB data storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Government",
      price: "$1,999",
      period: "per month",
      description: "For government agencies and large institutions",
      features: [
        "Comprehensive climate analysis",
        "Custom environmental models",
        "Policy impact assessment",
        "Dedicated support",
        "Unlimited data storage",
        "Full API access",
        "Custom development"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      icon: Leaf,
      title: "Carbon Management",
      description: "Track and reduce carbon emissions across your organization",
      examples: ["Carbon accounting", "Emission reduction", "Carbon offsetting"]
    },
    {
      icon: Cloud,
      title: "Climate Research",
      description: "Advanced climate modeling and research capabilities",
      examples: ["Climate change analysis", "Weather prediction", "Environmental research"]
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Optimize water usage and conservation efforts",
      examples: ["Water efficiency", "Leak detection", "Resource management"]
    },
    {
      icon: Globe,
      title: "Sustainability Planning",
      description: "Develop comprehensive sustainability strategies",
      examples: ["Green initiatives", "Renewable energy", "Waste reduction"]
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
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Climate Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                AI Climate Solutions Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Combat climate change with AI-powered environmental solutions. Monitor, analyze, 
              and optimize your environmental impact with cutting-edge climate technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Carbon Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Environmental Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Organizations Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Climate Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Climate Solutions Pro platform combines artificial intelligence with 
              environmental science to deliver comprehensive climate action tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-green-400">
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
              Environmental Impact Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Climate Solutions Pro is helping organizations make a positive environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <application.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{application.description}</p>
                <ul className="space-y-1">
                  {application.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-xs text-green-400">• {example}</li>
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
              Choose Your Climate Action Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your environmental sustainability goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${tier.popular ? 'border-green-400 shadow-lg shadow-green-400/25' : 'border-gray-700'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-green-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white' 
                    : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-cyan-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Climate Action Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the solution to climate change. Start your environmental journey 
            with AI Climate Solutions Pro today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIClimateSolutionsPro;