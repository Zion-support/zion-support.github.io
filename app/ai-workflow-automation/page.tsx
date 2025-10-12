'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiWorkflowAutomationPage: React.FC = () => {,
    const features = [

const AiWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
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
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}}
  ]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',;
    'Improve decision-making with AI insights',;
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with advanced technology';
  ]
return(<>)
      <Helmet />
        <title>Ai Workflow Automation - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900"></div>
        {/* Hero Section */} <section$1>
        <div$2></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Workflow Automation;</h1>
            </h1>
            <p>Advanced AI-powered ai workflow automation solution for modern businesses.;</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
        </div>
      </section>
        {/* Features Section */} <section$1>
        <div$2></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

import React, {useState, useEffect}from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {Zap, Workflow, Target, CheckCircle, Phone, Mail, Brain, Database, Settings, Globe, BarChart, Users}}from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {,
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);}, []);

  const features = [
    {icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent workflow automation with machine learning and decision-making capabilities',
      benefits: ['Smart decision making', 'Learning algorithms', 'Adaptive workflows']},
    {icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding',
      benefits: ['No coding required', 'Visual design', 'Pre-built templates']},
    {icon: Database,
      title: '500+ Integrations',
      description: 'Connect with all your business tools and data sources seamlessly',
      benefits: ['CRM integration', 'ERP systems', 'Cloud platforms']},
    {icon: Target,
      title: 'Process Optimization',
      description: 'Automatically optimize workflows for maximum efficiency and performance',
      benefits: ['Performance analytics', 'Bottleneck detection', 'Continuous improvement']},
    {icon: Settings,
      title: 'Custom Workflows',
      description: 'Create tailored automation solutions for your specific business needs',
      benefits: ['Custom logic', 'Business rules', 'Conditional flows']},
    {icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track workflow performance and ROI',
      benefits: ['Performance metrics', 'ROI tracking', 'Custom reports']}];

  const services = [
    {icon: Zap,
      title: 'Basic Automation',
      price: '$99',
      period: '/month',
      benefits: ['5 workflows', 'Basic integrations', 'Email support']},
    {icon: Workflow,
      title: 'Professional',
      price: '$299',
      period: '/month',
      benefits: ['Unlimited workflows', 'Advanced integrations', 'Priority support']},
    {icon: Brain,
      title: 'Enterprise',
      price: '$599',
      period: '/month',
      benefits: ['Custom AI models', 'Dedicated support', 'White-label options']}];

  const stats = [
    {number: '90%', label: 'Time Savings' ,},
    {number: '75%', label: 'Error Reduction' ,},
    {number: '500+', label: 'Integrations' ,},
    {number: '24/7', label: 'Automation' ,}];

  return(<>)
      <SEOOptimizer;
        title="AI Workflow Automation Platform - Zion Tech Group"
        description="Automate business processes with AI-powered workflows. 90% time savings, 500+ integrations, and intelligent decision making. No coding required."
        keywords={['workflow automation', 'business process automation', 'AI workflows', 'process optimization', 'workflow builder']}canonicalUrl="https: //ziontechgroup.com/ai-workflow-automation",
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">
        <Navigation />
        
        <main className="pt-16">{/* Hero Section */</main>} <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">,</h1>
                AI Workflow Automation Platform;
              </h1>
              <p className="text-xl md: text-2xl text-yellow-400 mb-8">,</p>
                Automate any business process with intelligent workflows;
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">Our AI-powered workflow automation platform helps businesses eliminate manual tasks,</p>
                reduce errors by 75%, and save 90% of processing time with intelligent automation.
              </p>
              
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-16">,</div>
                <a;
                  href="tel: +13024640950",
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a;
                  href="mailto: kleber@ziontechgroup.com",
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
              </div>

              {/* Stats */} <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16">,</div>
                {stats.map((stat, index) => (
                  <div key={index}className="hologram-card-enhanced p-6 text-center">
                    <div className="text-3xl md: text-4xl font-bold text-yellow-400 mb-2 neon-text">,</div>
                      {stat.number} </div>
                    <div className="text-gray-300 font-medium">{stat.label</div>}</div>
                  </div>
                ))}
              </div>
        </div>
      </section>

          {/* Features Section */} <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">,</h2>
                Powerful Automation Features;
              </h2>
              
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                {features.map((feature, index) => (
                  <div key={index}className="hologram-card-enhanced p-6 hover: scale-105 transition-all duration-300">,</div>
                    <div className="text-4xl mb-4 text-yellow-400">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit} </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
        </div>
      </section>
        {/* Benefits Section */} <section$1>
        <div$2></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?;</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section$1>
        <div$2></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?;</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
                </button>
                  </div>
                ))}
              </div>
        </div>
      </section>

          {/* Services Section */} <section className="py-16 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">,</h2>
                Automation Services;
              </h2>
              
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                {services.map((service, index) => (
                  <div key={index}className="hologram-card-enhanced p-6 hover: scale-105 transition-all duration-300">,</div>
                    <div className="text-4xl mb-4 text-cyan-400">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price</div>}</div>
                      <div className="text-sm text-gray-400 mb-4">{service.period</div>}</div>
                      <div className="space-y-1">{service.benefits.map((benefit, benefitIndex) => (</div>
                          <p key={benefitIndex}className="text-sm text-green-600">✓ {benefit</p>}</p>
                        ))}
                      </div>
                    </div>
                    
                    <a;
                      href="/contact"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-green-700 transition-colors inline-flex items-center justify-center mt-4",
                    >
                      Get Started;
                    </a>
                  </div>
                ))}
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'];
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
  ];];];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology';
  ];

  return (
    <>
  </>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation solutions. Increase efficiency, reduce costs, and scale operations with intelligent automation." />
        <meta name="keywords" content="AI workflow automation, business process automation, intelligent automation, workflow optimization" />
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
        <section$1>
        <div$2>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai workflow automation solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Workflow Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business processes with intelligent automation. 
                Streamline operations, reduce costs, and scale efficiently with AI-powered workflows.
              </p>

                </button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>

                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automation Types
            </h2>
            <p className="text-xl text-gray-300">
              Automate processes across all departments of your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your automation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how companies are transforming their operations with AI automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how AI automation can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section$1>
        <div$2>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
      <Footer />

  );
};

export default PagePage;
      <Footer />
    </div>
  )
}

export default AiWorkflowAutomationPage
