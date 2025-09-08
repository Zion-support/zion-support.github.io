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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Learn More
              </a>
              <a href="/contact" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Get in Touch
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
          
          <section className="mx-auto max-w-7xl px-6 pb-14 mt-16">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Autonomous AI Agents</h3>
                <p className="text-white/70">
                  Our AI agents work 24/7 to continuously improve your systems, generate content, and optimize performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Lightning Fast Performance</h3>
                <p className="text-white/70">
                  Achieve sub-3 second load times with our optimized infrastructure and intelligent caching systems.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Self-Healing Systems</h3>
                <p className="text-white/70">
                  Our infrastructure automatically detects and resolves issues, ensuring 99.9% uptime without human intervention.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-12">Latest Innovations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-green-500/30">
                <h3 className="text-xl font-semibold mb-4 text-green-400">AI Content Factory</h3>
                <p className="text-white/80 mb-4">
                  Our autonomous content generation system creates high-quality articles, social media posts, and marketing materials 24/7.
                </p>
                <div className="flex items-center text-sm text-white/60">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Currently generating 47 pieces of content daily
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Performance Monitor</h3>
                <p className="text-white/80 mb-4">
                  Real-time monitoring and optimization that keeps your applications running at peak performance.
                </p>
                <div className="flex items-center text-sm text-white/60">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Monitoring 227 automation processes
                </div>
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