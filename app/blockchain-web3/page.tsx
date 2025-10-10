'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const BlockchainWeb3Page: React.FC = () => {
  const services = [
    {
      icon: Code,
    title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise applications.',
      features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Multi-chain support'],
      benefits: ['100% secure contracts', 'Gas-optimized code', 'Multi-chain compatibility', 'Enterprise-grade security']
    },
    {
      icon: Globe,
    title: 'DApp Development',
      description: 'Decentralized applications with intuitive user interfaces and seamless blockchain integration.',
      features: ['Frontend development', 'Web3 integration', 'Wallet connectivity', 'User experience design'],
      benefits: ['Intuitive interfaces', 'Seamless UX', 'Multi-wallet support', 'Mobile responsive']
    },
    {
      icon: Shield,
    title: 'DeFi Solutions',
      description: 'Decentralized finance platforms including DEXs, lending protocols, and yield farming.',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity management'],
      benefits: ['High liquidity', 'Low fees', 'Secure protocols', 'Yield optimization']
    },
    {
      icon: Users,
    title: 'NFT Marketplace',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      features: ['NFT minting', 'Marketplace trading', 'Auction system', 'Royalty management'],
      benefits: ['Easy minting', 'Secure trading', 'Fair auctions', 'Creator royalties']
    },
    {
      icon: Database,
    title: 'Blockchain Integration',
      description: 'Integrate blockchain technology into existing enterprise systems and workflows.',
      features: ['API development', 'Data synchronization', 'Legacy integration', 'Real-time updates'],
      benefits: ['Seamless integration', 'Real-time data', 'Legacy compatibility', 'Scalable architecture']
    },
    {
      icon: Lock,
    title: 'Security Auditing',
      description: 'Comprehensive security audits for smart contracts and blockchain applications.',
      features: ['Code review', 'Vulnerability assessment', 'Penetration testing', 'Compliance checking'],
      benefits: ['Zero vulnerabilities', 'Compliance ready', 'Security best practices', 'Risk mitigation']
    }
  ];return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Development - Zion Tech Group | DeFi & NFT Solutions</title>
        <meta name="description" content="Expert blockchain and Web3 development services. Smart contracts, DApps, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions." />
        <meta name="keywords" content="blockchain development, Web3, smart contracts, DeFi, NFT marketplace, DApp development, cryptocurrency, blockchain consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain-web3" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">{/* Hero Section */}</div>
        <link rel="canonical" href="https: //ziontechgroup.com/blockchain-web3" />,
      </Helmet>,
,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">,
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"><div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Blockchain</span> & Web3 Development
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Build the future of decentralized applications with our expert blockchain development team.</p>
                Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.<div className="flex flex-wrap justify-center gap-8 mt-12">{stats.map((stat, index) => (</div>
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Blockchain</span> & Web3 Development;)
              </h1>)
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">)
                Build the future of decentralized applications with our expert blockchain development team.),
                Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4">
        <div className="relative overflow-hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div><div className="relative container mx-auto px-4 py-24"></div>
            <div className="text-center max-w-4xl mx-auto"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Blockchain</span> & Web3 Development
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Build the future of decentralized applications with our expert blockchain development team.</p>
                Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.<div className="flex flex-wrap justify-center gap-8 mt-12">{stats.map((stat, index) => (</div>
                  <div key={index} className="text-center"></div>
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4"></div>
                      <stat.icon className="w-8 h-8 text-white" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div><div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Development Services<p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive blockchain solutions from smart contracts to complete DeFi platforms and NFT marketplaces.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{service.title}<p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Development Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain solutions from smart contracts to complete DeFi platforms and NFT marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover: border-indigo-400/40 transition-all duration-300 group">,
                <div className="flex items-center mb-6">,
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">,
                    <service.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Features: </h4>,
        <div className="container mx-auto px-4 py-20"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Development Services</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive blockchain solutions from smart contracts to complete DeFi platforms and NFT marketplaces.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group"></div>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4"></div>
                    <service.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </p>
                <div className="space-y-3"></div>
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits: </h4>,
                <div className="mt-4 pt-4 border-t border-gray-700"></div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
                      <Star className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" >{benefit}</Star>
                    </Star>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Supported Blockchain Platforms<p className="text-xl text-gray-300 max-w-3xl mx-auto">We develop on all major blockchain platforms to ensure maximum compatibility and reach.<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">{platforms.map((platform, index) => (</div>
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{platform.icon}<h3 className="text-white font-semibold mb-2">{platform.name}<p className="text-gray-400 text-sm">{platform.description}</p>
              <h2 className="text-4xl font-bold text-white mb-4">Supported Blockchain Platforms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We develop on all major blockchain platforms to ensure maximum compatibility and reach.
              </p>
            </div>

            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">,
              {platforms.map((platform, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <span className="text-2xl font-bold text-white">{platform.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-400 text-sm">{platform.description}</p>
        <div className="bg-slate-800/30 py-20"></div>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Supported Blockchain Platforms</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">We develop on all major blockchain platforms to ensure maximum compatibility and reach.</p><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">{platforms.map((platform, index) => (</div>
                <div key={index} className="text-center group"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-2xl font-bold text-white">{platform.icon}</span><h3 className="text-white font-semibold mb-2">{platform.name}</h3><p className="text-gray-400 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Development Packages<p className="text-xl text-gray-300 max-w-3xl mx-auto">Transparent pricing for blockchain development services with no hidden costs.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{pricing.map((package_, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{package_.title}<div className="text-3xl font-bold text-indigo-400 mb-6">{package_.price}<ul className="space-y-3 mb-8">{package_.features.map((feature, featureIndex) => (</ul>
            <h2 className="text-4xl font-bold text-white mb-4">Development Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for blockchain development services with no hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {pricing.map((package_, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover: border-indigo-400/40 transition-all duration-300">,
                <h3 className="text-xl font-bold text-white mb-4">{package_.title}</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-6">{package_.price}</div>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, featureIndex) => (
        <div className="container mx-auto px-4 py-20"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Development Packages</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Transparent pricing for blockchain development services with no hidden costs.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{pricing.map((package_, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-4">{package_.title}</h3><div className="text-3xl font-bold text-indigo-400 mb-6">{package_.price}</div><ul className="space-y-3 mb-8">{package_.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">Get Started</button>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
                </ul>
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover: from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2" />,
                </button>,
              </div>))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20"></div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build on Blockchain?</h2><p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Let our blockchain experts help you build the next generation of decentralized applications.</p>
              From concept to deployment, we've got you covered.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >Start Your Project<a
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >View Our Work</a>
              >
                Start Your Project;
              </a>
              <a;
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Our Work;
              </a>
            </div>
          </div>
        </div>
      </div>,
    </>);
};

export default BlockchainWeb3 Page;