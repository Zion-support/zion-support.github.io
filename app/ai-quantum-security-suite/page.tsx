'use client';
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Globe, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  DollarSign,
  Cpu,
  Database,
  Eye,
  AlertTriangle,
  RefreshCw,
  Download,
  Share2,
  Filter,
  Search,
  Calendar,
  Bell,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Key,
  Fingerprint,
  Scan,
  Activity,
  BarChart3,
  TrendingUp,
  Shield as SecurityIcon,
  Lock as LockIcon,
  Brain as BrainIcon,
  Zap as ZapIcon
} from 'lucide-react';

const AIQuantumSecuritySuitePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Quantum-Resistant Encryption',
      description: 'Advanced quantum-resistant algorithms that protect against future quantum computing threats',
      benefits: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Unbreakable Encryption', 'Future-Proof Security']
    },
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning algorithms that detect and prevent sophisticated cyber attacks in real-time',
      benefits: ['Behavioral Analysis', 'Anomaly Detection', 'Predictive Security', 'Automated Response']
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive zero-trust security model with continuous verification and micro-segmentation',
      benefits: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Continuous Monitoring']
    },
    {
      icon: Zap,
      title: 'Real-Time Response',
      description: 'Instant threat response with automated incident handling and recovery procedures',
      benefits: ['Instant Alerts', 'Auto-Containment', 'Rapid Recovery', 'Forensic Analysis']
    }
  ];

  const securityCapabilities = [
    {
      category: 'Quantum Security',
      icon: Brain,
      capabilities: [
        'Quantum-resistant encryption algorithms',
        'Post-quantum cryptography implementation',
        'Quantum key distribution (QKD)',
        'Quantum random number generation',
        'Future-proof security protocols',
        'Quantum-safe migration planning'
      ]
    },
    {
      category: 'AI Threat Intelligence',
      icon: Shield,
      capabilities: [
        'Advanced threat hunting',
        'Behavioral anomaly detection',
        'Predictive threat modeling',
        'Automated incident response',
        'Threat intelligence correlation',
        'Real-time risk assessment'
      ]
    },
    {
      category: 'Identity & Access',
      icon: Key,
      capabilities: [
        'Multi-factor authentication',
        'Biometric authentication',
        'Privileged access management',
        'Identity governance',
        'Single sign-on (SSO)',
        'Zero-trust access control'
      ]
    },
    {
      category: 'Data Protection',
      icon: Lock,
      capabilities: [
        'End-to-end encryption',
        'Data loss prevention',
        'Database security',
        'File-level encryption',
        'Secure data sharing',
        'Compliance monitoring'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,299',
      period: '/month',
      description: 'Core quantum security for small to medium businesses',
      features: [
        'Quantum-resistant encryption',
        'Basic AI threat detection',
        'Standard monitoring',
        'Email support',
        'Up to 100 users',
        '1 year data retention'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Advanced security suite for growing enterprises',
      features: [
        'Everything in Essential',
        'Advanced AI threat intelligence',
        'Zero-trust architecture',
        'Priority support',
        'Up to 500 users',
        '3 years data retention',
        'Custom integrations',
        'Compliance reporting'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: '/month',
      description: 'Complete quantum security solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated security team',
        'Custom quantum algorithms',
        '24/7 phone support',
        'Unlimited users',
        'Unlimited data retention',
        'On-premise deployment',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', icon: '🔒', status: 'Certified' },
    { name: 'ISO 27001', icon: '🛡️', status: 'Certified' },
    { name: 'GDPR', icon: '🇪🇺', status: 'Compliant' },
    { name: 'HIPAA', icon: '🏥', status: 'Compliant' },
    { name: 'PCI DSS', icon: '💳', status: 'Compliant' },
    { name: 'SOX', icon: '📊', status: 'Compliant' },
    { name: 'NIST', icon: '🏛️', status: 'Aligned' },
    { name: 'FISMA', icon: '🇺🇸', status: 'Compliant' }
  ];

  const threatProtection = [
    {
      threat: 'Advanced Persistent Threats (APT)',
      protection: '99.9%',
      description: 'AI-powered detection and prevention of sophisticated long-term attacks'
    },
    {
      threat: 'Ransomware',
      protection: '99.8%',
      description: 'Real-time detection and automated containment of ransomware attacks'
    },
    {
      threat: 'Insider Threats',
      protection: '99.7%',
      description: 'Behavioral analysis and anomaly detection for internal security risks'
    },
    {
      threat: 'Zero-Day Exploits',
      protection: '99.6%',
      description: 'Machine learning-based detection of previously unknown vulnerabilities'
    },
    {
      threat: 'Quantum Attacks',
      protection: '100%',
      description: 'Quantum-resistant encryption protects against future quantum computing threats'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Protecting sensitive financial data from quantum computing threats',
      solution: 'Implemented quantum-resistant encryption and AI threat detection',
      results: ['100% quantum-safe encryption', '99.9% threat detection accuracy', 'Zero security incidents'],
      logo: 'GFC'
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance and patient data protection',
      solution: 'Deployed zero-trust architecture with AI-powered monitoring',
      results: ['100% HIPAA compliance', '95% reduction in false positives', '60% faster incident response'],
      logo: 'HTS'
    },
    {
      company: 'TechStart Inc',
      industry: 'Technology',
      challenge: 'Protecting intellectual property and customer data',
      solution: 'Comprehensive security suite with quantum-resistant algorithms',
      results: ['Zero data breaches', '99.8% threat prevention', '50% reduction in security costs'],
      logo: 'TSI'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Quantum Security Suite
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Next-generation security powered by quantum-resistant encryption and AI threat intelligence. 
              Protect your organization against current and future cyber threats with military-grade security.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Quantum-Resistant</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Lock className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Zero-Trust</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (302) 464-0950
              </a>
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
              Comprehensive security solutions powered by quantum computing and artificial intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-300">
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

      {/* Security Capabilities */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Security Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Multi-layered security approach covering all aspects of your digital infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityCapabilities.map((category, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Threat Protection
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Industry-leading protection rates against the most sophisticated cyber threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatProtection.map((threat, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{threat.protection}</div>
                <h3 className="text-xl font-bold text-white mb-3">{threat.threat}</h3>
                <p className="text-gray-300 text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Compliance & Certifications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the highest security standards and regulatory requirements
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-4 text-center">
                <div className="text-3xl mb-2">{standard.icon}</div>
                <h4 className="text-white font-medium text-sm mb-1">{standard.name}</h4>
                <p className="text-green-400 text-xs">{standard.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Security Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to secure your organization at any scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card-enhanced hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full neon-button-enhanced py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Security Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how organizations are protecting their data with our quantum security suite
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{study.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Secure Your Future with Quantum Security
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 200+ organizations already protected by our AI Quantum Security Suite. 
            Get military-grade security for your most sensitive data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumSecuritySuitePage;