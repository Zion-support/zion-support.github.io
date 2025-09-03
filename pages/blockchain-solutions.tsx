import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const BlockchainSolutions = () => {
  return (
    <>
      <Head>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive blockchain solutions including smart contracts, DeFi, NFTs, and cross-chain integration services." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Layout 
        title="Blockchain Solutions"
        description="Transform your business with cutting-edge blockchain technology and decentralized solutions"
      >
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Blockchain
              </span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge blockchain technology and decentralized solutions
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive blockchain solutions to help your business leverage the power of decentralized technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Contracts</h3>
                <p className="text-gray-600 mb-6">
                  Automated, self-executing contracts with terms directly written into code.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DeFi Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Decentralized finance applications for lending, borrowing, and trading.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">NFT Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Non-fungible token marketplaces and minting platforms.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Chain Integration</h3>
                <p className="text-gray-600 mb-6">
                  Seamless integration between different blockchain networks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Token Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom cryptocurrency and utility token creation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Strategic guidance for blockchain implementation and adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how blockchain technology can revolutionize your operations and create new opportunities.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlockchainSolutions;