import { ArrowRight, Link, Brain, Zap, Shield, BarChart3, CheckCircle, Star, TrendingUp, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AiBlockchainAnalyticsPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Transaction Analysis",
      description: "Advanced machine learning algorithms analyze blockchain transactions with 99.9% accuracy for fraud detection"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Market Intelligence",
      description: "Live cryptocurrency market analysis with predictive modeling and trend forecasting"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Contract Monitoring",
      description: "Automated monitoring and analysis of smart contracts for security vulnerabilities and performance optimization"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Multi-Chain Support",
      description: "Support for 50+ blockchain networks including Ethereum, Bitcoin, Polygon, and Solana"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive blockchain analytics with custom dashboards and real-time reporting"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Built-in security features with compliance reporting for regulatory requirements"
    }
  ];

  const blockchainFeatures = [
    "Transaction Analysis & Tracking",
    "DeFi Protocol Monitoring",
    "NFT Market Analysis",
    "Smart Contract Auditing",
    "Wallet Address Clustering",
    "Risk Assessment & Scoring",
    "Compliance Reporting",
    "Real-time Alerts & Notifications",
    "Custom Analytics Queries",
    "API & SDK Integration",
    "Multi-Chain Data Aggregation",
    "Advanced Visualization Tools"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small projects",
      features: [
        "Up to 5 chains",
        "Basic analytics",
        "Standard reports",
        "Email support",
        "1M transactions/month",
        "Basic API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 20 chains",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "10M transactions/month",
        "Full API access",
        "Real-time alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited chains",
        "Full AI suite",
        "Custom integrations",
        "24/7 phone support",
        "Unlimited transactions",
        "White-label solution",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Crypto Investment Fund",
      role: "Head of Analytics",
      content: "Zion AI Blockchain Analytics Pro has revolutionized our investment strategy. We can now identify profitable opportunities with 95% accuracy.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "DeFi Protocol",
      role: "Security Director",
      content: "The smart contract monitoring is incredible. We've prevented several potential exploits and improved our security posture significantly.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Blockchain Consulting",
      role: "Principal Analyst",
      content: "Outstanding platform with excellent multi-chain support. Our analysis capabilities have increased by 300% since implementation.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Blockchain Analytics Pro - Advanced Blockchain Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your blockchain analysis with Zion AI Blockchain Analytics Pro - the ultimate blockchain intelligence platform. AI-powered transaction analysis, DeFi monitoring, and multi-chain support."
        />
        <meta
          name="keywords"
          content="blockchain analytics, cryptocurrency analysis, DeFi monitoring, smart contract auditing, blockchain intelligence, crypto analytics, blockchain data"
        />
      </Helmet>

      <div className="min-h-screen gradient-animated cyber-grid">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Link className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Advanced Blockchain Intelligence Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="holographic-text text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Zion AI Blockchain Analytics Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your blockchain analysis with the world's most advanced intelligence platform. 
              AI-powered transaction analysis, DeFi monitoring, and multi-chain support for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="cyber-button text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <TrendingUp className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </RouterLink>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300">Analysis Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                <div className="text-gray-300">Blockchain Networks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1B+</div>
                <div className="text-gray-300">Transactions Analyzed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze and understand blockchain data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="holographic-card rounded-xl p-6 hover:scale-105 transition-all duration-300 pulse-glow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Blockchain Features List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Blockchain Analytics Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to analyze blockchain data effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blockchainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
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
                Choose the plan that fits your blockchain analytics needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative holographic-card rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-red-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <RouterLink
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </RouterLink>
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
                Trusted by Blockchain Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what blockchain professionals say about Zion AI Blockchain Analytics Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="holographic-card rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
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
              Ready to Transform Your Blockchain Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Blockchain Analytics Pro to gain deep blockchain insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="cyber-button text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </RouterLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}