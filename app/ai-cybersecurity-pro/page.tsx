import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  BarChart3, 
  Target, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  AlertTriangle,
  Eye,
  Activity,
  TrendingUp,
  Zap,
  Users,
  Settings,
  PieChart,
  LineChart,
  Building,
  Award,
  Globe,
  Smartphone,
  Database,
  Server
} from 'lucide-react';

const AiCybersecurityProPage: React.FC = () => {
  const features = [
    "AI-powered threat detection",
    "Real-time security monitoring",
    "Automated incident response",
    "Advanced malware analysis",
    "Vulnerability assessment",
    "Compliance monitoring",
    "Security analytics dashboard",
    "Multi-layer protection",
    "Zero-trust architecture",
    "Behavioral analysis",
    "Threat intelligence integration",
    "24/7 security operations center"
  ];

  const benefits = [
    "Prevent 99.9% of cyber attacks",
    "Reduce security incidents by 85%",
    "Decrease response time by 90%",
    "Ensure 100% compliance",
    "Save 60% on security costs",
    "Protect against zero-day threats"
  ];

  const useCases = [
    "Enterprise security",
    "Financial institutions",
    "Healthcare organizations",
    "Government agencies",
    "E-commerce platforms",
    "Critical infrastructure"
  ];

  const pricing = {
    essential: {
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 100 users",
      features: [
        "Basic threat detection",
        "Email security",
        "Web protection",
        "Basic reporting",
        "Email support",
        "Standard monitoring"
      ]
    },
    professional: {
      price: "$499/month",
      originalPrice: "$699/month",
      users: "Up to 500 users",
      features: [
        "Advanced AI detection",
        "Real-time monitoring",
        "Incident response",
        "Compliance tools",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom rules"
      ],
      popular: true
    },
    enterprise: {
      price: "$999/month",
      originalPrice: "$1499/month",
      users: "Unlimited users",
      features: [
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "Compliance monitoring",
        "Custom reporting",
        "Training & onboarding"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Pro - Advanced Threat Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI Cybersecurity Pro. Get advanced threat detection, automated response, and comprehensive security monitoring. Start your free trial today!" />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, cyber protection, AI security, automated response, compliance, enterprise security" />
        <meta property="og:title" content="AI Cybersecurity Pro - Advanced Threat Protection" />
        <meta property="og:description" content="Revolutionary AI-powered cybersecurity platform that protects against advanced threats with intelligent automation and real-time monitoring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Security Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  AI Cybersecurity
                </span>
                <br />
                <span className="text-white">Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Protect your business with our advanced AI-powered cybersecurity platform. 
                Detect, prevent, and respond to cyber threats in real-time with intelligent 
                automation and comprehensive security monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm font-semibold">Attack Prevention</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">85%</div>
                  <div className="text-gray-400 text-sm font-semibold">Incident Reduction</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-gray-400 text-sm font-semibold">Faster Response</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">60%</div>
                  <div className="text-gray-400 text-sm font-semibold">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Cybersecurity Pro combines machine learning, behavioral analysis, 
                and real-time monitoring to deliver comprehensive protection against all types of threats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your security needs. 
                Start with our free trial and protect your business today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details]) => (
                <div
                  key={plan}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    details.popular
                      ? "border-red-400 shadow-2xl shadow-red-500/25 scale-105"
                      : "border-white/20"
                  } hover:border-red-400 transition-all duration-300 group`}
                >
                  {details.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-4xl font-bold text-white">{details.price}</span>
                      {details.originalPrice && (
                        <span className="text-gray-400 text-lg line-through">{details.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{details.users}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                      details.popular
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">AI Cybersecurity Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of cybersecurity with our AI-powered platform that delivers 
                measurable results and comprehensive protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect For <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform adapts to various industries and security requirements, 
                delivering optimized protection for your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join security leaders who trust AI Cybersecurity Pro to protect their 
                organizations. Start your free trial today.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Contact our cybersecurity experts to discuss your protection needs and start your secure transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecurityProPage;