import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function HomePage({ updates = [] }: { updates?: { slug: string; title: string }[] }) {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI Cloud Platform</title>
        <meta name="description" content="Explore autonomous systems, AI-powered services, comprehensive redundancy, continuous monitoring, and zero-downtime operations." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI Cloud Platform" />
        <meta property="og:description" content="Explore autonomous systems, AI-powered services, comprehensive redundancy, continuous monitoring, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, redundancy systems, PM2, GitHub Actions, Netlify, zero-downtime, intelligent automation, AI-powered platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              The autonomous innovation hub for resilient, AI-powered, cloud-native systems.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                About Our Mission
              </Link>
              <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                AI Services
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </Link>
              <Link href="/blog" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Blog
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Case Studies
              </Link>
              <Link href="/privacy" className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Privacy
              </Link>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mx-auto max-w-7xl px-0 pb-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-white/90 mb-10">Revolutionary Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 text-center">Autonomous Cloud Systems</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Self-healing CI/CD</li>
                  <li>• Intelligent build orchestration</li>
                  <li>• Zero-downtime deployments</li>
                  <li>• <Link href="/README_ULTIMATE_REDUNDANCY.md" className="text-cyan-400 hover:text-cyan-300">Ultimate Redundancy V2</Link></li>
                </ul>
                <Link href="/automation" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold mt-4 inline-block">
                  Explore Cloud Systems →
                </Link>
              </div>
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-2 text-center">AI-Powered Automation</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Content generation & QA</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Predictive maintenance</li>
                  <li>• <Link href="/AI_CONTENT_AUTONOMY_REPORT.md" className="text-fuchsia-400 hover:text-fuchsia-300">AI Content Autonomy</Link></li>
                  <li>• <Link href="/AI_CONTENT_FACTORY_REPORT.md" className="text-fuchsia-400 hover:text-fuchsia-300">AI Content Factory</Link></li>
                </ul>
                <Link href="/automation" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold mt-4 inline-block">
                  Explore AI Systems →
                </Link>
              </div>
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Reliability & Redundancy</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Global distribution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Explore */}
          <section className="mx-auto max-w-7xl px-0 pb-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-white/90 mb-10">Explore the Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">About Us</h3>
                <p className="text-white/70 text-sm">Mission & vision</p>
              </Link>
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-1">AI Services</h3>
                <p className="text-white/70 text-sm">Intelligent solutions</p>
              </Link>
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-blue-400 mb-1">Resources</h3>
                <p className="text-white/70 text-sm">Tools & insights</p>
              </Link>
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-1">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories</p>
              </Link>
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-purple-400 mb-1">Blog</h3>
                <p className="text-white/70 text-sm">Latest insights</p>
              </Link>
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-1">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch</p>
              </Link>
              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-emerald-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-emerald-400 mb-1">Privacy & Policies</h3>
                <p className="text-white/70 text-sm">Security, terms, privacy</p>
              </Link>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="mx-auto max-w-7xl px-0 pb-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-white/90 mb-10">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/autonomous-content-generation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-1">Autonomous Content Generation</h3>
                <p className="text-white/70 text-sm">How agents create, review, and improve content.</p>
              </Link>
              <Link href="/blog/ai-automation-trends-2025" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">AI Automation Trends 2025</h3>
                <p className="text-white/70 text-sm">What’s next in intelligent automation.</p>
              </Link>
              <Link href="/blog/performance-optimization" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-green-400 mb-1">Performance Optimization</h3>
                <p className="text-white/70 text-sm">Techniques for fast, resilient systems.</p>
              </Link>
            </div>
          </section>

          {/* Latest Updates */}
          <section className="mx-auto max-w-7xl px-0 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025-08-15 04:06</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025-08-15 04:05</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025-08-15 04:04</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-0 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to experience autonomous technology?</h2>
              <p className="text-lg text-white/80 mb-6">Partner with us to build resilient, intelligent systems with zero-downtime operations.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Key Benefits Summary */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">💎 Key Benefits & Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">99.99% Uptime</h3>
                <p className="text-white/70 text-sm">Zero-downtime operations with automatic failover</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">227+ Automations</h3>
                <p className="text-white/70 text-sm">Intelligent systems handling every aspect</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Auto-Scaling</h3>
                <p className="text-white/70 text-sm">Handles any load automatically</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Enterprise Security</h3>
                <p className="text-white/70 text-sm">Bank-grade protection & compliance</p>
              </div>
            </div>
          </section>
        </main>

        {/* Comprehensive Footer */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-white/70 text-sm mb-4">
                  The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🌐</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">Services</Link></li>
                  <li><Link href="/case-studies" className="text-white/70 hover:text-white text-sm transition-colors">Case Studies</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
                  <li><Link href="/resources" className="text-white/70 hover:text-white text-sm transition-colors">Resources</Link></li>
                </ul>
              </div>

              {/* Technology & Systems */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Technology</h3>
                <ul className="space-y-2">
                  <li><Link href="/README.md" className="text-white/70 hover:text-white text-sm transition-colors">Project Overview</Link></li>
                  <li><Link href="/ARCHITECTURE.md" className="text-white/70 hover:text-white text-sm transition-colors">Architecture</Link></li>
                  <li><Link href="/API.md" className="text-white/70 hover:text-white text-sm transition-colors">API Docs</Link></li>
                  <li><Link href="/DEPLOYMENT.md" className="text-white/70 hover:text-white text-sm transition-colors">Deployment</Link></li>
                  <li><Link href="/SECURITY.md" className="text-white/70 hover:text-white text-sm transition-colors">Security</Link></li>
                </ul>
              </div>

              {/* Automation Systems */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Automation</h3>
                <ul className="space-y-2">
                  <li><Link href="/README_ULTIMATE_REDUNDANCY.md" className="text-white/70 hover:text-white text-sm transition-colors">Redundancy Systems</Link></li>
                  <li><Link href="/README_COMPREHENSIVE_REDUNDANCY.md" className="text-white/70 hover:text-white text-sm transition-colors">Comprehensive Redundancy</Link></li>
                  <li><Link href="/README_PM2_REDUNDANCY_COMPLETE.md" className="text-white/70 hover:text-white text-sm transition-colors">PM2 Management</Link></li>
                  <li><Link href="/README_GITHUB_ACTIONS.md" className="text-white/70 hover:text-white text-sm transition-colors">CI/CD Automation</Link></li>
                  <li><Link href="/README_CONTINUOUS_OPERATION.md" className="text-white/70 hover:text-white text-sm transition-colors">Continuous Operation</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/70 text-sm mb-4 md:mb-0">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link>
                <a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Quick Links Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-8 text-white/80 text-sm grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-white font-semibold mb-2">Company</div>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Content</div>
            <ul className="space-y-1">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Docs</div>
            <ul className="space-y-1">
              <li><a href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-white">README</a></li>
              <li><a href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="hover:text-white">Architecture</a></li>
              <li><a href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Get Started</div>
            <ul className="space-y-1">
              <li><Link href="/contact" className="hover:text-white">Request a Demo</Link></li>
              <li><Link href="/services" className="hover:text-white">See Pricing</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

