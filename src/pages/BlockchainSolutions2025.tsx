import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Coins,
  Link,
  Database,
  Network,
  Key,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Wallet,
  Smartphone,
  Server,
  Cloud,
  Cpu,
  BarChart3
} from 'lucide-react';

const BlockchainSolutions2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState('defi');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const blockchainSolutions = {
    defi: [
      {
        title: 'DeFi Protocol Suite',
        description: 'Complete decentralized finance infrastructure with yield farming, liquidity pools, and cross-chain swaps.',
        features: ['Yield Farming', 'Liquidity Pools', 'Cross-chain Swaps', 'Automated Market Making'],
        price: 'Starting at $5,999/month',
        badge: 'Premium',
        icon: Coins,
        color: 'from-yellow-500 to-orange-500'
      },
      {
        title: 'Decentralized Exchange',
        description: 'Advanced DEX with order book and AMM functionality for seamless trading.',
        features: ['Order Book Trading', 'AMM Pools', 'Low Slippage', 'Multi-token Support'],
        price: 'Starting at $4,499/month',
        badge: 'Advanced',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-500'
      },
      {
        title: 'Lending Protocol',
        description: 'Decentralized lending and borrowing platform with automated risk management.',
        features: ['Collateralized Lending', 'Liquidation Protection', 'Interest Rate Optimization', 'Multi-asset Support'],
        price: 'Starting at $3,999/month',
        badge: 'Secure',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500'
      }
    ],
    nft: [
      {
        title: 'NFT Marketplace',
        description: 'Complete NFT marketplace with minting, trading, and royalty management.',
        features: ['NFT Minting', 'Royalty Management', 'Multi-wallet Support', 'Creator Tools'],
        price: 'Starting at $2,799/month',
        badge: 'Popular',
        icon: FileText,
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Gaming NFT Platform',
        description: 'Specialized NFT platform for gaming assets with in-game integration.',
        features: ['In-game Assets', 'Play-to-Earn', 'Cross-game Compatibility', 'Gaming SDK'],
        price: 'Starting at $3,499/month',
        badge: 'Gaming',
        icon: Smartphone,
        color: 'from-indigo-500 to-purple-500'
      }
    ],
    enterprise: [
      {
        title: 'Enterprise Blockchain',
        description: 'Private blockchain solutions for enterprise use cases with advanced privacy features.',
        features: ['Private Networks', 'Consensus Mechanisms', 'Smart Contracts', 'API Integration'],
        price: 'Starting at $7,999/month',
        badge: 'Enterprise',
        icon: Server,
        color: 'from-gray-600 to-blue-600'
      },
      {
        title: 'Supply Chain Tracking',
        description: 'Transparent supply chain solutions with immutable tracking and verification.',
        features: ['Product Tracking', 'Quality Verification', 'Compliance Monitoring', 'Real-time Updates'],
        price: 'Starting at $4,999/month',
        badge: 'Supply Chain',
        icon: Network,
        color: 'from-teal-500 to-blue-500'
      },
      {
        title: 'Identity Management',
        description: 'Decentralized identity solutions with self-sovereign identity capabilities.',
        features: ['Self-Sovereign Identity', 'Privacy Protection', 'Credential Verification', 'Multi-platform Support'],
        price: 'Starting at $3,799/month',
        badge: 'Identity',
        icon: Key,
        color: 'from-orange-500 to-red-500'
      }
    ]
  };

  const features = [
    {
      title: 'Multi-Chain Support',
      description: 'Support for Ethereum, Polygon, BSC, and other major blockchains',
      icon: Network,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security audits and penetration testing',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Smart Contracts',
      description: 'Gas-optimized smart contracts with automated testing',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Integration',
      description: 'RESTful APIs and SDKs for seamless integration',
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const useCases = [
    {
      industry: 'Finance',
      solution: 'DeFi Lending Platform',
      description: 'Decentralized lending platform with $50M+ in total value locked.',
      results: '40% reduction in lending costs, 99.9% uptime',
      icon: Coins,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      industry: 'Gaming',
      solution: 'Play-to-Earn Gaming',
      description: 'NFT-based gaming platform with cross-game asset compatibility.',
      results: '2M+ active users, $100M+ in NFT trading volume',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    },
    {
      industry: 'Supply Chain',
      solution: 'Food Traceability',
      description: 'Blockchain-based food traceability system for major retailers.',
      results: '100% traceability, 60% reduction in food waste',
      icon: Network,
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Healthcare',
      solution: 'Medical Records',
      description: 'Secure, decentralized medical records management system.',
      results: '99.99% data integrity, HIPAA compliant',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO',
      company: 'DeFi Capital',
      content: 'Zion Tech Group\'s DeFi solutions have transformed our lending platform. The security and performance are outstanding.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Maria Garcia',
      role: 'Founder',
      company: 'GameChain Studios',
      content: 'Their NFT gaming platform has enabled us to create a thriving play-to-earn ecosystem with over 1M players.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'David Chen',
      role: 'VP Operations',
      company: 'Global Supply Co.',
      content: 'The blockchain supply chain solution has provided complete transparency and reduced our operational costs by 30%.',
      rating: 5,
      avatar: 'DC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Blockchain Solutions</h1>
              <p className="text-sm text-cyan-300">Powered by Zion Tech Group</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#use-cases" className="hover:text-cyan-400 transition-colors">Use Cases</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Decentralized Future</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Blockchain Solutions
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Build the future of decentralized applications with our comprehensive blockchain solutions. 
            From DeFi to NFTs, we provide secure, scalable, and innovative blockchain infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Solutions
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '$2B+', label: 'Value Secured', icon: Shield },
              { number: '99.9%', label: 'Uptime', icon: Gauge },
              { number: '50+', label: 'Blockchains', icon: Network },
              { number: '1000+', label: 'Smart Contracts', icon: FileText }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain solutions for every industry and use case
            </p>
          </motion.div>

          {/* Solution Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'defi', name: 'DeFi Solutions', icon: Coins },
              { id: 'nft', name: 'NFT Platforms', icon: FileText },
              { id: 'enterprise', name: 'Enterprise', icon: Server }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSolution(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeSolution === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainSolutions[activeSolution as keyof typeof blockchainSolutions]?.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold">
                    {solution.badge}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{solution.price}</span>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blockchain Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with security, scalability, and innovation at the core
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our blockchain solutions are transforming industries
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                    <p className="text-cyan-400 font-semibold">{useCase.solution}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg">
                  <p className="text-green-400 font-semibold text-sm">Results: {useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Blockchain Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our blockchain solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the Future with Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the blockchain revolution and create decentralized solutions that transform industries
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Your Blockchain Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Blockchain Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Blockchain Solutions 2025</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Building the decentralized future.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlockchainSolutions2025;