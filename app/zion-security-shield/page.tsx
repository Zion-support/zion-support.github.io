import { ArrowRight, Shield, Eye, Zap, CheckCircle, Users, Clock, Target, Star, AlertTriangle, Lock, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and sophisticated malware.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Automated Response System",
      description: "Intelligent incident response that automatically contains threats, blocks malicious activities, and notifies security teams within seconds.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring of your entire infrastructure with AI-powered analysis and immediate threat detection capabilities.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for SOC 2, GDPR, HIPAA, and other regulatory requirements with detailed audit trails.",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "99.9% Threat Detection",
      description: "Industry-leading threat detection accuracy with minimal false positives",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Sub-Second Response",
      description: "Automated threat response in under 1 second",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security with full compliance certification",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "500+ Protected Companies",
      description: "Trusted by leading organizations worldwide",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Monthly reports",
        "Standard compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 endpoints",
        "Advanced AI detection",
        "Priority support",
        "Real-time alerts",
        "Full compliance suite",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored for large organizations",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Dedicated support",
        "On-premise deployment",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "SecureCorp Inc.",
      role: "CISO",
      content: "ZionSecurityShield has revolutionized our security posture. We've seen a 95% reduction in security incidents since implementation.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      company: "DataGuard Solutions",
      role: "Security Director",
      content: "The AI-powered threat detection is incredibly accurate. It caught threats that other solutions missed completely.",
      rating: 5
    },
    {
      name: "Robert Chen",
      company: "TechSecure Ltd.",
      role: "CTO",
      content: "The automated response system has saved us countless hours and prevented several potential breaches. Highly recommended!",
      rating: 5
    }
  ];

  const securityStats = [
    {
      title: "Threats Blocked",
      value: "2.5M+",
      description: "Malicious activities prevented"
    },
    {
      title: "Response Time",
      value: "< 1s",
      description: "Average threat response time"
    },
    {
      title: "Uptime",
      value: "99.99%",
      description: "System availability guarantee"
    },
    {
      title: "Compliance",
      value: "100%",
      description: "Regulatory compliance coverage"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ZionSecurityShield - AI-Powered Cybersecurity Suite | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with ZionSecurityShield, the most advanced AI-powered cybersecurity suite. Real-time threat detection, automated response, and 24/7 monitoring."
        />
        <meta
          name="keywords"
          content="cybersecurity, AI security, threat detection, automated response, security monitoring, compliance management, ZionSecurityShield"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                #1 AI Security Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ZionSecurity
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Shield
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most advanced AI-powered cybersecurity suite for modern businesses. 
              Protect your digital assets with real-time threat detection, automated response, and 24/7 monitoring.
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
                View Security Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-red-400 mb-2">{stat.title}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
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
                Why Choose ZionSecurityShield?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The most trusted cybersecurity platform trusted by 500+ companies worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4 mx-auto">
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

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from cyber threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Security Experts Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of security professionals who trust ZionSecurityShield to protect their organizations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-red-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
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
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to protect businesses of all sizes.
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
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies already using ZionSecurityShield to protect their digital assets and maintain compliance.
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
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}