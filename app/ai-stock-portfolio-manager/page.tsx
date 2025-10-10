'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

<<<<<<< HEAD
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
=======
const AIStockPortfolioManagerPage: React.FC = () => {
  const features = [,
    {,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze market trends and provide investment recommendations.',
      icon: TrendingUp,
    },
    {
      title: 'Portfolio Optimization',
      description: 'Automatically optimize your portfolio allocation based on risk tolerance and goals.',
      icon: Target,
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track your investments in real-time with instant alerts and notifications.',
      icon: BarChart,
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis to help you make informed investment decisions.',
      icon: CheckCircle,
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed performance metrics and historical analysis of your investments.',
      icon: DollarSign,
    },
    {
      title: 'Market Insights',
      description: 'Get expert market insights and trend analysis to stay ahead of the market.',
      icon: Zap,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              AI Stock Portfolio</h1> <span className="text-cyan-400">Manager</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Maximize your investment returns with AI-powered portfolio management. Get intelligent</p>
              recommendations, real-time monitoring, and automated optimization for your stock portfolio.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Trial<a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,</h1>
              AI Stock Portfolio <span className="text-cyan-400">Manager</span>,
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Maximize your investment returns with AI-powered portfolio management. Get intelligent;
              recommendations, real-time monitoring, and automated optimization for your stock portfolio.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial;
              </a>
              <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features<p className="text-xl text-gray-300">Everything you need to manage your portfolio<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300">{feature.description}</p>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to manage your portfolio</p>)
          </div>)
)
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover: border-cyan-400/40 transition-all duration-300">,</div>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
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
=======
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Stock Portfolio Manager?<p className="text-xl text-gray-300">Proven results and cutting-edge technology<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Stock Portfolio Manager?</h2>
            <p className="text-xl text-gray-300">Proven results and cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Stock Portfolio Manager?</h2><p className="text-xl text-gray-300">Proven results and cutting-edge technology</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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
=======
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Portfolio?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of investors already using AI Stock Portfolio Manager to maximize their returns.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Trial<a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Free Trial;
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Call +1 302 464 0950;
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;