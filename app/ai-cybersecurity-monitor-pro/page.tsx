'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Eye, AlertTriangle, Lock, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, BarChart, Target, Settings, Smartphone, Globe, Database, Server, Mail, Phone, MapPin, Activity, ShieldCheck, Bug, Network, FileText, Clock, TrendingUp } from 'lucide-react';

const AiCybersecurityMonitorProPage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      title: 'Real-time Threat Detection',
      description: 'Advanced AI algorithms monitor your network 24/7 for potential threats',
      benefits: ['99.8% threat detection rate', 'Sub-second response time', 'Zero false positives']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Automated Incident Response',
      description: 'AI-powered response system automatically contains and mitigates threats',
      benefits: ['50% faster incident response', 'Automated threat containment', 'Reduced damage']
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: 'Predictive Security Analytics',
      description: 'Machine learning models predict and prevent future security breaches',
      benefits: ['90% breach prevention', 'Proactive security measures', 'Risk scoring']
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulations',
      benefits: ['100% compliance rate', 'Automated reporting', 'Audit trail maintenance']
    }
  ];

  const securityServices = [
    {
      title: 'Network Security Monitoring',
      description: 'Continuous monitoring of network traffic and infrastructure',
      price: '$299/month',
      features: ['24/7 network monitoring', 'Intrusion detection', 'Traffic analysis', 'Anomaly detection']
    },
    {
      title: 'Endpoint Protection',
      description: 'AI-powered protection for all devices and endpoints',
      price: '$199/month',
      features: ['Device monitoring', 'Malware detection', 'Behavioral analysis', 'Automated remediation']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security for cloud infrastructure and applications',
      price: '$399/month',
      features: ['Cloud monitoring', 'Access control', 'Data encryption', 'Compliance tracking']
    },
    {
      title: 'Security Operations Center',
      description: 'Dedicated SOC team with AI-enhanced monitoring',
      price: '$999/month',
      features: ['24/7 SOC monitoring', 'Expert analysts', 'Incident response', 'Threat hunting']
    }
  ];

  const stats = [
    { number: '500+', label: 'Threats Blocked Daily', icon: <Shield className="w-6 h-6 text-cyan-400" /> },
    { number: '99.8%', label: 'Detection Accuracy', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Monitoring Coverage', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '50%', label: 'Faster Response Time', icon: <Zap className="w-6 h-6 text-red-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Monitor Pro - Zion Tech Group | Advanced Threat Detection & Response</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity monitoring. Real-time threat detection, automated incident response, and compliance management for enterprise security." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, compliance management, enterprise security" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-monitor-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-red-400/30">
              <Shield className="w-4 h-4" />
              <span>AI-Powered Security</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI Cybersecurity{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Monitor Pro
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered cybersecurity monitoring that detects, prevents, and responds to threats 
              in real-time. Protect your business with 99.8% accuracy and automated incident response.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:scale-105"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-red-400 text-red-400 px-10 py-4 rounded-xl font-semibold hover:bg-red-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Security Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
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
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered security capabilities that protect your business around the clock
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-red-400 mb-6">
                    {service.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Secure Your Business Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't wait for a security breach. Get comprehensive AI-powered protection for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                  >
                    Get Security Assessment
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecurityMonitorProPage;