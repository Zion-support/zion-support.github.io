import React, { Link } from 'react'

import Layout from '../layout'

import { ArrowRight, Key } from 'lucide-react';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: "Zero-Knowledge Architecture",
      description: "Your passwords are encrypted locally and never stored on our servers"
    },
    {
      icon: <Key className="w-6 h-6 text-green-400" />,
      title: "AI-Powered Generation",
      description: "Generate strong, unique passwords using AI that adapts to each site's requirements"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Advanced Security",
      description: "Bank-level encryption, biometric authentication, and breach monitoring"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-yellow-400" />,
      title: "Cross-Platform Sync",
      description: "Access your passwords securely across all your devices and browsers"
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Up to 50 passwords",
        "Basic password generation",
        "Mobile app access",
        "Browser extension",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/month",
      features: [
        "Unlimited passwords",
        "Advanced AI generation",
        "Dark web monitoring",
        "Secure sharing",
        "Priority support",
        "Family plan (6 users)"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$8.99",
      period: "/user/month",
      features: [
        "Everything in Premium",
        "Team management",
        "Admin dashboard",
        "SSO integration",
        "Advanced reporting",
        "Dedicated support"
      ],
      popular: false
    }
  ]

  return (
    <Layout
      title="AI Password Manager - Zion Tech Group"
      description="Secure password management with AI-powered generation, zero-knowledge architecture, and advanced security features. Protect your digital life."
      keywords="AI password manager, password security, password generator, digital security, password vault, cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Password Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure your digital life with AI-powered password management. Generate strong passwords,
              monitor breaches, and protect your accounts with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
              <div className="text-gray-300">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-gray-300">Users Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
              <div className="text-gray-300">Security Breaches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise-Grade Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Zero-Knowledge Architecture</h3>
                <p className="text-gray-300 mb-6">
                  Your master password and encrypted data never leave your device. We can't see your passwords,
                  even if we wanted to. Only you have the key to decrypt your data.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Local encryption keys
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    No server-side access
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered Security</h3>
                <p className="text-gray-300 mb-6">
                  Our AI continuously monitors for security threats, generates context-aware passwords,
                  and provides intelligent security recommendations.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Breach monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Weak password detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Security scoring
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Secure Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Password Manager?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Ultimate Security</h3>
                <p className="text-gray-300">Bank-level encryption with zero-knowledge architecture ensures your passwords are never compromised.</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Smart Monitoring</h3>
                <p className="text-gray-300">AI-powered breach monitoring and security recommendations keep you ahead of threats.</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Universal Access</h3>
                <p className="text-gray-300">Access your passwords securely across all devices, browsers, and platforms.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Digital Life?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 1 million users who trust our AI Password Manager to protect their most sensitive information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AIPasswordManagerPage