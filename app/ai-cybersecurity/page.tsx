'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Clock, Users, Award, Globe, Database, Cpu, BarChart3, PieChart, LineChart, Activity, Brain, Target, TrendingUp, AlertTriangle, FileText, Network } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms detect and prevent cyber threats in real-time',
      details: ['Behavioral Analysis', 'Anomaly Detection', 'Threat Intelligence', 'Zero-day Protection']
    },
    {
      icon: Lock,
      title: 'Automated Response',
      description: 'Instant automated responses to security incidents and breaches',
      details: ['Incident Response', 'Threat Mitigation', 'System Isolation', 'Recovery Automation']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of your entire infrastructure with AI-powered surveillance',
      details: ['Real-time Monitoring', 'Log Analysis', 'Network Surveillance', 'Endpoint Protection']
    },
    {
      icon: Brain,
      title: 'Predictive Security',
      description: 'Predict and prevent security threats before they occur',
      details: ['Risk Assessment', 'Vulnerability Prediction', 'Attack Simulation', 'Security Forecasting']
    }
  ];

  const securityServices = [
    {
      name: 'AI Security Operations Center (SOC)',
      icon: Network,
      description: '24/7 AI-powered security monitoring and incident response',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Security Analytics', 'Compliance Monitoring'],
      price: '$2,999/month',
      coverage: 'Up to 1,000 endpoints'
    },
    {
      name: 'AI Penetration Testing',
      icon: Target,
      description: 'Comprehensive security testing using AI-powered vulnerability assessment',
      features: ['Automated Vulnerability Scanning', 'AI-driven Attack Simulation', 'Security Assessment', 'Remediation Guidance'],
      price: '$1,499/test',
      coverage: 'Complete infrastructure'
    },
    {
      name: 'AI Security Training',
      icon: Users,
      description: 'AI-powered cybersecurity training and awareness programs',
      features: ['Phishing Simulation', 'Security Awareness Training', 'Behavioral Analysis', 'Risk Assessment'],
      price: '$299/user/month',
      coverage: 'Unlimited users'
    },
    {
      name: 'AI Compliance Management',
      icon: FileText,
      description: 'Automated compliance monitoring and reporting for various standards',
      features: ['GDPR Compliance', 'HIPAA Monitoring', 'SOX Compliance', 'PCI DSS Validation'],
      price: '$1,999/month',
      coverage: 'Complete organization'
    }
  ];

  const threatTypes = [
    {
      threat: 'Malware Detection',
      icon: AlertTriangle,
      description: 'AI-powered detection of malware, ransomware, and malicious software',
      accuracy: '99.8%',
      responseTime: '< 2 seconds'
    },
    {
      threat: 'Phishing Prevention',
      icon: Eye,
      description: 'Advanced email security with AI-powered phishing detection',
      accuracy: '99.5%',
      responseTime: '< 1 second'
    },
    {
      threat: 'DDoS Protection',
      icon: Network,
      description: 'Intelligent DDoS mitigation with real-time traffic analysis',
      accuracy: '99.9%',
      responseTime: '< 5 seconds'
    },
    {
      threat: 'Insider Threats',
      icon: Users,
      description: 'Behavioral analysis to detect and prevent insider threats',
      accuracy: '95.2%',
      responseTime: '< 10 seconds'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$1,299',
      period: '/month',
      description: 'Basic AI security for small to medium businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email security',
        'Standard monitoring',
        'Email support',
        'Monthly reports',
        'Basic compliance'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Advanced AI security for growing businesses',
      features: [
        'Up to 1,000 endpoints',
        'Advanced threat detection',
        'Full security suite',
        '24/7 monitoring',
        'Priority support',
        'Real-time alerts',
        'Advanced compliance',
        'Incident response'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'Complete AI security solution for large organizations',
      features: [
        'Unlimited endpoints',
        'AI-powered SOC',
        'Custom security models',
        '24/7 dedicated support',
        'Full compliance suite',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated security team'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CISO',
      company: 'TechCorp Global',
      content: 'Zion Tech Group\'s AI cybersecurity prevented 3 major breaches in the first month. The ROI has been exceptional and our security posture is now industry-leading.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'FinanceFirst Inc.',
      content: 'The AI threat detection is incredibly accurate. We\'ve reduced false positives by 80% while catching threats we never saw before. Game-changing technology.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Security Officer',
      company: 'HealthTech Solutions',
      content: 'Compliance monitoring has never been easier. The AI automatically tracks and reports on all our security requirements, saving us countless hours.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const complianceStandards = [
    { standard: 'GDPR', status: 'Compliant', icon: Shield },
    { standard: 'HIPAA', status: 'Compliant', icon: Lock },
    { standard: 'SOX', status: 'Compliant', icon: FileText },
    { standard: 'PCI DSS', status: 'Compliant', icon: CreditCard },
    { standard: 'ISO 27001', status: 'Compliant', icon: Award },
    { standard: 'NIST', status: 'Compliant', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI cybersecurity solutions with 99.8% threat detection accuracy. AI-powered SOC, threat prevention, compliance management. Starting at $1,299/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security operations center, penetration testing, compliance management, cyber defense" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Protect Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 to-red-400 bg-clip-text text-transparent">
              AI Security
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI cybersecurity solutions that detect and prevent 99.8% of threats in real-time. 
            Protect your business with intelligent security that learns and adapts to new threats.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.8%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">&lt;2s</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Compliance</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Security Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-sm text-gray-300">{service.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Detection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI Threat Detection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cyber-card">
                <threat.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{threat.threat}</h3>
                <p className="text-gray-300 mb-4">{threat.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Accuracy:</span>
                    <span className="text-cyan-400 font-bold">{threat.accuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Response:</span>
                    <span className="text-green-400 font-bold">{threat.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Compliance Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cyber-card">
                <standard.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{standard.standard}</h3>
                <span className="text-green-400 text-sm font-medium">{standard.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Security Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Security Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait for a breach. Protect your business with AI-powered cybersecurity that adapts to new threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Assessment Request"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
            >
              Get Security Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;