<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async'
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { ArrowRight } from 'lucide-react';
export default function AiBlockchainAnalyticsZionTechGroup() {
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { CheckCircle, ArrowRight } from 'lucide-react';

<<<<<<< HEAD
const PagePage: React.FC = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
<<<<<<< HEAD
      title: 'Feature 3',
      description: 'Description of feature 3',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
=======
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
    'Benefit 4',
    'Benefit 5',
    'Benefit 6'
=======
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  ];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
<<<<<<< HEAD
        <title>Ai Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Ai Blockchain Analytics solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Blockchain Analytics</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai blockchain analytics solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional page solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
=======
    <>
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics for cryptocurrency and DeFi insights." />
        <meta name="keywords" content="AI blockchain analytics, cryptocurrency, DeFi, blockchain, artificial intelligence" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
      </Helmet>
<<<<<<< HEAD

      <Navigation />
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Page
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional page solutions by Zion Tech Group. Advanced AI and IT solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered blockchain analytics for cryptocurrency and DeFi insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
=======
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center"></div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6"></div>
                <TrendingUp className="w-4 h-4 mr-2" />
                Blockchain AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                AI Blockchain Analytics</h1>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"></span>
                  Advanced Crypto Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"></p>
                Unlock the power of blockchain data with AI-powered analytics. Comprehensive insights for DeFi, 
                NFT, and crypto markets with real-time intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                ></a></<<<a>Start</a></<<a>Free</a> Trial
                  <ArrowRight className="ml-2 w-5 h-5" /></ArrowRigh>
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
                ></a>
                  <BarChart className="mr-2 w-5 h-5" /></BarChart></<<<BarChart>View</BarChart></<<BarChart>Demo</BarChart>
                </a>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
          </div>
        </section>
=======

      {/* Hero Section */}
      <section className="relative py-20px-4overflow-hidden" />
        <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
        <div className="relative max-w-7xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
            <Shield className="w-4 h-4" />
            <span   />AI-Powered Blockchain Intelligence</span>
          </div>

          <h1 className="text-6 xl md:text-8 xl font-bold text-white mb-8leading-tight" />
            AI Blockchain
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Analytics
            </span>
          </h1>

          <p className="text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
            <br / />
            <span className="text-cyan-400font-semibold">Navigate the blockchain with confidence and intelligence.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
              <Play className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

<<<<<<< HEAD
      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Page Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Comprehensive Blockchain Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Advanced AI-powered analytics for the entire blockchain ecosystem
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </p>
<<<<<<< HEAD
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  )}
                </div>
<<<<<<< HEAD
              ))}
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
                <h3 className="text-xl font-semibold text-gray-900 mb-4">DeFi Analytics</h>
                <p className="text-gray-600 mb-4"></p>
                  Comprehensive DeFi protocol analysis with TVL tracking, yield farming insights, and risk assessment.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>TVL</CheckCircle></<<CheckCircle>tracking</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Yield</CheckCircle></<<CheckCircle>analysis</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">NFT Intelligence</h>
                <p className="text-gray-600 mb-4"></p>
                  Advanced NFT market analysis with floor price tracking, rarity scoring, and trend prediction.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Floor</CheckCircle></<<CheckCircle>price</CheckCircle></<CheckCircle>tracking</CheckCircle>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Rarity</CheckCircle></<<CheckCircle>analysis</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100"></div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Monitoring</h>
                <p className="text-gray-600 mb-4"></p>
                  Real-time security monitoring with smart contract analysis and vulnerability detection.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Smart</CheckCircle></<<CheckCircle>contract</CheckCircle></<CheckCircle>analysis</CheckCircle>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Vulnerability</CheckCircle></<<CheckCircle>detection</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100"></div>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Intelligence</h>
                <p className="text-gray-600 mb-4"></p>
                  AI-powered market analysis with price prediction, sentiment analysis, and trading signals.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Price</CheckCircle></<<CheckCircle>prediction</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Sentiment</CheckCircle></<<CheckCircle>analysis</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100"></div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">On-Chain Analytics</h>
                <p className="text-gray-600 mb-4"></p>
                  Deep on-chain analysis with wallet tracking, transaction patterns, and network metrics.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Wallet</CheckCircle></<<CheckCircle>tracking</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Transaction</CheckCircle></<<CheckCircle>analysis</CheckCircle>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100"></div>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Alerts</h>
                <p className="text-gray-600 mb-4"></p>
                  Customizable alerts for price movements, whale transactions, and market anomalies.
                </p>
                <ul className="space-y-2"></u>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Price</CheckCircle></<<CheckCircle>alerts</CheckCircle>
                  </li>
                  <li className="flex items-center text-sm text-gray-600"></l>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /></CheckCircle></<<<CheckCircle>Whale</CheckCircle></<<CheckCircle>tracking</CheckCircle>
                  </li>
                </ul>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Blockchain Analytics Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Powerful insights for every blockchain stakeholder
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </p>
<<<<<<< HEAD
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
=======
            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div></div></div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                </div>
<<<<<<< HEAD
              ))}
=======

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Management</h3>
                    <p className="text-gray-600">Identify and mitigate risks with comprehensive security monitoring and vulnerability assessment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance & Regulation</h3>
                    <p className="text-gray-600">Ensure regulatory compliance with transaction monitoring and reporting tools.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Development</h3>
                    <p className="text-gray-600">Conduct in-depth blockchain research with comprehensive data analysis and visualization tools.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Management</h3>
                    <p className="text-gray-600">Track and optimize your crypto portfolio with advanced analytics and performance metrics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Intelligence</h3>
                    <p className="text-gray-600">Stay ahead of market trends with AI-powered insights and predictive analytics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white"></section>
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Blockchain Analytics Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
                Choose the perfect plan for your blockchain analytics needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$299</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For individual traders and small teams</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Basic analytics</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">5 API calls/minute</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Email support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Basic alerts</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Blockchain Analytics Starter Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                ></a>
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-emerald-500 relative"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>
                    Most Popular
                  </span>
                </div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$799</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For trading firms and institutions</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Advanced analytics</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">50 API calls/minute</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Priority support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Custom alerts</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">API access</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Blockchain Analytics Professional Plan"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-emerald-700 transition-colors"
                ></a>
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$1,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For large organizations and exchanges</p>
                </div>
                <ul className="space-y-4 mb-8"></u>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Full analytics suite</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Unlimited API calls</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">24/7 phone support</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Custom integrations</spa>
                  </li>
                  <li className="flex items-center"></l>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /></CheckCircl>
                    <span className="text-gray-700">Dedicated account manager</spa>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Blockchain Analytics Enterprise Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                ></a>
                  Contact Sales
                </a>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Page?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-cyan-600"></section>
          <div className="max-w-4xl mx-auto text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Unlock Blockchain Intelligence
            </h2>
            <p className="text-xl text-emerald-100 mb-8"></p>
              Get comprehensive insights into the blockchain ecosystem with AI-powered analytics
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
=======
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"></section>
          <div className="max-w-4xl mx-auto text-center"></section>
            <div className="grid md:grid-cols-3 gap-8 text-white"></div>
              <div className="flex items-center justify-center"></div>
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
=======
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" />
        <div className="relative max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Blockchain Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </div>
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xllhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xll mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>

            {analyticsTypes.map((type, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-centerspace-x-4mb-6">

            {pricing.map((plan, index) => (
              <div key="{index}" className="{`relative" group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (

            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-centerspace-x-4mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-lgfont-semiboldtext-white"   />{testimonial.name}</h4>
                    <p className="text-gray-400text-sm">
              {testimonial.role}</p>
                    <p className="text-gray-500text-sm">
              {testimonial.company}</p>
                  </div>
                
                <div className="flex items-centerspace-x-1mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300leading-relaxeditalic">
              "{testimonial.content}"
                </p>
              </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our page solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
=======
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
        <div className="relative max-w-7xlmx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
              <div className="relativez-10">
                <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Master the <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Blockchain?</span>
                </h2>

                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
              Start your free trial today and gain the intelligence you need to navigate 
                  the complex world of blockchain and DeFi with confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6justify-centermb-8">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to="/demo" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
                    <BarChart3 className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3gap-6text-white/80">
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Phone className="w-5h-5text-cyan-300" />
                    <span className="text-sm"   />+1 302 464 0950</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Mail className="w-5h-5text-purple-300" />
                    <span className="text-sm"   />kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <MapPin className="w-5h-5text-pink-300" />
                    <span className="text-sm"   />Middletown DE 19709</span>
                  </div>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <Footer />
    </div>
  );
};

export default PagePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
=======
        </section>
      </div>
      <Footer />
    </React.Fragment>
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
};

export default AIBlockchainAnalyticsPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======


import {Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Volume2, VolumeX, Search, Upload, Mail, Phone, MapPin, Users, Brain, Cpu, Rocket, Network, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Settings} from 'lucide-react'

import {Link} from 'react-router-dom'

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function AiblockchainanalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai blockchain analytics services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Blockchain Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai blockchain analytics services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
