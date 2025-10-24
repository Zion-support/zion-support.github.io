<<<<<<< HEAD
"use client";

import React from 'react';
import Link from 'next/link';
import { Brain, Shield, Zap, Star } from 'lucide-react';
=======
"use client"
import React from "react"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Target, CheckCircle, BarChart, Brain, TrendingUp } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4

const HomePage = () => {
  const features = [
    {
<<<<<<< HEAD
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure and cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime",
      link: "/it-services"
    },
    {
      title: "Performance Optimization",
      description: "Advanced performance monitoring and optimization for maximum efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "3x faster",
      link: "/performance"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance to ensure reliable solutions",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      stats: "100% tested",
      link: "/quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming businesses with cutting-edge AI and IT solutions. 
              We deliver innovative technology that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
=======
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics',
      icon: Brain,
      benefits: ['Machine Learning Implementation',
        "Natural Language Processing",
        "Predictive Analytics",
        "Automated Decision Making"
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses',
      icon: BarChart,
      benefits: ['Cloud Infrastructure Setup',
        "Cybersecurity Solutions",
        "Digital Transformation",
        "24/7 Technical Support"
      ]
    },
    {
      title: 'Micro SaaS',
      description: 'Custom software solutions designed to solve specific business problems with scalable, maintainable applications',
      icon: Target,
      benefits: ['Custom Software Development',
        "Scalable Architecture",
        "Maintenance & Support",
        "Performance Optimization"
      ]
    }
  ]

  return (
    <div className="min-h-s creenbg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="rel ativepy-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7x lmx-auto text-center">
          <h1 className="tex t-5xlmd:text-6xl font-bold text-white mb-6">
            Welcome to <span className="tex t-transparentbg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT Solutions for Modern Businesses. Transform your operations with cutting-edge technology.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gr adient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2w-5h-5" />
            </button>
            <button className="bor derborder-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-400">
                      {feature.stats}
                    </span>
                    <Link 
                      href={feature.link}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
=======
      {/* Features Section */}
      <section className="py-20px-4 s m: px-6 lg:px-8">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-4xlfont-bold text-white mb-4">Our Services</h2>
            <p className="tex t-xltext-gray-300">Comprehensive solutions for your business needs</p>
          </div>
          
          <div className="gri dmd:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-wh ite/10backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="fle xitems-center mb-4">
                  <feature.icon className="w-8h-8te x t-cyan-400 mr-3" />
                  <h3 className="tex t-xlfont-bold text-white">{feature.title}</h3>
                </div>
                <p className="tex t-gray-300mb-4">{feature.description}</p>
                <ul className="spa ce-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="fle xitems-center text-gray-300">
                      <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default HomePage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
