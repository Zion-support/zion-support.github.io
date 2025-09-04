import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blockchain() {
  return (
    <>
      <Head>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain development services including smart contracts, DeFi solutions, and NFT platforms." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Blockchain Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Build Secure, Transparent, and Decentralized Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Comprehensive blockchain development services for modern businesses looking to leverage distributed ledger technology.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Blockchain Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Smart Contracts
                </h3>
                <p className="text-slate-300 mb-6">
                  Automated self-executing contracts with built-in business logic and security.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Ethereum development</li>
                  <li>• Solidity programming</li>
                  <li>• Contract auditing</li>
                  <li>• Gas optimization</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  DeFi Solutions
                </h3>
                <p className="text-slate-300 mb-6">
                  Decentralized finance applications for lending, trading, and yield farming.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• DEX development</li>
                  <li>• Yield farming protocols</li>
                  <li>• Liquidity pools</li>
                  <li>• Governance tokens</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  NFT Platforms
                </h3>
                <p className="text-slate-300 mb-6">
                  Non-fungible token marketplaces and digital asset management systems.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• NFT minting</li>
                  <li>• Marketplace development</li>
                  <li>• Metadata management</li>
                  <li>• Royalty systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let our blockchain experts help you create secure decentralized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Get Started
              </Link>
              <Link href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold">
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading provider of innovative technology solutions and services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white">All Services</Link></li>
                  <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
                  <li><Link href="/micro-saas" className="hover:text-white">Micro SaaS</Link></li>
                  <li><Link href="/it-services" className="hover:text-white">IT Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/team" className="hover:text-white">Team</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}