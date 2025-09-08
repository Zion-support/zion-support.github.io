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
        <title>Zion Tech Group — Autonomous Innovation Hub & AI Automation Platform</title>
        <meta name="description" content="Leading-edge autonomous technology solutions, AI automation systems, cloud infrastructure, and intelligent innovation platforms. 227+ automations, 2960+ pages, comprehensive redundancy systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI Automation Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions, AI automation systems, cloud infrastructure, and intelligent innovation platforms." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="autonomous systems, AI automation, cloud-native, redundancy systems, intelligent orchestration, self-healing systems, continuous deployment" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-400 font-medium">227+ Active Automations</span>
              </div>
            </div>
            
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced autonomous innovation hub delivering cutting-edge AI solutions, 
              intelligent automation systems, and cloud-native infrastructure with self-healing capabilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                Explore Platform
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/50">
                View Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 border border-fuchsia-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/25">
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-white/70 text-sm">Active Automations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-fuchsia-400">2960+</div>
                <div className="text-white/70 text-sm">Generated Pages</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-white/70 text-sm">Core Components</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
            </div>
          </section>

          {/* Core Features Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary Platform Features
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Autonomous Systems */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">Autonomous AI Systems</h3>
                    <p className="text-white/70">Self-running intelligent agents</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    AI-powered content generation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Autonomous error monitoring & fixing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Intelligent orchestration systems
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Self-healing automation networks
                  </li>
                </ul>
                <Link href="/automation" className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition-colors">
                  Explore Automation <span>→</span>
                </Link>
              </div>

              {/* Redundancy & Reliability */}
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fuchsia-400">Ultimate Redundancy</h3>
                    <p className="text-white/70">Multi-layer failover systems</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    PM2 process management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    GitHub Actions redundancy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    Netlify functions backup
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    Continuous health monitoring
                  </li>
                </ul>
                <Link href="/redundancy" className="inline-flex items-center gap-2 mt-6 text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Learn More <span>→</span>
                </Link>
              </div>

              {/* Cloud Infrastructure */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">Cloud-Native Platform</h3>
                    <p className="text-white/70">Scalable & resilient infrastructure</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Next.js 13+ with App Router
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Netlify edge functions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Automated deployments
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Global CDN distribution
                  </li>
                </ul>
                <Link href="/deployment" className="inline-flex items-center gap-2 mt-6 text-green-400 hover:text-green-300 transition-colors">
                  View Infrastructure <span>→</span>
                </Link>
              </div>

              {/* AI & Machine Learning */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400">AI & ML Capabilities</h3>
                    <p className="text-white/70">Intelligent automation & insights</p>
                  </div>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Content generation & optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Trend analysis & research
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Predictive maintenance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Natural language processing
                  </li>
                </ul>
                <Link href="/ai" className="inline-flex items-center gap-2 mt-6 text-yellow-400 hover:text-yellow-300 transition-colors">
                  Discover AI <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Comprehensive Service Portfolio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Development</h3>
                <p className="text-white/70 text-sm">Custom machine learning models, NLP, computer vision, and predictive analytics solutions</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Automation Systems</h3>
                <p className="text-white/70 text-sm">End-to-end process automation, workflow optimization, and RPA solutions</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Cloud Infrastructure</h3>
                <p className="text-white/70 text-sm">Scalable cloud solutions with automated deployment and optimization</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">DevOps & CI/CD</h3>
                <p className="text-white/70 text-sm">Streamlined development pipelines with automated testing and deployment</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Data Analytics</h3>
                <p className="text-white/70 text-sm">Advanced analytics, BI solutions, and real-time dashboards</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Technology Consulting</h3>
                <p className="text-white/70 text-sm">Strategic technology guidance and digital transformation expertise</p>
              </Link>

              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-teal-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-300 mb-2">Privacy</h3>
                <p className="text-white/70 text-sm">Our privacy commitment</p>
              </Link>

              <a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <p className="text-white/70 text-sm">View the repository</p>
              </a>
            </div>
          </section>

          {/* Advanced Automation Systems Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🤖 Advanced Automation Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Redundancy Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <Link href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Explore Redundancy Systems →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                </ul>
                <Link href="/services" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  Explore AI Systems →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build & Deploy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <Link href="/services" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Explore Build Systems →
                </Link>
              </div>
            </div>
          </section>

          {/* Technology & Infrastructure Deep Dive */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏗️ Technology & Infrastructure Deep Dive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Development Tools</h3>
                <p className="text-white/70 text-sm">TypeScript, ESLint, Husky</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Monitoring</h3>
                <p className="text-white/70 text-sm">Performance, Health, Analytics</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Deployment</h3>
                <p className="text-white/70 text-sm">Netlify, PM2, Docker</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Security</h3>
                <p className="text-white/70 text-sm">Scanning, Compliance, Protection</p>
              </div>
            </div>
          </section>

          {/* Automation Scripts & Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚙️ Automation Scripts & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Redundancy Orchestration</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2 System</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Auto-Sync & Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/automation" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold block">
                    Explore Systems →
                  </Link>
                  <Link href="/README_ULTIMATE_REDUNDANCY_V2.md" className="text-cyan-400/70 hover:text-cyan-300 text-xs font-semibold block">
                    Documentation →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI & Content Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Content Generation Systems</li>
                  <li>• AI Trends Research</li>
                  <li>• Marketing Sync Automation</li>
                  <li>• SEO Optimization</li>
                  <li>• Performance Monitoring</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/automation" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold block">
                    Explore AI Systems →
                  </Link>
                  <Link href="/AUTOMATION_COMPLETION_REPORT.md" className="text-fuchsia-400/70 hover:text-fuchsia-300 text-xs font-semibold block">
                    Completion Report →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build & Health Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Build Failure Recovery</li>
                  <li>• Pre-Build Health Checks</li>
                  <li>• Continuous Build Monitoring</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/automation" className="text-green-400 hover:text-green-300 text-sm font-semibold block">
                    Explore Build Systems →
                  </Link>
                  <Link href="/README_BUILD_AUTOMATION.md" className="text-green-400/70 hover:text-green-300 text-xs font-semibold block">
                    Build Docs →
                  </Link>
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
                  <li>• <a href={`${repoBaseUrl}/README.md`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Main README</a> - Project overview</li>
                  <li>• <a href={`${repoBaseUrl}/ARCHITECTURE.md`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Architecture Guide</a> - System design</li>
                  <li>• <a href={`${repoBaseUrl}/API.md`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">API Documentation</a> - Integration guide</li>
                  <li>• <a href={`${repoBaseUrl}/DEPLOYMENT.md`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Deployment Guide</a> - Setup instructions</li>
                  <li>• <a href={`${repoBaseUrl}/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Contributing Guide</a> - Development workflow</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🔧 Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href={`${repoBaseUrl}/README_ULTIMATE_REDUNDANCY.md`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Ultimate Redundancy</a> - System overview</li>
                  <li>• <a href={`${repoBaseUrl}/README_COMPREHENSIVE_REDUNDANCY.md`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Comprehensive Redundancy</a> - Advanced features</li>
                  <li>• <a href={`${repoBaseUrl}/README_PM2_REDUNDANCY_COMPLETE.md`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">PM2 Redundancy</a> - Process management</li>
                  <li>• <a href={`${repoBaseUrl}/README_GITHUB_ACTIONS.md`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub Actions</a> - CI/CD automation</li>
                  <li>• <a href={`${repoBaseUrl}/README_CONTINUOUS_OPERATION.md`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Continuous Operation</a> - Zero-downtime</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Advanced Features</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href={`${repoBaseUrl}/SECURITY.md`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Security Guide</a> - Protection measures</li>
                  <li>• <a href={`${repoBaseUrl}/TESTING.md`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Testing Guide</a> - Quality assurance</li>
                  <li>• <a href={`${repoBaseUrl}/SERVICE_GENERATION_README.md`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Service Generation</a> - Auto-creation</li>
                  <li>• <a href={`${repoBaseUrl}/README_ULTIMATE_REDUNDANCY_AUTOMATION.md`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Automation README</a> - System details</li>
                  <li>• <a href={`${repoBaseUrl}/EXPONENTIAL_GROWTH_AUTOMATION.md`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Growth Automation</a> - Scaling systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
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
              <Link href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                View All Reports →
              </Link>
            </div>
          </section>

          {/* Project Documentation & Reports Hub */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📋 Project Documentation & Reports Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">📊 Performance & Health</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Performance Weekly Reports</li>
                  <li>• Lighthouse Live Reports</li>
                  <li>• Workflow Health Reports</li>
                  <li>• Accessibility Audit Reports</li>
                  <li>• Performance Budgets</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/performance-weekly-report.md" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold block">
                    Performance Reports →
                  </Link>
                  <Link href="/lighthouse-live-report.md" className="text-cyan-400/70 hover:text-cyan-300 text-xs font-semibold block">
                    Lighthouse Reports →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🤖 AI & Automation Reports</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Content Factory Reports</li>
                  <li>• Content Generation Reports</li>
                  <li>• AI Changelog Reports</li>
                  <li>• Agent Performance Reports</li>
                  <li>• Automation Status</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/ai-content-factory-report.md" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold block">
                    AI Reports →
                  </Link>
                  <Link href="/AUTOMATION_EXECUTION_SUMMARY.md" className="text-fuchsia-400/70 hover:text-fuchsia-300 text-xs font-semibold block">
                    Execution Summary →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Deployment & CI/CD</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Continuous Deployment Reports</li>
                  <li>• GitHub Actions Reports</li>
                  <li>• Build & Lint Reports</li>
                  <li>• Dependency Reports</li>
                  <li>• Deployment Status</li>
                </ul>
                <div className="space-y-2">
                  <Link href="/continuous-deployment-report.md" className="text-green-400 hover:text-green-300 text-sm font-semibold block">
                    Deployment Reports →
                  </Link>
                  <Link href="/ci-lint-types-build-report.md" className="text-green-400/70 hover:text-green-300 text-xs font-semibold block">
                    CI/CD Reports →
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the revolution in autonomous technology. Discover how our AI-powered platform can transform your business operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/50">
                  View Success Stories
                </Link>
              </div>
            </div>
          </section>

          {/* Comprehensive Project Documentation & Resources */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Comprehensive Project Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🏗️ Architecture & Design</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• System Architecture Overview</li>
                  <li>• Technology Stack Details</li>
                  <li>• Infrastructure Design</li>
                  <li>• Scalability Patterns</li>
                  <li>• Security Architecture</li>
                </ul>
                <Link href="/architecture" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Architecture Docs →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🔧 Development & Testing</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Development Guidelines</li>
                  <li>• Testing Strategies</li>
                  <li>• Code Quality Standards</li>
                  <li>• Performance Benchmarks</li>
                  <li>• Best Practices</li>
                </ul>
                <Link href="/testing" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  View Development Docs →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Deployment & Operations</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Deployment Strategies</li>
                  <li>• Monitoring & Alerting</li>
                  <li>• Incident Response</li>
                  <li>• Performance Optimization</li>
                  <li>• Operational Procedures</li>
                </ul>
                <Link href="/deployment" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  View Operations Docs →
                </Link>
              </div>
            </div>
          </section>

          {/* Advanced Automation Capabilities Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Advanced Automation Capabilities Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Redundancy Systems</h3>
                <p className="text-white/70 text-sm">Ultimate, Comprehensive & PM2</p>
                <Link href="/automation" className="text-blue-400 hover:text-blue-300 text-xs font-semibold mt-2 block">
                  Explore →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">AI Orchestration</h3>
                <p className="text-white/70 text-sm">Intelligent Automation</p>
                <Link href="/automation" className="text-green-400 hover:text-green-300 text-xs font-semibold mt-2 block">
                  Explore →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Health Monitoring</h3>
                <p className="text-white/70 text-sm">Real-time Analytics</p>
                <Link href="/automation" className="text-purple-400 hover:text-purple-300 text-xs font-semibold mt-2 block">
                  Explore →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Build Systems</h3>
                <p className="text-white/70 text-sm">Smart Orchestration</p>
                <Link href="/automation" className="text-yellow-400 hover:text-yellow-300 text-xs font-semibold mt-2 block">
                  Explore →
                </Link>
              </div>
            </div>
          </section>

          {/* Blog & Content Hub */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">✍️ Blog & Content Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-automation-trends-2025" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Automation Trends 2025</h3>
                <p className="text-white/70 text-sm">Latest insights into AI automation</p>
              </Link>
              
              <Link href="/blog/autonomous-content-generation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Autonomous Content Generation</h3>
                <p className="text-white/70 text-sm">The future of content creation</p>
              </Link>
              
              <Link href="/blog/performance-optimization" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Performance Optimization</h3>
                <p className="text-white/70 text-sm">Maximizing system efficiency</p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                View All Blog Posts →
              </Link>
            </div>
          </section>

          {/* Project Statistics & Achievements */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏆 Project Statistics & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80 text-sm">Intelligent Automations</div>
                <div className="text-cyan-400/70 text-xs mt-2">Autonomous Agents</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2960+</div>
                <div className="text-white/80 text-sm">Dynamic Pages</div>
                <div className="text-fuchsia-400/70 text-xs mt-2">Auto-Generated Content</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-white/80 text-sm">Uptime</div>
                <div className="text-green-400/70 text-xs mt-2">Zero-Downtime Operations</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-white/80 text-sm">Core Components</div>
                <div className="text-yellow-400/70 text-xs mt-2">Modular Architecture</div>
              </div>
            </div>
          </section>

          {/* Enhanced Call to Action with More Options */}
          <section className="text-center mx-auto max-w-6xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of organizations leveraging our revolutionary AI-powered platform for unprecedented efficiency, innovation, and zero-downtime operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </Link>
                <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Learn More
                </Link>
                <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Services
                </Link>
                <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Resources
                </Link>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-4">Connect with us on social media for the latest updates</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                    <span className="text-xl">🐦</span>
                  </a>
                  <a href="#" className="text-white/60 hover:text-fuchsia-400 transition-colors duration-300">
                    <span className="text-xl">💼</span>
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-300">
                    <span className="text-xl">📧</span>
                  </a>
                </div>
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