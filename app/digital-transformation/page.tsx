'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    </div>
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function DigitaltransformationPage() {
  return (
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Users, Settings, Target, TrendingUp, Clock } from 'lucide-react'

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
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
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
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
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  </div>
                </div>
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
              </div>
      </div>
      <Footer />
    </>
  );
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
};

export default DigitalTransformationPage;
export default function DigitaltransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Professional digital transformation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Digital Transformation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional digital transformation services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Professional digital transformation services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Digital Transformation</h1>
        <p className="text-lg text-gray-300 mb-8">Professional digital transformation services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
  );
}
