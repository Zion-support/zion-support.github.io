import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Link as LinkIcon, Shield, Zap, Brain, CheckCircle, ArrowRight, Star, Target, Award, Globe, BarChart3, Sparkles } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionAiBlockchainSolutionsPage = () => {
  const features = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Create intelligent smart contracts that adapt and learn from transaction patterns using advanced AI algorithms",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.9% accuracy"
    },
    {
      title: "Decentralized AI Networks",
      description: "Build distributed AI networks that operate across multiple blockchain nodes for enhanced security and performance",
      icon: <Globe className="w-6 h-6" />,
      stats: "Global distribution"
    },
    {
      title: "Blockchain Analytics",
      description: "Advanced AI-driven analytics for blockchain transactions, fraud detection, and pattern recognition",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time analysis"
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Implement quantum-resistant cryptographic solutions to future-proof your blockchain applications",
      icon: <Shield className="w-6 h-6" />,
      stats: "Future-proof security"
    }
  ];

  const pricingPlans = [
    {
      name: "Blockchain Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for startups and small projects exploring blockchain technology",
      features: [
        "Basic smart contract deployment",
        "Standard blockchain analytics",
        "Email support",
        "Public blockchain integration",
        "Documentation & tutorials"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with advanced blockchain requirements",
      features: [
        "Advanced AI smart contracts",
        "Custom blockchain analytics",
        "Priority support",
        "Private blockchain networks",
        "AI model integration",
        "Dedicated blockchain engineer"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade blockchain solutions",
      features: [
        "Custom blockchain development",
        "Advanced AI integration",
        "24/7 dedicated support",
        "Multi-chain solutions",
        "White-label platform",
        "Blockchain consulting services"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "DeFi Innovations",
      role: "CTO",
      content: "Zion AI Blockchain Solutions has transformed our DeFi platform. The AI-powered smart contracts have reduced gas costs by 60% while improving security.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      company: "Supply Chain Solutions",
      role: "Blockchain Director",
      content: "The AI analytics capabilities have given us unprecedented visibility into our supply chain. We can now track and optimize every transaction in real-time.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. James Wilson",
      company: "Healthcare Blockchain",
      role: "Chief Technology Officer",
      content: "The quantum-safe cryptography ensures our patient data remains secure for decades. This is exactly what healthcare needs for long-term data integrity.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "100+", label: "Blockchain Projects", icon: <LinkIcon className="w-6 h-6" /> },
    { number: "60%", label: "Cost Reduction", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Security Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Brain className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "DeFi Platforms",
      description: "Build next-generation decentralized finance applications with AI-enhanced smart contracts",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "60% lower gas costs"
    },
    {
      title: "Supply Chain",
      description: "Create transparent, traceable supply chains with AI-powered analytics and automation",
      icon: <Globe className="w-6 h-6" />,
      benefit: "100% traceability"
    },
    {
      title: "Digital Identity",
      description: "Implement secure, AI-verified digital identity solutions for enhanced privacy and security",
      icon: <Shield className="w-6 h-6" />,
      benefit: "Zero-knowledge proofs"
    },
    {
      title: "NFT Marketplaces",
      description: "Create intelligent NFT platforms with AI-driven pricing, authentication, and trading",
      icon: <Sparkles className="w-6 h-6" />,
      benefit: "AI-powered valuation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Blockchain Solutions - Advanced Blockchain & AI Integration | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your blockchain applications with Zion AI Blockchain Solutions. AI-powered smart contracts, decentralized networks, analytics, and quantum-safe cryptography. Starting at $199/month." />
        <meta name="keywords" content="blockchain AI, smart contracts, decentralized AI, blockchain analytics, quantum cryptography, DeFi, NFT, supply chain, digital identity, blockchain development" />
        <meta property="og:title" content="Zion AI Blockchain Solutions - Advanced Blockchain & AI Integration" />
        <meta property="og:description" content="Revolutionize your blockchain applications with AI-powered smart contracts, decentralized networks, analytics, and quantum-safe cryptography. Starting at $199/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-blockchain-solutions" />
        <meta property="og:image" content="https://ziontechgroup.com/og-blockchain-solutions.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Blockchain Solutions - Advanced Blockchain & AI Integration" />
        <meta name="twitter:description" content="Revolutionize your blockchain applications with AI-powered smart contracts, decentralized networks, analytics, and quantum-safe cryptography." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-blockchain-solutions.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Zion AI Blockchain Solutions - Advanced Blockchain & AI Platform | Zion Tech Group"
          description="Revolutionize your blockchain applications with our AI-powered platform. Features smart contracts, decentralized networks, analytics, and quantum-safe cryptography. Starting at $199/month."
          keywords="blockchain AI, smart contracts, decentralized AI, blockchain analytics, quantum cryptography, DeFi, NFT, supply chain, digital identity, blockchain development, Web3, cryptocurrency"
          canonical="https://ziontechgroup.com/ai-blockchain-solutions"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <LinkIcon className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Blockchain Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of Blockchain is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI-Powered
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Combine the power of artificial intelligence with blockchain technology to create next-generation decentralized applications. 
              Build smarter, more secure, and more efficient blockchain solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <LinkIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI-Blockchain Integration
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our platform seamlessly combines artificial intelligence with blockchain technology to create powerful, secure, and intelligent decentralized applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI-powered blockchain solutions are transforming industries and creating new possibilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400">
                      {useCase.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the blockchain AI plan that matches your project requirements and development goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Blockchain Innovators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what leading blockchain companies say about our AI-powered solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build the Future of Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the blockchain revolution with AI-powered solutions that are secure, efficient, and intelligent. 
              Start building your next-generation decentralized applications today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <LinkIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiBlockchainSolutionsPage;