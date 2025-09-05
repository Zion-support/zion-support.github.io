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

export default function AIAutomationServices() {_return (_<Layout>
      <Head>
        <title>AI Automation Services - Zion Tech Group | Advanced AI-Powered Automation Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI automation services. From code generation to DevOps automation, _customer support to marketing - automate everything with AI intelligence." />
        <meta name="keywords" content="AI automation, _code generation, _DevOps automation, _customer support AI, _marketing automation, _sales intelligence, _Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, _follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Automation Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-automation-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
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
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">AI Automation Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI automation. From code generation to customer support, _automate everything with intelligent AI that learns and adapts to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/contact" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Automation <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions that transform every aspect of your business operations
            </p>
          </motion.div>
          
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
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span> Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of AI automation services designed for modern enterprises
            </p>
          </motion.div>
          
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
                        Popular
                      </span>
                    )}
                  </div>
                  
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
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link href={_service.link} className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-2 group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation that delivers measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_benefits.map(_(benefit, _index) => (
              <motion.div
                key={benefit.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center group"
              >
                <div className={_`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={_`w-full h-full ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{_benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{_benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already transforming their operations with AI automation. 
              Get started today and see the difference intelligent automation can make.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Start Your Automation Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">350%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}