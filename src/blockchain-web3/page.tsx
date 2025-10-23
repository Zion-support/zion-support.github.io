import React from 'react';

import {Coins, CheckCircle, Star, Zap, Brain, Database, Shield, Helmet, Globe, Globe} from 'lucide-react';;;
constBlockchainWeb3 Page: React.FC= () =>{constblockchainServices= [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,00 0/project',
      features: ['Solidity development', 'Smart contract auditing', 'Gas optimization', 'Security testing', 'Deployment & maintenance'],
      benefits: ['Automate business processes', 'Reduce transaction costs', 'Ensure transparency and trust'],
      marketPrice: '$1 5,00 0-5 0,00 0/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Hardhat', 'Truffle', 'OpenZeppelin']
   },
    {title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming solutions.',
      icon: '🏦',
      price: 'Starting at $2 5,00 0/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity mining', 'Cross-chain bridges'],
      benefits: ['Enable decentralized finance', 'Reduce financial intermediaries', 'Increase financial inclusion'],
      marketPrice: '$5 0,00 0-20 0,00 0/project',
      category: 'DeFi',
      technologies: ['Uniswap', 'Compound', 'Aave', 'Chainlink', 'Web3.js']
   },
    {title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and royalty management capabilities.',
      icon: '🎨',
      price: 'Starting at $1 5,00 0/project',
      features: ['NFT minting', 'Marketplace functionality', 'Royalty management', 'Metadata storage', 'Payment integration'],
      benefits: ['Monetize digital assets', 'Enable creator economy', 'Provide new revenue streams'],
      marketPrice: '$3 0,00 0-10 0,00 0/project',
      category: 'NFTs',
      technologies: ['ERC-72 1', 'ERC-115 5', 'IPFS', 'OpenSea API', 'Web3 Integration']
   },
    {title: 'DAO Development & Governance',
      description: 'Decentralized autonomous organizations with voting mechanisms and governance token systems.',
      icon: '🗳️',
      price: 'Starting at $1 2,00 0/project',
      features: ['Governance token design', 'Voting mechanisms', 'Proposal systems', 'Treasury management', 'Multi-sig wallets'],
      benefits: ['Enable decentralized governance', 'Increase community participation', 'Ensure transparent decision making'],
      marketPrice: '$2 5,00 0-8 0,00 0/project',
      category: 'DAOs',
      technologies: ['Governance Tokens', 'Snapshot', 'Gnosis Safe', 'Aragon', 'Compound Governance']
   },
    {title: 'Blockchain Infrastructure',
      description: 'Custom blockchain networks, sidechains, and layer2solutions for enterprise applications.',
      icon: '⛓️',
      price: 'Starting at $5 0,00 0/project',
      features: ['Custom blockchain development', 'Consensus mechanisms', 'Node infrastructure', 'API development', 'Monitoring systems'],
      benefits: ['Customize blockchain for specific needs', 'Improve scalability', 'Reduce transaction costs'],
      marketPrice: '$10 0,00 0-50 0,00 0/project',
      category: 'Infrastructure',
      technologies: ['Substrate', 'Cosmos SDK', 'Hyperledger', 'Ethereum', 'Polkado t']
   },
    {title: 'Web3 Integration Services',
      description: 'Integrate Web3 functionality into existing applications with wallet connections and blockchain interactions.',
      icon: '🔗',
      price: 'Starting at $5,00 0/project',
      features: ['Wallet integration', 'Web3 authentication', 'Blockchain data fetching', 'Transaction handling', 'User onboarding'],
      benefits: ['Modernize existing applications', 'Enable Web3 features', 'Improve user experience'],
      marketPrice: '$1 0,00 0-3 0,00 0/project',
      category: 'Web3 Integration',
      technologies: ['MetaMask', 'WalletConnect', 'Web3.js', 'Ethers.js', 'React Web3']
   },
    {title: 'Cryptocurrency Exchange Development',
      description: 'Secure, scalable cryptocurrency exchanges with advanced trading features and compliance tools.',
      icon: '💱',
      price: 'Starting at $4 0,00 0/project',
      features: ['Trading engine', 'Order matching', 'KYC/AML integration', 'Security features', 'Mobile applications'],
      benefits: ['Enable cryptocurrency trading', 'Generate trading fees', 'Provide liquidity'],
      marketPrice: '$8 0,00 0-30 0,00 0/project',
      category: 'Exchanges',
      technologies: ['Matching Engine', 'Security Protocols', 'KYC Solutions', 'Mobile SDKs', 'API Development']
   },
    {title: 'Token Economics & Design',
      description: 'Comprehensive tokenomics design including token distribution, utility, and economic models.',
      icon: '💰',
      price: 'Starting at $8,00 0/project',
      features: ['Token utility design', 'Economic modeling', 'Vesting schedules', 'Inflation mechanisms', 'Governance integration'],
      benefits: ['Create sustainable token economy', 'Align incentives', 'Ensure long-term value'],
      marketPrice: '$1 5,00 0-5 0,00 0/project',
      category: 'Tokenomics',
      technologies: ['Economic Modeling', 'Token Standards', 'Vesting Contracts', 'Governance Systems']
   },
    {title: 'Blockchain Security Audits',
      description: 'Comprehensive security audits for smart contracts, protocols, and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $5,00 0/audit',
      features: ['Smart contract auditing', 'Vulnerability assessment', 'Penetration testing', 'Code review', 'Security recommendations'],
      benefits: ['Identify security vulnerabilities', 'Prevent exploits', 'Ensure code quality'],
      marketPrice: '$1 0,00 0-5 0,00 0/audit',
      category: 'Security',
      technologies: ['Static Analysis', 'Dynamic Testing', 'Formal Verification', 'Security Tools']
   },
    {title: 'Cross-Chain Solutions',
      description: 'Interoperability solutions enabling seamless asset and data transfer between different blockchains.',
      icon: '🌉',
      price: 'Starting at $2 0,00 0/project',
      features: ['Cross-chain bridges', 'Asset wrapping', 'Interoperability protocols', 'Multi-chain wallets', 'Cross-chain DEXs'],
      benefits: ['Enable blockchain interoperability', 'Increase liquidity', 'Reduce fragmentation'],
      marketPrice: '$4 0,00 0-15 0,00 0/project',
      category: 'Interoperability',
      technologies: ['Polkado t', 'Cosmos', 'Chainlink', 'Wormhole', 'LayerZero']
   },
    {title: 'Metaverse Development',
      description: 'Virtual worlds, avatars, and immersive experiences built on blockchain technology.',
      icon: '🌐',
      price: 'Starting at $3 0,00 0/project',
      features: ['3 D virtual worlds', 'Avatar systems', 'Virtual real estate', 'In-world economies', 'VR/AR integration'],
      benefits: ['Create immersive experiences', 'Enable virtual economies', 'Provide new engagement channels'],
      marketPrice: '$6 0,00 0-25 0,00 0/project',
      category: 'Metaverse',
      technologies: ['Unity', 'Unreal Engine', 'WebXR', 'Blockchain Integration', 'NFT Standards']
   },
    {title: 'Blockchain Consulting & Strategy',
      description: 'Strategic blockchain consulting and technology roadmap development for enterprise ado ption.',
      icon: '💡',
      price: 'Starting at $40 0/hour',
      features: ['Blockchain strategy', 'Technology assessment', 'Use case identification', 'Implementation planning', 'Regulatory guidance'],
      benefits: ['Navigate blockchain landscape', 'Make informed decisions', 'Ensure successful ado ption'],
      marketPrice: '$60 0-1,50 0/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Regulatory Analysis', 'Risk Management']
   }
  ];
  constcategories= [...new Set(blockchainServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>Blockchain & Web3 Services - ZionTechGroup</titl><metaname="description"content="Advanced blockchain and Web3 development services including DeFi, NFTs, smart contracts, and metaversesolutions." /><metaname="keywords"content="blockchain development, Web3, DeFi, NFTs, smart contracts, DAOs, cryptocurrency,metaverse" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-purple-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-purple-600to-indigo-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Blockchain & Web3 Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-purple-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-purple-100max-w-3xlmx-auto">Build the future of decentralized applications with cutting-edge blockchain and Web3 solutions
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colors"></className="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colors">Explore Web3 Solutions
              </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-purple-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-purple-600transition-colors">Schedule Consultation
              </butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Blockchain Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Leading blockchain expertise with proven track record in DeFi, NFTs, and Web3 applications
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-purple-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><aclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">BlockchainExperts</h><pclassName="text-gray-600">Certified developers with deepblockchainexpertise</p></di><divclassName="text-center"><divclassName="bg-blue-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">SecurityFirst</h><pclassName="text-gray-600">Audited smart contracts and securitybestpractices</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RapidDevelopment</h><pclassName="text-gray-600">Fast delivery with proven developmentmethodologies</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><GlobeclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Future-Ready</h><pclassName="text-gray-600">Cutting-edge Web3 technologiesandstandards</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Services
              </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} solutions for the decentralized future
              </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{blockchainServices
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-purple-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to50% vs market rates
                      </di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-purple-100text-purple-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-purple-100text-purple-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-purple-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-purple-700transition-colors"></spa></className="w-full bg-purple-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-purple-700transition-colors">Get Web3 Consultation
                    </butto></di>))}
            </di></di></sectio>))}
        {/* Blockchain CapabilitiesShowcase */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Blockchain Capabilities
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive blockchain technologies and Web3 development expertise
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-indigo-100rounded-lg"><aclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SmartContracts</h><pclassName="text-gray-600">Secure, audited smart contracts for anyusecase</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-cyan-100rounded-lg"><CoinsclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">DeFiProtocols</h><pclassName="text-gray-600">Decentralized finance solutionsandprotocols</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><ShieldclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SecurityAudits</h><pclassName="text-gray-600">Comprehensive security auditsandtesting</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><GlobeclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">Web3Integration</h><pclassName="text-gray-600">Seamless Web3 integration forexistingapplications</p></di><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><DatabaseclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">BlockchainInfrastructure</h><pclassName="text-gray-600">Custom blockchain networksandinfrastructure</p></di><divclassName="text-center p-6 bg-gradient-to-br from-indigo-50to-blue-100rounded-lg"><BrainclassName="w-12h-1 2text-indigo-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">TokenEconomics</h><pclassName="text-gray-600">Comprehensive tokenomics designandmodeling</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-purple-600to-indigo-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Build the Future of Web3?
          </h><spanclassName="text-xl mb-8text-purple-100"></spa></className="text-xl mb-8text-purple-100">Contact our blockchain experts for a free consultation and custom Web3 strategy
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-purple-600transition-colors"
              >✉️ kleber@ziontechgroup.com
            </a></di><divclassName="mt-8 text-smtext-purple-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default BlockchainWeb3 Page;