import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  Star,
  ArrowRight,
  Zap,
  Eye,
  TrendingUp,
  Target,
  MessageSquare,
  Globe,
  Shield,
  Award,
  PieChart,
  Activity,
  Smartphone,
  Settings,
  Users,
  Clock,
  Code,
  Server,
  Database,
  Cloud,
  Lock,
  Monitor
} from 'lucide-react';

const BlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      title: "Smart Contract Development",
      description: "Custom smart contract development and deployment on multiple blockchain platforms",
      icon: <Code className="w-6 h-6" />,
      details: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications"
    },
    {
      title: "Blockchain Integration",
      description: "Seamless integration of blockchain technology into existing business systems",
      icon: <LinkIcon className="w-6 h-6" />,
      details: "API development and middleware for blockchain connectivity"
    },
    {
      title: "DeFi Platform Development",
      description: "Decentralized finance platforms with automated market makers and yield farming",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Complete DeFi ecosystem development with liquidity pools and governance tokens"
    },
    {
      title: "NFT Marketplace Solutions",
      description: "Custom NFT marketplaces with minting, trading, and auction capabilities",
      icon: <Award className="w-6 h-6" />,
      details: "Full-featured NFT platforms with royalty management and metadata handling"
    },
    {
      title: "Blockchain Analytics",
      description: "Advanced analytics and monitoring for blockchain transactions and smart contracts",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Real-time transaction monitoring and smart contract performance analytics"
    },
    {
      title: "Security Auditing",
      description: "Comprehensive security audits for smart contracts and blockchain applications",
      icon: <Shield className="w-6 h-6" />,
      details: "Professional security auditing with detailed vulnerability reports"
    }
  ];

  const pricingPlans = [
    {
      name: "Consultation",
      price: "$299",
      period: "per hour",
      description: "Blockchain strategy and technical consultation",
      features: [
        "Technical consultation",
        "Strategy planning",
        "Architecture design",
        "Technology selection",
        "Risk assessment",
        "Implementation roadmap"
      ],
      popular: false
    },
    {
      name: "Development",
      price: "$15,000",
      period: "per project",
      description: "Custom blockchain application development",
      features: [
        "Smart contract development",
        "Frontend development",
        "Backend integration",
        "Testing & deployment",
        "Documentation",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Large-scale blockchain solutions for enterprises",
      features: [
        "Custom blockchain development",
        "Multi-chain integration",
        "Security auditing",
        "Performance optimization",
        "24/7 support",
        "Dedicated team",
        "White-label solutions",
        "Ongoing maintenance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "CTO, FinTech Startup",
      content: "Zion's blockchain solutions helped us launch our DeFi platform in record time. The smart contracts are rock solid.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "CEO, NFT Marketplace",
      content: "The NFT marketplace they built for us has processed over $10M in transactions. Flawless execution.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Blockchain Architect, Enterprise Corp",
      content: "Their security auditing caught critical vulnerabilities we missed. Saved us from potential disaster.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - DeFi, NFT & Smart Contract Development | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Expert blockchain development services including DeFi platforms, NFT marketplaces, smart contracts, and enterprise blockchain solutions. Custom development starting at $15,000." 
        />
        <meta 
          name="keywords" 
          content="blockchain development, DeFi platform, NFT marketplace, smart contracts, blockchain consulting, cryptocurrency development, Web3 solutions" 
        />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Blockchain Development 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Blockchain Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build the future of Web3 with our expert blockchain development services. 
              DeFi platforms, NFT marketplaces, smart contracts, and enterprise blockchain solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Blockchain Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$100M+</div>
                <div className="text-gray-300 text-sm">Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Blockchain Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From concept to deployment, we provide end-to-end blockchain solutions.
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
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-sm text-cyan-400">
                    {feature.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the engagement model that works best for your project needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
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
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Blockchain Innovators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are using our blockchain solutions to build the future
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the Web3 revolution with our expert blockchain development services. 
                Let's build the future together. Contact us for a free consultation!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;