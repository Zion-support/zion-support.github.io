'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
      benefits: ['Unified dashboard', 'Centralized control', 'Real-time monitoring', 'Easy management']},
    {title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']},
    {title: 'Security & Compliance',
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
    {icon: <Settings className="w-8 h-8 text-blue-500" />, value: '500+', label: 'APIs Managed' ,},
    {icon: <Zap className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' ,},
    {icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Security' ,},
    {icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Efficiency Gain' ,}]
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
        <meta name="description" content="Streamline and secure your API infrastructure with our AI API Manager solution. Advanced security, performance optimization, and intelligent monitoring." />
        <meta name="keywords" content="AI API manager, API gateway, API security, microservices, API monitoring, API optimization" />
      </Helmet>

      <Helmet>
<title>Ai Api Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai api manager solution for modern businesses." />
        <meta name="keywords" content="AI ai api manager, artificial intelligence, ai api manager, AI solutions, intelligent automation" />
      </Helmet>
      
      <Navigation />

<Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Api Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai api manager solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Helmet>
        <title>AI API Manager | Zion Tech Group</title>
      {/* Hero Section */} <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
</div>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
            AI API Manager;
          </h1>
          <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,</p>
            Comprehensive API management platform with AI-powered insights, security, and optimization;
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
              Get Started;
            </button>
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI API Manager solution combines cutting-edge technology with enterprise-grade security
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
      {/* Stats Section */} <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
            {stats.map((stat, index) => (
              <div key={index}className="text-center">
                <div className="flex justify-center mb-4">{stat.icon</div>} </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
      {/* Features Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Platform Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to manage your APIs effectively;</p>
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description</p>}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit</span>}</span>
                    </li>
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our comprehensive API management solution;</p>
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
</div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Ready to Manage Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Start managing your APIs more effectively with our comprehensive platform.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Start Free Trial;
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                Contact Sales;
        <section className="py-20 px-4">
        </section>
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      ))
      <Footer />
    </div>
  );
};

export default AiApiManagerPage;
