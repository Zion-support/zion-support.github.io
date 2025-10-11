'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Shield, Brain, Eye, Lock, AlertTriangle, Users, Globe, Settings } from 'lucide-react'

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that identify and respond to security threats in real-time',
      benefits: ['Machine learning threat detection', 'Behavioral analysis', 'Anomaly detection', 'Predictive security']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent security systems that automatically respond to threats and incidents',
      benefits: ['Instant threat mitigation', 'Automated incident response', 'Self-healing systems', 'Zero-touch security']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of your entire digital infrastructure for security vulnerabilities',
      benefits: ['Real-time monitoring', 'Vulnerability scanning', 'Compliance tracking', 'Security analytics']
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Enterprise-grade encryption and data protection for sensitive information',
      benefits: ['End-to-end encryption', 'Key management', 'Data loss prevention', 'Secure communications']
    }
  ]

  const threats = [
    {
      title: 'Malware Protection',
      description: 'AI-powered detection and prevention of malware, ransomware, and other malicious software',
      icon: AlertTriangle
    },
    {
      title: 'Phishing Defense',
      description: 'Intelligent email security that identifies and blocks phishing attempts',
      icon: Users
    },
    {
      title: 'Network Security',
      description: 'Advanced network monitoring and protection against intrusions and attacks',
      icon: Globe
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for industry standards',
      icon: Settings
    }
  ]

  const benefits = [
    'Reduce security incidents by up to 90%',
    'Detect threats 10x faster than traditional methods',
    'Automate 80% of security operations',
    'Ensure compliance with industry standards',
    'Provide 24/7 security monitoring',
    'Scale security with business growth',
    'Reduce false positives by 70%',
    'Improve incident response time by 85%'
  ]

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and comprehensive security monitoring." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, cyber defense, AI security, cybersecurity solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, 
              automated response, and comprehensive security monitoring for the modern digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Get Protected
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI cybersecurity platform provides comprehensive protection against modern threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threats Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Threats We Protect Against
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection against the most common and emerging cybersecurity threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <threat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{threat.title}</h3>
                  <p className="text-gray-300">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven security solutions for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index + 4} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-700">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Protect your business with our advanced AI cybersecurity solutions. 
              Get a free security assessment and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Contact Security Team
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AICybersecurityPage