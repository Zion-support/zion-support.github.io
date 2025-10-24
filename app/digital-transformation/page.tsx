<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Digital Transformation solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Digital Transformation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive digital transformation solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function DigitaltransformationPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Digital Transformation - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Digital Transformation</h1>
        <p className="text-lgtext-gray-300mb-8">Professional digital transformation services coming soon.</p>
          Contact Us

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Users, Settings, Target, TrendingUp, Clock } from 'lucide-react'

<<<<<<< HEAD
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
const DigitalTransformationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'AI-Powered Automation',
      description: 'Leverage artificial intelligence to automate complex business processes and decision-making.',
      benefits: ['Process automation', 'Intelligent decision support', 'Predictive analytics', 'Machine learning integration']
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable insights that drive business growth and efficiency.',
      benefits: ['Real-time analytics', 'Custom dashboards', 'Predictive modeling', 'Performance tracking']
    },
    {
      icon: Globe,
      title: 'Cloud-First Architecture',
      description: 'Build scalable, secure, and flexible solutions using modern cloud technologies.',
      benefits: ['Scalable infrastructure', 'Global accessibility', 'Cost optimization', 'Disaster recovery']
    },
    {
      icon: Users,
      title: 'Digital Customer Experience',
      description: 'Create seamless, personalized experiences that engage and retain customers.',
      benefits: ['Omnichannel engagement', 'Personalization', 'Customer journey mapping', 'Real-time support']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamline and optimize business processes for maximum efficiency and productivity.',
      benefits: ['Workflow automation', 'Process mapping', 'Performance monitoring', 'Continuous improvement']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Ensure robust security and compliance with industry standards and regulations.',
      benefits: ['Security audits', 'Compliance management', 'Risk assessment', 'Incident response']
=======
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
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
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
    }
  ]

  const benefits = [
<<<<<<< HEAD
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems'
  ]

  const stats = [
    { label: 'Projects Completed', value: '200+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Implementation Time', value: '6 months', icon: Clock }
  ]
=======
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation solutions. AI, cloud, and modern technology integration." />
        <meta name="keywords" content="digital transformation, AI integration, cloud migration, business automation, technology consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge technology solutions. We help organizations 
              embrace digital innovation to stay competitive and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Digital Transformation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive digital transformation services that help businesses 
                modernize, optimize, and scale their operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
=======
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with digital solutions." />
        <meta name="keywords" content="digital transformation, modernization, technology" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Our Digital Transformation Services?
                </h2>
                <p className="text-gray-300 mb-8">
                  Our experienced team combines deep technical expertise with business acumen 
                  to deliver transformation solutions that drive real results.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Assessment & Strategy</h4>
                      <p className="text-gray-300 text-sm">Analyze current state and define transformation roadmap</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Design & Planning</h4>
                      <p className="text-gray-300 text-sm">Create detailed implementation plan and architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                      <p className="text-gray-300 text-sm">Execute transformation with agile methodology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Optimization</h4>
                      <p className="text-gray-300 text-sm">Monitor, optimize, and scale the solution</p>
                    </div>
=======
'use client';
import React from 'react';
import { RefreshCw, Target, Users, BarChart, Cloud, Shield, Zap, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const DigitalTransformationPage: React.FC = () => {
  const phases = [
    {
      title: 'Assessment & Strategy'
      description: 'Comprehensive analysis of current state and digital readiness'
      icon: Target;
      duration: '2-4 weeks',
      deliverables: [
        'Digital maturity assessment',
        'Technology gap analysis',
        'Strategic roadmap development',
        'ROI projections'
      ]
    },
    {
      title: 'Planning & Design'
      description: 'Detailed planning and architecture design for transformation'
      icon: Users;
      duration: '3-6 weeks',
      deliverables: [
        'Solution architecture design',
        'Implementation timeline',
        'Change management plan',
        'Resource allocation strategy'
      ]
    },
    {
      title: 'Implementation'
      description: 'Phased implementation of digital solutions and processes'
      icon: Cloud;
      duration: '8-16 weeks',
      deliverables: [
        'System integration',
        'Process automation',
        'User training',
        'Performance monitoring'
      ]
    },
    {
      title: 'Optimization'
      description: 'Continuous improvement and optimization of digital systems'
      icon: TrendingUp;
      duration: 'Ongoing',
      deliverables: [
        'Performance optimization',
        'User feedback integration',
        'Technology updates',
        'Continuous monitoring'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows',
      benefits: ['50% time savings', 'Reduced errors', 'Improved efficiency'],
      icon: Zap;
    },
    {
      title: 'Cloud Migration',
      description: 'Move to cloud infrastructure for scalability and flexibility',
      benefits: ['Cost reduction', 'Better scalability', 'Enhanced security'],
      icon: Cloud;
    },
    {
      title: 'Data Analytics',
      description: 'Implement advanced analytics for data-driven decisions',
      benefits: ['Better insights', 'Predictive analytics', 'Improved forecasting'],
      icon: BarChart;
    },
    {
      title: 'Security Enhancement',
      description: 'Strengthen cybersecurity and compliance measures',
      benefits: ['Enhanced protection', 'Compliance assurance', 'Risk mitigation'],
      icon: Shield;
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work by up to 70%',
      metric: '70% efficiency gain'},
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimization',
      metric: '40% cost savings'},
    {
      title: 'Better Customer Experience',
      description: 'Improve customer satisfaction with faster, more reliable services',
      metric: '85% customer satisfaction'},
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with modern digital capabilities',
      metric: '3x faster innovation'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16">)
          <h1 className="text-5xl font-bold text-white mb-6">)
            Digital <span className="text-cyan-400">Transformation</span>)
          </h1>)
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">)
            Transform your business with cutting-edge digital solutions. Our comprehensive approach helps you modernize operations)
            improve efficiency, and stay competitive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <RefreshCw className="w-5 h-5 mr-2" />
              Start Transformation;
            </Link>
            <Link;
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Target className="w-5 h-5 mr-2" />
              Free Assessment;
            </Link>
          </div>,
        </div>,
,
        {/* Transformation Phases */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Our <span className="text-cyan-400">Transformation</span> Process;
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {phases.map((phase, index) => (
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,
                  <phase.icon className="w-6 h-6 text-white" />,
                </div>,
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <phase.icon className="w-6 h-6 text-white" /></p>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p><div className="text-cyan-400 text-sm font-medium mb-4">Duration: {phase.duration}</div><ul className="space-y-2">{phase.deliverables.map((deliverable, deliverableIndex) => (</ul>
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{deliverable}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Digital</h2> <span className="text-cyan-400">Solutions</span><div className="grid md:grid-cols-2 gap-8">{solutions.map((solution, index) => (</div>
              <div
            Digital <span className="text-cyan-400">Solutions</span>
          </h2>
          <div className="grid md: grid-cols-2 gap-8">,
            {solutions.map((solution, index) => (
              <div;
                key={index}
                <div className="flex items-start space-x-4">,
                  <div className="p-3 bg-cyan-400 rounded-lg">,
                    <solution.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <div className="flex-1">,
                    <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2"></ul>
                      {solution.benefits.map((benefit, benefitIndex) => (
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="p-3 bg-cyan-400 rounded-lg"></div>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1"></div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3><p className="text-gray-300 mb-6">{solution.description}</p><ul className="space-y-2">{solution.benefits.map((benefit, benefitIndex) => (</ul>
                        <li key={benefitIndex} className="flex items-center text-cyan-400"></li>
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{benefit}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  </div>
                </div>
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
              </div>
<<<<<<< HEAD
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals. 
              Our experts are ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default DigitalTransformationPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
      </div>
      <Footer />
    </>
  );
=======
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Transformation <span className="text-cyan-400">Benefits</span>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
            Transformation</h2> <span className="text-cyan-400">Benefits</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p><div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Industry</h2> <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"></div>
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3><p className="text-gray-300 mb-4">HIPAA-compliant digital solutions for healthcare providers</p>
              <ul className="text-sm text-cyan-400 space-y-1"></ul>
                <li>• Electronic Health Records<li>• Telemedicine Platforms<li>• Patient Management Systems</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"></div>
              <h3 className="text-xl font-semibold text-white mb-4">Finance</h3><p className="text-gray-300 mb-4">Secure financial technology solutions and compliance</p>
              <ul className="text-sm text-cyan-400 space-y-1"></ul>
                <li>• Banking Systems<li>• Payment Processing<li>• Risk Management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"></div>
              <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3><p className="text-gray-300 mb-4">Industry 4.0 solutions for smart manufacturing</p>
              <ul className="text-sm text-cyan-400 space-y-1"></ul>
                <li>• IoT Integration</li>
                <li>• Predictive Maintenance</li>
                <li>• Supply Chain Optimization</li>
              </ul>,
            </div>,
          </div>,
        </div>,
,
        {/* Success Stories */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Success</h2> <span className="text-cyan-400">Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8"></div>
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8"></div>
              <h3 className="text-2xl font-semibold text-white mb-4">Manufacturing Company</h3><p className="text-gray-300 mb-4">"Zion Tech Group helped us implement IoT sensors and predictive analytics,</p>
                reducing equipment downtime by 60% and increasing production efficiency by 40%."<div className="text-cyan-400 font-semibold">- CEO, Tech Manufacturing Inc.</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Manufacturing Company</h3>
              <p className="text-gray-300 mb-4"></p>
                "Zion Tech Group helped us implement IoT sensors and predictive analytics;
                reducing equipment downtime by 60% and increasing production efficiency by 40%.",
              </p>,
              <div className="text-cyan-400 font-semibold">- CEO, Tech Manufacturing Inc.</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8"></div>
              <h3 className="text-2xl font-semibold text-white mb-4">Healthcare Provider</h3><p className="text-gray-300 mb-4">"Their digital transformation solution streamlined our patient management,</p>
                reducing administrative overhead by 50% and improving patient satisfaction scores."<div className="text-purple-400 font-semibold">- CTO, Regional Medical Center</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join hundreds of businesses that have successfully transformed their operations with our digital solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Transformation;
            </Link>
            <Link;
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <BarChart className="w-5 h-5 mr-2" />
              View Case Studies;
            </Link>
          </div>
        </div>
      </div>,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default DigitalTransformationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
