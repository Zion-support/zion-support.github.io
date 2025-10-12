import React from 'react';
import { CheckCircle, ArrowRight, Link as LinkIcon, Coins, Shield, Zap, DollarSign, Star, Users, Clock, Database, Network, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlockchainSolutionsPage: React.FC = () => {
  const blockchainServices = [
    {
      icon: <LinkIcon className="w-8 h-8 text-blue-500" />,
      title: 'Smart Contract Development',
      description: 'Custom smart contracts for DeFi, NFTs, and enterprise applications on multiple blockchain platforms.',
      features: ['Ethereum & Polygon', 'Solidity development', 'Security auditing', 'Gas optimization'],
      pricing: 'Starting at $15,000',
      link: '/smart-contract-development',
      popular: true,
      duration: '4-8 weeks'
    },
    {
      icon: <Coins className="w-8 h-8 text-yellow-500" />,
      title: 'DeFi Platform Development',
      description: 'Complete decentralized finance platforms including DEXs, lending protocols, and yield farming.',
      features: ['DEX development', 'Liquidity pools', 'Yield farming', 'Token economics'],
      pricing: 'Starting at $50,000',
      link: '/defi-platform-development',
      popular: true,
      duration: '12-16 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'NFT Marketplace',
      description: 'Custom NFT marketplaces with minting, trading, and royalty management capabilities.',
      features: ['NFT minting', 'Marketplace trading', 'Royalty management', 'Multi-chain support'],
      pricing: 'Starting at $25,000',
      link: '/nft-marketplace',
      popular: false,
      duration: '8-12 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Blockchain Integration',
      description: 'Integrate blockchain technology into existing business systems and workflows.',
      features: ['API development', 'System integration', 'Data migration', 'Legacy compatibility'],
      pricing: 'Starting at $20,000',
      link: '/blockchain-integration',
      popular: true,
      duration: '6-10 weeks'
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-500" />,
      title: 'Web3 Applications',
      description: 'Full-stack Web3 applications with wallet integration and decentralized features.',
      features: ['Wallet integration', 'MetaMask support', 'IPFS storage', 'Decentralized identity'],
      pricing: 'Starting at $30,000',
      link: '/web3-applications',
      popular: false,
      duration: '10-14 weeks'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: 'Blockchain Consulting',
      description: 'Strategic consulting for blockchain adoption and implementation in your business.',
      features: ['Strategy development', 'Technology selection', 'Risk assessment', 'Implementation planning'],
      pricing: 'Starting at $200/hour',
      link: '/blockchain-consulting',
      popular: false,
      duration: 'As needed'
    }
  ];

  const benefits = [
    {
      title: 'Future-Proof Technology',
      description: 'Build on cutting-edge blockchain technology that will stand the test of time',
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Decentralized Security',
      description: 'Leverage blockchain\'s inherent security features for tamper-proof solutions',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Transparent Operations',
      description: 'Create transparent and auditable business processes with blockchain',
      icon: <Database className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce intermediaries and operational costs with smart contracts',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'DeFi Startup',
      content: 'The smart contract development was flawless. Our DeFi platform launched without any issues and has been running smoothly.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'NFT Art Gallery',
      content: 'The NFT marketplace they built for us exceeded our expectations. The user experience is incredible.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Enterprise Corp',
      content: 'Their blockchain integration service helped us modernize our supply chain. The transparency and efficiency gains are remarkable.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced blockchain solutions including smart contracts, DeFi platforms, NFT marketplaces, and Web3 applications. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="blockchain, smart contracts, DeFi, NFTs, Web3, cryptocurrency, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Blockchain</span>
            <br />
            Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi platforms, 
            we build decentralized solutions that drive innovation and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Blockchain Journey
            </Link>
            <Link
              to="/blockchain-solutions#services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain services designed to unlock the potential of decentralized technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Blockchain Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cutting-edge blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have embraced blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Embrace Blockchain Technology?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the decentralized future with our comprehensive blockchain solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/blockchain-solutions#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainSolutionsPage;