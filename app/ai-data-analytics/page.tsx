'use client';
import React from 'react';
<<<<<<< HEAD
import { Database, Brain, BarChart3, Target, CheckCircle, Star, ArrowRight, Users, Zap, Globe, Lock, Settings, Activity, TrendingUp, BarChart, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
=======
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
    }
  ];
<<<<<<< HEAD

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
=======
  const additionalFeatures = [
>>>>>>> origin/main
    {
      icon: Database,
      title: 'Advanced Data Processing',
      description: 'Handle massive datasets with real-time processing capabilities',
<<<<<<< HEAD
      benefits: ['Real-time processing', 'Scalable infrastructure', 'Data integration', 'Performance optimization']
    },
=======
      icon: <Database className="w-8 h-8 text-blue-600" >},
    {
      title: 'Machine Learning Models',</<<<Database>description</Database></Database>: 'Custom ML models trained on your specific data',</<<<Database>icon</Database></Database>: <Brain className="w-8 h-8 text-purple-600" >},</Brain>
    {
      title: 'Interactive Dashboards',</<<<Brain>description</Brain></Brain>: 'Beautiful, responsive dashboards for all devices',</<<<Brain>icon</Brain></Brain>: <BarChart3 className="w-8 h-8 text-green-600" >},</BarChart3>
    {
      title: 'Predictive Insights',</BarChart3>
      description: 'AI-powered predictions and recommendations',</BarChart3>
      icon: <Target className="w-8 h-8 text-orange-600" >}
  ];</Target>
  return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">{/* Hero Section */}</div>
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Data Analytics Services<p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">Transform your data into actionable insights with our advanced AI-powered analytics solutions</p>
      icon: <Database className="w-8 h-8 text-blue-600" />},
>>>>>>> origin/main
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your specific data for accurate predictions',
      benefits: ['Custom models', 'Predictive analytics', 'Pattern recognition', 'Automated insights']
    },
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Beautiful, responsive dashboards for all devices and use cases',
      benefits: ['Responsive design', 'Real-time updates', 'Custom visualizations', 'Mobile friendly']
    },
    {
      icon: Target,
      title: 'Predictive Insights',
      description: 'AI-powered predictions and recommendations for better decision making',
      benefits: ['Predictive modeling', 'Recommendation engine', 'Trend analysis', 'Forecasting']
    },
    {
      icon: Globe,
      title: 'Multi-Source Integration',
      description: 'Connect and analyze data from multiple sources and platforms',
      benefits: ['API integrations', 'Data connectors', 'Unified view', 'Cross-platform analysis']
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Get instant insights and updates as data changes in real-time',
      benefits: ['Live updates', 'Instant insights', 'Real-time alerts', 'Dynamic dashboards']
    }
  ];
<<<<<<< HEAD

  const benefits = [
    'Improve decision making by 80%',
    'Reduce data processing time by 90%',
    'Increase data accuracy',
    'Scale analytics operations',
    'Enable real-time insights',
    'Reduce manual analysis work'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic analytics',
        'Email support',
        'Standard dashboards',
        'Basic reporting',
        '1 user account',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced analytics',
        'Priority support',
        'Custom dashboards',
        'Advanced reporting',
        'Up to 10 users',
        'Advanced integrations',
        'ML models',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom solutions',
        'White-label options',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'DataCorp Solutions',
      role: 'Data Director',
      quote: 'AI data analytics transformed our decision-making process. We now make data-driven decisions 80% faster.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Analytics Plus',
      role: 'VP of Analytics',
      quote: 'The machine learning models provided insights we never had before. Our ROI increased by 300%.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Business Intelligence Co',
      role: 'Analytics Manager',
      quote: 'Real-time analytics helped us identify opportunities and threats instantly. Game changer!',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">📊</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Data Analytics
          </h1>
          <p className="text-xl text-blue-400 mb-8 font-medium">
            Transform Data into Actionable Intelligence
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Unlock the power of your data with AI-powered analytics that provide 
            real-time insights, predictive modeling, and intelligent recommendations.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Time Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
              <div className="text-gray-300">Insights</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered data analytics capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-blue-400" />
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}</div>
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Data Analytics Services;</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
        <div className="absolute inset-0 bg-black opacity-20"></section><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Data Analytics Services</h1><p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">Transform your data into actionable insights with our advanced AI-powered analytics solutions</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >📞 +1 302 464 0950<a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >✉️ Get Free Consultation</a>
              >
                📞 +1 302 464 0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Get Free Consultation;
              </a>
            </div>
          </div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Analytics Solutions<p className="text-xl text-gray-600">Comprehensive AI-powered analytics platforms for every business need<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{analyticsServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"></div>
                <div className="text-4xl mb-4">{service.icon}<h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}<p className="text-gray-600 mb-4">{service.description}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Solutions;
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered analytics platforms for every business need;)
            </p>)
          </div>)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">),
            {analyticsServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow border border-gray-100">,</div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4"></div>
                  <span className="text-2xl font-bold text-blue-600">{service.price}<span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Analytics Solutions</h2><p className="text-xl text-gray-600">Comprehensive AI-powered analytics platforms for every business need</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{analyticsServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"></div>
                <div className="text-4xl mb-4">{service.icon}</div><h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3><p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4"></div>
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span><span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
>>>>>>> origin/main
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Analytics Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right analytics solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed their data strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your AI-powered data analytics journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
=======
                <div className="space-y-2 mb-6"></div>
                  <h4 className="font-semibold text-gray-900">Key Benefits: </h4>,
                <div className="space-y-2 mb-6"></div>
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                <a
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >Get Started</a>
                </a>
              </div>
                </div>
                <a;
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started;
                </a>,
              </div>))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Analytics Solutions?<p className="text-xl text-gray-600">Advanced technology and expert implementation for maximum ROI<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{additionalFeatures.map((feature, index) => (</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Analytics Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology and expert implementation for maximum ROI;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {additionalFeatures.map((feature, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="flex justify-center mb-4">{feature.icon}<h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}<p className="text-gray-600">{feature.description}</p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Analytics Solutions?</h2><p className="text-xl text-gray-600">Advanced technology and expert implementation for maximum ROI</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{additionalFeatures.map((feature, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="flex justify-center mb-4">{feature.icon}</div><h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3><p className="text-gray-600">{feature.description}</p>
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
=======
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Data into Insights?<p className="text-xl mb-8 text-blue-100">Contact us today for a free consultation and custom analytics solution</p>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom analytics solution;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Data into Insights?</h2><p className="text-xl mb-8 text-blue-100">Contact us today for a free consultation and custom analytics solution</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >📞 +1 302 464 0950<a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >✉️ kleber@ziontechgroup.com</a>
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            >
              📞 +1 302 464 0950;</div>
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com;
            </a>,
          </div>,
          <div className="mt-8 text-sm text-blue-200">,</div>
          <div className="mt-8 text-sm text-blue-200"></div>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
        </div>
      </section>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default AIDataAnalyticsPage;
=======
export default PagePage;
>>>>>>> origin/main
