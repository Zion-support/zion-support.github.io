<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
=======
>>>>>>> origin/main

import {CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3}}from 'lucide-react';

const AIApiManagementPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react'
const AIApiManagementPage: React.FC = () => {
>>>>>>> origin/main

  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
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
=======
      title: 'Intelligent API Monitoring',
      description: 'Real-time monitoring and analytics for all your APIs with AI-powered insights and anomaly detection.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts']},
    {title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']},
    {title: 'Automated Documentation',
=======
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts']
    },
    {
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']
    },
    {

      title: 'Automated Documentation',
>>>>>>> main
      description: 'Generate and maintain comprehensive API documentation automatically with AI-powered analysis.',
      benefits: ['Auto-generated docs', 'Interactive examples', 'Version management', 'Developer portal']},
  ];
  const benefits = [

    'Reduced API downtime by 95%',
    '50% faster API response times',
    'Automated security scanning',
    'Real-time performance monitoring',
    'Intelligent load balancing',
    'Cost optimization insights'
  ];
  const stats = [
<<<<<<< HEAD
    {icon: <Zap className="w-8 h-8 text-blue-500" />, value: '99.9%', label: 'Uptime' ,},
    {icon: <Shield className="w-8 h-8 text-green-500" />, value: '100%', label: 'Security' ,},
    {icon: <Users className="w-8 h-8 text-purple-500" />, value: '10K+', label: 'APIs Managed' ,},
    {icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' ,}]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">)</div>
      <Helmet />
=======
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts'];
=======
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts'],
>>>>>>> origin/main
    },
    {
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling'],
    },
<<<<<<< HEAD
    {];];
=======
    { icon: <Zap className="w-8 h-8 text-blue-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '100%', label: 'Security' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '10K+', label: 'APIs Managed' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }

  ]
>>>>>>> origin/main
    }
  ];
  const benefits = [
<<<<<<< HEAD
'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
=======

>>>>>>> origin/main
  ];
>>>>>>> main
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
>>>>>>> origin/main
        <title>AI API Management | Zion Tech Group</title>
=======
    {

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
<title>Ai Api Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai api management solution for modern businesses." />
        <meta name="keywords" content="AI ai api management, artificial intelligence, ai api management, AI solutions, intelligent automation" />
      </Helmet>
      
      <Navigation />

<<<<<<< HEAD
      <Navigation />

=======
<<<<<<< HEAD
>>>>>>> origin/main
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
=======
<Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
>>>>>>> origin/main
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Api Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai api management solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </main>

=======
=======

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>AI API Management | Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="Advanced AI-powered API management solutions by Zion Tech Group. Intelligent monitoring, security, and optimization for your APIs." />
        <meta name="keywords" content="API management, AI solutions, API monitoring, rate limiting, API security, Zion Tech Group" />

      </Helmet>
      <Navigation />
<<<<<<< HEAD
      {/* Hero Section */} <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
</div>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
            AI-Powered API Management;
          </h1>
          <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,</p>
            Intelligent API management with AI-driven monitoring, security, and optimization for enterprise-grade performance;
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
              Start Free Trial;
            </button>
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        </section></section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">

          </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI-Powered API Management

          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" /></p>
            Intelligent API management with AI-driven monitoring, security, and optimization for enterprise-grade performance
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
>>>>>>> origin/main
              View Demo,
  
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Stats Section */} <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
            {stats.map((stat, index) => (
              <div key={index}className="text-center">
                <div className="flex justify-center mb-4">{stat.icon</div>} </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
=======
      {/* Stats Section */}
      <section className="py-16 px-4">
        </section>< className="$2 />
          </div><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              </div><div key={index} className="text-center">
                </div><div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Powerful Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive API management with AI-powered intelligence;</p>
=======
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI API Management
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Intelligent API management with AI-driven monitoring, security, and optimization for enterprise-grade performance
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
      {/* Features Section */}
      <section className="py-20 px-4">
        </section>< className="$2 />
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Comprehensive API management with AI-powered intelligence
>>>>>>> origin/main
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">,</div>
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description</p>}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit</span>}</span>
                    </li>
=======
              </div><div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                </div><h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    </ul><li key={benefitIndex} className="flex items-center text-gray-300">
                      </li><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced solutions designed for modern business needs
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}
                <p className="text-gray-300 mb-6">{feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}
>>>>>>> origin/main
                  ))}
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions;</p>
  </
=======
      {/* Benefits Section */}
      <section className="py-20 px-4">
        </section>< className="$2 />
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions
  
>>>>>>> origin/main
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,</div>
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
=======
              </div><div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                </div><div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  </div><CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
>>>>>>> origin/main
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-lg font-semibold text-white">{benefit}
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
</div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your API management requirements and get started today.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Contact Us;
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                Learn More;
=======
      {/* CTA Section */}
      <section className="py-20 px-4">
        </section>< className="$2 />
          </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Contact our experts to discuss your API management requirements and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
                Learn More
>>>>>>> origin/main
              </button>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main

      <Footer /></Footer>
    </div>
  ),
}
export default AIApiManagementPage
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?
          <p className="text-xl text-gray-300 mb-8">Transform your business with our page solutions today
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales
>>>>>>> origin/main
        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
        </section>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful AI API Management Features
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI API management platform can revolutionize your development workflow.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
=======
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}
                  <p className="text-gray-600 mb-4">{feature.description}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                    ))}
>>>>>>> origin/main
              ))}
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
        </section>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI API Management?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <p className="text-lg font-medium text-gray-900">{benefit}
              ))}
        {/* CTA Section */}
<<<<<<< HEAD
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
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      ))
>>>>>>> origin/main
      <Footer />
    </div>
  );
};

export default AiApiManagementPage;
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your API Management?
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI API management platform.
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">Start Your Free Trial
      <Footer />
  )
}
export default AiApiManagementPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></button></button></button></button></p></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h2></h2></h3></h3></h3></ul></ul></li></li></section></section></section></section></section></section></section>
>>>>>>> origin/main
