'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Key, Smartphone, Globe, Zap, Brain, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIPasswordManagerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Security',
      description: 'Advanced AI algorithms detect security threats and suggest stronger passwords automatically.',
      benefits: ['Threat Detection', 'Password Strength Analysis', 'Security Recommendations', 'Breach Monitoring']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted locally and never stored in plain text on our servers.',
      benefits: ['End-to-End Encryption', 'Local Encryption', 'Zero-Knowledge Proof', 'Privacy Protection']
    },
    {
      icon: <Key className="w-8 h-8 text-purple-500" />,
      title: 'Smart Password Generation',
      description: 'AI creates unique, strong passwords that are easy to remember but impossible to crack.',
      benefits: ['Intelligent Generation', 'Memorable Patterns', 'Custom Rules', 'Bulk Generation']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Team Collaboration',
      description: 'Secure password sharing and team management with granular access controls.',
      benefits: ['Secure Sharing', 'Team Management', 'Access Controls', 'Audit Logs']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Universal Compatibility',
      description: 'Works seamlessly across all devices, browsers, and platforms with instant sync.',
      benefits: ['Cross-Platform Sync', 'Browser Integration', 'Mobile Apps', 'Desktop Apps']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Auto-Fill & Login',
      description: 'Intelligent auto-fill that learns your patterns and speeds up your login process.',
      benefits: ['Smart Auto-Fill', 'One-Click Login', 'Form Detection', 'Pattern Learning']
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        'AI security monitoring',
        'Cross-device sync',
        'Mobile & desktop apps',
        'Browser extensions',
        'Basic 2FA support'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$9.99',
      period: '/month',
      description: 'Secure password management for families',
      features: [
        'Up to 6 family members',
        'Advanced AI features',
        'Family sharing vault',
        'Priority support',
        'Advanced 2FA',
        'Dark web monitoring',
        'Security dashboard'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$19.99',
      period: '/month',
      description: 'Enterprise-grade security for teams',
      features: [
        'Unlimited team members',
        'Advanced admin controls',
        'SSO integration',
        'Compliance reporting',
        'API access',
        '24/7 support',
        'Custom policies',
        'Audit logs'
      ],
      popular: false
    }
  ]

  const securityFeatures = [
    {
      title: 'AES-256 Encryption',
      description: 'Military-grade encryption protects your data',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Zero-Knowledge Architecture',
      description: 'We never see your passwords or data',
      icon: <Lock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Additional security layers for your accounts',
      icon: <Key className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Breach Monitoring',
      description: 'Real-time alerts for compromised accounts',
      icon: <Zap className="w-6 h-6 text-red-500" />
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Software Engineer',
      content: 'The AI features are incredible. It automatically detects weak passwords and suggests improvements. My security has never been better.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'Small Business Owner',
      content: 'Managing passwords for my team was a nightmare. This AI password manager made it effortless and secure.',
      rating: 5
    },
    {
      name: 'John Thompson',
      role: 'IT Director',
      content: 'Enterprise-grade security with AI intelligence. Perfect for our organization\'s security needs.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Password Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered password manager with advanced security, smart generation, and team collaboration features." />
        <meta name="keywords" content="AI password manager, password security, password generator, team password management, cybersecurity" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Password Manager
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The future of password security is here. AI-powered protection, smart generation, 
                and seamless team collaboration in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Military-Grade Security</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Your passwords are protected by the highest security standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology makes password management effortless and secure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple, Secure Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your security needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Security Experts</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of security-conscious users who trust our AI password manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Shield key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Secure Your Digital Life Today</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial and experience the future of password security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}