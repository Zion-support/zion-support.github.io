import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AIBlockchainSolutionsPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'AI-Powered Smart Contracts',
      description: 'Intelligent smart contracts with self-executing logic, automated dispute resolution, and adaptive terms based on real-time data.',
      icon: '🤖',
      price: '$1,999/month',
      features: [
        'Self-Executing Logic',
        'Automated Dispute Resolution',
        'Adaptive Contract Terms',
        'Real-time Data Integration',
        'Multi-chain Support',
        'Gas Optimization',
        'Security Auditing',
        'Upgradeable Contracts'
      ],
      benefits: [
        'Reduce contract execution time by 80%',
        'Eliminate manual contract management',
        'Increase transparency and trust',
        'Reduce legal costs by 60%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'AI/ML', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI DeFi Trading Platform',
      description: 'Intelligent decentralized finance platform with automated trading, yield farming optimization, and risk management.',
      icon: '💰',
      price: '$2,499/month',
      features: [
        'Automated Trading Strategies',
        'Yield Farming Optimization',
        'Risk Management AI',
        'Liquidity Pool Analysis',
        'Cross-chain Arbitrage',
        'Portfolio Rebalancing',
        'Market Prediction Models',
        'Compliance Monitoring'
      ],
      benefits: [
        'Increase trading profits by 40%',
        'Reduce risk exposure by 50%',
        'Automate complex strategies',
        'Optimize yield farming returns'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'DeFi',
      technologies: ['Python', 'Web3.py', 'Uniswap', 'Compound', 'Machine Learning', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI NFT Marketplace Platform',
      description: 'Intelligent NFT marketplace with AI-powered valuation, automated minting, and smart recommendation engine.',
      icon: '🎨',
      price: '$1,799/month',
      features: [
        'AI-Powered Valuation',
        'Automated Minting',
        'Smart Recommendations',
        'Royalty Management',
        'Fraud Detection',
        'Market Analysis',
        'Creator Tools',
        'Multi-chain Support'
      ],
      benefits: [
        'Increase NFT sales by 35%',
        'Reduce fraud by 90%',
        'Improve user experience',
        'Optimize pricing strategies'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'NFT Platform',
      technologies: ['IPFS', 'OpenSea API', 'Machine Learning', 'React', 'Node.js', 'Ethereum'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Supply Chain Blockchain',
      description: 'Transparent supply chain tracking with AI-powered quality control, fraud detection, and automated compliance.',
      icon: '🚚',
      price: '$2,199/month',
      features: [
        'End-to-End Tracking',
        'AI Quality Control',
        'Fraud Detection',
        'Automated Compliance',
        'Smart Sensors Integration',
        'Real-time Monitoring',
        'Sustainability Tracking',
        'Carbon Footprint Analysis'
      ],
      benefits: [
        'Increase supply chain transparency',
        'Reduce fraud by 85%',
        'Improve quality control',
        'Ensure regulatory compliance'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Supply Chain',
      technologies: ['Hyperledger', 'IoT Sensors', 'Machine Learning', 'React', 'Python', 'IPFS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Identity Verification System',
      description: 'Decentralized identity management with AI-powered verification, privacy protection, and zero-knowledge proofs.',
      icon: '🆔',
      price: '$1,299/month',
      features: [
        'Decentralized Identity',
        'AI Verification',
        'Zero-Knowledge Proofs',
        'Privacy Protection',
        'Multi-factor Authentication',
        'Biometric Integration',
        'Cross-platform Compatibility',
        'Compliance Management'
      ],
      benefits: [
        'Enhance security and privacy',
        'Reduce identity fraud by 95%',
        'Streamline verification processes',
        'Ensure regulatory compliance'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Identity Management',
      technologies: ['DID', 'Zero-Knowledge Proofs', 'Biometrics', 'Machine Learning', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Healthcare Blockchain',
      description: 'Secure healthcare data management with AI-powered diagnostics, patient privacy, and automated insurance claims.',
      icon: '🏥',
      price: '$2,799/month',
      features: [
        'Secure Health Records',
        'AI Diagnostics',
        'Patient Privacy',
        'Automated Insurance Claims',
        'Drug Traceability',
        'Clinical Trial Management',
        'Telemedicine Integration',
        'Regulatory Compliance'
      ],
      benefits: [
        'Improve patient data security',
        'Reduce insurance fraud by 70%',
        'Streamline healthcare processes',
        'Ensure HIPAA compliance'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Healthcare',
      technologies: ['Hyperledger Fabric', 'Machine Learning', 'React', 'Python', 'HIPAA Compliance', 'IoT'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary blockchain technology enhanced with artificial intelligence to create transparent, secure, and intelligent decentralized systems.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-gray-300">Blockchain Solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Fraud Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Blockchain AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Revolutionize with AI Blockchain?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI-powered blockchain solutions today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBlockchainSolutionsPage;