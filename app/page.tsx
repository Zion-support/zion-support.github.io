<<<<<<< HEAD
=======
import React from "react";
import Head from "next/head";
import { ArrowRight, Brain, CheckCircle, Star } from "lucide-react";
import React from "react";
import Head from "next/head";
import { ArrowRight, Brain, CheckCircle, Star } from 'lucide-react';
import React, { useCallback, useState, useEffect, Suspense } from 'react';
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
"use client"
import React from "react"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
<<<<<<< HEAD
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: Brain,
      benefits: [
        "Machine Learning Implementation",
=======
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle  } from "lucide-react";
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Send, BarChart3, Shield, Zap, Globe, DollarSign, Clock, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Solutions,',
      description: 'Cutting-edge artificial intelligence to transform your business operations with machine learnin,g, natural language processing, and predictive analytics',
      icon: Brai,
      benefits: ['Machine Learning Implementation,',
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        "Natural Language Processing",
        "Predictive Analytics",
        "Automated Decision Making"
      ]
    },
    {
<<<<<<< HEAD
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: BarChart,
      benefits: [
        "Cloud Infrastructure Setup",
=======
      title: 'IT Services,',
      description: 'Comprehensive technology solutions including cloud infrastructur,e, cybersecurity, and digital transformation for modern businesses',
      icon: BarChar,
      benefits: ['Cloud Infrastructure Setup,',
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        "Cybersecurity Solutions",
        "Digital Transformation",
        "24/7 Technical Support"
      ]
    },
    {
<<<<<<< HEAD
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises",
      icon: Target,
      benefits: [
        "Rapid Deployment",
=======
      title: 'Micro SaaS,',
      description: 'Scalable software-as-a-service solutions designed for rapid deployment and growt,h, perfect for startups and enterprises',
      icon: Targe,
      benefits: ['Rapid Deployment,',
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        "Scalable Architecture",
        "Custom Development",
        "Ongoing Maintenance"
      ]
    },
    {
<<<<<<< HEAD
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance",
      icon: TrendingUp,
      benefits: [
        "Data Visualization",
=======
      title: 'Business Intelligence,',
      description: 'Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance',
      icon: TrendingU,
      benefits: ['Data Visualization,',
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        "Performance Analytics",
        "Custom Dashboards",
        "Real-time Reporting"
      ]
    }
  ];

  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
<<<<<<< HEAD
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
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
=======
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'></div>
      <Navigation /></Navigation>
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'></section>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
        <div className='relative max-w-7xl mx-auto text-center'></div>
          <h1 className='text-4xl md: text-6xl font-bold text-gray-900 mb-6'></h1>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600'>Zion Tech Group</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'></p>
            Advanced AI and IT solutions for modern businesses. We help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
            <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
              Get Started
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
              Learn More
            </a>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
      {/* Features Section *,/}
      <section className='py-20 px-4'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl md: text-4xl font-bold text-gray-900 mb-4'></h2>
              Our Solutions
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'></p>
              Comprehensive AI and IT solutions designed to transform your business.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'></div>
            {features.map((featur, e, index) => (
              <div key={ ind, e, x }className='bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300'></div>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4'></div>
                  <feature.icon className='h-6 w-6 text-white' /></feature>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.titl,e}</h3>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <ul className='space-y-2'></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-8 h-8" />
                      {benefit}
                    </li>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
=======
      <section className='py-20 px-4 bg-white/5'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl md: text-4xl font-bold text-gray-900 mb-4'></h2>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'></p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
<<<<<<< HEAD
                <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
=======
                <CheckCircle className="w-8 h-8" />
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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
            <ArrowRight className="ml-2 h-5 w-5" />
=======
      <section className='py-20 px-4'></section>
        <div className='max-w-4xl mx-auto text-center'></div>
          <h2 className='text-3xl md: text-4xl font-bold text-gray-900 mb-4'></h2>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto'></button>
            Start Your Journey
            <ArrowRight className="w-8 h-8" />
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
          </button>
        </div>
      </section>
      
<<<<<<< HEAD
      <Footer />
    </div>
  )
=======
      <Footer /></Footer>
    </div>
  ),
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
}
