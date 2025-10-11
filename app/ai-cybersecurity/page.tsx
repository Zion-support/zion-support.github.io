'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Zap, Users, Clock, AlertTriangle, Lock, Eye, FileText } from 'lucide-react';

const AiCybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems.',
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Behavioral analysis', 'Threat intelligence']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Intelligent analysis of security events and patterns.',
      benefits: ['Machine learning', 'Pattern recognition', 'Predictive analytics', 'Automated response']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting dashboard.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Risk assessment', 'Compliance monitoring']
    },
    {
      icon: Target,
      title: 'Vulnerability Management',
      description: 'Proactive identification and remediation of security vulnerabilities.',
      benefits: ['Vulnerability scanning', 'Patch management', 'Risk prioritization', 'Remediation tracking']
    }
  ];

  const securityServices = [
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and protection solutions',
      benefits: ['Data encryption', 'Access controls', 'Data loss prevention', 'Backup security']
    },
    {
      icon: Eye,
      title: 'Network Security',
      description: 'Advanced network security monitoring and protection',
      benefits: ['Firewall management', 'Intrusion detection', 'Network monitoring', 'Traffic analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      benefits: ['24/7 monitoring', 'Incident detection', 'Response automation', 'Recovery planning']
    },
    {
      icon: FileText,
      title: 'Compliance Management',
      description: 'Ensure compliance with security standards and regulations',
      benefits: ['GDPR compliance', 'SOC 2 compliance', 'ISO 27001', 'Audit support']
    }
  ];

  const benefits = [
    'Protect against 99.9% of cyber threats',
    'Reduce security incidents by 80%',
    '24/7 automated threat monitoring',
    'Compliance with industry standards',
    'Real-time threat intelligence',
    'Seamless integration with existing systems'
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: Shield },
    { number: '24/7', label: 'Monitoring', icon: Clock },
    { number: '50+', label: 'Security Standards', icon: Target },
    { number: '1000+', label: 'Threats Blocked Daily', icon: Zap }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions to protect your business from evolving threats. Real-time threat detection, automated response, and comprehensive security monitoring." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, cyber protection, threat intelligence, security automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Cybersecurity</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered cybersecurity solutions to protect your business from evolving threats. Real-time threat detection, automated response, and comprehensive security monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Protected
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cybersecurity solutions cover all aspects of your security needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform provides advanced protection against evolving threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with AI-driven cybersecurity and stay ahead of threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Protect your business with our advanced AI cybersecurity solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Security Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiCybersecurityPage;