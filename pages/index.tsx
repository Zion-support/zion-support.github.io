// Duplicate block removal

import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function HomePage() {
  const repoBaseUrl = 'https://github.com/Zion-Holdings/zion.app/blob/main';
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI & Automation Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems. Transform your business with cutting-edge innovation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, machine learning, DevOps, CI/CD, technology consulting, Zion Tech Group" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-white/80">227+ Active Automations Running</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto mb-8 leading-relaxed">
              The world's most advanced <span className="text-cyan-400 font-semibold">autonomous innovation hub</span> delivering cutting-edge AI solutions, 
              intelligent automation systems, and cloud-native technologies that operate independently.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-400 font-bold text-xl">227+</span><br/>
                <span className="text-sm">Autonomous Systems</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-fuchsia-400 font-bold text-xl">2960+</span><br/>
                <span className="text-sm">Dynamic Pages</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-blue-400 font-bold text-xl">12</span><br/>
                <span className="text-sm">Core Components</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-400 font-bold text-xl">100%</span><br/>
                <span className="text-sm">Autonomous</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold text-xl">24/7</span><br/>
                <span className="text-sm">Self-Healing</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Services
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                View Case Studies
              </Link>
            </div>
          </section>

          {/* Key Statistics Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80">Active Automations</div>
                <div className="text-sm text-white/60 mt-2">Self-running systems</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/80">Generated Pages</div>
                <div className="text-sm text-white/60 mt-2">AI-powered content</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-white/80">Uptime</div>
                <div className="text-sm text-white/60 mt-2">Self-healing systems</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white/80">Autonomous Operation</div>
                <div className="text-sm text-white/60 mt-2">Zero human intervention</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary Capabilities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">Autonomous AI Systems</h3>
                    <p className="text-white/70">Self-learning, self-improving AI that operates independently</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Machine Learning & Deep Learning Models
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Natural Language Processing & Generation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Computer Vision & Image Recognition
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Predictive Analytics & Decision Making
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fuchsia-400">Intelligent Automation</h3>
                    <p className="text-white/70">End-to-end process automation with self-healing capabilities</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    Robotic Process Automation (RPA)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    Workflow Optimization & Orchestration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    Self-Healing Applications & Systems
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    Continuous Integration & Deployment
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">Cloud-Native Infrastructure</h3>
                    <p className="text-white/70">Scalable, resilient cloud solutions with auto-scaling</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Auto-scaling & Load Balancing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Infrastructure as Code (IaC)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Multi-cloud & Hybrid Deployments
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Performance Monitoring & Optimization
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">DevOps Excellence</h3>
                    <p className="text-white/70">Streamlined development with automated testing & deployment</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    CI/CD Pipeline Automation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Automated Testing & Quality Assurance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Security Scanning & Vulnerability Management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Performance Monitoring & Alerting
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Zion Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Cutting-Edge Innovation</h3>
                <p className="text-white/70">We're constantly pushing the boundaries of what's possible with AI and automation, staying ahead of industry trends.</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Proven Results</h3>
                <p className="text-white/70">Our solutions have delivered measurable improvements: 40% efficiency gains, 60% downtime reduction, 10x content scaling.</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Continuous Evolution</h3>
                <p className="text-white/70">Our autonomous systems continuously learn, improve, and adapt to new challenges without human intervention.</p>
              </div>
            </div>
          </section>

          {/* Services Overview Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Comprehensive Service Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">AI Development</h3>
                <p className="text-white/70 text-center mb-4">Custom AI solutions including ML models, NLP, computer vision, and predictive analytics.</p>
                <div className="text-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Automation Systems</h3>
                <p className="text-white/70 text-center mb-4">End-to-end automation solutions that streamline operations and improve efficiency.</p>
                <div className="text-center text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Cloud Infrastructure</h3>
                <p className="text-white/70 text-center mb-4">Scalable cloud solutions with automated deployment and optimization.</p>
                <div className="text-center text-green-400 group-hover:text-green-300 transition-colors">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">DevOps & CI/CD</h3>
                <p className="text-white/70 text-center mb-4">Streamlined development pipelines with automated testing and deployment.</p>
                <div className="text-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Data Analytics</h3>
                <p className="text-white/70 text-center mb-4">Advanced analytics and BI solutions that turn data into actionable insights.</p>
                <div className="text-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Technology Consulting</h3>
                <p className="text-white/70 text-center mb-4">Strategic guidance for digital transformation and technology adoption.</p>
                <div className="text-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  Learn More →
                </div>
              </Link>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Latest Autonomous Content
              </h2>
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                View All Content →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="text-sm text-white/75 mb-3">Freshly published by autonomous agents with real-time insights and analysis.</p>
                <div className="flex items-center gap-2 text-xs text-cyan-300/90">
                  <span>Open</span>
                  <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="text-sm text-white/75 mb-3">Latest autonomous insights and system performance updates.</p>
                <div className="flex items-center gap-2 text-xs text-cyan-300/90">
                  <span>Open</span>
                  <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="text-sm text-white/75 mb-3">Real-time autonomous system monitoring and optimization reports.</p>
                <div className="flex items-center gap-2 text-xs text-cyan-300/90">
                  <span>Open</span>
                  <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Resources & Tools Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Resources & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Case Studies</h3>
                <p className="text-white/70 text-center mb-4">Real-world examples of our AI and automation solutions in action.</p>
                <div className="text-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Explore →
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Whitepapers</h3>
                <p className="text-white/70 text-center mb-4">In-depth guides and frameworks for AI implementation.</p>
                <div className="text-center text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">
                  Download →
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Interactive Tools</h3>
                <p className="text-white/70 text-center mb-4">Assessment tools and calculators to evaluate your automation readiness.</p>
                <div className="text-center text-green-400 group-hover:text-green-300 transition-colors">
                  Try Now →
                </div>
              </Link>

              {/* API Documentation */}
              <Link href="/api-documentation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">API Documentation</h3>
                <p className="text-white/70 text-sm">REST APIs, endpoints, authentication, examples</p>
              </Link>

              {/* Contributing Guidelines */}
              <Link href="/contributing" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Contributing Guidelines</h3>
                <p className="text-white/70 text-sm">How to contribute, code standards, pull requests</p>
              </Link>

              {/* Deployment Guide */}
              <Link href="/deployment" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Deployment Guide</h3>
                <p className="text-white/70 text-sm">Installation, configuration, environment setup</p>
              </Link>

              {/* Performance Guide */}
              <Link href="/performance" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Performance Guide</h3>
                <p className="text-white/70 text-sm">Optimization, monitoring, best practices</p>
              </Link>

              {/* Security Guide */}
              <Link href="/security" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Security Guide</h3>
                <p className="text-white/70 text-sm">Security best practices, threat protection</p>
              </Link>
            </div>
          </section>

          {/* Advanced Automation Systems */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🤖 Advanced Automation Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Redundancy Systems */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Redundancy Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <Link href="/services#redundancy" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Explore Redundancy Systems →
                </Link>
              </div>

              {/* AI Automation */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                </ul>
                <Link href="/services#ai-automation" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  Explore AI Systems →
                </Link>
              </div>

              {/* Build & Deploy */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build & Deploy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <Link href="/services#build-systems" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Explore Build Systems →
                </Link>
              </div>
            </div>
          </section>

          {/* Project Statistics & Achievements */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📊 Project Statistics & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Automation Count */}
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-xl rounded-xl p-6 border border-cyan-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">227+</h3>
                <p className="text-white/80 text-sm">Intelligent Automations</p>
                <p className="text-white/60 text-xs mt-2">Self-running systems</p>
              </div>

              {/* Pages Generated */}
              <div className="bg-gradient-to-br from-fuchsia-400/20 to-purple-500/20 backdrop-blur-xl rounded-xl p-6 border border-fuchsia-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📄</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-2">2960+</h3>
                <p className="text-white/80 text-sm">Dynamic Pages</p>
                <p className="text-white/60 text-xs mt-2">Auto-generated content</p>
              </div>

              {/* Components */}
              <div className="bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-xl rounded-xl p-6 border border-blue-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">12</h3>
                <p className="text-white/80 text-sm">Core Components</p>
                <p className="text-white/60 text-xs mt-2">Reusable UI elements</p>
              </div>

              {/* Uptime */}
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-6 border border-green-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⏱️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">99.99%</h3>
                <p className="text-white/80 text-sm">Uptime</p>
                <p className="text-white/60 text-xs mt-2">Zero-downtime operations</p>
              </div>
            </div>
          </section>

          {/* Revolutionary Call to Action */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future of Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the revolution of autonomous innovation. Our AI-powered platform delivers unprecedented efficiency, reliability, and scalability with 227+ autonomous systems working 24/7.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Autonomous Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Explore Our Capabilities
                </Link>
              </div>
            </div>
          </section>

          {/* Performance Metrics & Achievements */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏆 Performance Metrics & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
                <div className="text-white/90 font-semibold">Uptime</div>
                <div className="text-cyan-300/70 text-sm mt-2">Zero-downtime operations</div>
              </div>
              
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-fuchsia-400/30 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">227+</div>
                <div className="text-white/90 font-semibold">Automations</div>
                <div className="text-fuchsia-300/70 text-sm mt-2">Intelligent agents</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">2960+</div>
                <div className="text-white/90 font-semibold">Pages</div>
                <div className="text-green-300/70 text-sm mt-2">Dynamic content</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-6 border border-yellow-400/30 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-white/90 font-semibold">Components</div>
                <div className="text-yellow-300/70 text-sm mt-2">Core systems</div>
              </div>
            </div>
          </section>

          {/* Advanced AI Capabilities Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🧠 Advanced AI Capabilities Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔍 AI Research & Trends</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Autonomous market analysis</li>
                  <li>• Trend prediction algorithms</li>
                  <li>• Competitive intelligence</li>
                  <li>• Innovation scouting</li>
                  <li>• Real-time insights</li>
                </ul>
                <div className="text-cyan-400 text-sm font-semibold">
                  Continuously Learning & Adapting
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">✍️ Content Generation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• SEO-optimized content</li>
                  <li>• Multi-language support</li>
                  <li>• Brand voice consistency</li>
                  <li>• Content optimization</li>
                  <li>• Performance analytics</li>
                </ul>
                <div className="text-fuchsia-400 text-sm font-semibold">
                  AI-Powered & Human-Quality
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🎯 Predictive Analytics</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Performance forecasting</li>
                  <li>• Risk assessment</li>
                  <li>• Optimization suggestions</li>
                  <li>• Resource planning</li>
                  <li>• Growth predictions</li>
                </ul>
                <div className="text-green-400 text-sm font-semibold">
                  Data-Driven Insights
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Solutions & Use Cases */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏢 Enterprise Solutions & Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">🚀 Startups & Scale-ups</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Rapid prototyping</li>
                  <li>• Automated scaling</li>
                  <li>• Cost optimization</li>
                  <li>• Market validation</li>
                  <li>• Growth automation</li>
                </ul>
                <div className="text-blue-400 text-sm font-semibold">
                  Accelerate Your Growth
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🏭 Enterprise Organizations</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Legacy system integration</li>
                  <li>• Process automation</li>
                  <li>• Compliance management</li>
                  <li>• Security enhancement</li>
                  <li>• Digital transformation</li>
                </ul>
                <div className="text-purple-400 text-sm font-semibold">
                  Transform Your Operations
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🌐 Global Enterprises</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Multi-region deployment</li>
                  <li>• Global compliance</li>
                  <li>• Localization support</li>
                  <li>• Cross-border operations</li>
                  <li>• International scaling</li>
                </ul>
                <div className="text-green-400 text-sm font-semibold">
                  Scale Globally
                </div>
              </div>
            </div>
          </section>

          {/* Integration & API Ecosystem */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔌 Integration & API Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">REST APIs</h3>
                <p className="text-white/70 text-sm">Standardized endpoints</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">GraphQL</h3>
                <p className="text-white/70 text-sm">Flexible data queries</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Webhooks</h3>
                <p className="text-white/70 text-sm">Real-time notifications</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">SDKs</h3>
                <p className="text-white/70 text-sm">Developer tools</p>
              </div>
            </div>
          </section>

          {/* Success Stories & Testimonials */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">💬 Success Stories & Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Tech Startup CEO</div>
                    <div className="text-cyan-400 text-sm">AI Automation Success</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm italic">
                  &ldquo;Zion Tech Group&apos;s autonomous systems reduced our deployment time by 90% and eliminated 99% of manual errors.&rdquo;
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Enterprise CTO</div>
                    <div className="text-fuchsia-400 text-sm">Digital Transformation</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm italic">
                  &ldquo;The AI-powered automation transformed our legacy systems into a modern, efficient infrastructure.&rdquo;
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">DevOps Engineer</div>
                    <div className="text-green-400 text-sm">Infrastructure Excellence</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm italic">
                  &ldquo;Zero-downtime deployments and self-healing systems have revolutionized our development workflow.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Join the Autonomous Technology Revolution</h2>
              <p className="text-xl text-white/80 mb-8">
                Experience unprecedented efficiency, innovation, and reliability with the world&apos;s most advanced autonomous platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  View Success Stories
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the future of autonomous technology. Our AI-powered solutions are ready to revolutionize your operations, 
                boost efficiency, and drive unprecedented growth.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </section>

          {/* Quick Navigation Footer */}
          <section className="border-t border-white/20 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">AI Development</Link></li>
                  <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Automation</Link></li>
                  <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Cloud Solutions</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources" className="text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/resources" className="text-white/70 hover:text-white transition-colors">Tools</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">GitHub</a></li>
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Support</Link></li>
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Partnership</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-white/70 text-sm mb-4">
                  Leading the autonomous technology revolution with AI-powered solutions that transform businesses.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    💼
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    🐦
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    📚
                  </a>
                </div>
              </div>
              
              {/* Platform */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/case-studies" className="text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/resources" className="text-white/70 hover:text-white transition-colors">Resources</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
              
              {/* Solutions */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/automation" className="text-white/70 hover:text-white transition-colors">Automation</Link></li>
                  <li><Link href="/cloud" className="text-white/70 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
                  <li><Link href="/ai" className="text-white/70 hover:text-white transition-colors">AI Services</Link></li>
                  <li><Link href="/security" className="text-white/70 hover:text-white transition-colors">Security</Link></li>
                  <li><Link href="/monitoring" className="text-white/70 hover:text-white transition-colors">Monitoring</Link></li>
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/documentation" className="text-white/70 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/status" className="text-white/70 hover:text-white transition-colors">System Status</Link></li>
                  <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2025 Zion Tech Group. All rights reserved. | 
                <span className="text-cyan-400"> 227+ Automations Running</span> | 
                <span className="text-green-400"> 99.99% Uptime</span>
              </p>
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