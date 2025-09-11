import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, Users, Shield, Link as LinkIcon, Database } from 'lucide-react';
import Link from 'next/link';
const BlockchainSolutionsPage: NextPage = () => {;
  const benefits = [;
    {;
      icon: <LinkIcon className="w-8 h-8" />,
      title: 'Decentralized Solutions',
      description: 'Build trustless, transparent systems that eliminate intermediaries and reduce costs.';
},
    {;
      icon: <Database className="w-8 h-8" />,
      title: 'Immutable Records',
      description: 'Create tamper-proof records and audit trails for enhanced security and compliance.';
},
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Smart Contracts',
      description: 'Automate business processes with self-executing smart contracts for efficiency.';
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Enhanced Security',
      description: 'Leverage cryptographic security and consensus mechanisms for maximum protection.';
}
  ];
  const services = [;
    {;
      title: 'Blockchain Strategy & Consulting',
      description: 'Strategic planning and roadmap development for blockchain adoption',
      price: 'From $10,000',
      features: ['Blockchain assessment', 'Use case identification', 'Technology selection', 'ROI analysis'];
},
    {;
      title: 'Smart Contract Development',
      description: 'Custom smart contract development and deployment',
      price: 'From $25,000',
      features: ['Contract design', 'Security auditing', 'Testing & deployment', 'Maintenance & support'];
},
    {;
      title: 'DApp Development',
      description: 'Decentralized application development and deployment',
      price: 'From $50,000',
      features: ['Frontend development', 'Backend integration', 'Blockchain integration', 'User interface design'];
},
    {;
      title: 'Blockchain Infrastructure',
      description: 'Complete blockchain infrastructure setup and management',
      price: 'From $100,000',
      features: ['Network setup', 'Node management', 'Security implementation', 'Monitoring & maintenance'];
}
  ];
  return (;
    <MainLayout;
      title="Blockchain Solutions - Zion Tech Group";
      description="Comprehensive blockchain solutions including smart contracts, DApps, and infrastructure development for enterprise organizations.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">;
              Blockchain Solutions;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">;
              Transform your business with cutting-edge blockchain technology. From smart contracts to DApps,
              we help you leverage the power of decentralized systems for enhanced security and efficiency.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
                Explore Blockchain;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link href="/services/it-services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
                View IT Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;