'use client';
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Target, 
  Globe, 
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles,
  Activity,
  PieChart,
  LineChart,
  BarChart3,
  TrendingDown,
  AlertCircle,
  Zap,
  Users,
  Server,
  Database,
  Wifi,
  HardDrive,
  Cpu,
  Settings,
  Monitor,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  FileText,
  Clock,
  TrendingUp,
  BarChart,
  ShieldCheck,
  AlertOctagon,
  Info,
  XCircle,
  CheckCircle2
} from 'lucide-react';

const AICybersecurityPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time',
      benefits: ['Real-time Detection', 'Machine Learning', 'Zero-day Protection']
    },
    {
      icon: Shield,
      title: 'Multi-Layer Security',
      description: 'Comprehensive security architecture with multiple layers of protection',
      benefits: ['Network Security', 'Endpoint Protection', 'Data Encryption']
    },
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring with instant threat response',
      benefits: ['Continuous Monitoring', 'Instant Alerts', 'Rapid Response']
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards and regulatory requirements',
      benefits: ['GDPR Compliance', 'SOC 2 Type II', 'ISO 27001']
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        '24/7 monitoring',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI detection',
        'Multi-layer security',
        'Incident response',
        'Priority support',
        'Compliance reporting',
        'Security training',
        'Vulnerability scanning'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI security suite',
        'Custom security policies',
        'Dedicated security team',
        '24/7 phone support',
        'Custom compliance',
        'Penetration testing',
        'Security consulting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence and analysis',
      icon: Eye,
      metrics: '99.9% threat detection rate'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents',
      icon: Zap,
      metrics: '15-minute response time'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and assessment',
      icon: Scan,
      metrics: '100% coverage'
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training',
      icon: Users,
      metrics: '95% completion rate'
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation', status: 'Compliant' },
    { name: 'SOC 2 Type II', description: 'Service Organization Control', status: 'Certified' },
    { name: 'ISO 27001', description: 'Information Security Management', status: 'Certified' },
    { name: 'HIPAA', description: 'Health Insurance Portability', status: 'Compliant' },
    { name: 'PCI DSS', description: 'Payment Card Industry', status: 'Compliant' },
    { name: 'NIST', description: 'National Institute of Standards', status: 'Aligned' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-red-400 font-semibold text-lg">AI Cybersecurity Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Next-Generation AI Cybersecurity
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Protect your business with advanced AI-powered cybersecurity solutions. 
              Detect, prevent, and respond to threats with enterprise-grade security.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-red-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">24/7 Protection</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-500/20 px-4 py-2 rounded-lg">
                <Lock className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Compliance Ready</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 inline-flex items-center">
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                View Demo
                <Eye className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge technology with expert security practices 
              to provide comprehensive protection against evolving threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-red-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From threat detection to incident response, we provide end-to-end cybersecurity solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="text-red-400 font-bold text-lg">{service.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{standard.name}</h3>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{standard.status}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Security Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs and risk profile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-red-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700' 
                    : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Get a free security assessment and discover how we can protect your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-red-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-red-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-red-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-red-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Get Security Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPro;