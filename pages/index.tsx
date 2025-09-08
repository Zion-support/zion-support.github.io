import React from 'react';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group - Innovative Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, quantum computing, and enterprise technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ErrorBoundary level="page">
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-16">
        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI, quantum computing, and enterprise-grade technology solutions that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-blue-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300">
                Advanced AI solutions that automate processes, enhance decision-making, and unlock new possibilities for your business.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-purple-400 text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300">
                Revolutionary quantum computing solutions that solve complex problems beyond the reach of classical computers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-green-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300">
                Quantum-resistant security solutions that protect your data and systems from emerging threats.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-300">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and artifacts across hubs.' },
              { title: 'Futuristic UI', desc: 'Neon, animated, holographic surfaces with tilt and beams.' },
              { title: 'Cloud Automations', desc: 'Scheduled functions that replace GitHub Actions.' },
              { title: 'Edge‑Optimized', desc: 'Global performance with smart bundling and caching.' },
            ].map((f) => (
              <article key={f.title} className="group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">How it works</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['Discover', 'Scan code, issues, UX, and ops signals'],
              ['Plan', 'Draft safe, high‑impact improvements'],
              ['Apply', 'Open edits with conservative diffs'],
              ['Validate', 'Audit builds, links, a11y, and performance'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-xs text-white/70">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
              { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' },
              { title: 'Front Systems', desc: 'Futuristic front with animated templates and layouts.' },
              { title: 'Automation Hub', desc: 'Orchestrate cloud agents and review outputs.' },
              { title: 'Reports & Insights', desc: 'Health, SEO and AI trend dashboards.' },
            ].map((c) => (
              <article key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/75">{c.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Futuristic Templates */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Futuristic Templates</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Beautiful, animated surfaces and layouts ready to accelerate front‑of‑house experiences.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Front Systems Hub</h3>
              <p className="mt-1 text-sm text-white/75">Explore comprehensive templates, effects, and layouts.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Automation‑Driven UI</h3>
              <p className="mt-1 text-sm text-white/75">Live promos and content curated by continuous automations.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <a href="/.netlify/functions/front-enhancer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">On‑Demand Front Enhancer</h3>
              <p className="mt-1 text-sm text-white/75">Trigger the curator now and see updates flow to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* New Autonomous Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/innovation-scout" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Innovation Scout</h3>
              <p className="mt-1 text-sm text-white/75">AI trends radar that feeds homepage promos in near‑real time.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/content-curator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">LLM Content Curator</h3>
              <p className="mt-1 text-sm text-white/75">Curates useful links and content, commits, and updates the front.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/knowledge-graph-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Knowledge Graph</h3>
              <p className="mt-1 text-sm text-white/75">Auto‑rebuilds the repository knowledge graph and radar metrics.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/code-health-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Code Health Orchestrator</h3>
              <p className="mt-1 text-sm text-white/75">Dead code, links, and assets optimized with auto‑push to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/security-audit-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Security Audit</h3>
              <p className="mt-1 text-sm text-white/75">Automated security scanning with artifacts committed to the repo.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/media-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Media Orchestrator</h3>
              <p className="mt-1 text-sm text-white/75">OG image refresh and automated media releases.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
              'Discoverable features with deep links across the app',
              'Futuristic UX that boosts engagement and clarity',
              'Netlify scheduled automations (no GitHub Actions needed)',
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/services"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>
            </div>
          </div>
        </section>

        {/* Futuristic Spotlight */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Zion</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Dive into the hubs and reports that showcase our features, capabilities, and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Front Systems Hub', desc: 'A curated, futuristic front experience.', href: '/main/front' },
              { title: 'Automation Hub', desc: 'Factories, agents, and live workflows.', href: '/automation' },
              { title: 'Site Health', desc: 'A11y, performance, and link integrity.', href: '/site-health' },
              { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Ecosystem signals that inspire new factories.', href: '/reports/ai-trends' },
              { title: 'Newsroom', desc: 'Autonomous updates and product evolution.', href: '/newsroom' },
              { title: 'Cloud Automations', desc: 'Netlify scheduled jobs powering the platform.', href: '/automation' },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </section>
 
        {/* Automation Engine — New Tools */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Engine — New Tools</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Now powered by scheduled cloud functions — no GitHub Actions required. Live homepage promos, health checks, and link integrity run automatically.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Frontpage Enhancer', desc: 'Auto‑advertises features and refreshes homepage content hourly.', href: '/.netlify/functions/frontpage-enhancer' },
              { title: 'Link & Health Scheduler', desc: 'Runs link checks, health scans, and sitemap updates every 6h.', href: '/.netlify/functions/link-and-health-scheduler' },
                            { title: 'Marketing & Features Promo', desc: 'Regenerates homepage promos and deep links every 2h.', href: '/.netlify/functions/marketing-and-features-promo' },
              { title: 'Revenue Ideas Orchestrator', desc: 'Generates monetization proposals and components; syncs to main.', href: '/.netlify/functions/revenue-agents-runner' },
               { title: 'Front Enhancer (fast)', desc: 'Runs front improvements every 10 minutes.', href: '/.netlify/functions/front-enhancer' },
              { title: 'Homepage Advertiser', desc: 'Pushes fresh highlights every 15 minutes.', href: '/.netlify/functions/homepage_advertiser' },
              { title: 'Cloud Orchestrator', desc: 'Coordinates broader agents on a 4h cadence.', href: '/.netlify/functions/cloud_orchestrator' },
              { title: 'Fast Orchestrator (1m)', desc: 'Continuously refreshes front + homepage and commits to main every minute.', href: '/.netlify/functions/fast-orchestrator' },
              { title: 'Continuous Orchestrator (5m)', desc: 'Runs a lightweight pipeline including sitemap and UI futurizer.', href: '/.netlify/functions/continuous-orchestrator' },
              { title: 'Front Maximizer', desc: 'High‑frequency auto‑advertising and futurizing every 5m.', href: '/.netlify/functions/front-maximizer' },
              { title: 'Continuous Front Runner', desc: 'Ultra‑fast subset runner every 3m.', href: '/.netlify/functions/continuous-front-runner' },
              { title: 'README Advertiser', desc: 'Refresh README and docs indexes every 6h.', href: '/.netlify/functions/readme-advertiser' },
              { title: 'Features/Capabilities/Benefits Advertiser (2m)', desc: 'Continuously advertises new features with deep links on the front pages.', href: '/.netlify/functions/features-capabilities-benefits-advertiser' },
              { title: 'Hyper Front Index Accelerator (1m)', desc: 'Ultra-fast front index futurizer and directory builder.', href: '/.netlify/functions/hyper-front-index-accelerator' },
              { title: 'Dead Code Report', desc: 'Scans the codebase and updates reports with dead and unused code.', href: '/.netlify/functions/dead-code-report' },
              { title: 'Security Audit Runner', desc: 'Runs security checks and commits actionable findings.', href: '/.netlify/functions/security-audit-runner' },
              { title: 'Docs Index Runner', desc: 'Refreshes docs indexes and README for better discovery.', href: '/.netlify/functions/docs-index-runner' },
              { title: 'Repo Knowledge Graph', desc: 'Regenerates the repository knowledge graph and radar metrics.', href: '/.netlify/functions/repo-knowledge-graph-runner' },
              { title: 'Image Optimizer', desc: 'Optimizes media assets for performance and quality.', href: '/.netlify/functions/image-optimizer-runner' },
              { title: 'AI Changelog Runner', desc: 'Generates human-friendly release notes automatically.', href: '/.netlify/functions/ai-changelog-runner' },
              { title: 'Newsroom Runner', desc: 'Publishes autonomous product updates to the newsroom.', href: '/.netlify/functions/newsroom-runner' },
              { title: 'TODO Scanner', desc: 'Generates a consolidated TODO report and dashboard.', href: '/.netlify/functions/todo-scanner-runner' },
              { title: 'Broken Image Scanner', desc: 'Detects broken images and proposes or applies fixes.', href: '/.netlify/functions/broken-image-scanner-runner' },
              { title: 'External Link Check', desc: 'Crawls external links and opens fixes for rot and redirects.', href: '/.netlify/functions/external-link-check-runner' },
              { title: 'OG Image Update', desc: 'Regenerates Open Graph images for rich social sharing.', href: '/.netlify/functions/og-image-update-runner' },
              { title: 'Docs Search Index', desc: 'Refreshes the site search index for instant discovery.', href: '/.netlify/functions/docs-search-index-runner' },
              { title: 'Netlify Auto‑Healer', desc: 'Monitors and self-heals Netlify deploy issues.', href: '/.netlify/functions/netlify-auto-healer-runner' },
              { title: 'Innovation Lab (10m)', desc: 'Invents, curates, and promotes fresh ideas across the site.', href: '/.netlify/functions/innovation-lab' },
              { title: 'Autonomous Innovation Generator (2m)', desc: 'Synthesizes front promos and homepage refresh, then syncs to main.', href: '/.netlify/functions/autonomous-innovation-generator' },
              { title: 'Innovation Generator (30m)', desc: 'Synthesizes new promos, updates homepage, and syncs to main.', href: '/.netlify/functions/innovation-generator' },
              { title: 'Dependency Health Runner (daily)', desc: 'Auto-upgrades dependencies safely and syncs.', href: '/.netlify/functions/dependency-health-runner' },
              { title: 'Changelog Publisher', desc: 'Publishes AI-generated changelog and commits updates.', href: '/.netlify/functions/changelog-publisher' },
              { title: 'Auto Scheduler (15m)', desc: 'Smart time-based runner that chooses and executes the best tasks.', href: '/.netlify/functions/auto-scheduler' },
              { title: 'Broken Image Scanner (6h)', desc: 'Finds broken images, optimizes assets, and syncs fixes.', href: '/.netlify/functions/broken-image-scanner' },
              { title: 'Automation Guardian (10m)', desc: 'Runs improvement, orchestrators, quick fixes and syncs to main.', href: '/.netlify/functions/automation-guardian-runner' },
              { title: 'Auto Discovery Runner (30m)', desc: 'Discovers and runs high‑value orchestrators autonomously.', href: '/.netlify/functions/auto-discovery-runner' },
              { title: 'Cloud Autonomous Orchestrator (15m)', desc: 'Runs cloud orchestrations, then syncs and rebuilds.', href: '/.netlify/functions/cloud-autonomous-orchestrator-runner' },
              { title: 'Smart Redirect Manager', desc: 'Fixes internal 404s by auto-adding redirects; writes a public report.', href: '/.netlify/functions/redirect-manager' },
              { title: 'A11y Alt-Text Auditor', desc: 'Scans for missing alt text and publishes a report.', href: '/.netlify/functions/a11y-audit-runner' },
              { title: 'Branch Cleanup Runner (daily)', desc: 'Deletes merged or stale ephemeral branches via GitHub API.', href: '/.netlify/functions/branch-cleanup-runner' },
              { title: 'Redirect Healer', desc: 'Heals broken internal links by auto-adding smart redirects.', href: '/.netlify/functions/redirect-healer' },
              { title: 'Sitemap Prioritizer', desc: 'Regenerates sitemap with popularity-weighted priorities.', href: '/.netlify/functions/sitemap-prioritizer' },
              { title: 'Dependency Licenses Audit', desc: 'Audits dependency licenses and writes public reports.', href: '/.netlify/functions/dependency-licenses-audit' },
              { title: 'Tech Debt Dashboard', desc: 'Scans TODO/FIXME/HACK across the repo; publishes a dashboard.', href: '/.netlify/functions/tech-debt-dashboard' },
            ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>

        {/* AUTO-GENERATED: HOME_UPDATER_START */}
 <section className="mx-auto max-w-7xl px-6 pb-16">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>
            <Link href="/reports/competitive-intel"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Competitive Intelligence — market signals</span></a></Link>
            <Link href="/reports/performance-budget"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Performance Budget — largest assets</span></a></Link>
            <Link href="/reports/ai-trends"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI Trends — strategy signals</span></a></Link>
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
            <Link href="/.netlify/functions/docs-index-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Docs — technical notes & guides</span></a></Link>
  
   </div>
 </section>
   {/* AUTO-GENERATED: HOME_UPDATER_END */}
  
         {/* AUTO-GENERATED: HOME_VISIONARY_START */}

        <section id="home-visionary" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Visionary Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Futuristic templates, animated backgrounds, and deep links — continuously curated by cloud functions.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <a key="Front Visionary Expander" href="/.netlify/functions/front-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Front Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Enhances main/front with animated sections and deep links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Home Visionary Expander" href="/.netlify/functions/home-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Home Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Refreshes homepage highlights and links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Continuous Orchestrator" href="/.netlify/functions/continuous-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Continuous Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Runs multi‑tool refresh and sitemap on a fast cadence.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">

            <Link href="/main/front#features"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Features — explore capabilities</span></a></Link>

            <a href="/.netlify/functions/knowledge-and-innovation" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Knowledge & Innovation — Graphs, newsroom, changelogs (3h)</span></a>

            <a href="/.netlify/functions/guardian-security-fast" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Guardian Security — Security and integrity scans (6h)</span></a>

            <a href="/.netlify/functions/autonomous-factory-expander" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Autonomous Factory Expander — Front factories and OG images (30m)</span></a>

  </div>
</section>
/* AUTO-GENERATED: HOME_UPDATER_END */}
 </main>
    </div>
  );
}