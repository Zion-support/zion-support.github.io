/* eslint-disable @typescript-eslint/no-unused-vars */
// app/blockchain-solutions/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Solutions',
  description: 'Enterprise blockchain for supply chain, identity, smart contracts, and Web3 integration.',
  alternates: { canonical: '/blockchain-solutions' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Blockchain Solutions</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">⛓️</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blockchain Solutions</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">Enterprise blockchain for supply chain, identity, smart contracts, and Web3 integration.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Smart Contracts','Supply Chain','Identity','Web3','DeFi'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">{tag}</span>
            ))}
          </div>
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4 inline-block">⚡ Get Your Custom Proposal →</Link>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '📜', title: 'Smart Contracts', desc: 'Audited, secure smart contracts for DeFi, NFTs, and enterprise automation on EVM-compatible chains.' },
              { emoji: '🔗', title: 'Supply Chain Tracking', desc: 'End-to-end provenance and traceability using distributed ledger technology for logistics and manufacturing.' },
              { emoji: '🪪', title: 'Decentralized Identity', desc: 'Self-sovereign identity solutions with verifiable credentials and zero-knowledge proofs.' },
            ].map(item => (
              <div key={item.title} className="glass-card">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Zion Tech Group</h2>
          <ul className="space-y-3">
            {[
              'Multi-chain expertise — Ethereum, Polygon, Solana, Hyperledger',
              'Security-first approach with formal verification and audits',
              'Full lifecycle support from concept to mainnet deployment',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="text-purple-400 mt-1 shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Build on Blockchain with Confidence</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            From tokenization to DeFi, we deliver secure, scalable blockchain solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">⚡ Get Custom Proposal</Link>
            <Link href="/contact/" className="btn-secondary text-lg px-10 py-4">Talk to an Expert</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
