'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Cloud, Server, Database, Shield, CheckCircle, Star, ArrowRight, Users, Zap, Target, Globe, Lock, Settings, Activity, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICloudInfrastructurePage: React.FC = memo(() => {
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Database, Shield, CheckCircle, ArrowRight, Zap, Globe, Lock, Settings, Activity, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
>>>>>>> origin/main
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'AI-Powered Cloud Management',
<<<<<<< HEAD
      description: 'Intelligent cloud resource optimization and automated scaling based on demand patterns',
      color: 'text-purple-400'
=======
      description: 'Intelligent cloud resource optimization and automated scaling based on demand patterns.',
      benefits: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Resource allocation']
>>>>>>> origin/main
    },
    {
      icon: Server,
      title: 'Hybrid Cloud Solutions',
<<<<<<< HEAD
      description: 'Seamless integration between on-premises and cloud infrastructure with AI-driven optimization',
      color: 'text-blue-400'
=======
      description: 'Seamless integration between on-premises and cloud infrastructure with AI-driven optimization.',
      benefits: ['Hybrid architecture', 'Data migration', 'Workload balancing', 'Unified management']
>>>>>>> origin/main
    },
    {
      icon: Database,
      title: 'Smart Data Management',
<<<<<<< HEAD
      description: 'AI-powered data storage, backup, and recovery solutions with predictive analytics',
      color: 'text-green-400'
=======
      description: 'AI-powered data storage, backup, and recovery solutions with predictive analytics.',
      benefits: ['Automated backups', 'Data analytics', 'Disaster recovery', 'Storage optimization']
>>>>>>> origin/main
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Advanced security monitoring and compliance management for cloud infrastructure',
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Intelligent auto-scaling based on real-time demand and predictive analytics',
      color: 'text-cyan-400'
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'AI-driven cost optimization and resource allocation for maximum efficiency',
      color: 'text-pink-400'
=======
      description: 'Advanced security monitoring and compliance management for cloud infrastructure.',
      benefits: ['Security monitoring', 'Compliance management', 'Threat detection', 'Access control']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-driven performance tuning and optimization for maximum efficiency and speed.',
      benefits: ['Performance tuning', 'Load balancing', 'Caching strategies', 'Speed optimization']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide cloud infrastructure with intelligent content delivery and edge computing.',
      benefits: ['Global CDN', 'Edge computing', 'Low latency', 'High availability']
>>>>>>> origin/main
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve performance by 60%',
    'Increase reliability by 95%',
    'Lower operational overhead by 50%',
    'Enable global scalability',
    'Automate infrastructure management',
    'Enhance security and compliance',
    'Optimize resource utilization'
=======
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic cloud management',
        'Standard security',
        'Email support',
        'Basic monitoring',
        '1 cloud engineer'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false},
      popular: false,
>>>>>>> origin/main
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced cloud management',
        'Enhanced security',
        'Priority support',
        'Advanced monitoring',
        'Dedicated team',
        'Custom integrations',
        '24/7 support'
      ],
<<<<<<< HEAD
      popular: true
=======
      popular: true},
      popular: true,
>>>>>>> origin/main
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Full AI suite',
        'Maximum security',
        'Dedicated support',
        'Custom solutions',
        'White-label options',
        'SLA guarantee',
        'Training & consulting'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false}
      popular: false,
>>>>>>> origin/main
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  ];

<<<<<<< HEAD
=======
  const useCases = [
    {
<<<<<<< HEAD
      title: 'Enterprise Migration',
      description: 'Migrate enterprise applications to cloud with AI-powered optimization',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Scale e-commerce platforms with intelligent cloud infrastructure',
      icon: '🛒'
    },
    {
      title: 'Data Analytics',
      description: 'Build scalable data analytics platforms in the cloud',
      icon: '📊'
    },
    {
      title: 'IoT Applications',
      description: 'Support IoT applications with edge computing and cloud infrastructure',
      icon: '📡'
    },
    {
      title: 'Mobile Apps',
      description: 'Power mobile applications with scalable cloud backend services',
      icon: '📱'
    },
    {
      title: 'AI/ML Workloads',
      description: 'Run AI and machine learning workloads on optimized cloud infrastructure',
      icon: '🤖'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Build scalable and intelligent cloud infrastructure with our AI-powered solutions. Automated scaling, optimization, and management for better performance and cost efficiency." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, hybrid cloud, cloud optimization, cloud security, cloud migration" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mb-8">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build scalable and intelligent cloud infrastructure with our AI-powered solutions. 
              Automated scaling, optimization, and management for better performance and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-sky-400 text-sky-300 px-8 py-4 rounded-lg font-semibold hover:bg-sky-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Cloud Infrastructure combines cutting-edge technology with cloud expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
=======
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud with AI-powered optimization and cost reduction',
      icon: Cloud,
      result: '50% cost savings'},
    {
      title: 'Auto Scaling',
      description: 'Intelligent scaling based on demand patterns and performance metrics',
      icon: Server,
      result: '99.9% uptime'},
    {
      title: 'Data Backup',
      description: 'AI-powered backup and disaster recovery with predictive failure detection',
      icon: Database,
      result: 'Zero data loss'},
    {
      title: 'Security Monitoring',
      description: 'Continuous security monitoring and threat detection across cloud infrastructure',
      icon: Shield,
      result: '24/7 protection'}
  ];

>>>>>>> origin/main
  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve performance by 60%',
    'Enhance security and compliance',
    'Automate routine tasks',
    'Scale resources dynamically',
    'Optimize resource utilization'
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechFlow Solutions',
      role: 'CTO',
      quote: 'AI cloud infrastructure reduced our operational costs by 45% while improving performance significantly.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      company: 'DataCorp Inc',
      role: 'VP of Engineering',
      quote: 'The auto-scaling capabilities are incredible. We handle traffic spikes seamlessly now.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      company: 'CloudFirst',
      role: 'CEO',
      quote: 'Enterprise security features gave us peace of mind. Compliance is now automated and foolproof.',
      rating: 5,
      image: '👨‍💼'
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure solutions. Optimize performance, reduce costs, and enhance security with intelligent cloud management." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, hybrid cloud, cloud security, cloud optimization, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-6xl mb-6 animate-bounce">☁️</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Intelligent Cloud Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your cloud infrastructure with AI-powered management, optimization, and security. 
              Reduce costs, improve performance, and scale intelligently.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>AI Cloud Infrastructure - Intelligent Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your cloud infrastructure with AI-powered management, optimization, and security. Reduce costs by 50% and achieve 99.9% uptime." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, cloud optimization, hybrid cloud, cloud security, cloud migration" />
        <meta property="og: title" content="AI Cloud Infrastructure - Intelligent Cloud Solutions" />
        <meta property="og:description" content="Transform your cloud infrastructure with AI-powered management and optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cloud-infrastructure" />
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></section>
            <Cloud className="w-4 h-4" />
            <span>AI-Powered Cloud</span><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Cloud Infrastructure</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your cloud infrastructure with AI-powered management, optimization, and security.</p>
            Reduce costs by 50% and achieve 99.9% uptime with intelligent cloud solutions.</p>
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-cloud-infrastructure" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}</div>
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Cloud className="w-4 h-4" />
            <span>AI-Powered Cloud</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Cloud Infrastructure;)</h1>
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">),
            Transform your cloud infrastructure with AI-powered management, optimization, and security.
            Reduce costs by 50% and achieve 99.9% uptime with intelligent cloud solutions.
          </p>

          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950<a
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >Get Cloud Assessment</a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Cloud Assessment;
            </a>
          </div>,
        </section>,
,
        {/* Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}<div className="text-white font-semibold mb-2">{benefit.label}<div className="text-gray-400 text-sm">Industry-leading cloud performance</div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-gray-400 text-sm">Industry-leading cloud performance</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div><div className="text-white font-semibold mb-2">{benefit.label}</div><div className="text-gray-400 text-sm">Industry-leading cloud performance</div>
>>>>>>> origin/main
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Performance Boost</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered cloud solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className={feature.color} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of intelligent cloud management
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
                Cloud Infrastructure Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right cloud solution for your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
                See how organizations transformed their cloud infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
=======
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Cloud Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Cloud Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-blue-500/50 transition-all duration-300">,</div>
                <div className="flex items-start space-x-4">,</div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Cloud Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Cloud Infrastructure serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
=======
        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Solutions<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Solutions</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-blue-500/50 transition-all duration-300">,</div>
                <div className="flex items-center justify-between mb-4">,</div>
                  <useCase.icon className="w-8 h-8 text-blue-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of cloud computing with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
=======
        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Infrastructure Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'} hover:border-blue-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Infrastructure Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'} hover:border-blue-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Infrastructure Plans</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'} hover:border-blue-500/50 transition-all duration-300`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular;</div>
>>>>>>> origin/main
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
<<<<<<< HEAD
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
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your cloud transformation journey with AI-powered solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
=======
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Cloud Infrastructure?
              </h2>
              <p className="text-xl text-sky-100 mb-8">
                Join thousands of businesses who are already using our AI Cloud Infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
=======
        <section className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-lg border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Cloud?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 2,000+ organizations already using our AI Cloud Infrastructure to reduce costs and improve performance.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ></a><Mail className="w-5 h-5 mr-2" >Email Us</Mai>
            </Mail>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      >
              <Mail className="w-5 h-5 mr-2" />
              Email Us;
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </section>
      </main>
>>>>>>> origin/main

      <Footer />
    </>
  );
<<<<<<< HEAD
});

AICloudInfrastructurePage.displayName = 'AICloudInfrastructurePage';

export default AICloudInfrastructurePage;
=======
};

export default AICloudInfrastructurePage;
>>>>>>> origin/main
