'use client';

import React from 'react';

import { ArrowRight, Brain, Database } from 'lucide-react';

export default function AICybersecuritySuitePage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with continuous verification and monitoring'
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior to identify anomalies and potential threats'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: 'Advanced Encryption',
      description: 'End-to-end encryption with quantum-resistant algorithms for maximum security'
    },
    {
      icon: <Network className="w-6 h-6 text-cyan-500" />,
      title: 'Network Security',
      description: 'Comprehensive network monitoring and protection against DDoS and intrusions'
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Data Protection',
      description: 'Safeguard sensitive data with automated classification and access controls'
    }
  ];

  const securityModules = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence feeds and automated response systems',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      features: ['Global threat monitoring', 'Automated threat hunting', 'IOC management', 'Threat attribution']
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint detection and response (EDR) capabilities',
      icon: <Monitor className="w-8 h-8 text-green-500" />,
      features: ['Real-time monitoring', 'Malware detection', 'Process analysis', 'File integrity monitoring']
    },
    {
      title: 'Identity & Access',
      description: 'Comprehensive identity and access management (IAM) solutions',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      features: ['Multi-factor authentication', 'Privileged access management', 'Single sign-on', 'Identity governance']
    },
    {
      title: 'Security Operations',
      description: 'Centralized security operations center (SOC) management',
      icon: <Settings className="w-8 h-8 text-red-500" />,
      features: ['Incident response', 'Security orchestration', 'Compliance reporting', 'Forensic analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        '24/7 monitoring',
        'Standard support',
        'Up to 50 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: [
        'Advanced AI threat detection',
        'Full endpoint protection',
        'Network security suite',
        'Identity management',
        'Priority support',
        'Up to 500 users',
        'Compliance reporting',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Complete security suite',
        'Custom AI models',
        'Dedicated SOC team',
        'White-label solution',
        '24/7 phone support',
        'Unlimited users',
        'Advanced analytics',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechCorp Security',
      content: 'The AI cybersecurity suite has transformed our security posture. We\'ve prevented 99.9% of threats automatically.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services Inc.',
      content: 'Compliance has never been easier. The automated reporting saves us hours every week.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'Healthcare Systems',
      content: 'The behavioral analytics caught a sophisticated attack that traditional tools missed. Highly recommended.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Advanced Threat Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your organization with our AI-powered cybersecurity suite. Advanced threat detection, zero trust architecture, and comprehensive security management. Get started today!" />
        <meta name="keywords" content="AI cybersecurity, threat detection, zero trust security, endpoint protection, security operations, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Cybersecurity
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Suite
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your organization with the most advanced AI-powered cybersecurity platform. 
                Detect, prevent, and respond to threats with unprecedented speed and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                ✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 support
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Threat Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2.3s</div>
                <div className="text-gray-400">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400">Organizations Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Security Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive protection powered by artificial intelligence and machine learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Modules Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Security Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security coverage across all attack vectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityModules.map((module, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{module.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{module.title}</h3>
                      <p className="text-gray-300">{module.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the security level that matches your organization's needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Security Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what security professionals say about our AI cybersecurity suite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Your Organization Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of organizations protected by our AI-powered cybersecurity suite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Security Audit
                </button>
              </div>
              <p className="text-white/80 text-sm mt-6">
                ✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 security support
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}