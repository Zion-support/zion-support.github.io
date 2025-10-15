import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Award, 
  Target, 
  Mail, 
  Phone, 
  Globe,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Headphones,
  Lock,
  Eye,
  Search,
  Activity,
  Bug,
  Key,
  Server,
  Network,
  Wifi,
  HardDrive,
  Cloud,
  UserCheck,
  FileCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  TrendingUp
} from 'lucide-react';

const ZionAiCybersecurityProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Zero false positives', 'Automated response']
    },
    {
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to identify anomalies and potential security breaches.',
      icon: <Activity className="w-6 h-6" />,
      benefits: ['User behavior analysis', 'Anomaly detection', 'Risk scoring', 'Predictive alerts']
    },
    {
      title: 'Automated Incident Response',
      description: 'Instantly respond to security incidents with automated containment, investigation, and remediation.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Instant response', 'Automated containment', 'Forensic analysis', 'Recovery automation']
    },
    {
      title: 'Advanced Endpoint Protection',
      description: 'Comprehensive endpoint security with AI-driven malware detection and prevention across all devices.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Multi-device protection', 'Malware prevention', 'Device management', 'Policy enforcement']
    },
    {
      title: 'Network Security Monitoring',
      description: 'Continuous network monitoring with AI-powered traffic analysis and intrusion detection.',
      icon: <Network className="w-6 h-6" />,
      benefits: ['24/7 monitoring', 'Traffic analysis', 'Intrusion detection', 'Bandwidth optimization']
    },
    {
      title: 'Compliance & Reporting',
      description: 'Automated compliance monitoring and comprehensive security reporting for regulatory requirements.',
      icon: <FileCheck className="w-6 h-6" />,
      benefits: ['GDPR compliance', 'SOC 2 reporting', 'Audit trails', 'Custom reports']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        '24/7 monitoring',
        'Email support',
        'Basic reporting'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Up to 500 endpoints',
        'Advanced AI protection',
        'Full security suite',
        'Real-time response',
        'Priority support',
        'Custom policies',
        'API access',
        'Advanced analytics'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited endpoints',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'On-premise deployment',
        'SLA guarantee',
        'Custom development'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Financial Services Corp',
      role: 'CISO',
      content: 'Zion AI Cybersecurity Pro prevented 3 major attacks in the first month. The AI threat detection is incredibly accurate and the response time is unmatched.',
      rating: 5,
      avatar: 'JA'
    },
    {
      name: 'Michael Torres',
      company: 'Healthcare Solutions',
      role: 'IT Director',
      content: 'The automated incident response saved us from a potential data breach. The system contained the threat within seconds and provided detailed forensic analysis.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Kim',
      company: 'E-commerce Platform',
      role: 'Security Manager',
      content: 'The behavioral analytics helped us identify an insider threat before any damage was done. The AI insights are invaluable for our security posture.',
      rating: 5,
      avatar: 'SK'
    }
  ];

  const securityMetrics = [
    {
      title: 'Threats Blocked',
      value: '2.3M+',
      description: 'Malicious attacks prevented daily',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Detection Accuracy',
      value: '99.9%',
      description: 'AI threat detection accuracy rate',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Response Time',
      value: '< 1s',
      description: 'Average threat response time',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Uptime SLA',
      value: '99.99%',
      description: 'System availability guarantee',
      icon: <Activity className="w-8 h-8" />
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', status: 'Compliant', icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> },
    { name: 'SOC 2 Type II', status: 'Certified', icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> },
    { name: 'ISO 27001', status: 'Certified', icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> },
    { name: 'HIPAA', status: 'Compliant', icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> },
    { name: 'PCI DSS', status: 'Compliant', icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> },
    { name: 'NIST', status: 'Aligned', icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Pro - Advanced AI-Powered Security Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion AI Cybersecurity Pro. Advanced AI threat detection, automated incident response, and comprehensive security monitoring. Start your free trial today!" />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, endpoint protection, network security, compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion AI Cybersecurity Pro",
            "description": "AI-powered cybersecurity platform with advanced threat detection and automated incident response",
            "url": "https://ziontechgroup.com/zion-ai-cybersecurity-pro",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web, Windows, macOS, Linux",
            "offers": {
              "@type": "Offer",
              "price": "499",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Security Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion <span className="text-cyan-400">AI Cybersecurity Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your business with the most advanced AI-powered cybersecurity platform. 
                Detect threats in real-time, respond instantly, and maintain compliance with 99.9% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free 30-Day Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Monitor className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Security Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {securityMetrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                    <div className="text-gray-300 text-sm font-medium mb-1">{metric.title}</div>
                    <div className="text-gray-400 text-xs">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to protect your business from evolving cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet regulatory requirements with built-in compliance monitoring and automated reporting.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-3">
                    {standard.icon}
                  </div>
                  <div className="text-white font-semibold mb-1">{standard.name}</div>
                  <div className="text-cyan-400 text-sm">{standard.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs. All plans include 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 relative' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Security Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how security teams are protecting their organizations with Zion AI Cybersecurity Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of organizations already using Zion AI Cybersecurity Pro to protect their digital assets. 
                Start your free 30-day trial today - no credit card required.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone Support</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                  <p className="text-cyan-400">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiCybersecurityProPage;