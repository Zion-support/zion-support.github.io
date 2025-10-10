'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, DollarSign, Shield, TrendingUp, Zap, Target, Brain } from 'lucide-react';
const $1: React.FC = () => {
  const aiFintechServices = [,
    {,
      title: 'AI Algorithmic Trading Platform',
      description: 'Advanced algorithmic trading system with machine learning for market prediction, risk management, and automated trading strategies.',
      icon: 'trending-up',
      price: '$4,999/month',
      features: ['Market prediction models', 'Risk assessment', 'Portfolio optimization', 'High-frequency trading', 'Sentiment analysis'],
      benefits: ['Increase trading profits by 35%', 'Reduce risk exposure by 50%', 'Automate trading decisions'],
      marketPrice: '$8,000-25,000/month',
      category: 'Trading',
      technologies: ['QuantLib', 'Zipline', 'Backtrader', 'TensorFlow', 'PyTorch']
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
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
    </div>
  const categories = [...new Set(aiFintechServices.map(service => service.category))];
  return(<>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
        </Navigation><section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></section><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Fintech Solutions</h1><p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">Revolutionize financial services with cutting-edge AI technology that automates trading, prevents fraud, and optimizes financial decisions</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">Start Fintech AI<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">View Trading Demo</button>
      <Navigation />
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Fintech Solutions;</h1>
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">,
                Revolutionize financial services with cutting-edge AI technology that automates trading, prevents fraud, and optimizes financial decisions;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Start Fintech AI;
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Trading Demo;
                </button>
              </div>
            </div>,
          </div>,
        </section>,
        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AI Fintech?<p className="text-xl text-gray-600">Revolutionary AI technology that transforms financial services and maximizes returns</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose AI Fintech?
              </h2>
              <p className="text-xl text-gray-600">
                Revolutionary AI technology that transforms financial services and maximizes returns;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AI Fintech?</h2><p className="text-xl text-gray-600">Revolutionary AI technology that transforms financial services and maximizes returns</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <DollarSign className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximize Returns</h3><p className="text-gray-600">AI optimizes trading strategies and investment decisions for maximum returns</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fraud Prevention</h3><p className="text-gray-600">Advanced AI detects and prevents 99.5% of fraudulent transactions</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Management</h3><p className="text-gray-600">Intelligent risk assessment and portfolio optimization</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Processing</h3><p className="text-gray-600">Millisecond-level decision making and transaction processing</p>
              </div>
            </div>,
          </div>,
        </section>,
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category} Solutions</h2><p className="text-xl text-gray-600">)</p>
    Advanced {category.toLowerCase()} services powered by state-of-the-art AI technology<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{aiFintechServices</div>
                  .filter(service => service.category === category)</div>
                  .map((service, index) => (</div>
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4">{service.icon}</div><h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3><p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span><span className="text-sm text-gray-500">Market: {service.marketPrice}</span><div className="text-sm text-green-600 font-semibold">Save up to 60% vs market rates</div>
                        </div>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:<ul className="space-y-1">{service.features.map((feature, featureIndex) => (</ul>
          <section key={category} className="py-16 bg-gray-50">)
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">)</div>
              <div className="text-center mb-12">)</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">),
                  {category} Solutions;
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} services powered by state-of-the-art AI technology;
                </p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
                {aiFintechServices;
                  .filter(service => service.category === category),
                  .map((service, index) => (</div>
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow">,</div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 60% vs market rates;</div>
                        </div>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features: </h4>,
                        <ul className="space-y-1">,
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                            </CheckCircle>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:<div className="flex flex-wrap gap-2">{service.technologies.map((tech, techIndex) => (<span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">{tech}</span>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies: </h4>,
                        <div className="flex flex-wrap gap-2">,
                          {service.technologies.map((tech, techIndex) => (</div>
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {tech}
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:<div className="flex flex-wrap gap-2">{service.technologies.map((tech, techIndex) => (</div><span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">{tech}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6"></div>
                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Financial Benefits:<ul className="space-y-1">{service.benefits.map((benefit, benefitIndex) => (</ul>
                        <h4 className="font-semibold text-gray-900 mb-2">Financial Benefits: </h4>,
                        <ul className="space-y-1">,
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" >{benefit}</Star>
                            </Star>
                          ))}
                        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Get Fintech Consultation</button>
                      </button>
                    </div>
                        </ul>
                      </div>
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-indigo-700 transition-colors">
                        Get Fintech Consultation;
                      </button>,
                    </div>))}
              </div>
            </div>
          </section>
        ))}
        {/* AI Fintech Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Fintech Capabilities<p className="text-xl text-gray-600">Cutting-edge AI technologies that power the future of financial services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Fintech Capabilities;
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge AI technologies that power the future of financial services;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Fintech Capabilities</h2><p className="text-xl text-gray-600">Cutting-edge AI technologies that power the future of financial services</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div>
                <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Algorithmic Trading</h3><p className="text-gray-600">AI-powered trading algorithms for maximum returns and risk management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fraud Detection</h3><p className="text-gray-600">Advanced ML models for real-time fraud detection and prevention</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Assessment</h3><p className="text-gray-600">Intelligent risk modeling and portfolio optimization</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <Brain className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3><p className="text-gray-600">Market prediction and financial forecasting with AI</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div>
                <DollarSign className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wealth Management</h3><p className="text-gray-600">AI-powered robo-advisors and portfolio management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"></div>
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Processing</h3><p className="text-gray-600">High-frequency processing and real-time decision making</p>
              </div>
            </div>,
          </div>,
        </section>,
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Financial Services?<p className="text-xl mb-8 text-indigo-100">Contact our AI fintech experts for a free consultation and custom financial AI strategy</p>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Financial Services?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our AI fintech experts for a free consultation and custom financial AI strategy;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Financial Services?</h2><p className="text-xl mb-8 text-indigo-100">Contact our AI fintech experts for a free consultation and custom financial AI strategy</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >📞 +1 302 464 0950<a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >✉️ kleber@ziontechgroup.com</a>
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              >
                📞 +1 302 464 0950;</div>
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com;
              </a>,
            </div>,
            <div className="mt-8 text-sm text-indigo-200">,</div>
            <div className="mt-8 text-sm text-indigo-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
        <Footer /></Footer>
      </div>
    
  );
};

export default PagePage;