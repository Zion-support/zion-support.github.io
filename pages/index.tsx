import type { NextPage } from 'next';
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
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, redundancy systems, PM2, GitHub Actions, Netlify, Next.js, zero-downtime, intelligent automation" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
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
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">AI-Powered Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• 200+ autonomous agents</li>
                  <li>• Intelligent content generation</li>
                  <li>• Predictive maintenance</li>
                  <li>• Automated QA</li>
                </ul>
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
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Redundancy Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automated security scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance monitoring</li>
                  <li>• Threat detection & response</li>
                </ul>
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">View Security Guide →</Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automated testing suites</li>
                  <li>• Performance testing</li>
                  <li>• Security testing</li>
                  <li>• Continuous validation</li>
                </ul>
                <Link href="/resources" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">View Testing Guide →</Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build & Deploy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Real-time monitoring</li>
                  <li>• Optimization & budgets</li>
                  <li>• Health checks</li>
                  <li>• Predictive maintenance</li>
                </ul>
                <Link href="/resources" className="text-green-400 hover:text-green-300 text-sm font-semibold">View Performance Guide →</Link>
              </div>
            </div>
          </section>

          {/* Latest updates */}
          <section className="mx-auto max-w-7xl px-2 pb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Updates</h2>
              <Link href="/reports" className="text-cyan-300 hover:text-cyan-200 text-sm font-semibold">View all →</Link>
            </div>
            {latestUpdates.length === 0 ? (
              <div className="text-white/80">No updates available.</div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {latestUpdates.slice(0, 6).map(({ slug }) => (
                  <Link key={slug} href={`/reports/updates/${slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <h3 className="text-lg font-semibold break-words">{slug}</h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-2 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to experience autonomous operations?</h2>
              <p className="text-lg text-white/80 mb-6">Partner with us to modernize your stack with AI automation, reliable cloud, and zero-downtime deployment strategies.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg">
                  Start Your Journey
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

          {/* Project Statistics & Achievements */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📊 Project Statistics & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-xl p-6 border border-cyan-400/30 text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80 text-sm">Autonomous Agents</div>
              </div>
              
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 backdrop-blur-xl rounded-xl p-6 border border-fuchsia-400/30 text-center">
                <div className="text-4xl mb-2">📄</div>
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/80 text-sm">Dynamic Pages</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-xl p-6 border border-green-400/30 text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-white/80 text-sm">Uptime</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/30 text-center">
                <div className="text-4xl mb-2">🌍</div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-white/80 text-sm">Core Components</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">🔄 Redundancy Systems</h3>
                <ul className="text-white/80 space-y-2 mb-6">
                  <li>• Ultimate Redundancy V2 with 5-layer protection</li>
                  <li>• Comprehensive redundancy across all systems</li>
                  <li>• PM2 process management with auto-restart</li>
                  <li>• GitHub Actions redundancy for CI/CD</li>
                  <li>• Netlify Functions redundancy for serverless</li>
                </ul>
                <Link href="/resources" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                  Explore Redundancy Systems <span className="ml-2">→</span>
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">🤖 AI & Automation</h3>
                <ul className="text-white/80 space-y-2 mb-6">
                  <li>• AI trends research and analysis</li>
                  <li>• Autonomous content generation</li>
                  <li>• Intelligent system orchestration</li>
                  <li>• Self-healing automation agents</li>
                  <li>• Continuous innovation systems</li>
                </ul>
                <Link href="/blog" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 font-semibold">
                  Explore AI Systems <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Technology Stack Deep Dive */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🛠️ Technology Stack & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Frontend & UI</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Next.js 15 with React 18</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Framer Motion animations</li>
                  <li>• Responsive design system</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Backend & Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Netlify Functions serverless</li>
                  <li>• PM2 process management</li>
                  <li>• Docker containerization</li>
                  <li>• GitHub Actions CI/CD</li>
                  <li>• Automated deployments</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">AI & Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• OpenAI GPT integration</li>
                  <li>• Autonomous agents system</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Self-healing mechanisms</li>
                  <li>• Predictive analytics</li>
                </ul>
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
}

