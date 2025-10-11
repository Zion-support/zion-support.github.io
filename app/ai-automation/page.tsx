import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAutomationPage: React.FC = () => {
  return (

  const services = [{
      title: 'Process Automation', description: 'Automate repetitive business processes with intelligent decision-making', features: ['Workflow Automation', 'Exception Handling', 'Quality Control'],
      price: 'Starting at $399/month',
      icon: '⚙️'
    
  );
},
    {
      title: 'Document Processing',
      description: 'AI-powered document analysis and data extraction',
      features: ['OCR Technology', 'Data Extraction', 'Classification'],
      price: 'Starting at $299/month',
      icon: '📄'
    },
    {
      title: 'Customer Service Automation',
      description: 'Intelligent customer support and ticket routing',
      features: ['Ticket Classification', 'Auto-Responses', 'Escalation Management'],
      price: 'Starting at $249/month',
      icon: '🎧'
    },
    {
      title: 'Financial Automation',
      description: 'Automated financial processes and reporting',
      features: ['Invoice Processing', 'Expense Management', 'Financial Reporting'],
      price: 'Starting at $499/month',
      icon: '💰'
    },
    {
      title: 'HR Automation',
      description: 'Streamline human resources processes',
      features: ['Resume Screening', 'Interview Scheduling', 'Onboarding'],
      price: 'Starting at $349/month',
      icon: '👥'
    },
    {
      title: 'Inventory Management',
      description: 'Intelligent inventory tracking and optimization',
      features: ['Demand Forecasting', 'Reorder Automation', 'Stock Optimization'],
      price: 'Starting at $199/month',
      icon: '📦'
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Brain, Target, BarChart, Users, ArrowRight, Sparkles  } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  return (

  const features = [{
      icon: Brain, title: 'Intelligent Process Discovery', description: 'AI automatically identifies and maps your business processes for optimization opportunities.', benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    
  );
},
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuously optimize business processes using AI-driven insights and recommendations.',
      benefits: ['Performance monitoring', 'Efficiency metrics', 'Cost reduction', 'Quality improvement']
    },
    {
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
    }
  ];

  const benefits = [{ metric: '95%', description: 'Process Efficiency Improvement' }, { metric: '80%', description: 'Cost Reduction' }, { metric: '24/7', description: 'Automated Operations' }, { metric: '99.9%', description: 'Accuracy Rate' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            AI Automation Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business operations with intelligent automation that handles 
            complex processes, makes decisions, and learns from experience.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Get Automation Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View Case Studies
            </Link>
    'Increase operational efficiency by 85%',
    'Reduce manual errors by 95%',
    'Lower operational costs by 60%',
    'Improve process speed by 70%',
    'Enable 24/7 automated operations',
    'Scale processes without additional resources',
    'Enhance data accuracy and consistency',
    'Free up human resources for strategic tasks'
  ];

  const useCases = [{
      title: 'Document Processing', description: 'Automate document classification, extraction, and processing', icon: '📄'
    }, {
      title: 'Customer Service', description: 'Automate customer inquiries and support processes', icon: '🎧'
    }, {
      title: 'Data Entry', description: 'Automate data entry and validation processes', icon: '📊'
    }, {
      title: 'Invoice Processing', description: 'Automate invoice processing and payment workflows', icon: '💰'
    }, {
      title: 'Report Generation', description: 'Automate report creation and distribution', icon: '📈'
    }, {
      title: 'Quality Control', description: 'Automate quality checks and validation processes', icon: '✅'
    }];

  return (</div>
    <>
      <Helmet ></Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Automation solutions. Intelligent process automation, workflow optimization, and smart decision-making for better efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation, RPA" />
      </Helmet>

      <Navigation /></Navigation>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
            AI Automation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation solutions. Streamline processes, 
            reduce manual work, and boost productivity with AI-powered automation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform provides comprehensive solutions for business process optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover: bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      {benefit}
                    </li>
                  ))}
                </ul>
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiAutomationPage: React.FC = () => {
  return (
,
    const features = [{
      icon: Brain, title: 'AI-Powered Intelligence', description: 'Advanced AI algorithms that provide intelligent insights and recommendations.', benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
  );
},
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
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
const benefits = ['Increase efficiency by up to 50%', 'Reduce costs by 30% with automation', 'Improve decision-making with AI insights', 'Scale operations without proportional staff increases', 'Gain competitive advantage with advanced technology';]
return(<>
  )
</>
      <Helmet /></Helmet>
        <title>Ai Automation - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              Ai Automation
            </h1>
            <p>Advanced AI-powered ai automation solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle /></CheckCircle>
                          {benefit} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" /></CheckCircle>
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Join thousands of businesses who are already using our AI Automation solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>

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

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Automation Process</h2>
          <div className="grid md: grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Analysis</h3>
              <p className="text-gray-300 text-sm">We analyze your current processes and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">We design intelligent automation workflows tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">We build and deploy AI-powered automation solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Optimization</h3>
              <p className="text-gray-300 text-sm">We continuously monitor and optimize automation performance</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-300 mb-6">
            Discover how AI automation can transform your operations and boost efficiency.
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
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          ))
        </section>
      </div>
      <Footer /></Footer>
  );
};
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
                </button>
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Zap, CheckCircle, ArrowRight  } from 'lucide-react'

export default AiAutomationPage;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation solutions deliver measurable improvements in business performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" /></CheckCircle>
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our automation experts to learn how our AI solutions can transform your business processes.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Automating
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how AI automation can transform your business operations.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
            Get Started
          </button>
        </div>
      </section>
      <Footer /></Footer>
    </div>
  )
}

export default AIAutomationPage;
