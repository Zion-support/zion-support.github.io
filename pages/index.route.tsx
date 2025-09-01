import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <Head>
        <title>Zion Tech Group — Micro SaaS, IT and AI Services</title>
        <meta name="description" content="Micro SaaS services, IT solutions, and AI platforms to accelerate your roadmap." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <main className="mx-auto max-w-7xl px-6 py-24 text-center space-y-8">
        <h1 className="text-5xl font-extrabold">Build Faster with Intelligent Services</h1>
        <p className="text-white/80 max-w-3xl mx-auto">From AI copilots and RAG chat to FinOps and Zero Trust, we ship outcomes with proven playbooks and references.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services" className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold">Explore Services</Link>
          <Link href="/services-advertising" className="rounded-xl border border-white/20 px-6 py-3 font-semibold">See Market Pricing</Link>
          <Link href="/contact" className="rounded-xl border border-white/20 px-6 py-3 font-semibold">Contact Us</Link>
        </div>
      </main>
    </div>
  );
}

