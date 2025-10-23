import React from 'react'

import { Coins, CheckCircle, Star, Brain, Shield, Zap, Target, BarChart, Helmet, Check, Cpu } from 'lucide-react';
const BlockchainPage: React.FC = () => {
  const blockchainServices = [
import {Coins, CheckCircle, Star, Zap, Brain, BarChart, Target, Shield, Helmet} from 'lucide-react';;
constBlockchainPage: React.FC= () =>{constblockchainServices= [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,00 0/project',
      features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Testing & deployment', 'Documentation'],
      benefits: ['Automate business processes', 'Reduce transaction costs', 'Ensure transparency'],
      marketPrice: '$1 5,00 0-5 0,00 0/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Go', 'JavaScript']
   },
    {title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming.',
      icon: '🏦',
      price: 'Starting at $2 5,00 0/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools', 'Governance tokens'],
      benefits: ['Create new revenue streams', 'Access global liquidity', 'Reduce financial barriers'],
      marketPrice: '$5 0,00 0-20 0,00 0/project',
      category: 'DeFi',
      technologies: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Arbitrum']
   },
    {title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      icon: '🎨',
      price: 'Starting at $1 5,00 0/project',
      features: ['NFT minting', 'Marketplace functionality', 'Auction system', 'Royalty management', 'Mobile app'],
      benefits: ['Monetize digital assets', 'Create new business models', 'Engage communities'],
      marketPrice: '$3 0,00 0-10 0,00 0/project',
      category: 'NFTs',
      technologies: ['IPFS', 'OpenSea API', 'Web3.js', 'Ethers.js', 'React']
   },
    {title: 'Blockchain Integration Services',
      description: 'Integrate blockchain technology into existing business systems and applications.',
      icon: '🔗',
      price: 'Starting at $5,00 0/month',
      features: ['API development', 'System integration', 'Data synchronization', 'Security implementation', 'Maintenance'],
      benefits: ['Modernize legacy systems', 'Improve data integrity', 'Enable new capabilities'],
      marketPrice: '$8,00 0-2 0,00 0/month',
      category: 'Integration',
      technologies: ['Web3 APIs', 'REST APIs', 'GraphQL', 'Microservices', 'Cloud Integration']
   },
    {title: 'Cryptocurrency Wallet Development',
      description: 'Secure multi-chain cryptocurrency wallets with advanced features and security.',
      icon: '👛',
      price: 'Starting at $1 2,00 0/project',
      features: ['Multi-chain support', 'Hardware wallet integration', 'DeFi integration', 'Security features', 'Mobile & web'],
      benefits: ['Secure asset management', 'Multi-chain compatibility', 'Enhanced user experience'],
      marketPrice: '$2 5,00 0-8 0,00 0/project',
      category: 'Wallets',
      technologies: ['React Native', 'Flutter', 'Web3.js', 'WalletConnect', 'Hardware Security']
   },
    {title: 'Blockchain Security Auditing',
      description: 'Comprehensive security audits for smart contracts and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $3,00 0/audit',
      features: ['Code review', 'Vulnerability assessment', 'Penetration testing', 'Compliance checking', 'Remediation'],
      benefits: ['Prevent security breaches', 'Ensure compliance', 'Build user trust'],
      marketPrice: '$5,00 0-1 5,00 0/audit',
      category: 'Security',
      technologies: ['Mythril', 'Slither', 'Oyente', 'Echidna', 'Custom Tools']
   },
    {title: 'Token Development & ICO/IDO',
      description: 'Custom token development with ICO/IDO launch support and marketing strategies.',
      icon: '🪙',
      price: 'Starting at $1 0,00 0/project',
      features: ['Token creation', 'ICO/IDO platform', 'Marketing strategy', 'Legal compliance', 'Community building'],
      benefits: ['Raise capital efficiently', 'Build community', 'Create utility tokens'],
      marketPrice: '$2 0,00 0-10 0,00 0/project',
      category: 'Tokens',
      technologies: ['ERC-2 0', 'ERC-72 1', 'ERC-115 5', 'BEP-2 0', 'Custom Standards']
   },
    {title: 'Enterprise Blockchain Solutions',
      description: 'Private blockchain networks for enterprise use cases with custom governance.',
      icon: '🏢',
      price: 'Starting at $2 0,00 0/project',
      features: ['Private networks', 'Custom governance', 'Consensus mechanisms', 'Integration APIs', 'Management tools'],
      benefits: ['Improve transparency', 'Reduce costs', 'Enhance security'],
      marketPrice: '$4 0,00 0-15 0,00 0/project',
      category: 'Enterprise',
      technologies: ['Hyperledger', 'Ethereum Private', 'Quorum', 'Corda', 'Custom Blockchains']
   },
    {title: 'Cross-Chain Bridge Development',
      description: 'Secure cross-chain bridges for asset transfers between different blockchain networks.',
      icon: '🌉',
      price: 'Starting at $1 8,00 0/project',
      features: ['Multi-chain support', 'Asset locking', 'Minting & burning', 'Security mechanisms', 'Monitoring'],
      benefits: ['Enable interoperability', 'Expand user base', 'Increase liquidity'],
      marketPrice: '$3 5,00 0-12 0,00 0/project',
      category: 'Interoperability',
      technologies: ['Cosmos SDK', 'Polkado t', 'LayerZero', 'Wormhole', 'Custom Bridges']
   },
    {title: 'DAO Development & Governance',
      description: 'Decentralized Autonomous Organizations with voting, treasury, and governance mechanisms.',
      icon: '🗳️',
      price: 'Starting at $1 2,00 0/project',
      features: ['Voting systems', 'Treasury management', 'Proposal mechanisms', 'Governance tokens', 'Integration'],
      benefits: ['Decentralize decision making', 'Increase transparency', 'Engage communities'],
      marketPrice: '$2 5,00 0-8 0,00 0/project',
      category: 'DAOs',
      technologies: ['Aragon', 'Snapshot', 'Governor', 'Custom Governance', 'Voting Mechanisms']
   },
    {title: 'Blockchain Analytics & Monitoring',
      description: 'Real-time blockchain analytics, monitoring, and compliance reporting solutions.',
      icon: '📊',
      price: 'Starting at $2,50 0/month',
      features: ['Transaction monitoring', 'Compliance reporting', 'Risk assessment', 'Analytics dashboards', 'Alerts'],
      benefits: ['Ensure compliance', 'Monitor risks', 'Gain insights'],
      marketPrice: '$4,00 0-1 2,00 0/month',
      category: 'Analytics',
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Custom Analytics', 'Compliance Tools']
   },
    {title: 'Web3 Application Development',
      description: 'Complete Web3 applications with frontend, backend, and blockchain integration.',
      icon: '🌐',
      price: 'Starting at $1 5,00 0/project',
      features: ['Frontend development', 'Backend APIs', 'Blockchain integration', 'User authentication', 'Deployment'],
      benefits: ['Create Web3 experiences', 'Engage crypto users', 'Build decentralized apps'],
      marketPrice: '$3 0,00 0-10 0,00 0/project',
      category: 'Web3 Apps',
      technologies: ['React', 'Next.js', 'Node.js', 'Web3.js', 'Ethers.js']
   }
  ];
  constcategories= [...new Set(blockchainServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>Blockchain & Web3 Services - ZionTechGroup</titl><metaname="description"content="Advanced blockchain and Web3 services including smart contracts, DeFi, NFTs, and enterprise blockchainsolutions." /><metaname="keywords"content="blockchain development, smart contracts, DeFi, NFTs, Web3, cryptocurrency, tokendevelopment" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-orange-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-orange-600to-red-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Blockchain & Web3 Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-orange-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-orange-100max-w-3xlmx-auto">Build the future of decentralized applications with cutting-edge blockchain technology
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-orange-600px-8 py-3 rounded-lg font-semiboldhover:bg-orange-50transition-colors"></className="bg-white text-orange-600px-8 py-3 rounded-lg font-semiboldhover:bg-orange-50transition-colors">Explore Web3 Solutions
              </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-orange-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-orange-600transition-colors">Schedule Consultation
              </butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Blockchain Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Expert blockchain developers delivering secure, scalable, and innovative Web3 solutions
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><aclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">BlockchainExperts</h><pclassName="text-gray-600">Certified developers with deep expertise in multipleblockchainplatforms</p></di><divclassName="text-center"><divclassName="bg-red-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-red-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">SecurityFirst</h><pclassName="text-gray-600">Comprehensive security audits and best practices forallprojects</p></di><divclassName="text-center"><divclassName="bg-purple-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RapidDevelopment</h><pclassName="text-gray-600">Fast delivery with proven development methodo logiesandtools</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ProvenSuccess</h><pclassName="text-gray-600">Successfully launched100+ blockchain projectsacrossindustries</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Solutions
              </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} services for modern blockchain applications
              </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{blockchainServices
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-orange-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to50% vs market rates
                      </di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-orange-100text-orange-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-orange-100text-orange-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-orange-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-orange-700transition-colors"></spa></className="w-full bg-orange-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-orange-700transition-colors">Get Blockchain Consultation
                    </butto></di>))}
            </di></di></sectio>))}
        {/* Blockchain CapabilitiesShowcase */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Blockchain Capabilities
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive blockchain solutions covering all aspects of Web3 development
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-red-100rounded-lg"><aclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SmartContracts</h><pclassName="text-gray-600">Secure, audited smart contracts for allblockchainplatforms</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-pink-100rounded-lg"><CoinsclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">DeFiProtocols</h><pclassName="text-gray-600">Decentralized finance solutions including DEXs andlendingplatforms</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-cyan-100rounded-lg"><BrainclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">NFTSolutions</h><pclassName="text-gray-600">Complete NFT marketplace andcollectiondevelopment</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><ShieldclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SecurityAuditing</h><pclassName="text-gray-600">Comprehensive security audits andvulnerabilityassessments</p></di><divclassName="text-center p-6 bg-gradient-to-br from-indigo-50to-blue-100rounded-lg"><BarChartclassName="w-12h-1 2text-indigo-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">Analytics&Monitoring</h><pclassName="text-gray-600">Real-time blockchain analytics andcompliancemonitoring</p></di><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><CpuclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">Web3Applications</h><pclassName="text-gray-600">Complete Web3 applications with frontend andbackendintegration</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-orange-600to-red-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Build the Future of Web3?
          </h><spanclassName="text-xl mb-8text-orange-100"></spa></className="text-xl mb-8text-orange-100">Contact our blockchain experts for a free consultation and custom Web3 strategy
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-orange-600px-8 py-3 rounded-lg font-semiboldhover:bg-orange-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-orange-600transition-colors"
              >✉️ kleber@ziontechgroup.com
            </a></di><divclassName="mt-8 text-smtext-orange-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default BlockchainPage;
