import React from 'react';
import { Head } from 'next/head';
import { Link, Shield, Zap, BarChart3, CheckCircle, Phone } from 'lucide-react';

export default function BlockchainEnterpriseSolutions(props: any) {
  return (
    <>
      <Head>
        <title>Blockchain Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade blockchain solutions for supply chain, finance, and data security. Reduce costs by 30% and increase transparency."   />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <section className="py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Blockchain <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Enterprise Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Enterprise-grade blockchain solutions for supply chain, finance, and data security. Reduce costs by 30% and increase transparency.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover: shado w-lg transition-all duration-300 font-medium flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2"  />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Blockchain Solutions</h2>
            <div className="grid md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Link className="w-6 h-6 text-white"   />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain</h3>
                <p className="text-gray-600 mb-4">Transparent and traceable supply chain management</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    End-to-end tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Smart contracts
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white"  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
                <p className="text-gray-600 mb-4">Immutable data storage and secure transactions</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Cryptographic security
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Decentralized storage
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white"  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Contracts</h3>
                <p className="text-gray-600 mb-4">Automated contract execution and compliance</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Automated execution
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Compliance tracking
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white"  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4">Real-time blockchain analytics and insights</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                    Performance metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business with Blockchain</h2>
            <p className="text-xl text-green-100 mb-8">Join the blockchain revolution today.</p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-green-600 px-8 py-4 rounded-lg hover: shado w-lg transition-all duration-300 font-medium flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2"  />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}