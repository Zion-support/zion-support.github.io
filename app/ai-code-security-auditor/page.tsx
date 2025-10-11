'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Zap, Eye, BarChart, Settings } from 'lucide-react'

const AiCodeSecurityAuditorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Security Scanning',
      description: 'Comprehensive security scanning that identifies vulnerabilities and security issues.',
      benefits: ['Vulnerability detection', 'Security scanning', 'Threat analysis', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Monitor code security in real-time with instant alerts and notifications.',
      benefits: ['Real-time alerts', 'Continuous monitoring', 'Instant notifications', 'Live security status']
    },
    {
      icon: Eye,
      title: 'Code Analysis',
      description: 'Deep analysis of code to identify security patterns and potential issues.',
      benefits: ['Pattern recognition', 'Code review', 'Security patterns', 'Issue identification']
    },
    {
      icon: BarChart,
      title: 'Security Metrics',
      description: 'Comprehensive security metrics and reporting for compliance and monitoring.',
      benefits: ['Security reports', 'Compliance tracking', 'Metrics dashboard', 'Trend analysis']
    },
    {
      icon: Settings,
      title: 'Custom Rules',
      description: 'Configure custom security rules and policies for your organization.',
      benefits: ['Custom policies', 'Rule configuration', 'Team standards', 'Compliance requirements']
    }
  ]

  const benefits = [
    'Reduce security vulnerabilities by 80%',
    'Improve code security and compliance',
    'Accelerate security review processes',
    'Enhance team security awareness',
    'Ensure regulatory compliance',
    'Protect against security threats'
  ]

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code security auditing platform for automated vulnerability detection, security scanning, and compliance monitoring." />
        <meta name="keywords" content="AI code security, security auditing, vulnerability detection, code security, security scanning" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Code Security
              <span className="block bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Auditor
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your code with AI-powered security auditing. 
              Detect vulnerabilities, ensure compliance, and protect your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to audit and secure your code
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Security Auditor?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive security success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your security auditing needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AiCodeSecurityAuditorPage