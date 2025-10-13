import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Globe,
  Lock,
  Brain,
  Target,
  Settings,
  Palette,
  Download,
  Send,
  Calculator,
  Receipt,
  CreditCard,
  Smartphone,
  Mail,
  Calendar,
  Edit3,
  Save,
  Share2,
  MessageSquare,
  Heart,
  ThumbsUp,
  AlertCircle,
  PieChart,
  Activity,
  Link as LinkIcon,
  Database,
  Cpu,
  Network,
  Coins,
  Wallet,
  FileText,
  Users,
  Building,
  ShoppingCart
} from 'lucide-react';

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Powered Security",
      description: "Advanced AI algorithms for blockchain security, fraud detection, and smart contract auditing"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Contract AI",
      description: "AI-generated smart contracts with automatic optimization and security validation"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "DeFi Analytics",
      description: "Real-time analytics and insights for decentralized finance protocols and trading"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Blockchain Integration",
      description: "Seamless integration with multiple blockchain networks and protocols"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Token Economics",
      description: "AI-powered tokenomics design and economic modeling for crypto projects"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Solutions",
      description: "Advanced privacy-preserving technologies and zero-knowledge proof systems"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$199",
      period: "/month",
      description: "Perfect for blockchain startups and small projects",
      features: [
        "Basic AI security tools",
        "Smart contract templates",
        "Single blockchain support",
        "Email support",
        "Basic analytics",
        "Standard integrations",
        "Community access"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "Ideal for established companies and DeFi protocols",
      features: [
        "Advanced AI security suite",
        "Custom smart contracts",
        "Multi-blockchain support",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "White-label options",
        "Dedicated support"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "$1,499",
      period: "/month",
      description: "For large institutions and financial services",
      features: [
        "Full AI blockchain suite",
        "Custom protocol development",
        "All blockchain networks",
        "24/7 phone support",
        "Real-time monitoring",
        "Custom solutions",
        "On-premise deployment",
        "Compliance tools",
        "Dedicated team",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "DeFi Protocols",
      description: "Build and secure decentralized finance applications",
      icon: <Coins className="w-8 h-8" />
    },
    {
      title: "NFT Marketplaces",
      description: "Create and manage NFT platforms with AI optimization",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Supply Chain",
      description: "Implement blockchain for supply chain transparency",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Financial Services",
      description: "Develop blockchain solutions for traditional finance",
      icon: <Building className="w-8 h-8" />
    }
  ];

  const solutions = [
    {
      title: "Smart Contract Auditing",
      description: "AI-powered security analysis and vulnerability detection",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "DeFi Yield Optimization",
      description: "Maximize returns with AI-driven strategy recommendations",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Cross-Chain Bridges",
      description: "Secure and efficient asset transfers between blockchains",
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      title: "DAO Governance",
      description: "AI-enhanced decentralized autonomous organization tools",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Advanced Blockchain Technology | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered blockchain solutions for DeFi, NFTs, and enterprise applications. Secure, scalable, and intelligent blockchain development. Starting at $199/month." 
        />
        <meta 
          name="keywords" 
          content="AI blockchain, blockchain solutions, DeFi, smart contracts, NFT development, blockchain security, crypto development" 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Blockchain Solutions",
            "description": "AI-powered blockchain development and security platform",
            "url": "https://ziontechgroup.com/ai-blockchain-solutions",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "billingIncrement": "Monthly"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Blockchain Technology</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Blockchain Solutions
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your blockchain development with AI-powered solutions. Build secure, 
                scalable, and intelligent DeFi protocols, NFT platforms, and enterprise blockchain applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View Demo
                  <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Blockchain Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Security Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
                  <div className="text-gray-300 text-sm">Assets Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Blockchain AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cutting-edge AI technology meets blockchain innovation for next-generation applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Blockchain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart contract development to DeFi protocols, we provide end-to-end blockchain solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Blockchain Project
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're building DeFi protocols, NFT platforms, or enterprise solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your blockchain project grows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
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
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the blockchain revolution with AI-powered solutions. Start your project today!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">AI-Powered Security</h3>
                  <p className="text-cyan-400 text-sm">Advanced blockchain protection</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Smart Development</h3>
                  <p className="text-cyan-400 text-sm">AI-optimized solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Fast & Scalable</h3>
                  <p className="text-cyan-400 text-sm">High-performance blockchain</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBlockchainSolutionsPage;