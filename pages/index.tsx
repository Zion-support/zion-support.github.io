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
          {/* Top Navigation */}
          <header className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
            <nav className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/90">
              <Link href="/about" className="hover:text-cyan-300 transition-colors">About</Link>
              <Link href="/services" className="hover:text-fuchsia-300 transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-purple-300 transition-colors">Blog</Link>
              <Link href="/resources" className="hover:text-blue-300 transition-colors">Resources</Link>
              <Link href="/case-studies" className="hover:text-yellow-300 transition-colors">Case Studies</Link>
              <Link href="/contact" className="hover:text-green-300 transition-colors">Contact</Link>
            </nav>
          </header>
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
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

          {/* Content Directory */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🗂️ Content Directory</h2>

            {/* Core Pages */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-4">Core Pages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/about" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-cyan-300 font-semibold">About</div>
                      <div className="text-white/70 text-sm">Mission, vision, and approach</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/services" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-fuchsia-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-fuchsia-300 font-semibold">Services</div>
                      <div className="text-white/70 text-sm">AI solutions and offerings</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/resources" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-blue-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-300 font-semibold">Resources</div>
                      <div className="text-white/70 text-sm">Tools, guides, and insights</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/case-studies" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-yellow-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-yellow-300 font-semibold">Case Studies</div>
                      <div className="text-white/70 text-sm">Real-world success stories</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/blog" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-purple-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-purple-300 font-semibold">Blog</div>
                      <div className="text-white/70 text-sm">Analyses and deep-dives</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/contact" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-green-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-green-300 font-semibold">Contact</div>
                      <div className="text-white/70 text-sm">Get in touch</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/privacy" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-red-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-red-300 font-semibold">Privacy</div>
                      <div className="text-white/70 text-sm">Trust and compliance</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Featured Blog Posts */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Featured Blog Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/blog/ai-automation-trends-2025" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-cyan-300 font-semibold">AI Automation Trends 2025</div>
                      <div className="text-white/70 text-sm">What to expect next</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/blog/ai-ethics-automation" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-fuchsia-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-fuchsia-300 font-semibold">AI Ethics & Automation</div>
                      <div className="text-white/70 text-sm">Responsible systems</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/blog/autonomous-content-generation" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-green-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-green-300 font-semibold">Autonomous Content Generation</div>
                      <div className="text-white/70 text-sm">Scaling content safely</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/blog/cloud-native-automation" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-blue-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-300 font-semibold">Cloud-Native Automation</div>
                      <div className="text-white/70 text-sm">Modern infra patterns</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/blog/future-of-work" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-yellow-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-yellow-300 font-semibold">The Future of Work</div>
                      <div className="text-white/70 text-sm">AI x human collaboration</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
                <Link href="/blog/performance-optimization" className="group rounded-xl border border-white/20 bg-white/5 p-4 hover:border-purple-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-purple-300 font-semibold">Performance Optimization</div>
                      <div className="text-white/70 text-sm">Ship fast, stay fast</div>
                    </div>
                    <span className="opacity-75 group-hover:opacity-100">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📰 Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-automation-trends-2025" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Automation Trends 2025</h3>
                <p className="text-white/70 text-sm">Discover the most impactful automation trends shaping the year ahead.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/autonomous-content-generation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Autonomous Content Generation</h3>
                <p className="text-white/70 text-sm">How AI systems create, optimize, and scale content autonomously.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-fuchsia-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/performance-optimization" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Performance Optimization</h3>
                <p className="text-white/70 text-sm">Techniques for high-performance, low-latency autonomous platforms.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-green-300/90">Read <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Developer & Architecture Docs */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Developer & Architecture Docs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/ARCHITECTURE.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">System Architecture</h3>
                <p className="text-white/70 text-sm">High-level overview of platform components and data flows.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-indigo-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/API.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">API Reference</h3>
                <p className="text-white/70 text-sm">Endpoints, payloads, and usage examples.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/README.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Project Overview</h3>
                <p className="text-white/70 text-sm">Getting started, scripts, and contributor guide.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-purple-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Revolutionary Platform Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Revolutionary Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Autonomous Cloud Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Cloud Systems</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Self-healing CI/CD</li>
                  <li>• Intelligent build orchestration</li>
                  <li>• Automated dependency management</li>
                  <li>• Zero-downtime deploys</li>
                </ul>
              </div>

              {/* AI-Powered Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI-Powered Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• 227+ autonomous agents</li>
                  <li>• Intelligent content generation</li>
                  <li>• Automated quality assurance</li>
                  <li>• Smart error recovery</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </div>

              {/* Redundancy & Reliability */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-layer redundancy systems</li>
                  <li>• Automatic failover protection</li>
                  <li>• Continuous health monitoring</li>
                  <li>• Self-repairing infrastructure</li>
                  <li>• Geographic distribution</li>
                </ul>
              </div>

              {/* Advanced Monitoring */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Advanced Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Real-time performance metrics</li>
                  <li>• Automated health checks</li>
                  <li>• Predictive failure detection</li>
                  <li>• Comprehensive logging systems</li>
                  <li>• AI-driven insights</li>
                </ul>
              </div>

              {/* Security & Compliance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automated security scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance monitoring</li>
                  <li>• Threat detection & response</li>
                  <li>• Zero-trust architecture</li>
                </ul>
              </div>

              {/* Global Infrastructure */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Global Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-region deployment</li>
                  <li>• Edge computing optimization</li>
                  <li>• Global CDN integration</li>
                  <li>• Geographic redundancy</li>
                  <li>• Low-latency routing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Technology Stack */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4" />
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

          {/* Featured Blog Posts */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🧠 Featured Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-automation-trends-2025" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Automation Trends 2025</h3>
                <p className="text-white/70 text-sm">What’s next in autonomous systems and enterprise AI.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/autonomous-content-generation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Autonomous Content Generation</h3>
                <p className="text-white/70 text-sm">Scaling high-quality content with AI-driven systems.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-fuchsia-300/90">Read <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/performance-optimization" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Performance Optimization</h3>
                <p className="text-white/70 text-sm">Techniques for zero-downtime, highly-performant apps.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-green-300/90">Read <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/cloud-native-automation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Cloud-Native Automation</h3>
                <p className="text-white/70 text-sm">Self-healing, auto-scaling cloud infrastructure patterns.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-blue-300/90">Read <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/future-of-work" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">The Future of Work</h3>
                <p className="text-white/70 text-sm">How AI is reshaping teams, workflows, and outcomes.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-yellow-300/90">Read <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/ai-ethics-automation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">AI Ethics in Automation</h3>
                <p className="text-white/70 text-sm">Best practices for safe, responsible AI systems at scale.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-purple-300/90">Read <span aria-hidden>→</span></div>
              </Link>
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                Explore All Blog Posts
              </Link>
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
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Our mission & vision</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI Services</h3>
                <p className="text-white/70 text-sm">Intelligent solutions</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Tools & insights</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Latest insights</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch</p>
              </Link>
              
              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Privacy & Security</h3>
                <p className="text-white/70 text-sm">Trust & compliance</p>
              </Link>
              
              <Link href="/reports/updates" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📖</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">Project Overview</h3>
                <p className="text-white/70 text-sm">Architecture, features, automation</p>
              </Link>
              
              <Link href="/ARCHITECTURE.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Architecture</h3>
                <p className="text-white/70 text-sm">System design & principles</p>
              </Link>
              
              <Link href="/API.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">API Reference</h3>
                <p className="text-white/70 text-sm">Endpoints & usage</p>
              </Link>
            </div>
          </section>

          {/* Quick Directory of Core Pages */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🗂️ Explore All Core Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/about" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">About</h3>
                <p className="text-white/70 text-sm">Who we are and how we build.</p>
              </Link>
              <Link href="/services" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-fuchsia-300 mb-1">Services</h3>
                <p className="text-white/70 text-sm">AI, automation, cloud-native solutions.</p>
              </Link>
              <Link href="/resources" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-blue-300 mb-1">Resources</h3>
                <p className="text-white/70 text-sm">Guides, tools, and learning materials.</p>
              </Link>
              <Link href="/case-studies" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-yellow-300 mb-1">Case Studies</h3>
                <p className="text-white/70 text-sm">Outcomes and proof at scale.</p>
              </Link>
              <Link href="/blog" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-purple-300 mb-1">Blog</h3>
                <p className="text-white/70 text-sm">Trends, research, and insights.</p>
              </Link>
              <Link href="/reports/updates" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-indigo-300 mb-1">Reports</h3>
                <p className="text-white/70 text-sm">Autonomous updates and analytics.</p>
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-emerald-300 mb-1">Contact</h3>
                <p className="text-white/70 text-sm">Start your project with us.</p>
              </Link>
              <Link href="/privacy" className="bg-white/10 hover:bg-white/15 rounded-xl p-6 border border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-rose-300 mb-1">Privacy</h3>
                <p className="text-white/70 text-sm">Security, data, and compliance.</p>
              </Link>
            </div>
          </section>

          {/* Blog Highlights */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📰 Featured Blog Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { href: '/blog/performance-optimization', title: 'Performance Optimization at Scale' },
                { href: '/blog/ai-automation-trends-2025', title: 'AI Automation Trends 2025' },
                { href: '/blog/ai-ethics-automation', title: 'AI Ethics in Automation' },
                { href: '/blog/autonomous-content-generation', title: 'Autonomous Content Generation' },
                { href: '/blog/cloud-native-automation', title: 'Cloud-Native Automation' },
                { href: '/blog/future-of-work', title: 'The Future of Work' }
              ].map((post) => (
                <Link key={post.href} href={post.href} className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 mb-2">{post.title}</h3>
                  <div className="text-sm text-white/70">Read now →</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Advanced Features Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Privacy</h3>
                <p className="text-white/70 text-sm">Our commitment to your data</p>
              </Link>

              <Link href="/reports/updates/update-2025-08-15-0406" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📢</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Reports</h3>
                <p className="text-white/70 text-sm">Latest platform updates</p>
              </Link>
            </div>
          </section>

          {/* Advanced Automation Systems Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🤖 Advanced Automation Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Redundancy Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Security Guide →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧪 Testing & Quality</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                </ul>
                <Link href="/services" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  Explore AI Systems →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build & Deploy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <Link href="/resources" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Explore Build Systems →
                </Link>
              </div>
            </div>
          </section>

          {/* Technology & Infrastructure Deep Dive */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏗️ Technology & Infrastructure Deep Dive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Development Tools</h3>
                <p className="text-white/70 text-sm">TypeScript, ESLint, Husky</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Monitoring</h3>
                <p className="text-white/70 text-sm">Performance, Health, Analytics</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Deployment</h3>
                <p className="text-white/70 text-sm">Netlify, PM2, Docker</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Security</h3>
                <p className="text-white/70 text-sm">Scanning, Compliance, Protection</p>
              </div>
            </div>
          </section>

          {/* Advanced Automation Systems Deep Dive */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔧 Advanced Automation Systems Deep Dive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Ultimate Redundancy V2</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Self-healing systems</li>
                  <li>• Geographic distribution</li>
                  <li>• Real-time monitoring</li>
                </ul>
                <div className="text-cyan-400 text-sm font-semibold">
                  Status: Active & Monitoring
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Content Factory</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Autonomous content generation</li>
                  <li>• AI-powered optimization</li>
                  <li>• Intelligent scheduling</li>
                  <li>• Quality assurance</li>
                  <li>• Performance testing</li>
                  <li>• Security testing</li>
                  <li>• Continuous validation</li>
                </ul>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  View Testing Guide →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">📈 Performance & Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Real-time monitoring</li>
                  <li>• Performance optimization</li>
                  <li>• Health checks</li>
                  <li>• Analytics dashboard</li>
                  <li>• Predictive maintenance</li>
                  <li>• Automated QA</li>
                </ul>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">
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
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
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
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
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
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </section>

          {/* Developer Documentation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📘 Developer Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Project Overview</h3>
                <p className="text-white/70 text-sm">Start here to understand the platform.</p>
              </Link>
              <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">API Reference</h3>
                <p className="text-white/70 text-sm">Endpoints and integrations.</p>
              </Link>
              <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Architecture</h3>
                <p className="text-white/70 text-sm">System design and components.</p>
              </Link>
              <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Deployment</h3>
                <p className="text-white/70 text-sm">How we ship with zero-downtime.</p>
              </Link>
              <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Security</h3>
                <p className="text-white/70 text-sm">Policies and hardening practices.</p>
              </Link>
              <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Testing</h3>
                <p className="text-white/70 text-sm">Quality assurance systems.</p>
              </Link>
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
          {/* Footer */}
          <footer className="mx-auto max-w-7xl px-6 pb-8 text-center text-sm text-white/60">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/README.md" className="hover:text-white/80">README</Link>
              <Link href="/SECURITY.md" className="hover:text-white/80">Security</Link>
              <Link href="/TESTING.md" className="hover:text-white/80">Testing</Link>
              <Link href="/PERFORMANCE.md" className="hover:text-white/80">Performance</Link>
              <Link href="/privacy" className="hover:text-white/80">Privacy</Link>
              <Link href="/resources" className="hover:text-white/80">Resources</Link>
            </div>
            <div className="mt-3">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</div>
          </footer>
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