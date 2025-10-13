import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Lock, Eye, AlertTriangle, Users, Database, Globe, Zap, Clock, DollarSign } from "lucide-react";

export default function Cybersecurity() {
  const features = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response systems",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model across your infrastructure",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security monitoring and incident response",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Data Encryption",
      description: "End-to-end encryption for all your sensitive data",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training for your team",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security evaluation of your current infrastructure",
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      pricing: "Starting at $5,000"
    },
    {
      title: "Managed Security Services",
      description: "24/7 security monitoring and incident response",
      features: ["SOC services", "Threat hunting", "Incident response", "Security updates"],
      pricing: "Starting at $2,500/month"
    },
    {
      title: "Security Implementation",
      description: "Deploy and configure enterprise-grade security solutions",
      features: ["Firewall setup", "SIEM deployment", "Access control", "Network segmentation"],
      pricing: "Starting at $15,000"
    },
    {
      title: "Compliance Consulting",
      description: "Help achieve and maintain regulatory compliance",
      features: ["GDPR compliance", "HIPAA compliance", "SOX compliance", "PCI DSS"],
      pricing: "Starting at $10,000"
    }
  ];

  const benefits = [
    "Protect against 99.9% of cyber threats",
    "Reduce security incidents by 85%",
    "Ensure regulatory compliance",
    "24/7 expert security monitoring",
    "Rapid incident response and recovery",
    "Comprehensive security training"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$1,999",
      period: "/month",
      description: "Basic security protection for small businesses",
      features: [
        "Basic threat monitoring",
        "Firewall management",
        "Security updates",
        "Email support",
        "Monthly security reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Advanced security for growing businesses",
      features: [
        "Advanced threat detection",
        "24/7 monitoring",
        "Incident response",
        "Priority support",
        "Weekly security reports",
        "Security training",
        "Compliance assistance"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Complete security solution for large organizations",
      features: [
        "Full SOC services",
        "Custom security solutions",
        "Dedicated security team",
        "24/7 phone support",
        "Real-time monitoring",
        "Advanced compliance",
        "Custom training programs",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Enterprise Security | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with comprehensive cybersecurity solutions. Advanced threat detection, 24/7 monitoring, compliance management, and security training."
        />
        <meta
          name="keywords"
          content="cybersecurity, security solutions, threat detection, compliance, data protection, security monitoring, enterprise security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions. Advanced threat detection, 
              24/7 monitoring, and compliance management to keep your data secure.
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
                Watch Demo
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection against modern cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity solutions for every business need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                    <p className="text-green-400 font-semibold text-center">{service.pricing}</p>
                  </div>
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
                Why Choose Our Security Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the peace of mind that comes with comprehensive security
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
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
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Contact us for a comprehensive security assessment.
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
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}