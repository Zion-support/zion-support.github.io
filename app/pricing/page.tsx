import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Brain, Users, Clock, DollarSign } from "lucide-react";

export default function Pricing() {
  const aiServices = [
    {
      name: "AI Analytics",
      price: "$299",
      period: "/month",
      description: "Transform your data into actionable insights",
      features: [
        "Up to 10 data sources",
        "Basic dashboards",
        "Email support",
        "Monthly reports",
        "5GB data storage"
      ],
      popular: false,
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: "AI Automation",
      price: "$599",
      period: "/month",
      description: "Automate your business processes intelligently",
      features: [
        "Up to 25 automated workflows",
        "Advanced AI chatbots",
        "Priority support",
        "Custom integrations",
        "100GB data processing",
        "API access",
        "Analytics dashboard"
      ],
      popular: true,
      icon: <Zap className="w-8 h-8" />
    },
    {
      name: "AI Enterprise",
      price: "$1,499",
      period: "/month",
      description: "Complete AI solution for large organizations",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "24/7 dedicated support",
        "Full API access",
        "Unlimited data processing",
        "Custom integrations",
        "On-premise deployment",
        "Advanced analytics",
        "White-label options"
      ],
      popular: false,
      icon: <Users className="w-8 h-8" />
    }
  ];

  const itServices = [
    {
      name: "IT Support",
      price: "$199",
      period: "/month",
      description: "Basic IT support and maintenance",
      features: [
        "Remote support",
        "System monitoring",
        "Security updates",
        "Email support",
        "Monthly maintenance"
      ],
      popular: false,
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Cybersecurity",
      price: "$999",
      period: "/month",
      description: "Comprehensive security protection",
      features: [
        "Advanced threat detection",
        "24/7 monitoring",
        "Incident response",
        "Priority support",
        "Weekly security reports",
        "Security training",
        "Compliance assistance"
      ],
      popular: true,
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "IT Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Complete IT infrastructure management",
      features: [
        "Full SOC services",
        "Custom security solutions",
        "Dedicated IT team",
        "24/7 phone support",
        "Real-time monitoring",
        "Advanced compliance",
        "Custom training programs",
        "White-label options"
      ],
      popular: false,
      icon: <Users className="w-8 h-8" />
    }
  ];

  const g5Services = [
    {
      name: "5G IoT",
      price: "$5,000",
      period: "/month",
      description: "Connect and manage IoT devices with 5G",
      features: [
        "Device connectivity",
        "Data management",
        "Real-time monitoring",
        "Predictive maintenance",
        "Basic support"
      ],
      popular: false,
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "5G Edge Computing",
      price: "$10,000",
      period: "/month",
      description: "Ultra-low latency edge computing solutions",
      features: [
        "Edge servers",
        "Data processing",
        "Real-time analytics",
        "Cloud integration",
        "Priority support",
        "Custom configurations"
      ],
      popular: true,
      icon: <Zap className="w-8 h-8" />
    },
    {
      name: "5G Smart City",
      price: "$100,000",
      period: "one-time",
      description: "Complete smart city infrastructure",
      features: [
        "Traffic management",
        "Public safety",
        "Environmental monitoring",
        "Smart utilities",
        "24/7 support",
        "Custom development",
        "Training programs"
      ],
      popular: false,
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us for a personalized quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for most of our services. No credit card required to start."
    },
    {
      question: "What's included in support?",
      answer: "Support includes email, phone, and chat support during business hours. Enterprise plans include 24/7 dedicated support."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI, IT & 5G Solutions</title>
        <meta
          name="description"
          content="View our transparent pricing for AI, IT, and 5G solutions. Choose the plan that fits your business needs with flexible options and no hidden fees."
        />
        <meta
          name="keywords"
          content="pricing, AI pricing, IT services pricing, 5G solutions pricing, technology pricing, business solutions pricing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features 
              with no hidden fees or long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with our AI-powered solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    service.popular ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-300 ml-1">{service.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      service.popular
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

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    service.popular ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-300 ml-1">{service.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      service.popular
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

        {/* 5G Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation connectivity solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {g5Services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    service.popular ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-300 ml-1">{service.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      service.popular
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

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing
              </p>
            </div>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for a custom quote or start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}