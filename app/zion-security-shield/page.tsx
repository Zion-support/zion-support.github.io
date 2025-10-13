import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Star, Clock, Globe, Zap, Brain, Database } from "lucide-react";

const ZionSecurityShieldPage = () => {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced AI algorithms detect and prevent security threats in real-time",
      icon: <Brain className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your systems with instant threat alerts",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Response",
      description: "Instant automated responses to security incidents and threats",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const securityFeatures = [
    "Real-time Threat Detection",
    "AI-Powered Analysis",
    "Automated Incident Response",
    "Vulnerability Scanning",
    "Penetration Testing",
    "Security Audits",
    "Compliance Reporting",
    "Risk Assessment",
    "Security Training",
    "Incident Management"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      description: "Essential security for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly reports",
        "Email support",
        "Up to 10 devices"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced security for growing companies",
      features: [
        "AI threat detection",
        "24/7 monitoring",
        "Automated response",
        "Compliance management",
        "Priority support",
        "Up to 100 devices",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Complete security for large organizations",
      features: [
        "Advanced AI security",
        "Dedicated security team",
        "Custom security policies",
        "White-label options",
        "24/7 dedicated support",
        "Unlimited devices",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Threats Blocked", value: "1M+", icon: <Shield className="w-6 h-6" /> },
    { label: "Response Time", value: "< 1min", icon: <Zap className="w-6 h-6" /> },
    { label: "Uptime", value: "99.99%", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 quantum-field"></div>
      <div className="absolute inset-0 holographic-grid"></div>
      <div className="absolute inset-0 plasma-effect"></div>
      
      <div className="relative z-10">
        <Helmet>
          <title>Zion Security Shield - Advanced AI-Powered Cybersecurity Platform</title>
          <meta
            name="description"
            content="Zion Security Shield - The ultimate AI-powered cybersecurity platform with real-time threat detection, automated response, and 24/7 monitoring. Protect your business with advanced security."
          />
          <meta
            name="keywords"
            content="cybersecurity, AI security, threat detection, security monitoring, automated response, compliance, Zion Security Shield"
          />
        </Helmet>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6 border border-red-500/30">
                🛡️ Advanced AI-Powered Cybersecurity
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Zion Security
              <span className="block text-cyberpunk neon-advanced mt-2">
                Shield
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The ultimate AI-powered cybersecurity platform that protects your business with 
              real-time threat detection, automated response, and 24/7 monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="btn-quantum text-lg px-12 py-4"
              >
                Get Protected
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                to="/demo"
                className="holographic-card text-red-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Security Assessment
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="holographic-card p-6 text-center">
                  <div className="text-red-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security <span className="text-cyberpunk neon-advanced">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive security solutions to protect your business
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-4 text-center group"
                >
                  <div className="text-red-400 mb-2">
                    <Shield className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="text-cyberpunk neon-advanced">Protection</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to secure your business with AI-powered technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-8 text-center group"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security <span className="text-cyberpunk neon-advanced">Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect security plan for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`holographic-card hover-quantum p-8 relative ${
                    plan.popular ? 'ring-2 ring-red-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'btn-quantum'
                        : 'holographic-card text-red-400 hover:text-white'
                    }`}
                  >
                    Get Protected
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="holographic-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 data-stream"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to <span className="text-cyberpunk neon-advanced">Secure</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses using Zion Security Shield to protect their digital assets.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="btn-quantum text-lg px-12 py-4"
                  >
                    Get Protected
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                  <Link
                    to="/demo"
                    className="holographic-card text-red-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    Security Assessment
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZionSecurityShieldPage;