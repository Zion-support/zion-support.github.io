'use client';
<<<<<<< HEAD
import React, { lazy } from 'react';
import { 
  Zap, Users, BarChart, Bot, Settings, Clock, CheckCircle, 
  ArrowRight, Phone, Mail, Star, TrendingUp, Shield, 
  Database, Cloud, Target, Globe, Brain, Cpu
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Brain, Zap, Settings, Clock, Shield, ArrowRight, Target, BarChart, Globe, Database, Users, Star, Phone, Mail } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
<<<<<<< HEAD
=======
  const automationServices = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
=======
'use client';
import React, { lazy } from 'react';
import { CheckCircle, TrendingUp, Brain, Zap } from 'lucide-react';

>>>>>>> origin/main
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const AIAutomationPage: React.FC = React.memo((props) => {
<<<<<<< HEAD
  const automationServices = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
    },
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  const features = [
>>>>>>> origin/main
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI systems',
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']
    },
    {
<<<<<<< HEAD
=======
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuously optimize business processes using AI-driven insights and recommendations.',
      benefits: ['Performance monitoring', 'Efficiency metrics', 'Cost reduction', 'Quality improvement']
    },
    {
<<<<<<< HEAD
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor automated processes in real-time with intelligent alerts and notifications.',
      benefits: ['Live monitoring', 'Instant alerts', 'Performance tracking', 'Issue resolution']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure automated processes meet security standards and regulatory compliance requirements.',
      benefits: ['Security protocols', 'Compliance monitoring', 'Audit trails', 'Risk management']
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Set and track business goals with AI-powered automation that adapts to achieve targets.',
      benefits: ['Goal setting', 'Progress tracking', 'Performance metrics', 'Success optimization']
=======
>>>>>>> origin/main
      icon: Shield,
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Clock,
      title: 'Exception Handling',
      description: 'Intelligent handling of exceptions and edge cases in automated processes',
      benefits: ['Smart escalation', 'Context awareness', 'Learning capabilities']
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Increase operational efficiency by 85%',
    'Reduce manual errors by 95%',
    'Lower operational costs by 60%',
    'Improve process speed by 70%',
    'Enable 24/7 automated operations',
    'Scale processes without additional resources',
    'Enhance data accuracy and consistency',
    'Free up human resources for strategic tasks'
=======
    'Reduce operational costs by 60%',
    'Increase process efficiency by 80%',
    'Eliminate human error completely',
    'Scale operations without scaling staff',
    'Improve customer satisfaction',
    'Enable 24/7 business operations'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automated processes',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        '1 user account'
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
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automated processes',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Up to 10 user accounts',
        'API access',
        'Real-time monitoring'
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
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited processes',
        'Premium AI capabilities',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'White-label solution',
        'Custom workflows',
        'SLA guarantee'
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

  const useCases = [
    {
      title: 'Document Processing',
      description: 'Automate document classification, extraction, and processing',
      icon: '📄'
    },
    {
      title: 'Customer Service',
<<<<<<< HEAD
      description: 'Automate customer inquiries, ticket routing, and response generation',
      icon: '🎧',
      metrics: ['90% faster response', '24/7 availability', '95% satisfaction']
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows',
      icon: '📊',
      metrics: ['100% accuracy', '10x faster processing', 'Real-time insights']
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoicing, payment processing, and financial reporting',
      icon: '💰',
      metrics: ['Zero errors', 'Instant processing', 'Compliance ready']
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechFlow',
      role: 'Operations Director',
      quote: 'AI automation transformed our operations. We reduced manual work by 80% and improved accuracy significantly.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Wang',
      company: 'DataCorp',
      role: 'VP of Technology',
      quote: 'The intelligent automation platform exceeded our expectations. ROI was achieved within the first month.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      name: 'Robert Johnson',
      company: 'FinanceMax',
      role: 'CFO',
      quote: 'Automated financial processes saved us 40 hours per week and eliminated costly errors.',
      rating: 5,
      image: '👨‍💼'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate human error with our intelligent automation platform." />
        <meta name="keywords" content="AI automation, business process automation, intelligent workflows, AI solutions, Zion Tech Group" />
=======
      description: 'Automate customer inquiries and support processes',
      icon: '🎧'
    },
    {
      title: 'Data Entry',
      description: 'Automate data entry and validation processes',
      icon: '📊'
    },
    {
      title: 'Invoice Processing',
      description: 'Automate invoice processing and payment workflows',
      icon: '💰'
    },
    {
      title: 'Report Generation',
      description: 'Automate report creation and distribution',
      icon: '📈'
    },
    {
      title: 'Quality Control',
      description: 'Automate quality checks and validation processes',
      icon: '✅'
    }
  ];

  return (</div>
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Automation solutions. Intelligent process automation, workflow optimization, and smart decision-making for better efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation, RPA" />
>>>>>>> origin/main
      </Helmet>
<<<<<<< HEAD

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI Automation solutions. 
              Intelligent process automation, workflow optimization, and smart decision-making for better efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Start Automating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
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
                Advanced AI Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Automation solution combines cutting-edge technology with business intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
=======
      
<<<<<<< HEAD
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="text-6xl mb-6 animate-bounce">🤖</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Automation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Intelligent Automation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Deploy AI-powered automation solutions that learn, adapt, and optimize your business processes 
              for maximum efficiency and minimal human intervention.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Error Elimination</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Operation</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Automation Journey
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Automation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI automation solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <service.icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of intelligent automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Automation Services</h1>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your business operations with intelligent automation. 
                Reduce manual work, eliminate errors, and scale your operations efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Automation Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {automationServices.map((service, index) => (</div>
                  <div key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                    <div className="flex items-center mb-4"></div>
                      <service.icon className="w-12 h-12 text-cyan-400 mr-4 group-hover:text-cyan-300 transition-colors" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6"></div>
                      <div></div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div></div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-center"></div>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      <a
                        href="tel:+13024640950"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* Use Cases Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI automation transforms different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                        <span className="text-cyan-400 font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Automation Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your automation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
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
                See how our clients achieved remarkable results with AI automation
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
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
=======
<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From small businesses to enterprises, our AI Automation solution serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of business automation with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
=======
          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto"></div>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                  Why Choose Our AI Automation?
                </h2>
                <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                  Our automation solutions are designed to integrate seamlessly into your existing workflow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (</div>
                  <div key={index} className="text-center group"></div>
                    <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:bg-cyan-500 transition-colors"></div>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
=======
          {/* CTA Section */}
<<<<<<< HEAD
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your automation journey today and transform your business operations
=======
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Join thousands of businesses who are already using our AI Automation solution
>>>>>>> origin/main
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
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
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                  Schedule Demo
                </button>
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Automation Strategy
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> origin/main

      <Footer />
    </>
  );
});

AIAutomationPage.displayName = 'AIAutomationPage';

export default AIAutomationPage;
