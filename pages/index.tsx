/* eslint-disable react/no-unescaped-entities */
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
        <title>Zion Tech Group — Autonomous Innovation Hub & AI Automation Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cloud-native solutions." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI Automation Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cloud-native solutions." />
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
                <span className="text-sm text-green-400">227+ Active Automations</span>
              </div>
            </div>
            
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced <span className="text-cyan-400 font-semibold">autonomous innovation hub</span> delivering cutting-edge AI automation, 
              intelligent content generation, and enterprise-grade redundancy systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Platform
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl">
                View Services
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Automations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">12</div>
                <div className="text-sm text-white/70">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-white/70">Autonomous</div>
              </div>
            </div>
          </section>

          {/* Core Features Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary AI-Powered Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Content Generation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">AI Content Factory</h3>
                <p className="text-white/80 mb-4">Autonomous content generation with intelligent research, trend analysis, and continuous optimization.</p>
                <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2">
                  Explore Content <span>→</span>
                </Link>
              </div>

              {/* Redundancy Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Ultimate Redundancy</h3>
                <p className="text-white/80 mb-4">Multi-layer redundancy systems ensuring 99.99% uptime with automatic failover and recovery.</p>
                <Link href="/resources" className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>

              {/* Automation Orchestration */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Smart Automation</h3>
                <p className="text-white/80 mb-4">Intelligent orchestration of 227+ automations with self-healing, monitoring, and optimization.</p>
                <Link href="/services" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
                  View Services <span>→</span>
                </Link>
              </div>

              {/* Cloud Native */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Cloud Native</h3>
                <p className="text-white/80 mb-4">Built for the cloud with Netlify integration, serverless functions, and global CDN distribution.</p>
                <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
                  See Examples <span>→</span>
                </Link>
              </div>

              {/* Self-Healing */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🩹</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Self-Healing</h3>
                <p className="text-white/80 mb-4">Automatic error detection, recovery, and continuous improvement without human intervention.</p>
                <Link href="/resources" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2">
                  Discover <span>→</span>
                </Link>
              </div>

              {/* Performance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Performance First</h3>
                <p className="text-white/80 mb-4">Optimized for speed with Lighthouse scores, automated testing, and continuous performance monitoring.</p>
                <Link href="/about" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="text-sm font-semibold text-white/90">React 18</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm font-semibold text-white/90">Next.js 14</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="text-sm font-semibold text-white/90">Tailwind CSS</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="text-sm font-semibold text-white/90">TypeScript</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="text-sm font-semibold text-white/90">Netlify</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="text-sm font-semibold text-white/90">AI/ML</div>
              </div>
            </div>
          </section>

          {/* Platform Navigation */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Explore Our Platform
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">About Zion Tech</h3>
                <p className="text-white/80 mb-4">Discover our mission, vision, and the revolutionary technology that powers autonomous innovation.</p>
                <div className="text-cyan-400 group-hover:text-cyan-300 font-semibold flex items-center gap-2">
                  Learn About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">AI Services</h3>
                <p className="text-white/80 mb-4">Explore our comprehensive suite of AI-powered automation services and intelligent solutions.</p>
                <div className="text-fuchsia-400 group-hover:text-fuchsia-300 font-semibold flex items-center gap-2">
                  View Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Resources Hub</h3>
                <p className="text-white/80 mb-4">Access our comprehensive library of tools, insights, and technical documentation.</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-2">
                  Browse Resources <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Case Studies</h3>
                <p className="text-white/80 mb-4">Real-world examples of how our autonomous systems deliver exceptional results.</p>
                <div className="text-yellow-400 group-hover:text-yellow-300 font-semibold flex items-center gap-2">
                  View Success Stories <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">AI Insights Blog</h3>
                <p className="text-white/80 mb-4">Stay updated with the latest trends in AI automation and autonomous technology.</p>
                <div className="text-purple-400 group-hover:text-purple-300 font-semibold flex items-center gap-2">
                  Read Insights <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Get In Touch</h3>
                <p className="text-white/80 mb-4">Ready to revolutionize your business? Connect with our team of AI experts.</p>
                <div className="text-green-400 group-hover:text-green-300 font-semibold flex items-center gap-2">
                  Contact Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm mb-4">See real success stories and transformation results</p>
                <div className="text-yellow-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Cases →
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Blog & Insights</h3>
                <p className="text-white/70 text-sm mb-4">Stay updated with the latest AI trends and insights</p>
                <div className="text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Read Blog →
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Contact Us</h3>
                <p className="text-white/70 text-sm mb-4">Get in touch to discuss your AI transformation needs</p>
                <div className="text-green-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Get Started →
                </div>
              </Link>
              
              <Link href="/reports" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">Reports & Analytics</h3>
                <p className="text-white/70 text-sm mb-4">Access detailed reports and performance analytics</p>
                <div className="text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Reports →
                </div>
              </Link>
              
              <Link href="/automation" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">Automation Hub</h3>
                <p className="text-white/70 text-sm mb-4">Explore our 227+ autonomous automation systems</p>
                <div className="text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Explore Automation →
                </div>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <p className="text-center text-white/70 mb-8 max-w-3xl mx-auto">
              Fresh content generated by our autonomous AI systems, continuously updating and improving our platform
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
                <p className="text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Enhanced Platform Features & Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Enhanced Platform Features & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Advanced Automation Systems */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🤖 Advanced Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2 System</li>
                  <li>• Comprehensive Redundancy Automation</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                  <li>• Autonomous Content Generation</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/automation" className="block text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Explore Automation Systems →
                  </Link>
                  <Link href="/scripts" className="block text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    View Automation Scripts →
                  </Link>
                </div>
              </div>

              {/* AI & Content Systems */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI & Content Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research & Analysis</li>
                  <li>• Autonomous Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• 227+ Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                  <li>• Content Factory Automation</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/blog" className="block text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    Read AI Insights →
                  </Link>
                  <Link href="/resources" className="block text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    Access AI Resources →
                  </Link>
                </div>
              </div>

              {/* Infrastructure & Monitoring */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Infrastructure & Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Health Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                  <li>• Real-time Analytics</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/case-studies" className="block text-green-400 hover:text-green-300 text-sm font-semibold">
                    View Case Studies →
                  </Link>
                  <Link href="/performance" className="block text-green-400 hover:text-green-300 text-sm font-semibold">
                    Performance Metrics →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive Documentation & Resources */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Comprehensive Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Core Documentation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📖</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Core Documentation</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/README.md" className="block text-white/70 hover:text-blue-400">Main README</Link>
                  <Link href="/ARCHITECTURE.md" className="block text-white/70 hover:text-blue-400">Architecture Guide</Link>
                  <Link href="/API.md" className="block text-white/70 hover:text-blue-400">API Documentation</Link>
                  <Link href="/CONTRIBUTING.md" className="block text-white/70 hover:text-blue-400">Contributing Guide</Link>
                </div>
              </div>
              
              {/* Automation Guides */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Automation Guides</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/COMPREHENSIVE_REDUNDANCY_README.md" className="block text-white/70 hover:text-green-400">Redundancy Systems</Link>
                  <Link href="/ULTIMATE_REDUNDANCY_README.md" className="block text-white/70 hover:text-green-400">Ultimate Redundancy</Link>
                  <Link href="/AUTOMATION_COMPLETION_REPORT.md" className="block text-white/70 hover:text-green-400">Automation Reports</Link>
                  <Link href="/README-COMPREHENSIVE-REDUNDANCY.md" className="block text-white/70 hover:text-green-400">Comprehensive Guide</Link>
                </div>
              </div>
              
              {/* Performance & Security */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Performance & Security</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/PERFORMANCE.md" className="block text-white/70 hover:text-purple-400">Performance Guide</Link>
                  <Link href="/SECURITY.md" className="block text-white/70 hover:text-purple-400">Security Guide</Link>
                  <Link href="/TESTING.md" className="block text-white/70 hover:text-purple-400">Testing Guide</Link>
                  <Link href="/DEPLOYMENT.md" className="block text-white/70 hover:text-purple-400">Deployment Guide</Link>
                </div>
              </div>
              
              {/* Latest Reports & Updates */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Latest Reports</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/reports/updates" className="block text-white/70 hover:text-yellow-400">All Updates</Link>
                  <Link href="/FINAL_PROJECT_STATUS_2025-01-17.md" className="block text-white/70 hover:text-yellow-400">Project Status</Link>
                  <Link href="/AUTOMATION_EXECUTION_SUMMARY.md" className="block text-white/70 hover:text-yellow-400">Execution Summary</Link>
                  <Link href="/EXPONENTIAL_GROWTH_AUTOMATION.md" className="block text-white/70 hover:text-yellow-400">Growth Automation</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Blog Content & Insights */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">✍️ Advanced Blog Content & AI Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link href="/blog/ai-automation-trends-2025" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2 text-center">AI Automation Trends 2025</h3>
                <p className="text-white/70 text-sm text-center">Latest insights into AI automation trends and future predictions</p>
              </Link>
              
              <Link href="/blog/autonomous-content-generation" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center">Autonomous Content Generation</h3>
                <p className="text-white/70 text-sm text-center">How AI agents create and manage content autonomously</p>
              </Link>
              
              <Link href="/blog/cloud-native-automation" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2 text-center">Cloud-Native Automation</h3>
                <p className="text-white/70 text-sm text-center">Building scalable automation systems in the cloud</p>
              </Link>
              
              <Link href="/blog/performance-optimization" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 text-center">Performance Optimization</h3>
                <p className="text-white/70 text-sm text-center">Advanced techniques for system performance optimization</p>
              </Link>
              
              <Link href="/blog/ai-ethics-automation" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">AI Ethics in Automation</h3>
                <p className="text-white/70 text-sm text-center">Ethical considerations in autonomous systems</p>
              </Link>
              
              <Link href="/blog/future-of-work" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔮</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2 text-center">Future of Work</h3>
                <p className="text-white/70 text-sm text-center">How automation is reshaping the future of work</p>
              </Link>
            </div>
          </section>

          {/* Technical Automation & Scripts Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔧 Technical Automation & Scripts Showcase</h2>
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
                <div className="space-y-2">
                  <Link href="/automation" className="block text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Explore Redundancy Systems →
                  </Link>
                  <Link href="/scripts" className="block text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    View Automation Scripts →
                  </Link>
                </div>
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
                <div className="space-y-2">
                  <Link href="/automation" className="block text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    Explore AI Systems →
                  </Link>
                  <Link href="/scripts" className="block text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    View AI Scripts →
                  </Link>
                </div>
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
                <div className="space-y-2">
                  <Link href="/automation" className="block text-green-400 hover:text-green-300 text-sm font-semibold">
                    Explore Build Systems →
                  </Link>
                  <Link href="/scripts" className="block text-green-400 hover:text-green-300 text-sm font-semibold">
                    View Build Scripts →
                  </Link>
                </div>
              </div>
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
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl">
                  Learn More
                </Link>
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

