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
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and 2960+ pages of content. Experience the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and 2960+ pages of content." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="autonomous systems, AI automation, cloud-native, redundancy systems, intelligent orchestration, self-healing systems, continuous deployment" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <span className="animate-pulse">🚀</span>
                <span className="text-sm font-medium text-cyan-300">Autonomous Innovation Hub</span>
                <span className="animate-pulse">🚀</span>
              </div>
            </div>
            
            <h1 className="text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-3xl text-white/90 max-w-5xl mx-auto mb-8 leading-relaxed">
              The world's most advanced autonomous technology platform delivering cutting-edge AI solutions, intelligent automation systems, and the future of cloud-native infrastructure.
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl px-6 py-4 border border-cyan-400/30">
                <span className="text-3xl font-bold text-cyan-400">227+</span>
                <div className="text-sm text-cyan-200">Intelligent Automations</div>
              </div>
              <div className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl px-6 py-4 border border-fuchsia-400/30">
                <span className="text-3xl font-bold text-fuchsia-400">2,960+</span>
                <div className="text-sm text-fuchsia-200">Dynamic Pages</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl px-6 py-4 border border-green-400/30">
                <span className="text-3xl font-bold text-green-400">100%</span>
                <div className="text-sm text-green-200">Autonomous Operation</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-xl px-6 py-4 border border-yellow-400/30">
                <span className="text-3xl font-bold text-yellow-400">24/7</span>
                <div className="text-sm text-yellow-200">Self-Healing</div>
              </div>
            </div>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore AI Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey
              </Link>
            </div>
          </section>

          {/* Platform Overview & Statistics */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📊 Platform Overview & Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">227+ Automations</h3>
                <p className="text-white/70 text-sm">Autonomous agents & systems</p>
                <Link href="/automation" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">Explore →</Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">2960+ Pages</h3>
                <p className="text-white/70 text-sm">Dynamic content generation</p>
                <Link href="/reports" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">Browse →</Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">12 Components</h3>
                <p className="text-white/70 text-sm">Reusable UI elements</p>
                <Link href="/components" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">View →</Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">100% Autonomous</h3>
                <p className="text-white/70 text-sm">Self-running systems</p>
                <Link href="/automation-health" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">Monitor →</Link>
              </div>
            </div>
          </section>

          {/* Core Features & Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-5xl font-bold tracking-wide text-white/90 mb-4">🤖 Revolutionary Autonomous Systems</h2>
            <p className="text-center text-xl text-white/70 mb-12 max-w-4xl mx-auto">
              Experience the world's most sophisticated autonomous technology platform with self-learning, self-healing, and self-optimizing capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Ultimate Redundancy System */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Ultimate Redundancy System</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-layer redundancy architecture</li>
                  <li>• Automatic failover protection</li>
                  <li>• Self-repairing infrastructure</li>
                  <li>• Continuous health monitoring</li>
                  <li>• Geographic distribution</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/automation" className="text-cyan-400 text-sm hover:underline">Learn More →</Link>
                </div>
              </div>

              {/* AI-Powered Automation Engine */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI-Powered Automation Engine</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• 227+ autonomous agents</li>
                  <li>• Intelligent content generation</li>
                  <li>• Automated quality assurance</li>
                  <li>• Smart error recovery</li>
                  <li>• Predictive analytics</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/automation" className="text-fuchsia-400 text-sm hover:underline">Explore →</Link>
                </div>
              </div>

              {/* Self-Healing CI/CD Pipeline */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Self-Healing CI/CD Pipeline</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automatic build failure recovery</li>
                  <li>• Intelligent dependency management</li>
                  <li>• Real-time performance monitoring</li>
                  <li>• Automated testing & validation</li>
                  <li>• Smart rollback systems</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/automation-health" className="text-green-400 text-sm hover:underline">Monitor →</Link>
                </div>
              </div>

              {/* Comprehensive Monitoring Dashboard */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Comprehensive Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Real-time health metrics</li>
                  <li>• Predictive failure detection</li>
                  <li>• Automated issue resolution</li>
                  <li>• Performance optimization</li>
                  <li>• Security threat detection</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/live-dashboard" className="text-yellow-400 text-sm hover:underline">View →</Link>
                </div>
              </div>

              {/* Advanced Security Framework */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Advanced Security Framework</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automated security scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance monitoring</li>
                  <li>• Threat detection & response</li>
                  <li>• Zero-trust architecture</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/security" className="text-red-400 text-sm hover:underline">Secure →</Link>
                </div>
              </div>

              {/* Global Infrastructure Network */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Global Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-region deployment</li>
                  <li>• Edge computing optimization</li>
                  <li>• Global CDN integration</li>
                  <li>• Geographic redundancy</li>
                  <li>• Load balancing intelligence</li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/deployment" className="text-purple-400 text-sm hover:underline">Deploy →</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Technology Stack */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-5xl font-bold tracking-wide text-white/90 mb-4">⚡ Advanced Technology Stack</h2>
            <p className="text-center text-xl text-white/70 mb-12 max-w-4xl mx-auto">
              Built on cutting-edge technologies with enterprise-grade reliability and performance optimization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-xl p-6 border border-blue-400/30 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Next.js 15</h3>
                <p className="text-white/70 text-sm">React framework with SSR/SSG</p>
                <Link href="/performance" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">Performance →</Link>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-6 border border-green-400/30 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Docker & PM2</h3>
                <p className="text-white/70 text-sm">Container orchestration</p>
                <Link href="/deployment" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">Deploy →</Link>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-xl p-6 border border-purple-400/30 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Netlify Functions</h3>
                <p className="text-white/70 text-sm">Serverless backend services</p>
                <Link href="/api-documentation" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">API Docs →</Link>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/30 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">GitHub Actions</h3>
                <p className="text-white/70 text-sm">CI/CD automation</p>
                <Link href="/automation" className="text-cyan-400 text-xs hover:underline mt-2 inline-block">Automate →</Link>
              </div>
            </div>
          </section>

          {/* Autonomous Capabilities Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-5xl font-bold tracking-wide text-white/90 mb-4">🎯 Autonomous Capabilities Showcase</h2>
            <p className="text-center text-xl text-white/70 mb-12 max-w-4xl mx-auto">
              Discover the unprecedented power of our autonomous systems that work 24/7 to optimize, secure, and enhance your digital infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Zero-Downtime Operations</h3>
                    <p className="text-white/80">Our autonomous systems ensure 99.99% uptime with automatic failover, self-healing capabilities, and intelligent load balancing across global infrastructure.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">AI-Powered Innovation Engine</h3>
                    <p className="text-white/80">Leverage 227+ autonomous agents that continuously improve your systems, generate intelligent content, and optimize performance through machine learning.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Exponential Growth Architecture</h3>
                    <p className="text-white/80">Built for unlimited scaling with automatic resource allocation, intelligent caching, and global distribution that grows with your business needs.</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Self-Healing Systems</h3>
                <p className="text-white/70 text-sm">Automatic issue detection, resolution, and system optimization</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Proactive Intelligence</h3>
                    <p className="text-white/80">Real-time health monitoring with predictive analytics, automated issue resolution, and continuous optimization that prevents problems before they occur.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-white/80">Bank-grade security with automated threat detection, compliance monitoring, data protection, and zero-trust architecture that adapts to new threats.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Future-Ready Platform</h3>
                    <p className="text-white/80">Continuously evolving with cutting-edge technologies, autonomous system improvements, and adaptive architecture that stays ahead of industry trends.</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">AI-Powered Content</h3>
                <p className="text-white/70 text-sm">Automated content generation, optimization, and quality assurance</p>
              </div>
            </div>
          </section>

          {/* Comprehensive Navigation Hub */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔗 Explore Our Complete Platform</h2>
            
            {/* Main Navigation Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Our Mission</h3>
                <p className="text-white/70 text-sm">Discover our vision for autonomous technology</p>
                <p className="text-cyan-300/70 text-xs mt-2">Learn about our journey & goals</p>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl p-6 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI-Powered Services</h3>
                <p className="text-white/70 text-sm">Explore our intelligent solutions</p>
                <p className="text-fuchsia-300/70 text-xs mt-2">Cutting-edge AI capabilities</p>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resource Center</h3>
                <p className="text-white/70 text-sm">Tools, insights & documentation</p>
                <p className="text-blue-300/70 text-xs mt-2">Comprehensive knowledge base</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Success Stories</h3>
                <p className="text-white/70 text-sm">Real-world implementations</p>
                <p className="text-yellow-300/70 text-xs mt-2">Proven results & outcomes</p>
              </Link>
            </div>

            {/* Advanced Platform Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link href="/automation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Automation Hub</h3>
                <p className="text-white/70 text-sm">227+ autonomous systems</p>
              </Link>
              
              <Link href="/live-dashboard" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Live Dashboard</h3>
                <p className="text-white/70 text-sm">Real-time monitoring</p>
              </Link>
              
              <Link href="/component-library" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🧩</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Component Library</h3>
                <p className="text-white/70 text-sm">12 reusable components</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Blog & Insights</h3>
                <p className="text-white/70 text-sm">Latest technology trends</p>
              </Link>
              
              <Link href="/reports" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Reports & Analytics</h3>
                <p className="text-white/70 text-sm">Performance insights</p>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact & Support</h3>
                <p className="text-white/70 text-sm">Get in touch</p>
              </Link>
            </div>

            {/* Technical Documentation & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/api-documentation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">API Docs</h3>
                <p className="text-white/70 text-sm">Integration guides</p>
              </Link>
              
              <Link href="/performance" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Performance</h3>
                <p className="text-white/70 text-sm">Optimization metrics</p>
              </Link>
              
              <Link href="/testing" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Testing</h3>
                <p className="text-white/70 text-sm">Quality assurance</p>
              </Link>
              
              <Link href="/deployment" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Deployment</h3>
                <p className="text-white/70 text-sm">Infrastructure guides</p>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-4">🔄 Latest Autonomous Content</h2>
            <p className="text-center text-lg text-white/70 mb-8 max-w-3xl mx-auto">
              Fresh content generated by our autonomous AI systems, continuously updating and optimizing your experience.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mx-auto max-w-5xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future of Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join thousands of forward-thinking organizations leveraging our revolutionary AI-powered platform for unprecedented efficiency, innovation, and competitive advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Transformation
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Learn More
                </Link>
                <Link href="/automation" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Automation
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