<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiFintechPage: React.FC = () => {
  const services = [
    {
      title: 'Algorithmic Trading',
      description: 'AI-powered trading algorithms and market analysis',
      features: ['Market Prediction', 'Risk Management', 'Portfolio Optimization'],
      price: 'Starting at $1,499/month',
      icon: '📈'
    },
    {
      title: 'Fraud Detection',
      description: 'Advanced AI systems for detecting and preventing fraud',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring'],
      price: 'Starting at $999/month',
      icon: '🛡️'
    },
    {
      title: 'Credit Scoring',
      description: 'AI-enhanced credit assessment and lending decisions',
      features: ['Alternative Data', 'Risk Assessment', 'Automated Decisions'],
      price: 'Starting at $1,200/month',
      icon: '💳'
    },
    {
      title: 'Regulatory Compliance',
      description: 'AI-powered compliance monitoring and reporting',
      features: ['Transaction Monitoring', 'Regulatory Reporting', 'Audit Support'],
      price: 'Starting at $1,800/month',
      icon: '📋'
    },
    {
      title: 'Customer Service AI',
      description: 'Intelligent chatbots and virtual assistants for financial services',
      features: ['24/7 Support', 'Account Management', 'Financial Advice'],
      price: 'Starting at $799/month',
      icon: '🤖'
    },
    {
      title: 'Wealth Management',
      description: 'AI-driven investment advice and portfolio management',
      features: ['Investment Recommendations', 'Risk Profiling', 'Performance Tracking'],
      price: 'Starting at $1,600/month',
      icon: '💰'
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
>>>>>>> origin/main
    }
  ];

  const benefits = [
<<<<<<< HEAD
    { metric: '99.9%', description: 'Fraud Detection Accuracy' },
    { metric: '50%', description: 'Faster Loan Processing' },
    { metric: '30%', description: 'Cost Reduction' },
    { metric: '24/7', description: 'AI Monitoring' }
=======
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
>>>>>>> origin/main
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Fintech Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize financial services with AI-powered solutions that enhance 
            security, improve efficiency, and deliver superior customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore Fintech AI
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Fintech Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fintech AI Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fintech AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-indigo-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Bank-Grade Security & Compliance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-lg font-bold text-white mb-2">Data Encryption</h3>
                <p className="text-gray-300 text-sm">End-to-end encryption for all financial data</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300 text-sm">Full compliance with financial regulations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-2">Risk Management</h3>
                <p className="text-gray-300 text-sm">Advanced risk assessment and mitigation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Financial Services with AI?
          </h2>
          <p className="text-gray-300 mb-6">
            Join leading financial institutions using AI to enhance security and customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Fintech AI Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
=======
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default AiFintechPage;
=======
export default PagePage;
=======
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiFintechPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiFintechPage: React.FC = () => {
>>>>>>> origin/main
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
=======
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'];
=======
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
>>>>>>> origin/main
  },
    {
    icon: BarChart,
>>>>>>> origin/main
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
<<<<<<< HEAD
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
<<<<<<< HEAD
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
=======
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
  },
  ];];
>>>>>>> origin/main
=======
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
  },
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
  },
    {
    icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
  }
    ]
>>>>>>> origin/main
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
<<<<<<< HEAD
    'Gain competitive advantage with advanced technology';
<<<<<<< HEAD
  ]
return(<>)
      <Helmet />
=======
  ];
return (
    <>
  </>
      <Helmet>
>>>>>>> origin/main
        <title>Ai Fintech - Zion Tech Group</title>
=======
    'Gain competitive advantage with advanced technology'
  ]
return (
    <>
      <Helmet>
        </Helmet><title>Ai Fintech - Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
<<<<<<< HEAD
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Fintech
=======
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Fintech;</h1>
>>>>>>> origin/main
            </h1>
<<<<<<< HEAD
            <p>Advanced AI-powered ai fintech solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
=======
            <p></p>
              Advanced AI-powered ai fintech solution for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
              <button></button>
                Get Started
              </button>
              <button></button>
                View Demo,
>>>>>>> origin/main
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
=======
<<<<<<< HEAD
        {/* Features Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Ai Fintech
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai fintech solution for modern businesses.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
        {/* Features Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
=======
          <div className="max-w-7xl mx-auto" / /></div>
            <div className="text-center mb-16" / /></div>
              <h2></h2>
                Key Features
              </h2>
              <p></p>
                Advanced AI technology that drives results
>>>>>>> origin/main
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
<<<<<<< HEAD
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />
=======
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {
    feature.benefits && (
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
  }
                        </ul><li>
                          </li><CheckCircle>
>>>>>>> origin/main

                          {benefit} </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Benefits Section */} <section className="py-20 px-4">
=======
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Features
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced AI technology that drives results
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300 mb-4">{feature.description}
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                      ))}
<<<<<<< HEAD
                    </ul>
                  </div>
=======
                  )}
              ))}
        {/* Benefits Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle />
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
=======
        {/* CTA Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
          <div className="max-w-7xl mx-auto" / /></div>
            <div className="text-center mb-16" / /></div>
              <h2></h2>
                Why Choose Our Solution?
              </h2>
              <p></p>
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
              {benefits.map((benefit, index) => ()
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          ))
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
<<<<<<< HEAD
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
=======
          <div className="max-w-4xl mx-auto text-center" / /></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12" / /></div>
              <h2></h2>
>>>>>>> origin/main
                Ready to Get Started?
              </h2>
              <p></p>
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
                <button></button>
                  Contact Us
                </button>
                <button></button>
                  Learn More
>>>>>>> origin/main
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
<<<<<<< HEAD
      <Footer />

  );
};

export default AiFintechPage;
=======
      <Footer></Footer>
    </>
  ),
}
export default AiFintechPage</$1></h3>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
