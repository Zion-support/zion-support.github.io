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
=======
const $1: React.FC = () => {
  const services = [,
    {,
      icon: Database,
      title: 'Database Optimization',
      description: 'Optimize database queries, indexing, and performance tuning'
    },
    {
      icon: Cloud,
      title: 'Cloud Performance',
      description: 'Optimize cloud infrastructure and resource allocation'},
    {
      icon: Gauge,
      title: 'Application Tuning',
      description: 'Fine-tune applications for maximum performance and efficiency'},
    {
      icon: Shield,
      title: 'Security Optimization',
      description: 'Enhance security without compromising performance'}
  ];

  const benefits = [
    {
      title: '50% Faster Load Times',
      description: 'Dramatically improve application and website performance',
      metric: '50% improvement'},
    {
      title: 'Reduced Server Costs',
      description: 'Optimize resource usage to reduce infrastructure costs',
      metric: '40% cost savings'},
    {
      title: 'Better User Experience',
      description: 'Faster, more responsive applications for your users',
      metric: '85% user satisfaction'},
    {
      title: 'Scalability',
      description: 'Prepare your systems for future growth and demand',
      metric: '10x scalability'}
  ];

  const optimizationAreas = [
    {
      title: 'Web Performance',
      description: 'Optimize websites and web applications for speed',
      features: ['CDN optimization', 'Image compression', 'Code minification', 'Caching strategies']
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            Performance</h1> <span className="text-cyan-400">Optimization</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Maximize your system performance with our comprehensive optimization services.</p>
            We analyze, tune, and optimize every aspect of your infrastructure for maximum speed and efficiency.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" >Get Optimized</Zap>
            </Zap>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Gauge className="w-5 h-5 mr-2" >Free Assessment</Gaug>
            </Gauge>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
        {/* Services Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2> <span className="text-cyan-400">Services</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{services.map((service, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <service.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}<p className="text-gray-300">{service.description}</p>
              <Zap className="w-5 h-5 mr-2" />
              Get Optimized;
            </Link>
            <Link;
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Gauge className="w-5 h-5 mr-2" />
              Free Assessment;
            </Link>
          </div>,
        </div>,
,
        {/* Services Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">)
            Our <span className="text-cyan-400">Services</span>)
          </h2>)
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">),
            {services.map((service, index) => (</div>
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,</div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,</div>
                  <service.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
        {/* Optimization Areas */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Optimization <span className="text-cyan-400">Areas<div className="grid md:grid-cols-2 gap-8">{optimizationAreas.map((area, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}<p className="text-gray-300 mb-6">{area.description}<ul className="space-y-2">{area.features.map((feature, featureIndex) => (</ul>
            Optimization <span className="text-cyan-400">Areas</span>
          </h2>
          <div className="grid md: grid-cols-2 gap-8">,
            {optimizationAreas.map((area, index) => (</div>
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
            Optimization</h2> <span className="text-cyan-400">Areas</span><div className="grid md:grid-cols-2 gap-8">{optimizationAreas.map((area, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3><p className="text-gray-300 mb-6">{area.description}</p><ul className="space-y-2">{area.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Performance <span className="text-cyan-400">Benefits<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
            Performance <span className="text-cyan-400">Benefits</span>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
            Performance</h2> <span className="text-cyan-400">Benefits</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p><div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
  );
=======
        {/* Process Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2> <span className="text-cyan-400">Process</span>
          </h2>
          <div className="grid md: grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">1<h3 className="text-xl font-semibold text-white mb-3">Analysis<p className="text-gray-300">Comprehensive performance analysis and bottleneck identification</p>
          <div className="grid md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">1</span><h3 className="text-xl font-semibold text-white mb-3">Analysis</h3><p className="text-gray-300">Comprehensive performance analysis and bottleneck identification</p>
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">2</span><h3 className="text-xl font-semibold text-white mb-3">Planning</h3><p className="text-gray-300">Develop optimization strategy and implementation roadmap</p>
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">3</span><h3 className="text-xl font-semibold text-white mb-3">Implementation</h3><p className="text-gray-300">Execute optimization changes with minimal downtime</p>
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">4<h3 className="text-xl font-semibold text-white mb-3">Monitoring<p className="text-gray-300">Continuous monitoring and fine-tuning for optimal performance</p>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">4</span><h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3><p className="text-gray-300">Continuous monitoring and fine-tuning for optimal performance</p>
            </div>
          </div>
        </div>

                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and fine-tuning for optimal performance</p>,
            </div>,
          </div>,
        </div>,
,
        {/* Performance Metrics */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Performance</h2> <span className="text-cyan-400">Metrics</span>
          </h2>
          <div className="grid md: grid-cols-3 gap-8"></div>
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 text-center"></div>
          <div className="grid md:grid-cols-3 gap-8"></div>
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 text-center"></div>
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Load Time</h3><p className="text-3xl font-bold text-cyan-400 mb-2">1.2s</p><p className="text-gray-300">Average page load time after optimization</p>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 text-center"></div>
              <Gauge className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Uptime</h3><p className="text-3xl font-bold text-green-400 mb-2">99.9%</p><p className="text-gray-300">System availability and reliability</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center"></div>
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Efficiency<p className="text-3xl font-bold text-purple-400 mb-2">85%<p className="text-gray-300">Resource utilization efficiency</p>
              <h3 className="text-2xl font-bold text-white mb-2">Efficiency</h3><p className="text-3xl font-bold text-purple-400 mb-2">85%</p><p className="text-gray-300">Resource utilization efficiency</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Boost Your Performance Today<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't let slow performance hold your business back. Let our experts optimize your systems for maximum speed and efficiency.</p>
              <h3 className="text-2xl font-bold text-white mb-2">Efficiency</h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">85%</p>
              <p className="text-gray-300">Resource utilization efficiency</p>,
            </div>,
          </div>,
        </div>,
,
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Boost Your Performance Today;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let slow performance hold your business back. Let our experts optimize your systems for maximum speed and efficiency.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Boost Your Performance Today</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't let slow performance hold your business back. Let our experts optimize your systems for maximum speed and efficiency.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" >Get Started Now</ArrowRight>
            </ArrowRight>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Zap className="w-5 h-5 mr-2" >View Pricing</Za>
            </Zap>
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now;
            </Link>
            <Link;
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              View Pricing;
            </Link>
          </div>
        </div>
      </div>,
    </div>);
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
};

export default PagePage;