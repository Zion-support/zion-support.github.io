import React, { memo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ContentCard from '../components/ContentCard';

const HomePage = memo(function HomePage() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cutting-edge innovation solutions." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cutting-edge innovation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, machine learning, DevOps, CI/CD, technology consulting, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-6">
              Autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and AI-powered platforms.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Experience the future of technology with our comprehensive suite of autonomous systems, redundancy architectures, and intelligent automation solutions.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
              Pioneering the future where technology operates autonomously, continuously improving and innovating without human intervention
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30">
                <span className="text-cyan-400 font-semibold">🚀 227+ Active Automations</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-fuchsia-400/30">
                <span className="text-fuchsia-400 font-semibold">🤖 AI-Powered Systems</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-400/30">
                <span className="text-purple-400 font-semibold">☁️ Cloud-Native Architecture</span>
              </div>
            </div>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                About Us
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 border border-fuchsia-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25">
                Our Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border border-green-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Get Started
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/70">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/70">Generated Pages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">12+</div>
                <div className="text-white/70">Core Components</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Core Capabilities & Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Autonomous Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Systems</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• AI-powered content generation</li>
                  <li>• Self-running automations</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Autonomous decision making</li>
                </ul>
              </div>

              {/* Redundancy & Reliability */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Multi-layer redundancy systems</li>
                  <li>• Auto-healing capabilities</li>
                  <li>• Failover mechanisms</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </div>

              {/* Cloud Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Cloud Automation</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• GitHub Actions automation</li>
                  <li>• Netlify functions</li>
                  <li>• PM2 process management</li>
                  <li>• Continuous deployment</li>
                </ul>
              </div>

              {/* AI & Machine Learning */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">AI & Machine Learning</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Content generation AI</li>
                  <li>• Predictive analytics</li>
                  <li>• Natural language processing</li>
                  <li>• Intelligent optimization</li>
                </ul>
              </div>

              {/* Security & Monitoring */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Security & Monitoring</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Automated security scanning</li>
                  <li>• Real-time monitoring</li>
                  <li>• Threat detection</li>
                  <li>• Compliance automation</li>
                </ul>
              </div>

              {/* Performance Optimization */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Performance Optimization</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Lighthouse optimization</li>
                  <li>• Speed enhancement</li>
                  <li>• Resource optimization</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Advanced Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl mb-3">⚛️</div>
                <h3 className="font-semibold text-white mb-2">Next.js 14</h3>
                <p className="text-white/60 text-sm">React framework with SSR</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-semibold text-white mb-2">Node.js 20+</h3>
                <p className="text-white/60 text-sm">Server-side JavaScript</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold text-white mb-2">TypeScript</h3>
                <p className="text-white/60 text-sm">Type-safe development</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-semibold text-white mb-2">PM2</h3>
                <p className="text-white/60 text-sm">Process management</p>
              </div>
            </div>
          </section>

          {/* Platform Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Platform Features & Advantages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">🚀 Rapid Development</h3>
                  <p className="text-white/70">Automated content generation, intelligent testing, and continuous deployment pipelines accelerate development cycles by 10x.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">🔄 Self-Healing Systems</h3>
                  <p className="text-white/70">Advanced redundancy systems automatically detect and resolve issues, ensuring maximum uptime and reliability.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">📊 Intelligent Analytics</h3>
                  <p className="text-white/70">AI-powered insights and automated reporting provide deep visibility into system performance and user behavior.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">🔒 Enterprise Security</h3>
                  <p className="text-white/70">Automated security scanning, compliance monitoring, and threat detection ensure your platform remains secure and compliant.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">⚡ Performance Excellence</h3>
                  <p className="text-white/70">Lighthouse optimization, resource management, and performance monitoring deliver exceptional user experiences.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">🌐 Global Scalability</h3>
                  <p className="text-white/70">Cloud-native architecture with global CDN distribution ensures your platform scales seamlessly worldwide.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Hub Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">About Us</h3>
                <p className="text-white/70 mb-4">Discover our mission, vision, and the team behind Zion Tech Group's innovative solutions.</p>
                <div className="text-cyan-300 text-sm font-medium">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Our Services</h3>
                <p className="text-white/70 mb-4">Explore our comprehensive range of AI-powered solutions and automation services.</p>
                <div className="text-fuchsia-300 text-sm font-medium">Explore Services →</div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Resources</h3>
                <p className="text-white/70 mb-4">Access our comprehensive library of tools, documentation, and technical insights.</p>
                <div className="text-blue-300 text-sm font-medium">Browse Resources →</div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Case Studies</h3>
                <p className="text-white/70 mb-4">Real-world examples of how our solutions drive success and innovation.</p>
                <div className="text-yellow-300 text-sm font-medium">View Cases →</div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Blog & Insights</h3>
                <p className="text-white/70 mb-4">Stay updated with the latest trends, insights, and innovations in technology.</p>
                <div className="text-purple-300 text-sm font-medium">Read Blog →</div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">Contact Us</h3>
                <p className="text-white/70 mb-4">Ready to transform your business? Let's discuss your automation needs.</p>
                <div className="text-green-300 text-sm font-medium">Get In Touch →</div>
              </Link>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-2 text-sm text-white/75">Freshly published by autonomous agents with AI-powered insights and analysis.</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-300/90 font-medium">Read Update <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-2 text-sm text-white/75">Latest system insights and performance metrics from our autonomous monitoring.</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-300/90 font-medium">Read Update <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-2 text-sm text-white/75">Automated content generation and optimization insights from our AI systems.</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-300/90 font-medium">Read Update <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of organizations leveraging our autonomous technology platform to drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
});

export default HomePage;
