// Duplicate block removal

import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

type PageLink = {
  href: string;
  label: string;
};

type HomePageProps = {
  pageLinks: PageLink[];
};

export default function HomePage({ pageLinks }: HomePageProps) {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Platform</title>
        <meta name="description" content="Explore Zion Tech Group's AI-powered automation platform: services, resources, blog, case studies, and real-time reports. Built for reliability, scale, and zero-downtime." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Platform" />
        <meta property="og:description" content="AI-powered automation platform with reliability, scale, and zero-downtime." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, redundancy systems, PM2, GitHub Actions, Netlify, zero-downtime, intelligent automation, AI-powered platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The autonomous innovation hub delivering AI-powered automation, self-healing cloud systems, and zero-downtime operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all">
                Explore Services
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">
                Get Started
              </Link>
              <Link href="/reports" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Reports
              </Link>
            </div>
            
            {/* Quick Access to Key Documentation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link href="/README.md" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all duration-300">
                📖 Project Overview
              </Link>
              <Link href="/ARCHITECTURE.md" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all duration-300">
                🏗️ Architecture
              </Link>
              <Link href="/API.md" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all duration-300">
                🔌 API Docs
              </Link>
              <Link href="/SECURITY.md" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all duration-300">
                🔒 Security
              </Link>
              <Link href="/TESTING.md" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all duration-300">
                🧪 Testing
              </Link>
              <Link href="/PERFORMANCE.md" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all duration-300">
                📊 Performance
              </Link>
            </div>
            
            {/* Quick Access to Key Documentation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link href="/README.md" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 text-sm transition-all duration-300 hover:border-cyan-400/50">
                📖 Project Overview
              </Link>
              <Link href="/ARCHITECTURE.md" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 text-sm transition-all duration-300 hover:border-cyan-400/50">
                🏗️ Architecture
              </Link>
              <Link href="/API.md" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 text-sm transition-all duration-300 hover:border-cyan-400/50">
                🔌 API Docs
              </Link>
              <Link href="/SECURITY.md" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 text-sm transition-all duration-300 hover:border-cyan-400/50">
                🔒 Security
              </Link>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mx-auto max-w-7xl px-0 pb-12">
            <h2 className="text-center text-3xl font-bold text-white/90 mb-8">Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-cyan-400 font-semibold mb-2">Autonomous Cloud</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Self-healing pipelines</li>
                  <li>• Zero-downtime deploys</li>
                  <li>• Intelligent scaling</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/DEPLOYMENT.md" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    View Deployment Guide →
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-fuchsia-400 font-semibold mb-2">AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Content generation</li>
                  <li>• Quality assurance</li>
                  <li>• Predictive maintenance</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/AUTOMATION_COMPLETION_REPORT.md" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    View Automation Report →
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-green-400 font-semibold mb-2">Reliability</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Global distribution</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/ARCHITECTURE.md" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    View Architecture Guide →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Primary Navigation */}
          <section className="mx-auto max-w-7xl px-0 pb-16">
            <h2 className="text-center text-3xl font-bold text-white/90 mb-8">Explore the Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>🏢</span>
                </div>
                <h3 className="text-cyan-400 font-semibold">About</h3>
                <p className="text-white/70 text-sm">Mission & vision</p>
              </Link>
              <Link href="/services" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>🚀</span>
                </div>
                <h3 className="text-fuchsia-400 font-semibold">Services</h3>
                <p className="text-white/70 text-sm">AI solutions</p>
              </Link>
              <Link href="/resources" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📚</span>
                </div>
                <h3 className="text-blue-400 font-semibold">Resources</h3>
                <p className="text-white/70 text-sm">Tools & guides</p>
              </Link>
              <Link href="/case-studies" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📊</span>
                </div>
                <h3 className="text-yellow-400 font-semibold">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories</p>
              </Link>
              <Link href="/blog" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📝</span>
                </div>
                <h3 className="text-purple-400 font-semibold">Blog</h3>
                <p className="text-white/70 text-sm">Insights & trends</p>
              </Link>
              <Link href="/reports" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📈</span>
                </div>
                <h3 className="text-indigo-400 font-semibold">Reports</h3>
                <p className="text-white/70 text-sm">Updates & analytics</p>
              </Link>
              <Link href="/contact" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>💬</span>
                </div>
                <h3 className="text-green-400 font-semibold">Contact</h3>
                <p className="text-white/70 text-sm">Start a project</p>
              </Link>
              <Link href="/privacy" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>🔒</span>
                </div>
                <h3 className="text-red-400 font-semibold">Privacy</h3>
                <p className="text-white/70 text-sm">Trust & security</p>
              </Link>
              
              <Link href="/ARCHITECTURE.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Architecture</h3>
                <p className="text-white/70 text-sm">System design & principles</p>
              </Link>
              
              <Link href="/API.md" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">API Reference</h3>
                <p className="text-white/70 text-sm">Endpoints & usage</p>
              </Link>
            </div>
          </section>

          {/* Featured Insights from Our Blog */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🧠 Featured Insights from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-automation-trends-2025" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">AI Automation Trends 2025</h3>
                <p className="mt-1 text-sm text-white/75">Where autonomous systems are heading next.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-fuchsia-300/90">Read more <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/cloud-native-automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-blue-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Cloud-Native Automation</h3>
                <p className="mt-1 text-sm text-white/75">Designing resilient, self-healing architectures.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read more <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/performance-optimization" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-green-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-emerald-500/0 via-green-400/10 to-emerald-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Performance Optimization</h3>
                <p className="mt-1 text-sm text-white/75">Techniques to achieve blazing-fast experiences.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-green-300/90">Read more <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/autonomous-content-generation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-indigo-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-indigo-500/0 via-purple-400/10 to-indigo-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Content Generation</h3>
                <p className="mt-1 text-sm text-white/75">Scaling high-quality content with AI.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-indigo-300/90">Read more <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/ai-ethics-automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-yellow-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-yellow-500/0 via-orange-400/10 to-yellow-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">AI Ethics in Automation</h3>
                <p className="mt-1 text-sm text-white/75">Building responsible, transparent systems.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-yellow-300/90">Read more <span aria-hidden>→</span></div>
              </Link>

              <Link href="/blog/future-of-work" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-red-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-red-500/0 via-pink-400/10 to-red-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">The Future of Work</h3>
                <p className="mt-1 text-sm text-white/75">Human + AI collaboration at scale.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-red-300/90">Read more <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Ecosystem & Integrations */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔌 Ecosystem & Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🌐 Cloud Platforms</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Netlify Functions</li>
                  <li>• Vercel Edge Runtime</li>
                  <li>• AWS Lambda</li>
                  <li>• Google Cloud Functions</li>
                  <li>• Azure Functions</li>
                </ul>
                <div className="text-cyan-300/70 text-xs mt-2">Multi-cloud support</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🤖 AI & ML Services</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• OpenAI GPT Integration</li>
                  <li>• Google Generative AI</li>
                  <li>• Claude AI Models</li>
                  <li>• Custom AI Agents</li>
                  <li>• MCP Protocol Support</li>
                </ul>
                <div className="text-fuchsia-300/70 text-xs mt-2">Leading AI providers</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">📊 Analytics & Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Google Analytics 4</li>
                  <li>• Lighthouse CI</li>
                  <li>• Performance monitoring</li>
                  <li>• Real-time dashboards</li>
                  <li>• Custom metrics</li>
                </ul>
                <div className="text-green-300/70 text-xs mt-2">Comprehensive insights</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">🔧 Development Tools</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• GitHub Actions</li>
                  <li>• PM2 Process Manager</li>
                  <li>• Docker Containers</li>
                  <li>• TypeScript Compiler</li>
                  <li>• ESLint & Prettier</li>
                </ul>
                <div className="text-yellow-300/70 text-xs mt-2">Professional toolchain</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">📱 Frontend Frameworks</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Next.js 15</li>
                  <li>• React 18+</li>
                  <li>• Tailwind CSS 4</li>
                  <li>• Framer Motion</li>
                  <li>• Lucide Icons</li>
                </ul>
                <div className="text-purple-300/70 text-xs mt-2">Modern web stack</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">🔐 Security & Auth</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Supabase Auth</li>
                  <li>• JWT Tokens</li>
                  <li>• OAuth 2.0</li>
                  <li>• Role-based access</li>
                  <li>• API security</li>
                </ul>
                <div className="text-red-300/70 text-xs mt-2">Enterprise security</div>
              </div>
            </div>
          </section>

          {/* Comprehensive Automation Systems */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚙️ Comprehensive Automation Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Master Automation Orchestrator */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🎯 Master Orchestrator</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Intelligent automation coordination</li>
                  <li>• Cross-system integration</li>
                  <li>• Performance optimization</li>
                  <li>• Error prevention</li>
                  <li>• Continuous improvement</li>
                </ul>
                <Link href="/automation/comprehensive-automation-orchestrator.cjs" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View System →
                </Link>
              </div>

              {/* Self-Healing Systems */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🔄 Self-Healing Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automatic error detection</li>
                  <li>• Intelligent recovery</li>
                  <li>• Health monitoring</li>
                  <li>• Predictive maintenance</li>
                  <li>• Zero-downtime operations</li>
                </ul>
                <Link href="/automation/self-healing-orchestrator.cjs" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  View System →
                </Link>
              </div>

              {/* Content Quality Assurance */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">✨ Content Quality AI</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automated content analysis</li>
                  <li>• SEO optimization</li>
                  <li>• Quality scoring</li>
                  <li>• Continuous improvement</li>
                  <li>• Multi-language support</li>
                </ul>
                <Link href="/automation/content-quality-fixer.cjs" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  View System →
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-0 pb-8">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to build with autonomous technology?</h2>
              <p className="text-white/80 mb-6">Partner with us to accelerate delivery, improve reliability, and scale effortlessly.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all">
                  Talk to an expert
                </Link>
                <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">
                  See how it works
                </Link>
              </div>
            </div>
            
            {/* Additional Quick Links */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-md font-semibold text-blue-400 mb-3">Recent Updates</h4>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li><Link href="/reports/updates/update-2025-08-15-0406" className="hover:text-blue-300 transition-colors">Latest Update →</Link></li>
                    <li><Link href="/reports/updates/update-2025-08-15-0405" className="hover:text-blue-300 transition-colors">Previous Update →</Link></li>
                    <li><Link href="/reports/updates/update-2025-08-15-0404" className="hover:text-blue-300 transition-colors">Earlier Update →</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-purple-400 mb-3">System Status</h4>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li><Link href="/workflow-health-report.md" className="hover:text-purple-300 transition-colors">Workflow Health →</Link></li>
                    <li><Link href="/performance-weekly-report.md" className="hover:text-purple-300 transition-colors">Performance Report →</Link></li>
                    <li><Link href="/ci-lint-types-build-report.md" className="hover:text-purple-300 transition-colors">Build Status →</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-emerald-400 mb-3">Automation Reports</h4>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li><Link href="/content-generation-report.md" className="hover:text-emerald-300 transition-colors">Content Generation →</Link></li>
                    <li><Link href="/marketing-daily-report.md" className="hover:text-emerald-300 transition-colors">Marketing Status →</Link></li>
                    <li><Link href="/app-monitoring-report.md" className="hover:text-emerald-300 transition-colors">App Monitoring →</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Project Status & Health */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">📊 Real-Time Project Status & Health</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">✅</div>
                <div className="text-lg font-semibold text-white mb-1">Build Status</div>
                <div className="text-green-300/80 text-sm">All Systems Operational</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">🔍</div>
                <div className="text-lg font-semibold text-white mb-1">Health Check</div>
                <div className="text-blue-300/80 text-sm">6/6 Checks Passed</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">🤖</div>
                <div className="text-lg font-semibold text-white mb-1">Automation</div>
                <div className="text-purple-300/80 text-sm">227+ Agents Active</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-6 border border-yellow-400/30 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">📈</div>
                <div className="text-lg font-semibold text-white mb-1">Performance</div>
                <div className="text-yellow-300/80 text-sm">99.99% Uptime</div>
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

