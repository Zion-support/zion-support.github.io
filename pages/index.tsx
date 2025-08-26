import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Zion Tech Group — AI-Powered Technology Solutions</title>
        <meta
          name="description"
          content="Discover cutting-edge AI services, quantum computing solutions, blockchain platforms, and innovative technology services from Zion Tech Group."
        />
        <meta property="og:title" content="Zion Tech Group — AI-Powered Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
              About Us
            </Link>
            <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
              Our Services
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 border border-purple-400/50 rounded-lg transition-all duration-200">
              Get Started
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Innovative Technology Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Business Intelligence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Business Intelligence</h3>
              <p className="text-white/80 mb-4">
                Advanced AI-powered business intelligence with predictive analytics, automated insights, and real-time decision support.
              </p>
              <Link href="/services" className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Quantum Computing</h3>
              <p className="text-white/80 mb-4">
                Enterprise-grade quantum computing platform for complex optimization problems including logistics and financial modeling.
              </p>
              <Link href="/services" className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Blockchain & Web3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Blockchain & Web3</h3>
              <p className="text-white/80 mb-4">
                Scalable enterprise blockchain solution with smart contract automation and decentralized identity management.
              </p>
              <Link href="/services" className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Contact Us Today
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
