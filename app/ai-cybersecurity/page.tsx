'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, AlertTriangle, CheckCircle, Phone, Mail, Target, Brain, Target, Shield, CheckCircle, Phone, Mail } from 'lucide-react';

const AICybersecurityPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time with 99.9% accuracy',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Behavioral Analysis',
      description: 'Machine learning models that analyze user behavior to identify anomalies and potential threats',
      color: 'text-blue-400'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture with continuous verification and least privilege access',
      color: 'text-green-400'
    },
    {
      icon: AlertTriangle,
      title: 'Automated Response',
      description: 'Automatically block threats, isolate compromised systems, and alert security teams',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email security',
        'Standard support',
        'Basic reporting',
        '1 security analyst'
      ],
      popular: false},
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Automated response',
        '3 security analysts'
      ],
      popular: true},
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'AI-powered threat hunting',
        '24/7 SOC monitoring',
        'Dedicated security team',
        'Custom integrations',
        'Compliance reporting',
        '10+ security analysts'
      ],
      popular: false}
  ];

  const useCases = [
    {
      title: 'Threat Prevention',
      description: 'Prevent cyber attacks before they happen with predictive threat analysis',
      icon: Shield,
      result: '99.9% prevention'
    },
    {
      title: 'Incident Response',
      description: 'Rapidly detect and respond to security incidents with automated workflows',
      icon: AlertTriangle,
      result: '90% faster'
    },
    {
      title: 'Compliance',
      description: 'Maintain compliance with GDPR, HIPAA, SOX, and other regulations',
      icon: Lock,
      result: '100% compliant'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce security costs while improving protection with AI automation',
      icon: Target,
      result: '60% savings'
    }
  ];

  const benefits = [
    { metric: '99.9%', label: 'Threat Detection', color: 'text-green-400' },
    { metric: '< 1 min', label: 'Response Time', color: 'text-blue-400' },
    { metric: '24/7', label: 'Monitoring', color: 'text-purple-400' },
    { metric: 'Zero', label: 'False Positives', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Solutions - Advanced Threat Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and 99.9% accuracy." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, cyber protection, network security, incident response" />
        <meta property="og:title" content="AI Cybersecurity Solutions - Advanced Threat Protection" />
        <meta property="og:description" content="Protect your business with AI-powered cybersecurity solutions and threat detection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity" />
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        </div><section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>AI-Powered Security<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Cybersecurity Solutions</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Protect your business with advanced AI-powered cybersecurity solutions.</p>
            Detect threats in real-time, automate responses, and maintain compliance with 99.9% accuracy.</p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950<a
              href="/contact"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
            >Get Security Assessment</a>
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20">
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}<div className="text-white font-semibold mb-2">{benefit.label}<div className="text-gray-400 text-sm">Industry-leading security performance</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-red-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Investment Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-700'} hover:border-red-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}<span className="text-gray-400 ml-1">{plan.period}<p className="text-gray-400 mt-2">{plan.description}<ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    </ul><li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                >Get Protected</a>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-600/20 to-orange-600/20 p-12 rounded-lg border border-red-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Don't Wait for a Breach</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 1,000+ organizations already protected by our AI Cybersecurity solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ><Mail className="w-5 h-5 mr-2" >Email Us</Mail>
            </Mail>
          </div>
        </section>
      </div>
    </div>
  );

AICybersecurityPage.displayName = 'AICybersecurityPage';

export default AICybersecurityPage;