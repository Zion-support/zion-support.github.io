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
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce

const HomePage = () => {
  const features = [
    {
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
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      benefits: [
        "Machine Learning Implementation",
        "Natural Language Processing",
        "Predictive Analytics",
        "Automated Decision Making"
      ]
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      benefits: [
        "Cloud Infrastructure Setup",
        "Cybersecurity Solutions",
        "Digital Transformation",
        "24/7 Technical Support"
      ]
    },
    {
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises",
      icon: <Target className="w-8 h-8 text-green-400" />,
      benefits: [
        "Rapid Deployment",
        "Scalable Architecture",
        "Custom Development",
        "Ongoing Maintenance"
      ]
    },
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance",
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      benefits: [
        "Data Visualization",
        "Performance Analytics",
        "Custom Dashboards",
        "Real-time Reporting"
      ]
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT solutions for modern businesses. We help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  {feature.icon}
                </div>
=======
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-8 h-8" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
=======

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-8 h-8" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your Journey
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default HomePage
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
