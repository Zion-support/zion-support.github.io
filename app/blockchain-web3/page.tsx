import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Lock, ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Decentralized Security',
      description: 'Immutable blockchain technology ensures maximum security and transparency'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts that eliminate intermediaries'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration with decentralized applications and protocols'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: 'Cryptocurrency Solutions',
      description: 'Custom token development and cryptocurrency integration services'
    }
  ];

  const services = [
    {
      category: 'Development',
      items: ['Smart Contract Development', 'DApp Development', 'Token Creation', 'DeFi Protocols', 'NFT Marketplaces', 'Cross-Chain Solutions']
    },
    {
      category: 'Security & Audit',
      items: ['Smart Contract Audits', 'Security Testing', 'Penetration Testing', 'Code Review', 'Vulnerability Assessment', 'Compliance Check']
    },
    {
      category: 'Consulting',
      items: ['Blockchain Strategy', 'Technology Selection', 'Architecture Design', 'Implementation Planning', 'Training & Support', 'Maintenance']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology and Web3 solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Build the Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how blockchain and Web3 can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}