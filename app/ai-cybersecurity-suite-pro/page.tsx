import { ArrowRight, CheckCircle, Shield, Lock, Eye, AlertTriangle, Zap, Users, Clock, DollarSign, Star, Target, Globe, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AICybersecuritySuitePro() {
  const features = [
    "AI-powered threat detection and response",
    "Behavioral analysis and anomaly detection",
    "Advanced threat hunting capabilities",
    "Automated incident response and remediation",
    "Real-time security monitoring and alerting",
    "Vulnerability scanning and assessment",
    "Endpoint detection and response (EDR)",
    "Network security monitoring (NSM)",
    "Threat intelligence integration",
    "Compliance reporting for SOC 2, GDPR, HIPAA",
    "Custom security policies and rules",
    "24/7 security operations center (SOC)"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email alerts",
        "Standard support",
        "Monthly reports",
        "Basic compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 endpoints",
        "Advanced threat detection",
        "Automated response",
        "Priority support",
        "Weekly reports",
        "Full compliance suite",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,199",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "AI-powered threat hunting",
        "Custom automation",
        "24/7 SOC support",
        "Real-time reports",
        "Advanced compliance",
        "White-label options",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comprehensive Protection",
      description: "Multi-layered security approach covering endpoints, networks, and cloud infrastructure."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response",
      description: "AI-powered threat detection and response reduces incident response time by 90%."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring by certified security professionals."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Compliance Ready",
      description: "Built-in compliance reporting for major standards including SOC 2, GDPR, and HIPAA."
    }
  ];

  const securityStats = [
    { label: "Threats Blocked", value: "2.5M+", icon: <Shield className="w-6 h-6" /> },
    { label: "Response Time", value: "< 5 min", icon: <Clock className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Zap className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> }
  ];

  const threatTypes = [
    {
      title: "Malware Detection",
      description: "Advanced AI models detect and block malware in real-time",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Phishing Prevention",
      description: "AI-powered email analysis prevents phishing attacks",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Insider Threats",
      description: "Behavioral analysis identifies suspicious user activities",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Network Intrusions",
      description: "Real-time monitoring detects unauthorized access attempts",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Advanced Security Platform</title>
        <meta
          name="description"
          content="Protect your business with AI Cybersecurity Suite Pro - the most advanced security platform. AI-powered threat detection, behavioral analysis, and automated response."
        />
        <meta
          name="keywords"
          content="AI cybersecurity, threat detection, security monitoring, compliance, SOC 2, GDPR, HIPAA, endpoint security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-12 h-12 text-red-400 mr-4" />
                  <span className="text-red-400 font-semibold">AI Cybersecurity Suite Pro</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Next-Generation
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                    {" "}AI Cybersecurity
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Protect your business with enterprise-grade AI cybersecurity. Advanced threat detection, 
                  behavioral analysis, and automated response to keep your data and systems secure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Threats Blocked</div>
                      <div className="text-white text-2xl font-bold">2.5M+</div>
                      <div className="text-green-300 text-sm">Today</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Response Time</div>
                      <div className="text-white text-2xl font-bold">< 5min</div>
                      <div className="text-green-300 text-sm">Average</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-16 h-16 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered security suite protects against all types of cyber threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {threatTypes.map((threat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {threat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{threat.title}</h3>
                  <p className="text-gray-300 text-sm">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from evolving cyber threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Cybersecurity Suite Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that trust us to protect their digital assets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Security Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-red-400 ring-2 ring-red-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
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
              Don't wait for a security breach. Start protecting your business with enterprise-grade AI cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Security Expert
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}