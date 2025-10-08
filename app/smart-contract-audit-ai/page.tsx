import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Zap, Clock, Users, TrendingUp, Globe, AlertTriangle, Lock, Eye, Code, Search } from 'lucide-react';

const SmartContractAuditAIPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Automated Vulnerability Scanning',
      description: 'AI-powered analysis that identifies security vulnerabilities, logic errors, and potential exploits in smart contracts.',
      benefits: ['Comprehensive vulnerability detection', 'Zero false positives', 'Real-time analysis']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Gas Optimization Analysis',
      description: 'Intelligent optimization recommendations to reduce gas costs and improve contract efficiency.',
      benefits: ['Up to 50% gas reduction', 'Performance optimization', 'Cost efficiency analysis']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Best Practices',
      description: 'Automated checking against industry security standards and best practices for smart contract development.',
      benefits: ['Industry standard compliance', 'Security pattern recognition', 'Best practice enforcement']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Audit Report Generation',
      description: 'Comprehensive audit reports with detailed findings, risk assessments, and remediation recommendations.',
      benefits: ['Detailed vulnerability reports', 'Risk severity classification', 'Remediation guidance']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Blockchain Support',
      description: 'Support for Ethereum, BSC, Polygon, Avalanche, and other major blockchain networks.',
      benefits: ['Ethereum compatibility', 'Multi-chain analysis', 'Cross-platform support']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Continuous Monitoring',
      description: 'Ongoing monitoring of deployed contracts for new vulnerabilities and security threats.',
      benefits: ['Real-time threat detection', 'Continuous security updates', 'Proactive protection']
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic Audit',
      price: '$299',
      period: '/audit',
      description: 'Perfect for simple smart contracts',
      features: [
        'Up to 500 lines of code',
        'Basic vulnerability scanning',
        'Gas optimization analysis',
        'Standard audit report',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional Audit',
      price: '$599',
      period: '/audit',
      description: 'Comprehensive analysis for complex contracts',
      features: [
        'Up to 2000 lines of code',
        'Advanced AI analysis',
        'Security best practices check',
        'Detailed audit report',
        'Priority support',
        'Remediation guidance'
      ],
      popular: true
    },
    {
      name: 'Enterprise Audit',
      price: '$1,499',
      period: '/audit',
      description: 'Full-scale audit for enterprise projects',
      features: [
        'Unlimited code lines',
        'Full AI security suite',
        'Multi-blockchain support',
        'Custom audit reports',
        'Dedicated support',
        'Continuous monitoring'
      ],
      popular: false
    }
  ];

  const supportedChains = [
    { name: 'Ethereum', icon: '⟠', description: 'Mainnet and testnets' },
    { name: 'Binance Smart Chain', icon: '🔶', description: 'BSC and testnet' },
    { name: 'Polygon', icon: '⬟', description: 'Matic network' },
    { name: 'Avalanche', icon: '🔺', description: 'C-Chain and subnets' },
    { name: 'Arbitrum', icon: '🔷', description: 'Layer 2 solution' },
    { name: 'Optimism', icon: '🔴', description: 'Optimistic rollup' }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Lead Developer, DeFi Protocol',
      content: 'The Smart Contract Audit AI saved us from a critical vulnerability that could have cost us millions. The detailed report helped us fix issues quickly.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'CTO, NFT Marketplace',
      content: 'The gas optimization analysis reduced our contract costs by 40%. The AI recommendations were spot-on and easy to implement.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Blockchain Architect, Gaming Platform',
      content: 'The multi-blockchain support is fantastic. We can audit contracts for different chains with the same high-quality analysis.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit AI - Zion Tech Group</title>
        <meta name="description" content="AI-powered smart contract security analysis and vulnerability detection. Automated auditing for Ethereum, BSC, Polygon, and other blockchain networks. Ensure your contracts are secure and optimized." />
        <meta name="keywords" content="smart contract audit, blockchain security, vulnerability detection, gas optimization, DeFi security, Web3 audit" />
      </Helmet>

      <div className="min-h-screen matrix-bg">
        {/* Futuristic Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 cyber-text neon-text">
                🔐 Smart Contract Audit AI
              </h1>
              <p className="text-xl md:text-2xl text-purple-300 mb-8 font-medium neon-text">
                AI-Powered Blockchain Security Analysis
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Secure your smart contracts with advanced AI-powered security analysis. 
                Automated vulnerability detection, gas optimization, and comprehensive auditing 
                for Ethereum, BSC, Polygon, and other major blockchain networks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  📞 Call Now: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Free Contract Analysis
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2 neon-text">1000+</div>
                  <div className="text-gray-300">Contracts Audited</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2 neon-text">50%</div>
                  <div className="text-gray-300">Average Gas Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">6</div>
                  <div className="text-gray-300">Blockchain Networks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2 neon-text">$10M+</div>
                  <div className="text-gray-300">Vulnerabilities Prevented</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Advanced Audit Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive AI-powered smart contract security analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card hologram-effect p-8">
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Blockchains */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Supported Blockchain Networks
              </h2>
              <p className="text-xl text-gray-300">
                Audit smart contracts across multiple blockchain platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportedChains.map((chain, index) => (
                <div key={index} className="futuristic-card p-8 text-center">
                  <div className="text-6xl mb-4">{chain.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">
                    {chain.name}
                  </h3>
                  <p className="text-gray-300">{chain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Audit Pricing Plans
              </h2>
              <p className="text-xl text-gray-300">
                Choose the perfect audit package for your smart contract
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-purple-400 mb-2 neon-text">
                      {tier.price}
                      <span className="text-lg text-gray-400">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full neon-button text-center block py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by blockchain developers and DeFi projects worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="futuristic-card p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free contract analysis and see how our AI-powered audit can protect your blockchain project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmartContractAuditAIPage;