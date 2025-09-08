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
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
                          <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Link>
                <Link href="/services" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Our Services
                </Link>
              </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">About Zion Tech Group</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We are pioneers in autonomous technology, creating intelligent systems that drive innovation 
                and transform industries through cutting-edge AI, automation, and technological advancement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Innovation First</h3>
                <p className="text-white/70">
                  Pushing the boundaries of what's possible through autonomous research and development.
                </p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Autonomous Systems</h3>
                <p className="text-white/70">
                  Building intelligent systems that operate independently and continuously improve.
                </p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">Global Impact</h3>
                <p className="text-white/70">
                  Creating solutions that benefit humanity and advance technological progress worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Services</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive technology solutions powered by autonomous intelligence and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">AI & Machine Learning</h3>
                <p className="text-white/70 mb-6">
                  Advanced artificial intelligence solutions including neural networks, autonomous learning systems, 
                  and cognitive computing capabilities.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Neural Architecture Optimization</li>
                  <li>• Autonomous Learning Systems</li>
                  <li>• Cognitive Computing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Automation & Orchestration</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive automation solutions that streamline operations and optimize performance 
                  across complex systems.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• System Automation</li>
                  <li>• Process Orchestration</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-green-300">Infrastructure & Scaling</h3>
                <p className="text-white/70 mb-6">
                  Scalable infrastructure solutions designed for growth, reliability, and autonomous operations.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Cloud Infrastructure</li>
                  <li>• Auto-scaling Systems</li>
                  <li>• High Availability</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Research & Development</h3>
                <p className="text-white/70 mb-6">
                  Cutting-edge research in emerging technologies including quantum computing, 
                  biotechnology, and advanced materials.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Quantum Computing</li>
                  <li>• Biotechnology</li>
                  <li>• Advanced Materials</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Security & Compliance</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive security solutions ensuring protection, compliance, and trust 
                  across all systems and operations.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Threat Detection</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Security Automation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-red-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-red-300">Consulting & Strategy</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting helping organizations navigate digital transformation 
                  and implement autonomous solutions.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Digital Transformation</li>
                  <li>• Technology Strategy</li>
                  <li>• Implementation Support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-2xl border border-cyan-400/20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-white">Our Impact</h2>
                <p className="text-xl text-white/70">
                  Numbers that demonstrate our commitment to innovation and excellence
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.97%</div>
                  <div className="text-white/70">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">47</div>
                  <div className="text-white/70">Regions Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
                  <div className="text-white/70">Autonomous Processes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">156</div>
                  <div className="text-white/70">Active Projects</div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Updates</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0406</h3>
                <p className="text-sm text-white/75 mb-3">Comprehensive overview of AI breakthroughs and automation achievements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0405</h3>
                <p className="text-sm text-white/75 mb-3">Performance enhancements and autonomous decision-making advances.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0404</h3>
                <p className="text-sm text-white/75 mb-3">Breakthrough innovations in research and system evolution.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0111</h3>
                <p className="text-sm text-white/75 mb-3">Infrastructure scaling and operational excellence achievements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0403</h3>
                <p className="text-sm text-white/75 mb-3">Intelligence breakthroughs and cognitive system advances.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0402</h3>
                <p className="text-sm text-white/75 mb-3">Ecosystem integration and comprehensive automation progress.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-2xl border border-cyan-400/20">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Future?</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join us in building the autonomous future. Let's explore how our innovative solutions 
                can drive your organization forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
                </Link>
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
};

export default Index;