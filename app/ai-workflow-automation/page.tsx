'use client';
import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiWorkflowAutomationPage: React.FC = () => {
  return (

  const services = [{
      title: 'Process Automation', description: 'Intelligent automation of complex business workflows', features: ['Workflow Design', 'Process Optimization', 'Exception Handling'],
      price: 'Starting at $1,500/month',
      icon: '⚙️'
    
  );
},
    {
      title: 'Document Processing',
      description: 'AI-powered document analysis and workflow automation',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification'],
      price: 'Starting at $1,200/month',
      icon: '📄'
    },
    {
      title: 'Approval Workflows',
      description: 'Automated approval processes with intelligent routing',
      features: ['Smart Routing', 'Approval Logic', 'Notification Systems'],
      price: 'Starting at $800/month',
      icon: '✅'
    },
    {
      title: 'Task Automation',
      description: 'Automated task assignment and completion tracking',
      features: ['Task Assignment', 'Progress Tracking', 'Deadline Management'],
      price: 'Starting at $1,000/month',
      icon: '📋'
    },
    {
      title: 'Integration Automation',
      description: 'Automated data flow between different systems',
      features: ['API Integration', 'Data Synchronization', 'Error Handling'],
      price: 'Starting at $1,300/month',
      icon: '🔗'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting',
      features: ['Compliance Checks', 'Audit Trails', 'Report Generation'],
      price: 'Starting at $1,600/month',
      icon: '📊'
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiWorkflowAutomationPage: React.FC = () => {
  return (
,
    const features = [const AiWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain, title: 'AI-Powered Solutions', description: 'Advanced AI technology to transform your business operations and improve efficiency'
    
  );
}, {
      icon: Zap, title: 'High Performance', description: 'Lightning-fast processing and real-time analytics for optimal results'
    }, {
      icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with encryption and compliance standards'
    }, {
      icon: Globe, title: 'Global Reach', description: 'Worldwide deployment and support for international businesses'
    }];

  const benefits = [{ metric: '90%', description: 'Process Efficiency' }, { metric: '75%', description: 'Time Savings' }, { metric: '99%', description: 'Accuracy Rate' }, { metric: '24/7', description: 'Automated Operations' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            AI Workflow Automation
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your business processes with intelligent workflow automation 
            that learns, adapts, and optimizes your operations automatically.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Get Automation Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View Automation Case Studies
            </Link>
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
const benefits = ['Increase efficiency by up to 50%', 'Reduce costs by 30% with automation', ;
    'Improve decision-making with AI insights', ;
    'Scale operations without proportional staff increases', ;
    'Gain competitive advantage with advanced technology';]
return(<>
  )
</>
      <Helmet /></Helmet>
        <title>Ai Workflow Automation - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900"></div>
        {/* Hero Section */} <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
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
        {/* Features Section */} <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
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
                          <CheckCircle /></CheckCircle>
import React, {useState, useEffect}from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {Zap, Workflow, Target, CheckCircle, Phone, Mail, Brain, Database, Settings, Globe, BarChart, Users}}from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {
  return (
,
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  );
}, []);

  const features = [{icon: Brain, title: 'AI-Powered Automation', description: 'Intelligent workflow automation with machine learning and decision-making capabilities', benefits: ['Smart decision making', 'Learning algorithms', 'Adaptive workflows']},
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

  const services = [{icon: Zap, title: 'Basic Automation', price: '$99', period: '/month', benefits: ['5 workflows', 'Basic integrations', 'Email support']},
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

  const stats = [{number: '90%', label: 'Time Savings', }, {number: '75%', label: 'Error Reduction', }, {number: '500+', label: 'Integrations', }, {number: '24/7', label: 'Automation', }];

  return(<>
  )
</>
      <SEOOptimizer ;
        title="AI Workflow Automation Platform - Zion Tech Group"
        description="Automate business processes with AI-powered workflows. 90% time savings, 500+ integrations, and intelligent decision making. No coding required."
        keywords={['workflow automation', 'business process automation', 'AI workflows', 'process optimization', 'workflow builder']}canonicalUrl="https: //ziontechgroup.com/ai-workflow-automation",
      /></SEOOptimizer>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">
        <Navigation /></Navigation>
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
                  <Phone className="w-5 h-5" /></Phone>
                  <span>Call (302) 464-0950</span>
                </a>
                <a;
                  href="mailto: kleber@ziontechgroup.com",
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <Mail className="w-5 h-5" /></Mail>
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
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                          {benefit} </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */} <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?;</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle /></CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */} <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
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
  const benefits = ['Increase efficiency by up to 50%', 'Reduce costs by 30% with automation', 'Improve decision-making with AI insights', 'Scale operations without proportional staff increases', 'Gain competitive advantage with advanced technology';];

  return (
    <>
  </>
      <Helmet ></Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation solutions. Increase efficiency, reduce costs, and scale operations with intelligent automation." />
        <meta name="keywords" content="AI workflow automation, business process automation, intelligent automation, workflow optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
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
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
                AI Workflow Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business processes with intelligent automation. 
                Streamline operations, reduce costs, and scale efficiently with AI-powered workflows.
              </p>

                </button>
                <button className="border border-gray-300 text-white hover: bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
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
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Automation Benefits</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Automation Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-blue-400 hover: text-blue-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-gray-300 mb-6">
            Transform your business operations with intelligent workflow automation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Automation Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>
        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" /></CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
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
      <Footer /></Footer>
  );
};
      <Footer ></Footer>
    </>
  ),
}
export default AiWorkflowAutomationPage;

export default AiWorkflowAutomationPage;
export default PagePage;
      <Footer /></Footer>
    </div>
  )
}

export default AiWorkflowAutomationPage
