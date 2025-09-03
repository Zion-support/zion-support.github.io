import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}