'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, DollarSign, Clock, TrendingDown as TrendingDownIcon } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      title: 'Threat Detection',
      description: 'AI-powered real-time threat detection and analysis',
      icon: Eye,
      benefits: ['99.9% threat detection accuracy', 'Real-time monitoring', 'Zero-day protection', 'Automated response']
    },
    {
      title: 'Behavioral Analysis',
      description: 'AI analysis of user and system behavior patterns',
      icon: Brain,
      benefits: ['Anomaly detection', 'User behavior analysis', 'Insider threat detection', 'Risk assessment']
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Automated vulnerability assessment and penetration testing',
      icon: Search,
      benefits: ['Continuous scanning', 'Automated patching', 'Risk prioritization', 'Compliance checking']
    },
    {
      title: 'Incident Response',
      description: 'AI-powered incident response and forensic analysis',
      icon: Shield,
      benefits: ['Automated response', 'Forensic analysis', 'Evidence collection', 'Recovery planning']
    },
    {
      title: 'Security Analytics',
      description: 'Advanced security analytics and threat intelligence',
      icon: BarChart,
      benefits: ['Threat intelligence', 'Security metrics', 'Trend analysis', 'Predictive security']
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance monitoring and reporting',
      icon: FileText,
      benefits: ['Regulatory compliance', 'Automated reporting', 'Audit trails', 'Policy enforcement']
    }
  ];

  const threats = [
    {
      title: 'Malware Detection',
      description: 'AI-powered malware detection and prevention',
      icon: '🦠',
      protection: ['99.9% detection rate', 'Real-time scanning', 'Behavioral analysis', 'Sandboxing']
    },
    {
      title: 'Phishing Prevention',
      description: 'Advanced phishing detection and email security',
      icon: '🎣',
      protection: ['Email filtering', 'URL analysis', 'User training', 'Real-time blocking']
    },
    {
      title: 'DDoS Protection',
      description: 'AI-powered DDoS attack mitigation',
      icon: '⚡',
      protection: ['Traffic analysis', 'Attack mitigation', 'Bandwidth protection', 'Service availability']
    },
    {
      title: 'Data Breach Prevention',
      description: 'Protect sensitive data with AI monitoring',
      icon: '🔒',
      protection: ['Data classification', 'Access monitoring', 'Encryption', 'Data loss prevention']
    },
    {
      title: 'Insider Threats',
      description: 'Detect and prevent insider threats',
      icon: '👤',
      protection: ['User monitoring', 'Behavior analysis', 'Access control', 'Risk scoring']
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security monitoring',
      icon: '🌐',
      protection: ['Network monitoring', 'Traffic analysis', 'Intrusion detection', 'Firewall management']
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'AI provides superior protection against evolving threats',
      icon: Shield,
      stats: '99.9% threat detection'
    },
    {
      title: 'Cost Reduction',
      description: 'Automated security reduces operational costs',
      icon: DollarSign,
      stats: '60% cost reduction'
    },
    {
      title: 'Faster Response',
      description: 'AI enables rapid threat detection and response',
      icon: Zap,
      stats: '90% faster response'
    },
    {
      title: 'Compliance',
      description: 'Automated compliance monitoring and reporting',
      icon: CheckCircle,
      stats: '100% compliance'
    }
  ];

  const pricing = [
    {
      name: 'Essential',
      price: 299,
      description: 'Basic AI security for small businesses',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email support',
        'Standard monitoring',
        'Basic reporting',
        'Firewall protection'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 599,
      description: 'Advanced AI security for growing businesses',
      features: [
        'Up to 200 endpoints',
        'Advanced threat detection',
        'Priority support',
        'Advanced monitoring',
        'Advanced reporting',
        'Full security suite',
        'Compliance monitoring',
        'Incident response'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1299,
      description: 'Comprehensive AI security for large organizations',
      features: [
        'Unlimited endpoints',
        'Full AI security suite',
        '24/7 support',
        'Custom monitoring',
        'Custom reporting',
        'White-label options',
        'Dedicated security team',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">🛡️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Protect your organization with AI-powered cybersecurity solutions. 
            Detect threats, prevent attacks, and ensure compliance with advanced artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Get Security Assessment
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Security Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Threats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Threats We Protect Against
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{threat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{threat.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{threat.description}</p>
                
                <div className="space-y-2">
                  {threat.protection.map((protection, protectionIndex) => (
                    <div key={protectionIndex} className="flex items-center text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {protection}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Security Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive AI cybersecurity solutions for organizations of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' 
                      : 'bg-cyan-400 text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Protect your organization with 
              AI-powered cybersecurity solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Get Security Assessment
              </a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICybersecurityPage;