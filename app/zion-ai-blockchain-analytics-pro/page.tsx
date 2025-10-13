import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  BarChart3, 
  Eye, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Brain,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Database,
  Lock,
  Activity,
  AlertTriangle
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIBlockchainAnalyticsProPage = () => {
  const features = [
    {
      title: "Real-time Blockchain Monitoring",
      description: "Monitor all major blockchains in real-time with AI-powered anomaly detection and threat analysis",
      icon: <Activity className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms analyze transaction patterns to identify potential risks and fraud",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance & Regulatory Tools",
      description: "Automated compliance monitoring and reporting for KYC, AML, and regulatory requirements",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics with customizable dashboards, reports, and data visualization tools",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$199",
      period: "month",
      description: "Perfect for small crypto businesses",
      features: [
        "Up to 5 blockchain networks",
        "Basic analytics dashboard",
        "Standard risk assessment",
        "Email support",
        "10GB data storage",
        "Basic compliance tools"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing crypto companies",
      features: [
        "Up to 20 blockchain networks",
        "Advanced analytics dashboard",
        "AI-powered risk assessment",
        "Priority support",
        "100GB data storage",
        "Full compliance suite",
        "API access",
        "Custom alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "month",
      description: "For large crypto organizations",
      features: [
        "Unlimited blockchain networks",
        "Custom analytics dashboard",
        "Advanced AI risk models",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Full compliance suite",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Cryptocurrency Exchanges",
      description: "Monitor trading patterns, detect market manipulation, and ensure regulatory compliance",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "99.9% fraud detection"
    },
    {
      title: "DeFi Platforms",
      description: "Analyze smart contract interactions, detect vulnerabilities, and monitor protocol health",
      icon: <Lock className="w-6 h-6" />,
      benefit: "Real-time threat detection"
    },
    {
      title: "Financial Institutions",
      description: "Compliance monitoring, risk assessment, and regulatory reporting for crypto assets",
      icon: <Shield className="w-6 h-6" />,
      benefit: "100% compliance rate"
    },
    {
      title: "Investment Firms",
      description: "Portfolio analysis, market intelligence, and investment decision support tools",
      icon: <Target className="w-6 h-6" />,
      benefit: "40% better returns"
    }
  ];

  const supportedBlockchains = [
    "Bitcoin", "Ethereum", "Binance Smart Chain", "Polygon", "Solana", "Cardano",
    "Avalanche", "Polkadot", "Cosmos", "Chainlink", "Uniswap", "Aave"
  ];

  const testimonials = [
    {
      name: "Dr. James Wilson",
      company: "CryptoExchange Pro",
      role: "Chief Security Officer",
      content: "Zion AI Blockchain Analytics Pro has revolutionized our security monitoring. We've detected 99.9% of fraudulent activities before they could impact our users.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "DeFi Innovations",
      role: "Head of Risk Management",
      content: "The AI-powered risk assessment is incredibly accurate. We've reduced false positives by 80% while improving threat detection by 300%.",
      rating: 5
    },
    {
      name: "Robert Chen",
      company: "Digital Asset Management",
      role: "Compliance Director",
      content: "This platform has made regulatory compliance effortless. The automated reporting saves us hundreds of hours every month.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Blockchain Analytics Pro - Advanced Crypto Analytics Platform | Zion Tech Group"
        description="Professional blockchain analytics platform with AI-powered risk assessment, real-time monitoring, and compliance tools for cryptocurrency businesses."
        keywords="blockchain analytics, crypto analytics, cryptocurrency monitoring, DeFi analytics, blockchain security, crypto compliance, risk assessment"
        canonical="https://ziontechgroup.com/zion-ai-blockchain-analytics-pro"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Shield className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Advanced Blockchain Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Zion AI Blockchain Analytics Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most advanced blockchain analytics platform powered by AI. Monitor, analyze, and secure 
              your cryptocurrency operations with real-time intelligence and compliance tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                View Live Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Blockchain Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive blockchain analytics powered by cutting-edge AI technology 
                to keep your crypto operations secure and compliant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Supported Blockchains */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Blockchain Networks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor and analyze transactions across all major blockchain networks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {supportedBlockchains.map((blockchain, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{blockchain}</span>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading companies in the cryptocurrency and blockchain space
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Professional Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your blockchain analytics needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
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
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our blockchain analytics platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Secure Your Blockchain Operations
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of crypto businesses using our AI-powered analytics platform. 
                Start your free trial today and experience the future of blockchain intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Shield className="w-5 h-5" />}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                >
                  Call +1 302 464 0950
                </FuturisticButton>
              </div>
              
              <div className="text-center text-gray-300">
                <p className="mb-2">Contact us for enterprise solutions and custom pricing</p>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default ZionAIBlockchainAnalyticsProPage;