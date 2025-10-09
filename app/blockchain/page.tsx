'use client';
import React from 'react';
import { Lock, Zap, Target, BarChart, Cloud, Users, Award, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      title: 'Smart Contracts',
      description: 'Secure, automated smart contracts for various business applications',
      icon: Lock,
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs']
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications built on blockchain technology',
      icon: Cloud,
      benefits: ['Decentralized architecture', 'User control', 'Transparent operations']
    },
    {
      title: 'Token Creation',
      description: 'Custom cryptocurrency and token development',
      icon: Target,
      benefits: ['Custom tokens', 'ICO/STO support', 'Tokenomics design']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      icon: BarChart,
      benefits: ['Lending protocols', 'DEX development', 'Yield farming']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Blockchain Solutions - Zion Tech Group"
        description="Comprehensive blockchain development services including smart contracts, DApps, token creation, and DeFi solutions. Transform your business with blockchain technology."
        keywords={['blockchain development', 'smart contracts', 'DApps', 'token creation', 'DeFi', 'cryptocurrency']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. 
              From smart contracts to DeFi solutions, we build secure, decentralized applications.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$2,000/month</div>
            <p className="text-gray-300">Complete blockchain development</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Blockchain Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business with Blockchain</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our blockchain solutions have processed over $100M in transactions and reduced costs by 60%. 
                Let's build the future of your business with blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Blockchain Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;