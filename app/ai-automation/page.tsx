import Footer from '../components/Footer';
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered process automation.',
      benefits: ['Workflow automation', 'Task scheduling', 'Error reduction', 'Efficiency gains']
    },
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'Make smarter business decisions with AI-powered analytics and predictive insights.',
      benefits: ['Predictive analytics', 'Smart recommendations', 'Risk assessment', 'Optimization']
    },
    {
      icon: Target,
      title: 'Workflow Optimization',
      description: 'Optimize your business processes for maximum efficiency and productivity.',
      benefits: ['Process analysis', 'Bottleneck identification', 'Performance improvement', 'Cost reduction']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Monitor and track automation performance with real-time analytics and reporting.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Custom dashboards', 'Alert system']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance team collaboration with AI-powered communication and coordination tools.',
      benefits: ['Smart notifications', 'Task assignment', 'Progress tracking', 'Team insights']
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Get tailored automation solutions designed specifically for your business needs.',
      benefits: ['Custom development', 'Integration support', 'Training programs', 'Ongoing support']
    }
  ];

  const benefits = [
    'Reduce manual work by 80%',
    'Increase productivity by 60%',
    'Improve accuracy by 95%',
    'Cut operational costs by 40%',
    'Accelerate decision making by 70%',
    'Enhance customer satisfaction by 50%'
  ];

  return (
    <>
      <Helmet></Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Automation solutions. Intelligent process automation, workflow optimization, and smart decision-making for better efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation, RPA" />
      </Helmet>

      <Navigation />
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
            AI Automation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              Solutions
            </span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
            Transform your business with intelligent automation solutions. Streamline processes, 
            reduce manual work, and boost productivity with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Get Started
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              View Demo
            </button>
                </div>
        </div>
                </section>
                {/* Features Section */}
                <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Advanced Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our AI automation platform provides comprehensive solutions for business process optimization.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white"></h3>
                {feature.title}
                </h3>
                </div>
                <p className="text-gray-300 mb-4"></p>
                {feature.description}
                </p>
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                {benefit}
                </li>
                  ))}
                </ul>
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiAutomationPage: React.FC  = () => {,
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'];
  },
    {
    icon: BarChart,
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
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
  },
  ];];
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
      <Helmet></Helmet>
        <title>Ai Automation - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Automation;</h1>
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
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
                </h2>
              <p>Advanced AI technology that drives results;</p>
                </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4"></h3>
                {feature.title}
                </h3>
                  <p className="text-gray-300 mb-4"></p>
                {feature.description</p>}
                </p>
                {feature.benefits && (;
                    <ul></ul>
                {feature.benefits.map((benefit, idx) => (}
                <li></li>
                          <CheckCircle />
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
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
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
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle />
                  <p className="text-lg text-white font-medium"></p>
                {benefit</p>}
                </p>
                </div>
              ))}
                </div>
          ))
        </section>
                </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Learn More
                </button>
                </div>
                {/* CTA Section */}
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          ))
        </section>
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
import { Zap, CheckCircle, ArrowRight } from 'lucide-react'

const AIAutomationPage: React.FC  = () => {const features = [
    'Workflow automation',
    'Process optimization',
    'Intelligent scheduling',
    'Data processing',
    'Task management',
    'Integration capabilities'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Automation</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Streamline your business processes with intelligent automation solutions.
            </p>
                </div>
        </div>
                </section>
                {/* Features Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Automation Features
            </h2>
            <p className="text-xl text-gray-300"></p>
              Automate repetitive tasks and optimize your workflows.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300"></div>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span></span>
                {feature}
                </span>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Start Automating
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Discover how AI automation can transform your business operations.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"></button>
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
                </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIAutomationPage
;