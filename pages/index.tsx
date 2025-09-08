// Duplicate block removal

import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Technology Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cutting-edge innovation solutions." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Technology Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cutting-edge innovation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="autonomous systems, AI automation, cloud-native, redundancy systems, intelligent orchestration, self-healing systems, continuous deployment" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and AI-powered content generation at scale.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Automations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Pages</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-sm text-white/70">Components</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
            </div>

            {/* Primary Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                About Us
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 border border-fuchsia-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                Our Services
              </Link>
              <Link href="/resources" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border border-blue-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Resources
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border border-green-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Contact
              </Link>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">🚀 Core Capabilities & Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">AI-Powered Content Generation</h3>
                <p className="text-white/80 text-center mb-4">Autonomous content creation with intelligent agents generating high-quality, SEO-optimized content 24/7</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Automated blog posts & articles</li>
                  <li>• SEO optimization & keyword research</li>
                  <li>• Content quality analysis & improvement</li>
                  <li>• Multi-language content generation</li>
                </ul>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Comprehensive Redundancy Systems</h3>
                <p className="text-white/80 text-center mb-4">Multi-layered redundancy ensuring 99.9% uptime with automatic failover and self-healing capabilities</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• PM2 process management redundancy</li>
                  <li>• GitHub Actions backup systems</li>
                  <li>• Netlify Functions redundancy</li>
                  <li>• Automatic health monitoring</li>
                </ul>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Intelligent Build Automation</h3>
                <p className="text-white/80 text-center mb-4">Smart build systems with automatic error detection, recovery, and optimization for peak performance</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Automated CI/CD pipelines</li>
                  <li>• Build failure recovery</li>
                  <li>• Performance optimization</li>
                  <li>• Health monitoring & alerts</li>
                </ul>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Advanced Analytics & Monitoring</h3>
                <p className="text-white/80 text-center mb-4">Comprehensive monitoring with real-time dashboards, performance metrics, and intelligent insights</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Real-time performance monitoring</li>
                  <li>• Automated health reports</li>
                  <li>• Performance optimization</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Cloud-Native Architecture</h3>
                <p className="text-white/80 text-center mb-4">Modern, scalable cloud infrastructure with automatic scaling, load balancing, and global distribution</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Serverless functions</li>
                  <li>• Auto-scaling capabilities</li>
                  <li>• Global CDN distribution</li>
                  <li>• Security hardening</li>
                </ul>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Marketing & SEO Automation</h3>
                <p className="text-white/80 text-center mb-4">Automated marketing workflows, social media management, and SEO optimization for maximum visibility</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Social media automation</li>
                  <li>• SEO optimization</li>
                  <li>• Content distribution</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">🛠️ Technology Stack & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Next.js 14</h3>
                <p className="text-white/70 text-sm">React framework with SSR, SSG, and API routes</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🐍</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Node.js 20+</h3>
                <p className="text-white/70 text-sm">High-performance JavaScript runtime</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Netlify</h3>
                <p className="text-white/70 text-sm">Serverless platform with edge functions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">PM2</h3>
                <p className="text-white/70 text-sm">Process manager with clustering</p>
              </div>
            </div>
          </section>

          {/* Platform Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">🎯 Platform Features & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Blog & Content</h3>
                <p className="text-white/70 text-sm">AI-generated articles, insights, and thought leadership content</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">Real-world success stories and implementation examples</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resource Library</h3>
                <p className="text-white/70 text-sm">Tools, guides, and educational materials</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">AI Services</h3>
                <p className="text-white/70 text-sm">Custom AI development and automation solutions</p>
              </Link>
              
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Company Info</h3>
                <p className="text-white/70 text-sm">Mission, vision, and team information</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Contact & Support</h3>
                <p className="text-white/70 text-sm">Get in touch for consultations and support</p>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">🤖 Latest Autonomous Content</h2>
            <p className="text-center text-white/70 mb-8 max-w-3xl mx-auto">
              Our AI agents continuously generate fresh, high-quality content and updates. Here are the latest autonomous publications:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/reports" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Reports <span aria-hidden>→</span>
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Technology?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join us in building the next generation of autonomous, intelligent systems that drive innovation and transform businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Today
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Cloud Systems</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Self-healing CI/CD pipelines</li>
                  <li>• Intelligent build orchestration</li>
                  <li>• Automated dependency management</li>
                  <li>• Real-time performance monitoring</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/automation" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Explore Automation →
                  </Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Systems</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• 227+ Self-Running Automations</li>
                  <li>• AI-Powered Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Self-Healing Infrastructure</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/reports" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">
                    View AI Reports →
                  </Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Ultimate Redundancy Systems</li>
                  <li>• Auto-Failover & Recovery</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• Multi-Cloud Resilience</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/reports/blueprints" className="text-green-400 hover:text-green-300 text-sm font-medium">
                    View Blueprints →
                  </Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">AI & Machine Learning</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Content Factory Automation</li>
                  <li>• Intelligent Research Systems</li>
                  <li>• Trend Analysis & Prediction</li>
                  <li>• Autonomous Decision Making</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/live-dashboard" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                    Live Dashboard →
                  </Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Automated Security Scanning</li>
                  <li>• Dependency Vulnerability Checks</li>
                  <li>• Code Quality Assurance</li>
                  <li>• Compliance Monitoring</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/security" className="text-red-400 hover:text-red-300 text-sm font-medium">
                    Security Details →
                  </Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Performance & Monitoring</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Real-Time Health Monitoring</li>
                  <li>• Performance Analytics</li>
                  <li>• Automated Optimization</li>
                  <li>• Predictive Maintenance</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/deployment" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                    Deployment Info →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Technology & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Next.js</h3>
                <p className="text-white/70 text-sm">React framework with SSR/SSG</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🐳</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🎯 Why Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Zero-Downtime Operations</h3>
                    <p className="text-white/80">Autonomous systems ensure 99.99% uptime with automatic failover and self-healing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI-Powered Innovation</h3>
                    <p className="text-white/80">227+ autonomous agents continuously improve your systems and content.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Scalable Architecture</h3>
                    <p className="text-white/80">Built for growth with automatic scaling, load balancing, and global distribution.</p>
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
                    <p className="text-white/80">Real-time health monitoring with predictive analytics and automated recovery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Enterprise Security</h3>
                    <p className="text-white/80">Automated threat detection, compliance monitoring, and data protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Future-Ready Platform</h3>
                    <p className="text-white/80">Continuously evolving with cutting-edge technologies and autonomous improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Blog Posts */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📰 Featured Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-automation-trends-2025" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">AI Automation Trends 2025</h3>
                <p className="text-sm text-white/75">Where autonomous systems are heading next.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/performance-optimization" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
                <p className="text-sm text-white/75">Techniques for speed, scale, and resilience.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/cloud-native-automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Cloud-Native Automation</h3>
                <p className="text-sm text-white/75">Building autonomous cloud systems end-to-end.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/ai-ethics-automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">AI Ethics in Automation</h3>
                <p className="text-sm text-white/75">Designing safe, aligned intelligent systems.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/future-of-work" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">The Future of Work</h3>
                <p className="text-sm text-white/75">Human + AI collaboration at scale.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/autonomous-content-generation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Content Generation</h3>
                <p className="text-sm text-white/75">From idea to publication—fully automated.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read <span aria-hidden>→</span></div>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                View All Articles
              </Link>
            </div>
          </section>

          {/* Advanced Automation Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Advanced Automation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Ultimate Redundancy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Multi-layer failover systems</li>
                  <li>• Automatic process recovery</li>
                  <li>• Health monitoring & alerts</li>
                  <li>• Self-healing infrastructure</li>
                  <li>• Geographic distribution</li>
                </ul>
                <div className="text-cyan-400 text-xs font-semibold">
                  Status: Active & Monitoring
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Content Factory</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Autonomous content generation</li>
                  <li>• SEO optimization</li>
                  <li>• Quality assurance</li>
                  <li>• Trend analysis</li>
                  <li>• Performance tracking</li>
                </ul>
                <div className="text-fuchsia-400 text-xs font-semibold">
                  Status: Generating Content
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚙️ Build Orchestration</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart dependency management</li>
                  <li>• Automated testing</li>
                  <li>• Performance optimization</li>
                  <li>• Error recovery</li>
                  <li>• Continuous deployment</li>
                </ul>
                <div className="text-green-400 text-xs font-semibold">
                  Status: Optimizing Builds
                </div>
              </div>
            </div>
          </section>

          {/* Project Documentation & Resources */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Project Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">📖 Core Documentation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Main README</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Architecture Guide</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">API Documentation</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Contributing Guide</a></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🔧 Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Redundancy Systems</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Comprehensive Automation</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">GitHub Actions</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">PM2 Management</a></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🚀 Deployment & Operations</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Deployment Guide</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Security Guide</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Testing Guide</a></li>
                  <li>• <a href="https://github.com/Zion-Holdings/zion.app/blob/main/automation/README-BUILD-AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Build Automation</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-cyan-300">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-2 text-sm text-white/75">Freshly published by autonomous agents with AI-powered content generation.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  Open <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join organizations leveraging our AI-powered platform for unprecedented efficiency, innovation, and reliability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
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