'use client'
import React from 'react';
import {Helmet;} from 'react-helmet-async'
import {ArrowRight;, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {const features = [
    {;,} icon: Brain},;,
title: 'AI-Powered Solutions',;,
description: 'Advanced artificial intelligence technology to transform your business operations.',;,
benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']
    },
    {;,
icon: BarChart,;,
title: 'Advanced Analytics',;,
description: 'Comprehensive analytics dashboard with real-time data visualization.',;,
benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']} ,
    {;,
icon: TrendingUp,;,
title: 'Performance Optimization',;,
description: 'AI-powered insights to optimize your business performance.',;,
benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']} ,
    {;,
icon: Target,;,
title: 'Precision Targeting',;,
description: 'Target specific goals and objectives with precision.',;,
benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']} ]

const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]

return (
    <>

      <Helmet>
        <title>Page Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions for modern businesses."
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"
            <div className="text-center"
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"
Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
Discover our comprehensive page solutions designed to transform your business with AI and advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  Learn More
                </button>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Discover the powerful features that make our solutions stand out.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  <div className="flex items-center mb-4"
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"
                    <h3 className="text-xl font-semibold text-gray-900"
                  </div>
                  <p className="text-gray-600 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600"
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2"
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
              ))}
            </div>

        <section className="py-20 bg-gray-100"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Experience the benefits of working with industry leaders.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-3 gap-8"
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg"
                  <div className="flex items-center"
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3"
                    <span className="text-lg font-medium text-gray-900"
                  </div>
              ))}
            </div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8"
          <div className="max-w-4xl mx-auto text-center"
            <h2 className="text-4xl font-bold text-white mb-6"
            <p className="text-xl text-gray-300 mb-8"
Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5"
              </button>
              <button className="
    ,
    r: bg-blue-600 hove, r:text-white transition-colors"
                Schedule Demo
              </button>
      
      <Footer />
    </>
  )
}
              </Navigation>
