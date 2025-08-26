import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Suspense, lazy } from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import FuturisticHero from '@/components/ui/FuturisticHero';
import { Search, TrendingUp, Users, CheckCircle } from 'lucide-react';

import { EnhancedCard } from '@/components/ui/EnhancedCard';


// Lazy load components for better performance
const LazyAnimatedBackground = lazy(() => import('@/components/ui/AnimatedBackground'));
const LazyFuturisticHero = lazy(() => import('@/components/ui/FuturisticHero'));


const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Zion Tech Group — AI-Powered Innovation & Automation Platform</title>
        <meta
          name="description"
          content="Leading AI-powered marketplace delivering cutting-edge technology solutions, intelligent automation systems, and expert talent. Transform your business with Zion's innovative services."
        />
        <meta name="keywords" content="AI, automation, technology solutions, cloud computing, cybersecurity, data analytics, machine learning, blockchain, IoT, quantum computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group — AI-Powered Innovation Platform" />
        <meta property="og:description" content="Leading AI-powered marketplace delivering cutting-edge technology solutions and intelligent automation systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group — AI-Powered Innovation Platform" />
        <meta name="twitter:description" content="Leading AI-powered marketplace delivering cutting-edge technology solutions and intelligent automation systems." />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "AI-powered marketplace delivering cutting-edge technology solutions and intelligent automation systems",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-ZION-TECH",
                "contactType": "customer service"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Hero Section with Enhanced Design */}
          <section className="text-center mb-16 sm:mb-20">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-purple-400/20 blur-lg opacity-75 animate-pulse"></div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems for the future.
            </p>
            
            {/* Enhanced Navigation Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
              <Link href="/about" className="group px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
                <span className="flex items-center gap-2">
                  <span>About Us</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link href="/services" className="group px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-fuchsia-400/50 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-400/25">
                <span className="flex items-center gap-2">
                  <span>Our Services</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link href="/services-2026" className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 border border-purple-400/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25">
                <span className="flex items-center gap-2">
                  <span>🚀 2026 Services</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link href="/case-studies" className="group px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-purple-400/50 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25">
                <span className="flex items-center gap-2">
                  <span>Case Studies</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="group px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-green-400/50 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25">
                <span className="flex items-center gap-2">
                  <span>Contact</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </section>

          {/* Lazy Loaded Animated Background */}
          <Suspense fallback={<div className="h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg animate-pulse" />}>
            <LazyAnimatedBackground className="pointer-events-none" />
          </Suspense>

          <div className="space-y-16 sm:space-y-20">
            {/* Enhanced Hero Section */}
            <Suspense fallback={<div className="h-96 bg-gradient-to-r from-indigo-700/20 via-fuchsia-600/20 to-cyan-600/20 rounded-lg animate-pulse" />}>
              <LazyFuturisticHero
                title="Zion — The AI‑Powered Marketplace"
                subtitle="Discover services, products, and expert talent. Automate workflows. Accelerate delivery."
                className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-cyan-600 text-white py-16 sm:py-20 shadow-2xl rounded-2xl overflow-hidden relative"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/services">
                      <a className="group px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50">
                        <span className="flex items-center gap-2">
                          <span>Explore Services</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    </Link>
                    <Link href="/products">
                      <a className="group px-8 py-4 rounded-xl bg-white/10 text-white border border-white/30 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
                        <span className="flex items-center gap-2">
                          <span>Browse Products</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    </Link>
                    <Link href="/talent">
                      <a className="group px-8 py-4 rounded-xl bg-white/10 text-white border border-white/30 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/50">
                        <span className="flex items-center gap-2">
                          <span>Hire Talent</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    </Link>
                    <Link href="/automation">
                      <a className="group px-8 py-4 rounded-xl bg-white/10 text-white border border-white/30 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                        <span className="flex items-center gap-2">
                          <span>Automation Dashboard</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="w-full max-w-2xl">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                      <input
                        type="text"
                        placeholder="Search services, products, and resources..."
                        className="w-full h-12 pl-10 pr-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && e.currentTarget.value) {
                            window.location.href = `/blog`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </LazyFuturisticHero>
            </Suspense>

            {/* Enhanced Stats Section */}
            <section className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                  <p className="text-white/80 font-semibold mb-2">Professional Services</p>
                  <p className="text-white/60 text-sm">AI, Cloud, Data, Security, DevOps, and more</p>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
                  <p className="text-white/80 font-semibold mb-2">Expert Resources</p>
                  <p className="text-white/60 text-sm">Guides, expert chats, and insights</p>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                  <p className="text-white/80 font-semibold mb-2">Automation Ready</p>
                  <p className="text-white/60 text-sm">Run workflows with the Automation Center</p>
                </div>
              </div>
            </section>

            {/* Enhanced Primary Destinations */}
            <section className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Build, Scale, and Automate
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <Link href="/services">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">AI & Engineering Services</h3>
                        <p className="text-gray-600 leading-relaxed">Custom AI development, cloud architecture, data platforms, cybersecurity, QA, and more.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/products">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Products & Solutions</h3>
                        <p className="text-gray-600 leading-relaxed">Ready-to-use accelerators, blueprints, and integrations to speed up delivery.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/talent">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Talent Marketplace</h3>
                        <p className="text-gray-600 leading-relaxed">Engage vetted experts for short-term projects or long-term partnerships.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Resources & Insights</h3>
                        <p className="text-gray-600 leading-relaxed">Deep dives, best practices, and expert perspectives for modern teams.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/automation">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Automation Control Center</h3>
                        <p className="text-gray-600 leading-relaxed">Schedule, run, and monitor automated workflows. Export reports anytime.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/auth">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Sign In / Account</h3>
                        <p className="text-gray-600 leading-relaxed">Access your dashboard, saved resources, and project workspaces.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
              </div>
            </section>

            {/* Enhanced Featured Capabilities */}
            <section className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Capabilities
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <Link href="/iot-platforms">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">IoT Platforms</h3>
                        <p className="text-gray-600 leading-relaxed">Design, connect, and scale device ecosystems with secure, reliable infrastructure.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/blockchain-solutions">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Blockchain Solutions</h3>
                        <p className="text-gray-600 leading-relaxed">Trusted identity, provenance, and automation with modern distributed systems.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
                <Link href="/about">
                  <a className="group">
                    <EnhancedCard className="group-hover:scale-105 transition-transform duration-300">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">About Zion</h3>
                        <p className="text-gray-600 leading-relaxed">Our vision, approach, and commitment to open, AI‑driven innovation.</p>
                      </div>
                    </EnhancedCard>
                  </a>
                </Link>
              </div>
            </section>

            {/* Enhanced Service Spotlights */}
            <section className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Service Spotlights
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <Link href="/services/ai-model-development-chat">
                  <a className="group">
                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">AI Model Development</h3>
                      <p className="text-white/70">Build, fine‑tune, and deploy models tailored to your use‑cases.</p>
                    </div>
                  </a>
                </Link>
                <Link href="/services/cloud-migration-services-chat">
                  <a className="group">
                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
                      <p className="text-white/70">Plan, move, and optimize workloads across clouds with confidence.</p>
                    </div>
                  </a>
                </Link>
                <Link href="/services/data-pipeline-engineering-chat">
                  <a className="group">
                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Data Engineering</h3>
                      <p className="text-white/70">Reliable pipelines and analytics platforms for real‑time insights.</p>
                    </div>
                  </a>
                </Link>
                <Link href="/services/network-security-chat">
                  <a className="group">
                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Network Security</h3>
                      <p className="text-white/70">Harden environments, protect data, and meet compliance.</p>
                    </div>
                  </a>
                </Link>
              </div>
            </section>

            {/* New Section: Innovation Highlights */}
            <section className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Innovation Highlights
                </span>
              </h2>
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing Solutions</h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      Pioneering quantum computing applications for cryptography, optimization, and machine learning. 
                      Our quantum solutions are designed to solve complex problems that classical computers cannot handle.
                    </p>
                    <Link href="/quantum-computing">
                      <a className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:scale-105">
                        <span>Explore Quantum Solutions</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <p className="text-white/80 font-medium">Quantum Innovation Hub</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* New Section: Trust & Security */}
            <section className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Trust & Security
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-white/70">SOC 2 Type II certified with enterprise-grade security protocols</p>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Blockchain Verified</h3>
                  <p className="text-white/70">Immutable audit trails and transparent operations</p>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-white/70">Vetted professionals with proven track records</p>
                </div>
              </div>
            </section>

            {/* New Section: Call to Action */}
            <section className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Join thousands of companies already leveraging Zion's AI-powered solutions to accelerate growth and innovation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <a className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                        Get Started Today
                      </a>
                    </Link>
                    <Link href="/case-studies">
                      <a className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        View Case Studies
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;