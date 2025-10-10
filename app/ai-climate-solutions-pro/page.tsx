'use client';
import React, { useState } from 'react';
<<<<<<< HEAD
import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Building } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Building } from 'lucide-react';
>>>>>>> origin/main

const AIClimateSolutionsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive AI-powered carbon footprint tracking and reduction strategies for organizations',
      icon: Leaf,
      benefits: [
<<<<<<< HEAD
=======
=======
      title: 'Carbon Footprint Analysis'
      description: 'Comprehensive AI-powered carbon footprint tracking and reduction strategies for organizations'
      icon: Leaf,
      benefits: [,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
<<<<<<< HEAD
      ],
      image: '/images/ai-climate-solutions/carbon-footprint.webp'
    },
    {
=======
      ]
    },
    {
<<<<<<< HEAD
>>>>>>> origin/main
      title: 'Weather Prediction & Modeling',
      description: 'Advanced weather forecasting with AI-powered climate modeling and extreme weather prediction',
      icon: Cloud,
      benefits: [
<<<<<<< HEAD
=======
=======
      title: 'Weather Prediction & Modeling'
      description: 'Advanced weather forecasting with AI-powered climate modeling and extreme weather prediction'
      icon: Cloud,
      benefits: [,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
<<<<<<< HEAD
      ],
      image: '/images/ai-climate-solutions/weather-prediction.webp'
    },
    {
=======
      ]
    },
    {
<<<<<<< HEAD
>>>>>>> origin/main
      title: 'Sustainability Planning',
      description: 'AI-driven sustainability roadmaps and environmental impact optimization strategies',
      icon: Target,
      benefits: [
<<<<<<< HEAD
=======
=======
      title: 'Sustainability Planning'
      description: 'AI-driven sustainability roadmaps and environmental impact optimization strategies'
      icon: Target,
      benefits: [,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Progress tracking & reporting'
<<<<<<< HEAD
      ],
      image: '/images/ai-climate-solutions/sustainability-planning.webp'
    },
    {
=======
      ]
    },
    {
<<<<<<< HEAD
>>>>>>> origin/main
      title: 'Emission Tracking & Monitoring',
      description: 'Real-time emission monitoring and automated compliance reporting for environmental regulations',
      icon: Activity,
      benefits: [
<<<<<<< HEAD
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Multi-source data integration'
      ],
      image: '/images/ai-climate-solutions/emission-tracking.webp'
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'AI-powered optimization of renewable energy systems for maximum efficiency and cost savings',
      icon: Globe,
      benefits: [
        'Solar/wind energy optimization',
        'Grid integration strategies',
        'Energy storage management',
        'Cost-benefit analysis'
      ],
      image: '/images/ai-climate-solutions/renewable-energy.webp'
    },
    {
      title: 'Climate Risk Assessment',
      description: 'Comprehensive climate risk analysis and adaptation strategies for businesses and communities',
      icon: Building,
      benefits: [
        'Climate vulnerability assessment',
        'Adaptation strategy development',
        'Risk mitigation planning',
        'Insurance optimization'
      ],
      image: '/images/ai-climate-solutions/climate-risk.webp'
    }
  ];

  const benefits = [
    'Reduce carbon emissions by up to 40%',
    'Save 30% on energy costs',
    'Improve regulatory compliance',
    'Enhance sustainability reporting',
    'Optimize resource utilization',
    'Future-proof your business'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Essential climate solutions for small to medium businesses',
      features: [
        'Basic carbon tracking',
        'Weather monitoring',
        'Simple reporting',
        'Email support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Advanced climate solutions for growing organizations',
      features: [
        'Advanced carbon analytics',
        'Predictive modeling',
        'Custom reporting',
        'Priority support',
        'Up to 10 users',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'Comprehensive climate solutions for large organizations',
      features: [
        'Full AI suite',
        'Custom modeling',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'Custom development',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Green',
      company: 'EcoTech Industries',
      role: 'Sustainability Director',
      quote: 'AI climate solutions helped us reduce our carbon footprint by 45% while saving $2M annually in energy costs.',
      rating: 5,
      image: '👩‍🔬'
    },
    {
      name: 'Michael Chen',
      company: 'Green Energy Corp',
      role: 'CEO',
      quote: 'The predictive modeling capabilities are incredible. We prevented $5M in climate-related damages last year.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Sustainable Cities',
      role: 'City Manager',
      quote: 'Climate risk assessment tools helped us develop effective adaptation strategies for our community.',
      rating: 5,
      image: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">🌱</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Climate Solutions Pro
          </h1>
          <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
            Advanced AI for Climate Action
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive AI-powered climate solutions that help organizations reduce emissions, 
            optimize sustainability, and build climate resilience.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Emission Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Climate Action
            </button>
            <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Climate Solutions
=======
=======
      title: 'Emission Tracking & Monitoring'
      description: 'Real-time emission monitoring and automated compliance reporting for environmental regulations'
      icon: Activity,
      benefits: [,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Regulatory compliance tracking'
      ]
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'AI-powered optimization of renewable energy systems and smart grid management',
      icon: Globe,
      benefits: [
        'Energy efficiency optimization',
        'Smart grid management',
        'Renewable energy forecasting',
        'Cost reduction strategies'
      ]
    },
    {
      title: 'Environmental Risk Assessment',
      description: 'Comprehensive environmental risk analysis and mitigation strategies using AI',
      icon: CheckCircle,
      benefits: [
        'Risk identification & analysis',
        'Mitigation strategy recommendations',
        'Environmental impact assessment',
        'Compliance risk monitoring'
      ]
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Reduce carbon emissions by 40%',
    'Lower energy costs by 35%',
    'Improve sustainability compliance by 90%',
    'Increase operational efficiency by 50%',
    'Enable data-driven climate decisions',
    'Automate environmental reporting',
    'Scale sustainability initiatives',
    'Enhance environmental reputation'
=======
  const pricing = {
    monthly: 3200,
    yearly: 32000,
    features: [,
      'Unlimited environmental monitoring',
      'Advanced AI climate models',
      'Real-time data processing',
      '24/7 technical support',
      'Custom model training',
      'API access',
      'Data export/import',
      'White-label options'
    ],
    addOns: [,
      {,
        name: 'Custom Climate Models',
        price: 1500,
        description: 'Train AI models on your specific climate data'},
      {
        name: 'Dedicated Support',
        price: 800,
        description: 'Dedicated environmental specialist'},
      {
        name: 'On-premise Deployment',
        price: 3000,
        description: 'Deploy on your infrastructure'}
    ]
  };

  const testimonials = [
    {
      name: 'Jennifer Walsh'
      role: 'VP of Sustainability',
      company: 'GreenTech Solutions',
      content: 'AI Climate Solutions Pro helped us reduce our carbon footprint by 40% while improving operational efficiency. The ROI was evident within the first quarter.',
      rating: 5,
      avatar: 'JW'},
    {
      name: 'Dr. Michael Chen',
      role: 'Environmental Director',
      company: 'EcoCorp International',
      content: 'The weather prediction accuracy is incredible. We achieved 95% accuracy in forecasting extreme weather events, helping us prepare better for climate risks.',
      rating: 5,
      avatar: 'MC'},
    {
      name: 'Sarah Rodriguez'
      role: 'Chief Sustainability Officer',
      company: 'ClimateFirst Industries',
      content: 'The sustainability planning feature helped us create a comprehensive roadmap to net-zero emissions. This is exactly what we needed for our climate goals.',
      rating: 5,
      avatar: 'SR'}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  ];

  const useCases = [
    {
      title: 'Corporate Sustainability',
      description: 'Help corporations achieve their sustainability goals and reduce environmental impact',
      icon: '🏢'
    },
    {
      title: 'Smart Cities',
      description: 'Build sustainable smart cities with AI-powered environmental management',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Optimize agricultural practices for climate resilience and sustainability',
      icon: '🌾'
    },
    {
      title: 'Energy Sector',
      description: 'Optimize renewable energy systems and reduce carbon footprint',
      icon: '⚡'
    },
    {
      title: 'Transportation',
      description: 'Develop sustainable transportation solutions and reduce emissions',
      icon: '🚗'
    },
    {
      title: 'Manufacturing',
      description: 'Optimize manufacturing processes for environmental sustainability',
      icon: '🏭'
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered climate solutions for sustainability, carbon reduction, and environmental management. Advanced analytics and optimization for climate action." />
        <meta name="keywords" content="AI climate solutions, sustainability, carbon reduction, environmental management, climate analytics, green technology" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Climate Solutions Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI-powered climate solutions for sustainability, carbon reduction, 
              and environmental management. Advanced analytics and optimization for climate action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                Start Your Climate Journey
                <Play className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Climate Solutions Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Climate Solutions Pro combines cutting-edge technology with environmental expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"></div>
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Climate Solutions Pro</span><h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">AI-Powered Climate Solutions</h1><span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Saving Our Planet</span><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Combat climate change with intelligent environmental monitoring, carbon footprint optimization,</p>
              and sustainability planning. Make data-driven decisions for a greener future.</p>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"></div>
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Climate Solutions Pro</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Climate Solutions;</h1>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">)
                Saving Our Planet;)
              </span>)
            </h1>)
),
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">),
              Combat climate change with intelligent environmental monitoring, carbon footprint optimization)
              and sustainability planning. Make data-driven decisions for a greener future.
            </p>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" >Explore Features</Play>
              </Play>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              ></a>
                <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calenda>
              </Calendar>
                <Play className="w-5 h-5 mr-2" />
                Explore Features;
              </a>
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4"></div>
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">{stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"><div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}<div className="text-gray-400 font-medium">{stat.label}</div>
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-6xl mx-auto">,
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,</div>
                    <stat.icon className="w-10 h-10 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div><div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Advanced Climate AI Capabilities<p className="text-lg text-gray-300 max-w-3xl mx-auto">Cutting-edge AI technology designed specifically for environmental monitoring and climate solutions<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="flex items-center space-x-4 mb-6"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}<p className="text-gray-300">{feature.description}<div className="space-y-3">{feature.benefits.map((benefit, benefitIndex) => (</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Advanced Climate AI Capabilities;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools for climate action and sustainability
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
=======
          </div>,
,
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover: bg-slate-700/50 transition-all duration-300"></div>
                <div className="flex items-center space-x-4 mb-6">,</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">,</div>
                    <feature.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div>,</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (</div>
                    <div key={benefitIndex} className="flex items-center space-x-3"></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Advanced Climate AI Capabilities</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Cutting-edge AI technology designed specifically for environmental monitoring and climate solutions</p><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="flex items-center space-x-4 mb-6"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3><p className="text-gray-300">{feature.description}</p><div className="space-y-3">{feature.benefits.map((benefit, benefitIndex) => (</div>
                    <div key={benefitIndex} className="flex items-center space-x-3"></div>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Climate Solutions Platform<p className="text-lg text-gray-300 max-w-3xl mx-auto">End-to-end AI-powered solutions for environmental monitoring and climate action<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">{capabilities.map((capability, index) => (</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Comprehensive Climate Solutions Platform;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              End-to-end AI-powered solutions for environmental monitoring and climate action;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">,
            {capabilities.map((capability, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}<ul className="space-y-3">{capability.items.map((item, itemIndex) => (</ul>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Climate Solutions Platform</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">End-to-end AI-powered solutions for environmental monitoring and climate action</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">{capabilities.map((capability, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}</h3><ul className="space-y-3">{capability.items.map((item, itemIndex) => (</ul>
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
>>>>>>> origin/main
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Climate Solutions?
=======
      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Enterprise Pricing<p className="text-lg text-gray-300 max-w-3xl mx-auto">Flexible pricing options for organizations committed to climate action</p>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Enterprise Pricing;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your organization's climate impact with intelligent solutions
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
=======
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-slate-800/50 rounded-2xl p-8"></div>
              <div className="text-center mb-8"></div>
                <h3 className="text-3xl font-bold text-white mb-2">AI Climate Solutions Pro<p className="text-gray-300 mb-6">Complete AI-powered climate solutions platform</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Enterprise Pricing</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Flexible pricing options for organizations committed to climate action</p>
            </p>
>>>>>>> origin/main
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Climate Solution Plans
=======
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-slate-800/50 rounded-2xl p-8"></div>
              <div className="text-center mb-8"></div>
                <h3 className="text-3xl font-bold text-white mb-2">AI Climate Solutions Pro</h3><p className="text-gray-300 mb-6">Complete AI-powered climate solutions platform</p>

                <div className="flex items-baseline justify-center mb-6"></div>
                  <span className="text-5xl font-bold text-white">${pricing.monthly.toLocaleString()}</span><span className="text-gray-400 ml-2">/month</span><div className="text-green-400 text-sm mb-8">Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual billing</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"></div>
                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:<ul className="space-y-3">{pricing.features.map((feature, index) => (</ul>
                <h3 className="text-3xl font-bold text-white mb-2">AI Climate Solutions Pro</h3>
                <p className="text-gray-300 mb-6">Complete AI-powered climate solutions platform</p>,
,
                <div className="flex items-baseline justify-center mb-6">,</div>
                  <span className="text-5xl font-bold text-white">${pricing.monthly.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>

                <div className="text-green-400 text-sm mb-8">
                  Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual billing;</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md: grid-cols-2 gap-8 mb-8">,</div>
                <div>,</div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>,
                  <ul className="space-y-3">,
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From corporations to cities, our AI Climate Solutions Pro serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Climate Solutions Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of climate action with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Take Climate Action?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of organizations who are already using our AI Climate Solutions Pro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <Play className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
=======

                <div></div>
                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Add-ons:<ul className="space-y-3">{pricing.addOns.map((addon, index) => (</ul>
                  <h4 className="text-lg font-semibold text-white mb-4">Add-ons: </h4>,
                  <ul className="space-y-3">,
                    {pricing.addOns.map((addon, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div></div>
                          <div className="text-white font-medium">{addon.name}</div><div className="text-gray-400 text-sm">{addon.description}</div><div className="text-cyan-400 font-bold">+${addon.price.toLocaleString()}/mo</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center"></div>
                <a;
              <div className="text-center"></div>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" >Get Started Today</MessageSquare>
                </MessageSquare>
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today;
                </a>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by Leading Environmental Organizations<p className="text-lg text-gray-300 max-w-3xl mx-auto">See how our AI technology is transforming climate action<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{testimonials.map((testimonial, index) => (</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Trusted by Leading Environmental Organizations;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right climate solution for your organization
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-green-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white'
                    : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations achieved remarkable climate results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-green-400">{testimonial.role}, {testimonial.company}</p>
=======
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by Leading Environmental Organizations</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">See how our AI technology is transforming climate action</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"></div>
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div></div>
                    <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-cyan-400">{testimonial.role}</div><div className="text-sm text-gray-400">{testimonial.company}</div>
>>>>>>> origin/main
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Climate Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your climate transformation journey with AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Take Climate Action?<p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join leading organizations using AI to combat climate change and build a sustainable future.</p>
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
            Ready to Take Climate Action?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join leading organizations using AI to combat climate change and build a sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a;
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Take Climate Action?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join leading organizations using AI to combat climate change and build a sustainable future.</p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" >Start Free Trial</MessageSquare>
            </MessageSquare>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></a>
              <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calenda>
            </Calendar>
>>>>>>> origin/main
          </div>
        </section>
      </main>

<<<<<<< HEAD
      <Footer />
=======
          <div className="text-gray-200 text-sm"></div>
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com<p>📍 Address: {contactInfo.address}</p>
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial;
            </a>
            <a;
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo;
            </a>
          </div>

          <div className="text-gray-200 text-sm">,</div>
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>,
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>,
            <p>📍 Address: {contactInfo.address}</p>
          <div className="text-gray-200 text-sm"></div>
            <p>📞 Call us:</p> <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a>
            <p>✉️ Email:</p> <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com<p>📍 Address: {contactInfo.address}</p>
          </div>
        </div>
      </section>

      <Footer /></Footer>
>>>>>>> origin/main
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  );
<<<<<<< HEAD
}
=======
};

export default AIClimateSolutionsProPage;
>>>>>>> origin/main
