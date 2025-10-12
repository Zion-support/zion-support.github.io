import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Shield, Eye, AlertTriangle, Lock, Zap, BarChart3, Clock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AICybersecurityMonitorPage() {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring that detects and responds to security threats in real-time across your entire infrastructure.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Automated Incident Response',
      description: 'Intelligent incident response that automatically contains threats and notifies your security team with detailed reports.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Predictive Security Analytics',
      description: 'Advanced analytics that predict potential security vulnerabilities before they become threats.'
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-500" />,
      title: 'Zero-Trust Architecture',
      description: 'Implement zero-trust security principles with AI-driven access controls and continuous verification.'
    }
  ]

  const securityCapabilities = [
    'Network traffic analysis and anomaly detection',
    'Endpoint protection and behavioral monitoring',
    'Email security and phishing detection',
    'Cloud security posture management',
    'Vulnerability scanning and assessment',
    'Compliance monitoring and reporting',
    'Threat intelligence integration',
    'Automated security orchestration'
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$99',
      period: '/month',
      description: 'For small businesses',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        '24/7 monitoring',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for mid-size companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI analytics',
        'Automated response',
        'Phone & email support',
        'Real-time alerts',
        'Custom dashboards',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Dedicated security team',
        'White-label options',
        'Advanced integrations',
        'Custom compliance',
        'On-premise deployment'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Threat Detection Accuracy' },
    { number: '2.3s', label: 'Average Response Time' },
    { number: '10,000+', label: 'Threats Blocked Daily' },
    { number: '24/7', label: 'AI Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Monitor | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring system that detects, prevents, and responds to threats in real-time. Starting at $99/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, zero-trust security" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Monitor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with our advanced AI-powered cybersecurity monitoring system. 
              Detect, prevent, and respond to threats in real-time with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity monitor provides comprehensive protection with intelligent threat detection and response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system monitors and protects every aspect of your digital infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityCapabilities.map((capability, index) => (
              <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Plans for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that matches your organization's size and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105' 
                    : 'border-white/20 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your business today with our AI-powered cybersecurity monitoring system. 
              Get a free security assessment and see how we can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}