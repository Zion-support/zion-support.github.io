import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Lock, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  BarChart3,
  Target,
  FileText,
  Smartphone,
  Monitor,
  Activity,
  PieChart,
  LineChart,
  Database,
  Settings,
  Bell,
  MessageSquare,
  Upload,
  Download,
  Search,
  Filter,
  Users,
  Key,
  Bug,
  Network,
  Server,
  Cloud,
  HardDrive
} from 'lucide-react';

const AICybersecurityPlatformPage: React.FC = () => {
  const features = [
    {
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Behavioral analysis', 'Predictive threat modeling']
    },
    {
      title: 'Automated Response',
      description: 'Instant automated responses to security incidents with minimal human intervention.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Auto-quarantine', 'Incident response', 'Threat isolation', 'Recovery automation']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and assessment across all your systems.',
      icon: <Search className="w-6 h-6" />,
      benefits: ['Continuous scanning', 'Risk prioritization', 'Patch management', 'Compliance checking']
    },
    {
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting to understand your security posture.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Security dashboards', 'Threat intelligence', 'Risk metrics', 'Compliance reports']
    },
    {
      title: 'Identity Management',
      description: 'Secure identity and access management with multi-factor authentication.',
      icon: <Key className="w-6 h-6" />,
      benefits: ['SSO integration', 'MFA enforcement', 'Access control', 'User provisioning']
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security monitoring and protection.',
      icon: <Network className="w-6 h-6" />,
      benefits: ['Firewall management', 'Intrusion detection', 'Traffic analysis', 'DDoS protection']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Email security',
        'Standard support',
        'Monthly reports',
        '1 admin user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 500 devices',
        'Advanced AI detection',
        'Full security suite',
        'Priority support',
        'Real-time reports',
        '5 admin users',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited devices',
        'All AI features',
        'Custom security policies',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities',
      icon: <Bug className="w-8 h-8" />,
      features: ['Web application testing', 'Network penetration', 'Social engineering', 'Physical security']
    },
    {
      title: 'Security Auditing',
      description: 'Thorough security audits and compliance assessments',
      icon: <FileText className="w-8 h-8" />,
      features: ['Compliance checking', 'Policy review', 'Risk assessment', 'Remediation planning']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['24/7 monitoring', 'Rapid response', 'Forensic analysis', 'Recovery assistance']
    },
    {
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team',
      icon: <Users className="w-8 h-8" />,
      features: ['Phishing simulation', 'Security awareness', 'Best practices', 'Compliance training']
    }
  ];

  const threatTypes = [
    { name: 'Malware', icon: <Bug className="w-6 h-6" />, description: 'Advanced malware detection and removal' },
    { name: 'Phishing', icon: <MessageSquare className="w-6 h-6" />, description: 'Email and social engineering protection' },
    { name: 'DDoS', icon: <Network className="w-6 h-6" />, description: 'Distributed denial of service protection' },
    { name: 'Ransomware', icon: <Lock className="w-6 h-6" />, description: 'Ransomware prevention and recovery' },
    { name: 'Insider Threats', icon: <Users className="w-6 h-6" />, description: 'Internal threat monitoring and prevention' },
    { name: 'Zero-Day', icon: <Eye className="w-6 h-6" />, description: 'Unknown threat detection and mitigation' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Platform - Advanced Threat Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with our AI-powered cybersecurity platform. Advanced threat detection, automated response, and comprehensive security analytics for modern enterprises." />
        <meta name="keywords" content="cybersecurity, AI security, threat detection, security analytics, vulnerability assessment, incident response, network security" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">AI-Powered Cybersecurity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity <span className="text-red-400">Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your business with our advanced AI-powered cybersecurity platform. 
              Detect, prevent, and respond to cyber threats with cutting-edge machine learning and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">5min</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
                <div className="text-gray-300 text-sm">Threats Blocked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Protection Against All Threat Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform protects against the full spectrum of cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {threatTypes.map((threat, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {threat.icon}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {threat.name}
                  </h3>
                  
                  <p className="text-xs text-gray-300">
                    {threat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions powered by artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond the platform, we offer expert security services to keep your business protected.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-red-900/50 border border-red-500/30 rounded-xl p-8 hover:border-red-400/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your security needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-red-500/50 ring-2 ring-red-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Don't wait for a breach. Get comprehensive AI-powered cybersecurity protection today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25"
                >
                  <span>Get Security Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ Free security assessment • ✓ 30-day free trial • ✓ No setup fees</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICybersecurityPlatformPage;