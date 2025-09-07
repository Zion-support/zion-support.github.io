import Head from 'next/head';
import Link from 'next/link';

export default function Blockchain() {
  return (
    <>
      <Head>
        <title>Blockchain & Web3 Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 solutions including smart contracts, DeFi, and NFT platforms." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Blockchain & Web3 Solutions</h1>
          <p className="text-xl text-slate-300 mb-8">
            Cutting-edge blockchain technology solutions for the decentralized future.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Smart Contracts</h3>
              <p className="text-slate-300">Secure and efficient smart contract development and deployment.</p>
            </div>
            
            <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">DeFi Platforms</h3>
              <p className="text-slate-300">Decentralized finance solutions and platforms.</p>
            </div>
            
            <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">NFT Marketplaces</h3>
              <p className="text-slate-300">Non-fungible token marketplaces and platforms.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
            >
              Get Blockchain Quote
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}