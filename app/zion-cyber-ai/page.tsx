import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  AlertTriangle, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Sparkles,
  Database,
  Cpu,
  BarChart3
} from 'lucide-react';

const ZionCyberAI = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time",
      benefit: "99.9% threat detection rate"
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: "Behavioral Analytics",
      description: "Monitor user and system behavior to identify anomalies and potential security breaches",
      benefit: "Zero false positives"
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: "Automated Response",
      description: "Instant automated responses to security incidents with AI-powered remediation",
      benefit: "Sub-second response time"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Predictive Security",
      description: "Predict and prevent future attacks using AI-powered threat intelligence",
      benefit: "95% attack prevention"
    }
  ];

  const pricingPlans = [
    {
      name: "Cyber Starter",
      price: "$299",
      period: "/month",
      description: "Essential cybersecurity for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email security",
        "Standard support",
        "5GB log storage"
      ],
      popular: false
    },
    {
      name: "Cyber Professional",
      price: "$799",
      period: "/month",
      description: "Advanced security for growing organizations",
      features: [
        "Up to 500 endpoints",
        "Advanced AI threat detection",
        "Behavioral analytics",
        "Priority support",
        "100GB log storage",
        "Custom rules"
      ],
      popular: true
    },
    {
      name: "Cyber Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Complete security suite for large enterprises",
      features: [
        "Unlimited endpoints",
        "Full AI security suite",
        "24/7 monitoring",
        "Dedicated support",
        "Unlimited log storage",
        "White-label solutions",
        "API access"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Protect banking and financial data with advanced fraud detection",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Secure patient data and medical records with HIPAA compliance",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Government",
      description: "Defend against nation-state attacks and cyber espionage",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "E-commerce",
      description: "Protect customer data and payment information",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const securityFeatures = [
    { name: "Endpoint Protection", description: "Advanced antivirus and malware detection" },
    { name: "Network Security", description: "Firewall and intrusion detection systems" },
    { name: "Email Security", description: "Phishing and spam protection" },
    { name: "Web Security", description: "URL filtering and web application protection" },
    { name: "Data Loss Prevention", description: "Sensitive data protection and monitoring" },
    { name: "Identity Management", description: "Multi-factor authentication and access control" },
    { name: "Vulnerability Management", description: "Automated vulnerability scanning and patching" },
    { name: "Incident Response", description: "Automated incident detection and response" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Zion Cyber AI - Advanced AI-Powered Cybersecurity Suite | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion Cyber AI - advanced AI-powered cybersecurity suite with threat detection, behavioral analytics, and automated response." />
        <meta name="keywords" content="cybersecurity AI, threat detection, behavioral analytics, automated response, cyber defense, security monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-cyber-ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-6 py-3 mb-8 border border-red-500/30">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-medium">AI-Powered Security</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Zion Cyber AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Next-generation AI-powered cybersecurity suite that provides comprehensive protection 
              against advanced threats with real-time detection and automated response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 border border-red-500/50 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
              >
                Watch Demo
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
              <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl border border-orange-500/20">
              <div className="text-4xl font-bold text-orange-400 mb-2">0</div>
              <div className="text-gray-300">False Positives</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-green-500/10 rounded-xl border border-yellow-500/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">0.1s</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Attack Prevention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity protection powered by cutting-edge AI and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-red-300 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-red-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Complete Security Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All-in-one cybersecurity solution covering every aspect of your digital security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    🔒
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by organizations across industries for comprehensive cybersecurity protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-red-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Cyber AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'border border-red-500/50 text-red-300 hover:bg-red-500/10'
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Secure Your Digital Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait for a cyber attack to happen. Protect your business with Zion Cyber AI 
            and stay one step ahead of evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Security Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border border-red-500/50 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionCyberAI;