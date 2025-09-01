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
        <title>Zion Tech Group — Autonomous Innovation Hub | AI & Automation Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems. Experience the future of technology." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI development, automation, cloud infrastructure, machine learning, autonomous systems, technology consulting, DevOps, CI/CD, data analytics" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-6">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Experience the future with 227+ autonomous systems, AI-powered solutions, and self-healing infrastructure
            </p>
            
            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Services
              </Link>
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                Learn About Us
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
          </section>

          {/* Key Statistics & Achievements */}
          <section className="mx-auto max-w-7xl mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80 font-medium">Active Automations</div>
                <div className="text-cyan-300/70 text-sm mt-1">Self-running systems</div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 border border-fuchsia-400/30 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/80 font-medium">Generated Pages</div>
                <div className="text-fuchsia-300/70 text-sm mt-1">AI-powered content</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-white/80 font-medium">Uptime</div>
                <div className="text-green-300/70 text-sm mt-1">Redundant systems</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-6 border border-yellow-400/30 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-white/80 font-medium">Monitoring</div>
                <div className="text-yellow-300/70 text-sm mt-1">Autonomous operation</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Core Capabilities & Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Autonomous AI Systems</h3>
                <p className="text-white/70 mb-6">
                  Self-learning AI that operates independently, continuously improving and adapting without human intervention.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision Systems</li>
                  <li>• Predictive Analytics</li>
                </ul>
                <Link href="/services" className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Intelligent Automation</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                </ul>
                <Link href="/services" className="inline-block mt-4 text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud-Native Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Auto-scaling Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                  <li>• Disaster Recovery</li>
                </ul>
                <Link href="/services" className="inline-block mt-4 text-green-400 hover:text-green-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps Excellence</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                </ul>
                <Link href="/services" className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Advanced Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                </ul>
                <Link href="/services" className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-6">🔄</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Self-Healing Systems</h3>
                <p className="text-white/70 mb-6">
                  Intelligent systems that automatically detect, diagnose, and resolve issues without human intervention.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Auto-recovery</li>
                  <li>• Performance Monitoring</li>
                  <li>• Proactive Maintenance</li>
                  <li>• Continuous Optimization</li>
                </ul>
                <Link href="/services" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Platform Features */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Platform Features & Advantages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">🚀 Autonomous Operation</h3>
                  <p className="text-white/70">Our systems run independently 24/7, continuously learning and improving without human oversight.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">🔄 Redundant Architecture</h3>
                  <p className="text-white/70">Multiple backup systems ensure 99.9% uptime and seamless failover capabilities.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">📈 Scalable Infrastructure</h3>
                  <p className="text-white/70">Cloud-native design that automatically scales to meet your growing needs.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🔒 Enterprise Security</h3>
                  <p className="text-white/70">Bank-level security with automated threat detection and response systems.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">🤖 AI-Powered Insights</h3>
                  <p className="text-white/70">Advanced analytics and machine learning provide actionable business intelligence.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">⚡ Lightning Fast</h3>
                  <p className="text-white/70">Optimized performance with sub-second response times and intelligent caching.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">🌍 Global Reach</h3>
                  <p className="text-white/70">Multi-region deployment ensures fast access from anywhere in the world.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3">📱 Mobile Optimized</h3>
                  <p className="text-white/70">Responsive design that works perfectly on all devices and screen sizes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation & Quick Links */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm mb-3">Learn about our mission and vision</p>
                <div className="text-cyan-300/70 text-xs">Discover our story →</div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 backdrop-blur-xl rounded-xl p-6 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm mb-3">Discover our AI solutions</p>
                <div className="text-fuchsia-300/70 text-xs">View offerings →</div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-xl rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm mb-3">Access tools and insights</p>
                <div className="text-blue-300/70 text-xs">Browse resources →</div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm mb-3">See real success stories</p>
                <div className="text-yellow-300/70 text-xs">View results →</div>
              </Link>
            </div>
          </section>

          {/* Additional Navigation */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">More Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog & Insights</h3>
                <p className="text-white/70 text-sm">Read our latest insights and industry trends</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact Us</h3>
                <p className="text-white/70 text-sm">Get in touch to discuss your project</p>
              </Link>
              
              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Privacy & Security</h3>
                <p className="text-white/70 text-sm">Learn about our security practices</p>
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Generated Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-white/70">Autonomous Operation</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI & Machine Learning</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Advanced AI systems with autonomous learning, natural language processing, and predictive analytics that continuously improve without human intervention.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Autonomous Learning Systems</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision & Recognition</li>
                  <li>• Predictive Analytics & Forecasting</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Autonomous Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Autonomous Automation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Self-running automation systems that monitor, maintain, and optimize themselves across development, deployment, and operations.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Self-Healing Infrastructure</li>
                  <li>• Continuous Integration/Deployment</li>
                  <li>• Automated Testing & Quality Control</li>
                  <li>• Intelligent Resource Management</li>
                </ul>
                <Link href="/automation" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                  Explore Automation <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Cloud-Native Architecture */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Cloud-Native Architecture</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Scalable, resilient cloud infrastructure with auto-scaling, load balancing, and intelligent resource optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Auto-Scaling Infrastructure</li>
                  <li>• Load Balancing & Distribution</li>
                  <li>• Intelligent Resource Management</li>
                  <li>• Multi-Cloud Redundancy</li>
                </ul>
                <Link href="/resources" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
                  View Resources <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Comprehensive Redundancy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Comprehensive Redundancy</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Multi-layered redundancy systems ensuring 99.9% uptime with automatic failover, backup systems, and disaster recovery.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Multi-Layer Failover Systems</li>
                  <li>• Automated Disaster Recovery</li>
                  <li>• Real-Time Health Monitoring</li>
                  <li>• Zero-Downtime Deployments</li>
                </ul>
                <Link href="/redundancy" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  Learn About Redundancy <span className="ml-2">→</span>
                </Link>
              </div>

              {/* DevOps & CI/CD */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">DevOps & CI/CD</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Streamlined development pipelines with automated testing, building, deployment, and monitoring for rapid, reliable software delivery.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Automated CI/CD Pipelines</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Automated Testing & Validation</li>
                  <li>• Performance Monitoring</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  View DevOps Services <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Data Analytics */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Data Analytics</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Advanced analytics and business intelligence solutions that transform raw data into actionable insights and predictive models.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Real-Time Data Processing</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence Dashboards</li>
                  <li>• Machine Learning Insights</li>
                </ul>
                <Link href="/resources" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  Explore Analytics <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Solutions Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Featured Solutions
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI-Powered Manufacturing */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🏭</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-medium">Featured Case Study</div>
                    <div className="text-2xl font-bold text-cyan-400">40%</div>
                    <div className="text-sm text-white/70">Efficiency Increase</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Manufacturing Automation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Revolutionized manufacturing processes with autonomous AI systems for predictive maintenance, quality control, and production optimization.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">IoT Sensors</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Predictive Analytics</span>
                  </div>
                  <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Content Generation Scale */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">✍️</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-medium">Featured Case Study</div>
                    <div className="text-2xl font-bold text-fuchsia-400">10x</div>
                    <div className="text-sm text-white/70">Content Output</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scaling Content Generation 10x</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Transformed content creation through autonomous AI systems with human oversight and quality control, achieving unprecedented scale.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full">NLP</span>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">SEO Automation</span>
                    <span className="px-3 py-1 bg-pink-400/20 text-pink-400 text-xs rounded-full">Analytics</span>
                  </div>
                  <Link href="/case-studies" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Advanced Technology Stack
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">React 18</h3>
                <p className="text-sm text-white/70">Modern UI Framework</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🟢</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Node.js 20</h3>
                <p className="text-sm text-white/70">Runtime Environment</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔷</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">TypeScript</h3>
                <p className="text-sm text-white/70">Type-Safe Development</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Tailwind CSS</h3>
                <p className="text-sm text-white/70">Utility-First CSS</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Netlify</h3>
                <p className="text-sm text-white/70">Cloud Platform</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">OpenAI GPT</h3>
                <p className="text-sm text-white/70">AI Integration</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Supabase</h3>
                <p className="text-sm text-white/70">Backend Services</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">PM2</h3>
                <p className="text-sm text-white/70">Process Manager</p>
              </div>
            </div>
          </section>

          {/* Quick Navigation Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Explore Our Platform
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm mb-4">Discover our mission, vision, and the team behind Zion Tech Group</p>
                <div className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm mb-4">Explore our comprehensive AI, automation, and technology solutions</p>
                <div className="text-fuchsia-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Services →
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm mb-4">Access tools, whitepapers, and insights for your AI journey</p>
                <div className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Browse Resources →
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

          {/* Latest Autonomous Content Section */}
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
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the autonomous technology revolution and discover what's possible with AI-powered innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105">
                  View Services
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
