import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle, Code, Users, Target } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for DeFi, NFTs, and blockchain applications'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'DApp Development',
      description: 'Decentralized applications with seamless Web3 integration and user experience'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Web3 Integration',
      description: 'Connect your existing applications to blockchain networks and Web3 protocols'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits and penetration testing for blockchain projects'
    }
  ];

  const services = [
    {
      category: 'Blockchain Development',
      items: ['Smart Contract Development', 'DApp Development', 'Token Creation', 'DeFi Protocols', 'NFT Marketplaces', 'Cross-chain Solutions']
    },
    {
      category: 'Web3 Integration',
      items: ['Wallet Integration', 'MetaMask Support', 'Web3.js Integration', 'IPFS Storage', 'Decentralized Identity', 'DAO Governance']
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

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic smart contract development',
        'Simple DApp creation',
        'Basic security review',
        'Email support',
        '2 weeks delivery'
      ]
    },
    {
      name: 'Professional',
      price: '$9,999',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contracts',
        'Complex DApp development',
        'Comprehensive security audit',
        'Priority support',
        'API integration',
        '4 weeks delivery'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$24,999',
      description: 'For large-scale projects',
      features: [
        'Custom blockchain solutions',
        'Multi-chain integration',
        'Full security audit suite',
        '24/7 support',
        'Dedicated team',
        '8+ weeks delivery'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Future-Proof Technology',
      description: 'Build on cutting-edge blockchain technology that will stand the test of time'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Lightning Fast',
      description: 'Optimized smart contracts and DApps for maximum performance and efficiency'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Community Driven',
      description: 'Join the decentralized future with community-governed applications'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Development - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain and Web3 development services including smart contracts, DApps, DeFi protocols, and security audits." />
        <meta name="keywords" content="blockchain development, Web3, smart contracts, DApp development, DeFi, NFT, cryptocurrency" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;
            Page;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Professional page solutions tailored to your business needs.;
          </p>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;
                Expert Solutions;
              </h3>;
              <p className="text-blue-700">;
                Our team of experts delivers cutting-edge page solutions.;
              </p>;
            </div>;
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-green-900 mb-2">;
                Custom Implementation;
              </h3>;
              <p className="text-green-700">;
                Tailored page implementations for your specific requirements.;
              </p>;
            </div>;
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;
                24/7 Support;
              </h3>;
              <p className="text-purple-700">;
                Round-the-clock support for all your page needs.;
              </p>;
            </div>;
          </div>;
          <div className="mt-12">;
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
              Get Started Today;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>)}
