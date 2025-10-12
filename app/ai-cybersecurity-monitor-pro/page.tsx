<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Building2, Bug } from 'lucide-react';
import { ArrowRight, AlertCircle, Building2, Bug} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Eye, AlertTriangle, Lock, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, BarChart, Target, Settings, Smartphone, Globe, Database, Server, Mail, Phone, MapPin, Activity, ShieldCheck, Bug, Network, FileText, Clock, TrendingUp } from 'lucide-react';

const AiCybersecurityMonitorProPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
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
=======
      icon: <Brain className="w-8-h-8text-cyan-400" / />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['Behavioral analysis', 'Anomaly detection', 'Threat prediction', 'Zero-day protection']
    },
    {
      icon: <Shield className="w-8-h-8text-green-400" / />,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring with instant threat response and automated remediation',
      benefits: ['Real-time alerts', 'Automated response', 'Incident management', 'Threat hunting']
    },
    {
      icon: <Eye className="w-8-h-8text-purple-400" / />,
      title: 'Network Visibility',
      description: 'Complete visibility into your network infrastructure with advanced traffic analysis',
      benefits: ['Network mapping', 'Traffic analysis', 'Device discovery', 'Vulnerability scanning']
    },
    {
      icon: <Lock className="w-8-h-8text-orange-400" / />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory standards',
      benefits: ['Regulatory compliance', 'Audit trails', 'Policy enforcement', 'Risk assessment']
    },
    {
      icon: <Zap className="w-8-h-8text-red-400" / />,
      title: 'Automated Response',
      description: 'Intelligent incident response with automated threat containment and remediation',
      benefits: ['Auto-quarantine', 'Threat isolation', 'System restoration', 'Forensic analysis']
    },
    {
      icon: <Globe className="w-8-h-8text-blue-400" / />,
      title: 'Global Threat Intelligence',
      description: 'Access to global threat intelligence feeds and security research databases',
      benefits: ['Threat intelligence', 'IOC feeds', 'Malware analysis', 'Attack patterns']
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
    }
  ];

  const securityServices = [
    {
<<<<<<< HEAD
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
=======
      category: 'Threat Detection',
      icon: <AlertTriangle className="w-6-h-6text-red-400" / />,
      items: [
        'Malware detection',
        'Phishing prevention',
        'Ransomware protection',
        'Advanced persistent threats',
        'Insider threat detection'
      ]
    },
    {
      category: 'Network Security',
      icon: <Network className="w-6-h-6text-blue-400" / />,
      items: [
        'Firewall management',
        'Intrusion detection',
        'Network segmentation',
        'VPN monitoring',
        'Wireless security'
      ]
    },
    {
      category: 'Endpoint Protection',
      icon: <Monitor className="w-6-h-6text-green-400" / />,
      items: [
        'Device monitoring',
        'Application control',
        'USB protection',
        'Mobile device security',
        'Patch management'
      ]
    },
    {
      category: 'Data Protection',
      icon: <Database className="w-6-h-6text-purple-400" / />,
      items: [
        'Data encryption',
        'Access controls',
        'Data loss prevention',
        'Backup monitoring',
        'Privacy compliance'
      ]
    },
    {
      category: 'Incident Response',
      icon: <AlertCircle className="w-6-h-6text-orange-400" / />,
      items: [
        'Automated response',
        'Incident tracking',
        'Forensic analysis',
        'Recovery procedures',
        'Communication tools'
      ]
    },
    {
      category: 'Security Analytics',
      icon: <BarChart3 className="w-6-h-6text-cyan-400" / />,
      items: [
        'Security dashboards',
        'Risk assessment',
        'Compliance reporting',
        'Trend analysis',
        'Performance metrics'
      ]
    }
  ];
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Email support',
        'Standard reports',
        'Basic compliance',
        '1 TB log storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and security teams',
      features: [
        'Up to 500 devices',
        'Advanced AI detection',
        'Priority support',
        'Custom dashboards',
        'Full compliance suite',
        '10 TB log storage',
        'Automated response',
        'Threat intelligence'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Unlimited devices',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Unlimited storage',
        'API access',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];
  const testimonials = [
    {
      name: 'Michael Torres',
      company: 'SecureTech Solutions',
      role: 'CISO',
      content: 'AI Cybersecurity Monitor Pro has revolutionized our security posture. The AI detection capabilities have prevented multiple sophisticated attacks that traditional tools missed.',
      rating: 5,
      avatar: 'MT',
      results: '99.7% threat detection rate'
    },
    {
      name: 'Sarah Chen',
      company: 'Global Finance Corp',
      role: 'Security Director',
      content: 'The automated response capabilities have reduced our incident response time by 80%. Our security team can now focus on strategic initiatives instead of manual monitoring.',
      rating: 5,
      avatar: 'SC',
      results: '80% faster incident response'
    },
    {
      name: 'David Rodriguez',
      company: 'Healthcare Systems',
      role: 'IT Security Manager',
      content: 'The compliance management features have made our HIPAA audits seamless. We maintain continuous compliance with automated monitoring and reporting.',
      rating: 5,
      avatar: 'DR',
      results: '100% compliance score'
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: '500+', label: 'Threats Blocked Daily', icon: <Shield className="w-6 h-6 text-cyan-400" /> },
    { number: '99.8%', label: 'Detection Accuracy', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Monitoring Coverage', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '50%', label: 'Faster Response Time', icon: <Zap className="w-6 h-6 text-red-400" /> }
=======
    { number: '1 M+', label: 'Threats Blocked', icon: <Shield className="w-6-h-6" / /> },
    { number: '500+', label: 'Enterprise Clients', icon: <Building2 className="w-6-h-6" / /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Activity className="w-6-h-6" / /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Eye className="w-6-h-6" / /> }
  ];
  const threatTypes = [
    { name: 'Malware', icon: <Bug className="w-6-h-6" / />, category: 'Malicious Software' },
    { name: 'Phishing', icon: <Target className="w-6-h-6" / />, category: 'Social Engineering' },
    { name: 'Ransomware', icon: <Lock className="w-6-h-6" / />, category: 'Data Encryption' },
    { name: 'DDoS', icon: <Network className="w-6-h-6" / />, category: 'Network Attacks' },
    { name: 'Insider Threats', icon: <Users className="w-6-h-6" / />, category: 'Internal Risks' },
    { name: 'Zero-Day', icon: <AlertCircle className="w-6-h-6" / />, category: 'Unknown Vulnerabilities' },
    { name: 'APTs', icon: <Search className="w-6-h-6" / />, category: 'Advanced Persistent Threats' },
    { name: 'IoT Attacks', icon: <Smartphone className="w-6-h-6" / />, category: 'Device Vulnerabilities' }
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900 pt-20">
      <Helmet />
        <title   />AI Cybersecurity Monitor Pro - Zion Tech Group | Advanced Security Intelligence Platform</title>
        <meta name="description" content="Protect your business with AI Cybersecurity Monitor Pro. Advanced threat detection, 24/7 monitoring, and automated response for enterprise-grade security. Start your free trial today." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, cyber defense, enterprise security, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width="device-width," initial-scale=1.0" / / />
        <meta name="theme-color" content="#8 b5 cf6" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Cybersecurity Monitor Pro - Advanced Security Intelligence Platform" / / />
        <meta property="og: description" content="Protect your business with AI-powered threat detection, 24/7 monitoring, and automated response for enterprise-grade security." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-monitor-pro" / / />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-cybersecurity.jpg" / / />
        <meta property="og:site_name" content="Zion Tech Group" / / />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Cybersecurity Monitor Pro - Advanced Security Intelligence Platform" />
        <meta name="twitter: description" content="Protect your business with AI-powered threat detection, 24/7 monitoring, and automated response." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-cybersecurity.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        {/* Structured Data */}
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Cybersecurity Monitor Pro",
            "description": "Advanced AI-powered cybersecurity platform with threat detection, 24/7 monitoring, and automated response for enterprise-grade security.",
            "url": "https: //ziontechgroup.com/ai-cybersecurity-monitor-pro",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "299",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "299",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7 xl mx-auto px-4 sm:px-6-lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-centermb-16">
          <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-white mb-6" />
            AI Cybersecurity Monitor{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500-bg-clip-texttext-transparent"  />Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4 xlmx-auto mb-8" />
            Protect your business with AI-powered threat detection, 24/7 monitoring, 
            and automated response. Enterprise-grade security powered by artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4-justify-center mb-8">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Free Trial
              <ArrowRight className="w-5-h-5 ml-2" />
            </Link>
            <Link to="/ai-services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flexitems-centerjustify-center">View All AI Services
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
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
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2-xlmb-16" />
          <div className="max-w-7-xlmx-auto">
            <div className="grid grid-cols-2-md:grid-cols-4gap-8">
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-fullmx-automb-4">
                    <stat.icon className="h-8-w-8text-white" / />
                  </div>
                  <div className="text-3 xl md: text-4 xl font-boldtext-white mb-2"   />{stat.number}</div>
                  <div className="text-gray-300"   />{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
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
=======
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Advanced Security Features</h2>
            <p className="text-lg text-gray-300 max-w-3-xlmx-auto" />
              Our AI Cybersecurity Monitor Pro leverages cutting-edge artificial intelligence 
              to provide comprehensive protection against evolving cyber threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="bg-slate-800/50 rounded-2 xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-allduration-300-group" />
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4-group-hover:scale-110transition-transform"  />{feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-whitemb-3 text-center"   />{feature.title}</h3>
                  <p className="text-gray-300-mb-4 text-center" />{feature.description}</p>
                  <ul className="space-y-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key="{benefitIndex}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400-mr-2flex-shrink-0" / />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Capabilities Section */}
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Comprehensive Security Coverage</h2>
            <p className="text-lg text-gray-300 max-w-3-xlmx-auto" />
              Protect every aspect of your digital infrastructure with our comprehensive security capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-6">
            {securityCapabilities.map((capability, index) => (
              <div key="{index}" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30-transition-all duration-300" />
                <div className="flexitems-centermb-4">
                  {capability.icon}
                  <h3 className="text-lg font-semiboldtext-whiteml-3"   />{capability.category}</h3>
                </div>
                <ul className="space-y-2" />
                  {capability.items.map((item, itemIndex) => (
                    <li key="{itemIndex}" className="flex items-centertext-smtext-gray-300" />
                      <CheckCircle className="w-4 h-4 text-green-400-mr-2flex-shrink-0" / />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Threat Protection</h2>
            <p className="text-lg text-gray-300 max-w-3-xlmx-auto" />
              Advanced AI detection and prevention for all types of cyber threats and attacks.
            </p>
          </div>
          
          <div className="grid grid-cols-2-md:grid-cols-4gap-6">
            {threatTypes.map((threat, index) => (
              <div key="{index}" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300-text-centergroup" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3-group-hover:scale-110transition-transform"  />{threat.icon}
                </div>
                <h3 className="text-whitefont-semiboldmb-1"   />{threat.name}</h3>
                <p className="text-gray-400-text-sm" />{threat.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Choose Your Security Plan</h2>
            <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
              Flexible pricing plans designed to protect businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1-md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`bg-slate-800/50" rounded-2 xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2-transform-translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2 xl font-boldtext-white mb-2"   />{plan.name}</h3>
                  <div className="flex items-baselinejustify-centermb-2">
                    <span className="text-4 xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <span className="text-gray-400-ml-1"   />{plan.period}</span>
                  </div>
                  <p className="text-gray-300" />{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                      <CheckCircle className="w-5 h-5 text-green-400-mr-3flex-shrink-0" / />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="{`w-full" py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'
                  }`} />
                  {plan.cta}
                  <ArrowRight className="w-4-h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2-xlmb-16" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-boldtext-white mb-4"   />What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
                Join hundreds of security professionals who trust AI Cybersecurity Monitor Pro.
              </p>
            </div>
            
            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6-borderborder-slate-700" />
                  <div className="flexitems-centermb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                    </div>
                    <div />
                      <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                      <p className="text-gray-400-text-sm" />{testimonial.role}</p>
                      <p className="text-cyan-400-text-smfont-semibold" />{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flexitems-centermb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-4 h-4-text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <p className="text-gray-300-italicmb-3" />"{testimonial.content}"</p>
                  <div className="text-cyan-400-font-semiboldtext-sm"  />Result: {testimonial.results}
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* CTA Section */}
        <section className="text-center" />
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-12-borderborder-cyan-500/30">
            <h2 className="text-3 xl font-boldtext-white mb-4"  />Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3-xlmx-auto" />
              Start your free trial today and experience enterprise-grade security powered by AI. 
              Join hundreds of organizations already protected by our advanced threat detection.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4-justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 inline-flexitems-centerjustify-center" />
                Start Free Trial
                <Sparkles className="w-5-h-5 ml-2" / />
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flexitems-centerjustify-center" />
                Learn More
                <Shield className="w-5-h-5 ml-2" / />
              </Link>
            </div>
            <div className="mt-8-text-white/80text-sm">
              <p />✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 monitoring • ✓ Cancel anytime</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecurityMonitorProPage;