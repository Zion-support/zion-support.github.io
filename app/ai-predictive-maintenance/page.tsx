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
const $1: React.FC = () => {
  const features = [,
    'Machine learning algorithms for failure prediction',
    'Real-time sensor data analysis',
    'Predictive maintenance scheduling',
    'Equipment health monitoring',
    'Anomaly detection and alerting',
    'Maintenance cost optimization',
    'Asset lifecycle management',
    'Integration with existing systems',
    'Custom dashboard and reporting',
    'Mobile app for technicians',
    'IoT device connectivity',
    'Cloud-based analytics platform'
  ];

  const benefits = [
    'Reduce maintenance costs by 30-50%',
    'Increase equipment uptime by 25%',
    'Prevent unexpected breakdowns',
    'Optimize maintenance schedules',
    'Extend asset lifespan',
    'Improve safety and compliance'
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Optimize production equipment maintenance',
      savings: '40% cost reduction',
      icon: Settings,
    },
    {
      name: 'Energy & Utilities',
      description: 'Predict power plant and grid failures',
      savings: '35% cost reduction',
      icon: Zap,
    },
    {
      name: 'Transportation',
      description: 'Maintain fleet vehicles and infrastructure',
      savings: '45% cost reduction',
      icon: Globe,
    },
    {
      name: 'Healthcare',
      description: 'Monitor medical equipment reliability',
      savings: '30% cost reduction',
      icon: Shield,
    },
    {
      name: 'Oil & Gas',
      description: 'Predict equipment failures in harsh environments',
      savings: '50% cost reduction',
      icon: Database,
    },
    {
      name: 'Aviation',
      description: 'Aircraft maintenance optimization',
      savings: '25% cost reduction',
      icon: Target,
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      originalPrice: '$3,500',
      features: [,
        'Up to 50 assets',
        'Basic predictive models',
        'Email alerts',
        'Standard dashboard',
        'Email support',
        'Data retention: 1 year'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      originalPrice: '$7,000',
      features: [,
        'Up to 200 assets',
        'Advanced ML models',
        'Real-time alerts',
        'Custom dashboard',
        'Priority support',
        'Data retention: 3 years',
        'Mobile app access',
        'API integration'
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      originalPrice: '$15,000',
      features: [,
        'Unlimited assets',
        'Custom ML models',
        'Multi-site management',
        'White-label solution',
        'Dedicated support',
        'Unlimited data retention',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false,
    }
  ];

  const testimonials = [
    {
      name: 'John Mitchell',
      role: 'Plant Manager, AutoCorp',
      content: 'AI Predictive Maintenance has revolutionized our operations. We reduced unplanned downtime by 60% and saved over $2M in the first year.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director, PowerGrid',
      content: 'The predictive accuracy is incredible. We can now schedule maintenance exactly when needed, not too early or too late.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Fleet Manager, TransLogistics',
      content: 'Our maintenance costs dropped by 45% while improving vehicle reliability. The ROI was achieved in just 6 months.',
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-20 pb-16 px-4">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6"></div>
              <Settings className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Predictive Maintenance<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your maintenance operations with AI-powered predictive analytics. Reduce costs by 30-50%, prevent unexpected failures, and optimize equipment performance with machine learning algorithms.</p>
            </div>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              AI Predictive Maintenance;</h1>
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Transform your maintenance operations with AI-powered predictive analytics. Reduce costs by 30-50%, prevent unexpected failures, and optimize equipment performance with machine learning algorithms.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-8"></div>
              <div className="flex items-center space-x-2 text-green-400"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6"></div>
              <Settings className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Predictive Maintenance</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your maintenance operations with AI-powered predictive analytics. Reduce costs by 30-50%, prevent unexpected failures, and optimize equipment performance with machine learning algorithms.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"></div>
              <div className="flex items-center space-x-2 text-green-400"></div>
                <CheckCircle className="w-5 h-5" />
                <span>30-50% cost reduction</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400"></div>
                <Users className="w-5 h-5" />
                <span>200+ successful implementations</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400"></div>
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 client rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="#contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >Get Free Assessment</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a
                href="#demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >Watch Demo</a>
              >
                Get Free Assessment;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="#demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Watch Demo;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced Predictive Features<p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive AI-powered predictive maintenance solution with real-time monitoring and intelligent insights.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <Brain className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">{feature}<p className="text-gray-300 text-sm">{feature === 'Machine learning algorithms for failure prediction' && 'Advanced ML models analyze historical data and sensor readings to predict equipment failures with 95%+ accuracy.'}
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Advanced Predictive Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered predictive maintenance solution with real-time monitoring and intelligent insights.
            </p>)
          </div>)
)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover: border-green-400/40 transition-all duration-300">,</div>
                <div className="flex items-center space-x-3 mb-4">,</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">,</div>
                    <Brain className="w-5 h-5 text-white" />,
                  </div>,
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {feature === 'Machine learning algorithms for failure prediction' && 'Advanced ML models analyze historical data and sensor readings to predict equipment failures with 95%+ accuracy.'}
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced Predictive Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive AI-powered predictive maintenance solution with real-time monitoring and intelligent insights.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <Brain className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3><p className="text-gray-300 text-sm">{feature === 'Machine learning algorithms for failure prediction' && 'Advanced ML models analyze historical data and sensor readings to predict equipment failures with 95%+ accuracy.'}
                  {feature === 'Real-time sensor data analysis' && 'Continuous monitoring of sensor data with real-time analysis to detect anomalies and potential issues immediately.'}
                  {feature === 'Predictive maintenance scheduling' && 'Intelligent scheduling system that optimizes maintenance windows based on predicted failure timelines and operational requirements.'}
                  {feature === 'Equipment health monitoring' && 'Comprehensive health scoring system that tracks equipment condition and provides actionable insights for maintenance teams.'}
                  {feature === 'Anomaly detection and alerting' && 'AI-powered anomaly detection identifies unusual patterns and sends immediate alerts to prevent potential failures.'}
                  {feature === 'Maintenance cost optimization' && 'Cost-benefit analysis tools that help optimize maintenance spending while maximizing equipment reliability and uptime.'}
                  {feature === 'Asset lifecycle management' && 'Complete asset lifecycle tracking from installation to replacement with predictive insights for optimal timing.'}
                  {feature === 'Integration with existing systems' && 'Seamless integration with CMMS, ERP, and other enterprise systems for unified maintenance management.'}
                  {feature === 'Custom dashboard and reporting' && 'Customizable dashboards and reports that provide insights tailored to your specific operational needs.'}
                  {feature === 'Mobile app for technicians' && 'Mobile application that provides technicians with real-time alerts, work orders, and equipment information in the field.'}
                  {feature === 'IoT device connectivity' && 'Connect and monitor thousands of IoT sensors and devices for comprehensive equipment visibility.'}</p>
                  {feature === 'Cloud-based analytics platform' && 'Scalable cloud platform that processes massive amounts of data and provides insights through advanced analytics.'}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industry Applications<p className="text-xl text-gray-300 max-w-3xl mx-auto">Proven results across multiple industries with significant cost savings and improved reliability.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{industries.map((industry, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white">{industry.name}<p className="text-green-400 text-sm font-semibold">{industry.savings}<p className="text-gray-300 text-sm">{industry.description}</p>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Industry Applications;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {industries.map((industry, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover: border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4">,</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">,</div>
                    <industry.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <div>,</div>
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                    <p className="text-green-400 text-sm font-semibold">{industry.savings}</p>
                  </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proven Business Benefits<p className="text-xl text-gray-300 max-w-3xl mx-auto">Transform your maintenance operations with measurable results and significant cost savings.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Proven Business Benefits;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proven Business Benefits</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Transform your maintenance operations with measurable results and significant cost savings.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3><p className="text-gray-300">{benefit === 'Reduce maintenance costs by 30-50%' && 'Optimize maintenance schedules and prevent unnecessary repairs, resulting in significant cost savings.'}
                  {benefit === 'Increase equipment uptime by 25%' && 'Predict and prevent failures before they occur, maximizing equipment availability and productivity.'}
                  {benefit === 'Prevent unexpected breakdowns' && 'AI algorithms identify potential failures weeks or months in advance, allowing for planned maintenance.'}
                  {benefit === 'Optimize maintenance schedules' && 'Intelligent scheduling ensures maintenance is performed at the optimal time, balancing cost and reliability.'}
                  {benefit === 'Extend asset lifespan' && 'Proactive maintenance and optimal operating conditions extend the useful life of your equipment.'}</p>
                  {benefit === 'Improve safety and compliance' && 'Predictive maintenance reduces safety risks and helps maintain compliance with industry regulations.'}</p>
                </p>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
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
      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Plan<p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to meet your predictive maintenance needs at any scale.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-green-400/40 ring-2 ring-green-400/20' : 'border-gray-600/40'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Plan</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to meet your predictive maintenance needs at any scale.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-green-400/40 ring-2 ring-green-400/20' : 'border-gray-600/40'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Choose Your Plan;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
<<<<<<< HEAD
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
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-green-400/40 ring-2 ring-green-400/20' : 'border-gray-600/40'}`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</spa>
                  )}
                <ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center space-x-3"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircl>
                      <span className="text-gray-300">{feature}</spa>
                    </li>
                  ))}
                <a
                </ul>

                <a;
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover: from-green-700 hover:to-blue-700'}
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'}
                  }`}
                >Get Started</a>
                >
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Success Stories<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how AI Predictive Maintenance has transformed operations across various industries.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Client Success Stories;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Predictive Maintenance has transformed operations across various industries.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6"></div>
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}<p className="text-gray-400 text-sm">{testimonial.role}</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Success Stories</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">See how AI Predictive Maintenance has transformed operations across various industries.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6"></div>
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}</p><p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Maintenance?<p className="text-xl text-green-100 mb-8">Contact us today for a free predictive maintenance assessment and ROI analysis.</p>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Transform Your Maintenance?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free predictive maintenance assessment and ROI analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a;
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Maintenance?</h2><p className="text-xl text-green-100 mb-8">Contact us today for a free predictive maintenance assessment and ROI analysis.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors flex items-center space-x-2"
            ></a>
              <Phone className="w-5 h-5" /></Phon>
              <span>+1 302 464 0950</spa>
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center space-x-2"
            ></a>
              <Mail className="w-5 h-5" /></Mai>
              <<<<span>kleber</span></span>@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 text-green-100">,</div>
            <p className="flex items-center justify-center space-x-2">,
              <MapPin className="w-4 h-4" />,
          <div className="mt-8 text-green-100"></div>
            <p className="flex items-center justify-center space-x-2"></p>
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </p>
          </div>
        </div>
      </section>

      <Footer /></Footer>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    </div>
  );
};

export default PagePage;