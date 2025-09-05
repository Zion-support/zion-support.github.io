<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Zap, Brain, Code, Shield, Users, TrendingUp, 
  CheckCircle, ArrowRight, Star, Clock, Target,
  Cpu, Rocket, Globe, BarChart3, Settings
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceHighlights = [
  {
    title: 'AI Code Generation',
    description: 'Generate production-ready code across multiple languages with AI intelligence',
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Multi-language supportSecurity scanningPerformance optimizationTeam collaboration']
  },
  {
    title: 'DevOps Automation',
    description: 'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    features: ['CI/CD optimizationSelf-healing infrastructureCost optimizationMulti-cloud support']
  },
  {
    title: 'Customer Support AI',
    description: 'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    features: ['Intelligent chatbotsMulti-language supportPredictive resolution24/7 availability']
  },
  {
    title: 'Marketing Automation',
    description: 'AI-powered marketing automation with predictive analytics and optimization',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-600',
    features: ['Campaign optimizationCustomer personalizationROI trackingMulti-channel automation']
  },
  {
    title: 'Sales Intelligence',
    description: 'Boost sales performance with AI-powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
    features: ['Lead scoringSales forecastingCustomer insightsPerformance optimization']
  }
],

const benefits = [
  {
    title: '80% Reduction in Manual Work',
    description: 'Automate repetitive tasks and focus on high-value activities',
    icon: Zap,
    color: 'text-emerald-400'
  },
  {
    title: '300% ROI Improvement',
    description: 'Significant returns through increased efficiency and productivity',
    icon: TrendingUp,
    color: 'text-blue-400'
  },
  {
    title: '24/7 Operation',
    description: 'Round-the-clock automation without human intervention',
    icon: Clock,
    color: 'text-purple-400'
  },
  {
    title: 'Real-time Insights',
    description: 'Instant analytics and decision-making support',
    icon: BarChart3,
    color: 'text-pink-400'
  }
],
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Zap, _Brain, _Code, _Shield, _Users, _TrendingUp, _CheckCircle, _ArrowRight, _Star, _Clock, _Target, _Cpu, _Rocket, _Globe, _BarChart3, _Settings} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceHighlights = [
  {_title: 'AI Code Generation', _description: 'Generate production-ready code across multiple languages with AI intelligence', _icon: Code, _color: 'from-emerald-500 to-teal-600', _features: ['Multi-language support', _'Security scanning', _'Performance optimization', _'Team collaboration']},
  {_title: 'DevOps Automation', _description: 'Intelligent automation for modern DevOps workflows with predictive analytics', _icon: Cpu, _color: 'from-purple-500 to-indigo-600', _features: ['CI/CD optimization', _'Self-healing infrastructure', _'Cost optimization', _'Multi-cloud support']},
  {_title: 'Customer Support AI', _description: 'Transform customer support with intelligent automation and sentiment analysis', _icon: Users, _color: 'from-blue-500 to-cyan-600', _features: ['Intelligent chatbots', _'Multi-language support', _'Predictive resolution', _'24/7 availability']},
  {_title: 'Marketing Automation', _description: 'AI-powered marketing automation with predictive analytics and optimization', _icon: BarChart3, _color: 'from-pink-500 to-rose-600', _features: ['Campaign optimization', _'Customer personalization', _'ROI tracking', _'Multi-channel automation']},
  {_title: 'Sales Intelligence', _description: 'Boost sales performance with AI-powered insights and predictive analytics', _icon: TrendingUp, _color: 'from-yellow-500 to-orange-600', _features: ['Lead scoring', _'Sales forecasting', _'Customer insights', _'Performance optimization']}
];

const _benefits = [
  {_title: '80% Reduction in Manual Work', _description: 'Automate repetitive tasks and focus on high-value activities', _icon: Zap, _color: 'text-emerald-400'},
  {_title: '300% ROI Improvement', _description: 'Significant returns through increased efficiency and productivity', _icon: TrendingUp, _color: 'text-blue-400'},
  {_title: '24/7 Operation', _description: 'Round-the-clock automation without human intervention', _icon: Clock, _color: 'text-purple-400'},
  {_title: 'Real-time Insights', _description: 'Instant analytics and decision-making support', _icon: BarChart3, _color: 'text-pink-400'}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AIAutomationServices() {_return (_<Layout>
      <Head>
        <title>AI Automation Services - Zion Tech Group | Advanced AI-Powered Automation Solutions</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Transform your business with our advanced AI automation services. From code generation to DevOps automation, customer support to marketing - automate everything with AI intelligence.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI automation, code generation, DevOps automation, customer support AI, marketing automation, sales intelligence, Zion Tech Group&quot; />
        <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
=======
        <meta name="description" content="Transform your business with our advanced AI automation services. From code generation to DevOps automation, _customer support to marketing - automate everything with AI intelligence." />
        <meta name="keywords" content="AI automation, _code generation, _DevOps automation, _customer support AI, _marketing automation, _sales intelligence, _Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, _follow" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        {/* Open Graph */}
        <meta property=&quot;og:title&quot; content=&quot;AI Automation Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced AI-powered automation solutions for modern businesses.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-automation-services&quot; />
        <meta property=&quot;og:image&quot; content=&quot;https://ziontechgroup.com/og-image.jpg&quot; />
        
<<<<<<< HEAD
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;AI Automation Services - Zion Tech Group&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Advanced AI-powered automation solutions for modern businesses.&quot; />
        <meta name=&quot;twitter:image&quot; content=&quot;https://ziontechgroup.com/twitter-image.jpg&quot; />
        
        {/* Contact Information */}
        <meta name=&quot;contact:mobile&quot; content=&quot;+1 302 464 0950&quot; />
        <meta name=&quot;contact:email&quot; content=&quot;kleber@ziontechgroup.com&quot; />
        <meta name=&quot;contact:address&quot; content=&quot;364 E Main St STE 1008 Middletown DE 19709&quot; />
        <meta name=&quot;contact:website&quot; content=&quot;https://ziontechgroup.com&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent&quot;></div>
=======
        {_/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services - Zion Tech Group" />
        <meta name="twitter:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {_/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        <div className=&quot;relative z-10 container mx-auto px-4 text-center&quot;>
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;max-w-4xl mx-auto&quot;
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8&quot;>
              <Zap className=&quot;w-5 h-5 text-emerald-400&quot; />
              <span className=&quot;text-emerald-400 font-medium&quot;>AI Automation Services</span>
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 neon-text text-white&quot;>
              <span className=&quot;bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                AI Automation
              </span>
              <br />
              <span className=&quot;text-white&quot;>Revolution</span>
            </h1>
            
<<<<<<< HEAD
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Transform your business operations with cutting-edge AI automation. From code generation to customer support, 
              automate everything with intelligent AI that learns and adapts to your needs.
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI automation. From code generation to customer support, _automate everything with intelligent AI that learns and adapts to your needs.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link href=&quot;#services&quot; className=&quot;group&quot;>
                <button className=&quot;bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2&quot;>
                  <span>Explore Services</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
              
              <Link href=&quot;/contact&quot; className=&quot;group&quot;>
                <button className=&quot;border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2&quot;>
                  <span>Get Started</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
<<<<<<< HEAD
        {/* Floating Elements */}
        <div className=&quot;absolute top-20 left-10 opacity-20 animate-float&quot;>
          <div className=&quot;w-4 h-4 bg-emerald-400 rounded-full&quot;></div>
        </div>
        <div className=&quot;absolute top-40 right-20 opacity-30 animate-float&quot; style={{ animationDelay: '1s' }}>
          <div className=&quot;w-6 h-6 bg-teal-400 rounded-full&quot;></div>
        </div>
        <div className=&quot;absolute bottom-40 left-20 opacity-25 animate-float&quot; style={{ animationDelay: '2s' }}>
          <div className=&quot;w-3 h-3 bg-cyan-400 rounded-full&quot;></div>
        </div>
      </section>

      {/* Service Highlights */}
      <section id=&quot;services&quot; className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
        {_/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={_{ animationDelay: '1s'}}>
          <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={_{ animationDelay: '2s'}}>
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </section>

      {_/* Service Highlights */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              AI Automation <span className=&quot;bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent&quot;>Services</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive AI automation solutions that transform every aspect of your business operations
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;futuristic-card p-6 group hover:scale-105 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className=&quot;w-full h-full text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-2&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mr-3 flex-shrink-0&quot; />
                      <span>{feature}</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_serviceHighlights.map((service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="futuristic-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{_service.description}</p>
                
                <ul className="space-y-2">
                  {_service.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Detailed Services */}
      <section className=&quot;py-20 bg-black&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Our <span className=&quot;bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent&quot;>AI Automation</span> Portfolio
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Discover our comprehensive range of AI automation services designed for modern enterprises
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {advancedAIAutomationServices2025.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;animated-border&quot;
              >
                <div className=&quot;h-full&quot;>
                  <div className=&quot;flex items-start justify-between mb-4&quot;>
                    <div className=&quot;flex items-center space-x-3&quot;>
                      <span className=&quot;text-3xl&quot;>{service.icon}</span>
                      <div>
                        <h3 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h3>
                        <p className=&quot;text-emerald-400 font-medium&quot;>{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className=&quot;bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium&quot;>
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_advancedAIAutomationServices2025.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="animated-border"
              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{_service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{_service.name}</h3>
                        <p className="text-emerald-400 font-medium">{_service.tagline}</p>
                      </div>
                    </div>
                    {_service.popular && (
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Popular
                      </span>
                    )}
                  </div>
                  
<<<<<<< HEAD
                  <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{service.description}</p>
                  
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div className=&quot;text-2xl font-bold text-emerald-400&quot;>
                      {service.price}<span className=&quot;text-gray-400 text-lg&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                      <span className=&quot;text-gray-400 text-sm ml-2&quot;>({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className=&quot;grid grid-cols-2 gap-4 mb-6&quot;>
                    <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
                      <div className=&quot;text-emerald-400 font-bold&quot;>{service.customers}+</div>
                      <div className=&quot;text-gray-400 text-sm&quot;>Customers</div>
                    </div>
                    <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
                      <div className=&quot;text-emerald-400 font-bold&quot;>{service.trialDays}</div>
                      <div className=&quot;text-gray-400 text-sm&quot;>Trial Days</div>
                    </div>
                  </div>
                  
                  <div className=&quot;flex flex-wrap gap-2 mb-6&quot;>
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <span key={featureIndex} className=&quot;bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm&quot;>
                        {feature}
=======
                  <p className="text-gray-300 mb-4 leading-relaxed">{_service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-emerald-400">
                      {_service.price}<span className="text-gray-400 text-lg">{_service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {_[...Array(5)].map(_(_, _i) => (
                        <Star key={i} className={_`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">({_service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{_service.customers}+</div>
                      <div className="text-gray-400 text-sm">Customers</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{_service.trialDays}</div>
                      <div className="text-gray-400 text-sm">Trial Days</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {_service.features.slice(0, _4).map(_(feature, _featureIndex) => (
                      <span key={featureIndex} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    ))}
                  </div>
                  
<<<<<<< HEAD
                  <div className=&quot;flex items-center justify-between&quot;>
                    <Link href={service.link} className=&quot;text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-2 group&quot;>
=======
                  <div className="flex items-center justify-between">
                    <Link href={_service.link} className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-2 group">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <span>Learn More</span>
                      <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
                    </Link>
                    
                    <Link href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105&quot;>
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-gray-900 to-black&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Why Choose <span className=&quot;bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent&quot;>AI Automation</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Transform your business with intelligent automation that delivers measurable results
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center group&quot;
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_benefits.map(_(benefit, _index) => (
              <motion.div
                key={benefit.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center group"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className={_`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={_`w-full h-full ${benefit.color}`} />
                </div>
                
<<<<<<< HEAD
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{benefit.title}</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{benefit.description}</p>
=======
                <h3 className="text-xl font-bold text-white mb-4">{_benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{_benefit.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;max-w-4xl mx-auto&quot;
=======
      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
<<<<<<< HEAD
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?
=======
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to <span className=&quot;bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent&quot;>Automate</span> Your Business?
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of companies already transforming their operations with AI automation. 
              Get started today and see the difference intelligent automation can make.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;group&quot;>
                <button className=&quot;bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2&quot;>
                  <span>Start Your Automation Journey</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
              
              <Link href=&quot;/comprehensive-services-showcase-2025&quot; className=&quot;group&quot;>
                <button className=&quot;border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2&quot;>
                  <span>View All Services</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
            </div>
            
            <div className=&quot;mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center&quot;>
              <div>
                <div className=&quot;text-3xl font-bold text-emerald-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-gray-300&quot;>AI Monitoring</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-emerald-400 mb-2&quot;>99.9%</div>
                <div className=&quot;text-gray-300&quot;>Uptime Guarantee</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-emerald-400 mb-2&quot;>350%</div>
                <div className=&quot;text-gray-300&quot;>Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}