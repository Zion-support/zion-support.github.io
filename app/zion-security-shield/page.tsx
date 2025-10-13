import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Globe, 
  ArrowRight,
  Star,
  Download,
  Play,
  Settings,
  Activity,
  Users,
  Clock,
  FileText,
  Smartphone,
  Server,
  Database
} from 'lucide-react';

const ZionSecurityShield = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  const features = [
    {
      title: "Real-time Threat Detection",
      description: "Advanced AI algorithms detect and prevent security threats in real-time",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Multi-Layer Protection",
      description: "Comprehensive security covering network, application, and data layers",
      icon: <Lock className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Automated compliance checks for GDPR, HIPAA, SOC2, and other standards",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Security Operations",
      description: "Round-the-clock monitoring and incident response by security experts",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support",
        "Up to 10 users"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced threat detection",
        "Multi-layer protection",
        "Compliance monitoring",
        "Real-time alerts",
        "Priority support",
        "Up to 50 users",
        "Custom security policies",
        "API access"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI-powered security suite",
        "24/7 SOC monitoring",
        "Custom compliance frameworks",
        "Dedicated security team",
        "White-label solution",
        "Unlimited users",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const securityStats = [
    { label: "Threats Blocked", value: "2.5M+", icon: <Shield className="w-6 h-6" /> },
    { label: "Uptime", value: "99.99%", icon: <Activity className="w-6 h-6" /> },
    { label: "Response Time", value: "< 30s", icon: <Clock className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
  ];

  const complianceStandards = [
    { name: "GDPR", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "HIPAA", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "SOC 2", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "ISO 27001", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "PCI DSS", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "NIST", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion Security Shield - the most advanced AI-powered cybersecurity platform. Real-time threat detection, compliance monitoring, and 24/7 protection. Starting at $49/month." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, compliance, data protection, network security, AI security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-red-400/30 mb-6">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">AI-Powered Cybersecurity Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="holographic">Zion Security Shield</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Protect your business with the most advanced AI-powered cybersecurity platform. 
                Real-time threat detection, compliance monitoring, and 24/7 protection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => setIsDemoMode(!isDemoMode)}
                  className="neon-button neon-red px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isDemoMode ? 'Exit Demo' : 'View Security Demo'}
                </button>
                <Link
                  to="/contact"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Protected
                </Link>
              </div>

              {/* Security Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {securityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center text-red-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Security Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from cyber threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        {isDemoMode && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Security Dashboard</h3>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">
                      Protected
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Threats Blocked</h4>
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-2">1,247</div>
                    <div className="text-sm text-gray-400">Last 24 hours</div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Security Score</h4>
                      <Activity className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">98.5%</div>
                    <div className="text-sm text-gray-400">Excellent</div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Active Users</h4>
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
                    <div className="text-sm text-gray-400">Protected</div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Response Time</h4>
                      <Clock className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">12s</div>
                    <div className="text-sm text-gray-400">Average</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Threat Activity</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                          <span className="text-white">Malware detected</span>
                        </div>
                        <span className="text-red-400 text-sm">Blocked</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-yellow-400" />
                          <span className="text-white">Suspicious login</span>
                        </div>
                        <span className="text-yellow-400 text-sm">Monitoring</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-white">System secure</span>
                        </div>
                        <span className="text-green-400 text-sm">Protected</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Compliance Status</h4>
                    <div className="space-y-3">
                      {complianceStandards.map((standard, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-300">{standard.name}</span>
                          <div className="flex items-center space-x-2">
                            {standard.icon}
                            <span className="text-green-400 text-sm">{standard.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Plans for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative glass rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-400/50 neon-glow' 
                    : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    Get Protected
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't Wait for a Security Breach
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already protected by Zion Security Shield.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="neon-button neon-red px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Security Audit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSecurityShield;
