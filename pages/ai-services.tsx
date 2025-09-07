import Head from 'next/head';
import Link from 'next/link';

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including autonomous agents, financial trading systems, and legal document analysis." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">AI Services</h1>
          <p className="text-xl text-slate-300 mb-8">
            Advanced artificial intelligence solutions to transform your business.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Autonomous AI Agents</h3>
              <p className="text-slate-300">Intelligent agents that can perform complex tasks autonomously.</p>
            </div>
            
            <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">AI Financial Trading</h3>
              <p className="text-slate-300">AI-powered trading systems for financial markets.</p>
            </div>
            
            <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Legal Document Analysis</h3>
              <p className="text-slate-300">AI-powered analysis of legal documents and contracts.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Get AI Services Quote
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}