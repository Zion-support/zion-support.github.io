import type { NextPage } from 'next';
import Head from 'next/head';

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
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, comprehensive redundancy infrastructure, AI-powered content generation, and the future of cloud-native infrastructure with zero-downtime operations.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Automation
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </a>
              <a href="/resources" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Resources
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Featured Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Featured Content & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">Autonomous Automation</h3>
                <p className="text-sm text-white/75 mb-4">Experience our cutting-edge self-running systems</p>
                <div className="text-xs text-cyan-300/90">Explore →</div>
              </a>
              
              <a href="/blog" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">AI & Tech Blog</h3>
                <p className="text-sm text-white/75 mb-4">Latest insights on autonomous technology</p>
                <div className="text-xs text-fuchsia-300/90">Read More →</div>
              </a>
              
              <a href="/resources" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2">Free Resources</h3>
                <p className="text-sm text-white/75 mb-4">Tools, templates, and development guides</p>
                <div className="text-xs text-green-300/90">Access →</div>
              </a>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-6">Latest Autonomous Updates</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 border-t border-white/10">
            <div className="container mx-auto px-6 py-8">
              <div className="text-center">
                <p className="text-white/60 mb-4">
                  © 2025 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a href="/sitemap" className="text-white/60 hover:text-white transition-colors">
                    Sitemap
                  </a>
                  <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
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
    </>
  );
};

export default Index;