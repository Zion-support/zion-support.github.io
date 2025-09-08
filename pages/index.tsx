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
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white/80 hover:text-cyan-400 transition-colors">Home</a>
              <a href="/about" className="text-white/80 hover:text-cyan-400 transition-colors">About</a>
              <a href="/automation" className="text-white/80 hover:text-cyan-400 transition-colors">Automation</a>
              <a href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems 
              that are reshaping the future of human-AI collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                Explore Our Technology
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                View Case Studies
              </button>
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
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </a>
              <a href="/automation-health" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                System Health
              </a>
              <a href="/news" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                News
              </a>
              <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
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

          {/* Footer Section */}
          <footer className="mt-20 border-t border-white/20">
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">Zion Tech Group</h3>
                  <p className="text-white/70 text-sm">
                    Leading-edge technology solutions and autonomous innovation systems.
                  </p>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-4 text-white">Services</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li><a href="/services" className="hover:text-cyan-400 transition-colors">AI Development</a></li>
                    <li><a href="/services" className="hover:text-cyan-400 transition-colors">Automation Systems</a></li>
                    <li><a href="/services" className="hover:text-cyan-400 transition-colors">Cloud Infrastructure</a></li>
                    <li><a href="/services" className="hover:text-cyan-400 transition-colors">DevOps & CI/CD</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-4 text-white">Resources</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li><a href="/blog" className="hover:text-fuchsia-400 transition-colors">Blog</a></li>
                    <li><a href="/api-documentation" className="hover:text-fuchsia-400 transition-colors">API Docs</a></li>
                    <li><a href="/automation-health" className="hover:text-fuchsia-400 transition-colors">System Health</a></li>
                    <li><a href="/privacy" className="hover:text-fuchsia-400 transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
                                  <div>
                    <h3 className="text-lg font-bold mb-4 text-green-400">Resources</h3>
                    <ul className="space-y-2 text-white/70">
                      <li><a href="/blog" className="hover:text-green-400 transition-colors">Blog</a></li>
                      <li><a href="/reports" className="hover:text-green-400 transition-colors">Reports</a></li>
                      <li><a href="/case-studies" className="hover:text-green-400 transition-colors">Case Studies</a></li>
                      <li><a href="/resources" className="hover:text-green-400 transition-colors">Resources</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-400">Legal</h3>
                    <ul className="space-y-2 text-white/70">
                      <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                      <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
                      <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                      <li><a href="/events" className="hover:text-blue-400 transition-colors">Events</a></li>
                    </ul>
                  </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-white/60 text-sm">
                  © 2025 Zion Tech Group. All rights reserved. | 
                  <a href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                </p>
              </div>
            </div>
          </footer>
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