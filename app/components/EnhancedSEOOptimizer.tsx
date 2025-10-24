'use client'
import { Metadata } from 'next';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react'

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings with AI-powered optimization',
    'Reduce SEO costs by 50% with automation',
    'Scale SEO operations without proportional staff increases',
    'Gain competitive advantage with advanced SEO technology'
  ];

const Component = () => {
  
  return (
    <>
      <Helmet />
        <title>Enhanced SEO Optimizer - Zion Tech Group</title />
        <meta name="description" content="Advanced Enhanced SEO Optimizer solution for modern businesses." / />
        <meta name="keywords" content="AI, artificial intelligence, SEO optimizer, AI solutions, intelligent automation" / />
      </Helmet />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Enhanced SEO Optimizer</h1 />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" />
              Advanced Enhanced SEO Optimizer solution for modern businesses.
            </p />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" />
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" / />
              </button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Learn More</button />
            </div />
          </div />
        </section />
        {/* Features Section  */
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2 />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" />Powerful AI-driven SEO features designed to transform your search rankings</p />
            </div />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) =</ (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" />
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" / />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3 />
                  <p className="text-gray-300 mb-4">{feature.description}</p />
                  <ul className="space-y-2" />{feature.benefits.map((benefit, idx) =</ (
                      <li key={idx} className="flex items-center text-sm text-gray-300" />
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />
                        {benefit}
                      </li />
                    ))}
                  </ul />
                </div />
              ))}
            </div>
          </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            </div>
          </div>
};