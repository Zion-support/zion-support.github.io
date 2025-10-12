<<<<<<< HEAD
'use client';
import React, {useState, useEffect}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Rocket, Globe, Target, BarChart, Shield, Clock, Users, ArrowRight, Star, TrendingUp, Lock, FileText, DollarSign, CheckCircle, Phone, Mail, MapPin, Database, Settings, Calendar, Award, Eye, MessageSquare, CheckSquare, Cpu, Brain, Zap}}from 'lucide-react';

const AISpaceMissionOptimizer: React.FC = () => {,
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);}, []);

=======
'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Rocket, Globe, Target, BarChart, Shield, Clock, Users, ArrowRight, Star, TrendingUp, Lock, FileText, DollarSign, CheckCircle, Phone, Mail, MapPin, Database, Settings, Calendar, Award, Eye, MessageSquare, CheckSquare, Cpu, Brain, Zap } from 'lucide-react'
const AISpaceMissionOptimizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
>>>>>>> origin/main
  const features = [
    {icon: Rocket,
      title: 'Mission Trajectory Optimization',
      description: 'AI-powered trajectory planning for optimal fuel efficiency and mission success',
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['30% fuel savings', 'Optimal trajectory planning', 'Real-time adjustments']},
    {icon: Target,
=======
      benefits: ['30% fuel savings', 'Optimal trajectory planning', 'Real-time adjustments'];
=======
      benefits: ['30% fuel savings', 'Optimal trajectory planning', 'Real-time adjustments'],
>>>>>>> origin/main
    },
    {
      icon: Target,
>>>>>>> origin/main
      title: 'Payload Optimization',
      description: 'Intelligent payload configuration and resource allocation for maximum mission value',
<<<<<<< HEAD
      benefits: ['Optimal payload distribution', 'Resource efficiency', 'Mission success maximization']},
    {icon: BarChart,
      title: 'Risk Assessment & Mitigation',
      description: 'Advanced risk analysis and mitigation strategies for space missions',
      benefits: ['Comprehensive risk analysis', 'Mitigation strategies', 'Success probability optimization']},
    {icon: Globe,
      title: 'Multi-Planetary Mission Planning',
      description: 'Complex mission planning for interplanetary and deep space exploration',
<<<<<<< HEAD
      benefits: ['Multi-planetary coordination', 'Deep space navigation', 'Mission timeline optimization']}];

=======
      benefits: ['Multi-planetary coordination', 'Deep space navigation', 'Mission timeline optimization']
    },
  ];];];
>>>>>>> origin/main
=======
      benefits: ['Optimal payload distribution', 'Resource efficiency', 'Mission success maximization'],
    },
    {
      icon: BarChart,
      title: 'Risk Assessment & Mitigation',
      description: 'Advanced risk analysis and mitigation strategies for space missions',
      benefits: ['Comprehensive risk analysis', 'Mitigation strategies', 'Success probability optimization'],
    },
    {
      icon: Globe,
      title: 'Multi-Planetary Mission Planning',
      description: 'Complex mission planning for interplanetary and deep space exploration',
      benefits: ['Multi-planetary coordination', 'Deep space navigation', 'Mission timeline optimization'],
    }
  ]
>>>>>>> origin/main
  const pricingPlans = [
    {name: 'Explorer',
      price: '$4,999',
      period: '/month',
      description: 'Perfect for small satellite missions and research projects',
      features: [,
        'Basic trajectory optimization',
        'Single mission planning',
        'Standard risk assessment',
        'Email support',
        'Mission reports',
        'Basic analytics'
      ],
      popular: false;,},
    {name: 'Mission Control',
      price: '$12,999',
      period: '/month',
      description: 'Ideal for commercial space missions and satellite constellations',
      features: [,
        'Advanced trajectory optimization',
        'Multi-mission coordination',
        'Comprehensive risk analysis',
        'Priority support',
        'Real-time monitoring',
        'Advanced analytics',
        'Mission simulation',
        'API integration'
      ],
      popular: true;,},
    {name: 'Space Agency',
      price: '$49,999',
      period: '/month',
      description: 'For large-scale space programs and interplanetary missions',
      features: [,
        'Full mission optimization suite',
        'Interplanetary mission planning',
        'Advanced AI algorithms',
        '24/7 dedicated support',
        'Custom mission protocols',
        'White-label solutions',
        'On-site deployment',
        'Research collaboration',
        'Training programs'
      ],
<<<<<<< HEAD
      popular: false;,}];

=======
      popular: false
    }
  ]
>>>>>>> origin/main
  const useCases = [
    {title: 'Satellite Constellation Management',
      description: 'Optimize satellite constellation deployment and maintenance operations',
      icon: Globe,
      results: '40% reduction in operational costs',},
    {title: 'Mars Mission Planning',
      description: 'Comprehensive mission planning for Mars exploration and colonization',
      icon: Rocket,
      results: 'Optimized Mars mission trajectories',},
    {title: 'Space Station Operations',
      description: 'Optimize space station operations and supply missions',
      icon: Target,
      results: '25% improvement in efficiency',},
    {title: 'Deep Space Exploration',
      description: 'Mission planning for deep space exploration and scientific missions',
      icon: Eye,
<<<<<<< HEAD
      results: 'Enhanced mission success rates',}];

  return(<>)
      <Helmet />
=======
      results: 'Enhanced mission success rates'
    }
  ]
  return (
    <>
      <Helmet>
<<<<<<< HEAD
>>>>>>> origin/main
        <title>AI Space Mission Optimizer - Advanced Space Mission Planning | Zion Tech Group</title>
=======
        </Helmet><title>AI Space Mission Optimizer - Advanced Space Mission Planning | Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="Revolutionary AI-powered space mission optimization for trajectory planning, payload optimization, and risk assessment. Advanced space mission planning solutions." />
        <meta name="keywords" content="space mission optimization, trajectory planning, satellite management, space exploration, mission planning, space AI, aerospace technology" />
        <meta property="og: title" content="AI Space Mission Optimizer - Advanced Space Mission Planning" />,
        <meta property="og:description" content="Revolutionary AI-powered space mission optimization for trajectory planning, payload optimization, and risk assessment." />
        <meta property="og: type" content="website" />,
        <meta property="og: url" content="https://ziontechgroup.com/ai-space-mission-optimizer" />,
        <link rel="canonical" href="https: //ziontechgroup.com/ai-space-mission-optimizer" />,
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">{/* Hero Section */</div>} <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden">,</section>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          </section><div className="</div>
>>>>>>> origin/main
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            </div><div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              </div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-6 py-3 mb-8 border border-blue-500/30">
                </div><Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Space Technology</span>
              </div>
              
<<<<<<< HEAD
              <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">,</h1>
                AI Space Mission Optimizer;
              </h1>
              
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">,</p>
=======
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent" /></h1>
                AI Space Mission Optimizer
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
>>>>>>> origin/main
                Revolutionary AI-powered space mission optimization for trajectory planning, 
                payload optimization, and comprehensive risk assessment for space exploration.
              </p>
              
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12">,</div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Rocket className="w-5 h-5" />
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                </div><div className="flex items-center space-x-2 text-blue-400">
                  </div><Rocket className="w-5 h-5" />
>>>>>>> origin/main
                  <span className="font-semibold">30% Fuel Savings</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  </div><Target className="w-5 h-5" />
                  <span className="font-semibold">Optimal Planning</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  </div><Shield className="w-5 h-5" />
                  <span className="font-semibold">Risk Mitigation</span>
                </div>
              </div>
              
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <a;
                  href="tel: +13024640950",
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover: from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105",
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950;
                </a>
                <a;
                  href="mailto: kleber@ziontechgroup.com",
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover: from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105",
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote;
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div><$2 />
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                >
                  </a><Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <$2 />
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                >
                  </a><Mail className="w-5 h-5 mr-2" />
                  Get Quote
>>>>>>> origin/main
                </a>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">,</h2>
                Advanced Space Mission Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI-powered space mission optimizer provides cutting-edge solutions;</p>
=======
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced Space Mission Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Our AI-powered space mission optimizer provides cutting-edge solutions 
>>>>>>> origin/main
                for trajectory planning, payload optimization, and risk assessment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div;
                  key={index}className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-blue-500/20 hover: border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10",
=======
                </div><$2 />
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
>>>>>>> origin/main
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    </div><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description</p>}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
                      <li key={idx}className="flex items-center text-sm text-blue-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit} </li>
=======
                      </ul><li key={idx} className="flex items-center text-sm text-blue-400">
                        </li><CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
>>>>>>> origin/main
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">,</h2>
                Space Mission Applications;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI space mission optimizer is trusted by leading space agencies;</p>
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Space Mission Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Our AI space mission optimizer is trusted by leading space agencies 
>>>>>>> origin/main
                and commercial space companies for mission-critical operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {useCases.map((useCase, index) => (
<<<<<<< HEAD
                <div;
                  key={index}className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20 hover: border-cyan-500/40 transition-all duration-300 hover:scale-105",
=======
                </div><$2 />
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
>>>>>>> origin/main
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    </div><useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description</p>}</p>
                  <div className="text-blue-400 font-semibold text-sm">{useCase.results</div>} </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">,</h2>
                Mission-Ready Pricing;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect space mission optimization plan for your needs.</p>
=======
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mission-Ready Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Choose the perfect space mission optimization plan for your needs. 
>>>>>>> origin/main
                All plans include our advanced AI algorithms and mission planning tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
              {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
                <div;
                  key={index}className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border transition-all duration-300 hover: scale-105 hover:shadow-xl ${,
                    plan.popular;
                      ? 'border-blue-500/50 shadow-blue-500/20' 
                      : 'border-gray-700/50 hover: border-blue-500/30',}`}
                >{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular;</div>
                      </div>
                    </div>
                  )} <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description</p>}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-blue-400">{plan.price</span>}</span>
                      <span className="text-gray-400 ml-2">{plan.period</span>}</span>
=======
                </div><$2 />
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-blue-500/50 shadow-blue-500/20' 
                      : 'border-gray-700/50 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      </div><div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    </div><h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      </div><span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
>>>>>>> origin/main
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
<<<<<<< HEAD
                      <li key={idx}className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature} </li>
                    ))}
                  </ul>
                  
                  <a;
                    href="tel: +13024640950",
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover: from-blue-600 hover:to-cyan-700',
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover: from-gray-600 hover:to-gray-500',}`}
                  >
                    Get Started;
=======
                      </ul><li key={idx} className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  < href="tel:+13024640950"$2 />
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                    }`} /></a>
                    Get Started
>>>>>>> origin/main
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">,</section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,</h2>
              Launch Your Space Mission Success;
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join leading space agencies and commercial space companies using our AI-powered;</p>
              mission optimizer to achieve mission success and operational excellence.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="tel: +13024640950",
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover: from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105",
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950;
              </a>
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover: from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105",
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote;
=======
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">
          </section>< className="$2 />
            </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Launch Your Space Mission Success
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Join leading space agencies and commercial space companies using our AI-powered 
              mission optimizer to achieve mission success and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><$2 />
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                </a><Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <$2 />
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
              >
                </a><Mail className="w-5 h-5 mr-2" />
                Get Free Quote
>>>>>>> origin/main
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default AISpaceMissionOptimizer