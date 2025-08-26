import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Case Studies
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Blog
              </a>
              <a href="/team" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Our Team
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Featured Content Sections */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Featured Content</h2>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Latest Insights</h3>
                <p className="text-white/80 mb-6">
                  Explore our latest articles on AI innovation, automation trends, and autonomous technology breakthroughs.
                </p>
                <a href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  Read Our Blog <span aria-hidden>→</span>
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Success Stories</h3>
                <p className="text-white/80 mb-6">
                  Discover how our AI and automation solutions have transformed businesses across industries.
                </p>
                <a href="/case-studies" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  View Case Studies <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Latest Autonomous Content */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white/90">Latest Autonomous Updates</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h4 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h4>
                  <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
                <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h4 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h4>
                  <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
                <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h4 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h4>
                  <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Our Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-3 text-center">AI & Machine Learning</h3>
                <div className="space-y-2 text-sm text-white/70">
                  <p>• TensorFlow & PyTorch</p>
                  <p>• Natural Language Processing</p>
                  <p>• Computer Vision</p>
                  <p>• Reinforcement Learning</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3 text-center">Cloud Infrastructure</h3>
                <div className="space-y-2 text-sm text-white/70">
                  <p>• AWS, Azure, GCP</p>
                  <p>• Kubernetes & Docker</p>
                  <p>• Serverless Architecture</p>
                  <p>• Microservices</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3 text-center">Development Tools</h3>
                <div className="space-y-2 text-sm text-white/70">
                  <p>• React & Next.js</p>
                  <p>• Python & Node.js</p>
                  <p>• CI/CD Pipelines</p>
                  <p>• DevOps Automation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/30 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <p className="text-white/80 text-sm">System Uptime</p>
              </div>
              
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-xl p-6 border border-fuchsia-400/30 text-center">
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">10x</div>
                <p className="text-white/80 text-sm">Performance Improvement</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/30 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <p className="text-white/80 text-sm">Automated Processes</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <p className="text-white/80 text-sm">Autonomous Operation</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the autonomous revolution and discover how AI can enhance your operations, 
                improve efficiency, and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-lg">
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Our Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2 text-center">AI & Machine Learning</h3>
                <p className="text-white/70 text-sm text-center">Advanced neural networks, natural language processing, and computer vision systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2 text-center">Cloud Infrastructure</h3>
                <p className="text-white/70 text-sm text-center">Scalable cloud platforms with Kubernetes orchestration and microservices architecture</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Security & Compliance</h3>
                <p className="text-white/70 text-sm text-center">Enterprise-grade security with SOC 2 compliance and advanced threat protection</p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <p className="text-white/70 text-sm">System Uptime</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">50M+</div>
                <p className="text-white/70 text-sm">API Calls/Day</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-white/70 text-sm">Monitoring</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
                <p className="text-white/70 text-sm">Enterprise Clients</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the autonomous revolution and discover how AI can enhance your operations, 
                improve efficiency, and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/20 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Leading-edge technology solutions and autonomous innovation systems.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Twitter</a>
                    <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">LinkedIn</a>
                    <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">GitHub</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services" className="text-white/70 hover:text-cyan-400 transition-colors">AI Automation</Link></li>
                    <li><Link href="/services" className="text-white/70 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
                    <li><Link href="/services" className="text-white/70 hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
                    <li><Link href="/services" className="text-white/70 hover:text-cyan-400 transition-colors">Security & Compliance</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/blog" className="text-white/70 hover:text-cyan-400 transition-colors">Blog</Link></li>
                    <li><Link href="/resources" className="text-white/70 hover:text-cyan-400 transition-colors">Documentation</Link></li>
                    <li><Link href="/case-studies" className="text-white/70 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                    <li><Link href="/resources" className="text-white/70 hover:text-cyan-400 transition-colors">API Reference</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/about" className="text-white/70 hover:text-cyan-400 transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="text-white/70 hover:text-cyan-400 transition-colors">Contact</Link></li>
                    <li><Link href="/privacy" className="text-white/70 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/resources" className="text-white/70 hover:text-cyan-400 transition-colors">Careers</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-white/20 mt-8 pt-8 text-center">
                <p className="text-white/60 text-sm">
                  © 2025 Zion Tech Group. All rights reserved. | 
                  <Link href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy Policy</Link> | 
                  <Link href="/resources" className="ml-2 hover:text-cyan-400 transition-colors">Terms of Service</Link>
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
