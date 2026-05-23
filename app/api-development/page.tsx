// API Development
'use client';
import Link from 'next/link';
export default function APIDevPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block">← All Services</Link>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">API Development & Integration</h1>
        <p className="text-slate-400 text-lg mb-8">Design, build, and govern REST / GraphQL / gRPC APIs across your stack.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'REST & GraphQL APIs',desc:'Type-safe APIs with OpenAPI spec and auto-generated SDKs'},
            {title:'Event-Driven Architecture',desc:'Async messaging, webhooks, and stream processing'},
            {title:'API Gateway & Rate-Limiting',desc:'Centralised control plane with auth, throttling, and observability'},
          ].map((f,i)=>(
            <div key={i} className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/60 transition">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary inline-block">Start a Project</Link>
        </div>
      </div>
    </div>
  );
}
