/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export default function HomePage() {
  const repoBaseUrl = 'https://github.com/Zion-Holdings/zion.app';
  const repoDocsBase = `${repoBaseUrl}/blob/main`;
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI & Automation Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems. Transform your business with cutting-edge innovation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI development, automation, cloud infrastructure, machine learning, autonomous systems, technology consulting, DevOps, CI/CD, data analytics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-6">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Pioneering the future with 227+ active automations, AI-powered solutions, and cloud-native infrastructure
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Experience the future of technology with our comprehensive suite of autonomous systems, redundancy architectures, and intelligent automation solutions.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Pioneering the future with 227+ active automations, self-healing systems, and AI-powered innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-400 font-bold">227+</span> Autonomous Agents
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-fuchsia-400 font-bold">2960+</span> Dynamic Pages
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-blue-400 font-bold">12</span> Core Components
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-400 font-bold">100%</span> Autonomous
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">99.99%</span> Uptime
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-purple-400 font-bold">24/7</span> Monitoring
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-orange-400 font-bold">Zero</span> Downtime
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Services
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                View Case Studies
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                Get Started
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Active Automations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Pages Generated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-sm text-white/70">Core Components</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-white/70">Autonomous Operation</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-6">
                  Advanced machine learning models, natural language processing, computer vision, and autonomous decision-making systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Custom ML Models</li>
                  <li>• NLP & Computer Vision</li>
                  <li>• Predictive Analytics</li>
                  <li>• Autonomous AI Systems</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions with 227+ active automations for continuous operation and self-healing capabilities.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Process Automation</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Workflow Optimization</li>
                  <li>• Intelligent Orchestration</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting to help organizations navigate digital transformation and innovation.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Digital Transformation</li>
                  <li>• Technology Strategy</li>
                  <li>• Innovation Consulting</li>
                  <li>• Risk Assessment</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Key Advantages Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Autonomous Operation</h3>
                <p className="text-white/70 text-sm">Systems that run 24/7 without human intervention, continuously improving and adapting</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Enterprise Security</h3>
                <p className="text-white/70 text-sm">Bank-level security with automated threat detection and response systems</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Scalable Solutions</h3>
                <p className="text-white/70 text-sm">Cloud-native architecture that grows with your business needs</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Rapid Deployment</h3>
                <p className="text-white/70 text-sm">Automated CI/CD pipelines for faster time-to-market</p>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">⚛️</div>
                <div className="text-sm font-semibold">React/Next.js</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🤖</div>
                <div className="text-sm font-semibold">AI/ML</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">☁️</div>
                <div className="text-sm font-semibold">Cloud Native</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🔧</div>
                <div className="text-sm font-semibold">DevOps</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📊</div>
                <div className="text-sm font-semibold">Analytics</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🔒</div>
                <div className="text-sm font-semibold">Security</div>
              </div>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Project Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">📖 Core Documentation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="/README.md" className="text-blue-400 hover:text-blue-300">Main README</a> - Project overview</li>
                  <li>• <a href="/ARCHITECTURE.md" className="text-blue-400 hover:text-blue-300">Architecture Guide</a> - System design</li>
                  <li>• <a href="/API.md" className="text-blue-400 hover:text-blue-300">API Documentation</a> - Integration guide</li>
                  <li>• <a href="/DEPLOYMENT.md" className="text-blue-400 hover:text-blue-300">Deployment Guide</a> - Setup instructions</li>
                  <li>• <a href="/CONTRIBUTING.md" className="text-blue-400 hover:text-blue-300">Contributing Guide</a> - Development workflow</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🔧 Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="/README_ULTIMATE_REDUNDANCY.md" className="text-purple-400 hover:text-purple-300">Ultimate Redundancy</a> - System overview</li>
                  <li>• <a href="/README_COMPREHENSIVE_REDUNDANCY.md" className="text-purple-400 hover:text-purple-300">Comprehensive Redundancy</a> - Advanced features</li>
                  <li>• <a href="/README_PM2_REDUNDANCY_COMPLETE.md" className="text-purple-400 hover:text-purple-300">PM2 Redundancy</a> - Process management</li>
                  <li>• <a href="/README_GITHUB_ACTIONS.md" className="text-purple-400 hover:text-purple-300">GitHub Actions</a> - CI/CD automation</li>
                  <li>• <a href="/README_CONTINUOUS_OPERATION.md" className="text-purple-400 hover:text-purple-300">Continuous Operation</a> - Zero-downtime</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Advanced Features</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <a href="/SECURITY.md" className="text-green-400 hover:text-green-300">Security Guide</a> - Protection measures</li>
                  <li>• <a href="/TESTING.md" className="text-green-400 hover:text-green-300">Testing Guide</a> - Quality assurance</li>
                  <li>• <a href="/SERVICE_GENERATION_README.md" className="text-green-400 hover:text-green-300">Service Generation</a> - Auto-creation</li>
                  <li>• <a href="/ULTIMATE_REDUNDANCY_AUTOMATION_README.md" className="text-green-400 hover:text-green-300">Automation README</a> - System details</li>
                  <li>• <a href="/EXPONENTIAL_GROWTH_AUTOMATION.md" className="text-green-400 hover:text-green-300">Growth Automation</a> - Scaling systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
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
              <Link href="/reports" className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Reports <span className="ml-2">→</span>
              </Link>
            </div>
          </section>
          
          {/* Platform Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-8">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Learn about our mission, vision, and core values</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm">Discover our comprehensive AI and automation solutions</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Access tools, insights, and educational content</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">See real success stories and implementations</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Read our latest insights and industry analysis</p>
              </Link>

              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch to discuss your project needs</p>
              </Link>

              <div className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Search</h3>
                <p className="text-white/70 text-sm">Advanced search across all content</p>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-rose-400 mb-2">Mobile Ready</h3>
                <p className="text-white/70 text-sm">Responsive design for all devices</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the future of autonomous technology and discover how our AI-powered solutions can revolutionize your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  See Success Stories
                </Link>
              </div>
            </div>
          </section>

          {/* Advanced Automation Ecosystem */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔧 Advanced Automation Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Build & CI/CD Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Build & CI/CD Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Smart Build Orchestration</li>
                  <li>• Self-Healing CI/CD</li>
                  <li>• Automated Testing</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link href="/automation" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    Explore Build Systems →
                  </Link>
                </div>
              </div>

              {/* Content & SEO Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Content & SEO Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• AI Content Generation</li>
                  <li>• SEO Optimization</li>
                  <li>• Sitemap Generation</li>
                  <li>• Content Quality Analysis</li>
                  <li>• Automated Updates</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link href="/blog" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    Explore Content →
                  </Link>
                </div>
              </div>

              {/* Security & Compliance Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automated Security Scanning</li>
                  <li>• Vulnerability Assessment</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Threat Detection</li>
                  <li>• Security Reports</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link href="/security" className="text-red-400 hover:text-red-300 text-sm font-semibold">
                    Security Details →
                  </Link>
                </div>
              </div>

              {/* Monitoring & Analytics */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Monitoring & Analytics</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Real-time Performance</li>
                  <li>• Health Monitoring</li>
                  <li>• Predictive Analytics</li>
                  <li>• Automated Alerts</li>
                  <li>• Performance Reports</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link href="/reports" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                    View Reports →
                  </Link>
                </div>
              </div>

              {/* Marketing & Social Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📢</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Marketing & Social</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• LinkedIn Automation</li>
                  <li>• Instagram Marketing</li>
                  <li>• Content Distribution</li>
                  <li>• Social Media Sync</li>
                  <li>• Marketing Analytics</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link href="/marketing" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                    Marketing Tools →
                  </Link>
                </div>
              </div>

              {/* Infrastructure & DevOps */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Infrastructure & DevOps</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• PM2 Process Management</li>
                  <li>• Docker Orchestration</li>
                  <li>• Netlify Functions</li>
                  <li>• GitHub Actions</li>
                  <li>• Deployment Automation</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link href="/devops" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    DevOps Tools →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Blog Posts & Insights */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Latest Insights & Knowledge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-automation-trends-2025" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center">AI Automation Trends 2025</h3>
                <p className="text-white/70 text-sm text-center">Latest insights into AI automation</p>
              </Link>
              
              <Link href="/blog/autonomous-content-generation" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2 text-center">Autonomous Content Generation</h3>
                <p className="text-white/70 text-sm text-center">The future of content creation</p>
              </Link>
              
              <Link href="/blog/performance-optimization" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2 text-center">Performance Optimization</h3>
                <p className="text-white/70 text-sm text-center">Optimize your applications</p>
              </Link>
              
              <Link href="/blog/cloud-native-automation" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2 text-center">Cloud-Native Automation</h3>
                <p className="text-white/70 text-sm text-center">Modern cloud automation</p>
              </Link>
              
              <Link href="/blog/ai-ethics-automation" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 text-center">AI Ethics in Automation</h3>
                <p className="text-white/70 text-sm text-center">Ethical AI considerations</p>
              </Link>
              
              <Link href="/blog/future-of-work" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">The Future of Work</h3>
                <p className="text-white/70 text-sm text-center">Automation and human collaboration</p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                View All Blog Posts →
              </Link>
            </div>
          </section>

          {/* Project Documentation & Resources */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📖 Project Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Architecture</h3>
                <p className="text-white/70 text-sm">System design & structure</p>
                <Link href="/architecture" className="text-blue-400 hover:text-blue-300 text-sm font-semibold mt-2 inline-block">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Deployment</h3>
                <p className="text-white/70 text-sm">Deploy & scale guide</p>
                <Link href="/deployment" className="text-green-400 hover:text-green-300 text-sm font-semibold mt-2 inline-block">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">API Docs</h3>
                <p className="text-white/70 text-sm">Integration guides</p>
                <Link href="/api-documentation" className="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-2 inline-block">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Contributing</h3>
                <p className="text-white/70 text-sm">Join our community</p>
                <Link href="/contributing" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold mt-2 inline-block">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Performance & Testing Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Performance & Testing Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🧪 Testing & Quality</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automated Testing Suites</li>
                  <li>• Performance Testing</li>
                  <li>• Security Testing</li>
                  <li>• Quality Assurance</li>
                  <li>• Test Coverage Reports</li>
                </ul>
                <Link href="/testing" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Testing Details →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">📊 Performance Metrics</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Lighthouse Scores</li>
                  <li>• Core Web Vitals</li>
                  <li>• Load Time Optimization</li>
                  <li>• Resource Optimization</li>
                  <li>• Performance Monitoring</li>
                </ul>
                <Link href="/performance" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                  Performance Details →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🔍 Monitoring & Analytics</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Real-time Monitoring</li>
                  <li>• Health Checks</li>
                  <li>• Error Tracking</li>
                  <li>• Performance Analytics</li>
                  <li>• Automated Alerts</li>
                </ul>
                <Link href="/monitoring" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  Monitoring Details →
                </Link>
              </div>
            </div>
          </section>

        </main>
        
        {/* Enhanced Footer */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Platform</h3>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-cyan-400 transition-colors">AI Services</Link></li>
                  <li><Link href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                  <li><Link href="/resources" className="hover:text-cyan-400 transition-colors">Resources</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">Automation</h3>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/automation" className="hover:text-fuchsia-400 transition-colors">Automation Systems</Link></li>
                  <li><Link href="/reports" className="hover:text-fuchsia-400 transition-colors">Reports</Link></li>
                  <li><Link href="/blog" className="hover:text-fuchsia-400 transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-fuchsia-400 transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Technology</h3>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/api-documentation" className="hover:text-green-400 transition-colors">API Docs</Link></li>
                  <li><Link href="/component-library" className="hover:text-green-400 transition-colors">Components</Link></li>
                  <li><Link href="/performance" className="hover:text-green-400 transition-colors">Performance</Link></li>
                  <li><Link href="/security" className="hover:text-green-400 transition-colors">Security</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Connect</h3>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Get Started</Link></li>
                  <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                  <li><a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">GitHub</a></li>
                  <li><Link href="/reports" className="hover:text-yellow-400 transition-colors">Status</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm">
                © 2025 Zion Tech Group. The world's most advanced autonomous innovation hub. 
                <span className="text-cyan-400 font-semibold"> 227+ automations • 2960+ pages • 99.99% uptime</span>
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