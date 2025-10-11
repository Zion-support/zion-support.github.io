'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Shield, Brain, Target, Zap, Eye, Lock, AlertTriangle, Users } from 'lucide-react'

const AiCybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI algorithms that detect and respond to threats in real-time.',
      benefits: ['Machine learning models', 'Behavioral analysis', 'Anomaly detection', 'Predictive security']
    },
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach protecting all aspects of your infrastructure.',
      benefits: ['Network security', 'Endpoint protection', 'Cloud security', 'Data encryption']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring and analysis of your security posture with instant alerts.',
      benefits: ['Real-time monitoring', 'Instant alerts', 'Threat intelligence', 'Incident response']
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with AI-enhanced access controls.',
      benefits: ['Identity verification', 'Access controls', 'Device trust', 'Network segmentation']
    }
  ]

  const benefits = [
    'Reduce security incidents by 90%',
    'Detect threats 10x faster than traditional methods',
    'Automate 80% of security operations',
    'Comply with industry regulations',
    'Protect against advanced persistent threats',
    'Scale security across your entire organization'
  ]

  const securityServices = [
    {
      title: 'Threat Intelligence',
      description: 'AI-powered threat intelligence and analysis to stay ahead of cybercriminals.',
      icon: Brain,
      features: ['Threat hunting', 'Vulnerability assessment', 'Risk analysis', 'Security advisories']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and containment of security incidents with AI assistance.',
      icon: AlertTriangle,
      features: ['Incident detection', 'Automated response', 'Forensic analysis', 'Recovery planning']
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry regulations and standards.',
      icon: Target,
      features: ['GDPR compliance', 'SOC 2 certification', 'HIPAA compliance', 'Audit support']
    },
    {
      title: 'Security Training',
      description: 'AI-powered security awareness training for your employees.',
      icon: Users,
      features: ['Phishing simulation', 'Security awareness', 'Training modules', 'Progress tracking']
    }
  ]

  const threatStats = [
    { label: 'Threats Blocked Daily', value: '10,000+', icon: Shield },
    { label: 'Response Time', value: '< 1 min', icon: Zap },
    { label: 'False Positives', value: '< 1%', icon: Target },
    { label: 'Uptime', value: '99.9%', icon: Lock }
  ]

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and comprehensive security management." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, cyber protection, threat intelligence, security compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cybersecurity</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and comprehensive security management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Security Assessment
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Cybersecurity?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Security Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {threatStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Protect your business with our AI-powered cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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

export default AiCybersecurityPage