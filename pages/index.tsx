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
        <nav className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
                <Link href="/automation" className="text-white/80 hover:text-white transition-colors">Automation</Link>
                <Link href="/reports" className="text-white/80 hover:text-white transition-colors">Reports</Link>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
                <Link href="/api-documentation" className="text-white/80 hover:text-white transition-colors">API</Link>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          {/* Navigation */}
          <nav className="flex justify-center mb-12">
            <div className="flex space-x-6">
              <a href="/about" className="text-white/80 hover:text-cyan-400 transition-colors">About</a>
              <a href="/services" className="text-white/80 hover:text-cyan-400 transition-colors">Services</a>
              <a href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </nav>

          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="/about" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
              >
                About Us
              </a>
              <a 
                href="/services" 
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Our Services
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border border-fuchsia-400 text-fuchsia-400 font-semibold rounded-lg hover:bg-fuchsia-400 hover:text-white transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Autonomous Systems</h3>
                <p className="text-white/70">
                  Self-running technology that operates 24/7 without human intervention, 
                  continuously learning and improving.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Enterprise Security</h3>
                <p className="text-white/70">
                  AI-powered security monitoring and automated threat response systems 
                  that protect your infrastructure around the clock.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Real-time Analytics</h3>
                <p className="text-white/70">
                  Comprehensive monitoring and analytics that provide deep insights into 
                  system performance and optimization opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/70">Active Automations</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-white/70">Operation</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
                  <div className="text-white/70">Manual Interventions</div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/reports" className="text-cyan-400 hover:text-cyan-300 font-medium">
                View All Reports →
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Ready to Automate?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the power of autonomous technology and transform your 
              operations with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                Get Started
              </Link>
              <Link href="/api-documentation" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                View API Docs
              </Link>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Lightning Fast</h3>
                <p className="text-white/80">
                  Our autonomous systems operate 24/7 with instant response times, 
                  ensuring your business never slows down.
                </p>
              </div>

              <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-fuchsia-400">99.9% Uptime</h3>
                <p className="text-white/80">
                  Self-healing infrastructure with autonomous monitoring ensures 
                  your systems are always available and performing optimally.
                </p>
              </div>

              <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-purple-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">AI-Powered Innovation</h3>
                <p className="text-white/80">
                  Continuously evolving AI systems that learn, adapt, and improve 
                  your technology infrastructure automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-3xl border border-cyan-500/20">
              <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-fuchsia-400 mb-2">2,960</div>
                  <div className="text-sm text-white/70">Generated Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-2">12</div>
                  <div className="text-sm text-white/70">Core Components</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience the Future?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join the revolution in autonomous technology and discover how our AI-powered 
                solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/services" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Explore Our Services
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-white/5 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-white/70 text-sm">
                  Pioneering autonomous technology solutions for the future.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Products</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/automation" className="hover:text-white">Automation</Link></li>
                  <li><Link href="/reports" className="hover:text-white">Reports</Link></li>
                  <li><Link href="/api-documentation" className="hover:text-white">API</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
              © 2025 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;