import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Brain, Eye, Lock, AlertTriangle, CheckCircle, Users, Target, Clock, Zap, BarChart3 } from "lucide-react";

export default function AiCybersecurity() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time, even before they become active."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Analysis",
      description: "Monitor user and system behavior patterns to identify anomalies and potential security breaches."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Response",
      description: "Instant automated responses to security incidents with AI-powered decision making and containment."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Predictive Security",
      description: "Predict and prevent security incidents before they occur using advanced AI threat modeling."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 continuous monitoring of your entire infrastructure with instant threat detection and response."
    }
  ];

  const securityServices = [
    {
      title: "AI-Powered Threat Hunting",
      description: "Proactive threat hunting using AI to identify advanced persistent threats and zero-day attacks",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Detect 99.9% of threats", "Reduce false positives by 80%", "Faster incident response"]
    },
    {
      title: "Intelligent Security Operations Center",
      description: "AI-enhanced SOC with automated incident response and threat intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["24/7 monitoring", "Automated triage", "Reduced response time"]
    },
    {
      title: "AI Security Analytics",
      description: "Advanced analytics platform that correlates security events and identifies attack patterns",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Comprehensive visibility", "Predictive insights", "Risk assessment"]
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven incident response that automatically contains and remediates security threats",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Instant containment", "Automated remediation", "Reduced damage"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$3,999",
      period: "per month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic AI threat detection",
        "Real-time monitoring",
        "Email support",
        "Standard security features",
        "Monthly security reports",
        "Up to 100 endpoints"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced AI threat detection",
        "Behavioral analysis",
        "Priority support",
        "Advanced security features",
        "Weekly security reports",
        "Up to 500 endpoints",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Custom AI models",
        "Dedicated security team",
        "24/7 support",
        "Enterprise security",
        "Real-time reports",
        "Unlimited endpoints",
        "Full API access",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.9% Threat Detection",
      description: "Our AI-powered system detects 99.9% of known and unknown threats."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Response",
      description: "Automated response to security incidents in under 30 seconds."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Zero False Positives",
      description: "AI reduces false positives by 80% compared to traditional security tools."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group | Advanced Threat Protection</title>
        <meta
          name="description"
          content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and intelligent security analytics for comprehensive protection."
        />
        <meta
          name="keywords"
          content="AI cybersecurity, threat detection, security automation, threat hunting, security analytics, zero trust, incident response, cyber defense"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with next-generation AI cybersecurity solutions. Advanced threat detection, 
              automated response, and intelligent security analytics that adapt to evolving threats.
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
                Advanced AI Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection powered by artificial intelligence and machine learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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

        {/* Security Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity solutions powered by artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                Why Choose Our AI Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results from our AI-powered cybersecurity platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {benefit.description}
                  </p>
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
                Transparent Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400 bg-white/20' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free security assessment and discover how AI can protect your organization.
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
