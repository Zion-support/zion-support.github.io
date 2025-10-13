import { ArrowRight, Shield, CheckCircle, Zap, Users, Lock, Globe, Database, AlertTriangle, Eye, Settings, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "Firewall Management",
      description: "Advanced firewall protection with real-time monitoring and automated rule updates",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Intrusion Detection",
      description: "AI-powered intrusion detection system that identifies and blocks suspicious activities",
      icon: <Eye className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vulnerability Scanning",
      description: "Automated vulnerability scanning and assessment to identify security weaknesses",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Incident Response",
      description: "24/7 incident response team ready to handle security breaches and threats",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure compliance with industry standards like GDPR, HIPAA, and SOC 2",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security Analytics",
      description: "Advanced analytics and reporting to track security metrics and trends",
      icon: <Database className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$599",
      period: "/month",
      description: "Essential security protection for small businesses",
      features: [
        "Basic firewall protection",
        "Weekly vulnerability scans",
        "Email support",
        "Standard monitoring",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Comprehensive security solution for growing businesses",
      features: [
        "Advanced firewall management",
        "Daily vulnerability scans",
        "Intrusion detection system",
        "Priority support",
        "Advanced reporting",
        "Compliance monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Enterprise-grade firewall",
        "Real-time vulnerability scanning",
        "24/7 incident response",
        "Dedicated security team",
        "Custom compliance reporting",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: "Network Security",
      description: "Protect your network infrastructure with advanced firewall and monitoring",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Endpoint Protection",
      description: "Secure all devices and endpoints with comprehensive protection",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Data Encryption",
      description: "Encrypt sensitive data both in transit and at rest",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Access Control",
      description: "Manage user access and permissions with advanced controls",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Enterprise Security Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Zion Security Shield provides enterprise-grade security solutions including firewall management, intrusion detection, vulnerability scanning, and 24/7 incident response."
        />
        <meta
          name="keywords"
          content="cybersecurity, firewall management, intrusion detection, vulnerability scanning, incident response, security monitoring, compliance"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Security
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Shield
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade security solutions. Our comprehensive security platform 
              provides firewall management, intrusion detection, and 24/7 monitoring to keep your data safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced security solutions designed to protect your business from evolving threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
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

        {/* Security Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete security coverage for all aspects of your business infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs and risk profile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 relative ${
                    plan.popular 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20 scale-105' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Get professional security protection now.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-mono">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-mono">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
