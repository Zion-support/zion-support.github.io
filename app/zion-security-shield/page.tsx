import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, Users, Award, Zap, Target, Globe, Smartphone, Mail, Phone, Brain, Database, Settings, Bell, RefreshCw, Play, Pause, Stop, Volume2, Camera, Image, Video, Music, Headphones, Mic, MicOff, VideoOff, WifiOff, Battery, Wifi as WifiIcon, Signal, SignalHigh, SignalLow, SignalZero, SignalMedium, SignalMax, SignalMin, SignalNone, SignalOne, SignalTwo, SignalThree, SignalFour, SignalFive, SignalSix, SignalSeven, SignalEight, SignalNine, SignalTen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "ML algorithms", "Behavioral analysis", "Threat intelligence"]
    },
    {
      title: "Automated Response",
      description: "Instant automated responses to security incidents with customizable playbooks.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Instant response", "Custom playbooks", "Incident isolation", "Auto-remediation"]
    },
    {
      title: "Compliance Reports",
      description: "Automated compliance reporting for GDPR, HIPAA, SOX, and other regulations.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["GDPR compliance", "HIPAA reporting", "SOX compliance", "Custom reports"]
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring with our expert security operations center.",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["24/7 SOC", "Expert analysts", "Threat hunting", "Incident response"]
    },
    {
      title: "Vulnerability Scanning",
      description: "Continuous vulnerability assessment and penetration testing services.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Continuous scanning", "Penetration testing", "Risk assessment", "Remediation guidance"]
    },
    {
      title: "Incident Management",
      description: "Comprehensive incident response and management with detailed forensics.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Incident tracking", "Forensic analysis", "Evidence collection", "Recovery planning"]
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Incident Response", icon: <Zap className="w-6 h-6" /> },
    { number: "35%", label: "Reduction in Security Costs", icon: <Target className="w-6 h-6" /> },
    { number: "1,800+", label: "Protected Organizations", icon: <Users className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard reports",
        "1TB log storage",
        "Basic compliance"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced threat detection",
        "Priority support",
        "Custom reports",
        "10TB log storage",
        "Full compliance suite",
        "API access",
        "Custom playbooks"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Premium threat detection",
        "24/7 support",
        "White-label options",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated SOC team",
        "On-premise deployment"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced AI Cybersecurity Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield - the leading AI-powered cybersecurity platform. Advanced threat detection, automated response, compliance reporting, and 24/7 monitoring. Start your free trial today."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, security monitoring, compliance, incident response, vulnerability scanning, AI security, cyber defense, security automation, SOC services"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                  <Shield className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-red-400 text-sm font-medium">#1 Cybersecurity Platform</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Security
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 animate-pulse">
                    {" "}Shield
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Advanced AI-powered cybersecurity protection with real-time threat detection, automated incident response, 
                  and comprehensive compliance monitoring for enterprise-grade security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>

                {/* Security Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {securityStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Security Dashboard</h3>
                    <p className="text-gray-300">Real-time threat monitoring</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">System Status</span>
                        <span className="text-green-400 text-sm">Secure</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Threats Blocked</span>
                        <span className="text-yellow-400 text-sm">1,247 today</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Vulnerabilities</span>
                        <span className="text-red-400 text-sm">3 detected</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity protection powered by artificial intelligence and machine learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Security Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                    plan.popular 
                      ? 'border-red-400/50 shadow-2xl shadow-red-500/20 scale-105' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a cyber attack. Start your free trial today and protect your business 
              with enterprise-grade security powered by AI.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-red-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-red-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}