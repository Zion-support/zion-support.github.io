import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, redundancy systems, PM2, GitHub Actions, Netlify, Next.js, zero-downtime, intelligent automation" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
                <Link href="/about" className="text-white/80 hover:text-cyan-400 transition-colors">About</Link>
                <Link href="/services" className="text-white/80 hover:text-cyan-400 transition-colors">Services</Link>
                <Link href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Get Started
              </Link>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/contact" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Get in Touch
              </a>
            </div>
            <div className="text-center mt-8">
              <Link href="/reports" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                View All Reports
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-center text-3xl font-bold mb-12 text-white/90">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Autonomous Systems</h3>
                <p className="text-white/70">AI-powered systems that operate independently, continuously learning and improving without human intervention.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">99.9% Uptime</h3>
                <p className="text-white/70">Reliable infrastructure with self-healing capabilities that maintain exceptional performance and availability.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">Enterprise Security</h3>
                <p className="text-white/70">Bank-grade security with autonomous threat detection and response systems protecting your data 24/7.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Real-time Analytics</h3>
                <p className="text-white/70">Advanced monitoring and analytics providing insights into system performance and user behavior.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-300">Scalable Solutions</h3>
                <p className="text-white/70">Cloud-native architecture that automatically scales to meet your growing business needs.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-300">Innovation First</h3>
                <p className="text-white/70">Cutting-edge research and development driving the future of autonomous technology.</p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-center text-3xl font-bold mb-8 text-white/90">Our Impact in Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
                  <div className="text-white/70">Automation Systems</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-white/70">Monitoring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-white/70">AI Models</div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Technologies Section */}
          <section className="mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Core Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">Autonomous AI Agents</h3>
                <p className="text-white/75 leading-relaxed">
                  Self-managing AI systems that operate independently, learn continuously, and collaborate seamlessly 
                  across complex environments.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
                <p className="text-white/75 leading-relaxed">
                  Revolutionary quantum systems solving complex problems in seconds that would take classical 
                  computers years to process.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold mb-3">Blockchain & DeFi</h3>
                <p className="text-white/75 leading-relaxed">
                  Decentralized systems enabling trustless transactions, autonomous governance, and 
                  revolutionary financial innovations.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
                <p className="text-white/75 leading-relaxed">
                  Autonomous threat detection and response systems protecting critical infrastructure 
                  with 99.9% accuracy and zero false positives.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Robotics & Automation</h3>
                <p className="text-white/75 leading-relaxed">
                  Intelligent robotic systems revolutionizing manufacturing, healthcare, and transportation 
                  with unprecedented precision and efficiency.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-3">Autonomous Networks</h3>
                <p className="text-white/75 leading-relaxed">
                  Self-organizing networks that optimize performance, security, and resource allocation 
                  without human intervention.
                </p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-white/70">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">500+</div>
                <div className="text-white/70">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-white/70">Blockchain Networks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2.7B</div>
                <div className="text-white/70">Value Protected</div>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Latest Autonomous Updates</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="text-sm text-white/75 mb-3">Quantum computing breakthroughs and autonomous agent orchestration achievements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read Full Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="text-sm text-white/75 mb-3">AI agent infrastructure deployment and research breakthroughs across multiple domains.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read Full Report <span aria-hidden>→</span></div>
              </a>
              <a href="/showcase" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Showcase
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Blog
              </a>
              <a href="/events" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Events
              </a>
              <a href="/news" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                News
              </a>
              <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Reports & Analytics
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Case Studies
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Innovation Areas Section */}
          <section className="mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Innovation Areas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Healthcare & Biotechnology</h3>
                    <p className="text-white/80">AI-powered diagnostics, drug discovery, and personalized medicine solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Renewable Energy</h3>
                    <p className="text-white/80">Smart grid optimization and autonomous energy management systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Space Exploration</h3>
                    <p className="text-white/80">Autonomous navigation and mission planning for deep space operations.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Financial Technology</h3>
                    <p className="text-white/80">DeFi protocols, autonomous trading, and risk management systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Manufacturing & Logistics</h3>
                    <p className="text-white/80">Smart factories, autonomous supply chains, and predictive maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Climate & Environment</h3>
                    <p className="text-white/80">Climate modeling, carbon capture, and environmental monitoring systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-3xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join us in building the next generation of autonomous systems that will transform 
                industries and improve human lives across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Key Services Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">AI Automation</h3>
                <p className="text-white/80 mb-4">
                  Intelligent process automation that learns and optimizes your business workflows.
                </p>
                <Link href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6 hover:border-pink-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Content Generation</h3>
                <p className="text-white/80 mb-4">
                  AI-powered content creation and management across all digital platforms.
                </p>
                <Link href="/services" className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/80 mb-4">
                  Automated cloud management and optimization for scalable, reliable systems.
                </p>
                <Link href="/services" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Uptime</h3>
                <p className="text-white/70 text-sm">Reliable systems that work when you need them</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Monitoring</h3>
                <p className="text-white/70 text-sm">Continuous oversight and automated responses</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">Powered</h3>
                <p className="text-white/70 text-sm">Intelligent automation that learns and improves</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">0</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Downtime</h3>
                <p className="text-white/70 text-sm">Proactive maintenance prevents issues</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the autonomous revolution and discover how our intelligent technology solutions can drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Get Started Today
                </Link>
                <Link href="/about" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 mb-4 md:mb-0">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="/about" className="text-white/60 hover:text-cyan-400 transition-colors">About</a>
                <a href="/automation" className="text-white/60 hover:text-cyan-400 transition-colors">Automation</a>
                <a href="/contact" className="text-white/60 hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;