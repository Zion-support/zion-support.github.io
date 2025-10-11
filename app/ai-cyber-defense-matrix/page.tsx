'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, Eye, Target, Brain, Globe } from 'lucide-react'

const AICyberDefenseMatrixPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms for real-time threat detection and automated response.',
      benefits: ['Real-time detection', 'Automated response', 'Threat intelligence', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive zero-trust security framework with continuous verification.',
      benefits: ['Continuous verification', 'Identity-based access', 'Micro-segmentation', 'Least privilege']
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'AI-powered behavioral analysis to detect anomalous activities and insider threats.',
      benefits: ['Anomaly detection', 'Insider threat prevention', 'User behavior analysis', 'Risk scoring']
    },
    {
      icon: Target,
      title: 'Automated Incident Response',
      description: 'Intelligent incident response with automated containment and remediation.',
      benefits: ['Automated containment', 'Rapid response', 'Minimal downtime', 'Forensic analysis']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent cybersecurity insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: Globe,
      title: 'Global Threat Intelligence',
      description: 'Comprehensive global threat intelligence with real-time updates and analysis.',
      benefits: ['Global coverage', 'Real-time updates', 'Threat intelligence', 'Risk assessment']
    }
  ]

  const benefits = [
    'Detect 99.9% of cyber threats',
    'Reduce response time by 90%',
    'Prevent 95% of security breaches',
    'Enable proactive security management'
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        'Email support',
        'Basic reporting',
        'Standard monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for medium-sized organizations',
      features: [
        'Advanced threat detection',
        'Zero-trust architecture',
        'Behavioral analytics',
        'Priority support',
        'Advanced reporting',
        '24/7 monitoring',
        'Incident response',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Full AI cyber defense suite',
        'Custom threat intelligence',
        'Dedicated support',
        'Custom reporting',
        '24/7 monitoring',
        'Incident response',
        'Compliance tools',
        'On-premise deployment',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Cyber Defense Matrix - Zion Tech Group | Advanced Cybersecurity Solutions</title>
        <meta name="description" content="Revolutionary AI-powered cyber defense matrix that provides comprehensive cybersecurity protection with intelligent threat detection, automated response, and zero-trust architecture." />
        <meta name="keywords" content="AI cyber defense, cybersecurity, threat detection, AI solutions, intelligent security, cyber protection" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cyber Defense Matrix
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered cyber defense matrix that provides comprehensive cybersecurity protection with intelligent threat detection, automated response, and zero-trust architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Cyber Defense Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity capabilities powered by artificial intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Cyber Defense Matrix?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your cybersecurity with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing options for every organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-red-400/50' : 'border-white/10'} transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}<span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700' 
                      : 'border border-white text-white hover:bg-white hover:text-red-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI cyber defense matrix can protect your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AICyberDefenseMatrixPage