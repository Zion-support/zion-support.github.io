import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/services-2026" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 border border-purple-400/50 rounded-lg transition-all duration-200">
                🚀 2026 Services
              </a>
              <a href="/diversified-micro-saas-showcase" className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 border border-green-400/50 rounded-lg transition-all duration-200">
                🌟 Diversified Services
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Case Studies
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                </p>
                <Link href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <Link href="/services" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <Link href="/services" className="text-green-400 hover:text-green-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and automation services can transform your business operations and drive growth in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg">
                  Schedule a Consultation
                </Link>
                <a href="/case-studies" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-lg">
                  View Our Work
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
