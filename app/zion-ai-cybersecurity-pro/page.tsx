import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Brain,
  Target,
  Activity,
  Users,
  Database,
  Smartphone
} from 'lucide-react';

const ZionAICybersecurityProPage: React.FC = () => {
  const features = [
    {
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time.',
      icon: Brain,
      benefits: ['Real-time Monitoring', 'Behavioral Analysis', 'Anomaly Detection', 'Predictive Security']
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access.',
      icon: Lock,
      benefits: ['Identity Verification', 'Access Control', 'Device Trust', 'Network Segmentation']
    },
    {
      title: 'Advanced Endpoint Protection',
      description: 'Comprehensive protection for all endpoints including laptops, mobile devices, and servers.',
      icon: Smartphone,
      benefits: ['Malware Prevention', 'Device Encryption', 'Remote Wipe', 'Compliance Monitoring']
    },
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure with advanced firewalls and intrusion detection.',
      icon: Globe,
      benefits: ['Firewall Management', 'Intrusion Detection', 'Traffic Analysis', 'VPN Security']
    },
    {
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with actionable insights.',
      icon: Activity,
      benefits: ['Threat Intelligence', 'Security Dashboards', 'Incident Reports', 'Compliance Reports']
    },
    {
      title: '24/7 Security Operations',
      description: 'Round-the-clock security monitoring and incident response by expert analysts.',
      icon: Users,
      benefits: ['SOC Services', 'Incident Response', 'Threat Hunting', 'Security Consulting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Basic security protection for small businesses',
      features: [
        'AI threat detection',
        'Endpoint protection',
        'Basic firewall',
        'Email security',
        '24/7 monitoring',
        'Up to 25 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Advanced security for growing businesses',
      features: [
        'Advanced AI detection',
        'Zero trust architecture',
        'Network security',
        'Security analytics',
        'Incident response',
        'Up to 100 users',
        'Compliance reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete security solution for large organizations',
      features: [
        'Full AI security suite',
        'Custom security policies',
        'Dedicated SOC team',
        'Advanced threat hunting',
        'Custom integrations',
        'Unlimited users',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ];

  const securityStats = [
    {
      title: 'Threats Blocked',
      description: 'Millions of cyber threats prevented daily',
      icon: Shield,
      stat: '99.9%'
    },
    {
      title: 'Response Time',
      description: 'Average incident response time',
      icon: Zap,
      stat: '< 5 min'
    },
    {
      title: 'Uptime',
      description: 'Security system availability',
      icon: Clock,
      stat: '99.99%'
    },
    {
      title: 'Compliance',
      description: 'Meet industry security standards',
      icon: Award,
      stat: '100%'
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', certified: true },
    { name: 'ISO 27001', certified: true },
    { name: 'GDPR', certified: true },
    { name: 'HIPAA', certified: true },
    { name: 'PCI DSS', certified: true },
    { name: 'NIST', certified: true },
    { name: 'CIS Controls', certified: true },
    { name: 'FedRAMP', certified: true }
  ];

  const threatTypes = [
    { name: 'Malware', blocked: '99.8%', icon: AlertTriangle },
    { name: 'Phishing', blocked: '99.5%', icon: Eye },
    { name: 'Ransomware', blocked: '99.9%', icon: Lock },
    { name: 'DDoS', blocked: '99.7%', icon: Globe },
    { name: 'Insider Threats', blocked: '98.5%', icon: Users },
    { name: 'Zero-day', blocked: '97.2%', icon: Brain }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Pro - Advanced AI Security Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity. Advanced threat detection, zero trust architecture, and 24/7 security monitoring to keep your data safe." />
        <meta name="keywords" content="cybersecurity, AI security, threat detection, zero trust, endpoint protection, network security, SOC services, compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-pro" />
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
              Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Cybersecurity Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your business with the most advanced AI-powered cybersecurity platform. 
              Detect, prevent, and respond to cyber threats with enterprise-grade security that adapts to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-red-600 hover:to-orange-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-red-400 hover:text-slate-900 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Shield className="w-5 h-5" />
              </Link>
            </div>

            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {securityStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.stat}</div>
                    <div className="text-gray-300 text-sm">{stat.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Security Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered security features to protect every aspect of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Threat Protection Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered system blocks millions of threats daily with industry-leading accuracy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threatTypes.map((threat, index) => {
                const IconComponent = threat.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{threat.name}</h3>
                      </div>
                      <div className="text-2xl font-bold text-green-400">{threat.blocked}</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-orange-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: threat.blocked }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the highest security standards and compliance requirements
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{standard.name}</div>
                  <div className="text-green-400 text-xs mt-1">Certified</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible security solutions to protect businesses of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-red-500/50 ring-2 ring-red-500/20 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    <span>Get Protected</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Don't wait for a cyber attack. Get comprehensive AI-powered security protection 
                and sleep peacefully knowing your business is safe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-red-600 hover:to-orange-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  <span>Get Security Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-red-400 text-red-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-red-400 hover:text-slate-900 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <Shield className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ Free security assessment • ✓ 30-day money-back guarantee • ✓ 24/7 support • ✓ No setup fees</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAICybersecurityProPage;