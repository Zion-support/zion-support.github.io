import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Zap, 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Lock,
  AlertTriangle,
  Activity,
  Globe,
  Database,
  Cpu,
  Network,
  DollarSign,
  Target,
  Users
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionCyberShieldProPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms continuously monitor network traffic, user behavior, and system activities to detect and prevent sophisticated cyber attacks in real-time.",
      benefit: "Detect threats 99.9% faster"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security operations center (SOC) with AI-enhanced monitoring, automated incident response, and expert security analysts ready to respond to threats.",
      benefit: "Zero-downtime security coverage"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Endpoint Protection",
      description: "Comprehensive endpoint security with behavioral analysis, ransomware protection, device control, and application whitelisting to secure all devices.",
      benefit: "Block 100% of known malware"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security Analytics",
      description: "Deep packet inspection, network segmentation, and traffic analysis with AI-powered anomaly detection to identify and block malicious network activities.",
      benefit: "Prevent data breaches instantly"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with identity verification, least privilege access, and continuous authentication for maximum security posture.",
      benefit: "Reduce attack surface by 80%"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Automated Incident Response",
      description: "AI-driven incident response with automated threat containment, forensic analysis, and recovery procedures to minimize damage and restore operations quickly.",
      benefit: "Reduce incident response time by 90%"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 25 endpoints",
        "Basic threat detection",
        "Email security",
        "24/7 monitoring",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "Up to 100 endpoints",
        "Advanced AI threat detection",
        "Full security suite",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations and critical infrastructure",
      features: [
        "Unlimited endpoints",
        "Full AI security suite",
        "Dedicated SOC team",
        "White-label options",
        "Custom security policies",
        "Compliance reporting",
        "24/7 phone support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const securityFeatures = [
    { name: "Threat Intelligence", logo: "🛡️" },
    { name: "Vulnerability Scanning", logo: "🔍" },
    { name: "Penetration Testing", logo: "⚔️" },
    { name: "Security Training", logo: "🎓" },
    { name: "Compliance Management", logo: "📋" },
    { name: "Incident Response", logo: "🚨" },
    { name: "Forensic Analysis", logo: "🔬" },
    { name: "Risk Assessment", logo: "📊" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEOOptimizer 
        title="Zion Cyber Shield Pro - AI-Powered Cybersecurity Platform | Zion Tech Group"
        description="Advanced AI-powered cybersecurity platform with 24/7 monitoring, threat detection, and automated incident response. Protect your business from cyber attacks with enterprise-grade security."
        keywords="cybersecurity, AI security, threat detection, network security, endpoint protection, cyber defense, security monitoring"
        canonicalUrl="https://ziontechgroup.com/zion-cyber-shield-pro"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-8">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-medium">AI-Powered Cybersecurity</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Zion Cyber Shield Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced AI-powered cybersecurity platform with 24/7 monitoring, threat detection, 
              and automated incident response to protect your business from sophisticated cyber attacks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity protection powered by artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm text-green-400 font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security-First Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your organization. All plans include our core AI protection features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/50 ring-2 ring-red-500/20' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
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
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'border border-red-500 text-red-300 hover:bg-red-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Security Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cybersecurity protection with advanced threat detection and response capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.logo}
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of organizations using Zion Cyber Shield Pro to defend against cyber threats and secure their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a> or <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionCyberShieldProPage;
