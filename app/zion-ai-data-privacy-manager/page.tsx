import { ArrowRight, Shield, Lock, Eye, BarChart3, CheckCircle, Star, Brain, Zap, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIDataPrivacyManager() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Privacy Compliance",
      description: "Automated GDPR, CCPA, and other privacy regulation compliance with AI-powered monitoring"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Encryption",
      description: "End-to-end encryption for all data with AI-powered key management and rotation"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Privacy Impact Assessment",
      description: "AI-powered privacy impact assessments and risk analysis for all data processing activities"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Privacy Analytics",
      description: "Comprehensive privacy analytics dashboard with compliance metrics and risk insights"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Consent Management",
      description: "AI-powered consent collection, tracking, and management across all touchpoints"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Data Discovery",
      description: "AI-powered data discovery and classification to identify sensitive information automatically"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$59",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 data records",
        "Basic compliance monitoring",
        "Simple consent management",
        "Standard encryption",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 data records",
        "Advanced AI compliance",
        "Automated consent management",
        "Advanced encryption",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$349",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data records",
        "Advanced AI features",
        "Custom compliance rules",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Healthcare Platform",
      role: "Privacy Officer",
      content: "Zion AI Data Privacy Manager helped us achieve 100% GDPR compliance and reduced our privacy risks by 80%.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "Financial Services",
      role: "Data Protection Officer",
      content: "The AI data discovery feature is incredible. We found and secured sensitive data we didn't even know we had.",
      rating: 5
    },
    {
      name: "Amanda Wilson",
      company: "E-commerce Platform",
      role: "Compliance Manager",
      content: "Automated consent management saved us hours of work and improved our compliance scores significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Data Privacy Manager - Advanced Privacy Compliance Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your data privacy with Zion AI Data Privacy Manager. AI-powered compliance monitoring, automated consent management, and comprehensive privacy analytics."
        />
        <meta
          name="keywords"
          content="data privacy, GDPR compliance, CCPA compliance, privacy management, data protection, consent management, privacy analytics, data encryption"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 mb-6">
              <Shield className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-slate-400 text-sm font-medium">AI-Powered Privacy Protection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400">
                Zion AI Data Privacy Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your data privacy with AI-powered compliance monitoring, automated consent management, 
              and comprehensive privacy analytics. Achieve 100% GDPR and CCPA compliance effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-400 mb-2">100%</div>
                <div className="text-gray-300">GDPR Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">80%</div>
                <div className="text-gray-300">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1,500+</div>
                <div className="text-gray-300">Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Privacy Protection Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect data privacy and ensure regulatory compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-500 to-gray-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your privacy needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-slate-400 bg-gradient-to-br from-slate-500/10 to-gray-500/10'
                      : 'border-white/20 hover:border-slate-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-slate-500 to-gray-600 text-white hover:from-slate-600 hover:to-gray-700'
                        : 'border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
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
                Trusted by Privacy Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what privacy professionals say about our compliance platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Data Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations ensuring privacy compliance with AI-powered protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300"
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