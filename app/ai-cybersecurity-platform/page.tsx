import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Lock,
  Users,
  BarChart3,
  Network,
  Bug,
  Eye,
  AlertTriangle,
  Zap,
  Globe,
  Clock,
  DollarSign,
  Target,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AiCybersecurityPlatformPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent sophisticated cyber threats in real-time.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access.'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to identify anomalies and potential security breaches.'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for data at rest, in transit, and in use with quantum-resistant algorithms.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Automated Response',
      description: 'Instant automated threat response with containment, isolation, and remediation capabilities.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Global Threat Intelligence',
      description: 'Real-time threat intelligence from global sources with predictive security analytics.'
    }
  ];

  const services = [
    {
      title: 'Threat Detection & Prevention',
      description: 'AI-powered threat detection with 99.9% accuracy in identifying and blocking malicious activities.',
      price: '$5,000/month',
      features: ['Real-time monitoring', 'Behavioral analysis', 'Threat hunting', 'Incident response']
    },
    {
      title: 'Vulnerability Management',
      description: 'Comprehensive vulnerability scanning and management with automated patching recommendations.',
      price: '$3,500/month',
      features: ['Asset discovery', 'Vulnerability scanning', 'Risk assessment', 'Patch management']
    },
    {
      title: 'Identity & Access Management',
      description: 'Advanced IAM solutions with multi-factor authentication and privileged access management.',
      price: '$4,200/month',
      features: ['SSO integration', 'MFA enforcement', 'PAM solutions', 'Access governance']
    },
    {
      title: 'Data Protection & Privacy',
      description: 'Comprehensive data protection with DLP, encryption, and privacy compliance tools.',
      price: '$6,800/month',
      features: ['Data classification', 'DLP policies', 'Encryption management', 'Privacy controls']
    },
    {
      title: 'Security Operations Center',
      description: '24/7 SOC services with AI-powered monitoring and expert security analysts.',
      price: '$12,000/month',
      features: ['24/7 monitoring', 'Expert analysts', 'Incident response', 'Threat intelligence']
    },
    {
      title: 'Compliance & Governance',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      price: '$7,500/month',
      features: ['Compliance mapping', 'Audit trails', 'Policy management', 'Reporting tools']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Reduce security costs by 40% with automated threat detection and response'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: 'Faster Detection',
      description: 'Detect threats 10x faster than traditional security solutions'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Compliance Assurance',
      description: 'Ensure 100% compliance with industry regulations and standards'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: '24/7 Protection',
      description: 'Round-the-clock security monitoring and automated threat response'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic threat detection',
        'Up to 100 endpoints',
        'Email security',
        'Basic reporting',
        'Email support',
        'Standard compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Advanced AI threat detection',
        'Up to 1,000 endpoints',
        'Full security suite',
        'Advanced analytics',
        'Priority support',
        'Advanced compliance',
        'Custom integrations',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI models',
        'Unlimited endpoints',
        'Complete security platform',
        'Custom analytics',
        '24/7 dedicated support',
        'Full compliance suite',
        'White-label solution',
        'On-premise deployment',
        'Dedicated SOC team'
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Healthcare data protection standards' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance' },
    { name: 'PCI DSS', description: 'Payment Card Industry security standards' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'SOC 2', description: 'Service Organization Control compliance' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Platform - Advanced Threat Protection & Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with our AI-powered cybersecurity platform. Advanced threat detection, zero trust architecture, and 99.9% accuracy. Starting at $2,999/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security platform, zero trust, vulnerability management, compliance" />
        <meta property="og:title" content="AI Cybersecurity Platform - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered cybersecurity platform with threat detection and zero trust architecture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with next-generation AI-powered cybersecurity. Advanced threat detection, 
                zero trust architecture, and automated response for comprehensive security coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Threat Detection Accuracy</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Detection</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Next-generation AI-powered security features
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete cybersecurity solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-lg mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Meet all regulatory requirements with automated compliance management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Security Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results and industry-leading technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security solutions for every business size
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free security assessment and discover how AI can protect your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecurityPlatformPage;