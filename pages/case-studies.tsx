import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group's innovative technology solutions and client implementations." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Explore real-world success stories and case studies from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Discover how our innovative technology solutions have transformed businesses and delivered measurable results across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Start Your Project
              </a>
              <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                View All Services
              </a>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI-Powered Financial Platform */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-cyan-400 text-sm font-medium">AI Solutions</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Financial Trading Platform</h3>
                <p className="text-white/70 mb-6">
                  Transformed a traditional financial services company with machine learning algorithms that increased trading efficiency by 300% and reduced risk by 45%.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">300%</div>
                    <div className="text-white/60 text-sm">Efficiency Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">45%</div>
                    <div className="text-white/60 text-sm">Risk Reduction</div>
                  </div>
                </div>
                <a href="/case-studies/financial-trading-platform" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Read Full Case Study →
                </a>
              </div>

              {/* Quantum Security Implementation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-fuchsia-500 rounded-full"></div>
                  <span className="text-fuchsia-400 text-sm font-medium">Quantum Technology</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quantum-Safe Security Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Implemented post-quantum cryptography for a government agency, ensuring data security against future quantum computing threats while maintaining 99.99% uptime.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-fuchsia-400">99.99%</div>
                    <div className="text-white/60 text-sm">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-white/60 text-sm">Quantum-Safe</div>
                  </div>
                </div>
                <a href="/case-studies/quantum-security" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                  Read Full Case Study →
                </a>
              </div>
            </div>
          </section>

          {/* Industry Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Healthcare */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Healthcare & Life Sciences</h3>
                <p className="text-white/70 mb-4">AI-powered drug discovery, patient data analytics, and medical imaging solutions.</p>
                <a href="/case-studies/healthcare" className="text-green-400 hover:text-green-300 transition-colors">View Cases →</a>
              </div>

              {/* Financial Services */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
                <p className="text-white/70 mb-4">Risk management, fraud detection, and algorithmic trading platforms.</p>
                <a href="/case-studies/financial-services" className="text-blue-400 hover:text-blue-300 transition-colors">View Cases →</a>
              </div>

              {/* Manufacturing */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Manufacturing & Industry</h3>
                <p className="text-white/70 mb-4">IoT integration, predictive maintenance, and smart factory solutions.</p>
                <a href="/case-studies/manufacturing" className="text-orange-400 hover:text-orange-300 transition-colors">View Cases →</a>
              </div>

              {/* Retail & E-commerce */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Retail & E-commerce</h3>
                <p className="text-white/70 mb-4">Personalized recommendations, inventory optimization, and customer analytics.</p>
                <a href="/case-studies/retail" className="text-purple-400 hover:text-purple-300 transition-colors">View Cases →</a>
              </div>

              {/* Energy & Utilities */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy & Utilities</h3>
                <p className="text-white/70 mb-4">Smart grid management, renewable energy optimization, and predictive maintenance.</p>
                <a href="/case-studies/energy" className="text-teal-400 hover:text-teal-300 transition-colors">View Cases →</a>
              </div>

              {/* Transportation & Logistics */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transportation & Logistics</h3>
                <p className="text-white/70 mb-4">Route optimization, fleet management, and supply chain automation.</p>
                <a href="/case-studies/transportation" className="text-indigo-400 hover:text-indigo-300 transition-colors">View Cases →</a>
              </div>
            </div>
          </section>

          {/* Results & Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Impact & Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">98%</div>
                <div className="text-white/70">Client Satisfaction</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">$2B+</div>
                <div className="text-white/70">Value Generated</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-white/70">Support Available</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can transform your business and deliver measurable results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Start Your Project
                </a>
                <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  Explore Our Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}