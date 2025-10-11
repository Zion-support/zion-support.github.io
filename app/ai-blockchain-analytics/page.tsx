'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
    };,
title: 'AI-Powered Solutions',;,
description: 'Advanced artificial intelligence technology to transform your business operations.',;,
benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

return (
    <>

      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." />
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" />

      <Navigation />

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Discover our comprehensive page solutions designed to transform your business with AI and advanced technology.
              </p>

      <Footer />
    </>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />

      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                    )
    </>
  )

      <Footer />
    </>
              ))}

      <Footer />
    </>

        {/* Benefits Section */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />

      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>

      <Footer />
    </>
              ))}

      <Footer />
    </>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
            <p className="text-xl text-gray-300 mb-8">
Join thousands of businesses already using our AI-powered solutions.>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
Start Free Trial>
                <ArrowRight className="ml-2 h-5 w-5">
</button>
              <button className=">
    ,>
    r: bg-blue-600 hove, r:text-white transition-colors">
                Schedule Demo

      <Footer />
    </>
  );
}  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
      </section>


export default PagePage;