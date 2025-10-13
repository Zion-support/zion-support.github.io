import { ArrowRight, Shield, Zap, Globe, CheckCircle, Star, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Users, TrendingUp, FileText, Lock, Database, Cpu, Network, Clock, DollarSign, ShieldCheck, Activity, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import ResponsiveText from "../components/ResponsiveText";

export default function ZionAIBlockchainAuditor() {
  const features = [
    {
      title: "Smart Contract Analysis",
      description: "AI-powered analysis of smart contracts to identify vulnerabilities, gas optimization opportunities, and compliance issues.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Transaction Monitoring",
      description: "Real-time monitoring of blockchain transactions with anomaly detection and suspicious activity alerts.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Checking",
      description: "Automated compliance verification against regulatory standards including AML, KYC, and financial regulations.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis of blockchain projects, tokens, and DeFi protocols with detailed scoring.",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small blockchain projects",
      features: [
        "Up to 10 smart contracts",
        "Basic vulnerability scanning",
        "Transaction monitoring",
        "Email support",
        "Standard compliance checks"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing DeFi protocols",
      features: [
        "Up to 50 smart contracts",
        "Advanced vulnerability analysis",
        "Real-time monitoring",
        "Priority support",
        "Custom compliance rules",
        "API access",
        "Detailed reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "For large-scale blockchain operations",
      features: [
        "Unlimited smart contracts",
        "AI-powered deep analysis",
        "24/7 monitoring",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "Advanced analytics",
        "Compliance automation"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Blockchain Networks", icon: <Globe className="w-6 h-6" /> },
    { number: "10,000+", label: "Contracts Audited", icon: <FileText className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Blockchain Auditor - Advanced Smart Contract Security & Compliance</title>
        <meta
          name="description"
          content="AI-powered blockchain auditing platform for smart contract security, compliance checking, and risk assessment. Protect your DeFi protocols with advanced vulnerability detection and real-time monitoring."
        />
        <meta
          name="keywords"
          content="blockchain auditor, smart contract security, DeFi security, compliance checking, vulnerability detection, risk assessment, cryptocurrency security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Blockchain Security Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Blockchain Auditor
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Advanced AI-powered blockchain security platform for smart contract auditing, 
              compliance checking, and risk assessment. Protect your DeFi protocols with 
              cutting-edge vulnerability detection and real-time monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive blockchain security solutions powered by AI to protect your smart contracts, 
                detect vulnerabilities, and ensure regulatory compliance.
              </p>
            </div>
            <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your blockchain security needs. All plans include our core auditing features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    plan.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Blockchain Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of blockchain projects already using Zion AI Blockchain Auditor 
              to protect their smart contracts and ensure compliance. Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#pricing"
                variant="outline"
                size="lg"
                icon={<DollarSign className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
