'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, Eye, BarChart, Target, CheckCircle, ArrowRight, Star, Users, Globe, Database, Settings, Lock, TrendingUp, Cpu, AlertTriangle, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiCybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent sophisticated cyber threats in real-time.',
      benefits: ['Zero-day detection', 'Behavioral analysis', 'Automated response', 'Continuous learning']
    },
    {
      icon: Shield,
      title: 'Intelligent Firewall',
      description: 'AI-powered firewall that adapts to new threats and automatically updates security rules.',
      benefits: ['Adaptive protection', 'Auto-updating rules', 'Traffic analysis', 'DDoS mitigation']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 AI-powered security monitoring with real-time alerts and incident response.',
      benefits: ['24/7 monitoring', 'Real-time alerts', 'Incident response', 'Forensic analysis']
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'AI-driven automated incident response that neutralizes threats before they cause damage.',
      benefits: ['Instant response', 'Threat neutralization', 'Damage prevention', 'Recovery automation']
    }
  ];

  const solutions = [
    {
      title: 'AI Security Operations Center',
      description: 'Complete AI-powered SOC with threat hunting, incident response, and security analytics.',
      icon: Shield,
      features: ['Threat hunting', 'Incident response', 'Security analytics', 'Compliance monitoring'],
      price: 'Starting at $25,000/month',
      marketPrice: '$50,000-150,000/month',
      benefits: ['99.9% threat detection', '60% faster response', '24/7 protection']
    },
    {
      title: 'AI Endpoint Protection',
      description: 'Advanced endpoint security with AI-powered malware detection and behavioral analysis.',
      icon: Cpu,
      features: ['Malware detection', 'Behavioral analysis', 'Device management', 'Threat prevention'],
      price: 'Starting at $15/user/month',
      marketPrice: '$25-50/user/month',
      benefits: ['99.8% malware detection', 'Zero false positives', 'Real-time protection']
    },
    {
      title: 'AI Network Security',
      description: 'Intelligent network security with AI-powered traffic analysis and anomaly detection.',
      icon: Globe,
      features: ['Traffic analysis', 'Anomaly detection', 'Network segmentation', 'Intrusion prevention'],
      price: 'Starting at $8,000/month',
      marketPrice: '$15,000-40,000/month',
      benefits: ['95% attack prevention', 'Real-time monitoring', 'Automated response']
    },
    {
      title: 'AI Cloud Security',
      description: 'Comprehensive cloud security with AI-powered configuration management and threat detection.',
      icon: Database,
      features: ['Cloud monitoring', 'Configuration management', 'Data protection', 'Compliance automation'],
      price: 'Starting at $12,000/month',
      marketPrice: '$25,000-60,000/month',
      benefits: ['100% compliance', 'Automated remediation', 'Cost optimization']
    },
    {
      title: 'AI Email Security',
      description: 'Advanced email security with AI-powered phishing detection and content analysis.',
      icon: Users,
      features: ['Phishing detection', 'Content analysis', 'Spam filtering', 'Email encryption'],
      price: 'Starting at $5/user/month',
      marketPrice: '$10-20/user/month',
      benefits: ['99.9% phishing detection', 'Zero spam', 'Email encryption']
    },
    {
      title: 'AI Vulnerability Management',
      description: 'Intelligent vulnerability scanning and management with AI-powered risk assessment.',
      icon: Search,
      features: ['Vulnerability scanning', 'Risk assessment', 'Patch management', 'Compliance tracking'],
      price: 'Starting at $6,000/month',
      marketPrice: '$12,000-30,000/month',
      benefits: ['90% vulnerability reduction', 'Automated patching', 'Risk prioritization']
    }
  ];

  const threats = [
    {
      title: 'Advanced Persistent Threats',
      description: 'AI-powered detection and prevention of sophisticated, long-term cyber attacks.',
      icon: AlertTriangle,
      protection: '99.7% detection rate'
    },
    {
      title: 'Ransomware Protection',
      description: 'AI-driven ransomware detection and prevention with automated backup and recovery.',
      icon: Lock,
      protection: '100% prevention rate'
    },
    {
      title: 'Insider Threats',
      description: 'Behavioral analysis and monitoring to detect and prevent insider threats.',
      icon: Users,
      protection: '95% detection rate'
    },
    {
      title: 'Zero-Day Attacks',
      description: 'AI-powered detection of previously unknown vulnerabilities and attacks.',
      icon: Eye,
      protection: '98% detection rate'
    },
    {
      title: 'DDoS Attacks',
      description: 'Intelligent DDoS mitigation with AI-powered traffic analysis and filtering.',
      icon: Zap,
      protection: '99.9% mitigation rate'
    },
    {
      title: 'Data Breaches',
      description: 'AI-powered data loss prevention and breach detection with automated response.',
      icon: Database,
      protection: '99.5% prevention rate'
    }
  ];

  const compliance = [
    {
      standard: 'SOC 2 Type II',
      description: 'Comprehensive security controls and monitoring for service organizations.',
      icon: Shield,
      coverage: '100% compliance'
    },
    {
      standard: 'ISO 27001',
      description: 'International standard for information security management systems.',
      icon: Globe,
      coverage: '100% compliance'
    },
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection.',
      icon: Lock,
      coverage: '100% compliance'
    },
    {
      standard: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance.',
      icon: Users,
      coverage: '100% compliance'
    },
    {
      standard: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance.',
      icon: Database,
      coverage: '100% compliance'
    },
    {
      standard: 'NIST Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework.',
      icon: Settings,
      coverage: '100% compliance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions including threat detection, endpoint protection, network security, and compliance management. Protect your business with intelligent security." />
        <meta name="keywords" content="AI cybersecurity, threat detection, endpoint protection, network security, compliance, SOC, ransomware protection" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Cybersecurity Suite
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with advanced AI-powered cybersecurity solutions. Our intelligent 
                security suite provides comprehensive protection against evolving cyber threats with 
                automated detection, prevention, and response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI Security Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI Security Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Proven Results:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-semibold">{solution.price}</span>
                      <span className="text-gray-400 text-sm line-through">{solution.marketPrice}</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Threat Protection Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Advanced Threat Protection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threats.map((threat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <threat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                  <p className="text-gray-300 mb-4">{threat.description}</p>
                  <div className="text-2xl font-bold text-green-400">{threat.protection}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.standard}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{item.coverage}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for a cyber attack. Contact our security experts for a comprehensive 
                security assessment and discover how AI-powered cybersecurity can protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Security Assessment
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Email Our Security Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiCybersecuritySuitePage;