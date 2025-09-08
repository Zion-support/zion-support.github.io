import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

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
              <a href="/technology" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Technology
              </a>
              <a href="/innovation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Innovation
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Blog
              </a>
              <a href="/events" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Events
              </a>
              <a href="/news" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                News
              </a>
              <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                Reports & Analytics
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Featured Services */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">AI Development</h3>
                <p className="text-white/70 text-sm mb-4">Custom AI solutions including machine learning models, natural language processing, and computer vision systems.</p>
                <a href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Learn More →</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 text-sm mb-4">End-to-end automation solutions that streamline operations and improve efficiency across your organization.</p>
                <a href="/services" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">Learn More →</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 text-sm mb-4">Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.</p>
                <a href="/services" className="text-green-400 hover:text-green-300 text-sm font-medium">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </div>
            <div className="text-center mt-8">
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Content
              </a>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-cyan-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400 text-center">Autonomous Innovation</h3>
                <p className="text-white/70 text-center">
                  Our systems operate independently, continuously learning and improving without human intervention.
                </p>
                <div className="mt-4 text-center">
                  <a href="/innovation" className="text-cyan-300 hover:text-cyan-200 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-fuchsia-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-fuchsia-400 text-center">227+ Active Automations</h3>
                <p className="text-white/70 text-center">
                  Comprehensive automation ecosystem with intelligent workflows and continuous optimization.
                </p>
                <div className="mt-4 text-center">
                  <a href="/automation" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm font-medium">
                    Explore Automation →
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-green-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400 text-center">2,960+ Content Pages</h3>
                <p className="text-white/70 text-center">
                  AI-powered content generation with continuous optimization and quality assurance.
                </p>
                <div className="mt-4 text-center">
                  <a href="/reports" className="text-green-300 hover:text-green-200 text-sm font-medium">
                    View Reports →
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-blue-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">Cutting-Edge Technology</h3>
                <p className="text-white/70 text-center">
                  Built on Next.js, TypeScript, and modern cloud infrastructure for maximum performance.
                </p>
                <div className="mt-4 text-center">
                  <a href="/technology" className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                    Tech Stack →
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-purple-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400 text-center">99.99% Uptime</h3>
                <p className="text-white/70 text-center">
                  Comprehensive redundancy systems ensuring continuous operation and reliability.
                </p>
                <div className="mt-4 text-center">
                  <a href="/services" className="text-purple-300 hover:text-purple-200 text-sm font-medium">
                    Our Services →
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-yellow-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400 text-center">Global Reach</h3>
                <p className="text-white/70 text-center">
                  Serving clients worldwide with scalable solutions and 24/7 autonomous monitoring.
                </p>
                <div className="mt-4 text-center">
                  <a href="/contact" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                    Get Started →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Company</h3>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                    <li><a href="/news" className="hover:text-cyan-400 transition-colors">News</a></li>
                    <li><a href="/events" className="hover:text-cyan-400 transition-colors">Events</a></li>
                    <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-fuchsia-400">Services</h3>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">AI Development</a></li>
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Automation</a></li>
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Cloud Infrastructure</a></li>
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Consulting</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-green-400">Resources</h3>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="/blog" className="hover:text-green-400 transition-colors">Blog</a></li>
                    <li><a href="/reports" className="hover:text-green-400 transition-colors">Reports</a></li>
                    <li><a href="/technology" className="hover:text-green-400 transition-colors">Technology</a></li>
                    <li><a href="/innovation" className="hover:text-green-400 transition-colors">Innovation</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-400">Legal</h3>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                    <li><a href="/security" className="hover:text-blue-400 transition-colors">Security</a></li>
                    <li><a href="/accessibility" className="hover:text-blue-400 transition-colors">Accessibility</a></li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Lightning Fast</h3>
                <p className="text-white/70 text-sm">Rapid deployment and 24/7 autonomous operation for maximum efficiency.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">Enterprise Security</h3>
                <p className="text-white/70 text-sm">Bank-grade security with autonomous threat detection and response.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Global Scale</h3>
                <p className="text-white/70 text-sm">Deploy anywhere with our distributed autonomous infrastructure.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Go Autonomous?</h2>
              <p className="text-white/70 mb-6">
                Join the future of technology with Zion Tech Group's autonomous AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105">
                  Get Started Today
                </a>
                <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                  Explore Services
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;