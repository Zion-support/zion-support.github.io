import Head from 'next/head';
import Link from 'next/link';

export default function ITServices() {
  const phone = '+1 302 464 0950';
  const email = 'kleber@ziontechgroup.com';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>IT & Cloud Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT and cloud services." />
        <link rel="canonical" href={`https://ziontechgroup.com/it-services`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">IT &amp; Cloud Services</h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">From cloud migration to cybersecurity, our experts deliver enterprise-grade solutions.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {phone}</a>
          <a href={`mailto:${email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Quote</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-24">
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold mb-2">Cloud Migration & Optimization</h2>
          <p className="text-slate-300 mb-6">Modernize workloads and reduce costs with our cloud experts.</p>
        </div>
      </main>
    </div>
  );
}