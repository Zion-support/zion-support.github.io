"use client"

import React from "react"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react'

export default function Home() {
  const features = [
    {
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
<<<<<<< HEAD
      title: "IT Services",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management",
      icon: BarChart,
      benefits: [
        "Cloud Migration",
        "Cybersecurity",
        "Infrastructure Management",
        "System Integration"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and operations",
      icon: Target,
      benefits: [
        "Process Automation",
        "Digital Strategy",
        "Technology Consulting",
        "Change Management"
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Advanced analytics and business intelligence to drive data-driven decision making",
      icon: TrendingUp,
      benefits: [
        "Business Intelligence",
        "Data Visualization",
=======
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
      description: 'Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises',
      icon: Target,
      benefits: ['Rapid Deployment',
        "Scalable Architecture",
        "Custom Development",
        "Ongoing Maintenance"
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance',
      icon: TrendingUp,
      benefits: ['Data Visualization',
>>>>>>> cursor/fix-errors-and-merge-to-main-f852
        "Performance Analytics",
        "Predictive Modeling"
      ]
    }
  ];

<<<<<<< HEAD
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Expert Team Members", icon: Star }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.
=======
  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      <Navigation />
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
        <div className='relative max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600'>Zion Tech Group</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Advanced AI and IT solutions for modern businesses. We help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'>
              Get Started
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Solutions
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Comprehensive AI and IT solutions designed to transform your business.
>>>>>>> cursor/fix-errors-and-merge-to-main-f852
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-8 h-8" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
=======
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4'>
                  <feature.icon className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <ul className='space-y-2'>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-f852
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven track record of delivering exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our solutions to drive growth and innovation
=======
      {/* Benefits Section */}
      <section className='py-20 px-4 bg-white/5'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Our proven track record and innovative approach deliver measurable results.
>>>>>>> cursor/fix-errors-and-merge-to-main-f852
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
      </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto'>
            Start Your Journey
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-f852
      <Footer />
    </>
  )
}