'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Brain, Cloud, Shield, Zap, BarChart, Globe, Leaf, Thermometer, Wind, Droplets, Sun, TreePine, Factory, Car, Recycle, AlertTriangle, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Target, TrendingUp, Award, Lightbulb, Cpu, Database, Eye, Mic, MessageSquare, Settings, Calendar, FileText, Heart, Lock, Wifi, Monitor, Smartphone, Code, Layers, Workflow, BarChart3, MessageCircle, Headphones, Package, HardDrive, Printer, Router, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye as Vision, Mic as Voice, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as NetworkIcon, Printer as PrintIcon, Router as GatewayIcon, Package as BoxIcon } from 'lucide-react'

const AiClimateSolutionsProPage: React.FC = () => {
  const features = [
    {
      icon: Thermometer,
      title: 'Climate Risk Assessment',
      description: 'AI-powered climate risk analysis and vulnerability assessment for businesses and communities',
      price: '$2,999/month',
      marketPrice: '$5,000-15,000/month',
      features: ['Real-time climate data analysis', 'Risk scoring algorithms', 'Vulnerability mapping', 'Adaptation recommendations', 'Regulatory compliance tracking'],
      benefits: ['Proactive risk management', 'Cost savings through early intervention', 'Regulatory compliance', 'Enhanced business resilience']
    },
    {
      icon: Wind,
      title: 'Renewable Energy Optimization',
      description: 'AI-driven optimization of renewable energy systems for maximum efficiency and cost savings',
      price: '$1,999/month',
      marketPrice: '$3,500-12,000/month',
      features: ['Solar panel optimization', 'Wind farm efficiency analysis', 'Energy storage management', 'Grid integration solutions', 'Predictive maintenance'],
      benefits: ['30% increase in energy efficiency', 'Reduced operational costs', 'Improved ROI on renewable investments', 'Sustainable energy management']
    },
    {
      icon: TreePine,
      title: 'Carbon Footprint Tracking',
      description: 'Comprehensive carbon footprint monitoring and reduction strategies using advanced AI analytics',
      price: '$1,499/month',
      marketPrice: '$2,500-8,000/month',
      features: ['Real-time carbon monitoring', 'Emission source identification', 'Reduction strategy recommendations', 'Carbon credit management', 'Sustainability reporting'],
      benefits: ['Achieve carbon neutrality goals', 'Cost savings through efficiency', 'Enhanced brand reputation', 'Regulatory compliance']
    },
    {
      icon: Droplets,
      title: 'Water Management Intelligence',
      description: 'AI-powered water resource management and conservation optimization systems',
      price: '$1,799/month',
      marketPrice: '$3,000-10,000/month',
      features: ['Water usage optimization', 'Leak detection algorithms', 'Quality monitoring', 'Conservation recommendations', 'Predictive maintenance'],
      benefits: ['40% reduction in water waste', 'Improved water quality', 'Cost savings', 'Environmental compliance']
    },
    {
      icon: Factory,
      title: 'Industrial Sustainability',
      description: 'AI solutions for sustainable manufacturing and industrial processes optimization',
      price: '$3,499/month',
      marketPrice: '$6,000-20,000/month',
      features: ['Process optimization', 'Waste reduction algorithms', 'Energy efficiency monitoring', 'Supply chain sustainability', 'Circular economy solutions'],
      benefits: ['Reduced environmental impact', 'Cost savings through efficiency', 'Improved sustainability metrics', 'Competitive advantage']
    },
    {
      icon: Car,
      title: 'Green Transportation',
      description: 'AI-powered optimization for sustainable transportation and logistics solutions',
      price: '$2,299/month',
      marketPrice: '$4,000-15,000/month',
      features: ['Route optimization', 'Fleet management', 'Emission reduction strategies', 'Electric vehicle integration', 'Logistics efficiency'],
      benefits: ['Reduced transportation costs', 'Lower carbon emissions', 'Improved delivery efficiency', 'Sustainable logistics']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999/month',
      description: 'Perfect for small businesses starting their climate journey',
      features: [
        'Basic climate risk assessment',
        'Carbon footprint tracking',
        'Monthly sustainability reports',
        'Email support',
        'Up to 5 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499/month',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Advanced climate analytics',
        'Renewable energy optimization',
        'Water management intelligence',
        'Priority support',
        'Up to 25 users',
        'Custom reporting',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999/month',
      description: 'Complete climate solutions for large organizations',
      features: [
        'All AI climate solutions',
        'Custom AI model training',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Climate Solutions <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Pro</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced AI-powered climate solutions to help businesses achieve sustainability goals, reduce environmental impact, and build climate resilience. 
              Transform your organization with cutting-edge environmental intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Climate Journey
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Climate Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered climate solutions provide actionable insights to help your business navigate environmental challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-green-400 font-semibold">{feature.price}</span>
                      <span className="text-gray-400 text-sm">Market: {feature.marketPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  {feature.features.map((feat, featIndex) => (
                    <div key={featIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Climate Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your organization's climate goals and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700' 
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Lead Climate Innovation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking organizations using AI to build a sustainable future. 
            Contact us today to start your climate transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiClimateSolutionsProPage