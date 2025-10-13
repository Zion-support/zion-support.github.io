import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, Zap, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection that identifies and blocks malicious activities in real-time"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Trust Security",
      description: "Implement zero-trust architecture with continuous verification and least-privilege access"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring with instant alerts and automated responses"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOC 2, and other regulatory standards"
    }
  ];

  const securityFeatures = [
    "Real-time threat detection and response",
    "AI-powered behavioral analysis",
    "Automated incident response",
    "Multi-factor authentication (MFA)",
    "End-to-end encryption",
    "Vulnerability scanning and patching",
    "Security awareness training",
    "Compliance reporting and auditing"
  ];

  const pricingTiers = [
    {
      name: "Basic",
      price: "$199",
      period: "/month",
      features: [
        "Up to 50 users",
        "Basic threat detection",
        "Email support",
        "Standard compliance reports",
        "1-year data retention"
      ]
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      features: [
        "Up to 200 users",
        "Advanced threat detection",
        "Priority support (24/7)",
        "Advanced compliance reports",
        "3-year data retention",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      features: [
        "Unlimited users",
        "Enterprise threat detection",
        "Dedicated security team",
        "Custom compliance reports",
        "Unlimited data retention",
        "Full API access",
        "White-label solution",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Enterprise Cybersecurity Platform</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. Advanced threat detection, zero-trust security, and compliance management for modern enterprises."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, zero-trust security, compliance management, enterprise security, data protection"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Zion Security
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {" "}Shield
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity. Advanced threat detection, 
              zero-trust security architecture, and automated compliance management for modern organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Security Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive protection against evolving cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Capabilities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Security Suite
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Security Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Threat Detection Rate</span>
                    <span className="text-red-400 font-semibold">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">False Positive Rate</span>
                    <span className="text-red-400 font-semibold">0.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-red-400 font-semibold">&lt; 30 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-red-400 font-semibold">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance Coverage</span>
                    <span className="text-red-400 font-semibold">15+ Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible security solutions for organizations of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    tier.popular 
                      ? 'border-red-400 bg-gradient-to-br from-red-500/20 to-orange-500/20' 
                      : 'border-white/20 hover:border-red-400/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      tier.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Protect your organization with Zion Security Shield.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Security Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
