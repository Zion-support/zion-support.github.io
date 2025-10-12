<<<<<<< HEAD
'use client';
import React, {useState, useEffect}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Shield, CheckCircle, AlertTriangle, Code, DollarSign, Clock, Users, Zap, Brain, ArrowRight, Star, TrendingUp, Lock, FileText, BarChart, Target, Award, Rocket, Globe, Database, Cpu, Eye, MessageSquare, Settings, Calendar, CheckSquare, Phone, Mail, MapPin}}from 'lucide-react';

const AISmartContractAuditor: React.FC = () => {,
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);}, []);

=======
'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, CheckCircle, AlertTriangle, Code, DollarSign, Clock, Users, Zap, Brain, ArrowRight, Star, TrendingUp, Lock, FileText, BarChart, Target, Award, Rocket, Globe, Database, Cpu, Eye, MessageSquare, Settings, Calendar, CheckSquare, Phone, Mail, MapPin } from 'lucide-react'
const AISmartContractAuditor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
>>>>>>> origin/main
  const features = [
    {icon: Shield,
      title: 'Automated Security Analysis',
      description: 'AI-powered vulnerability detection in smart contracts using advanced static analysis',
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Detects 99.9% of common vulnerabilities', 'Reduces audit time by 80%', 'Zero false positives']},
    {icon: Code,
=======
      benefits: ['Detects 99.9% of common vulnerabilities', 'Reduces audit time by 80%', 'Zero false positives'];
=======
      benefits: ['Detects 99.9% of common vulnerabilities', 'Reduces audit time by 80%', 'Zero false positives'],
>>>>>>> origin/main
    },
    {
      icon: Code,
>>>>>>> origin/main
      title: 'Code Quality Assessment',
      description: 'Comprehensive code review with best practices compliance and optimization suggestions',
<<<<<<< HEAD
      benefits: ['Gas optimization recommendations', 'Code complexity analysis', 'Best practices compliance']},
    {icon: BarChart,
      title: 'Risk Scoring System',
      description: 'Intelligent risk assessment with detailed scoring and mitigation strategies',
      benefits: ['Real-time risk scoring', 'Priority-based recommendations', 'Historical trend analysis']},
    {icon: Brain,
      title: 'Machine Learning Models',
      description: 'Advanced ML models trained on thousands of audited contracts for pattern recognition',
<<<<<<< HEAD
      benefits: ['Continuous learning', 'Pattern recognition', 'Predictive analysis']}];

=======
      benefits: ['Continuous learning', 'Pattern recognition', 'Predictive analysis']
    },
  ];];];
>>>>>>> origin/main
=======
      benefits: ['Gas optimization recommendations', 'Code complexity analysis', 'Best practices compliance'],
    },
    {
      icon: BarChart,
      title: 'Risk Scoring System',
      description: 'Intelligent risk assessment with detailed scoring and mitigation strategies',
      benefits: ['Real-time risk scoring', 'Priority-based recommendations', 'Historical trend analysis'],
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Advanced ML models trained on thousands of audited contracts for pattern recognition',
      benefits: ['Continuous learning', 'Pattern recognition', 'Predictive analysis'],
    }
  ]
>>>>>>> origin/main
  const pricingPlans = [
    {name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects and individual developers',
      features: [,
        'Up to 5 smart contracts per month',
        'Basic security analysis',
        'Code quality assessment',
        'Email support',
        'PDF audit reports',
        'Basic risk scoring'
      ],
      popular: false;,},
    {name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing DeFi projects and development teams',
      features: [,
        'Up to 25 smart contracts per month',
        'Advanced security analysis',
        'Gas optimization recommendations',
        'Priority support',
        'Detailed audit reports',
        'Advanced risk scoring',
        'API access',
        'Custom compliance checks'
      ],
      popular: true;,},
    {name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale projects and enterprise clients',
      features: [,
        'Unlimited smart contracts',
        'Comprehensive security analysis',
        'Custom ML model training',
        '24/7 dedicated support',
        'Executive summary reports',
        'Real-time monitoring',
        'Custom integrations',
        'White-label solutions',
        'On-site consultation'
      ],
<<<<<<< HEAD
      popular: false;,}];

=======
      popular: false
    }
  ]
>>>>>>> origin/main
  const useCases = [
    {title: 'DeFi Protocol Audits',
      description: 'Comprehensive security analysis for decentralized finance protocols',
      icon: DollarSign,
      results: 'Reduced security incidents by 95%',},
    {title: 'NFT Marketplace Security',
      description: 'Smart contract auditing for NFT platforms and marketplaces',
      icon: Image,
      results: 'Zero critical vulnerabilities found',},
    {title: 'Token Launch Security',
      description: 'Pre-launch security audits for new token contracts',
      icon: Rocket,
      results: '100% successful token launches',},
    {title: 'Cross-Chain Bridge Audits',
      description: 'Security analysis for cross-chain bridge implementations',
      icon: Globe,
<<<<<<< HEAD
      results: 'Prevented $50M+ in potential losses',}];

  return(<>)
      <Helmet />
=======
      results: 'Prevented $50M+ in potential losses'
    }
  ]
  return (
    <>
      <Helmet>
<<<<<<< HEAD
>>>>>>> origin/main
        <title>AI Smart Contract Auditor - Automated Security Analysis | Zion Tech Group</title>
=======
        </Helmet><title>AI Smart Contract Auditor - Automated Security Analysis | Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="Advanced AI-powered smart contract auditing with automated security analysis, vulnerability detection, and risk assessment. Secure your blockchain projects with our cutting-edge technology." />
        <meta name="keywords" content="smart contract audit, blockchain security, AI auditing, DeFi security, smart contract analysis, vulnerability detection" />
        <meta property="og: title" content="AI Smart Contract Auditor - Automated Security Analysis" />,
        <meta property="og:description" content="Advanced AI-powered smart contract auditing with automated security analysis, vulnerability detection, and risk assessment." />
        <meta property="og: type" content="website" />,
        <meta property="og: url" content="https://ziontechgroup.com/ai-smart-contract-auditor" />,
        <link rel="canonical" href="https: //ziontechgroup.com/ai-smart-contract-auditor" />,
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            </div><div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              </div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                </div><Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">AI-Powered Security</span>
              </div>
              
<<<<<<< HEAD
              <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">,</h1>
                AI Smart Contract Auditor;
              </h1>
              
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">,</p>
=======
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" /></h1>
                AI Smart Contract Auditor
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
>>>>>>> origin/main
                Advanced AI-powered smart contract auditing with automated security analysis, 
                vulnerability detection, and comprehensive risk assessment for blockchain projects.
              </p>
              
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12">,</div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <CheckCircle className="w-5 h-5" />
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                </div><div className="flex items-center space-x-2 text-cyan-400">
                  </div><CheckCircle className="w-5 h-5" />
>>>>>>> origin/main
                  <span className="font-semibold">99.9% Vulnerability Detection</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  </div><Clock className="w-5 h-5" />
                  <span className="font-semibold">80% Faster Audits</span>
                </div>
                <div className="flex items-center space-x-2 text-pink-400">
                  </div><Shield className="w-5 h-5" />
                  <span className="font-semibold">Zero False Positives</span>
                </div>
              </div>
              
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <a;
                  href="tel: +13024640950",
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105",
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
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
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
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">,</h2>
                Advanced AI Security Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI-powered smart contract auditor uses cutting-edge machine learning;</p>
=======
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Advanced AI Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Our AI-powered smart contract auditor uses cutting-edge machine learning 
>>>>>>> origin/main
                and static analysis to provide comprehensive security assessments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div;
                  key={index}className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20 hover: border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10",
=======
                </div><$2 />
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
>>>>>>> origin/main
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    </div><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description</p>}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
                      <li key={idx}className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit} </li>
=======
                      </ul><li key={idx} className="flex items-center text-sm text-cyan-400">
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
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">,</h2>
                Trusted by Leading Projects;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI smart contract auditor has secured billions in value across;</p>
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trusted by Leading Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Our AI smart contract auditor has secured billions in value across 
>>>>>>> origin/main
                various blockchain ecosystems and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {useCases.map((useCase, index) => (
<<<<<<< HEAD
                <div;
                  key={index}className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-purple-500/20 hover: border-purple-500/40 transition-all duration-300 hover:scale-105",
=======
                </div><$2 />
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
>>>>>>> origin/main
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    </div><useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description</p>}</p>
                  <div className="text-cyan-400 font-semibold text-sm">{useCase.results</div>} </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">,</h2>
                Transparent Pricing;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect plan for your smart contract auditing needs.</p>
=======
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Choose the perfect plan for your smart contract auditing needs. 
>>>>>>> origin/main
                All plans include our advanced AI security analysis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
              {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
                <div;
                  key={index}className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border transition-all duration-300 hover: scale-105 hover:shadow-xl ${,
                    plan.popular;
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-gray-700/50 hover: border-cyan-500/30',}`}
                >{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular;</div>
                      </div>
                    </div>
                  )} <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description</p>}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price</span>}</span>
                      <span className="text-gray-400 ml-2">{plan.period</span>}</span>
=======
                </div><$2 />
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-gray-700/50 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      </div><div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    </div><h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      </div><span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
>>>>>>> origin/main
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
<<<<<<< HEAD
                      <li key={idx}className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature} </li>
                    ))}
                  </ul>
                  
                  <a;
                    href="tel: +13024640950",
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover: from-cyan-600 hover:to-blue-700',
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover: from-gray-600 hover:to-gray-500',}`}
                  >
                    Get Started;
=======
                      </ul><li key={idx} className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  < href="tel:+13024640950"$2 />
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
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
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">,</section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">,</h2>
              Secure Your Smart Contracts Today;
            </h2>
            <p className="text-xl text-gray-300 mb-8">Don't risk your project's security. Get comprehensive AI-powered smart contract auditing;</p>
              with our advanced security analysis platform.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="tel: +13024640950",
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105",
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          </section>< className="$2 />
            </div><h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Secure Your Smart Contracts Today
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Don't risk your project's security. Get comprehensive AI-powered smart contract auditing 
              with our advanced security analysis platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><$2 />
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
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
export default AISmartContractAuditor