// app/blockchain-solutions/page.tsx
'use client';
import Link from 'next/link';

const FEATURES = [
  { num: 1, title: 'Smart Contract Development', desc: 'Solidity, Rust (Solana), and Vyper smart contracts with formal verification, gas optimization, and secure upgrade patterns.' },
  { num: 2, title: 'Smart Contract Auditing', desc: 'Comprehensive security audit including static analysis, fuzzing, symbolic execution, and manual review by certified auditors.' },
  { num: 3, title: 'DeFi Platform Development', desc: 'Lending protocols, DEXs, yield aggregators, staking platforms, and liquidity management with battle-tested math libraries.' },
  { num: 4, title: 'NFT Marketplace', desc: 'ERC-721/1155 marketplace with lazy minting, royalties, auction mechanics, and IPFS metadata storage.' },
  { num: 5, title: 'Web3 Authentication', desc: 'SIWE (Sign-In with Ethereum), wallet connect integration, session management, and on-chain identity verification.' },
  { num: 6, title: 'Layer 2 & Rollups', desc: 'Optimistic and zero-knowledge rollup deployment for scalable decentralized applications.' },
];

const USE_CASES = [
  { title: 'Supply Chain Traceability', desc: 'Immutable provenance tracking from raw material to consumer with certifications, audits, and compliance automation.' },
  { title: 'Tokenized Assets', desc: 'Real-world asset tokenization across real estate, commodities, and carbon credits with legal compliance.' },
  { title: 'Decentralized Identity', desc: 'Self-sovereign identity for KYC/AML, credential verification, and access management across organizations.' },
];

export default function BlockchainSolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]"></div>
        <div className="relative container-page">
          <nav className="mb-8 text-sm text-slate-400">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-purple-300">Blockchain &amp; Web3 Solutions</span>
          </nav>
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">⛓️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blockchain &amp; Web3 Solutions</h1>
            <p className="text-xl text-slate-300 mb-8">Enterprise blockchain development, smart contract auditing, DeFi platforms, and Web3 infrastructure.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/" className="btn-primary text-lg px-8 py-3">View Related Services</Link>
              <Link href="/contact/" className="btn-secondary text-lg px-8 py-3">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-3">Key Capabilities</h2>
          <p className="text-slate-400 mb-10">Full-spectrum blockchain and Web3 development</p>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.num} className="glass-card p-6 hover:border-purple-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xl font-bold shrink-0">{f.num}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-3">Use Cases</h2>
          <p className="text-slate-400 mb-10">Real-world blockchain applications</p>
          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="glass-card p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-800">
        <div className="container-page text-center">
          <div className="max-w-2xl mx-auto glass-card p-10">
            <div className="text-4xl mb-4">⛓️</div>
            <h2 className="text-3xl font-bold text-white mb-4">Build on Web3</h2>
            <p className="text-slate-300 mb-8 text-lg">Tell us about your blockchain project and we will match you with the right team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">Build Your Solution</Link>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}