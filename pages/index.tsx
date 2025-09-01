import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type UpdateLink = { href: string; title: string };

interface HomePageProps {
  latestUpdates?: UpdateLink[];
}

export default function HomePage({ latestUpdates = [] }: HomePageProps) {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI Cloud Platform</title>
        <meta name="description" content="Explore intelligent automations, AI services, cloud-native infrastructure, redundancy systems, and zero-downtime operations." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI Cloud Platform" />
        <meta property="og:description" content="Experience autonomous technology with AI automations, redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, redundancy systems, PM2, GitHub Actions, Netlify, zero-downtime, intelligent automation, AI-powered platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              The world’s most advanced autonomous innovation hub delivering AI services, intelligent automation, and cloud-native infrastructure with built-in redundancy and zero‑downtime operations.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-400 font-bold">200+ </span>Automations
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-fuchsia-400 font-bold">99.99% </span>Uptime
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">Global </span>Redundancy
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Revolutionary Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Cloud</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Self-healing CI/CD</li>
                  <li>• Smart dependencies</li>
                  <li>• Performance monitoring</li>
                  <li>• Zero-downtime deploys</li>
                </ul>
                <Link href="/automation" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold mt-4 inline-block">
                  Explore Cloud Systems →
                </Link>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Content generation</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Predictive maintenance</li>
                  <li>• Quality assurance</li>
                </ul>
                <Link href="/automation" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold mt-4 inline-block">
                  Explore AI Systems →
                </Link>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Geographic distribution</li>
                  <li>• Real-time health checks</li>
                </ul>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Advanced Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Real-time metrics</li>
                  <li>• Error recovery</li>
                  <li>• Comprehensive logging</li>
                  <li>• AI-driven insights</li>
                </ul>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automated scanning</li>
                  <li>• Threat detection</li>
                  <li>• Compliance monitoring</li>
                  <li>• Zero-trust architecture</li>
                </ul>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Global Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-region deployment</li>
                  <li>• Edge optimization</li>
                  <li>• Global CDN</li>
                  <li>• Low-latency routing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Explore */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Advanced Technology Stack & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Next.js 14</h3>
                <p className="text-white/70 text-sm">React framework with SSR/SSG</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🐳</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Docker & PM2</h3>
                <p className="text-white/70 text-sm">Container orchestration</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Netlify Functions</h3>
                <p className="text-white/70 text-sm">Serverless backend services</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">GitHub Actions</h3>
                <p className="text-white/70 text-sm">CI/CD automation</p>
              </div>
            </div>
          </section>

          {/* Revolutionary Platform Advantages */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🎯 Why Zion Tech Group is Revolutionary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Zero-Downtime Operations</h3>
                    <p className="text-white/80">Our autonomous systems ensure 99.99% uptime with automatic failover and self-healing capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI-Powered Innovation</h3>
                    <p className="text-white/80">Leverage 227+ autonomous agents that continuously improve your systems and generate intelligent content.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Scalable Architecture</h3>
                    <p className="text-white/80">Built for exponential growth with automatic scaling, load balancing, and global distribution.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Proactive Monitoring</h3>
                    <p className="text-white/80">Real-time health monitoring with predictive analytics and automated issue resolution.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Enterprise Security</h3>
                    <p className="text-white/80">Bank-grade security with automated threat detection, compliance monitoring, and data protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Future-Ready Platform</h3>
                    <p className="text-white/80">Continuously evolving with cutting-edge technologies and autonomous system improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive Platform Navigation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔗 Explore Our Revolutionary Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About</h3>
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex itemscenter justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch</p>
              </Link>

              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-amber-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Privacy</h3>
                <p className="text-white/70 text-sm">Our data practices</p>
              </Link>
              
              <Link href="/reports/updates" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📈</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-4">Featured Blog Posts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/blog/ai-automation-trends-2025" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-cyan-400/30 transition-all">AI Automation Trends 2025</Link>
                  <Link href="/blog/ai-ethics-automation" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-fuchsia-400/30 transition-all">AI Ethics in Automation</Link>
                  <Link href="/blog/autonomous-content-generation" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-blue-400/30 transition-all">Autonomous Content Generation</Link>
                  <Link href="/blog/cloud-native-automation" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-yellow-400/30 transition-all">Cloud-Native Automation</Link>
                  <Link href="/blog/future-of-work" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-purple-400/30 transition-all">Future of Work</Link>
                  <Link href="/blog/performance-optimization" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-green-400/30 transition-all">Performance Optimization</Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-4">Latest Updates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/reports/updates/update-2025-08-15-0406" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-cyan-400/30 transition-all">Update — 2025-08-15-0406</Link>
                  <Link href="/reports/updates/update-2025-08-15-0405" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-fuchsia-400/30 transition-all">Update — 2025-08-15-0405</Link>
                  <Link href="/reports/updates/update-2025-08-15-0404" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-blue-400/30 transition-all">Update — 2025-08-15-0404</Link>
                  <Link href="/reports/updates/update-2025-08-15-0403" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-yellow-400/30 transition-all">Update — 2025-08-15-0403</Link>
                  <Link href="/reports/updates/update-2025-08-15-0402" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-purple-400/30 transition-all">Update — 2025-08-15-0402</Link>
                  <Link href="/reports/updates/update-2025-08-15-0111" className="group rounded-xl border border-white/15 bg-white/5 p-4 hover:border-green-400/30 transition-all">Update — 2025-08-15-0111</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Features Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Project Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Core Documentation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Main README</a> — Overview</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Architecture</a> — System design</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">API</a> — Integration guide</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Deployment</a> — Setup</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Contributing</a> — Workflow</li>
                </ul>
                <Link href="/docs/security" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Security Guide →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Ultimate Redundancy</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Comprehensive Redundancy</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">PM2 Redundancy</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub Actions</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_CONTINUOUS_OPERATION.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Continuous Operation</a></li>
                </ul>
                <Link href="/docs/testing" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  View Testing Guide →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Advanced Features</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Security</a> — Protection</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Testing</a> — QA</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/SERVICE_GENERATION_README.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Service Generation</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ULTIMATE_REDUNDANCY_AUTOMATION_README.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Automation README</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/EXPONENTIAL_GROWTH_AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Growth Automation</a></li>
                </ul>
                <Link href="/docs/performance" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  View Performance Guide →
                </a>
              </div>
            </div>
          </section>

          {/* Developer & Operations Documentation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Developer & Operations Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/README.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📖</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Project Overview</h3>
                <p className="text-white/70 text-sm">Start here: full platform overview</p>
              </Link>

              <Link href="/ARCHITECTURE.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">System Architecture</h3>
                <p className="text-white/70 text-sm">Deep dive into core systems</p>
              </Link>

              <Link href="/API.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">API Reference</h3>
                <p className="text-white/70 text-sm">Endpoints, payloads, examples</p>
              </Link>

              <Link href="/DEPLOYMENT.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚢</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Deployment Guide</h3>
                <p className="text-white/70 text-sm">CI/CD & hosting strategies</p>
              </Link>

              <Link href="/README_ULTIMATE_REDUNDANCY.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-pink-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Ultimate Redundancy</h3>
                <p className="text-white/70 text-sm">Zero downtime architecture</p>
              </Link>

              <Link href="/README_ULTIMATE_REDUNDANCY_V2.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🧬</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Redundancy v2</h3>
                <p className="text-white/70 text-sm">Next-gen failover systems</p>
              </Link>

              <Link href="/README_COMPREHENSIVE_REDUNDANCY.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-lime-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">♻️</span>
                </div>
                <h3 className="text-lg font-semibold text-lime-400 mb-2">Comprehensive Automation</h3>
                <p className="text-white/70 text-sm">Autonomous ops at scale</p>
              </Link>

              <Link href="/CONTRIBUTING.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-sky-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-sky-400 mb-2">Contributing</h3>
                <p className="text-white/70 text-sm">How to collaborate</p>
              </Link>
            </div>
          </section>

          {/* Quick Links Strip */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all">Blog</Link>
              <Link href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all">Case Studies</Link>
              <Link href="/resources" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all">Resources</Link>
              <Link href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all">Services</Link>
              <Link href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all">Contact</Link>
              <Link href="/privacy" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all">Privacy</Link>
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
                  <li>• Smart dependency management</li>
                  <li>• Automated testing</li>
                  <li>• Performance optimization</li>
                  <li>• Error recovery</li>
                  <li>• Deployment automation</li>
                </ul>
                <Link href="/docs/pm2-redundancy-complete" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </section>

          {/* Developer & Ops Documentation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Developer & Operations Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">📖 Core Documentation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Main README</a> - Project overview</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Architecture Guide</a> - System design</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">API Documentation</a> - Integration guide</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Deployment Guide</a> - Setup instructions</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Contributing Guide</a> - Development workflow</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🔧 Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Ultimate Redundancy</a> - System overview</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/COMPREHENSIVE_REDUNDANCY_README.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Comprehensive Redundancy</a> - Advanced features</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">PM2 Redundancy</a> - Process management</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub Actions</a> - CI/CD automation</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_CONTINUOUS_OPERATION.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Continuous Operation</a> - Zero-downtime</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Advanced Features</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/COMPREHENSIVE_REDUNDANCY_README.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Security Guide</a> - Protection measures</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Testing Guide</a> - Quality assurance</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Ultimate Redundancy V2</a> - Geo-redundancy</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Automation README</a> - System details</li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/EXPONENTIAL_GROWTH_AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Growth Automation</a> - Scaling systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(latestUpdates.length ? latestUpdates : []).slice(0, 6).map((u) => (
                <Link key={u.href} href={u.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{u.title}</h3>
                  <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join organizations leveraging our AI-powered platform for unprecedented efficiency, innovation, and reliability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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

export async function getStaticProps() {
  try {
    const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
    const files = fs.readdirSync(updatesDir)
      .filter((f) => f.endsWith('.tsx'))
      .sort((a, b) => (a < b ? 1 : -1));

    const latestUpdates: UpdateLink[] = files.slice(0, 6).map((file) => {
      const slug = file.replace(/\.tsx$/, '');
      const title = `Autonomous Update — ${slug.replace('update-', '').replace(/-/g, ': ')}`;
      return { href: `/reports/updates/${slug}`, title };
    });

    return { props: { latestUpdates } };
  } catch {
    return { props: { latestUpdates: [] } };
  }
}
