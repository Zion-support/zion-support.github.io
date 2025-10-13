import { ArrowRight, Link, Shield, Zap, CheckCircle, Star, Brain, Database, Lock, Globe, TrendingUp, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AiBlockchainSolutions() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that adapt and optimize based on real-time data and conditions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "AI-driven threat detection and prevention for blockchain networks and transactions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Trading",
      description: "AI algorithms for automated cryptocurrency trading and DeFi yield optimization"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integrity",
      description: "AI-powered data validation and integrity verification across blockchain networks"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Protection",
      description: "Advanced privacy-preserving techniques with AI-enhanced zero-knowledge proofs"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Chain Integration",
      description: "AI-optimized cross-chain bridges and interoperability solutions"
    }
  ];

  const blockchainFeatures = [
    "Smart Contract Development",
    "DeFi Protocol Integration",
    "NFT Marketplace Development",
    "Cryptocurrency Wallet",
    "Blockchain Analytics",
    "Token Economics Design",
    "Consensus Algorithm Optimization",
    "Scalability Solutions",
    "Privacy Coins Development",
    "Cross-Chain Bridges",
    "DAO Governance Systems",
    "Blockchain Security Audits"
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$199",
      period: "/month",
      description: "Perfect for blockchain developers",
      features: [
        "Basic smart contract tools",
        "Testnet deployment",
        "Documentation & tutorials",
        "Email support",
        "Standard templates",
        "1 blockchain network"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Advanced AI features",
        "Mainnet deployment",
        "Custom smart contracts",
        "Priority support",
        "White-label solutions",
        "Multiple networks",
        "API access"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI suite",
        "Custom blockchain",
        "Dedicated support team",
        "24/7 phone support",
        "Compliance tools",
        "All networks",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Crypto Investment Fund",
      role: "CTO",
      content: "Zion AI Blockchain Solutions has revolutionized our DeFi operations. The AI-powered smart contracts have increased our yield by 40% while reducing risks significantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "NFT Marketplace",
      role: "Founder",
      content: "The AI integration with our blockchain platform is incredible. We've seen a 300% increase in transaction efficiency and user satisfaction.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "Fintech Startup",
      role: "Blockchain Lead",
      content: "The security features and AI-powered analytics have given us complete confidence in our blockchain infrastructure. Highly recommended for any serious blockchain project.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Intelligent Blockchain Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform blockchain development with Zion AI Blockchain Solutions - the ultimate AI-powered blockchain platform. Smart contracts, DeFi, NFTs, and advanced blockchain analytics."
        />
        <meta
          name="keywords"
          content="AI blockchain, smart contracts, DeFi, NFT development, cryptocurrency, blockchain analytics, Web3, decentralized applications, blockchain security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
              <Link className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">AI-Powered Blockchain Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                AI Blockchain Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform blockchain development with the world's most intelligent blockchain platform. 
              AI-powered smart contracts, DeFi solutions, and advanced blockchain analytics for Web3 applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </RouterLink>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">$2B+</div>
                <div className="text-gray-300">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Blockchain Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build intelligent blockchain applications with cutting-edge AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Complete Blockchain Development Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to build and deploy intelligent blockchain applications.
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
                Smart Blockchain Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the blockchain solution that fits your project needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-amber-400 bg-gradient-to-br from-amber-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-amber-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
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
                Trusted by Blockchain Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what blockchain developers say about Zion AI Blockchain Solutions
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
              Ready to Build the Future of Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of blockchain projects using Zion AI Blockchain Solutions to create intelligent Web3 applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
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