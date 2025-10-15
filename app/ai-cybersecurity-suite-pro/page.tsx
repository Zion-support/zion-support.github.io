import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Zap,
  BarChart3,
  Clock,
  TrendingUp,
  Globe,
  Smartphone,
  Database,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Network,
  FileText,
  Settings,
  Users,
  Activity
} from 'lucide-react';

const AICybersecuritySuiteProPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['99.9% threat detection rate', 'Zero false positives', 'Real-time protection']
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      title: 'Endpoint Security',
      description: 'Comprehensive protection for all devices and endpoints across your network',
      benefits: ['Multi-device support', 'Behavioral analysis', 'Automatic remediation']
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      title: 'Network Monitoring',
      description: 'Continuous monitoring and analysis of network traffic for suspicious activities',
      benefits: ['24/7 monitoring', 'Anomaly detection', 'Traffic analysis']
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      title: 'Incident Response',
      description: 'Automated incident detection, analysis, and response with AI-powered forensics',
      benefits: ['Instant alerts', 'Automated response', 'Forensic analysis']
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning and patch management across all systems',
      benefits: ['Continuous scanning', 'Priority-based patching', 'Compliance tracking']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting for security posture assessment and improvement',
      benefits: ['Risk assessment', 'Compliance reporting', 'Trend analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        '24/7 monitoring',
        'Email support',
        'Basic reporting'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and mid-size companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI threat detection',
        'Multi-layer security',
        'Network monitoring',
        'Incident response',
        'Priority support',
        'Advanced analytics',
        'Compliance tools'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited endpoints',
        'Full AI security suite',
        'Custom security policies',
        'Advanced threat hunting',
        'Dedicated security team',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const securityLayers = [
    {
      title: 'Network Security',
      description: 'Advanced firewall, intrusion detection, and network segmentation',
      icon: <Network className="w-8 h-8 text-blue-400" />,
      features: ['Next-gen firewall', 'Intrusion prevention', 'Network segmentation', 'VPN management']
    },
    {
      title: 'Endpoint Protection',
      description: 'Comprehensive security for all devices and workstations',
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      features: ['Antivirus & antimalware', 'Device encryption', 'Application control', 'USB protection']
    },
    {
      title: 'Email Security',
      description: 'Advanced email threat protection and spam filtering',
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      features: ['Phishing protection', 'Spam filtering', 'Email encryption', 'Attachment scanning']
    },
    {
      title: 'Data Protection',
      description: 'Sensitive data discovery, classification, and protection',
      icon: <Database className="w-8 h-8 text-red-400" />,
      features: ['Data discovery', 'Classification', 'Encryption', 'Access controls']
    },
    {
      title: 'Identity Management',
      description: 'Multi-factor authentication and identity verification',
      icon: <Users className="w-8 h-8 text-orange-400" />,
      features: ['MFA enforcement', 'SSO integration', 'Privileged access', 'Identity analytics']
    },
    {
      title: 'Compliance & Governance',
      description: 'Automated compliance monitoring and reporting',
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      features: ['GDPR compliance', 'SOC 2 reporting', 'Audit trails', 'Policy management']
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'TechCorp Solutions',
      role: 'CISO',
      content: 'The AI cybersecurity suite has transformed our security posture. We\'ve reduced security incidents by 95% and improved our compliance scores significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      company: 'Global Finance Inc.',
      role: 'Security Director',
      content: 'The automated threat detection and response capabilities are outstanding. Our security team can now focus on strategic initiatives instead of manual monitoring.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Robert Kim',
      company: 'Healthcare Systems',
      role: 'IT Security Manager',
      content: 'The compliance and governance features have made our HIPAA compliance much easier to manage. The automated reporting saves us hours every week.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' },
    { name: 'NIST', status: 'Aligned' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Advanced Enterprise Security | Zion Tech Group</title>
        <meta name="description" content="Protect your organization with our AI-powered cybersecurity suite. Advanced threat detection, endpoint security, network monitoring, and compliance management." />
        <meta name="keywords" content="AI cybersecurity, enterprise security, threat detection, endpoint protection, network monitoring, compliance management, security analytics" />
        <meta property="og:title" content="AI Cybersecurity Suite Pro - Advanced Enterprise Security" />
        <meta property="og:description" content="Protect your organization with our AI-powered cybersecurity suite. Advanced threat detection, endpoint security, and compliance management." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-suite-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade AI Security
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {' '}Suite Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Protect your organization with our comprehensive AI-powered cybersecurity suite. 
              Advanced threat detection, automated response, and compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-red-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Incident Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-300 text-sm">Protected Orgs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Layer Security Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive security suite provides defense in depth across all attack vectors 
              with AI-powered threat detection and automated response.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
                  {layer.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {layer.description}
                </p>
                <ul className="space-y-2">
                  {layer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to stay ahead of evolving cyber threats 
              and protect your organization's critical assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Compliance Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements and industry standards with our comprehensive compliance management tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{standard.name.charAt(0)}</span>
                </div>
                <div className="text-gray-300 font-medium text-sm mb-1">{standard.name}</div>
                <div className="text-green-400 text-xs font-semibold">{standard.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security solution that fits your organization's needs and budget. 
              All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-red-500 bg-slate-700/50' : ''
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
                      : 'border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations worldwide are protecting their assets with our AI cybersecurity suite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-red-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Organization Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Protect your organization with our AI-powered cybersecurity suite 
            and stay ahead of evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Security Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AICybersecuritySuiteProPage;