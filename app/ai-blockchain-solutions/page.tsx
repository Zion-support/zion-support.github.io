import { ArrowRight, Link, Shield, Zap, CheckCircle, Star, Brain, Database, Globe, Cpu } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIBlockchainSolutions() {
  const features = [
    {
      icon: <Link className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "AI-powered smart contract creation, testing, and deployment with automated security auditing and optimization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Security",
      description: "Advanced security protocols and AI-driven threat detection to protect blockchain networks and digital assets"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DeFi Protocol Development",
      description: "Decentralized finance solutions including DEXs, lending platforms, and yield farming protocols with AI optimization"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for blockchain data analysis, market prediction, and trading optimization"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "NFT Marketplace Development",
      description: "Complete NFT marketplace solutions with AI-powered recommendation engines and automated pricing"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Chain Integration",
      description: "Seamless integration between different blockchain networks for enhanced interoperability and functionality"
    }
  ];

  const pricingPlans = [
    {
      name: "Blockchain Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for blockchain startups",
      features: [
        "Basic smart contract development",
        "Standard security auditing",
        "1 blockchain network support",
        "Email support",
        "Basic analytics dashboard",
        "1 developer license"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$12,999",
      period: "/month",
      description: "Most popular for DeFi projects",
      features: [
        "Advanced smart contract development",
        "AI-powered security auditing",
        "Multi-chain support (up to 5 networks)",
        "Priority support",
        "Advanced analytics & AI insights",
        "Up to 5 developer licenses",
        "DeFi protocol development",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large blockchain organizations",
      features: [
        "Custom blockchain development",
        "Enterprise security solutions",
        "Unlimited blockchain networks",
        "Dedicated blockchain team",
        "Custom AI model training",
        "Unlimited developer licenses",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const solutions = [
    {
      title: "DeFi Platforms",
      description: "Complete decentralized finance solutions including DEXs, lending protocols, and yield optimization",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "NFT Marketplaces",
      description: "Full-featured NFT platforms with AI-powered discovery, pricing, and recommendation systems",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Supply Chain Tracking",
      description: "Blockchain-based supply chain solutions with AI analytics for transparency and efficiency",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Digital Identity",
      description: "Secure digital identity solutions using blockchain and AI for authentication and verification",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "DeFi Innovations",
      role: "CTO",
      content: "Zion's blockchain solutions helped us launch our DeFi platform 3x faster than expected. The AI security auditing caught critical vulnerabilities before launch.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "NFT Marketplace Inc",
      role: "Founder",
      content: "The AI-powered recommendation engine increased our NFT sales by 150%. The platform is incredibly sophisticated and user-friendly.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      company: "Blockchain Security Labs",
      role: "Security Director",
      content: "Their blockchain security solutions are industry-leading. We've prevented multiple potential attacks thanks to their AI threat detection.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - DeFi & Smart Contract Development | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered blockchain solutions for DeFi, NFTs, smart contracts, and enterprise blockchain development. Secure, scalable, and innovative."
        />
        <meta
          name="keywords"
          content="blockchain development, DeFi solutions, smart contracts, NFT marketplace, blockchain security, AI blockchain"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 mb-6">
              <Link className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">#1 Blockchain Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                AI Blockchain Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered blockchain solutions for DeFi, NFTs, smart contracts, and enterprise applications. 
              Build the future of decentralized technology with cutting-edge AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Build on Blockchain
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Blockchain Demo
              </RouterLink>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
                <div className="text-gray-300">Blockchain Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
                <div className="text-gray-300">TVL Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Security Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology integrated with blockchain for maximum security, efficiency, and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain solutions for every industry and use case.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300">
                    {solution.description}
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
                Blockchain Development Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the blockchain solution that matches your project requirements and scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Start Blockchain Project
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
                See what blockchain innovators say about our AI-powered solutions
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
              Join the blockchain revolution with AI-powered solutions that are secure, scalable, and innovative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Build on Blockchain
                <ArrowRight className="w-5 h-5 ml-2" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Blockchain Demo
              </RouterLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}