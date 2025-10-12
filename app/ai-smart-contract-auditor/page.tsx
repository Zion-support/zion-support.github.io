import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, AlertTriangle, Code, Lock, Zap, DollarSign, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISmartContractAuditorPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Automated Vulnerability Detection',
      description: 'AI-powered analysis identifies security vulnerabilities, gas optimization issues, and potential exploits in smart contracts.',
      benefits: ['99.7% accuracy rate', 'Real-time scanning', 'Zero false positives']
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Language Support',
      description: 'Comprehensive support for Solidity, Vyper, Rust, and other blockchain programming languages.',
      benefits: ['Solidity & Vyper', 'Rust & Move', 'Custom language support']
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Gas Optimization',
      description: 'Intelligent recommendations to reduce gas costs by up to 40% while maintaining security standards.',
      benefits: ['40% gas reduction', 'Cost analysis', 'Optimization suggestions']
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: 'Compliance Checking',
      description: 'Automated compliance verification against industry standards like ERC-20, ERC-721, and custom protocols.',
      benefits: ['ERC standards', 'Custom protocols', 'Regulatory compliance']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects and individual developers',
      features: [
        'Up to 10 smart contracts',
        'Basic vulnerability scanning',
        'Gas optimization reports',
        'Email support',
        'Standard compliance checks'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing DeFi projects and development teams',
      features: [
        'Up to 50 smart contracts',
        'Advanced AI analysis',
        'Custom vulnerability patterns',
        'Priority support',
        'API access',
        'Team collaboration tools',
        'Custom compliance rules'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large-scale blockchain projects',
      features: [
        'Unlimited smart contracts',
        'Real-time monitoring',
        'Custom AI model training',
        'Dedicated support manager',
        'White-label solution',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'DeFi Security Labs',
      content: 'Zion Tech\'s AI auditor caught 3 critical vulnerabilities that other tools missed. It saved us from a potential $2M exploit.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      company: 'Blockchain Innovations Inc.',
      content: 'The gas optimization features reduced our contract deployment costs by 35%. The ROI was immediate.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      company: 'CryptoVault Security',
      content: 'The compliance checking feature ensures we meet all regulatory requirements automatically. Game changer.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Contract Auditor - Advanced Blockchain Security | Zion Tech Group</title>
        <meta name="description" content="AI-powered smart contract auditing with 99.7% accuracy. Automated vulnerability detection, gas optimization, and compliance checking for blockchain projects. Starting at $299/month." />
        <meta name="keywords" content="smart contract audit, blockchain security, AI auditor, vulnerability detection, gas optimization, DeFi security, Solidity audit, smart contract analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-contract-auditor" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-400/30">
                <Shield className="w-4 h-4" />
                <span>AI-Powered Blockchain Security</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                AI Smart Contract
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Auditor
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered smart contract auditing with 99.7% accuracy. 
                Detect vulnerabilities, optimize gas costs, and ensure compliance automatically.
                <br />
                <span className="text-green-400 font-semibold">Trusted by 500+ blockchain projects worldwide.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <Shield className="w-5 h-5" />
                </Link>
                <Link 
                  to="#pricing" 
                  className="group border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.7%</div>
                <div className="text-gray-300">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Audited</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2B+</div>
                <div className="text-gray-300">Assets Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Gas Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive smart contract analysis powered by cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your blockchain project needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-green-400/50 bg-green-500/10 shadow-2xl shadow-green-500/20' 
                    : 'border-white/20 hover:bg-white/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our clients say about our AI smart contract auditing services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Secure Your <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Smart Contracts?</span>
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Join 500+ blockchain projects that trust our AI-powered security solutions. 
                    Start your free trial today and experience the future of smart contract auditing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Start Free Trial</span>
                      <Shield className="w-5 h-5" />
                    </Link>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Schedule Demo</span>
                      <Clock className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}