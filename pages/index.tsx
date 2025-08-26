import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">About Us</a>
            <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">Our Services</a>
            <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">Case Studies</a>
            <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">Contact</a>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                <p className="text-gray-600">Tell us about your goals. We'll recommend services, products, or experts to help.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/contact" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Contact Us</Link>
                <Link href="/about" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold border border-gray-200 hover:bg-gray-200 transition">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
