import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

type HomeProps = {
  latestUpdates: Array<{ slug: string }>
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
  let latestUpdates: Array<{ slug: string }> = [];

  try {
    const files = fs.readdirSync(updatesDir)
      .filter((f) => f.endsWith('.tsx'))
      .map((f) => f.replace(/\.tsx$/, ''))
      .sort((a, b) => (a < b ? 1 : -1))
      .slice(0, 6)
      .map((slug) => ({ slug }));
    latestUpdates = files;
  } catch {
    latestUpdates = [];
  }

  return { props: { latestUpdates } };
};

export default function HomePage({ latestUpdates }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI Cloud</title>
        <meta name="description" content="Explore our autonomous platform: 200+ intelligent automations, AI-powered cloud, multi-layer redundancy, and zero-downtime operations. Learn about services, reports, resources, and more." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI Cloud" />
        <meta property="og:description" content="Explore our autonomous platform: 200+ intelligent automations, AI-powered cloud, multi-layer redundancy, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, redundancy systems, PM2, GitHub Actions, Netlify, zero-downtime, intelligent automation, AI-powered platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              The most advanced autonomous innovation hub — AI-powered cloud, end-to-end automation, and multi-layer redundancy for zero-downtime operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg">
                About Our Mission
              </Link>
              <Link href="/services" className="px-7 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg">
                AI Services
              </Link>
              <Link href="/contact" className="px-7 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg">
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

          {/* Highlights */}
          <section className="mx-auto max-w-7xl px-2 pb-14">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-10">Platform Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Autonomous Cloud Systems</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Self-healing CI/CD</li>
                  <li>• Intelligent build orchestration</li>
                  <li>• Automated dependency management</li>
                  <li>• Zero-downtime deploys</li>
                </ul>
                <Link href="/automation" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold mt-4 inline-block">
                  Explore Cloud Systems →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">AI-Powered Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• 200+ autonomous agents</li>
                  <li>• Intelligent content generation</li>
                  <li>• Predictive maintenance</li>
                  <li>• Automated QA</li>
                </ul>
                <Link href="/automation" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold mt-4 inline-block">
                  Explore AI Systems →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-3">Redundancy & Reliability</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Self-repairing infra</li>
                  <li>• Global distribution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Explore */}
          <section className="mx-auto max-w-7xl px-2 pb-14">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-10">Explore the Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">About</h3>
                <p className="text-white/70 text-sm">Mission, vision, and values</p>
              </Link>
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-1">AI Services</h3>
                <p className="text-white/70 text-sm">Solutions & engagements</p>
              </Link>
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-indigo-400 mb-1">Resources</h3>
                <p className="text-white/70 text-sm">Guides & tools</p>
              </Link>
              <Link href="/reports" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-1">Reports</h3>
                <p className="text-white/70 text-sm">Analytics & updates</p>
              </Link>
            </div>
          </section>

          {/* Deep-dive cards */}
          <section className="mx-auto max-w-7xl px-2 pb-14">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-10">Capabilities & Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">📖 Core Documentation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Main README</a> - Project overview</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Architecture Guide</a> - System design</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">API Documentation</a> - Integration guide</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Deployment Guide</a> - Setup instructions</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/CONTRIBUTING.md" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Contributing Guide</a> - Development workflow</li>
                </ul>
                <Link href="/docs/security" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Security Guide →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🔧 Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">Ultimate Redundancy</a> - System overview</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">Comprehensive Redundancy</a> - Advanced features</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">PM2 Redundancy</a> - Process management</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">GitHub Actions</a> - CI/CD automation</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_CONTINUOUS_OPERATION.md" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">Continuous Operation</a> - Zero-downtime</li>
                </ul>
                <Link href="/docs/testing" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  View Testing Guide →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Advanced Features</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">Security Guide</a> - Protection measures</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">Testing Guide</a> - Quality assurance</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/SERVICE_GENERATION_README.md" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">Service Generation</a> - Auto-creation</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ULTIMATE_REDUNDANCY_AUTOMATION_README.md" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">Automation README</a> - System details</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/EXPONENTIAL_GROWTH_AUTOMATION.md" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">Growth Automation</a> - Scaling systems</li>
                </ul>
                <Link href="/docs/performance" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  View Performance Guide →
                </a>
              </div>
            </div>
          </section>

          {/* Automation & Redundancy Systems */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🤖 Autonomous Systems & Redundancy Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Ultimate Redundancy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Multi-layer failover systems</li>
                  <li>• Geographic distribution</li>
                  <li>• Automatic recovery</li>
                  <li>• Health monitoring</li>
                  <li>• Self-healing infrastructure</li>
                </ul>
                <Link href="/docs/ultimate-redundancy" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Learn More →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🚀 Comprehensive Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• 227+ autonomous agents</li>
                  <li>• Self-managing systems</li>
                  <li>• Continuous improvement</li>
                  <li>• Error prevention</li>
                  <li>• Predictive analytics</li>
                </ul>
                <Link href="/docs/comprehensive-redundancy" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  Learn More →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ PM2 Orchestration</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Process management</li>
                  <li>• Auto-restart systems</li>
                  <li>• Load balancing</li>
                  <li>• Performance monitoring</li>
                  <li>• Cluster management</li>
                </ul>
                <Link href="/docs/pm2-redundancy" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Featured Articles</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/blog/ai-automation-trends-2025" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <h3 className="text-lg font-semibold">AI Automation Trends 2025</h3>
                <p className="mt-1 text-sm text-white/75">What’s next in autonomous systems.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-fuchsia-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/cloud-native-automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Cloud-Native Automation</h3>
                <p className="mt-1 text-sm text-white/75">Scaling with reliability and speed.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/performance-optimization" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-yellow-400/30">
                <h3 className="text-lg font-semibold">Performance Optimization</h3>
                <p className="mt-1 text-sm text-white/75">Techniques for blazing-fast apps.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-yellow-300/90">Read <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Revolutionary Call to Action */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of organizations leveraging our revolutionary AI-powered platform for unprecedented efficiency, innovation, and zero-downtime operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg">
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
        {/* Documentation Highlights */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Explore Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/docs/readme" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Project Overview</h3>
              <p className="text-white/75 text-sm">Quick start and high-level overview.</p>
            </Link>
            <Link href="/docs/architecture" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-fuchsia-300 mb-2">Architecture</h3>
              <p className="text-white/75 text-sm">System design and components.</p>
            </Link>
            <Link href="/docs/deployment" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-300 mb-2">Deployment</h3>
              <p className="text-white/75 text-sm">How to deploy reliably.</p>
            </Link>
          </div>
        </section>
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

