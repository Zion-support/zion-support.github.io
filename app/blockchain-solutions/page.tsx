// Blockchain Solutions
'use client';
import Link from 'next/link';
export default function BlockchainSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block">← All Services</Link>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">Blockchain & Web3 Solutions</h1>
        <p className="text-slate-400 text-lg mb-8">Enterprise blockchain for supply chain, identity, smart contracts, and tokenized assets.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'Supply Chain Provenance',desc:'Immutable tracking from raw material to end customer'},
            {title:'Identity & Credentials',desc:'Verifiable credentials and secure digital identity'},
            {title:'Smart Contract Ops',desc:'Audited, automated business logic on permissioned chains'},
          ].map((f,i)=>(
            <div key={i} className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/60 transition">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary inline-block">Request a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
